# Boilerplate Website

This repo is for the Boilerplate website at [codeknight.co.uk](https://codeknight.co.uk).

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

## Project Config

This Craft website uses [Project Config](https://craftcms.com/docs/3.x/project-config.html). This has a few implications when there are multiple developers working on the same project.

1. Whenever you start work on a project, check for changes in the remote branch. If there are, pull these down and run `composer install`. This will also run the scripts at the bottom of `composer.json`, which will run Project Config migrations on your local database.
2. If there are project config merge conflicts, it normally just means the dateModifed in `project.yaml` is different, but please check you're not deleting files another developer has set up.
3. Make sure that when you deploy to the server, it runs `composer install --no-interaction`. This will also run the scripts listed at the bottom of `composer.json`.

Never overwrite the staging or production database with a local copy.

### Installing

1. Clone the repository
2. Run `npm install`
3. Duplicate the `.env.example` file as `.env`. Update the database connection details and change the `ENVIRONMENT` variable to `dev`. The `SECURITY_KEY` should be the same across environments
4. Duplicate the `scripts/.env.sh.example` file as `scripts/.env.sh` and update it with the correct paths for your local environment.
5. Import the database from the server, either by downloading a database backup from Utilities section inside Craft, or run `scripts/pull_db.sh`
6. Using Terminal, navigate to your project and run `composer install`
7. Generate a new `APP_ID` in `.env` using `./craft setup/app-id`
8. If you're using Apache, you'll need a `.htaccess` file from the live site to get Craft's routing working; it's not version controlled. Valet does not use an htaccess file as it runs on nginx
9. You can download images from the server either through SSH or by running `scripts/pull_assets.sh` in your terminal if you use Craft Scripts

## Code Formatting

-  This project uses [Prettier](https://prettier.io) for code formatting, with the [Prettier for Melody](https://github.com/trivago/prettier-plugin-twig-melody) plugin to make it work with Twig files. This is an opinionated way to format files which keeps them consistent between developers
-  The configuration for Prettier in this project is defined in `.prettierrc.json`
-  To ignore certain files or paths, add them to `.prettierignore`
-  It's easiest to set up Prettier to format on save. You can also run Prettier on an individual file by running `npx prettier --write "templates/path/filename.twig"`
-  [TODO] set up [Prettier Tailwind Plugin](https://www.npmjs.com/package/prettier-plugin-tailwind)

Reference: Using [Prettier with Twig in VS Code](https://codeknight.co.uk/blog/getting-prettier-working-with-twig-craft-cms).

## Front End CSS (Tailwind)

-  This project uses [Tailwind CSS](https://tailwindcss.com)
-  Tailwind can be configured with the `tailwind.config.js` file in the project root
-  Tailwind uses PostCSS. This can be configured with the `postcss.config.js` file in the project root

## Front End Build Process (Vite)

Assets are compiled with [Vite](https://vitejs.dev). These are accessible on the front end with Craft by using the [Vite plugin](https://plugins.craftcms.com/vite).

-  NPM scripts are in the `package.json` file in the root
-  To watch files and refresh the page after a front end file changes, run `npm run dev`. **Important:** You must then visit the site at `yourproject.test`, not `http://localhost:3000`. The assets are served from the localhost directory using the Vite plugin, but it doesn't work as a site URL.
-  Visit your site at `yourproject.test`. When you save CSS or JS files, they will update automatically in the browser without refreshing, through Hot Module Reloading
-  To compile the project and minify files for production, run `npm run build`
-  [TODO] what does `npm run serve` do?
-  Vite can be configured with the `vite.config.js` file in the project root

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
-  The domain is registered with [GoDaddy](https://www.godaddy.com)

### Deployment

-  The staging site is deployed automatically when you push to the `master` branch
-  The production site is deployed manually by logging into Ploi > Servers > staging.yourproject.co.uk > Production > "Deploy to production"

## Built With

-  [Craft CMS 3](https://craftcms.com)
-  [Tailwind CSS](https://tailwindcss.com)
-  [Vite](https://vitejs.dev)

## Versioning

We use [Git](https://git-scm.com) for versioning.

## Authors

-  [CodeKnight](https://codeknight.co.uk)

### [TODO]

Add the [rollup-plugin-critical](https://github.com/nystudio107/rollup-plugin-critical) to generate critical CSS, and update `vite.php` with these settings:

-  `criticalPath` - File system path (or URL) to where the Critical CSS files are stored
-  `criticalSuffix` - the suffix added to the name of the currently rendering template for the critical CSS filename
