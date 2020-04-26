'use strict';

import Express from 'express';
import { DataListController } from "./datalist.controller"

const router = Express.Router();
let dataListController = new DataListController();

router.get('/', dataListController.getDataList);

export default router;
