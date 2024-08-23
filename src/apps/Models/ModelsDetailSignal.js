const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class DetailSignal extends Model {
        static association(models) {
            this.hasOne(models.Signal, { as: 'signals', foreignKey: 'id' })
            this.hasOne(models.Detail, { as: 'details', foreignKey: 'id' }) 
        }
    }
    DetailSignal.init({
        detail_id: { type: DataTypes.INTEGER, reference:{model:"Detail",key:"id"} },
        signal_id: { type: DataTypes.INTEGER, reference:{model:"Signal",key:"id"} }
    },
        {
            sequelize,
            modelName: 'DetailSignal',
            tableName: 'detailSignals',
            timestamps: false
        })

    return DetailSignal;

}