const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Signals extends Model{
        static association (models){
            
        }
    }
    Signals.init({
        id:DataTypes.INTEGER,
        name:DataTypes.TEXT,
        description:DataTypes.TEXT,
        slug:DataTypes.TEXT,
        detail_id:DataTypes.INTEGER,
        related_signal_id:DataTypes.INTEGER,

    },
    {
        sequelize,
        modelName:'Signal',
        tableName:'Signals',
        timestamps: false
    })
    
    return Details;

}