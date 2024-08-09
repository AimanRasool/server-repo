const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors({
  origin:["https://client-repo.vercel.app"],
  methods:"POST",
  credentials:true
}));
app.use(express.json());

const PORT = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const userRoutes =require ('./routes/userRoutes.js');
app.use('/api', userRoutes);
app.use('/api', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
