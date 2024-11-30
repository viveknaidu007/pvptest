const {model} = require("mongoose");

const {SaleSchema} = require("../schemas/saleSchema");

const SaleModel = new model("sale",SaleSchema);

module.exports={SaleModel};
