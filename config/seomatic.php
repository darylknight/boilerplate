<?php

return [
	'*' => [
		'generatorEnabled' => false, // Don't tell the world we're using SEOmatic
	],

	'dev' => [
		'environment' => 'local',
	],
	'staging' => [
		'environment' => 'staging',
	],
	'production' => [
		'environment' => 'live',
	],
];
