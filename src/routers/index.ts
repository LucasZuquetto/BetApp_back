import { Router } from "express";
import healthRouter from "./healthRouter";

const router = Router()

router.use("/health", healthRouter)

export default router