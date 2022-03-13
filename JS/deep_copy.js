const string = '{"name": "John"}';
const obj1 = JSON.parse(string);
console.log(obj1.name);
// => John

const obj2 = { nickname: "Murakami" };
console.log("文字列 " + JSON.stringify(obj2));
// => 文字列 {"nickname":"Murakami"}

const object1 = { name: "murakami" };
const copyObject1 = object1;
copyObject1.name = "mura";
console.log(object1);
// => mura

const object2 = { name: "murakami" };
const deepCopyObject = JSON.parse(JSON.stringify(object2));
deepCopyObject.name = "mura";
console.log(object2);
// => murakami
