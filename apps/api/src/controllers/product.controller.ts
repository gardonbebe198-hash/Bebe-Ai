import { Request, Response, NextFunction } from 'express';

// Mock product data for demonstration purposes
let products = [];

// Authentication middleware
const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    if (token === 'Bearer valid_token') { // Replace with your token verification logic
        next();
    } else {
        res.status(403).send('Unauthorized');
    }
};

// Controller for creating AI products
export const createProduct = (req: Request, res: Response) => {
    const newProduct = req.body;  // Assuming the product data is in the request body
    products.push(newProduct);
    res.status(201).send(newProduct);
};

// Controller for fetching all products
export const getProducts = (req: Request, res: Response) => {
    res.status(200).json(products);
};

// Exporting routes for use in your app
export const productRoutes = (app: any) => {
    app.post('/product', authenticate, createProduct);
    app.get('/products', authenticate, getProducts);
};