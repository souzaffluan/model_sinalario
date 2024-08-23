const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Groups extends Model{
        static association (models){
            this.belongsToMany(models.Signal,{as:'signals', through:'GroupSignal'}) 
        }
    }
    Groups.init({
        id:DataTypes.INTEGER,
        name:DataTypes.TEXT,
        description:DataTypes.TEXT,
        slug:DataTypes.TEXT
    },
    {
        sequelize,
        modelName:'Group',
        tableName:'groups', 
        timestamps: false
    })
    
    return Groups;

}