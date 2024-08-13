import express from 'express'; // Import the express module
import { createProduct, getProducts, updateProduct, deleteProduct } from '../controllers/productController.js'; // Import the controller functions

const router = express.Router(); // Create a new router

router.post('/', createProduct); // Create a new product
router.get('/', getProducts); // Get all products
router.put('/:id', updateProduct); // Update a product by ID
router.delete('/:id', deleteProduct); // Delete a product by ID

export default router; // Export the router