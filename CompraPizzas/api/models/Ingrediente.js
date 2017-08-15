module.exports = {
    attributes: {
        nombreIngrediente: {
            type: 'string'
        },
        fkIdPizza: {
            model: 'Pizza'
        }
    }
};
