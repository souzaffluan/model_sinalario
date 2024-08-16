const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Signals extends Model{
        static association (models){
            this.belongsTo(models.Group,{as:'groups', foreignKey:'group_id'}) // belogsto esta errado eu ainda estou vendo isso //
            this.belongsTo(models.Signal,{as:'signals', foreignKey:'related_signal_id'}) // belogsto esta errado eu ainda estou vendo isso //
            this.belongsTo(models.Detail,{as:'datails', foreignKey:'detail_id'}) // belogsto esta errado eu ainda estou vendo isso //
        }
    }
    Signals.init({
        id:DataTypes.INTEGER,
        name:DataTypes.TEXT,
        description:DataTypes.TEXT,
        slug:DataTypes.TEXT,
        detail_id:DataTypes.INTEGER,
        related_signal_id:DataTypes.INTEGER,
        group_id:DataTypes.INTEGER,

    },
    {
        sequelize,
        modelName:'Signal',
        tableName:'Signals',
        timestamps: false
    })
    
    return Details;

}