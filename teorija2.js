class Senelis {
  constructor() {
    console.log('SEN');
    this.name = 'Bronius';
  }

  miegoti() {
    console.log('psssssszsssss');
  }

  bliauti() {
    console.log('uuuuuuuuuu');
  }
}

class Tevas extends Senelis {
  constructor() {
    console.log('TEV');
    super();
    this.name = 'Kazys';
    // this.barti = this.barti.boind(this);
  }
  //   pati funkcija susikuria konteksta
  barti() {
    console.log('nu nu nu');
    console.log(this);
  }
  // [aveldi konteksta
  // barti = () => {
  //     console.log('nu nu nu');
  //     console.log(this);
  //   }
}

// extends perduoda savybes kitai klasei
class Vaikutis extends Tevas {
  constructor() {
    console.log('VAIK');
    super();
    this.name = 'Lukas';
  }

  bliauti() {
    console.log('Beeeee!!!!');
  }
}

const v = new Vaikutis();
const t = new Tevas();

v.bliauti();
t.barti();
v.barti();
v.miegoti();
console.log(v.name);
console.log(t.name);
t.bliauti();

document.querySelector('button').addEventListener('click', () => {
  v.barti();
});

document.querySelector('button').addEventListener('click', v.barti);

// setInterval(v.barti, 1000);

document.querySelector('button').addEventListener('click', () => v.barti());
