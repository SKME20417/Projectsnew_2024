// class A {
//     showij(i, j) {
//         this.i = i;
//         this.j = j;

//         document.write("i = " + i + "<br>");
//         document.write("j = " + j + "<br>");
//     }
// }

// class B extends A {
//     showK(k) {
//         this.k = k;
//         document.write("k = " + k + "<br>");
//     }

//     sumb() {
//         var z = this.i + this.j + this.k;
//         document.write("sum = " + z + "<br>");
//     }
// }

// bo = new B();

// bo.showK(15);
// bo.showij(6, 9);

// bo.sumb();


// class P {
//     showp(x) {
//         this.x = x;
//         document.write("x = " + this.x + "<br>");
//     }

// }

// class Q extends P {
//     showq(y) {
//         this.y = y;
//         document.write("y = " + this.y + "<br>");
//     }
// }

// class R extends Q {
//     showr(z) {
//         this.z = z;
//         document.write("z = " + this.z + "<br>");
//     }
// }

// class S extends R {
//     shows(w) {
//         this.w = w;
//         document.write("w = " + this.w + "<br>");
//     }
// }

// class T extends S {
//     showt() {
//         let o = this.x + this.y + this.z + this.w
//         document.write("Total sum is : " + o + "<br>");
//     }
// }

// po = new P();
// qo = new Q();
// ro = new R();
// so = new S();
// to = new T();

// po.showp(25);
// qo.showq(15);
// ro.showr(10);
// so.shows(50);


// to.showp(14);
// to.showq(15);
// to.showr(11);
// to.shows(20);
// to.showt();


// class A {
//     showA(x, y) {
//         this.x = x;
//         this.y = y;
//         var z = this.x + this.y;
//         document.write("the sum in A is " + z + "<br>");

//     }
// }

// class B extends A {
//     showB(x, y) {
//         this.x = x;
//         this.y = y;
//         var z = this.x - this.y;
//         document.write("the difference in B is " + z + "<br>");
//     }
// }

// class C extends A {
//     showC(x, y) {
//         this.x = x;
//         this.y = y;
//         var z = this.x * this.y;
//         document.write("the product in C is " + z + "<br>");
//     }
// }

// class D extends A {
//     showD(x, y) {
//         this.x = x;
//         this.y = y;
//         var z = this.x / this.y;
//         document.write("the quotient in D is : " + z + "<br>");
//     }
// }

// ao = new A();
// bo = new B();
// co = new C();

// ao.showA(5, 6);
// bo.showB(9, 4);
// bo.showA(7, 9);


// co.showC(4, 6);
// co.showA(8, 9);


// var t = new D();
// t.showD(15, 3);
// t.showA(14, 7);

// class A {
//     showA(x, y) {
//         this.x = x;
//         this.y = y;
//         var z = this.x + this.y;
//         document.write("the sum in A is " + z + "<br>");
//     }
// }

// class B extends A {
//     showA(x, y) {
//         this.x = x;
//         this.y = y;
//         var z = this.x - this.y;
//         document.write("the difference in B is " + z + "<br>");
//     }

// }

// class C extends B {
//     showA(x, y) {
//         this.x = x;
//         this.y = y;
//         var z = this.x * this.y;
//         document.write("the product in C is " + z + "<br>");


//     }
// }



// ao = new A();
// ao.showA(18, 9);

// bo = new B();

// bo.showA(18, 9);

// co = new C();
// co.showA(18, 9);

// class A {
//     constructor(name) {
//         document.write("name in class A is : " + name + "<br>");
//     }
// }

// class B extends A {

// }

// ao = new A('prathna');
// bo = new B('sanjay');



// class A {
//     constructor() {
//         document.write("name in class A is : " + name + "<br>");
//     }
// }

// class B extends A {

//     constructor() {
//         super();
//         document.write("name in class B is : ");

//     }
// }




class A {
    show(name) {
        document.write("name in class A is : " + name + "<br>");
    }
}

class B extends A {
    show(name) {

        document.write("name in class B is : " + name + "<br>");
        super.show(name);
    }
}


bo = new B();
bo.show('arjun');












