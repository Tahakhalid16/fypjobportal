'use strict';

/**
 * user-application router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-application.user-application');
