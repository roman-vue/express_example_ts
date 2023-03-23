import { Router } from "express";
import {ExampleServices } from '../services/example.service' 
class ExampleController {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    public config(): void {
        this.router.get("/index", ExampleServices.example);
    }
}

const ExampleRoutes = new ExampleController();
export default ExampleRoutes.router;