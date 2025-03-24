const userModel = require('../models/userModel');
const service = require('../services/userService')

const listarUsuarios = async (req, res) => {
  try {
    res.status(200)
      .json(await service.listarUsuarios());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const listarUsuarioPorId = async (req, res) => {
  try {
    res.status(200)
      .json(await service.listarUsuarioPorId(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const inserirUsuario = async (req, res) => {
  try {
    const {nome, idade, email} = req.body;

    res.status(201)
      .json(await service.inserirUsuario(new userModel({nome, idade, email})));
      
  } catch (erro) {
    res.status(500).json(erro.message);
  }
}

const deletarUsuarioPorId = async (req, res) => {
  try {
    res.status(200)
      .json(await service.deletarUsuarioPorId(req.params.id));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const alterarUsuarioPorid = async (req, res) => {
  try {
    res.status(200)
      .json(await service.alterarUsuarioPorid(req.params.id, req.body));
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  listarUsuarios,
  listarUsuarioPorId,
  inserirUsuario,
  deletarUsuarioPorId,
  alterarUsuarioPorid
};