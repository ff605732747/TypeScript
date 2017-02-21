//定义函数本身

var getName: (name: string) => string;
getName = function (name: string) {

    return `我的名字是 ${name}`
}

var getName: (name: string) => string = function (name) {
    return `我的名字是 ${name}`
}


//有默认参数的函数
function add(foo: number = 0, foobar: number, bar?: number): number {

    return foo;
};

//有剩余参数的函数
// function add2(...foo: number[]) { }
function add2(foo: number[]) { }


//函数重载 
function test(value: (string | number | boolean)): string {


    return `${value}`;
}


