/**
 * Toolkit JavaScript
 */

//Vendors

// Keep your code clean!
'use strict';

// Vendors
require('./vendors/picturefill');
var fastClick = require('./vendors/fastclick');

$(document).ready(function() {
    $('html').addClass('doc-ready');
    fastClick.attach(document.body);

    // Helpers
    require('./helpers/ad-tracking.js');

    // Modules


    // Components
    require('./components/cards');

});
