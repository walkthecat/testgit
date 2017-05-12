class Test {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    toString() {
        return this.a + ',' + this.b;
    }
}

(() => {
    console.log((new Test(1, 2)).toString());
})()