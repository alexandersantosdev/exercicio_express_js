const productServices = require('../services/ProductServices');


module.exports = {
  async getAll(req, res) {
    const products = await productServices.getAll()
    return res.status(200).json(products);
  },

  async getProduct(req, res) {
    const id = parseInt(req.params.id);
    const product = await productServices.getOne(id);
    return res.status(200).json(product);
  },

  async createProduct(req, res) {
    const product = req.body;
    const createdProduct = await productServices.createPoduct(product);
    return res.status(201).json(createdProduct);
  },

  async deleteProduct(req, res) {
    const id = parseInt(req.params.id);
    await productServices.deleteProduct(id);
    return res.status(204).json({});
  },

  async updateProduct(req, res) {
    const id = parseInt(req.params.id);
    const product = req.body;
    const updatedProduct = await productServices.updateProduct(id, product);
    return res.status(200).json(updatedProduct);
  }
}