import { Animal } from './Animal';
import { AnimalType } from './AnimalType';

class Cat extends Animal {
    constructor(name: string) {
        super(AnimalType.Cat, name);
    }

    rename(newName: string) {
        console.log(`form 9 filed for ${super.getName()} being renamed to ${newName}`);
        super.rename(newName);
    }
}

export { Cat };