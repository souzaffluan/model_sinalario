const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class GroupSignal extends Model {
        static association(models) {
            this.hasOne(models.Signal, { as: 'signals', foreignKey: 'id' })
            this.hasOne(models.Group, { as: 'groups', foreignKey: 'id' }) 
        }
    }
    GroupSignal.init({
        group_id: { type: DataTypes.INTEGER, reference:{model:"Group",key:"id"} },
        signal_id: { type: DataTypes.INTEGER, reference:{model:"Signal",key:"id"} }
    },
        {
            sequelize,
            modelName: 'GroupSignal',
            tableName: 'groupSignals',
            timestamps: false
        })

    return GroupSignal;

}