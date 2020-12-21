// # - Développé par: Keany Vy KHUN
// # - Sous Licence : MIT
// # - Projet: Boutique Lumky
// # - Description: Boutique e-commerce
// # - Status: Non fonctionnel

function showproducts() {
  for (let i = 0; i < 4; i++) {
    let produit = document.getElementById('product-'+[i]);
    let name = produit.getAttribute('data-name');
    let price = produit.getAttribute('data-price');
    let brand = produit.getAttribute('data-brand');
    let img = produit.getAttribute('data-img');

    $("#title-products-"+[i]).html(name);
    $("#price-products-"+[i]).html(price+'€');
    $("#brand-products-"+[i]).html(brand+'&trade;');
    $("#img-products-"+[i]).html('<img src="'+ img +'" alt="" /> <!-- Hover Thumb --> <img class="hover-img" src="'+ img +'" alt="" /> <!-- Favourite --> <div class="product-favourite"><a href="#" class="favme fa fa-heart"></a></div>');
  }
}
showproducts()
