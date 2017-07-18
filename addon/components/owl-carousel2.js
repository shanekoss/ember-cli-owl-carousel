import Ember from 'ember';
import layout from '../templates/components/owl-carousel2';

export default Ember.Component.extend({
  layout,
  carousel: null,
  classNames: ['owl-carousel'],
  classNameBindings: ['theme:owl-theme'],
  theme: true,
  didInsertElement() {
    this._super(...arguments);
    const attrs = Ember.assign(this.attrs, {
      navText: (typeof this.attrs.navText === 'string') && JSON.parse(this.attrs.navText),
      responsive: (typeof this.attrs.responsive === 'string') && JSON.parse(this.attrs.responsive),
    });
    const carousel = Ember.$(this.element).owlCarousel(attrs);
    this.set('carousel', carousel);
  },
  willDestroyElement() {
    this._super(...arguments);
    Ember.$(this.element).owlCarousel('destroy');
  }
});