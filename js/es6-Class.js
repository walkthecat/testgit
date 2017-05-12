((doc) => {
    class Test {
        constructor(a, b) {
            this.a = a;
            this.b = b;
        }

        toString() {
            return this.a + ',' + this.b;
        }
    }
    // console.log((new Test(1, 2)).toString());
    doc.innerHTML = (new Test(Math.round(Math.random().toFixed(2) * 100), Math.round(Math.random().toFixed(2) * 100))).toString();
})(window._presult)