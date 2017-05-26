//全局变量foo包含了存在组件总数。
/** 组件总数 */
declare var foo: number;
//console.log("Half the number of widgets is " + (foo / 2));


//用一个字符串参数调用greet函数向用户显示一条欢迎信息。
//greet("hello, world");
declare function greet(greeting: string): void;


//全局变量myLib包含一个makeGreeting函数， 还有一个属性 numberOfGreetings指示目前为止欢迎数量。
/*
let result = myLib.makeGreeting("hello, world");
console.log("The computed greeting is:" + result);

let count = myLib.numberOfGreetings;
*/
declare namespace myLib {
    function makeGreeting(s: string): string;
    let numberOfGreetings: number;
}


//getWidget函数接收一个数字，返回一个组件，或接收一个字符串并返回一个组件数组。
/*
let x: Widget = getWidget(43);

let arr: Widget[] = getWidget("all of them");
*/
//declare function getWidget(n: number): Widget;
//declare function getWidget(s: string): Widget[];


//当指定一个欢迎词时，你必须传入一个GreetingSettings对象。 这个对象具有以下几个属性：
//1- greeting：必需的字符串 2- duration: 可靠的时长（毫秒表示） 3- color: 可选字符串，比如‘#ff00ff’
/*
greet({
  greeting: "hello world",
  duration: 4000
});
*/
interface GreetingSettings {
    greeting: string;
    duration?: number;
    color?: string;
}

declare function greet(setting: GreetingSettings): void;


//在任何需要欢迎词的地方，你可以提供一个string，一个返回string的函数或一个Greeter实例。
/*
function getGreeting() {
    return "howdy";
}
class MyGreeter extends Greeter { }

greet("hello");
greet(getGreeting);
greet(new MyGreeter());
*/
type GreetingLike = string | (() => string) | Greeting;
declare function greet(g: GreetingLike): void;


//greeter对象能够记录到文件或显示一个警告。 你可以为 .log(...)提供LogOptions和为.alert(...)提供选项。
/*
const g = new Greeter("Hello");
g.log({ verbose: true });
g.alert({ modal: false, title: "Current Greeting" });
*/
declare namespace GreetingLib {
    interface LogOptions {
        verbose?: boolean;
    }
    interface AlertOptions {
        modal: boolean;
        title?: string;
        color?: string;
    }
}
//or 
declare namespace GreetingLib.Options {
    // Refer to via GreetingLib.Options.Log
    interface Log {
        verbose?: boolean;
    }
    interface Alert {
        modal: boolean;
        title?: string;
        color?: string;
    }
}


//你可以通过实例化Greeter对象来创建欢迎词，或者继承Greeter对象来自定义欢迎词。
/*
const myGreeter = new Greeter("hello, world");
myGreeter.greeting = "howdy";
myGreeter.showGreeting();

class SpecialGreeter extends Greeter {
    constructor() {
        super("Very special greetings");
    }
}
*/
declare class Greeter {
    constructor(greeting: string);

    greeting: string;
    showGreeting(): void;
}
