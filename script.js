const ETUDIANTS = [
    {
        nom: 'khadim diop',
        age: 25,
        moyenne: 15
    },
    {
        nom: 'fama diop',
        age: 18,
        moyenne: 17
    },
    {
        nom: 'khady diouf',
        age: 21,
        moyenne: 16
    },
    {
        nom: 'massamba diallo',
        age: 19,
        moyenne: 19
    },
    {
        nom: 'khar kandji',
        age: 18,
        moyenne: 20
    },
    {
        nom: 'jossef bodian',
        age: 25,
        moyenne: 20
    },
    {
        nom: 'jean pierre',
        age: 30,
        moyenne: 17
    },
    {
        nom: 'lobe fall',
        age: 24,
        moyenne: 12
    },
    {
        nom: 'ibou diouf',
        age: 28,
        moyenne: 13
    },
    {
        nom: 'fransoi coulibaly',
        age: 32,
        moyenne: 10
    },
    ,
    {
        nom: 'lamine diallo',
        age: 28,
        moyenne: 9
    },
    {
        nom: 'fama fall',
        age: 32,
        moyenne: 8
    },
    {
        nom: 'khassim dia',
        age: 32,
        moyenne: 15
    },
    ,
    {
        nom: 'ndiombane seck',
        age: 26,
        moyenne: 15
    },
    {
        nom: 'djimbory fall',
        age: 30,
        moyenne: 18
    },
    {
        nom: 'khaly seck',
        age: 26,
        moyenne: 11
    },
    {
        nom: 'tacko fall',
        age: 25,
        moyenne: 18
    },
]
console.log(ETUDIANTS)


//############################## LES FONCTIONS ###################################

// METTRE LE NOM ET LE PRENOM EN MEJUSCULE
const uppercaseWord=(tab)=>{
    tab.forEach(etudiant => {
        etudiant.nom = etudiant.nom.toUpperCase()
    
    });
    return tab

}
// METTRE LE PREMIER LETTRE  DU PRENOM EN MEJUSCULE
 const uppercaseFirstLetterFisrtName=(nom)=>{
    let leNom='';
    let index = nom.indexOf(' ');
    let testes = '';
    for (let i = 0; i < index; i++) {
        if (nom[i].charCodeAt() !== 32) {
            leNom = nom[0].toUpperCase()
            testes += nom[i+1]
        }
       
    }
return leNom.concat(testes)
}

// METTRE LE PREMIER LETTRE DU NOM  EN MEJUSCULE
const uppercaseFirstLetterLastName=(nom)=>{
    for (let i = 0; i < nom.length; i++) {
        if (nom[i].charCodeAt()=== 32) {
            i++
            return nom[i].toUpperCase()+nom.slice(i+1) 
        }
       
    }

}
// AFFICHAGE DU TABLEAU
const showTable = ()=>{
    document.getElementById('corpTab').innerHTML = '';
    ETUDIANTS.forEach(etudiant => {
        document.getElementById('corpTab').innerHTML += 
        `<tr>
        <td>${uppercaseFirstLetterFisrtName(etudiant.nom)+ uppercaseFirstLetterLastName(etudiant.nom) }</td>
        <td>${etudiant.age}</td>
        <td>${etudiant.moyenne}</td>
        </tr>`
        
    });
}
showTable()

//AFFICHAGE LES ETUDIANTS QUI SONT EXCELENTS
const showTableExcelent= ()=>{
    console.log('first')
    document.getElementById('corpTab').innerHTML = '';
    ETUDIANTS.forEach(etudiant => {
        if ( etudiant.moyenne >= 17 && etudiant.moyenne <= 20) {
            document.getElementById('corpTab').innerHTML += 
            `<tr>
            <td>${uppercaseFirstLetterFisrtName(etudiant.nom)+ uppercaseFirstLetterLastName(etudiant.nom) }</td>
            <td>${etudiant.age}</td>
            <td>${etudiant.moyenne}</td>
            </tr>` 
        }
        
    });
}

// AFFICHAGE LES ETUDIANTS QUI SONT TRES BIENS
const showTableTresbien = ()=>{
    console.log('first')
    document.getElementById('corpTab').innerHTML = '';
    ETUDIANTS.forEach(etudiant => {
        if (etudiant.moyenne === 16 ) {
            document.getElementById('corpTab').innerHTML += 
            `<tr>
            <td>${uppercaseFirstLetterFisrtName(etudiant.nom)+ uppercaseFirstLetterLastName(etudiant.nom) }</td>
            <td>${etudiant.age}</td>
            <td>${etudiant.moyenne}</td>
            </tr>` 
        }
        
    });
}

// AFFICHAGE LES ETUDIANTS QUI SONT BIENS
const showTableBien = ()=>{
    console.log('first')
    document.getElementById('corpTab').innerHTML = '';
    ETUDIANTS.forEach(etudiant => {
        if (etudiant.moyenne >= 14 && etudiant.moyenne  <=15) {
            document.getElementById('corpTab').innerHTML += 
            `<tr>
            <td>${uppercaseFirstLetterFisrtName(etudiant.nom)+ uppercaseFirstLetterLastName(etudiant.nom) }</td>
            <td>${etudiant.age}</td>
            <td>${etudiant.moyenne}</td>
            </tr>` 
        }
        
    });
}
// AFFICHAGE LES ETUDIANTS QUI SONT ASSEZ BIENS
const showTableAssezbien = ()=>{
    console.log('first')
    document.getElementById('corpTab').innerHTML = '';
    ETUDIANTS.forEach(etudiant => {
        if (etudiant.moyenne >= 12 && etudiant.moyenne  <=13) {
            document.getElementById('corpTab').innerHTML += 
            `<tr>
            <td>${uppercaseFirstLetterFisrtName(etudiant.nom)+ uppercaseFirstLetterLastName(etudiant.nom) }</td>
            <td>${etudiant.age}</td>
            <td>${etudiant.moyenne}</td>
            </tr>` 
        }
        
    });
}

// AFFICHAGE LES ETUDIANTS QUI SONT PASSABLES
const showTablePassable= ()=>{
    console.log('first')
    document.getElementById('corpTab').innerHTML = '';
    ETUDIANTS.forEach(etudiant => {
        if (etudiant.moyenne >= 11 && etudiant.moyenne  <=10) {
            document.getElementById('corpTab').innerHTML += 
            `<tr>
            <td>${uppercaseFirstLetterFisrtName(etudiant.nom)+ uppercaseFirstLetterLastName(etudiant.nom) }</td>
            <td>${etudiant.age}</td>
            <td>${etudiant.moyenne}</td>
            </tr>` 
        }
        
    });
}
// AFFICHAGE LES ETUDIANTS QUI SONT AJOURNES
const showTableInsuffisant= ()=>{
    console.log('first')
    document.getElementById('corpTab').innerHTML = '';
    ETUDIANTS.forEach(etudiant => {
        if (etudiant.moyenne <10) {
            document.getElementById('corpTab').innerHTML += 
            `<tr>
            <td>${uppercaseFirstLetterFisrtName(etudiant.nom)+ uppercaseFirstLetterLastName(etudiant.nom) }</td>
            <td>${etudiant.age}</td>
            <td>${etudiant.moyenne}</td>
            </tr>` 
        }
        
    });
}




let nom = 'modou fall';


// LE CODE UNICODE DE L'ESPACE EST : 32
// #################### ECOUTEURS D'EVENEMENTS #############################

// TOUS LES ETUDISNTS
let btnTous = document.querySelector('.btnTous');
btnTous.addEventListener('click', showTable);

// LES ETUDIANTS QUI SONT EXCELENTS
let btnExcelent = document.querySelector('.btnExcelent');
btnExcelent.addEventListener('click', showTableExcelent);
 
// LES ETUDIANTS QUI SONT TRES BIENS
let btnTresbien = document.querySelector('.btnTresbien');
btnTresbien.addEventListener('click', showTableTresbien);

// LES ETUDIANTS QUI SONT BIENS
let btnBien = document.querySelector('.btnBien');
btnBien.addEventListener('click', showTableBien);

// LES ETUDIANTS QUI SONT ASSEZ BIENS
let btnAssezbien = document.querySelector('.btnAssezbien');
btnAssezbien.addEventListener('click', showTableAssezbien);

// LES ETUDIANTS QUI SONT PASSABLES
let btnPassable = document.querySelector('.btnPassable');
btnPassable.addEventListener('click', showTablePassable);

// LES ETUDIANTS QUI SONT INSUFFISANTS
let btnInsuffisant = document.querySelector('.btnInsuffisant');
btnInsuffisant.addEventListener('click', showTableInsuffisant);






