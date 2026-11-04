# Carnet d'observation des sols

> Projet individuel du SAS DFS, brief 3 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

Cet outil est destiné à l'équipe de la ferme pédagogique et aux techniciens de terrain (Agritech). Il permet d'enregistrer les informations sur le sol de chaque parcelle (texture, pH et humidité). Il aide à repérer les sols qui nécessitent une attention particulière, notamment ceux dont le pH est inférieur à 5,5. Les données enregistrées peuvent être consultées, classées et résumées.
## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-3-carnet-sols.git
cd brief-3-carnet-sols
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [x ] Données lues et enregistrées dans `donnees/observations.json`
- [x ] Ajouter une observation, saisies invalides refusées sans arrêter le programme
- [x ] Lister les observations, message si le carnet est vide
- [x ] Rechercher par point ou par parcelle ; filtrer par texture
- [x ] Trier par pH
- [x ] Synthèse : pH minimum et maximum, nombre par texture, points à discuter (pH < 5,5)
- [ x] Bonus : supprimer et modifier une observation (choix 6 et 7)
- [x ] Bonus : tri par pH décroissant, texture la plus fréquente

## Données

Les données sont stockées au format JSON dans le fichier donnees/observations.json. Le fichier contient des observations initiales fictives de la ferme pédagogique. Chaque observation comprend :

id : Identifiant unique du point observé

parcelle : Nom ou numéro de la parcelle
texture : Classe de texture du sol
pH : Valeur du pH mesurée, nombre compris entre 0 et 14 

etatHumidite : État d'humidité du sol 

## Limites

Le carnet signale les pH inférieurs à 5,5 afin d'en discuter avec le coach, sans donner de diagnostic ni de conseil automatique sur la fertilisation.

L'outil fonctionne uniquement dans la console, sans interface graphique ni carte interactive.

Le programme ne calcule pas la moyenne du pH, car son échelle est logarithmique.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

Konan Cedric Bertrant Assie, konan992. w3school ,datacamp, sur app.js ,sur synthese.js et bonnus.js