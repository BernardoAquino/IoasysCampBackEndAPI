const Developer = require('../models/Developer');
const repository = require('../repositories/DeveloperRepository');
const mongoose = require('mongoose');

module.exports = {
  store: async ({ name, email, github, age, techs }) => {
    let errors = [];

    if (!name || name === '') {
      errors.push('Nome é obrigatorio');
    }

    if (!email || email === '') {
      errors.push('Email é obrigatório');
    } else {
      const devWithEmail = await Developer.findOne({ email });

      if (devWithEmail) {
        errors.push('Email já cadastrado no sistema');
      }
    }

    if (errors.length > 0) {
      return { success: false, errors };
    }

    const developer = await repository.createUser({
      name,
      email,
      github,
      age,
      techs
    });

    return { success: true, developer };
  },

  show: async (id) => {
    let errors = [];

    if (!mongoose.isValidObjectId(id)) {
      errors.push('ID inválido');
    }

    if (errors.length > 0) {
      return { success: false, errors };
    }

    const developer = await repository.showUser(id);

    if(developer) {
      return { success: true, developer };
    }

    errors.push('User not exist');
    return { errors };
  },

  update: async (id, dados) => {
    let errors = [];

    if (!mongoose.isValidObjectId(id)) {
      errors.push('ID inválido');
    }

    if (errors.length > 0) {
      return { success: false, errors };
    }

    const developer = await repository.updateUser(id, dados);

    if(developer) {
      return { success: true, developer };
    }

    errors.push('User not exist');
    return { errors };
  },

  delete: async (id) => {
    let errors = [];

    if (!mongoose.isValidObjectId(id)) {
      errors.push('ID inválido');
    }

    if (errors.length > 0) {
      return { success: false, errors };
    }

    const developer = await repository.deleteUser(id);

    if(developer) {
      return { success: true, developer };
    }

    errors.push('User not exist');
    return { errors };
  }
};