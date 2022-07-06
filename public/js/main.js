import * as P from "./module/class.js";

// nom, lvl, vie, categorie, type, faiblesse, taille, poids
let dracofeu = new P.Dracofeu('Dracaufeu', 80, 78, 'flamme', ['feu', 'vol'], ['eau', 'electrik', 'roche'], 1.7, 90.5, [['danse flamme', 'feu', 14], ['flammèche', 'feu', 10], ["lame d'air", 'vol', 14], ['cru-aile', 'vol', 8]] )
let tortank = new P.Tortank('Tortank', 85, 79, 'carapace', ['eau'], ['plante', 'electrik'], 1.6, 85.5, [['Hydrocanon', 'eau', 13], ['Hydroblast', 'eau', 9], ["Laser Glace", 'glace', 9], ['Luminocanon', 'acier', 10]] )

let pokemon = [dracofeu, tortank]
let randomA = Math.floor(Math.random()*pokemon.length)
console.log(randomA)
let randomMoi =Math.floor(Math.random()*pokemon.length)
while (randomMoi == randomA) {
    randomMoi = Math.floor(Math.random()*pokemon.length)
}
// c'est la div ou y a l'image du pokemon adverse
let poke1 = document.querySelectorAll('div')[6]
// c'est la div ou y a l'image de mon pokemon
let pokemoi = document.querySelectorAll('div')[9]

let attaque = document.querySelectorAll('div')[8]


// c'est la div ou y a le nom du pokemon adverse
let nomA = document.getElementsByClassName('noma')[0]
// c'est la div ou y a le nom de mon pokemon
let nom = document.getElementsByClassName('nom')[0]

// c'est la div ou y a le nombre de pv du pokemon adverse
let pva = document.getElementsByClassName('pva')[0]
// c'est la div ou y a le nombre de pv de mon pokemon
let pv = document.getElementsByClassName('pv')[0]

// c'est la div ou y a le lvl du pokemon adverse
let lvla = document.getElementsByClassName('lvla')[0]
// c'est la div ou y a le lvl de mon pokemon
let lvl = document.getElementsByClassName('lvl')[0]

let attaqueforte1 = document.getElementsByClassName('attaqueforte1')[0].querySelector('button')
let attaqueforte2 = document.getElementsByClassName('attaqueforte2')[0].querySelector('button')
let attaquefaible1 = document.getElementsByClassName('attaquefaible1')[0].querySelector('button')
let attaquefaible2 = document.getElementsByClassName('attaquefaible2')[0].querySelector('button')
let partie2 = document.getElementsByClassName('partie2')[0]
let partie1 = document.getElementsByClassName('partie1')[0]



if(pokemon[randomA]==dracofeu){
    poke1.className = 'dracofeufront'
    nomA.getElementsByTagName('p')[0].innerText = pokemon[randomA].nom
    pva.getElementsByTagName('p')[0].innerText = 'pv '+pokemon[randomA].vie   
}
else{
    nomA.getElementsByTagName('p')[0].innerText = pokemon[randomA].nom
    pva.getElementsByTagName('p')[0].innerText = 'pv '+pokemon[randomA].vie
    lvla.getElementsByTagName('p')[0].innerText = 'lvl '+ pokemon[randomA].lvl
    

}
function color1(pokem){
    if(pokem.attaque[0][1]=='eau'){
        partie2.style.background = 'rgb(105, 191, 237)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/eau'
        partie2.getElementsByClassName('degat')[0].innerText ='attaque/'+ pokem.attaque[0][2]
    }
    else if(pokem.attaque[0][1]=='glace'){
        partie2.style.background = 'rgb(172, 254, 254)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/glace'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[0][2]
    }
    else if(pokem.attaque[0][1]=='acier'){
        partie2.style.background = 'rgb(170, 168, 168)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/acier'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[0][2]
    }
    else if(pokem.attaque[0][1]=='feu'){
        partie2.style.background = 'orange'
        partie2.getElementsByClassName('type')[0].innerText = 'type/feu'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[0][2]
    }
    else if(pokem.attaque[0][1]=='vol'){
        partie2.style.background = 'rgb(220, 216, 216)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/vol'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[0][2]
    }

}

function color2(pokem){
    if(pokem.attaque[1][1]=='eau'){
        partie2.style.background = 'rgb(105, 191, 237)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/eau'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[1][2]
    }
    else if(pokem.attaque[1][1]=='glace'){
        partie2.style.background = 'rgb(172, 254, 254)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/glace'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[1][2]
    }
    else if(pokem.attaque[1][1]=='acier'){
        partie2.style.background = 'rgb(170, 168, 168)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/acier'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[1][2]
    }
    else if(pokem.attaque[1][1]=='feu'){
        partie2.style.background = 'orange'
        partie2.getElementsByClassName('type')[0].innerText = 'type/feu'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[1][2]
    }
    else if(pokem.attaque[1][1]=='vol'){
        partie2.style.background = 'rgb(220, 216, 216)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/vol'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[1][2]
    }
}

function color3(pokem){
    if(pokem.attaque[2][1]=='eau'){
        partie2.style.background = 'rgb(105, 191, 237)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/eau'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[2][2]
    }
    else if(pokem.attaque[2][1]=='glace'){
        partie2.style.background = 'rgb(172, 254, 254)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/glace'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[2][2]
    }
    else if(pokem.attaque[2][1]=='acier'){
        partie2.style.background = 'rgb(170, 168, 168)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/acier'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[2][2]
    }
    else if(pokem.attaque[2][1]=='feu'){
        partie2.style.background = 'orange'
        partie2.getElementsByClassName('type')[0].innerText = 'type/feu'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[2][2]
    }
    else if(pokem.attaque[2][1]=='vol'){
        partie2.style.background = 'rgb(220, 216, 216)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/vol'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[2][2]
    }
}

function color4(pokem){
    if(pokem.attaque[3][1]=='eau'){
        partie2.style.background = 'rgb(105, 191, 237)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/eau'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[3][2]
    }
    else if(pokem.attaque[3][1]=='glace'){
        partie2.style.background = 'rgb(172, 254, 254)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/glace'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[3][2]
    }
    else if(pokem.attaque[3][1]=='acier'){
        partie2.style.background = 'rgb(170, 168, 168)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/acier'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[3][2]
    }
    else if(pokem.attaque[3][1]=='feu'){
        partie2.style.background = 'orange'
        partie2.getElementsByClassName('type')[0].innerText = 'type/feu'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[3][2]
    }
    else if(pokem.attaque[3][1]=='vol'){
        partie2.style.background = 'rgb(220, 216, 216)'
        partie2.getElementsByClassName('type')[0].innerText = 'type/vol'
        partie2.getElementsByClassName('degat')[0].innerText = 'attaque/'+pokem.attaque[3][2]
    }
}
let progressA = document.getElementsByClassName('progressA')[0]
progressA.value = pokemon[randomA].vie
progressA.max = pokemon[randomA].vie
console.log(progressA)
let progressMoi = document.getElementsByClassName('progressMoi')[0]
progressMoi.value = pokemon[randomMoi].vie
progressMoi.max = pokemon[randomMoi].vie
    
if(pokemon[randomMoi]==tortank){
    pokemoi.className = 'tortankback'
    nom.getElementsByTagName('p')[0].innerText = pokemon[randomMoi].nom
    pv.getElementsByTagName('p')[0].innerText = 'pv '+pokemon[randomMoi].vie
    lvl.getElementsByTagName('p')[0].innerText = 'lvl '+ pokemon[randomMoi].lvl

    attaqueforte1.innerText = tortank.attaque[0][0]
    attaqueforte1.addEventListener('mouseover', function () {
        color1(tortank)
        attaque.className = ''

    })
    attaqueforte2.innerText = tortank.attaque[1][0]
    attaqueforte2.addEventListener('mouseover', function () {
        color2(tortank)
        attaque.className = ''

    })
    attaquefaible1.innerText = tortank.attaque[2][0]
    attaquefaible1.addEventListener('mouseover', function () {
        color3(tortank)
        attaque.className = ''

    })
    attaquefaible2.innerText = tortank.attaque[3][0]
    attaquefaible2.addEventListener('mouseover', function () {
        color4(tortank)
        attaque.className = ''

    })
    
}
else{
    nom.getElementsByTagName('p')[0].innerText = pokemon[randomMoi].nom
    pv.getElementsByTagName('p')[0].innerText = 'pv '+pokemon[randomMoi].vie
    lvl.getElementsByTagName('p')[0].innerText = 'lvl '+ pokemon[randomMoi].lvl
    
    attaqueforte1.innerText = dracofeu.attaque[0][0]
    attaqueforte1.addEventListener('mouseover', function () {
        color1(dracofeu)
        attaque.className = ''
    })

    attaqueforte2.innerText = dracofeu.attaque[1][0]
    attaqueforte2.addEventListener('mouseover', function () {
        color2(dracofeu)
        attaque.className = ''

    })

    attaquefaible1.innerText = dracofeu.attaque[2][0]
    attaquefaible1.addEventListener('mouseover', function () {
        color3(dracofeu)
        attaque.className = ''

    })

    attaquefaible2.innerText = dracofeu.attaque[3][0]
    attaquefaible2.addEventListener('mouseover', function () {
        color4(dracofeu)
        attaque.className = ''

    })

    attaqueforte1.className = 'orange'
    attaqueforte2.className = 'orange'
    attaquefaible1.className = 'orange'
    attaquefaible2.className = 'orange'
    
}


    if(pokemon[randomA].vie>0 ){
        
            attaqueforte1.addEventListener('click',function () {
                pokemon[randomMoi].attaque1( pokemon[randomA],progressA, attaque, pva, poke1)
            })
            attaqueforte2.addEventListener('click',function () {
                pokemon[randomMoi].attaque2( pokemon[randomA], progressA, attaque, pva, poke1)
            
    
    
            })
            attaquefaible1.addEventListener('click',function () {
                pokemon[randomMoi].attaque3( pokemon[randomA], progressA, attaque, pva)
    
            })
            attaquefaible2.addEventListener('click',function () {
                pokemon[randomMoi].attaque4( pokemon[randomA],progressA, attaque, pva)
    
            })
            
            console.log(progressA.value)

        }
        else if(pokemon[randomA].vie<0){
            partie1.innerText = 'holla'
        }

    
    console.log(progressA.value)

        
    



