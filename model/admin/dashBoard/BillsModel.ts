import mongoose , {Document , model , Schema} from "mongoose";

import { Bills } from "./adminDashboardInterfaces";

interface allBills extends Bills , Document{}

const billsSchema = new Schema<Bills>({
    receiverName: {
    type : String,
    },
    address: {
        type : String,
    },
    date: {
        type : String,
    },
    amountIssued: {
        type :Number
    }
})

const BillsModel = model<allBills>("allBills", billsSchema)

export default BillsModel;