'use strict';

/**
 * dough service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dough.dough');
