const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/onlinebidding';

console.log('Connecting to:', CONNECTION_URI);

mongoose
  .connect(CONNECTION_URI, {
    useNewUrlParser: true,     // ✅ Required for new MongoDB drivers
    useUnifiedTopology: true,  // ✅ Add this for better connection handling
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ Error connecting to MongoDB:', err));

module.exports = { mongoose };
