import {halfOf, multiply} from './lib.js'
console.log(halfOf(84));
console.log(multiply(21, 2));
import doSomething from './doSomething.js';
doSomething();
import { flag, touch } from './validator.js';
console.log(flag);
touch();
console.log(flag);
const sum1 = (a, b) => a + b;
let result = sum1(1, 2);
console.log(result);
function reinitConst(){
    const me = 1;
    console.log(me);
    //me = 2;
    console.log(me);
    }
    reinitConst();
function iterateVar() {
    for(var i = 0; i < 10; i++) {
    console.log(i);
    }
    console.log(i);
}
iterateVar();
function iterateLet() {
    for(let i = 0; i < 10; i++) {
    console.log(i);
    }
    //console.log(i);
}
iterateLet();
function add(x, y = 0) {
    console.log(x + y);
}
add(1);
add(1,2);
function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + ' friends');
}
userFriends('User', 'Bob', 'Alice');
function userTopFriends(firstFriend, secondFriend, thirdFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
}
userTopFriends(...['Alice', 'Bob', 'Michelle']);