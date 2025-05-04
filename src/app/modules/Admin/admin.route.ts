import express from'express'
import { AdminController } from './admin.controller';
const router =express.Router()

router.get('/',AdminController.getAllFromDB)
router.get('/:id',AdminController.getSingAdminData)
router.patch('/:id',AdminController.updateAdminDB)
router.patch('/:id',AdminController.deleteAdminData)

export const AdminRoutes=router;