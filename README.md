# Boilerplate Website

This repository is for the Boilerplate website at [insertdomainhere].

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

-  The site is built with [Craft CMS 3](https://craftcms.com)
-  This site uses a multi-environment config (https://docs.craftcms.com/v3/config/environments.html) to set details for local, staging and production
-  See https://docs.craftcms.com/v3/config/config-settings.html for general config settings.

### Prerequisites

Craft CMS is built on PHP, so it needs a local environment to run it. This project should run in multiple environments, but it assumes [Laravel Valet](https://laravel-mix.com) by default.

-  Composer 2
-  Apache / Nginx
-  PHP 8.0+
-  MySQL or MariaDB
-  This repository was built using Laravel Valet as a local environment. If you're using Apache instead of nginx, you'll need to download Craft's default `.htaccess` file and put it in the document root.

## Project Config

This Craft website uses [Project Config](https://craftcms.com/docs/3.x/project-config.html). This has a few implications when there are multiple developers working on the same project.

1. Whenever you start work on a project, check for changes in the remote branch. If there are, pull these down and run `composer install`. This will also run the scripts at the bottom of `composer.json`, which will run Project Config migrations on your local database.
2. If there are Project Config merge conflicts, it normally just means the `dateModifed` in `project.yaml` has changed, but please check you're not deleting files another developer has set up.
3. Make sure that when you deploy to the server, it runs `composer install --no-interaction`. This will also run the scripts listed at the bottom of `composer.json`.

Never overwrite the staging or production database with a local copy.
All database structure changes are made locally. Those changes are stored in Project Config, and applied to the staging and production databases on deployment. No database changes are permitted on staging or production sites.

## Installation

### Creating a new site from this Boilerplate

1. Create a new repository using this one as a template
2. Duplicate the `.env.example` file as `.env`. Update the Database Configuration, change the `ENVIRONMENT` variable to `dev`, update the `PRIMARY_SITE_URL` and `BASE_PATH`
3. Enter a `CP_TRIGGER`. This defaults to `control` if left blank
4. Run `npm install` to install the packages from `package.json`
5. Run `composer install` to install Craft and it's plugins from `composer.json`
6. Run `./craft setup`
7. Optionally, duplicate `scripts/.env.sh.example` as `scripts/.env.sh` and update it with the correct paths for your local environment if you want to use [Craft Scripts](https://github.com/nystudio107/craft-scripts) for pulling the database and assets through the command line.

### Setting up an existing site based on this Boilerplate

1. Clone this repository
2. Duplicate the `.env.example` file as `.env`. Update the database connection details and change the `ENVIRONMENT` variable to `dev`
3. Enter a `CP_TRIGGER`. This defaults to `control` if left blank
4. Run `npm install` to install the packages from `package.json`
5. Run `composer install` to install Craft and it's plugins from `composer.json`
6. Generate a new `APP_ID` for `.env` by running `./craft setup/app-id`
7. Copy the `SECURITY_KEY` from the server and update it in the `.env` file.
8. Duplicate `scripts/.env.sh.example` as `scripts/.env.sh` and update it with the correct paths for your local environment, and the server details
9. If this site is already in development, import the database either by downloading a backup from the Utilities section inside Craft, or run `scripts/pull_db.sh` if you set up [Craft Scripts](https://github.com/nystudio107/craft-scripts)
10.   You can download images from the server either through SFTP, SSH, or by running `scripts/pull_assets.sh` if you set up Craft Scripts

## Code Formatting

-  This project uses [Prettier](https://prettier.io) for automatic code formatting, with the [Prettier for Melody](https://github.com/trivago/prettier-plugin-twig-melody) plugin to make it work with Twig files. This is an opinionated way to format code which keeps spacing consistent between developers
-  The configuration for Prettier in this project is defined in `.prettierrc.json`
-  To ignore certain files or paths, add them to `.prettierignore`
-  It's easiest to set up Prettier to format automatically on save (you can do this with Visual Studio Code). You can also run Prettier on an individual file by running `npx prettier --write "templates/path/filename.twig"`

Reference: Using [Prettier with Twig in VS Code](https://codeknight.co.uk/blog/getting-prettier-working-with-twig-craft-cms).

## Front End CSS (Tailwind)

-  This project uses [Tailwind CSS](https://tailwindcss.com)
-  Tailwind can be configured with the `tailwind.config.js` file in the project root
-  Tailwind uses PostCSS. This can be configured with the `postcss.config.js` file in the project root

## Front End Build Process (Laravel Mix)

Assets are compiled with [Laravel Mix](https://laravel-mix.com).

-  NPM scripts are in the `package.json` file in the root
-  To watch files and refresh the page after a front end file changes, run `npm run watch`. This will open a browserSync tab at http://localhost:3000 which refreshes every time a file changes as defined under 'files' in `webpack.mix.js`. This is a proxy of the domain under 'proxy' in the browserSync settings in that file
-  To compile the project, run `npm run development`
-  To compile the project and minify files for production, run `npm run production`
-  Laravel Mix can be configured in `webpack.mix.js` in the root of the repository

## Composer Scripts

Below is an explanation of what all the scripts are for in `composer.json`. These mostly relate to the deployment process.

-  `craft-update` Runs Craft migrations (see `post-update-cmd` and `post-install-cmd`), applies Project Config & clears caches
-  `deploy-staging` When deploying to the staging site via Ploi, this runs `composer install`
-  `deploy-production` When deploying to the production site via Ploi, we only need to run migrations because Ploi rsync's all the Composer packages from staging
-  `post-update-cmd` After `composer update`, run migrations
-  `post-install-cmd` After `composer install`, run migrations
-  `nuke` Removes all Composer packages & the lock file, then runs `composer update` again with a clear cache

Reference: [Composer Commands](https://getcomposer.org/doc/articles/scripts).

## Server & Hosting

-  The site is hosted on [DigitalOcean](https://cloud.digitalocean.com) under the client's own account.
-  The server is provisioned with [Ploi](https://ploi.io) which handles deployment, security updates, databases & SSL.

### Deployment

-  The staging site is deployed automatically when you push to the `main` branch
-  The production site is deployed manually by logging into Ploi > Servers > staging.yourproject.co.uk > Production > "Deploy to production"

## Built With

-  [Craft CMS 3](https://craftcms.com)
-  [Tailwind CSS](https://tailwindcss.com)
-  [Larave Mix](https://laravel-mix.com/)

## Versioning

We use [Git](https://git-scm.com) for versioning.

## Authors

-  [CodeKnight](https://codeknight.co.uk)

## TODO

-  Set up [Prettier Tailwind Plugin](https://www.npmjs.com/package/prettier-plugin-tailwind)
