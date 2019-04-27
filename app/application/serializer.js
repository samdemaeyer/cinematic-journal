import DS from 'ember-data';
import { camelize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
  normalize(modelClass, resourceHash) {
    const { id } = resourceHash;
    Object.keys(resourceHash).map(objectKey=> resourceHash[objectKey.camelize()] = resourceHash[objectKey]);
    let data = { id, type: modelClass.modelName, attributes: resourceHash };
    return { data };
  },

  normalizeSingleResponse(store, primaryModelClass, payload) {
    return this.normalize(primaryModelClass, payload);
  },

  normalizeArrayResponse(store, primaryModelClass, payload) {
    let data = payload.map(result => {
      let { data } = this.normalize(primaryModelClass, result);
      return data;
    });
    return { data };
  },
});
