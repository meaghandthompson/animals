import { Animal } from "./Animal";
import { AnimalType } from "./AnimalType";

let testCat = new Animal(AnimalType.Cat, "Flopsy");
let testDog = new Animal(AnimalType.Dog, "Rover");

describe("Animal", () => {
    beforeEach(() => {
        testCat = new Animal(AnimalType.Cat, "Flopsy");
        testDog = new Animal(AnimalType.Dog, "Rover");
    });
    

    it("can be renamed", () => {
        expect(testCat.getName()).toBe("Flopsy");
        testCat.rename("Molly");
        expect(testCat.getName()).toBe("Molly");
    });

    it("can return its name", () => {
        expect(testCat.getName()).toBe("Flopsy");
    });

    it("can get its type name", () => {
        expect(testCat.getAnimalTypeName()).toBe("cat");
        expect(testDog.getAnimalTypeName()).toBe("dog");
    });
});

