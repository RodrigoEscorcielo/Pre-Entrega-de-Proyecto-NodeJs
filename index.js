// Escorcielo Ludvik Rodrigo pre-entrega
const URL = 'https://fakestoreapi.com/products';
const fetchProductos = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error productos:', error);
  }
};

const argumentos = process.argv; 

const metodo = argumentos[2];        
const products = argumentos[3];        
const titulo = argumentos[4];         
const precio = argumentos[5];        
const categoria = argumentos[6];      

if (metodo === 'GET') {
  const url = products.includes('/') ? `https://fakestoreapi.com/${products}` : URL;
  fetchProductos(url);
} else if (metodo === 'POST') {
  const nuevoProducto = {
    title: titulo,
    price: parseFloat(precio),
    category: categoria,
};

  fetch(URL, {
    method: 'POST',
    body: JSON.stringify(nuevoProducto),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => console.log('Nuevo producto creado:', data))
    .catch(error => console.error('Error al crear producto nuevo:', error));

} else if (metodo === 'DELETE') {
  const id = products.split('/')[1];
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(data => console.log('Producto eliminado:', data))
    .catch(error => console.error('Error al eliminar producto:', error));

} else {
  console.log('Error');
}
