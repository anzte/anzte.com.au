
function w3_open() {
          document.getElementById("mySidebar").style.left = "0";
          document.getElementById("page_wrap").style.marginLeft = "200px";
          document.getElementById("page_wrap").style.marginRight = "-200px";
          document.body.style.overflow = "hidden";

}

function w3_close() {
          document.getElementById("mySidebar").style.left = "-200px";
          document.getElementById("page_wrap").style.marginLeft = "0px";
          document.getElementById("page_wrap").style.marginRight = "0px";
          document.body.style.overflow = "auto";
}