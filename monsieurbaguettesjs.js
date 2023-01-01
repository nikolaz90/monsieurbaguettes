const mybutton = document.getElementById("btn-up"); 

window.onscroll = function () {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



/*Gallery Expanding*/ 

const modal = document.getElementById("gallery"); 
const modalContent = document.getElementById("large_image");
const section3 = document.getElementById("section-3");
const photos = ["./images/DSC01445.JPG", "./images/DSC02081.JPG", "./images/DSC01484.JPG", "./images/DSC01888.JPG", "./images/DSC01311.JPG", "./images/DSC01987.JPG", "./images/DSC01960.JPG", "./images/DSC01572.JPG", "./images/DSC02333.JPG", "./images/DSC01587.JPG", "./images/DSC01251.JPG", "./images/DSC02231.JPG" ];

function enlargenFunction(imageNumber){
  section3.style.display = "none";
  modal.style.display = "block";
  modalContent.src = photos[imageNumber];
}

function closeFunction() {
  modal.style.display = "none";
  section3.style.display = "block";
}
