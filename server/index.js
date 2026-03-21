// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
