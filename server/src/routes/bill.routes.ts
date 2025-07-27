import { Router } from "express";
import {
  getAllBills,
  getBillById,
  createBill,
  deleteBill
} from "../controllers/bill.controller";


const router = Router();


router.get(     "/",        getAllBills);
router.post(    "/",        createBill);

router.get(     "/:id",     getBillById);
// router.put(     "/:id",     updateBill);
router.delete(  "/:id",     deleteBill);


export default router;
