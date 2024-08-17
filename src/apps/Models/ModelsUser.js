const Sequelize = require('sequelize');
const {Model} = require('sequelize');

class Users extends Model{
    static init(sequelize){
        super.init(
            {
                nome: Sequelize.STRING,
                email: Sequelize.STRING,
                senha_hash: Sequelize.STRING,
                senha:Sequelize.VIRTUAL
            },{
                sequelize
            }
            
        );
        return this;
    }
}

module.exports = Users;