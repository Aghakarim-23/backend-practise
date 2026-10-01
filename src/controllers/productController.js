const products = [
  {
    id: 1,
    name: "Espresso",
    price: 3
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 4
  }
];

export const getProducts = (req, res) => {
  res.json(products);
};


export const getProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

export const createProduct = (req,res) => {
    const {name, price } = req.body;
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
}
