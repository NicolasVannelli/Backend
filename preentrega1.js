class ProductManager {

    constructor() {
        this.products = [];

    }
    getProducts() {
        return this.products;
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            throw new Error(`Ya existe un producto con el código "${code}". El código debe ser único.`);
        }

        const producto = {
            id: this.getId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        this.products.push(producto);
    }
    getProductById(id) {
        const products = this.products.filter(product => product.id === id);
        if (products.length === 0) {
            throw new Error(`No se encontraron productos con el ID "${id}".`);
        }
        return products;    }
    
    getId() {
        if (this.products.length === 0) return 1;

        return this.products[this.products.length - 1].id + 1
    }

}
const PM = new ProductManager();
console.log(PM.getProducts());

PM.addProduct("producto prueba","Este es un producto prueba",200,"sin imagen", "abc123", 25)
console.log(PM.getProducts())