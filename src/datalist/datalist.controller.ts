import dataListModel  from "./datalist.model";
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

export class DataListController {
    getDataList(req, res){
        let params = req.query;
        let order = ['id', 'ASC'];
        if(params.sort && params.sortBy){
            if (params.sort === 'ascending' && params.sortBy) {
                order = [params.sortBy, 'ASC'];
            }else{
                order = [params.sortBy, 'DESC'];
            }
        }
        let wherequery = [];
        if (params.from_date && params.to_date) {
            wherequery.push({ start_date: { [Op.between]: [params.from_date, params.to_date] } });
        }
        console.log(wherequery);
        return dataListModel.findAll({
            order: [order],
            where: wherequery,
        }).then(function (datalist) {
            return res.status(200).json(datalist)
        }).catch((err)=>{
            console.log("Error:", err);
            return res.status(422).send("Invalid data")
        });
    }
    index (req, res) {
        res.json({
            success: true,
            message: 'Index page'
        });
    }
}