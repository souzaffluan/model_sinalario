
const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Details extends Model{
        static association (models){
            this.belongsToMany(models.Detail,{as:'details', through:'DetailSignal'})
            this.hasOne(models.Detailtype,{as:'detailtype', foreignKey:'detail_type_id'})
            this.hasMany(models.Regionality,{as:'regionality', foreignKey:'regionality_id'})
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
        tableName:'details', 
        timestamps: false
    })
    
    return Details;
}