import { model } from "mongoose";

import { SaleSchema } from "../schemas/saleSchema";

export const SaleModel =  model("sale",SaleSchema);

module.exports={SaleModel};
