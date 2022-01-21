'use strict';

/**
 * new-post service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-post.new-post');
