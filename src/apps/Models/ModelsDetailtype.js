const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Detailtypes extends Model{
        static association (models){
            this.belongsToMany(models.Detail,{as:'details', foreignKey:'detail_type_id'})
        }
    }
    Detailtypes.init({
        id:DataTypes.INTEGER,
        name:DataTypes.STRING,
        slug:DataTypes.STRING

    },
    {
        sequelize,
        modelName:'Detailtype',
        tableName:'detailtypes', 
        timestamps: false
    })
    
    return Detailtypes;
}