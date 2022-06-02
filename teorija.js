console.log('ja ja');

let a = 'labas';

let b = String('labas');
// skliaustuose nurodom ilgi jeigu nurodom viena reiksme
let c = Array(55);
// jei kelias per kableli, arba [kampuotuose skliaustuose], tuomet nurodom reiksmes
c = Array(5, 5);
let d = new String('labas');
let e = new Number('7');

console.log(b);
console.log(a.length);
console.log(typeof a);
console.log(b.length);
console.log(c);
console.log(d);
console.log(e);

String.prototype.tail = function () {
  return this.valueOf() + 'o---------';
};

console.log(a.tail());
console.log(d);

class Cat {
  constructor(n) {
    console.log('Naujas katinas');
    this.name = n;
  }

  miau = () => {
    console.log('Miauuuuuu!');
  };

  miau = () => {
    console.log(this.name + ' Miauuuuuu!');
  };
}

const myCat = new Cat('Pilkis');
const myCat222 = new Cat('Mikis');
console.log(myCat);
console.log(myCat.name);
console.log(myCat222.name);
myCat.miau();

// mapas
console.log('---MAP---');
const m = new Map();

m.set('cat1', myCat);
m.set('cat2', myCat222);

console.log(m.get('cat2'));

console.log(m);

// STATIC
console.log('---STATIC---');

class Stikline {
  static type = 'pepsi';
  // static gerimukas = 'fanta';

  static registras = [];

  static naujaStikline(t) {
    return new this(t);
  }

  static whatType() {
    console.log(this.type);
  }

  static visosStiklines(stikline) {
    this.registras.push(stikline);
  }

  constructor(turis) {
    this.turis = turis;
    this.kiekis = 0;
    this.constructor.visosStiklines(this);
  }

  ipilti(kiekis) {
    if (kiekis + this.kiekis > this.turis) {
      this.kiekis = this.turis;
    } else {
      this.kiekis += kiekis;
    }

    // this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
    // jeigu norim dar kazkokius skaiciavimus daryt, reikia pati objekta grazinti
    return this;
  }

  ispilti = () => {
    let kiekis = this.kiekis;
    console.log('ispilta ' + this.kiekis);
    this.kiekis = 0;
    return kiekis;
  };

  stiklinejeYra = () => {
    // pirmas variantas nenaudojamas
    // console.log('Stiklineje yra: ' + this.kiekis + ' ' + Stikline.type);
    console.log('Stiklineje yra: ' + this.kiekis + ' ' + this.constructor.type);
    console.log(this.constructor.name);
  };
}

const dideleStikline = new Stikline(200);
const vidutineStikline = new Stikline(150);
const mazaStikline = new Stikline(100);
const s = Stikline.naujaStikline(150);

console.log(s);

// vidutineStikline.ipilti(30);
// vidutineStikline.ipilti(15);
// vidutineStikline.stiklinejeYra();

// vidutineStikline.ispilti();
// vidutineStikline.stiklinejeYra();

// vidutineStikline.ipilti(300);
// vidutineStikline.stiklinejeYra();

// console.log(dideleStikline);
// console.log(Stikline.type);

Stikline.whatType();

console.log(Stikline.registras);
