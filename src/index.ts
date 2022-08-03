import { Cat } from './Cat';
import { Dog } from './Dog';

const socks = new Cat("Socks");
socks.drink();

const rex = new Dog("Rex");
rex.drink();

const felix = new Cat("Felix");
felix.rename("Clawd");
felix.drink();