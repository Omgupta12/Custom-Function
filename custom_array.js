function myarray() {

    Object.defineProperty(this, "length", {

        value: 0,
        writable: true,
        enumerable: false,

    });

    this.length = arguments.length;

    for (var i = 0; i < this.length; i++) {

        this[i] = arguments[i];

    }
}

let a = new myarray(1, 2, 3);


myarray.prototype.पुश = function (value) {
    let index = this.length;
    this[index] = value;

    console.log('पुश', Object.values(a))
    this.length++;
};

myarray.prototype.पॉप = function (value) {
    let index = this.length - 1;
    delete this[index]

    console.log('पॉप', Object.values(a))
    this.length--;

};

myarray.prototype.टॉप = function (value) {

    console.log('टॉप', this.length)
};

myarray.prototype.रिवर्स = function (value) {
    let bag = []
    for (let i = this.length - 1; i >= 0; i--) {
        bag.push(a[i])
    }
    console.log('रिवर्स', bag)
};

myarray.prototype.प्रिंट = function (value) {
    let bag = []
    for (let i = 0; i < this.length; i++) {
        bag.push(a[i])
    }
    console.log('प्रिंट', bag)
};

myarray.prototype.साइज = function (value) {
    console.log('साइज', this.length)
}

a.पुश(4);
a.पुश(5);

a.पॉप();
a.पॉप();

a.टॉप()

a.प्रिंट()

a.रिवर्स()

a.साइज()




