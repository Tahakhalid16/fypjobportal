'use strict';

/**
 * user-application controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-application.user-application');
