import express from'express'
import { AdminController } from './admin.controller';
const router =express.Router()

router.get('/',AdminController.getAllFromDB)
router.get('/:id',AdminController.getSingAdminData)
router.patch('/:id',AdminController.updateAdminDB)
router.delete('/:id',AdminController.deleteAdminData)
router.delete('/:id',AdminController.deleteAdminData)
router.delete('/soft/:id',AdminController.softDeleteAdminData)

export const AdminRoutes=router;