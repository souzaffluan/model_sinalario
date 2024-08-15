const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Details extends Model{
        static association (models){
            
        }
    }
    Details.init({
        id:DataTypes.INTEGER,
        name:DataTypes.STRING,
        slug:DataTypes.STRING,
        description:DataTypes.STRING,
        detail_id:DataTypes.INTEGER

    },
    {
        sequelize,
        modelName:'Detail',
        tableName:'Details', 
        timestamps: false
    })
    
    return Details;
}