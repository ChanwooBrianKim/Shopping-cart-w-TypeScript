import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes'; // Import the authRoutes
import productRoutes from './routes/productRoutes'; // Import the productRoutes
import orderRoutes from './routes/orderRoutes'; // Import the orderRoutes

// Initialize Express app
const app: Application = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes); // Use authRoutes for /api/auth path
app.use('/api/products', productRoutes); // Use productRoutes for /api/products path
app.use('/api/orders', orderRoutes); // Use orderRoutes for /api/orders path

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));