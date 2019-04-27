import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://cinematic-journal-cms.herokuapp.com',

  init(...args) {
    this._super(...args);
    this.headers = {
      'Accept': 'application/json'
    }
  }
});
