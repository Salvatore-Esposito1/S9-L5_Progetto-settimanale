"use strict";
class User {
    constructor(carica, numeroChiamate, durataChiamate) {
        this._carica = 0;
        this._numeroChiamate = 0;
        this._durataChiamate = 0;
        this._carica = carica;
        this._numeroChiamate = numeroChiamate;
        this._durataChiamate = durataChiamate;
    }
    ricarica(ricarica) {
        if (ricarica >= 2) {
            this._carica = this._carica + ricarica;
            let saldoFirstUser = document.querySelector('.saldoFirstUser');
            saldoFirstUser.innerHTML = firstUser._carica.toFixed(2) + ' €';
            let saldoSecondUser = document.querySelector('.saldoSecondUser');
            saldoSecondUser.innerHTML = secondUser._carica.toFixed(2) + ' €';
            let saldoThirdUsers = document.querySelector('.saldoThirdUser');
            saldoThirdUsers.innerHTML = thirdUser._carica.toFixed(2) + ' €';
        }
    }
    chiamata() {
        let costoAlSecondo = (0.20 / 60);
        if (this._carica > costoAlSecondo) {
            costoAlSecondo = (0.20 / 60);
            this._carica = (this._carica - costoAlSecondo);
            this._carica = (this._carica);
        }
        else {
            hrs = 0;
            min = 0;
            sec = 0;
            hrs_2 = 0;
            min_2 = 0;
            sec_2 = 0;
            hrs_3 = 0;
            min_3 = 0;
            sec_3 = 0;
            alert('Credito esaurito');
            riabilitaTastoVerde();
            riabilitaTastoVerdeSecondUser();
            riabilitaTastoVerdeThirdUser();
            clearInterval(interval);
            clearInterval(interval_2);
            clearInterval(interval_3);
        }
        let saldoFirstUser = document.querySelector('.saldoFirstUser');
        saldoFirstUser.innerHTML = firstUser._carica.toFixed(2) + ' €';
        let saldoSecondUser = document.querySelector('.saldoSecondUser');
        saldoSecondUser.innerHTML = secondUser._carica.toFixed(2) + ' €';
        let saldoThirdUsers = document.querySelector('.saldoThirdUser');
        saldoThirdUsers.innerHTML = thirdUser._carica.toFixed(2) + ' €';
    }
    numero404() {
        return this._carica;
    }
    getNumeroChiamate() {
        return this._numeroChiamate;
    }
    azzeraChiamate() {
        this._numeroChiamate = 0;
    }
    durataChiamata() {
        this._durataChiamate = 0;
    }
}
let firstUser = new User(0.15, 0, 0);
let secondUser = new User(4.75, 0, 0);
let thirdUser = new User(10, 0, 0);
/*TIMER FIRST USER*/
let hrs = 0;
let min = 0;
let sec = 0;
let ore = 0;
let minuti = 0;
let secondi = 0;
let durata;
let interval;
let arrayDurataChiamate = [];
let nodoChiamatePrimo = document.querySelector('.durataChiamateFirstUser');
nodoChiamatePrimo.innerHTML = '0' + ore + ':' + '0' + minuti + ':' + '0' + secondi;
let timerFirstUser = document.querySelector('.timerFirstUser');
timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + '0' + sec;
function disabilitaTastoVerde() {
    let btnStart = document.querySelector('.btnStart');
    btnStart.classList.add("removeBugTimer");
}
function riabilitaTastoVerde() {
    let btnStart = document.querySelector('.btnStart');
    btnStart.classList.remove("removeBugTimer");
}
function start() {
    disabilitaTastoVerde();
    if (firstUser._carica > (0.20 / 60)) {
        firstUser._numeroChiamate++;
    }
    interval = setInterval(startINT, 1000);
    let numeroChiamateFirstUser = document.querySelector('.numeroChiamateFirstUser');
    numeroChiamateFirstUser.innerHTML = String(firstUser._numeroChiamate);
}
;
function startINT() {
    durata = (hrs * 60) + (sec / 60) + min;
    firstUser.chiamata();
    if (firstUser._carica >= (0.20 / 60)) {
        if (sec < 59) {
            sec++;
            timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + sec;
            if (sec <= 9) {
                timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + '0' + sec;
            }
        }
        else if (sec === 59) {
            sec = 0;
            min++;
            timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + sec;
            if (min <= 9) {
                timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + sec;
            }
            if (sec <= 9) {
                timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + '0' + sec;
            }
        }
        if (min === 59) {
            min = 0;
            hrs++;
            timerFirstUser.innerHTML = hrs + ':' + min + ':' + sec;
        }
    }
    DurataChiamate();
}
function DurataChiamate() {
    let calcoloChiamate = 0;
    arrayDurataChiamate.push(calcoloChiamate);
    console.log(arrayDurataChiamate);
    if (arrayDurataChiamate.length) {
        if (secondi < 59) {
            secondi++;
            nodoChiamatePrimo.innerHTML = '0' + ore + ':' + '0' + minuti + ':' + secondi;
            if (secondi <= 9) {
                nodoChiamatePrimo.innerHTML = '0' + ore + ':' + '0' + minuti + ':' + '0' + secondi;
            }
        }
        else if (secondi === 59) {
            secondi = 0;
            minuti++;
            nodoChiamatePrimo.innerHTML = '0' + ore + ':' + '0' + minuti + ':' + secondi;
            if (min <= 9) {
                nodoChiamatePrimo.innerHTML = '0' + ore + ':' + '0' + minuti + ':' + secondi;
            }
            if (secondi <= 9) {
                nodoChiamatePrimo.innerHTML = '0' + ore + ':' + '0' + minuti + ':' + '0' + secondi;
            }
        }
        if (minuti === 59) {
            minuti = 0;
            ore++;
            nodoChiamatePrimo.innerHTML = ore + ':' + minuti + ':' + secondi;
        }
    }
}
function end() {
    riabilitaTastoVerde();
    hrs = 0;
    min = 0;
    sec = 0;
    clearInterval(interval);
    let saldoFirstUser = document.querySelector('.saldoFirstUser');
    saldoFirstUser.innerHTML = firstUser._carica.toFixed(2) + ' €';
    timerFirstUser.innerHTML = '0' + hrs + ':' + '0' + min + ':' + '0' + sec;
}
/*TIMER SECOND USER*/
let hrs_2 = 0;
let min_2 = 0;
let sec_2 = 0;
let ore_2 = 0;
let minuti_2 = 0;
let secondi_2 = 0;
let durata_2;
let interval_2;
let arrayDurataChiamate_2 = [];
let nodoChiamateSecondo = document.querySelector('.durataChiamateSecondUser');
nodoChiamateSecondo.innerHTML = '0' + ore_2 + ':' + '0' + minuti_2 + ':' + '0' + secondi_2;
let timerSecondUser = document.querySelector('.timerSecondUser');
timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min_2 + ':' + '0' + sec_2;
function disabilitaTastoVerdeSecondUser() {
    let btnStart = document.querySelector('.btnStartSecondUser');
    btnStart.classList.add("removeBugTimer");
}
function riabilitaTastoVerdeSecondUser() {
    let btnStart = document.querySelector('.btnStartSecondUser');
    btnStart.classList.remove("removeBugTimer");
}
function start_2() {
    disabilitaTastoVerdeSecondUser();
    if (secondUser._carica > (0.20 / 60)) {
        secondUser._numeroChiamate++;
    }
    interval_2 = setInterval(startINT_2, 1000);
    let numeroChiamateSecondUser = document.querySelector('.numeroChiamateSecondUser');
    numeroChiamateSecondUser.innerHTML = String(secondUser._numeroChiamate);
}
;
function startINT_2() {
    durata_2 = (hrs_2 * 60) + (sec_2 / 60) + min_2;
    secondUser.chiamata();
    if (secondUser._carica >= (0.20 / 60)) {
        if (sec_2 < 59) {
            sec_2++;
            timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min_2 + ':' + sec_2;
            if (sec_2 <= 9) {
                timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min_2 + ':' + '0' + sec_2;
            }
        }
        else if (sec_2 === 59) {
            sec_2 = 0;
            min_2++;
            timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min + ':' + sec_2;
            if (min_2 <= 9) {
                timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min_2 + ':' + sec_2;
            }
            if (sec_2 <= 9) {
                timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min_2 + ':' + '0' + sec_2;
            }
        }
        if (min_2 === 59) {
            min_2 = 0;
            hrs_2++;
            timerSecondUser.innerHTML = hrs_2 + ':' + min_2 + ':' + sec_2;
        }
    }
    DurataChiamate_2();
}
function DurataChiamate_2() {
    let calcoloChiamate_2 = 0;
    arrayDurataChiamate_2.push(calcoloChiamate_2);
    if (arrayDurataChiamate_2.length) {
        if (secondi_2 < 59) {
            secondi_2++;
            nodoChiamateSecondo.innerHTML = '0' + ore_2 + ':' + '0' + minuti_2 + ':' + secondi_2;
            if (secondi_2 <= 9) {
                nodoChiamateSecondo.innerHTML = '0' + ore_2 + ':' + '0' + minuti_2 + ':' + '0' + secondi_2;
            }
        }
        else if (secondi_2 === 59) {
            secondi_2 = 0;
            minuti_2++;
            nodoChiamateSecondo.innerHTML = '0' + ore_2 + ':' + '0' + minuti_2 + ':' + secondi_2;
            if (minuti_2 <= 9) {
                nodoChiamateSecondo.innerHTML = '0' + ore_2 + ':' + '0' + minuti_2 + ':' + secondi_2;
            }
            if (secondi_2 <= 9) {
                nodoChiamateSecondo.innerHTML = '0' + ore_2 + ':' + '0' + minuti_2 + ':' + '0' + secondi_2;
            }
        }
        if (minuti_2 === 59) {
            minuti_2 = 0;
            ore_2++;
            nodoChiamateSecondo.innerHTML = ore_2 + ':' + minuti_2 + ':' + secondi_2;
        }
    }
}
function end_2() {
    riabilitaTastoVerdeSecondUser();
    hrs_2 = 0;
    min_2 = 0;
    sec_2 = 0;
    clearInterval(interval_2);
    let saldoSecondUser = document.querySelector('.saldoSecondUser');
    saldoSecondUser.innerHTML = secondUser._carica.toFixed(2) + ' €';
    timerSecondUser.innerHTML = '0' + hrs_2 + ':' + '0' + min_2 + ':' + '0' + sec_2;
}
/*TIMER TERZO USER*/
let hrs_3 = 0;
let min_3 = 0;
let sec_3 = 0;
let ore_3 = 0;
let minuti_3 = 0;
let secondi_3 = 0;
let durata_3;
let interval_3;
let arrayDurataChiamate_3 = [];
let nodoChiamateTerzo = document.querySelector('.durataChiamateThirdUser');
nodoChiamateTerzo.innerHTML = '0' + ore_3 + ':' + '0' + minuti_3 + ':' + '0' + secondi_3;
let timerThirdUser = document.querySelector('.timerThirdUser');
timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + '0' + sec_3;
function disabilitaTastoVerdeThirdUser() {
    let btnStart = document.querySelector('.btnStartThirdUser');
    btnStart.classList.add("removeBugTimer");
}
function riabilitaTastoVerdeThirdUser() {
    let btnStart = document.querySelector('.btnStartThirdUser');
    btnStart.classList.remove("removeBugTimer");
}
function start_3() {
    disabilitaTastoVerdeThirdUser();
    if (thirdUser._carica > (0.20 / 60)) {
        thirdUser._numeroChiamate++;
    }
    interval_3 = setInterval(startINT_3, 1000);
    let numeroChiamateThirdUser = document.querySelector('.numeroChiamateThirdUser');
    numeroChiamateThirdUser.innerHTML = String(thirdUser._numeroChiamate);
}
;
function startINT_3() {
    durata_3 = (hrs_3 * 60) + (sec_3 / 60) + min_3;
    thirdUser.chiamata();
    if (thirdUser._carica >= (0.20 / 60)) {
        if (sec_3 < 59) {
            sec_3++;
            timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + sec_3;
            if (sec_3 <= 9) {
                timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + '0' + sec_3;
            }
        }
        else if (sec_3 === 59) {
            sec_3 = 0;
            min_3++;
            timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + sec_3;
            if (min_3 <= 9) {
                timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + sec_3;
            }
            if (sec_3 <= 9) {
                timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + '0' + sec_3;
            }
        }
        if (min_3 === 59) {
            min_3 = 0;
            hrs_3++;
            timerThirdUser.innerHTML = hrs_3 + ':' + min_3 + ':' + sec_3;
        }
    }
    DurataChiamate_3();
}
function DurataChiamate_3() {
    let calcoloChiamate_3 = 0;
    arrayDurataChiamate_3.push(calcoloChiamate_3);
    if (arrayDurataChiamate_3.length) {
        if (secondi_3 < 59) {
            secondi_3++;
            nodoChiamateTerzo.innerHTML = '0' + ore_3 + ':' + '0' + minuti_3 + ':' + secondi_3;
            if (secondi_3 <= 9) {
                nodoChiamateTerzo.innerHTML = '0' + ore_3 + ':' + '0' + minuti_3 + ':' + '0' + secondi_3;
            }
        }
        else if (secondi_3 === 59) {
            secondi_3 = 0;
            minuti_3++;
            nodoChiamateTerzo.innerHTML = '0' + ore_3 + ':' + '0' + minuti_3 + ':' + secondi_3;
            if (minuti_3 <= 9) {
                nodoChiamateTerzo.innerHTML = '0' + ore_3 + ':' + '0' + minuti_3 + ':' + secondi_3;
            }
            ;
            if (secondi_3 <= 9) {
                nodoChiamateTerzo.innerHTML = '0' + ore_3 + ':' + '0' + minuti_3 + ':' + '0' + secondi_3;
            }
            ;
        }
        if (minuti_3 === 59) {
            minuti_3 = 0;
            ore_3++;
            nodoChiamateTerzo.innerHTML = ore_3 + ':' + minuti_3 + ':' + secondi_3;
        }
    }
}
function end_3() {
    riabilitaTastoVerdeThirdUser();
    hrs_3 = 0;
    min_3 = 0;
    sec_3 = 0;
    clearInterval(interval_3);
    let saldoThirdUsers = document.querySelector('.saldoThirdUser');
    saldoThirdUsers.innerHTML = thirdUser._carica.toFixed(2) + ' €';
    timerThirdUser.innerHTML = '0' + hrs_3 + ':' + '0' + min_3 + ':' + '0' + sec_3;
}
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c, _d, _e, _f;
    /*FIRST USER*/
    let saldoFirstUser = document.querySelector('.saldoFirstUser');
    saldoFirstUser.innerHTML = firstUser._carica + ' €';
    let numeroChiamateFirstUser = document.querySelector('.numeroChiamateFirstUser');
    numeroChiamateFirstUser.innerHTML = String(firstUser._numeroChiamate);
    let importo = document.querySelector('.importoFirstUser');
    (_a = document.querySelector('.ricaricaFirstUser')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        firstUser.ricarica(Number(importo.value));
        importo.value = '';
    });
    (_b = document.querySelector('.azzeraFirstUser')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        firstUser._numeroChiamate = 0;
        let numeroChiamateFirstUser = document.querySelector('.numeroChiamateFirstUser');
        numeroChiamateFirstUser.innerHTML = String(firstUser._numeroChiamate);
    });
    // SECOND USER 
    let saldoSecondUser = document.querySelector('.saldoSecondUser');
    saldoSecondUser.innerHTML = secondUser._carica + ' €';
    let numeroChiamateSecondUser = document.querySelector('.numeroChiamateSecondUser');
    numeroChiamateSecondUser.innerHTML = String(secondUser._numeroChiamate);
    let importo_2 = document.querySelector('.importoSecondUser');
    (_c = document.querySelector('.ricaricaSecondUser')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        secondUser.ricarica(Number(importo_2.value));
        importo_2.value = '';
    });
    (_d = document.querySelector('.azzeraSecondUser')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
        secondUser._numeroChiamate = 0;
        let numeroChiamateSecondUser = document.querySelector('.numeroChiamateSecondUser');
        numeroChiamateSecondUser.innerHTML = String(secondUser._numeroChiamate);
    });
    // THIRD USER 
    let saldoThirdUsers = document.querySelector('.saldoThirdUser');
    saldoThirdUsers.innerHTML = thirdUser._carica + ' €';
    let numeroChiamateThirdUser = document.querySelector('.numeroChiamateThirdUser');
    numeroChiamateThirdUser.innerHTML = String(thirdUser._numeroChiamate);
    let importo_3 = document.querySelector('.importoThirdUser');
    (_e = document.querySelector('.ricaricaThirdUser')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
        thirdUser.ricarica(Number(importo_3.value));
        importo_3.value = '';
    });
    (_f = document.querySelector('.azzeraThirdUser')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', () => {
        thirdUser._numeroChiamate = 0;
        let numeroChiamateThirdUser = document.querySelector('.numeroChiamateThirdUser');
        numeroChiamateThirdUser.innerHTML = String(thirdUser._numeroChiamate);
    });
});
/* -------------------------------------PARTE GRAFICA-------------------------------------*/
function slidePrimoSmartphone() {
    let startPos;
    let diff = 0;
    let initialPos = -320;
    let vp = document.querySelector('.viewport');
    vp.addEventListener('mousedown', function (e) {
        startPos = e.clientX;
    });
    vp.addEventListener('mousemove', function (e) {
        if (startPos) {
            diff = e.clientX - startPos;
            vp.setAttribute('style', 'transform:translateX(' + (initialPos + diff) + 'px)');
        }
    });
    vp.addEventListener('mouseup', endMove);
    vp.addEventListener('mouseleave', endMove);
    function endMove() {
        startPos = 0;
        if (diff > 150) {
            initialPos = 0;
        }
        else if (diff < -150) {
            initialPos = -320;
        }
        diff = 0;
        vp.setAttribute('style', 'transform:translateX(' + (initialPos + diff) + 'px)');
    }
}
slidePrimoSmartphone();
function slideSecondoSmartphone() {
    let startPos;
    let diff = 0;
    let initialPos = -320;
    let vp2 = document.querySelector('.viewport2');
    vp2.addEventListener('mousedown', function (e) {
        startPos = e.clientX;
    });
    vp2.addEventListener('mousemove', function (e) {
        if (startPos) {
            diff = e.clientX - startPos;
            vp2.setAttribute('style', 'transform:translateX(' + (initialPos + diff) + 'px)');
        }
    });
    vp2.addEventListener('mouseup', endMove);
    vp2.addEventListener('mouseleave', endMove);
    function endMove() {
        startPos = 0;
        if (diff > 150) {
            initialPos = 0;
        }
        else if (diff < -150) {
            initialPos = -320;
        }
        diff = 0;
        vp2.setAttribute('style', 'transform:translateX(' + (initialPos + diff) + 'px)');
    }
}
slideSecondoSmartphone();
function slideTerzoSmartphone() {
    let startPos;
    let diff = 0;
    let initialPos = -320;
    let vp3 = document.querySelector('.viewport3');
    vp3.addEventListener('mousedown', function (e) {
        startPos = e.clientX;
    });
    vp3.addEventListener('mousemove', function (e) {
        if (startPos) {
            diff = e.clientX - startPos;
            vp3.setAttribute('style', 'transform:translateX(' + (initialPos + diff) + 'px)');
        }
    });
    vp3.addEventListener('mouseup', endMove);
    vp3.addEventListener('mouseleave', endMove);
    function endMove() {
        startPos = 0;
        if (diff > 150) {
            initialPos = 0;
        }
        else if (diff < -150) {
            initialPos = -320;
        }
        diff = 0;
        vp3.setAttribute('style', 'transform:translateX(' + (initialPos + diff) + 'px)');
    }
}
slideTerzoSmartphone();
function smartphoneNapoli() {
    let giornoEsatto1 = document.querySelector('#oraEsatta1');
    let todayDateTime1 = new Date().toLocaleString("eu-EU", { timeZone: "Europe/Rome" });
    giornoEsatto1.innerHTML = todayDateTime1;
}
smartphoneNapoli();
setInterval(smartphoneNapoli, 1000);
function smartPhoneNewYork() {
    let giornoEsatto2 = document.querySelector('#oraEsatta2');
    let todayDateTime2 = new Date().toLocaleString("eu-EU", { timeZone: "America/New_York" });
    giornoEsatto2.innerHTML = todayDateTime2;
}
smartPhoneNewYork();
setInterval(smartPhoneNewYork, 1000);
function smartphoneTokyo() {
    let giornoEsatto3 = document.querySelector('#oraEsatta3');
    let todayDateTime3 = new Date().toLocaleString("eu-EU", { timeZone: "Asia/Tokyo" });
    giornoEsatto3.innerHTML = todayDateTime3;
}
smartphoneTokyo();
setInterval(smartphoneTokyo, 1000);
