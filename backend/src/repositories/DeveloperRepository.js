const Developer = require('../models/Developer');

module.exports = {
  createUser: async userData => {
    return await Developer.create(userData);
  },

  showUser: async id => {
    return await Developer.findById(id);
  },

  updateUser: async (id, userData) => {
    return await Developer.findByIdAndUpdate(id, userData);
  },

  deleteUser: async id => {
    return await Developer.findByIdAndDelete(id);
  }
};