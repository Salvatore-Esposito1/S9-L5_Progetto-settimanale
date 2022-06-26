interface smartphone {
    _carica: number;
    _numeroChiamate: number;
  }
  
  class User implements smartphone {
    _carica = 0;
    _numeroChiamate = 0;
    _durataChiamate = 0;
  
    constructor(carica: number, numeroChiamate: number, durataChiamate: number) {
      this._carica = carica;
      this._numeroChiamate = numeroChiamate;
      this._durataChiamate = durataChiamate;
    }
  
    public ricarica(ricarica: number): void {
      if ( ricarica >= 2) {
        this._carica = this._carica + ricarica;
        let saldoFirstUser = <HTMLElement>document.querySelector('.saldoFirstUser');
        saldoFirstUser.innerHTML = firstUser._carica.toFixed(2) + ' €';
        let saldoSecondUser = <HTMLElement>document.querySelector('.saldoSecondUser');
        saldoSecondUser.innerHTML = secondUser._carica.toFixed(2) + ' €';
        let saldoThirdUsers = <HTMLElement>document.querySelector('.saldoThirdUser');
        saldoThirdUsers.innerHTML = thirdUser._carica.toFixed(2) + ' €';
  
      }
    }
    public chiamata(): void {
      let costoAlSecondo = (0.20 / 60);
      if (this._carica > costoAlSecondo) {
        costoAlSecondo = (0.20 / 60);
        this._carica = (this._carica - costoAlSecondo);
        this._carica = (this._carica);
      }
      else {
        hrs = 0; min = 0; sec = 0;
        hrs_2 = 0; min_2 = 0; sec_2 = 0;
        hrs_3 = 0; min_3 = 0; sec_3 = 0;
        alert('Credito esaurito')    
        riabilitaTastoVerde()
        riabilitaTastoVerdeSecondUser()
        riabilitaTastoVerdeThirdUser()
        clearInterval(interval);
        clearInterval(interval_2)
        clearInterval(interval_3)
      }
      let saldoFirstUser = <HTMLElement>document.querySelector('.saldoFirstUser');
      saldoFirstUser.innerHTML = firstUser._carica.toFixed(2) + ' €';
      let saldoSecondUser = <HTMLElement>document.querySelector('.saldoSecondUser');
      saldoSecondUser.innerHTML = secondUser._carica.toFixed(2) + ' €';
      let saldoThirdUsers = <HTMLElement>document.querySelector('.saldoThirdUser');
      saldoThirdUsers.innerHTML = thirdUser._carica.toFixed(2) + ' €';
    }
  
    public numero404(): number {
      return this._carica;
    }
  
    public getNumeroChiamate(): number {
      return this._numeroChiamate;
    }
  
    public azzeraChiamate(): void {
      this._numeroChiamate = 0;
    }
  
    public durataChiamata(): void {
      this._durataChiamate = 0;
    }
  }
  
  let firstUser = new User(0.15, 0, 0);
  let secondUser = new User(4.75, 0, 0);
  let thirdUser = new User(10, 0, 0);
  
  
  /*TIMER FIRST USER*/
  
  let hrs: number = 0;
  let min: number = 0;
  let sec: number = 0;
  let ore: number = 0;
  let minuti: number = 0;
  let secondi: number = 0;
  let durata: number;
  let interval: any;
  let arrayDurataChiamate: number[] = [];
  
  let nodoChiamatePrimo = <HTMLElement> document.querySelector('.durataChiamateFirstUser');
  nodoChiamatePrimo.innerHTML = '0' + ore + ':' + '0' + minuti + ':' + '0' + secondi;
  let timerFirstUser = <HTMLElement>document.querySelector('.timerFirstUser');
  timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + '0' + sec;
  
  
  function disabilitaTastoVerde() {
    let btnStart = <HTMLInputElement> document.querySelector('.btnStart');  
    btnStart.classList.add("removeBugTimer");
   }
  
   function riabilitaTastoVerde() {
    let btnStart = <HTMLInputElement> document.querySelector('.btnStart');  
    btnStart.classList.remove("removeBugTimer");
   }
  
  function start(): void {
    disabilitaTastoVerde()
    if (firstUser._carica > (0.20 / 60)) {
      firstUser._numeroChiamate++;
    }
    interval = setInterval(startINT, 1000);
    let numeroChiamateFirstUser = <HTMLElement>document.querySelector('.numeroChiamateFirstUser');
    numeroChiamateFirstUser.innerHTML = String(firstUser._numeroChiamate);
  
  };
  
  
  function startINT(): void {
    
    durata = (hrs * 60) + (sec / 60) + min;
    firstUser.chiamata();
    if (firstUser._carica >= (0.20 / 60)) { 
      if (sec < 59) { 
        sec++;  
        timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + sec;
        if(sec <= 9){ timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + '0' + sec;}
      }
      else if (sec === 59) {
        sec = 0;
        min++;
        timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + sec;
        if( min <= 9){ timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + sec;}
        if(sec <= 9){ timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + '0' + sec;}  
      }
      if (min === 59) {
        min = 0;
        hrs++;
        timerFirstUser.innerHTML = hrs + ':' + min + ':' + sec;
      }
    }
    DurataChiamate()
  }
  
  function DurataChiamate() :void { 
    let calcoloChiamate = 0;
    arrayDurataChiamate.push(calcoloChiamate)
    console.log(arrayDurataChiamate)
    if (arrayDurataChiamate.length) {
      if (secondi < 59) {
        secondi++;
        nodoChiamatePrimo.innerHTML = '0' + ore + ':' + '0' + minuti + ':' + secondi;
        if(secondi <= 9){ nodoChiamatePrimo.innerHTML = '0' + ore + ':' + '0' + minuti + ':' + '0' + secondi;}
      }
      else if (secondi === 59) {
        secondi = 0;
        minuti++;
        nodoChiamatePrimo.innerHTML = '0' + ore + ':' + '0' + minuti + ':' + secondi;
        if( min <= 9){ nodoChiamatePrimo.innerHTML = '0' + ore + ':' + '0' + minuti + ':' + secondi;}
        if(secondi <= 9){ nodoChiamatePrimo.innerHTML = '0' + ore + ':' + '0' + minuti + ':' + '0' + secondi;}
      }
      if (minuti === 59) {
        minuti = 0;
        ore++;
        nodoChiamatePrimo.innerHTML = ore + ':' + minuti + ':' + secondi;
      }}
     
    }
   
  function end(): void {
    riabilitaTastoVerde()
    hrs = 0;
    min = 0;
    sec = 0;
    clearInterval(interval);
    let saldoFirstUser = <HTMLElement>document.querySelector('.saldoFirstUser');
    saldoFirstUser.innerHTML = firstUser._carica.toFixed(2) + ' €';
    timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + '0' + sec;
  }
  
  /*TIMER SECOND USER*/
  
  let hrs_2: number = 0;
  let min_2: number = 0;
  let sec_2: number = 0;
  let ore_2: number = 0;
  let minuti_2: number = 0;
  let secondi_2: number = 0;
  let durata_2: number;
  let interval_2: any;
  let arrayDurataChiamate_2: number[] = [];
  
  let nodoChiamateSecondo = <HTMLElement> document.querySelector('.durataChiamateSecondUser');
  nodoChiamateSecondo.innerHTML = '0' + ore_2 + ':' + '0' + minuti_2 + ':' + '0' + secondi_2;
  let timerSecondUser = <HTMLElement>document.querySelector('.timerSecondUser');
  timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min_2 + ':' + '0' + sec_2;
  
  function disabilitaTastoVerdeSecondUser() {
    let btnStart = <HTMLInputElement>document.querySelector('.btnStartSecondUser');  
    btnStart.classList.add("removeBugTimer");
   }
  
   function riabilitaTastoVerdeSecondUser() {
    let btnStart =<HTMLInputElement> document.querySelector('.btnStartSecondUser');  
    btnStart.classList.remove("removeBugTimer");
   }
  
  function start_2(): void {
    disabilitaTastoVerdeSecondUser()
    if (secondUser._carica > (0.20 / 60)) {
    secondUser._numeroChiamate++;}
    interval_2 = setInterval(startINT_2, 1000);
    let numeroChiamateSecondUser= <HTMLElement>document.querySelector('.numeroChiamateSecondUser');
    numeroChiamateSecondUser.innerHTML = String(secondUser._numeroChiamate);
  };
  
  function startINT_2(): void {
    durata_2 = (hrs_2 * 60) + (sec_2 / 60) + min_2;
    secondUser.chiamata();
    if (secondUser._carica >= (0.20 / 60)) {
      if (sec_2 < 59) {
        sec_2++;
        timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min_2 + ':' + sec_2;
        if(sec_2 <= 9){ timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min_2 + ':' + '0' + sec_2;}
      }
      else if (sec_2 === 59) {
        sec_2 = 0;
        min_2++;
        timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min + ':' + sec_2;
        if( min_2 <= 9){ timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min_2 + ':' + sec_2;}
        if(sec_2 <= 9){ timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min_2 + ':' + '0' + sec_2;}
      }
  
      if (min_2 === 59) {
        min_2 = 0;
        hrs_2++;
        timerSecondUser.innerHTML = hrs_2 + ':' + min_2 + ':' + sec_2;
      }
    }
    DurataChiamate_2()
  }
  
  function DurataChiamate_2() :void {
    let calcoloChiamate_2 = 0;
    arrayDurataChiamate_2.push(calcoloChiamate_2)
    if (arrayDurataChiamate_2.length) {
      if (secondi_2 < 59) {
        secondi_2++;
        nodoChiamateSecondo.innerHTML = '0' + ore_2 + ':' + '0' + minuti_2 + ':' + secondi_2;
        if(secondi_2 <= 9){ nodoChiamateSecondo.innerHTML = '0' + ore_2 + ':' + '0' + minuti_2 + ':' + '0' + secondi_2;}
      }
      else if (secondi_2 === 59) {
        secondi_2 = 0;
        minuti_2++;
        nodoChiamateSecondo.innerHTML = '0' + ore_2 + ':' + '0' + minuti_2 + ':' + secondi_2;
        if( minuti_2 <= 9){ nodoChiamateSecondo.innerHTML = '0' + ore_2 + ':' + '0' + minuti_2 + ':' + secondi_2;}
        if(secondi_2 <= 9){ nodoChiamateSecondo.innerHTML = '0' + ore_2 + ':' + '0' + minuti_2 + ':' + '0' + secondi_2;}
      }
      if (minuti_2 === 59) {
        minuti_2 = 0;
        ore_2++;
        nodoChiamateSecondo.innerHTML = ore_2 + ':' + minuti_2 + ':' + secondi_2;
      }}}
  
  function end_2(): void {
    riabilitaTastoVerdeSecondUser()
    hrs_2 = 0;
    min_2 = 0;
    sec_2 = 0;
    clearInterval(interval_2);
    let saldoSecondUser = <HTMLElement>document.querySelector('.saldoSecondUser');
    saldoSecondUser.innerHTML = secondUser._carica.toFixed(2) + ' €';
    timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min_2 + ':' + '0' + sec_2;
  }
  
  /*TIMER TERZO USER*/
  
  let hrs_3: number = 0;
  let min_3: number = 0;
  let sec_3: number = 0;
  let ore_3: number = 0;
  let minuti_3: number = 0;
  let secondi_3: number = 0;
  let durata_3: number;
  let interval_3: any;
  let arrayDurataChiamate_3: number[] = [];
  
  let nodoChiamateTerzo = <HTMLElement> document.querySelector('.durataChiamateThirdUser');
  nodoChiamateTerzo.innerHTML = '0' + ore_3 + ':' + '0' + minuti_3 + ':' + '0' + secondi_3;
  let timerThirdUser = <HTMLElement>document.querySelector('.timerThirdUser');
  timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + '0' + sec_3;
  
  function disabilitaTastoVerdeThirdUser() {
    let btnStart = <HTMLInputElement> document.querySelector('.btnStartThirdUser');  
    btnStart.classList.add("removeBugTimer");
   }
  
   function riabilitaTastoVerdeThirdUser() {
    let btnStart = <HTMLInputElement> document.querySelector('.btnStartThirdUser');  
    btnStart.classList.remove("removeBugTimer");
   }
  
  function start_3(): void {
    disabilitaTastoVerdeThirdUser()
    if (thirdUser._carica > (0.20 / 60)) {
    thirdUser._numeroChiamate++;}
    interval_3 = setInterval(startINT_3, 1000);
    let numeroChiamateThirdUser = <HTMLElement>document.querySelector('.numeroChiamateThirdUser');
    numeroChiamateThirdUser.innerHTML = String(thirdUser._numeroChiamate);
  };
  
  function startINT_3(): void {
    durata_3 = (hrs_3 * 60) + (sec_3 / 60) + min_3;
    thirdUser.chiamata();
    if (thirdUser._carica >= (0.20 / 60)) {
      if (sec_3 < 59) {
        sec_3++;
        timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + sec_3;
        if(sec_3 <= 9){ timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + '0' + sec_3;}
      }
      else if (sec_3 === 59) {
        sec_3 = 0;
        min_3++;
        timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + sec_3;
        if( min_3 <= 9){ timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + sec_3;}
        if(sec_3 <= 9){ timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + '0' + sec_3;}
      }
      if (min_3 === 59) {
        min_3 = 0;
        hrs_3++;
        timerThirdUser.innerHTML = hrs_3 + ':' + min_3 + ':' + sec_3;
      }
    }
    DurataChiamate_3()
  }
  
  function DurataChiamate_3() :void {
    let calcoloChiamate_3 = 0;
    arrayDurataChiamate_3.push(calcoloChiamate_3)
    if (arrayDurataChiamate_3.length) {
      if (secondi_3 < 59) {
        secondi_3++;
        nodoChiamateTerzo.innerHTML = '0' + ore_3 + ':' + '0' + minuti_3 + ':' + secondi_3;
        if(secondi_3 <= 9){ nodoChiamateTerzo.innerHTML = '0' + ore_3 + ':' + '0' + minuti_3 + ':' + '0' + secondi_3;}
      }
      else if (secondi_3 === 59) {
        secondi_3 = 0;
        minuti_3++;
        nodoChiamateTerzo.innerHTML = '0' + ore_3 + ':' + '0' + minuti_3 + ':' + secondi_3;
        if( minuti_3 <= 9){ nodoChiamateTerzo.innerHTML = '0' + ore_3 + ':' + '0' + minuti_3 + ':' + secondi_3};
        if(secondi_3 <= 9){ nodoChiamateTerzo.innerHTML = '0' + ore_3 + ':' + '0' + minuti_3 + ':' + '0' + secondi_3};
      }
      if (minuti_3 === 59) {
        minuti_3 = 0;
        ore_3++;
        nodoChiamateTerzo.innerHTML = ore_3 + ':' + minuti_3 + ':' + secondi_3;
      }}}
  
  function end_3(): void {
    riabilitaTastoVerdeThirdUser()
    hrs_3 = 0;
    min_3 = 0;
    sec_3 = 0;
    clearInterval(interval_3);
    let saldoThirdUsers = <HTMLElement>document.querySelector('.saldoThirdUser');
    saldoThirdUsers.innerHTML = thirdUser._carica.toFixed(2) + ' €';
    timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + '0' + sec_3;
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    /*FIRST USER*/
    let saldoFirstUser = <HTMLElement>document.querySelector('.saldoFirstUser');
    saldoFirstUser.innerHTML = firstUser._carica + ' €';
    let numeroChiamateFirstUser = <HTMLElement>document.querySelector('.numeroChiamateFirstUser');
    numeroChiamateFirstUser.innerHTML = String(firstUser._numeroChiamate);
    let importo = <HTMLInputElement>document.querySelector('.importoFirstUser');
    document.querySelector('.ricaricaFirstUser')?.addEventListener('click', () => {
    firstUser.ricarica(Number(importo.value));
    importo.value = ''; })
    document.querySelector('.azzeraFirstUser')?.addEventListener('click', () => {
    firstUser._numeroChiamate = 0;
    let numeroChiamateFirstUser = <HTMLElement>document.querySelector('.numeroChiamateFirstUser');
    numeroChiamateFirstUser.innerHTML = String(firstUser._numeroChiamate);})
   
  
    // SECOND USER 
    let saldoSecondUser = <HTMLElement>document.querySelector('.saldoSecondUser');
    saldoSecondUser.innerHTML = secondUser._carica + ' €';
    let numeroChiamateSecondUser = <HTMLElement>document.querySelector('.numeroChiamateSecondUser');
    numeroChiamateSecondUser.innerHTML = String(secondUser._numeroChiamate);
    let importo_2 = <HTMLInputElement>document.querySelector('.importoSecondUser');
    document.querySelector('.ricaricaSecondUser')?.addEventListener('click', () => {
    secondUser.ricarica(Number(importo_2.value));
    importo_2.value = '';})
    document.querySelector('.azzeraSecondUser')?.addEventListener('click', () => {
    secondUser._numeroChiamate = 0;
    let numeroChiamateSecondUser = <HTMLElement>document.querySelector('.numeroChiamateSecondUser');
    numeroChiamateSecondUser.innerHTML = String(secondUser._numeroChiamate);
    })
  
    // THIRD USER 
    let saldoThirdUsers = <HTMLElement>document.querySelector('.saldoThirdUser');
    saldoThirdUsers.innerHTML = thirdUser._carica + ' €';
    let numeroChiamateThirdUser = <HTMLElement>document.querySelector('.numeroChiamateThirdUser');
    numeroChiamateThirdUser.innerHTML = String(thirdUser._numeroChiamate);
    let importo_3 = <HTMLInputElement>document.querySelector('.importoThirdUser');
    document.querySelector('.ricaricaThirdUser')?.addEventListener('click', () => {
    thirdUser.ricarica(Number(importo_3.value));
    importo_3.value = '';})
    document.querySelector('.azzeraThirdUser')?.addEventListener('click', () => {
    thirdUser._numeroChiamate = 0;
    let numeroChiamateThirdUser = <HTMLElement>document.querySelector('.numeroChiamateThirdUser');
    numeroChiamateThirdUser.innerHTML = String(thirdUser._numeroChiamate);})
  })
  
   /* -------------------------------------PARTE GRAFICA-------------------------------------*/
  
   function slidePrimoSmartphone() {
    let startPos: number;
    let diff : number= 0;
    let initialPos: number = -320;
    let vp = <HTMLElement> document.querySelector('.viewport');
      vp.addEventListener('mousedown',function(e){
        startPos = e.clientX; });
      vp.addEventListener('mousemove',function(e){
        if(startPos){
          diff = e.clientX - startPos;
          vp.setAttribute('style','transform:translateX(' + (initialPos + diff) + 'px)');}});
    vp.addEventListener('mouseup',endMove);
    vp.addEventListener('mouseleave',endMove);
    function endMove(){
        startPos = 0;
        if(diff > 150){
         initialPos = 0;
       }else if(diff < -150){
         initialPos = -320;
       }
       diff = 0;
       vp.setAttribute('style','transform:translateX(' + (initialPos + diff) + 'px)');
       }
      }
  slidePrimoSmartphone()
  
  function slideSecondoSmartphone() {
    let startPos: number;
    let diff: number = 0;
    let initialPos: number = -320;
    let vp2 = <HTMLElement> document.querySelector('.viewport2');
    vp2.addEventListener('mousedown',function(e){
      startPos = e.clientX;});
    vp2.addEventListener('mousemove',function(e){
      if(startPos){
            diff = e.clientX - startPos;
            vp2.setAttribute('style','transform:translateX(' + (initialPos + diff) + 'px)');}});
    vp2.addEventListener('mouseup',endMove);
    vp2.addEventListener('mouseleave',endMove);
    function endMove(){
        startPos = 0;
          if(diff > 150){
           initialPos = 0;
         }else if(diff < -150){
           initialPos = -320;
         }
         diff = 0;
         vp2.setAttribute('style','transform:translateX(' + (initialPos + diff) + 'px)');
         }
        }
  slideSecondoSmartphone()
  
  function slideTerzoSmartphone() {
     let startPos: number;
     let diff: number = 0;
     let initialPos: number = -320;
     let vp3 = <HTMLElement> document.querySelector('.viewport3');
     vp3.addEventListener('mousedown',function(e){
     startPos = e.clientX;
     });
     vp3.addEventListener('mousemove',function(e){
        if(startPos){
           diff = e.clientX - startPos;
           vp3.setAttribute('style','transform:translateX(' + (initialPos + diff) + 'px)');}});
      vp3.addEventListener('mouseup',endMove);
      vp3.addEventListener('mouseleave',endMove);
       function endMove(){
            startPos = 0;
            if(diff > 150){
             initialPos = 0;
           }else if(diff < -150){
             initialPos = -320;
           }
            diff = 0;
            vp3.setAttribute('style','transform:translateX(' + (initialPos + diff) + 'px)');
           }
          }
  slideTerzoSmartphone()
  
   
  function smartphoneNapoli(){
    let giornoEsatto1 = <HTMLElement> document.querySelector('#oraEsatta1');
    let todayDateTime1: string = new Date().toLocaleString("eu-EU", {timeZone:
      "Europe/Rome"});
    giornoEsatto1.innerHTML =  todayDateTime1;
      
    } 
    smartphoneNapoli();
     setInterval(smartphoneNapoli, 1000);
   
  function smartPhoneNewYork(){
    let giornoEsatto2 = <HTMLElement> document.querySelector('#oraEsatta2');
    let todayDateTime2: string = new Date().toLocaleString("eu-EU", {timeZone:
    "America/New_York"});
    giornoEsatto2.innerHTML =  todayDateTime2;}
      
    smartPhoneNewYork();
    setInterval(smartPhoneNewYork, 1000);
  
  function smartphoneTokyo(){
    let giornoEsatto3 = <HTMLElement> document.querySelector('#oraEsatta3');
    let todayDateTime3: string = new Date().toLocaleString("eu-EU", {timeZone: "Asia/Tokyo"});
    giornoEsatto3.innerHTML = todayDateTime3;}
    smartphoneTokyo();
    setInterval(smartphoneTokyo, 1000);