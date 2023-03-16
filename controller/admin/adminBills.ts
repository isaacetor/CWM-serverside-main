import mongoose from "mongoose";
import BillsModel from "../../model/admin/dashBoard/BillsModel";
import { Request, Response } from "express";
import clientModel from "../../model/client/clientModel";
import adminModel from "../../model/admin/adminModel";

export const createBills = async (req: Request, res: Response) => {
  try {
    const { amountIssued, date, amount, receiverName } = req.body;

    const getDate = new Date().toDateString();

    //get client details
    const getClient = await clientModel.findById(req.params.clientId);

    //get admin details
    const getAdmin = await adminModel.findById(req.params.adminId);

    if (getClient && getAdmin) {
      const bill = await BillsModel.create({
        amountIssued,
        date: getDate,
        address: getClient?.address,
        receiverName: getClient?.name,
      });

      getClient?.bills?.push(new mongoose.Types.ObjectId(bill?._id));
      getClient?.save();

      getAdmin?.bills?.push(new mongoose.Types.ObjectId(bill?._id));
      getAdmin?.save();

      return res.status(200).json({
        message: "bill sent successfully",
        data: bill,
      });
    } else {
      return res.status(404).json({
        message: "couldn't send bill",
      });
    }
  } catch (error: any) {
    return res.status(400).json({
      message: "could not create bills",
      data: error.message,
    });
  }
};
