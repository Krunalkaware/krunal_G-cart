
import express from "express";
import authUser from "../middlewares/authUser.js";
import { upadteCart } from "../controllers/cartController.js";


const cartRouter=express.Router();

cartRouter.post('/update',authUser,upadteCart)

export default cartRouter;