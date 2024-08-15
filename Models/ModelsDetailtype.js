const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Detailtypes extends Model{
        static association (models){
            
        }
    }
    Detailtypes.init({
        id:DataTypes.INTEGER,
        name:DataTypes.STRING,
        slug:DataTypes.STRING,

    },
    {
        sequelize,
        modelName:'Detailtype',
        tableName:'Detailtypes', 
        timestamps: false
    })
    
    return Details;
}