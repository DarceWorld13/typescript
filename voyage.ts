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
    rechercherParNom(nom: string): Promise<Sejour> {
        
        
        return new Promise((resolve, reject) => {
            let objetTrouve:Sejour; 
            this.sejour.forEach(element=>{
                 
            if(element.nom ==nom){
            objetTrouve =element; 
            resolve(objetTrouve);
            }else{
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