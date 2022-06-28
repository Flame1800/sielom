'use strict';

/**
 * employment service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employment.employment');
