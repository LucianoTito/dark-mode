let collections = [
  {
    id: 'o',
    Name: 'Hoodies',
    Price: 14.00,
    Stock: 10,
    urlImage: "./images/featured1.png"
  },
  {
    id: '1',
    Name: 'Shirts',
    Price: 24.00,
    Stock: 15,
    urlImage: "./images/featured2.png"
  },
  {
    id: '2',
    Name: 'Sweatshirts',
    Price: 24.00,
    Stock: 20,
    urlImage: "./images/featured3.png"
  }
]
{
  const contentCart= document.querySelector('.contentCart');
  const iconCart= document.querySelector('.bx-shopping-bag');
   
iconCart.addEventListener('click', function(){
  contentCart.classList.toggle('contentCart__show');
});
}
const products = document.querySelector(".products");
const cartProducts= document.querySelector('.cartProducts');
let objCart= {};

function printProductsInCart(){
  let html= '';

  const arrayCart= Object.values(objCart);

  arrayCart.forEach(function ({ id, Name, Price, urlImage, amount }) {
    html += `

        <div class="product">

        <div class="product__img">
          <img src="${urlImage}" alt="${Name}">

          <i class='bx bx-minus'></i>
          <i class='bx bx-plus'></i>
          <i class='bx bxs-trash'></i>

        </div>

        <div class="product__info">        
          <p>${Name}</p>
          <p>${Price}</p>
          <p><b>Amount</b>: ${amount}</p>
        </div>
             
      </div>
`
  });

  cartProducts.innerHTML = html;
}
function printProducts() {
  let html = '';
  
  collections.forEach(function ({ id, Name, Price, Stock, urlImage }) {
    html += `

        <div class="product">

        <div class="product__img">
          <img src="${urlImage}" alt="${Name}">
          <button id= "${id}" class="btn btn__add"><i class='bx bx-plus' ></i></button>
        </div>

        <div class="product__info">        
          <p><b>Name</b>: ${Name}</p>
          <p><b>Price</b>: ${Price}</p>
          <p><b>Stock</b>: ${Stock}</p>
        </div>
             
      </div>
`
  });
  products.innerHTML = html
}
products.addEventListener('click', function(e){
if(e.target.classList.contains('bx-plus')){
 const id= e.target.parentElement.id;

 let findProduct= collections.find(function(collection){
  return collection.id === id;
 });
 if (objCart[id]){
  objCart[id].amount++;
 }else{
  objCart[id]= {
    ...findProduct,
    amount: 1
  };
 }
}
printProductsInCart();
});

cartProducts.addEventListener('click',function(e){
  if (e.target.classList.contains('bx-minus')){
    alert('quiero restar')
  }
  if (e.target.classList.contains('bx-plus')){
    alert('quiero agregar')
  }
  if (e.target.classList.contains('bxs-trash')){
    alert('quiero eliminar')
  }
})
printProducts()

/*DARK MODE */

const button__dark = document.querySelector('#button__dark-mode');
const body = document.querySelector('body');

load();


button__dark.addEventListener('click', e => {
  body.classList.toggle('dark__mode');
  store(body.classList.contains('dark__mode'))

});
function load () {
  const darkmode = localStorage.getItem('dark__mode');
  if (!darkmode) {
    store('false');
  }else if (darkmode == 'true') {
    body.classList.add('darkmode');
  }

}

function store (value) {
localStorage.setItem('darkmode', value);
}