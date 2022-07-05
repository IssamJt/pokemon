import * as P from "./module/class.js";

// nom, lvl, vie, categorie, type, faiblesse, taille, poids
let dracofeu = new P.Dracofeu('Dracofeu', 80, 78, 'flamme', ['feu', 'vol'], ['eau', 'electrik', 'roche'], 1.7, 90.5 )
let tortank = new P.Tortank('Tortank', 85, 95, 'carapace', ['eau'], ['plante', 'electrik'], 1.6, 85.5 )

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
let pokemoi = document.querySelectorAll('div')[8]

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



if(pokemon[randomA]==dracofeu){
    poke1.className = 'dracofeufront'
    nomA.getElementsByTagName('p')[0].innerText = pokemon[randomA].nom
    pva.getElementsByTagName('p')[0].innerText = 'pv '+pokemon[randomA].vie
    lvla.getElementsByTagName('p')[0].innerText = 'lvl '+ pokemon[randomA].lvl
}
else{
    nomA.getElementsByTagName('p')[0].innerText = pokemon[randomA].nom
    pva.getElementsByTagName('p')[0].innerText = 'pv '+pokemon[randomA].vie
    lvla.getElementsByTagName('p')[0].innerText = 'lvl '+ pokemon[randomA].lvl
    

}


if(pokemon[randomMoi]==tortank){
    pokemoi.className = 'tortankback'
    nom.getElementsByTagName('p')[0].innerText = pokemon[randomMoi].nom
    pv.getElementsByTagName('p')[0].innerText = 'pv '+pokemon[randomMoi].vie
    lvl.getElementsByTagName('p')[0].innerText = 'lvl '+ pokemon[randomMoi].lvl
    attaquefaible1.addEventListener('mouseover', function () {
        partie2.style.background = 'blue'
    })
    attaquefaible2.addEventListener('mouseover', function () {
        partie2.style.background = 'red'
    })
    attaqueforte1.addEventListener('mouseover', function () {
        partie2.style.background = 'orange'
    })
    attaqueforte2.addEventListener('mouseover', function () {
        partie2.style.background = 'yellow'
    })
}
else{
    nom.getElementsByTagName('p')[0].innerText = pokemon[randomMoi].nom
    pv.getElementsByTagName('p')[0].innerText = 'pv '+pokemon[randomMoi].vie
    lvl.getElementsByTagName('p')[0].innerText = 'lvl '+ pokemon[randomMoi].lvl
    attaquefaible1.addEventListener('mouseover', function () {
        partie2.style.background = 'blue'
    })
    attaquefaible2.addEventListener('mouseover', function () {
        partie2.style.background = 'red'
    })
    attaqueforte1.addEventListener('mouseover', function () {
        partie2.style.background = 'orange'
    })
    attaqueforte2.addEventListener('mouseover', function () {
        partie2.style.background = 'yellow'
    })
    attaqueforte1.className = 'orange'
    attaqueforte2.className = 'orange'
    attaquefaible1.className = 'orange'
    attaquefaible2.className = 'orange'
    
}