
function sidebarOpen() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("page_wrap").style.marginLeft = "200px";
    document.getElementById("page_wrap").style.marginRight = "-200px";
    document.body.style.overflow = "hidden";

}
function sidebarClose() {
    document.getElementById("sidebar").style.left = "-200px";
    document.getElementById("page_wrap").style.marginLeft = "0px";
    document.getElementById("page_wrap").style.marginRight = "0px";
    document.body.style.overflow = "auto";
}

function openMapPanel(){
    var map_panel = document.getElementById("map_panel");
    if(document.getElementsByClassName('height_on').length){       
        map_panel.style.height="0";
        map_panel.className = " z-depth-1-half map_container mb-2";     
    }else{
        map_panel.className += " height_on";
        map_panel.style.height="43vh";
    }
}