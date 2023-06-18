export class Order {
  constructor(
    public id: string,
    public items: string[],
    public passengerId: string,
    public price: number,
  ) {}
}
