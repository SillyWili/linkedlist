import { LinkedList } from "./list.js";
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("rabbit");
list.pop();

let hamster = list.find("hamster");
let head = list.Head();
let tail = list.tail();

console.log(list.toString());
console.log(list.size());
console.log(head, tail);
console.log(list.at(2));
console.log(list.toString());
console.log(list.contains("rabbit")); // true
console.log(list.contains("tiger")); // false
console.log(hamster); // 4

list.insertAt("lion", 2);
console.log(list.toString());

list.removeAt(6);
console.log(list.toString());
