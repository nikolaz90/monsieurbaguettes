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
const photos = ["./DSC01445.JPG", "./DSC02081.JPG", "./DSC01484.JPG", "./DSC01888.JPG", "./DSC01311.JPG", "./DSC01987.JPG", "./DSC01960.JPG", "./DSC01572.JPG", "./DSC02333.JPG", "./DSC01587.JPG", "./DSC01251.JPG", "./DSC02231.JPG" ];

function enlargenFunction(imageNumber){
  section3.style.display = "none";
  modal.style.display = "block";
  modalContent.src = photos[imageNumber];
}

function closeFunction() {
  modal.style.display = "none";
  section3.style.display = "block";
}
