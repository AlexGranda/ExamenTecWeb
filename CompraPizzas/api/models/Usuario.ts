/**
 * Created by Alex on 14/8/2017.
 */

declare var module:any;

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
    matriculas:{
      collection:'Matricula',
      via:'fkIdUsuario'
    }
  }

}
