const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: 'string', 
  lastName: 'string'
});

export default mongoose.model('User', schema);