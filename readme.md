# Projet de Rendu Markdown en Temps Réel

## Description
Ce projet implémente un rendu Markdown en temps réel, affichant le texte progressivement avec un effet de machine à écrire.

## Fonctionnalités
- Rendu Markdown en temps réel
- Effet de machine à écrire
- Gestion des titres, paragraphes, et code inline

## Structure du Projet
Le projet est structuré comme suit :
- `index.html` : Page principale contenant la structure HTML et le script intégré
- `script.ts` : Fichier TypeScript contenant la logique de rendu Markdown
- `script.js` : Fichier JavaScript contenant la logique de rendu Markdown apres execution de `tsc script.ts`
- `tsconfig.json` : Configuration TypeScript
- `README.md` : Ce fichier, contenant la documentation du projet

## Problème Rencontré
### Fonction `random`
Lors de l'implémentation, un problème a été identifié avec la fonction `random`. Cette fonction causait des comportements inattendus dans le rendu Markdown. Bien qu'il ait été initialement indiqué de ne pas modifier le code en dessous, il était crucial d'ajuster cette fonction pour garantir le bon fonctionnement du projet.

## Réponse au BONUS
BONUS: Es-tu assez attentif pour trouver l'erreur qui s'est glissée dans l'énoncé ?

Réponse : L'erreur résidait dans la nécessité de modifier la fonction `start()` et de corriger la fonction `random`, malgré l'instruction de ne pas toucher à cette partie du code. Ces ajustements étaient essentiels pour assurer le bon fonctionnement du rendu Markdown en temps réel.

## Note Importante
La fonction `start()` dans `index.html` a été modifiée pour intégrer correctement le rendu Markdown et l'effet de machine à écrire. De plus, la fonction `random` a été corrigée pour éviter les comportements inattendus.

## Comment Utiliser


## Contribution


## Licence

