<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

$isProd = App::env('CRAFT_ENVIRONMENT') === 'production';

return GeneralConfig::create()
	->defaultWeekStartDay(1) // Set the default week start day for date pickers
	->omitScriptNameInUrls() // Whether generated URLs should omit "index.php"
	->cpTrigger('control') // The URI segment that tells Craft to load the control panel
	->sendPoweredByHeader(false) // Don't tell the world that this site uses Craft
	->maxUploadFileSize(100000000) // 100mb upload limit
	->useEmailAsUsername() // Uses email instead of username
	->preventUserEnumeration() // Prevent user enumeration attacks
	->enableGql(false) // Remove GraphQL from the sidebar
	->transformGifs(false) // Don't screw up gifs by transforming them
	->enableTemplateCaching($isProd) // Only allow template caching on production
	->limitAutoSlugsToAscii() // https://craftcms.com/docs/5.x/reference/config/general.html#limitautoslugstoascii
	->previewTokenDuration('P1M') // Make preview links (?x-craft-preview) last for a month instead of a day
	->upscaleImages(false) // don't upscale image transforms

	// Set default accessibility options for everyone
	->accessibilityDefaults([
		'useShapes' => true,
	])

	// Add an SVG-only option to Asset fields (https://craftcms.com/docs/4.x/config/general.html#extrafilekinds)
	->extraFileKinds([
		'svg' => [
			'label' => 'SVG',
			'extensions' => ['svg'],
		],
	])

	// This uses values from .env
	->aliases([
		'@web' => getenv('PRIMARY_SITE_URL'),
		'@webroot' => getenv('CRAFT_WEB_ROOT'),
	]);
