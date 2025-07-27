import { Router } from "express";
import {
  getUser,
  createUser,
  deleteUser
} from "../controllers/user.controller";


const router = Router();


router.post(    "/",    createUser);

router.get(     "/:id", getUser);
router.delete(  "/:id", deleteUser);


export default router;
