const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MDgwNDcwLCJpYXQiOjE3MTcwODAxNzAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjcyMzVmOWY0LWZmNGQtNGU0ZS04Y2M3LTRiODc1MzczM2E1NSIsInN1YiI6Im5ha2lyaWthbnRpc3VtYW50aEBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjcyMzVmOWY0LWZmNGQtNGU0ZS04Y2M3LTRiODc1MzczM2E1NSIsImNsaWVudFNlY3JldCI6IlpiUlhKQWpyQ0VFRUZEa0EiLCJvd25lck5hbWUiOiJzdW1hbnRoIiwib3duZXJFbWFpbCI6Im5ha2lyaWthbnRpc3VtYW50aEBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMWJkMWEwNTE1In0._nJDbPv1RPaKzH7g9zA7yXEzHgxfasvt-XFZgakUYUs'
try {
    const response = await fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=18000', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    console.log(data)
    // res.json(data);
} catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}
app.get('/api/products', async (req, res) => {
    try {
        res.json(data);
    }
    catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
