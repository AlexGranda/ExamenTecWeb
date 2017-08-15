module.exports = {
    attributes: {
        ingredientes: {
            collection: 'Ingrediente',
            via: 'fkIdPizza'
        }
    }
};
