'use strict';

/**
 * user-application service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-application.user-application');
