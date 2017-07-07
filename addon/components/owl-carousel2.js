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
    const carousel = Ember.$(this.element).owlCarousel(this.attrs);
    this.set('carousel', carousel);
  },
  willDestroyElement() {
    this._super(...arguments);
    Ember.$(this.element).owlCarousel('destroy');
  }
});