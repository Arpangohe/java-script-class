// product data
const product = {
    image: 'https://picsum.photos/200/300',
    name: 'Product Name',
    price: '$19.99',
    review: '4.5/5 stars (123 reviews)',
    brand: 'XYZ Corporation'
  };
  
  // get the product card elements
  const productCard = document.querySelector('.product-card');
  const productImage = productCard.querySelector('.product-image');
  const productName = productCard.querySelector('.product-name');
  const productPrice = productCard.querySelector('.product-price');
  const productReview = productCard.querySelector('.product-review');
  const productBrand = productCard.querySelector('.product-brand');
  
  // populate the product data
  productImage.src = product.image;
  productName.textContent = product.name;
  productPrice.textContent = product.price;
  productReview.textContent = product.review;
  productBrand.textContent = `Brand: ${product.brand}`;