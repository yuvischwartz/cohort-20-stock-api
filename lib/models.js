const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('../lib/db');
// ORM



class Portfolio extends Model {

}

Portfolio.init({
    // Model attributes are defined here
    symbol: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    price: {
        type: DataTypes.STRING
        // float
        // allowNull defaults to true
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Portfolio', // We need to choose the model name
});

class Wallet extends Model {

}

Wallet.init({
    // Model attributes are defined here
    value: {
        type: DataTypes.STRING,
        // allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Wallet', // We need to choose the model name
});

// If the wallet does not exist add a wallet
const seedTheWallet = async () => {
    let myWallet = await Wallet.findOne({});
    if(!myWallet){
        await Wallet.create({value: 100000});
    }
};

setTimeout(() => {
    seedTheWallet()
}, 15000)


sequelize.sync({alter: true});

// NOTE: Code below will drop and recreate the DB again. Please use only in localhost. I have added a condition that checks for localhost before it runs
// if(process.env.BASE_URL.match('localhost')){
//     sequelize.sync({force: true});
// }

module.exports = {
    Portfolio, Wallet
};