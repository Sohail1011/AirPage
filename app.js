const consumer = {
    name: 'Clara',
    lastName: 'Luistrer',
    vacation: 'Bahamas',
    days: 7
}

console.log(consumer);

// 1ra forma de declarar un valor en el objeto
console.log(consumer.name);

// 2da forma de declarar un valor en el objeto
console.log(consumer['lastName']);

// Eliminar la propiedad
delete consumer.vacation;
console.log(consumer);

// Cambiar los valores de la propiedad
consumer.days = 1;
console.log(consumer.days);


const { name, lastName } = consumer;

console.log(name);
console.log(lastName);