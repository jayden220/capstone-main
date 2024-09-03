// import { getProductDb,fetchProductsDb,addProductDb,editProductDb,deleteProductDb } from '../model/productDb.js'; 



// const getProducts = async (req, res) => {
//     try {
//         const allProducts = await fetchProductsDb();
//         res.status(200).json(allProducts);
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to fetch products', error: error.message });
//     }
// };

// const getProduct = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const product = await getProductDb(id);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to fetch product', error: error.message });
//     }
// };

// const addProduct = async (req, res) => {
//     try {
//         const newProduct = await addProductDb(req.body);
//         res.status(201).json(newProduct);
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to add product', error: error.message });
//     }
// };

// const editProduct = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const updatedProduct = await editProductDb(id, req.body);
//         if (!updatedProduct) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to update product', error: error.message });
//     }
// };

//  const deleteProduct = (req, res) => {
//     const { id } = req.params;
//     try {
//         const deletedProduct = deleteProductDb(id);
//         if (!deletedProduct) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         res.status(200).json({ message: 'Product deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to delete product', error: error.message });
//     }
// };

// export { getProducts, getProduct,deleteProduct, addProduct,editProduct }
import { getProductDb, fetchProductsDb, addProductDb, editProductDb, deleteProductDb } from '../model/productDb.js'; 

const getProducts = async (req, res) => {
    try {
        const allProducts = await fetchProductsDb();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
};

const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await getProductDb(id);
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
        const newProduct = await addProductDb(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add product', error: error.message });
    }
};

const editProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await editProductDb(id, req.body);
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
        const deletedProduct = await deleteProductDb(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete product', error: error.message });
    }
};

export { getProducts, getProduct, deleteProduct, addProduct, editProduct };
