'use strict';

import dbConnection from '../conf/dbConnection';
var Sequelize = require('sequelize');

var dataListModel = dbConnection.define('cities', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    start_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    end_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE(11, 10),
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: true
    },
}, {
    timestamps: false,
    freezeTableName: true
});

export default dataListModel;