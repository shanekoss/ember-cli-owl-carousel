/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var fbTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-owl-carousel2',
  getConfig() {
    return Object.assign({
      css: true,
      theme: 'default',
    }, this.app.options['ember-cli-owl-carousel2']);
  },
  included() {
    this._super(...arguments);
    const config = this.getConfig();

    this.import('vendor/owl.carousel.js');
    if (config.css) {
      this.import('vendor/assets/owl.carousel.css');
      if (config.theme instanceof String) {
        this.import(`vendor/assets/owl.theme.${config.theme}.css`);
      }
    }
  },
  treeForVendor(vendorTree) {
    this._super(...arguments);
    var trees = [];
    var modulePath = path.dirname(require.resolve('owl.carousel'));

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(
      fbTransform(new Funnel(modulePath))
    );
    return mergeTrees(trees);
  }
};
