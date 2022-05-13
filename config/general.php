<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

$isDev = App::env('ENVIRONMENT') === 'dev';
$isProd = App::env('ENVIRONMENT') === 'production';

return [
	'*' => [
		'defaultWeekStartDay' => 1, // Monday
		'omitScriptNameInUrls' => true, // Whether generated URLs should omit "index.php"
		'cpTrigger' => App::env('CP_TRIGGER') ?: 'control', // The URI segment that tells Craft to load the control panel
		'securityKey' => App::env('SECURITY_KEY'), // The secure key Craft will use for hashing and encrypting data
		'addTrailingSlashesToUrls' => false, // Don't add trailing slashes
		'sendPoweredByHeader' => false, // Don't tell the public this site uses Craft
		'maxUploadFileSize' => 100000000, // 100mb upload limit
		'useEmailAsUsername' => true, // Uses email instead of username
		'preventUserEnumeration' => true, // Stop Craft from confirming if a username exists on the forgot password screen
		'enableGql' => false, // Remove GraphQL from the sidebar
		'transformGifs' => false, // Don't screw up gifs by transforming them
		'disallowRobots' => !$isProd, // Stop robots crawling the site if it's not production
		'allowAdminChanges' => $isDev, // Don't allow administrative changes on staging or production
		'devMode' => !$isProd, // Enable devMode in local and staging, but not production
		'allowUpdates' => $isDev, // Prevent auto updates on staging and production
		'enableTemplateCaching' => $isProd, // Only allow template caching on production
		'limitAutoSlugsToAscii' => true, // https://craftcms.com/docs/3.x/config/config-settings.html#limitautoslugstoascii

		// Set default accessibility options for everyone
		'accessibilityDefaults' => [
			'useShapes' => true,
		],

		// Add an SVG-only option to Asset fields
		'extraFileKinds' => [
			'svg' => [
				'label' => 'SVG',
				'extensions' => ['svg'],
			],
		],

		// This uses values from .env
		'aliases' => [
			'@web' => getenv('PRIMARY_SITE_URL'),
			'@webroot' => getenv('BASE_PATH'),
		],
	],
];
