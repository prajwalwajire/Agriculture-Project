import express  from "express";
import{isAdmin, requireSignIn} from './../middlewares/authMiddleware.js';
import {categoryController,  createCategoryController,  deleteCategoryController,  singleCategoryController,  updateCategoryController } from "../controllers/categoryController.js";

const router = express.Router()

//Create Category
router.post('/create-category', requireSignIn,isAdmin , createCategoryController);

//Update Category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);

//Getall Product
router.get('/get-category', categoryController);

//Get Single Product
router.get('/get-single-category/:slug', singleCategoryController);
//Delete Category
router.delete('/delete-category/:id', requireSignIn,isAdmin,deleteCategoryController);
export default router;