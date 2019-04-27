import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  textArea:  DS.attr('string'),
  title:     DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  media:     DS.attr(),
});
