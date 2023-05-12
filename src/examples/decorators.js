
//target =>se refiere a quien pertenece el decorado. a la clase Example
//propertykey => representa el metodo de la propiedad o metodo decorado
//descriptor=>objeto que contiene informacion sobre el metodo decorado

function uppercase(target, propertyKey, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {

    const result = originalMethod.apply(this, args);

    if (typeof result === 'string') {
      return result.toUpperCase();
    }

    return result;
  };
  return descriptor;
}

class Example {
  @uppercase
  greet(name) {
    return `Hello, ${name}!`;
  }
}

const example = new Example();
console.log(example.greet('John')); // Output: HELLO, JOHN!
