import { AnimalType } from "./AnimalType";

/**
 * Describes an animal.
 * 
 * Animals have both a type and a name.
 */
class Animal {
    /**
     * Initializes a new instance of animal.
     * 
     * @param animalType The type of the animal. 
     * @param name The name of the animal.
     */
    constructor(animalType: AnimalType, name: string) {
        this.animalType = animalType;
        this.name = name;
    }
    
    /**
     * Makes the animal drink.
     */
    drink() {
        console.log(`The ${this.getAnimalTypeName()} called ${this.name} drinks`);
    }

    /**
     * Renames the animal.
     * 
     * @param {string} newName The new name of the animal.
     */
    rename(newName: string) {
        console.log(`${this.name} was renamed to ${newName}`);
        this.name = newName;
    }

    /**
     * Returns the animal name.
     * 
     * @returns The animal name.
     */
    getName() {
        return this.name;
    }

    /**
     * Gets a string representing the animal type for printing.
     * 
     * @returns A string representation of the animal type.
     */
    getAnimalTypeName() {
        switch (this.animalType) {
            case AnimalType.Cat:
                return "cat";
            case AnimalType.Dog:
                return "dog";
        }
    }

    private animalType: AnimalType;
    private name: string = "unnamed";
}

export { Animal };