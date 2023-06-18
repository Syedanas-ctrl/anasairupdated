export class Meal {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public starter: string,
    public desert: string,
    public price: number,
    public image: string,
  ) {}
}
