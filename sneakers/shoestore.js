function hamburgerFunction() {
    const x = document.getElementById("mobnav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  let count = document.getElementById("quantityforcart").value;
  function decrementFunction(){
    count--;
    document.getElementById("quantityforcart").value = count;
  }

  function incrementFunction(){
    count++;
    document.getElementById("quantityforcart").value = count;
  }
  const images = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"];
  let largeImg = document.getElementById("largethumbnailimg");
  function changeImage(imageNumber){
    largeImg.src = images[imageNumber];
  }

  function cartAppear(){
    if(document.getElementById("cart").style.display == "block"){
      document.getElementById("cart").style.display = "none"
    }else{
      document.getElementById("cart").style.display = "block"
    }
  }

function addRemoveCart(){
  let items = document.getElementById("quantityforcart").value;
  let emptyCart = document.getElementById("emptycart");
  let fullCart = document.getElementById("fullcart");
  let cartNumber = document.getElementById("cartnumber");
  let totalCash = 125;
  if(items > 0){
  emptyCart.style.display = "none";
  fullCart.style.display = "block";
  totalCash = 125*items;
  cartNumber.innerHTML = items;
  cartNumber.style.display = "block";
  document.getElementById("cartdetail").innerHTML = "Fall limited edition sneakers <br> <em>$125</em> x " + items + " <br> total = $ " + totalCash + "<img class='cart-trash' onclick='emptyCart()' src='./icon-delete.svg' alt='delete button'>";
  } else {
  emptyCart.style.display = "block";
  fullCart.style.display = "none";
  cartNumber.style.display = "none";
  }
}

function emptyCart(){
  document.getElementById("emptycart").style.display = "block";
  document.getElementById("fullcart").style.display = "none";
  document.getElementById("cartnumber").style.display = "none";
}

document.addEventListener("mouseup", function(e){
  let cart = document.getElementById("cart");
  if(!cart.contains(e.target)){
    cart.style.display = "none";
  }
})

let i = 0;
function nextImg(incrementBy){
  i += incrementBy;
  
  if(i==4){
    i=0;
  }else if(i==-1){
    i=3;
  }
  largeImg.src = images[i];
}
