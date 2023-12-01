const logIn = document.querySelector('#logIn');
const loginDetails1 = document.querySelector('#loginDetails1');
loginDetails1.style.display = 'none'
const cancelLogin = document.querySelector('#cancelLogin');
const orderNow = document.querySelector('#orderNow');
const imageContainer = document.querySelector('#image1Container')
const orderPizza = document.querySelector('#orderPizza')
orderPizza.style.display = 'none';
const bar = document.querySelector('#bar')
const settingOfOrder = document.querySelector('#settingOfOrder')
const sales = document.querySelector('#sales')
const salesBoard = document.querySelector('#salesBoard')
const salesAddress = document.querySelector('#salesAddress')
salesAddress.style.display = 'none'
const inputSpaces = document.querySelectorAll('.inputSpace')
const register = document.querySelector('#register')
const confirm1 = document.querySelector('#confirm')
const delivery = document.querySelector('#delivery')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const input3 = document.querySelector('#input3')
const input4 = document.querySelector('#input4')
const back2 = document.querySelector('#back2')
const backFromOrders = document.querySelector('#backFromOrders')
backFromOrders.style.display = 'none'
const submits = document.querySelector('#submits')
const password = document.querySelector('#pass')
const username = document.querySelector('#user')










submits.addEventListener('click',() => {
    if(username.value === '' && password.value === ''){
        alert('Login Required')
    } else {
    loginDetails1.style.display = 'none'
    logIn.innerHTML = 'LOGGED IN'

        
    }
} )




// ADDING A CLICK EVENT TO LOGIN
logIn.addEventListener('click', () => {
    loginDetails1.style.display = 'inline'
})

// ADDING CLICK EVENT TO CANCEL LOGIN PAGE
cancelLogin.addEventListener('click', () => {
    loginDetails1.style.display = 'none'
})
// ADDING CLICK EVENT TO CANCEL LOGIN PAGE
orderNow.addEventListener('click', () => {
    imageContainer.style.display = 'none'
    orderPizza.style.display = 'inline'
    backFromOrders.style.display = 'inline'


    if(username.value === '' && password.value === '') {
        alert('Login Required')
    imageContainer.style.display = 'flex'
        orderPizza.style.display = 'none'
    backFromOrders.style.display = 'none'

    }else {
        orderPizza.style.display = 'inline'
    backFromOrders.style.display = 'inline'
      logIn.innerHTML = 'LOGGED IN'
    }
 
})
settingOfOrder.addEventListener('click', () => {
  sales.style.display = 'none'
  salesAddress.style.display = 'inline'
})

// ADDING A FUNCTION TO ADDRESS INPUT
inputSpaces.forEach(function (inputSpace) {
    register.addEventListener('click', () => {
        if(inputSpace.value === '') {
            alert('Please Enter Your Address For Home Delivery');
            console.log('works');
        } else {
            salesAddress.style.display = 'none'
            sales.style.display = 'inline'
          delivery.style.color = 'green'
          delivery.innerText = 'Address Confirmed '
        }

    })
})
//   BACK FROM THE ADDRESS Input
   back2.addEventListener('click', () => {
    salesAddress.style.display = 'none'
    sales.style.display = 'inline'
   })

   backFromOrders.addEventListener('click', () => {
    imageContainer.style.display = 'flex'
    orderPizza.style.display = 'none'
    backFromOrders.style.display = 'none'
    // window.history.back()
   })



const orders = document.querySelectorAll('.order')
// var calculateTotalButton = document.getElementById('calculateTotal');
const minOrderPrize = document.querySelector('#minOrderPrize')
const eats = document.querySelectorAll('.eat')
const cart3 = document.getElementById('cart3')
const cart2 = document.getElementById('cart2')
 const cart = document.getElementById('cart')
cart2.style.display = 'none'
cart3.style.display = 'none'

// cart.style.display ='none'
const minOrderPrize2 = document.getElementById('minOrderPrize2')
const emptyCart = document.getElementById('emptyCart')
const lists = document.querySelector('.lists')
const createOrder = document.querySelector('#createOrder')
const removeAllOrder = document.querySelector('#removeAllOrder')
// lists.style.display = 'none'

// orders.style.display = 'none'



orders.forEach((order) => {
order.addEventListener('click', () => {
    order.classList.toggle('selected')
    updateTotal()
     if(order.innerText === 'ADDED TO CART'){
        order.innerText = 'ADD TO CART'
     }else {
        order.innerText = 'ADDED TO CART'
     }

    
})

})


function updateTotal() {
    var selectedOrders = document.querySelectorAll('.order.selected')
    var selectedEats = document.querySelectorAll('.eat.selected')


    var totalPrice = 0;

    selectedOrders.forEach((selectedOrder) => {
        var price = parseInt(selectedOrder.getAttribute('data-price')) || 0;
        totalPrice += price

    });
    minOrderPrize.textContent = totalPrice
  
selectedEats.forEach((selectedEat) => {
    console.log(selectedEat.innerHTML)

})

if(minOrderPrize.innerHTML.trim().toLowerCase() === '0') {
    cart2.style.display = 'none'
    cart.style.display = 'inline'
    cart3.style.display = 'none'
    emptyCart.innerHTML = 'Cart is empty. Add products'

}else {
    cart2.style.display = 'inline-block'
    cart.style.display = 'none' 
    cart3.style.display = 'none'
    emptyCart.innerHTML = 'Adding pizza to cart'
}

}


createOrder.addEventListener('click',() => {
    if(minOrderPrize.innerHTML.trim().toLowerCase() === '0') {
        cart2.style.display = 'none'
        cart.style.display = 'inline'
        emptyCart.innerHTML = 'Cart is empty. Add products'
        alert('Please Select an Order')
    }else {
        cart2.style.display = 'none'
        cart.style.display = 'none'
        cart3.style.display = 'inline-block' 
        emptyCart.innerHTML = 'Order(s) are on the way'
        orders.innerHTML ='ADD TO CART'
        if(inputSpaces.value === '') {
            alert('Please Enter Your Address For Home Delivery');
        }

    }
})


