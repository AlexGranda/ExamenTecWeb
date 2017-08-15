/**
 * Created by Alex on 14/8/2017.
 */

declare var module:any;

declare let Pizza;
declare let _;

module.exports = {
  attributes: {
    nombres: {
      type: "string"
    },
    password: {
      type: "string"
    },
    fechaNacimiento: {
      type: "date"
    },
    apellidos: {
      type: "string"
    },
    correo: {
      type: "string"
    },
    afterDestroy: function (destroyedRecords, cb) {
      Pizza.destroy({
        id_user: _.pluck(destroyedRecords, 'id')
      }).exec(cb)
    }
  }

}
