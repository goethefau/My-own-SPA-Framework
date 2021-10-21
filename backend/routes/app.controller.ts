// @ts-ignore
import express, {Request, Response, NextFunction, Router} from 'express';
import path from "path";

const router: Router = express.Router();
const __distDirectory = path.resolve('dist')

router.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__distDirectory, "landing.html"))
})

router.get("/sign-in", (req: Request, res: Response) => {
    res.sendFile(path.join(__distDirectory, "sign-in.html"))
})

router.get("/sign-up", (req: Request, res: Response) => {
    res.sendFile(path.join(__distDirectory, "sign-up.html"))
})

router.get("*", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__distDirectory, "app.html"))
})

module.exports = router