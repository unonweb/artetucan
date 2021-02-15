function show(element) {
// requires a .show class in css
    //console.log("show: ", element)
    element.firstElementChild.classList.toggle("show");
}

function setStyle(imgSrc, textColor, elementColor) {
    console.log("setStyle called");
    // change header image:
    document.getElementById('cartel').src = imgSrc;
    // change CSS variables:
    document.documentElement.style.setProperty('--text-color', textColor);
    document.documentElement.style.setProperty('--element-color', elementColor);
}

document.addEventListener('DOMContentLoaded', () => {

    // scroll into view

    let navGallery = document.getElementById('nav-gallery');
    let navOrders = document.getElementById('nav-orders');
    let navAboutMe = document.getElementById('nav-about-me');

    navGallery.addEventListener('click', function() {
        let gallery = document.getElementById('gallery');
        gallery.scrollIntoView({behavior: "smooth", block: "center"});
    });

    navOrders.addEventListener('click', function() {
        let orders = document.getElementById('orders');
        orders.scrollIntoView({behavior: "smooth", block: "center"});
    });

    navAboutMe.addEventListener('click', function() {
        let aboutMe = document.getElementById('about-me');
        //console.log('element clicked: ', this);
        //console.log('element referenced: ', aboutMe);
        aboutMe.scrollIntoView({behavior: "smooth", block: "center"});
    });
    
    // drop down menu
    let dropDowns = document.getElementsByClassName('dropDownContainer');

    for (i=0;i<dropDowns.length;i++){
        //console.log("dropDown: ", dropDowns[i]);
        dropDowns[i].addEventListener('click', function() {
            show(this);
        });
    }

    let style1 = document.getElementById('style1');
    let style2 = document.getElementById('style2');
    let style3 = document.getElementById('style3');
    let style4 = document.getElementById('style4');

    style1.onclick = () => {
        setStyle("img/cartel_1.jpg", "#93001C", "#C7FF9C");
    }
    style2.onclick = () => {
        setStyle("img/cartel_2.jpg", "#048056", "#FFBA2A");
    }
    style3.onclick = () => {
        setStyle("img/cartel_3.jpg", "#048056", "#FFBA2A");
    }
    style4.onclick = () => {
        setStyle("img/cartel_4.jpg", "#9C3938", "#C6BAEC");
    }
    
    // end
});
