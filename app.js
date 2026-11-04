// Carnet d'observation des sols — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
// Carnet d'observation des sols — point d'entrée : le menu.
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { HUMIDITES, TEXTURES, ajouterObservation, formaterObservation, listerObservations, trouverParId } from './src/registre.js';
import { filtrerParParcelle, filtrerParTexture, trierParPh } from './src/recherche.js';
import { SEUIL_PH_A_DISCUTER, compterParTexture, phMinMax, pointsADiscuter } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/observations.json';

function afficherAccueil() {
    console.log('======================================');
    console.log("CARNET D'OBSERVATION DES SOLS");
    console.log('Ferme pédagogique');
    console.log('======================================');
}

function afficherMenu() {
    console.log('\nMENU')
    console.log('1. Ajouter une observation')
    console.log('2. Lister les observations')
    console.log('3. Rechercher (point, parcelle, texture)')
    console.log('4. Trier par pH')
    console.log('5. Synthèse des observations')
    console.log('0. Quitter')
}

async function chargerRegistre() {
    try {
        const observations = await chargerJson(FICHIER_DONNEES)

        console.log(`${observations.length} observation(s) chargée(s) depuis ${FICHIER_DONNEES}.`)

        return observations
    } catch (erreur) {
        console.log(`Impossible de lire ${FICHIER_DONNEES} : ${erreur.message}. Le registre démarre vide.`)
        return []
    }
}

async function ajouter(observations) {
    console.log('\n--- Ajouter une observation ---')
    const id = await demander('Identifiant du point (ex: S04) : ')
    if (id === null) return
    


    const parcelle = await demander('Parcelle (ex: P2) : ')
    if (parcelle === null) return
    

    const texture = await demander(`Texture (${TEXTURES.join(', ')}) : `)
    if (texture === null) return
    

    const pH = await demander('pH (0 à 14) : ')
    if (pH === null) return
    

    const etatHumidite = await demander(`État d'humidité (${HUMIDITES.join(', ')}) : `)
    if (etatHumidite === null) return

    const saisie = {
        id: id.trim(),
        parcelle: parcelle.trim(),
        texture: texture.toLowerCase().trim(),
        pH: pH,
        etatHumidite: etatHumidite.toLowerCase().trim()
    };

    const erreurs = ajouterObservation(observations, saisie)
    if (erreurs.length === 0) {
        await enregistrerJson(FICHIER_DONNEES, observations)

        console.log(`Observation ${saisie.id} ajoutée avec succès. Le registre compte ${observations.length} observation(s).`)
    } else {
        console.log('Observation refusée :')
        for (const erreur of erreurs) {
            console.log(` - ${erreur}`)
        }
    }
}

