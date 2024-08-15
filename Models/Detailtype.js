
const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Detailtype extends Model{
        static association (models){
            this.belongsToMany(models.Detail,{as:'details', foreignKey:'detail_type_id'})
        }
    }
    Detailtype.init({

        id:DataTypes.INTEGER,
        name:DataTypes.TEXT,
        slug:DataTypes.TEXT,
        
    },
    {
        sequelize,
        modelName:'Detailtype',
        tableName:'Detailtype', // aaaaaaaaaaaaaaaaaaa vai dar merda //
        timestamps: false
    })
    
    return Detailtype;
}