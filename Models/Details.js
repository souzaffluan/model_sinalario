
const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Details extends Model{
        static association (models){
            this.belongsTo(models.Signal,{as:'signals', foreignKey:'signal_id'})
            this.hasOne(models.Detailtype,{as:'detailtype', foreignKey:'detail_type__id'})
        }
    }
    Details.init({
        id:DataTypes.INTEGER,
        name:DataTypes.TEXT,
        slug:DataTypes.TEXT,
        description:DataTypes.TEXT,
        video_link:DataTypes.TEXT,
        image_link:DataTypes.TEXT,
        image_alt:DataTypes.TEXT,
        detail_type_id:DataTypes.INTEGER

    },
    {
        sequelize,
        modelName:'Detail',
        tableName:'Details', // aaaaaaaaaaaaaaaaaaa vai dar merda //
        timestamps: false
    })
    
    return Details;

}