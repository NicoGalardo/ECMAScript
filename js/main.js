class Product {
    constructor(title, description, price, thumbnail, code, stock) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }
  }
  
  class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Verificar si el código ya está en uso
      if (this.products.some(product => product.code === code)) {
        throw new Error("El código de producto ya está en uso.");
      }
  
      const product = new Product(title, description, price, thumbnail, code, stock);
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.code === id);
      if (!product) {
        throw new Error("Producto no encontrado.");
      }
      return product;
    }
  }
  
  // Ejemplo de uso:
  const manager = new ProductManager();
  
  // Agregar un producto
  manager.addProduct("Producto de prueba", "Este es un producto de prueba", 200, "Sin imagen", "abc123", 25);
  
  // Obtener la lista de productos
  const productsList = manager.getProducts();
  console.log("Lista de productos:", productsList);
  
  // Agregar un producto con el mismo código (debe arrojar un error)
  try {
    manager.addProduct("Otro producto", "Otro producto de prueba", 150, "Otra imagen", "abc123", 10);
  } catch (error) {
    console.error("Error al agregar producto duplicado:", error.message);
  }
  
  // Obtener un producto por código
  try {
    const product = manager.getProductById("abc123");
    console.log("Producto encontrado:", product);
  } catch (error) {
    console.error("Error al obtener producto por código:", error.message);
  }
  