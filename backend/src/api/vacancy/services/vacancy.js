'use strict';

/**
 * vacancy service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vacancy.vacancy');
