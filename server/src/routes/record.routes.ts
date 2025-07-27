import { Router } from "express";
import {
  getAllRecords,
  getRecordById,
//   createRecord,
  updateRecord,
  deleteRecord,
} from "../controllers/record.controller";

const router = Router();

router.get(     "/",        getAllRecords);
// router.post(    "/",        createRecord);

router.get(     "/:id",     getRecordById);
router.put(     "/:id",     updateRecord);
router.delete(  "/:id",     deleteRecord);


export default router;
