
// 原生js是弱类型语言 声明一个x变量，数据类型是number,变量是什么类型，却绝于变量赋什么值

// ts中确定了类型后，就不能赋值其他类型的值
let x:number = 100;
let y:boolean = true;

// 声明一个数组，并且数组内元素都是数字
// let arr:number[] = [1,2,3]
// let arr:Array<number> = [1,2]

//声明一个元组
let arr:[string,number] = ['nihoa',100]

//声明一个任意类型
let msg:any = 100;
msg = true;

// 声明一个空值
// 原生js let u = void(0)

//ts 获取空值
let u:void = undefined;

let un:undefined = undefined;
let n:null = null;

enum Color {Red,Green,Blue};
let c:Color = Color.Blue;
// console.log(c)

// console.log(un,n);

// console.log(u)
// var message:string = "Hello World";
// console.log(message,x);

// 接口类

interface myName{
    name:string
}

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
function fun(obj:params):result{
    return {age:32}
}
// 利用返回值接口和形参接口声明
type params = {ame:string}
type result = {age:number}

// 设置可以选参数
// x可选 有类型必须是number
// y可选参数
// z 默认值为30
function fn(x?:number,y?:number,z=30){

}


// 一个函数的接口
// 这个接口规定了这个函数必须由x和y两个参数 类型必须都是number
// 并且规定返回值的类型也是number
// interface myFn{
//     (x:number,y:number) : number
// }

// 利用type声明函数接口.需要些=>
type myFn = (x:number,y:number) => number;

// 根据函数解决myFn 声明一个函数
let func:myFn = function(x,y){
    return x+y
}
// console.log(func(1,2))

let www:(x:number,y:number) => number = function(x,y){
    return x+y
}

//args => 不定参. 规定是一个数组，数组的元素必须都是数字 (实参的类型必须是number)
function abc(...args:number[]){
    console.log(args);
}

abc(1,2,3,4,45)

// 类

class Student{
    // 属性必须先声明才能赋值 声明时必须指定该属性时public还是private
    // publice 声明的属性或者方法可以任何地方可以访问
    // private 声明的属性或者方法，只能在类内部访问
    public name;
    private age;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
        console.log(this.age);
    }

    public fn(){
        console.log('共有方法');
        console.log(this.fun());
    }

    private fun(){
        console.log('私有方法');
    }
}

let oYs = new Student('ys',19);
console.log(oYs);
console.log(oYs.fn());