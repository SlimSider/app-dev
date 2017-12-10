export class Storage {
    id: number;
    name: string;
    color: string;
    size: string;
    price: number;

    constructor(id?: number, name?: string, color?: string, size?: string, price?: number) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.size = size;
        this.price = price;

    }
}
