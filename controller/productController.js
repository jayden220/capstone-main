import { products } from '../model/productDb.js'; 



const getProducts = async (req, res) => {
    try {
        const allProducts = await products.getProducts();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
};

const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await products.getProduct(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch product', error: error.message });
    }
};

const addProduct = async (req, res) => {
    try {
        const newProduct = await products.addProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add product', error: error.message });
    }
};

const editProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await products.editProduct(id, req.body);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update product', error: error.message });
    }
};

 const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await products.deleteProduct(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete product', error: error.message });
    }
};

export { getProducts, getProduct,deleteProduct, addProduct,editProduct }