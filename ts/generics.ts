//类型变量
function identity<T>(arg: T): T {
    return arg;
}

let output = identity("myString");//自动识别参数的类型

let myIdentity: <T>(arg: T) => T = identity; //let myIdentity: {<T>(arg: T): T} = identity;

function loggingIdentity<T>(arg: Array<T>): Array<T> {//function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

//泛型接口
interface GenericIdentityFn {
    <T>(arg: T): T;
}

let interfaceMyIdentity: GenericIdentityFn = identity;

//泛型接口2
interface GenericIdentityFnT<T> {
    (arg: T): T;
}

let myIdentityT: GenericIdentityFnT<number> = identity;

//泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };


//泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentityConstraint<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

 