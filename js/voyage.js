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
        return new Promise((resolve, reject) => {
            let objetTrouve;
            this.sejour.forEach(element => {
                if (element.nom == nom) {
                    objetTrouve = element;
                    resolve(objetTrouve);
                }
                else {
                    reject(`le séjour  ${nom} est introuvable`);
                }
            });
        });
    }
}
const service = new SejourService();
const promises$ = service.rechercherParNom('barcelone');
promises$
    .then(element => console.log('Séjour trouvé', element))
    .catch(err => console.log('OOps', err));
