import { ListaItem } from './lista-item';

export class Listas {
    name: string;
    isComplete: boolean;
    items: ListaItem[];

    constructor(name: string) {
        this.name = name;
        this.isComplete = false;
    }
}