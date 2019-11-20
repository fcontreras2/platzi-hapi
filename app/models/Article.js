const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: 'string', 
  description: 'string'
});

export default mongoose.model('Article', schema);