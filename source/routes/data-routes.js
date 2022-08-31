/**
 * @file Simple backend for Angular playground.
 * @author Martin Frey <martin.frey@ost.ch>
 */

import express from 'express';
import { dataController } from "../controllers/data-controller.js";

/* Register all RestAPI requests with the express router. */
const router = express.Router();
router.get("/data/", dataController.getData);
router.post("/data/", dataController.addData);
router.put("/data/", dataController.updateData);
router.get("/data/:id/", dataController.getDataById);
router.delete("/data/:id/", dataController.deleteDataById);

export const dataRoutes = router;