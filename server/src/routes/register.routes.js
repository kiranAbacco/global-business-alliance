import express from 'express';
import * as controller from '../controllers/register.controller.js';

import multer from "multer";


const router = express.Router();



const upload = multer({ dest: "uploads/" });

router.post('/', upload.single("companyLogo"), controller.createMembership);

router.get('/', controller.getMemberships);
router.get('/industries', controller.getIndustriesByCountry);
router.get('/countries', controller.getCountriesByIndustry);



export default router;

