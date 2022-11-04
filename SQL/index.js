let sequelizeInstance = require("./connection");
//let category = require("./category")
let Products = require("./products");
let Orders = require("./orders");

Products.hasOne(Orders, {
    foreignKey: 'productId'
});
Orders.belongsTo(Products);


async function getProducts(){
    let laptop = await Products.findAll({
        where : {
            category : "Laptop"
        }
    });

    console.log(JSON.stringify(laptop))

    let order = await laptop.getOrders();
    console.log(order)
}


getProducts();