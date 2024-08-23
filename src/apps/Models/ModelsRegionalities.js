const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Regionalitys extends Model{
        static association (models){
            this.belongsTo(models.Detail,{as:'details', foreignKey:'detail_id'})
        }
    }
    Regionalitys.init({
        id:DataTypes.INTEGER,
        name:DataTypes.STRING,
        slug:DataTypes.STRING,
        description:DataTypes.STRING,
        detail_id:DataTypes.INTEGER

    },
    {
        sequelize,
        modelName:'Regionality',
        tableName:'regionalitys', 
        timestamps: false
    })
    
    return Regionalitys;
}