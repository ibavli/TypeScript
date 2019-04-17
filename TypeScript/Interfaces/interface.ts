

interface Product{
    id:number;
    name:string;
    unitPrice:number;
    //Optional Property
    tax?:number;
    //Readonly Property
    readonly quantity: number;
}

function save(product:Product) : void {
    console.log(product.name + " kaydedildi.");
}


//Mutlaka bana bu verileri vereceksin.
let product : Product = { id:1, name:"Notebook", unitPrice:1000, quantity:5 }
save(product);

//Hata verir
//product.quantity = 6;



// Class ile yazdık. 
class Product2{
    id:number;
    name:string;
    unitPrice:number;
}

function save2(product2:Product2) : void {
    console.log(product2.name + " kaydedildi.");
}

let product2 = new Product2();
product2.name = "Notebook2";
//Burada id ve unitPrice değerlerini vermedik. Eğer illa hepsini vermek istemiyorsak class tanımlarız.
save2(product2);






interface PersonService{
    save();
    delete():boolean;
}

class CustomerService implements PersonService{
    delete(): boolean {
        console.log("delete method worked");
        return true;
    }
    save() {
        console.log("save method worked");
    }
}



//Function Types
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}



//Extending Interfaces
interface Interface1 {
    value1: string;
}

interface Interface2 {
    value2: number;
}

interface Interface3 extends Interface1, Interface2 {
    value3: number;
}

let square = <Interface3>{};
square.value1 = "value1";
square.value2 = 11;
square.value3 = 5.0;
