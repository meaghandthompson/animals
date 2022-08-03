import { Animal } from './Animal';
import { AnimalType } from './AnimalType';

class Dog extends Animal {
    constructor(name: string) {
        super(AnimalType.Dog, name);
    }

    rename(newName: string) {
        console.log(`form 13 filed for ${super.getName()} being renamed to ${newName}`);
        super.rename(newName);
    }
}

export { Dog };