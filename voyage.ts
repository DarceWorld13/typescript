class Sejour {

    constructor(private _nom: string, private prix: number) {

    }

    get nom() {
        return this._nom;
    }
}
class SejourService {

    private sejour: Array<Sejour>;

    constructor() {
        this.sejour = [new Sejour('barcelone', 120), new Sejour('Paris', 500)];

    }
    rechercherParNom(nom: string): Sejour | void {
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