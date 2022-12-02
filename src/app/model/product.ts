export class Product {
  id!: number;
  name!: string;
  brand!: string;
  quantity!: number;

  constructor(name: string, brand: string, quantity: number) {
    this.id = Math.round(Math.random() * 1000);
    this.name = name;
    this.brand = brand;
    this.quantity = quantity;
  }
}
