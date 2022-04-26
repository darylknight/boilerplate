// ! This file needs to be customised per-site
// ! Change the cookieDomain

// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
// You can also disable auto-loading of the consent notice by adding
// data-no-auto-load=true to the script tag.
var klaroConfig = {
	// You can customize the ID of the DIV element that Klaro will create
	// when starting up. If undefined, Klaro will use 'klaro'.
	elementID: 'klaro',

	// You can customize how Klaro persists consent information in the browser. Specify
	// either cookie' (the default) or 'localStorage'.
	storageMethod: 'cookie',

	// You can customize the name of the cookie or localStorage entry that Klaro will
	// use for storing the consent information. By default, Klaro will use 'klaro'.
	storageName: 'klaro',

	/*
    If set to `true`, Klaro will render the texts given in the
    `consentModal.description` and `consentNotice.description` translations as HTML.
    This enables you to e.g. add custom links or interactive content.
    */
	htmlTexts: false,

	/*
	You can change the cookie domain for the consent manager itself. Use this if you
	want to get consent once for multiple matching domains. By default, Klaro will
	use the current domain. Only relevant if 'storageMethod' is set to 'cookie'.
	*/
	cookieDomain: '.REPLACETHIS.com',

	// You can also set a custom expiration time for the Klaro cookie.
	// By default, it will expire after 120 days.
	cookieExpiresAfterDays: 365,

	// You can customize the name of the cookie that Klaro will use to
	// store user consent. If undefined, Klaro will use 'klaro'.

	// Put a link to your privacy policy here (relative or absolute).
	privacyPolicy: '/privacy-policy',

	// Defines the default state for applications (true=enabled by default).
	default: true,

	// If "mustConsent" is set to true, Klaro will directly display the consent
	// manager modal and not allow the user to close it before having actively
	// consented or declines the use of third-party apps.
	mustConsent: false,

	// Show "accept all" to accept all apps instead of "ok" that only accepts
	// required and "default: true" apps
	acceptAll: true,

	// Setting 'hideDeclineAll' to 'true' will hide the "decline" button in the consent
	// modal and force the user to open the modal in order to change his/her consent or
	// disable all third-party apps. We strongly advise you to not use this feature, as
	// it opposes the "privacy by default" and "privacy by design" principles of the
	// GDPR (but might be acceptable in other legislations such as under the CCPA)
	hideDeclineAll: false,

	// Setting 'hideLearnMore' to 'true' will hide the "learn more / customize" link in
	// the consent notice. We strongly advise against using this under most
	// circumstances, as it keeps the user from customizing his/her consent choices.
	hideLearnMore: false,

	// You can define the UI language directly here. If undefined, Klaro will
	// use the value given in the global "lang" variable. If that does
	// not exist, it will use the value given in the "lang" attribute of your
	// HTML tag. If that also doesn't exist, it will use 'en'.
	lang: 'en',

	// You can overwrite existing translations and add translations for your
	// app descriptions and purposes. See `src/translations.yml` for a full
	// list of translations that can be overwritten:
	// https://github.com/DPKit/klaro/blob/master/src/translations.yml

	// Example config that shows how to overwrite translations:
	// https://github.com/DPKit/klaro/blob/master/src/configs/i18n.js
	translations: {
		// If you erase the "consentModal" translations, Klaro will use the
		// defaults as defined in translations.yml
		en: {
			consentModal: {
				description:
					'Here you can see and customize the information that we collect about you.',
			},
			googleAnalytics: {
				description:
					'Analytics data collected by Google for usage statistics',
			},
			purposes: {
				analytics: 'Analytics',
			},
		},
	},

	// This is a list of third-party apps that Klaro will manage for you.
	services: [
		{
			// Each app should have a unique (and short) name.
			name: 'googleAnalytics',

			// If "default" is set to true, the app will be enabled by default
			// Overwrites global "default" setting.
			// We recommend leaving this to "false" for apps that collect
			// personal information.
			default: true,

			// The title of you app as listed in the consent modal.
			title: 'Google Analytics',

			// The purpose(s) of this app. Will be listed on the consent notice.
			// Do not forget to add translations for all purposes you list here.
			purposes: ['analytics'],

			// A list of regex expressions or strings giving the names of
			// cookies set by this app. If the user withdraws consent for a
			// given app, Klaro will then automatically delete all matching
			// cookies.
			cookies: [
				// you can also explicitly provide a path and a domain for
				// a given cookie. This is necessary if you have apps that
				// set cookies for a path that is not "/" or a domain that
				// is not the current domain. If you do not set these values
				// properly, the cookie can't be deleted by Klaro
				// (there is no way to access the path or domain of a cookie in JS)

				[/^_ga.*$/, '/', '.REPLACETHIS.com'],
				['_gid', '/', '.REPLACETHIS.com'],
				[/_gat.*/i, '/', '.REPLACETHIS.com'],
				[/_gac_.*/i, '/', '.REPLACETHIS.com'],
			],

			// An optional callback function that will be called each time
			// the consent state for the app changes (true=consented). Passes
			// the `app` config as the second parameter as well.
			// callback: function(consent, app) {
			// 	console.log('User consent for app ' + app.name + ': consent=' + consent);
			// },

			// If "required" is set to true, Klaro will not allow this app to
			// be disabled by the user.
			required: false,

			// If "optOut" is set to true, Klaro will load this app even before
			// the user gave explicit consent.
			// We recommend always leaving this "false".
			optOut: false,

			// If "onlyOnce" is set to true, the app will only be executed
			// once regardless how often the user toggles it on and off.
			onlyOnce: false,
		},
	],
}
