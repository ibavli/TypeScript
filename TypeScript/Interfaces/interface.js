function save(product) {
    console.log(product.name + " kaydedildi.");
}
//Mutlaka bana bu verileri vereceksin.
save({ id: 1, name: "Notebook", unitPrice: 1000 });
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save2(product2) {
    console.log(product2.name + " kaydedildi.");
}
var product2 = new Product2();
product2.name = "Notebook2";
save2(product2);
