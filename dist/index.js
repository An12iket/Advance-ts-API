"use strict";
;
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "Aniket", age: 15 }, { name: "Xyz", age: 19 });
console.log(`The total age is: ${age}`);
