
//
// Object Destructuring
//

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Sofia',
        temp: 92
    }
};

const {name, age} = person;




// console.log(`${name} is ${age}.`)

// console.log(`It's ${person.location.temp} in ${person.location.city}`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadeplhia', 'Pennsylvania', '19147'];

// const [ , city, state = 'New York' ] = address;

// console.log(`You are in ${city} ${state}`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [ product, , cost ] = item;

console.log(`A medium ${product} costs ${cost}`)