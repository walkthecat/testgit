((win) => {
    class Test {
        constructor(a, b) {
            this.a = a;
            this.b = b;
        }

        toString() {
            return this.a + ',' + this.b;
        }
    }

    if (!win._presult) return;
    // console.log((new Test(1, 2)).toString());
    win._presult.innerHTML = (new Test(Math.round(Math.random().toFixed(2) * 100), Math.round(Math.random().toFixed(2) * 100))).toString();
})(window)