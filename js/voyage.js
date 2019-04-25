"use strict";
class Sejour {
    constructor(_nom, prix) {
        this._nom = _nom;
        this.prix = prix;
    }
    get nom() {
        return this._nom;
    }
}
class SejourService {
    constructor() {
        this.sejour = [new Sejour('barcelone', 120), new Sejour('Paris', 500)];
    }
    rechercherParNom(nom) {
        let elementTrouve;
        this.sejour.forEach(element => {
            if (element.nom == nom) {
                elementTrouve = element;
            }
        });
        return elementTrouve;
    }
}
let a = new SejourService();
const sejourTrouve = a.rechercherParNom('Paris');
console.log(sejourTrouve);
