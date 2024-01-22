import Router from "express";
import {
  getServicesItems,
  saveNewBudget,
} from "../controllers/budgetControllers.js";

const router = Router();

router.post("/newBudget", saveNewBudget);
router.get("/newBudget", getServicesItems);

export default router;
