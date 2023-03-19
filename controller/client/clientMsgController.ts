import mongoose from "mongoose";
import { Request, Response } from "express";
import adminModel from "../../model/admin/adminModel";
import adminMessageModel from "../../model/admin/dashBoard/adminMsg";
import clientModel from "../../model/client/clientModel";
import messageModel from "../../model/client/dashboard/clientMsg";

//create or send a message
export const sendMessageToAdmin = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { sender, date, desc } = req.body;

    //getting the time and date
    const getDate = new Date().toDateString();

    //getting the user details

    const getUser = await clientModel.findById(req.params.userId);

    //getting admin details

    const getAdmin = await adminModel.findById(req.params.adminId);

    if (getUser && getAdmin) {
      const newMsg = await messageModel.create({
        sender: getUser?.name,
        date: getDate,
        desc,
      });

      await getUser?.message?.push(new mongoose.Types.ObjectId(newMsg?._id));
      getUser?.save();

      await adminModel.findByIdAndUpdate(getAdmin._id, {
        $push: { notification: newMsg._id },
      });
      return res.status(201).json({
        message: "message successfully sent",
        data: newMsg,
      });
    } else {
      return res.status(404).json({
        message: "User or admin not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "bad request , unable to send message",
      data: error,
    });
  }
};

export const getAllClientMsg = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const client = await messageModel.find();

    return res.status(200).json({
      message: "message successfully gotten",
      data: client,
    });
  } catch (error) {
    return res.status(400).json({
      message: "bad request , unable to get all message",
      data: error,
    });
  }
};
