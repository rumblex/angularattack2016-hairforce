/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'firebase': 'vendor/firebase/lib/firebase-web.js',
    'angularfire2': 'vendor/angularfire2'
};
/** User packages configuration. */
var packages = {
    angularfire2: {
        defaultExtension: 'js',
        main: 'angularfire2.js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/navbar',
    'app/+dashboard',
    'app/week-plan-card',
    'app/exercise-card',
    'app/assignment-list',
    'app/+my-plan',
    'app/+session-list',
    'app/+statistics',
    'app/assignment-card',
    'app/spinner',
    'app/exercise-tile'
];
var cliSystemConfigPackages = {
    "materialize": {
        "format": "global",
        "main": "dist/js/materialize",
        "defaultExtension": "js"
    },
    "angular2-materialize": {
        "main": "dist/index",
        "defaultExtension": "js"
    }
};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
        // Materialize vendor mappings
        "materialize": "vendor/materialize-css",
        "angular2-materialize": "vendor/angular2-materialize",
        "jquery": "vendor/jquery"
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map