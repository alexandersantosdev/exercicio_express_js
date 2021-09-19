class ProductService {

  products = [
    { id: 1, name: 'Arroz', price: 11.50, stock: 50 },
    { id: 2, name: 'Feijão', price: 7.95, stock: 50 },
    { id: 3, name: 'Óleo de soja', price: 6.12, stock: 50 },
    { id: 4, name: 'Trigo', price: 12.25, stock: 50 },
    { id: 5, name: 'Margarina', price: 6.65, stock: 50 }
  ];

  getAll() {

    return {
      productsInStock: this.products.reduce((total, product) => { return total + product.stock }, 0),
      allStockValue: this.products.reduce((total, product) => { return total + this.sumTotal(product.price, product.stock) }, 0),
      products: this.products
    };
  }

  getOne(id) {
    const product = this.products.find(x => x.id == id);
    return {
      totalStockValue: this.sumTotal(product.price, product.stock),
      product
    };
  }

  createPoduct(product) {
    const id = this.products.length + 1;
    let productToCreate = {
      id,
      name: product.name,
      price: product.price,
      stock: product.stock
    }
    this.products.push(productToCreate);
    return {
      totalStockValue: this.sumTotal(productToCreate.price, productToCreate.stock),
      product: productToCreate
    }
  }

  updateProduct(id, product) {
    const products = this.products.filter(x => x.id != id)
    let productToUpdate = {
      id,
      name: product.name,
      price: product.price,
      stock: product.stock
    }
    products.push(productToUpdate);
    this.products = products;
    return {
      totalStockValue: this.sumTotal(productToUpdate.price, productToUpdate.stock),
      product: productToUpdate
    }
  }

  deleteProduct(id) {
    this.products = this.products.filter(pdt => pdt.id != id);
  }

  sumTotal = (price, stock) => price * stock;

}


module.exports = new ProductService();