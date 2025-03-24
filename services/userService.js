const userModel = require('../models/userModel');

const listarUsuarios = async() => {
    return await userModel.find()
}

const listarUsuarioPorId = async(id) => {
    try {
        const user = await userModel.findOne({_id: id});
        if (!user) {
            throw new Error("Este id '"+ id +"' não está cadastrado.");
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const inserirUsuario = async(user) => {

    try {
        if ((user.email || user.name) == null) {
            throw new Error("Nome e email são obrigatórios.");
        }

        const existingUser = await userModel.findOne({ email: user.email });
        if (existingUser) {
            throw new Error("Este email '"+ user.email +"' já está cadastrado.");
        }

        return await userModel.create(user);
    } catch (error) {
        throw new Error(error.message);
    }
}

const deletarUsuarioPorId = async(id) => {
    try {
        const user = await userModel.findOneAndDelete({_id: id});
        if (!user) {
            throw new Error("Este id '"+ id +"' não está cadastrado.");
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const alterarUsuarioPorid = async(userId, data) => {
    try {
        if (userId == null) {
            throw new Error("ID do usuário é obrigatório.");
        }

        if ((data.name && data.email) != null) {
            throw new Error("Pelo menos um campo deve ser atualizado.");
        }

        // ✅ Primeiro, buscamos o usuário
        const user = await userModel.findById(userId);

        // ✅ Depois verificamos se ele existe
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }

        return await userModel.findByIdAndUpdate(userId, data, { new: true });
    } catch (error) {
        throw new Error(error.message);
    }
}


module.exports = {
  listarUsuarios,
  listarUsuarioPorId,
  inserirUsuario,
  deletarUsuarioPorId,
  alterarUsuarioPorid
};