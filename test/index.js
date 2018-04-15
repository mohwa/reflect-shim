/**
 * Created by mohwa on 2018. 2. 14..
 */


const Reflect = require('reflect-shim');

//const object1 = {};
//
//console.log(Reflect.defineProperty(object1, 'property1', {value: 42}));
//
//if (Reflect.defineProperty(object1, 'property1', {value: 42})) {
//  console.log('property1 created!');
//  // expected output: "property1 created!"
//} else {
//  console.log('problem creating property1');
//}
//
//console.log(object1.property1);
//// expected output: 42
//
//var obj = { x: 1, y: 2 };
//console.log(Reflect.deleteProperty(obj, 'x')); // true
//obj; // { y: 2 }
//
//var arr = [1, 2, 3, 4, 5];
//Reflect.deleteProperty(arr, '3'); // true
//arr; // [1, 2, 3, , 5]
//
//// Returns true if no such property exists
//Reflect.deleteProperty({}, 'foo'); // true
//
//// Returns false if a property is unconfigurable
//console.log(Reflect.deleteProperty(Object.freeze({foo: 1}), 'foo')); // false

var obj = {
  get foo() { console.log(this); return this.bar(); },
  set foo (v) { console.log(this); },
  bar: function() {  }
};

//Reflect.get(obj, "foo", {x: 2});
Reflect.set(obj, "foo", "vvvvv", {x: 2});
//
//// Object
//var obj = { x: 1, y: 2 };
//console.log(Reflect.get(obj, 'x')); // 1
//
//// Array
//console.log(Reflect.get(['zero', 'one'], 1)); // "one"

// Proxy with a get handler
//var x = {p: 1};
//var obj = new Proxy(x, {
//  get(t, k, r) { console.log(k); return k + 'bar'; }
//});
//
//var a = Reflect.get(obj, 'foo'); // "foobar"
//
//console.log(a);

//console.log(obj['foo']);
 // if obj[name] is an accessor, it gets run with `this === wrapper`
//console.log(Reflect.set(obj, 'foo', 3, {x: 3}));
