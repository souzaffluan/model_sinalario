const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Detailtypes extends Model{
        static association (models){
            this.hasOne(models.Detail,{as:'details', foreignKey:'detail_type__id'})
        }
    }
    Detailtypes.init({
        id:DataTypes.INTEGER,
        name:DataTypes.STRING,
        slug:DataTypes.STRING,

    },
    {
        sequelize,
        modelName:'Detailtype',
        tableName:'Detailtypes', 
        timestamps: false
    })
    
    return Details;
}