const {model} = require("mongoose");

const {CustomerSchema} = require("../schemas/customerSchema");

const CustomerModel = new model("customer",CustomerSchema);

module.exports={CustomerModel};
