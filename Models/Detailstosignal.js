const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Detailstosignal extends Model{
        static association (models){
            
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