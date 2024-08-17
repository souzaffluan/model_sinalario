
const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Details extends Model{
        static association (models){
            this.belongsTo(models.Signal,{as:'signals', foreignKey:'signal_id'})
            this.hasOne(models.Detailtype,{as:'detailtype', foreignKey:'detail_type__id'})
            this.belongsTo(models.Regionality,{as:'regionality', foreignKey:'regionality_id'})
        }
    }
    Details.init({
        id:DataTypes.INTEGER,
        name:DataTypes.STRING,
        slug:DataTypes.STRING,
        description:DataTypes.STRING,
        video_link:DataTypes.STRING,
        image_link:DataTypes.STRING,
        image_alt:DataTypes.STRING,
        detail_type_id:DataTypes.INTEGER,
        regionality_id:DataTypes.INTEGER

    },
    {
        sequelize,
        modelName:'Detail',
        tableName:'Details', 
        timestamps: false
    })
    
    return Details;
}