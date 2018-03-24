import Ember from 'ember';

const {
  Controller,
  inject: {
    service,
  },
  computed: {
    alias,
  },
  get,
} = Ember;

export default Controller.extend({
  auth: service(),
  actions: {
    logout() {
      get(this, 'auth').logout();
      this.transitionToRoute('index');
    }
  }
});
