/**
 * Created by Alex on 14/8/2017.
 */
var Passwords = require('machinepack-passwords')

module.exports = {

  logIn: function (req, res) {
    var parametros = req.allParams()
    Usuario.findOne({correo: parametros.correo}).exec (function (err, usuarioEncontrado) {
      if(err) res.serverError(error);

      if(!usuarioEncontrado) {
        res.serverError('No existe el usuario')
      }
      else
      {
        if (usuarioEncontrado.password==parametros.password){

          Passwords.encryptPassword({password: usuarioEncontrado.password}).exec({
            error: function (err) {
              res.serverError('Error de encripcion')
            },
            success: function (passwordMarcelo) {
              Usuario.update({
                  id:usuarioEncontrado.id
                },
                {
                  password:passwordMarcelo
                }).exec(function (err, marceloActualizado) {
                if(err) return res.serverError(err)

                if(!marceloActualizado){
                  return res.serverError("El usuario no se actualizo")
                }
                else
                {
                  res.ok('Password de usuario Actualizado\nUsuario Logueado')

                }
              })
            }
          })
        }
        else {
          Passwords.checkPassword({
            passwordAttempt: parametros.password,
            encryptedPassword: usuarioEncontrado.password
          }).exec({
            error: function (err) {
              res.serverError(err)
            },
            incorrect: function () {
              res.serverError('Contrasenia encriptada incorrecta')
            },
            success: function () {
              res.view('homepage')
            }
          })
        }
      }


    })
  }


}
