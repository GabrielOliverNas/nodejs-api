const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  idade: {
    type: Number,
    required: true
  }
});

// Criando o modelo a partir do esquema
const User = mongoose.model('user', userSchema);

module.exports = User;