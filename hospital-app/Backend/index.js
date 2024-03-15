const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors'); // Enable CORS for frontend requests
const bcrypt = require('bcrypt'); // For secure password hashing
const validator = require('validator'); // For basic password validation

const app = express()

mongoose.connect('mongodb://localhost:27017/Hospital')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email format'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Enforce a minimum password length
    validate: {
      validator: validator.isStrongPassword,
      message: 'Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and symbols'
    }
  }
});

// Hash password before saving user
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Configure body-parser middleware
app.use(bodyParser.json());

app.use(cors({
  origin: ['http://localhost:3000'] 
}));

app.post('/Signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email already in use');
    }

    const user = new User({ email, password });
    await user.save();

    res.status(201).send('User created successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(3009,()=> {
  console.log("Server is running")
})