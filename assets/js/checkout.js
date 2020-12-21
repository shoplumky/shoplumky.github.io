// # - Développé par: Keany Vy KHUN
// # - Sous Licence : MIT
// # - Projet: Boutique Lumky
// # - Description: Boutique e-commerce
// # - Status: Non fonctionnel

function productCheckout() {
    var cartArray = shoppingCart.listCart();
    var output = "";

    for (var i in cartArray) {
        output += '<li>'
            +'<span style="color: #505050;">'+ cartArray[i].name +'&nbsp; <a style="color: #febd69;">(x'+ cartArray[i].count +')</a></span>'
            +'<span>'+ cartArray[i].price +'€</span>'
            +'</li>';
    }

    $("#productCheckout").html(output);
    $("#subtotal-checkout").html( shoppingCart.subtotalCart() );
    $("#delivery-checkout").html( shoppingCart.delivery() );
    $("#total-checkout").html( shoppingCart.total() );
}

$("#show-cart").on("click", ".delete-item", function(event){
    productCheckout();
});

$("#show-cart").on("click", ".subtract-item", function(event){
    productCheckout();
});

$("#show-cart").on("click", ".plus-item", function(event){
    productCheckout();
});

$("#show-cart").on("change", ".item-count", function(event){
    productCheckout();
});$("#show-cart").on("click", ".delete-item", function(event){
    productCheckout();
});

$("#show-cart").on("click", ".subtract-item", function(event){
    productCheckout();
});

$("#show-cart").on("click", ".plus-item", function(event){
    productCheckout();
});

$("#show-cart").on("change", ".item-count", function(event){
    productCheckout();
});

productCheckout();
