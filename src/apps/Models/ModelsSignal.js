const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Signals extends Model{
        static association (models){
            this.belongsToMany(models.Group,{as:'groups', through:'GroupSignal'})
            this.belongsTo(models.Signal,{as:'signals', foreignKey:'related_signal_id'})
            this.belongsToMany(models.Detail,{as:'details', through:'DetailSignal'})
        }
    }
    Signals.init({
        id:DataTypes.INTEGER,
        name:DataTypes.TEXT,
        description:DataTypes.TEXT,
        slug:DataTypes.TEXT,
        detail_id:DataTypes.INTEGER,
        related_signal_id:DataTypes.INTEGER

    },
    {
        sequelize,
        modelName:'Signal',
        tableName:'signals',
        timestamps: false
    })
    
    return Signals;

}