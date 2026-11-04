# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. 
*Les resultats à la main dans le fichier releve :
-le pH Min et Max ,avec le piont relevé
- le nombre d'observation pour chaque texture 
- le poin de relever du pH est strictement inferieur à 5,5
-pH Min S04 = 4,8
-pH Max S08 = 7,6
* nombre d'observation de chaque texture :
-argileux : 3
-sableux : 3
-limoneux : 4
*les points dont le pH est strictemnt inferieur à 5,5 :
S04,S09,S06,S01


**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
|Ajouter une observation valide |L'observation est enregistrée | L'observation est bien enregistrée.|Moi |
| Saisir un pH incorrect |	Le programme refuse la valeu |La valeur incorrecte est refusée |Moi|
| Afficher les observations |Toutes les observations sont affichées. |Les observations s'affichent correctement |Moi |
| Rechercher une parcelle inexistante|Un message indique que la parcelle n'existe pas. |Le message s'affiche correctement |Moi |
| Trier les parcelles par pH| Les parcelles sont classées selon leur pH|Le classement fonctionne correctement |Moi |
| Afficher la synthèse |Le programme affiche les statistiques des sols | Les informations statistiques s'affichen|Moi |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️
