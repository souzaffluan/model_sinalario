const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Groups extends Model{
        static association (models){
            this.belongsTo(models.Signal,{as:'signals', foreignKey:'group_id'}) // belogsto esta errado eu ainda estou vendo isso //
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
        tableName:'Groups', 
        timestamps: false
    })
    
    return Details;

}