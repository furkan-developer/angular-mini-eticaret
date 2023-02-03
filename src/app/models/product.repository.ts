import { Product } from "./product";

export class ProductRepository{

  private products: Product[] = [
    {id: 1, productName: "Product 1", price: 20000, imgUrl: "../../assets/phone.jpg", isActive: true, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe incidunt est velit illum aliquid voluptatibus a officiis numquam mollitia quisquam?"},
    {id: 2, productName: "Product 2", price: 30000, imgUrl: "../../assets/phone.jpg", isActive: false, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe incidunt est velit illum aliquid voluptatibus a officiis numquam mollitia quisquam?"},
    {id: 3, productName: "Product 3", price: 40000, imgUrl: "../../assets/phone.jpg", isActive: true, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe incidunt est velit illum aliquid voluptatibus a officiis numquam mollitia quisquam?"},
    {id: 4, productName: "Product 4", price: 50000, imgUrl: "../../assets/phone.jpg", isActive: true, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe incidunt est velit illum aliquid voluptatibus a officiis numquam mollitia quisquam?"},
    {id: 4, productName: "Product 4", price: 50000, imgUrl: "../../assets/phone.jpg", isActive: true, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe incidunt est velit illum aliquid voluptatibus a officiis numquam mollitia quisquam?"},
  ]

  getProducts():Product[]{
    return this.products.filter(p => p.isActive);
  }

}
