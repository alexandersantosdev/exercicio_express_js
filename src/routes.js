const { Router } = require('express');
const productController = require('./controllers/productController');
const router = new Router();


router.get('/', productController.getAll); 
router.get('/:id', productController.getProduct); 
router.post('/', productController.createProduct); 
router.put('/:id', productController.updateProduct); 
router.delete('/:id', productController.deleteProduct); 

module.exports = router;