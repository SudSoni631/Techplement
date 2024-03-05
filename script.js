document.addEventListener('DOMContent Loaded',function(){
    const addToCartButtons = document.querySelectorAll('.course button');
    addToCartButtons.foreach(button=>{
        button.addEventListener('click',addToCart);
    });
    function addToCart(){
        const course= this.parentElement;
        const title =
        course.querySelectorAll(h3).textContent;
        const cartItems =
        document.getElementById(cart-items);
        const li=document.createElement('li');
        li.textContent = title;
        cartItems.appendChild(li);

    }
    const checkoutButton=
    document.getElementById('checkout-btn');
    checkoutButton.addEventListener('click',checkout);
    function checkout(){
        alert('Redirection to page...');
    }
    }) ;  