// Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

console.log('-*-1-*-KIBIRAS-*-');

class Kibiras1 {
  constructor() {
    this.akmenuKiekis = 0;
  }

  pridetiAkmeni = () => {
    this.akmenuKiekis++;
  };

  pridetiDaugAkmenu = (kiek) => {
    this.akmenuKiekis += kiek;
  };

  kiekPririnktaAkmenu = () => {
    console.log(this.akmenuKiekis);
  };
}

const kibiras = new Kibiras1();
kibiras.pridetiAkmeni();
kibiras.pridetiDaugAkmenu(10);
kibiras.kiekPririnktaAkmenu();

// Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

console.log('-*-2-*-PINIGINE-*-');

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
    this.metalas = 0;
    this.popierius = 0;
  }

  ideti = (kiekis) => {
    kiekis <= 2
      ? (this.metaliniaiPinigai += kiekis) &&
        !console.log('Ideta metaliniu pinigu: ' + kiekis) &&
        this.metalas++
      : (this.popieriniaiPinigai += kiekis) &&
        !console.log('Ideta popieriniu pinigu: ' + kiekis) &&
        this.popierius++;

    // if (kiekis <= 2) {
    //   this.metaliniaiPinigai += kiekis;
    //   console.log('Ideta metaliniu pinigu: ' + kiekis);
    //   this.metalas++;
    // } else {
    //   this.popieriniaiPinigai += kiekis;
    //   console.log('Ideta popieriniu pinigu: ' + kiekis);
    //   this.popierius++;
    // }
  };

  skaiciuoti = () => {
    console.log(
      'Is viso pinigineje: ' +
        (this.popieriniaiPinigai + this.metaliniaiPinigai)
    );
  };

  //   6 uzdavinys
  monetos = () => {
    console.log('Pinigineje yra: ' + this.metalas + ' monetos/u.');
  };

  banknotai = () => {
    console.log('Pinigineje yra: ' + this.popierius + ' banknotai/u.');
  };
}

const pinigine = new Pinigine();
pinigine.ideti(5);
pinigine.skaiciuoti();
pinigine.ideti(7);
pinigine.ideti(2);
pinigine.ideti(5);
pinigine.ideti(1);
pinigine.ideti(6);
pinigine.skaiciuoti();

// Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

console.log('-*-3-*-TROLEIBUSAS-*-');

class Troleibusas {
  static visiKeleiviai = 0;

  static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
    this.visiKeleiviai += keleiviuSkaicius;
    return this.visiKeleiviai;
  }

  // static keleiviuSkaiciusVisuoseTroleibusuose() {
  //
  // }

  constructor() {
    this.keleiviuSkaicius = 0;
    this.constructor.bendrasKeleiviuSkaicius(this.keleiviuSkaicius);
  }

  ilipa = (keleiviuSkaicius) => {
    this.keleiviuSkaicius += keleiviuSkaicius;
    this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    console.log('Ilipo ' + keleiviuSkaicius + ' keleiviai');
  };

  islipa = (keleiviuSkaicius) => {
    this.keleiviuSkaicius -= keleiviuSkaicius;
    this.constructor.bendrasKeleiviuSkaicius(-keleiviuSkaicius);
    console.log('Islipo ' + keleiviuSkaicius + ' keleiviai');
  };

  vaziuoja = () => {
    this.keleiviuSkaicius < 1
      ? console.log('Troleibusas tuscias')
      : console.log('Trulike vaziuoja ' + this.keleiviuSkaicius + ' keleiviai');
  };
}

const trulikas = new Troleibusas();
trulikas.ilipa(7);
trulikas.islipa(2);
trulikas.ilipa(5);
trulikas.islipa(7);
trulikas.ilipa(2);
trulikas.islipa(1);
trulikas.vaziuoja();
trulikas.ilipa(4);
trulikas.ilipa(5);
trulikas.islipa(1);
trulikas.vaziuoja();
trulikas.islipa(12);
trulikas.vaziuoja();

// (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

console.log('-*-4-*-(STATIC)-*-');

const troleibusas1 = new Troleibusas();
troleibusas1.ilipa(4);
const troleibusas2 = new Troleibusas();
troleibusas2.ilipa(2);
const troleibusas3 = new Troleibusas();

troleibusas1.ilipa(10);
troleibusas1.islipa(2);
troleibusas3.ilipa(4);
troleibusas2.ilipa(9);
troleibusas2.islipa(2);
console.log(
  'Visuose troleibusuose siuo metu vaziuoja: ' +
    Troleibusas.visiKeleiviai +
    ' keleiviai.'
);

// (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.

console.log('-*-5-*-(MAP)-*-');

class PirkiniuKrepselis {
  turinys = new Map();

  constructor() {
    this.turinys.set('surelis', 0);
    this.turinys.set('pienas', 0);
    this.turinys.set('duona', 0);
  }

  idetiSureli = (kiekis) => {
    this.turinys.set('surelis', this.turinys.get('surelis') + kiekis);
  };

  idetiPieno = (kiekis) => {
    this.turinys.set('pienas', this.turinys.get('pienas') + kiekis);
  };
  idetiDuonos = (kiekis) => {
    this.turinys.set('duona', this.turinys.get('duona') + kiekis);
  };

  krepselioTurinys = () => {
    console.log(this.turinys);
  };
}

const pirkiniuKrepselis = new PirkiniuKrepselis();
pirkiniuKrepselis.idetiSureli(2);
pirkiniuKrepselis.idetiDuonos(3);
pirkiniuKrepselis.idetiPieno(1);
pirkiniuKrepselis.krepselioTurinys();
pirkiniuKrepselis.idetiSureli(6);
pirkiniuKrepselis.idetiDuonos(1);
pirkiniuKrepselis.idetiPieno(4);
pirkiniuKrepselis.krepselioTurinys();

// Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.

console.log('-*-6-*-PINIGINE 2-*-');

pinigine.monetos();
pinigine.banknotai();
pinigine.ideti(1);
pinigine.ideti(1);
pinigine.ideti(1);
pinigine.ideti(6);
pinigine.ideti(4);
pinigine.ideti(7);
pinigine.monetos();
pinigine.banknotai();
pinigine.skaiciuoti();

// (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų prie statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).

console.log('-*-7-*-(STATIC)-*-');

// // Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.

// console.log('-*-8-*-STIKLINE-*-');

// class Stikline {
//   constructor(V) {
//     this.turis = V;
//     this.kiekis = 0;
//   }

//   ipilti(kiekis) {
//     if (kiekis + this.kiekis > this.turis) {
//       this.kiekis = this.turis;
//     } else {
//       this.kiekis += kiekis;
//     }

//     // this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
//     // jeigu norim dar kazkokius skaiciavimus daryt, reikia pati objekta grazinti
//     return this;
//   }

//   ispilti = () => {
//     let kiekis = this.kiekis;
//     console.log('ispilta ' + this.kiekis);
//     this.kiekis = 0;
//     return kiekis;
//   };

//   stiklinejeYra = () => {
//     console.log('Stiklineje yra: ' + this.kiekis);
//   };
// }

// const dideleStikline = new Stikline(200);
// const vidutineStikline = new Stikline(150);
// const mazaStikline = new Stikline(100);

// vidutineStikline.ipilti(30);
// vidutineStikline.ipilti(15);
// vidutineStikline.stiklinejeYra();

// vidutineStikline.ispilti();
// vidutineStikline.stiklinejeYra();

// vidutineStikline.ipilti(300);
// vidutineStikline.stiklinejeYra();

// console.log('--------');
// console.log('didele stikline');
// dideleStikline.ipilti(300);
// dideleStikline.stiklinejeYra();
// // vidutineStikline.ispilti();
// console.log('----perpilam-----');
// vidutineStikline.ipilti(dideleStikline.ispilti());
// vidutineStikline.stiklinejeYra();
// mazaStikline.ipilti(vidutineStikline.ispilti());
// mazaStikline.stiklinejeYra();
// // mazaStikline.ispilti();
// console.log('----kazkokie labai imantrus bandymai-----');
// mazaStikline.ipilti(
//   vidutineStikline.ipilti(dideleStikline.ipilti(80).ispilti()).ispilti()
// );
// mazaStikline.stiklinejeYra();

// // Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).

// console.log('-*-9-*-GRYBAS-*-');
// function rand(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// class Grybas {
//   constructor() {
//     this.valgomas = Boolean(rand(0, 1));
//     this.sukirmijes = Boolean(rand(0, 1));
//     this.svoris = rand(5, 45);
//   }
// }

// class Krepsys {
//   constructor() {
//     this.dydis = 500;
//     this.prikrauta = 0;
//   }

//   deti = (grybas) => {
//     this.prikrauta += grybas.svoris;
//   };
// }

// const krepsys = new Krepsys();
// let rastaGrybu = 0;
// let valgomu = 0;

// do {
//   const grybas = new Grybas();
//   rastaGrybu++;
//   if (grybas.valgomas === true && grybas.sukirmijes === false) {
//     krepsys.deti(grybas);
//     valgomu++;
//   }
// } while (krepsys.prikrauta < krepsys.dydis);

// console.log('Is viso rasta grybu: ' + rastaGrybu);
// console.log('Valgomu ir nesukirmijusiu: ' + valgomu);
// console.log(krepsys);
