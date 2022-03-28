let name = "Tom";

function sayName() {
    console.log(`My name is ${name}`);
}

export function sayHello(name) {
    console.log(`Hello ${name}`);
}

function sayBye(name) {
    console.log(`Bye ${name}`);
}

export {
    sayBye
};