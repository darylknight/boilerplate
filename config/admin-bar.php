<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com/plugins/adminbar
 * @copyright Copyright (c) 2017 Will Browar
 */

/**
 * Admin Bar config.php
 *
 * Completely optional configuration settings for Admin Bar if you want to customize some
 * of its more esoteric behavior, or just want specific control over things.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'adminbar.php' and make
 * your changes there.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as well, so you can
 * have different settings groups for each environment, just as you do for 'general.php'
 */

return [
	// ADMIN BAR
	'additionalLinks' => [],
	'customCss' =>
		'body { padding-bottom: 49px; } #adminbar { position: fixed; top: auto; bottom: 0; }',
	'displayGreeting' => true,
	'displayDashboardLink' => false,
	'displayDefaultEditSection' => false,
	'displaySettingsLink' => false,
	'displayLogout' => true,
	'enableMobileMenu' => true,

	// EDIT LINKS
	'displayEditDate' => true,
	'displayEditAuthor' => true,
	'displayRevisionNote' => true,
];
