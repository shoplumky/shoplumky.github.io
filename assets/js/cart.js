// # - Développé par: Keany Vy KHUN
// # - Sous Licence : MIT
// # - Projet: Boutique Lumky
// # - Description: Boutique e-commerce
// # - Status: Non fonctionnel

console.log("running");

//    document.querySelector('#productNumbers').textContent = 1;
//    document.querySelector('#productNumbersmenu').textContent = 1;

var shoppingCart = (function () {
    // Private methods and properties
    var cart = [];

    function Item(name, brand, img, price, delivery, count) {
        this.name = name
        this.brand = brand
        this.img = img
        this.price = price
        this.delivery = delivery
        this.count = count
    }

    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (cart === null) {
            cart = []
        }
    }

    loadCart();



    // Public methods and properties
    var obj = {};

    obj.addItemToCart = function (name, brand, img, price, delivery, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }

        var item = new Item(name, brand, img, price, delivery, count);
        cart.push(item);
        saveCart();
    };

    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCart = function (name) { // Removes one item
        for (var i in cart) {
            if (cart[i].name === name) { // "3" === 3 false
                cart[i].count--; // cart[i].count --
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCartAll = function (name) { // removes all item name
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };


    obj.clearCart = function () {
        cart = [];
        saveCart();
    }


    obj.countCart = function () { // -> return total count
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

    obj.subtotalCart = function () { // -> return total cost
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        if(totalCost == 0) {
          return "0.00€";
        } else {
          return totalCost.toFixed(2) + "€";
        }
    };

    obj.delivery = function () { // -> return total cost
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].delivery;
        }
        if(totalCost == 0) {
          return "Gratuit";
        } else {
          return totalCost.toFixed(2) + "€";
        }
    };

    obj.total = function () { // -> return total cost
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].delivery + cart[i].price * cart[i].count;
        }
        if(totalCost == 0) {
          return "0.00€";
        } else {
          return totalCost.toFixed(2) + "€";
        }
    };

    obj.listCart = function () { // -> array of Items
        var cartCopy = [];
        for (var i in cart) {
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    // ----------------------------
    return obj;
})();

$(".add-to-cart-btn").click(function(event){
    event.preventDefault();
    var name = $(this).attr("data-name");
    var brand = $(this).attr("data-brand");
    var img = $(this).attr("data-img");
    var price = Number($(this).attr("data-price"));
    var delivery = Number($(this).attr("data-delivery"));

    shoppingCart.addItemToCart(name, brand, img, price, delivery, 1);

    displayCart();
});

$("#clear-cart").click(function(event){
    shoppingCart.clearCart();
    displayCart();
});

function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";

    for (var i in cartArray) {
        output += '<div class="single-cart-item">'
            +'<a href="javascript:void(0);" class="product-image">'
            +'<img src="'+ cartArray[i].img +'" class="cart-thumb" alt="" />'
            +'<div class="cart-item-desc">'
            +'<span class="product-remove subtract-item" data-name="'+ cartArray[i].name +'"><i class="fa fa-close" aria-hidden="true"></i></span>'
            +'<span class="badge">'+ cartArray[i].brand +'</span>'
            +'<h6>'+ cartArray[i].name +'</h6>'
            +'<p class="size">Nombre: '+ cartArray[i].count +'</p>'
            +'<p class="color">Color: Red</p>'
            +'<p class="price">'+ cartArray[i].price +'€</p>'
            +'</div>'
            +'</a>'
            +'</div>';
    }

    $("#show-cart").html(output);
    $("#productNumbers").html( shoppingCart.countCart() );
    $("#productNumbersmenu").html( shoppingCart.countCart() );
    $("#subtotal-cart").html( shoppingCart.subtotalCart() );
    $("#delivery").html( shoppingCart.delivery() );
    $("#total-cart").html( shoppingCart.total() );
}

$("#show-cart").on("click", ".delete-item", function(event){
    var name = $(this).attr("data-name");
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
});

$("#show-cart").on("click", ".subtract-item", function(event){
    var name = $(this).attr("data-name");
    shoppingCart.removeItemFromCart(name);
    displayCart();
});

$("#show-cart").on("click", ".plus-item", function(event){
    var name = $(this).attr("data-name");
    shoppingCart.addItemToCart(name, 0, 1);
    displayCart();
});

$("#show-cart").on("change", ".item-count", function(event){
    var name = $(this).attr("data-name");
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});

displayCart();
