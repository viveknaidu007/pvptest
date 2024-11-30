import { model } from "mongoose";

import { CustomerSchema } from "../schemas/customerSchema";

export const CustomerModel =  model("customer",CustomerSchema);

module.exports={CustomerModel};
