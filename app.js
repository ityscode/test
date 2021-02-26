"use strict";
// 原生js是弱类型语言 声明一个x变量，数据类型是number,变量是什么类型，却绝于变量赋什么值
// ts中确定了类型后，就不能赋值其他类型的值
var x = 100;
var y = true;
// 声明一个数组，并且数组内元素都是数字
// let arr:number[] = [1,2,3]
// let arr:Array<number> = [1,2]
//声明一个元组
var arr = ['nihoa', 100];
//声明一个任意类型
var msg = 100;
msg = true;
// 声明一个空值
// 原生js let u = void(0)
//ts 获取空值
var u = undefined;
var un = undefined;
var n = null;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
//根据接口类来实例化一个数据结构
// let obj:myName = {name:"你好"}
// console.log(obj.name)
// type myobject = {
//     name:string
// }
// 接口的继承
// interface customParam extends myName {
//     age:number
// }
// let obj:customParam = {name:'nio',age:12}
// 函数
// 规定形参x必填 类型为number 规定返回值得类型也是number
// function fn(x:number):number{
//     return 100
// }
// 形参必须符合接口{name:string}
// 返回值必须符合接口 {age:number}
function fun(obj) {
    return { age: 32 };
}
// 设置可以选参数
// x可选 有类型必须是number
// y可选参数
// z 默认值为30
function fn(x, y, z) {
    if (z === void 0) { z = 30; }
}
// 根据函数解决myFn 声明一个函数
var func = function (x, y) {
    return x + y;
};
// console.log(func(1,2))
var www = function (x, y) {
    return x + y;
};
//args => 不定参. 规定是一个数组，数组的元素必须都是数字 (实参的类型必须是number)
function abc() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
}
abc(1, 2, 3, 4, 45);
// 类
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
        console.log(this.age);
    }
    Student.prototype.fn = function () {
        console.log('共有方法');
        console.log(this.fun());
    };
    Student.prototype.fun = function () {
        console.log('私有方法');
    };
    return Student;
}());
var oYs = new Student('ys', 19);
console.log(oYs);
console.log(oYs.fn());
