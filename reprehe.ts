class Individual {
  private id: number;
  private name: string;
  private age: number;
  private address: string;

  constructor(id: number, name: string, age: number, address: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getAddress(): string {
    return this.address;
  }
}
