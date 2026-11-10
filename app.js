const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products');

// Load config
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Parse JSON request bodies
app.use(express.json());

// Mount product routes
app.use('/api/products', productRoutes);

// Start server
app.listen(port, () => {
    console.log(`${process.env.SERVICE_NAME} running on http://localhost:${port}`);
});