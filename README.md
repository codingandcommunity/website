# {Coding&&Community} — Website

This is {coding&&community}'s repository for our website available at https://codingandcommunity.github.io/website.

It's built using Hugo and Bootstrap, based on the [Hugo Elate Theme](https://github.com/saey55/hugo-elate-theme) by saey55.

## Developing, Building and Deployment

Before we begin anything, you should make sure you have Hugo installed.
Instructions for that are available [here](https://gohugo.io/getting-started/installing/).

Once Hugo is installed, you can take a peek at the website by entering the repository's folder on your machine and running ```hugo server```. By default, it will run on ```localhost:1313```.

### Modifications
  Most modifications can (and _should_) be done by editing the ```config.toml``` file in the repository's root folder. Take a look, modify some fields, and see how the website responds — so long as ```hugo server``` is running, changes will ___automagically___ be reflected in your browser.

### Building
  Running ```hugo``` in the root repository directory will build the website, creating a ```public``` folder which should be treated as the website root. The web server being used ___should___ use this folder as its root. The ```public``` folder shouldn't be committed to the upstream GitHub repository (it's ignored in ```.gitignore```), as there's nothing unique about it, and it can be dynamically reproduced by simply running ```hugo``` again.
