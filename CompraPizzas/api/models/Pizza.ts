/**
 * Created by Alex on 14/8/2017.
 */
declare var module:any;

declare let Ingrediente;

module.exports = {

  attributes: {
    tipo: {
      type: 'string',
      enum: ['Familiar', 'Mediana', 'Personal'],
      required: true
    },

    precio: {
      type: 'float',
      required: true
    },

    ingredientes: {
      collection: 'Ingrediente',
      via: 'id_pizza'
    },

    id_user: {
      model: 'usuario'
    }
  },

  afterDestroy: function (destroyedRecords, cb) {
    Ingrediente.destroy({
      id_pizza: _.pluck(destroyedRecords, 'id')
    }).exec(cb)
  }

};
