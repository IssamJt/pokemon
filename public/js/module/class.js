export class Pokemon{
    constructor(nom, lvl, vie, categorie, type, faiblesse, taille, poids, attaque){
        this.nom  = nom
        this.lvl = lvl
        this.vie = vie
        this.categorie = categorie
        this.type = type
        this.faiblesse = faiblesse
        this.taille = taille
        this.poids = poids
        this.attaque = attaque
    }
}

export class Dracofeu extends Pokemon{
    constructor(nom, lvl, vie, categorie, type, faiblesse, taille, poids, attaque){
        super(nom, lvl, vie, categorie, type, faiblesse, taille, poids, attaque)
    }
    attaque1(pokeA, p, anim, pva){
        pokeA.vie -= this.attaque[0][2]
        pva.getElementsByTagName('p')[0].innerText = 'pv '+(p.value -= this.attaque[0][2])
        console.log(p)
        if(this.attaque[0][1]=='feu'){
            setTimeout(anim.className = 'flamme', 2000) 
        }
        
    }
    attaque2(pokeA, p, anim, pva, ){
        pokeA.vie -= this.attaque[1][2]
        pva.getElementsByTagName('p')[0].innerText = 'pv '+(p.value -= this.attaque[1][2])
        if(this.attaque[1][1]=='feu'){
            setTimeout(anim.className = 'flamme', 2000) 
        }

        


    }
    attaque3(pokeA, p, anim, pva){
        pokeA.vie -= this.attaque[2][2]
        pva.getElementsByTagName('p')[0].innerText = 'pv '+(p.value -= this.attaque[2][2])
        if(this.attaque[2][1]=='feu'){
            setTimeout(anim.className = 'flamme', 2000) 
        }
        

    }
    attaque4(pokeA, p, anim, pva  ){
        pokeA.vie -= this.attaque[3][2]
        pva.getElementsByTagName('p')[0].innerText = 'pv '+(p.value -= this.attaque[3][2])
        if(this.attaque[3][1]=='feu'){
            setTimeout(anim.className = 'flamme', 2000) 
        }
        

    }
    
}

export class Tortank extends Pokemon{
    constructor(nom, lvl, vie, categorie, type, faiblesse, taille, poids, attaque){
        super(nom, lvl, vie, categorie, type, faiblesse, taille, poids, attaque)
    }
    attaque1(pokeA, p, anim, pva){
            pokeA.vie -= this.attaque[0][2]
            pva.getElementsByTagName('p')[0].innerText = 'pv '+(p.value -= this.attaque[0][2])
            if(this.attaque[0][1]=='eau'){
                setTimeout(anim.className = 'eau', 2000)   
            }
    }
    attaque2(pokeA, p, anim, pva){
        pokeA.vie -= this.attaque[1][2]
        pva.getElementsByTagName('p')[0].innerText = 'pv '+(p.value -= this.attaque[1][2])
        if(this.attaque[1][1]=='eau'){
            setTimeout(anim.className = 'eau', 2000)   
        }
    }
    attaque3(pokeA, p, anim, pva){
        pokeA.vie -= this.attaque[2][2]
        pva.getElementsByTagName('p')[0].innerText = 'pv '+(p.value -= this.attaque[2][2])
        if(this.attaque[2][1]=='eau'){
            setTimeout(anim.className = 'eau', 2000)   
        }
    }
    attaque4(pokeA, p, anim, pva){
        pokeA.vie -= this.attaque[3][2]
        pva.getElementsByTagName('p')[0].innerText = 'pv '+(p.value -= this.attaque[3][2])
        if(this.attaque[3][1]=='eau'){
            setTimeout(anim.className = 'eau', 2000)   
        }
    }
}