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
            via: 'fkIdPizza'
        },
        id_user: {
            model: 'usuario'
        }
    },

};
