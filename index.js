class ProductManager {
    static contadorId = 0;

    constructor(title,description,price,thumbnail,code,stock) {
        this.products = [];
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    addProduct = () => {
        this.products.push({title,description,price,thumbnail,code,stock})
        if (title === "" && description === "" && price === "" && thumbnail === "" && code === "" && stock === "") {
            console.log("Complete todos los campos por favor")
            return false;

        }
        const listado = [...new Set(this.products)];
        ProductManager.contadorId++;
        
    }
    getProducts = () => {
        return this.products;
    }
    getProductById = () => {
        if (id === id) {
            return id
        }
    }; else() {
        console.log("Not found")
    }
}
const producto1 = new ProductManager ("Id:1", "Motorola G71", "Colores mas vibrantes, full HD+, OLED, 6.4 pulgadas, DCI-P3, rango de colores 25% mas amplio","$60.999","https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/g/7/g71-verde-frente.png","G71","50");
const producto2 = new ProductManager ("Id:2", "Motorola G22", "Colores mas vibrantes, full HD+, OLED, 6.4 pulgadas, DCI-P3, rango de colores 25% mas amplio","$59.999","https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/g/7/g71-verde-frente.png","G22","30");
const producto3 = new ProductManager ("Id:3", "Motorola E40", "Colores mas vibrantes, full HD+, OLED, 6.4 pulgadas, DCI-P3, rango de colores 25% mas amplio","$52.999","https://tienda.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/g/7/g71-verde-frente.png","E40","10");

console.log (this.products)
