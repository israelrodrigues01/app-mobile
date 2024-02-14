'use strict';

/**
 * task-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-tag.task-tag');
