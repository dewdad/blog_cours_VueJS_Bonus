# Blog
Autheur - Timothée ADRIEN

## Lancement de l'appli

``` bash
# Installation des dépendances
npm install

# Déploiement avec hot reload à localhost:8080
npm run dev
````

Lors de ce cours nous avons appris les bases de VueJS. Ce blog est un moyen de mettre
 en oeuvre ce que j'ai appris.

## Dépendances
- Vue router: Permet la gestion des routes (urls) de l'application
- Vuex: Permet le stockage des données dans un state
- Vuex-ORM: Permet de gérer les states des données grâce à un ORM
- Vuex-ORM AXIOS plugin: Pour gérer la synchro des states avec un serveur
- Vuetify: composant framework qui allie Material design, composants graphiques prêt 
à l'emploi, intégration avec vue
- Lodash: Permet de traiter principalement des tableaux (order, find, sort...)
- Material design: pour le style
- Moment: Pour le traitement de dates (pour la partie agenda que je n'ai pas finie car je rend le blog)


## Flow de l'application
1. http://localhost:8080/#/ redirige vers http://localhost:8080/#/blog grâce à la redirection de vue router 
car nous n'avons actuellement pas de page d'accueil à proprement parler.

2. Vous verrez afficher la liste des articles présent sur le site.

3. En bas à droite il y a la possibilité de créer et supprimer des articles grâce au deux fab button;
l'ajout (+) ouvre une popup de création d'article, l'autre 'toggle' les boutons permettant de supprimer les articles.

4. Chaque Article est représenté succintement sous la forme de Card UI avec une photo, un titre, une description,
le nombre de commentaires de l'article et un bouton 'LIRE' qui permet de voir plus en détail l'article en question.

5. Si nous naviguons vers le détail de l'article grâce à ce dernier nous verrons apparaître la page article.
(http://localhost:8080/#/blog/article/:id).

6. En en-tête nous avon le titre ainsi que l'autheur et la date de publication; en dessous l'image ainsi que la
description pleine de l'article.

7. La zone en dessous recense les commentaires liés à l'article détaillé, un bouton '+ commentaire' permet d'en ajouter
un. Il suffira par la suite de rentrer un commentaire et de cliquer sur 'PUBLIER'.

8. Le commentaire se rajouter à la suite des autres, et si nous revenons en arrière n
ous appercevrons que le 
nombre de commentaire à augmenté du nombre de commentaire que vous avez saisi.

## Découpage de l'application
Composants: 
- Blog: Layout qui inclut les autres composants
- AddArticle: Fab button d'ajout + popup d'ajout d'article
- AddCommentaire: Zone d'ajout de commentaires
- ArticleDetail: Page de détail de l'article, utilise l'id passé en paramètre dans l'URL
- NavBar: Barre de navigation de l'application
- CardUI: Affiche les infos sommaires d'un article
