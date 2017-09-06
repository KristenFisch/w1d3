//if you want to represent a group of people
var name1 = 'David';
var name2 = 'Don';
var name3 = 'Joel';

//can use arrays, which are a type of object
var names = [name1, name2, name3]
//but what if you want to store email addresses as well?
var email1 = 'david@lighthouselabs.ca';
var email2 = 'don@lighthouselabs.ca';
var email3 = 'joel@lighthouelabs.ca';

var emails = [email1, email2, email3];

var davidIndex = 0;

console.log(names[david]);
console.log(emails[david]);



//principal of authority
//e.g. principal of least authority PoLP
//Clustering data -instead of these 8 variables,
//we have one variable where we can access all of the info

//associative arrays

//in order to get an element from an array you need its specific position
//we can use a literal syntax (curly brackets instead of square)
{
  name: 'David',
  email: 'david@lighthouselabs.ca'
}
//we no longer need to know the position of it. The advantage of associative
//arrays is that we can --> CHECK

var don = {
  name: 'Don'
};
//if we didn't know Don's email, we would have the ability to change the variable
//later on. This is called mutability, something that is in objects.
don.arms = 3;
don.email = 'don@lighthouselabs.ca';
don.name = 'Donny Boy';
//properties of an object are refering to the key value of pairs between the
//keys and the data
var joel {} //an empty object
//we don't know what keys and values we will need in our projects until later on
var instructors = ['david', 'don', 'joel']
var instructors1 = instructors[0];
instructor1.name //will give us just the name
console.log(instructors[0])
//first reach into the array, then get the element of the array
//key would be equal to name
for (var i = 0; i < instructors.length; i++) {
  var instructor = instructors[i]//goes through instructors 0, 1, 2
  console.log(instructor.email);
}

var instructor1 = instructors[0];
//aray-you know the key, but you might not know all of the properties of an object

var somethingOrOther = Object.keys(instructor1)//which when console.log'd we
//will get the string name and the string email
var instructor1keys = Object.keys(instructor1)

//instructor1.key = 'whaa??' will return whaa 3 times
for (var key in instructor1) {
  console.log(instructor1.key); //will return some undefined
}
//primatives vs objects: the difference is mutability
//strings are immutable
""//falsey string value
//numbers are immutable because you cannot change the bits
0 and NaN//falsey
//booleans are immutable
false //are falsey
//undefined is falsey
//null is falsey
//symbol (we don't really use these)

//Everything else are objects. Every primative data type has at least one falsey
//value.
var something = 0
if (something) {
  console.log(something, 'has a truthy value');
} else {
  console.log(something, 'has a falsey value');
}
//we can choose whether to do something or not. (Truthy/falsey)

//if we have
var obj1 = {
  value : 1
}

var objB = obj1;

console.log(obj1 === objB); //will console.log true

objB.value = 2; //if we change this
console.log(obj1 === objB);
//it will log as true because we are sending the value to the address of the object
console.log(obj1.value);
//will log 2
