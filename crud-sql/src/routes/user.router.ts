import { Router } from "express";

const router: Router = Router();
import { userRoutes } from "../modules/user/index";

router.use("/users", userRoutes.getRoutes());

export { router as userRouter };
