export class Pokemon{
    constructor(nom, lvl, vie, categorie, type, faiblesse, taille, poids){
        this.nom  = nom
        this.lvl = lvl
        this.vie = vie
        this.categorie = categorie
        this.type = type
        this.faiblesse = faiblesse
        this.taille = taille
        this.poids = poids
    }
}

export class Dracofeu extends Pokemon{
    constructor(nom, lvl, vie, categorie, type, faiblesse, taille, poids){
        super(nom, lvl, vie, categorie, type, faiblesse, taille, poids)
    }
}

export class Tortank extends Pokemon{
    constructor(nom, lvl, vie, categorie, type, faiblesse, taille, poids){
        super(nom, lvl, vie, categorie, type, faiblesse, taille, poids)
    }
}