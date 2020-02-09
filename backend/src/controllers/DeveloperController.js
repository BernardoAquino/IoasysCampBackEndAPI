const Developer = require('../models/Developer');
const Service = require('../services/DeveloperService');

module.exports = {
  index: async (req, res) => {
    const developers = await Developer.find();
    return res.json(developers);
  },

  show: async (req, res) => {
    const { id } = req.params;

    const data = await Service.show(id);

    if(data.success) {
      return res.status(200).json(data.developer);
    }
    return res.status(422).json({ errors: data.errors });
  },

  store: async (req, res) => {
    const { name, email, github, age, techs } = req.body;

    const data = await Service.store({ name, email, github, age, techs });

    if (data.success) {
      return res.status(201).json(data.developer);
    }

    return res.status(404).json({ errors: data.errors });
  },

  update: async (req, res) => {
    const { ...dados} = req.body;
    const { id } = req.params;

    const data = await Service.update(id, dados);

    if (data.success) {
      return res.status(200).json(data.developer);
    }
    return res.status(400).json({ errors: data.errors });
  },

  destroy: async (req, res) => {
    const { id } = req.params;

    const data = await Service.delete(id);

    if(data.success) {
      return res.status(200).json(data.developer);
    }
    return res.status(400).json({ errors: data.errors });
  }
};