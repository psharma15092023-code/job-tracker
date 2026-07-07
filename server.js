const express=require('express');
const cors = require("cors");

const Job=require('./models/Job');
const mongoose= require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});
const app=express();
app.use(cors());
app.use(express.json());
app.post('/jobs', async (req, res) => {
    try {
        console.log("Received:", req.body);

        const job = await Job.create(req.body);

        console.log("Saved:", job);

        res.status(201).json(job);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: error.message
        });
    }
});
app.get('/jobs', async (req, res) => {

    const jobs = await Job.find();

    res.json(jobs);

});
app.put("/jobs/:id", async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.delete("/jobs/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.listen(5000,()=>{console.log('server is running on part 5000')});