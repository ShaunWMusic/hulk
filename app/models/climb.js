import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  name: attr('string'),
  highestAltitude: attr('number'),
  numberOfMountains: attr('number')
});
