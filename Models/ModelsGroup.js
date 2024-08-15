const {Model}=require('sequelize')
module.exports=(sequelize,DataTypes)=>{
    class Groups extends Model{
        static association (models){
            
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