// JavaScript source code

$(document).ready(resize);

function resize() {
    var image_url = $('div.home').css('background-image'),
        image;

    // Remove url() or in case of Chrome url("")
    image_url = image_url.match(/^url\("?(.+?)"?\)$/);


    if (image_url[1]) {
        image_url = image_url[1];
        //alert(image_url);
        image = new Image();

        // just in case it is not already loaded
        //$(image).load(/*function () {
        //    alert(image.width + 'x' + image.height);
        //}*/);
        var width_vp = document.documentElement.clientWidth; // ancho
        var height_vp = window.innerHeight; // alto

        image.src = image_url;
        var ratio = image.height / image.width;

        var height_div = parseInt(ratio * width_vp);
        console.log('ratio ' + ratio);
        console.log('width_vp ' + width_vp);
        console.log('ratio * width_vp ' + ratio * width_vp);
        if (height_div > height_vp - 40)
            height_div = height_vp - 50
        else
            height_div = height_div - 30

        console.log('height_div ' + height_div);
        $('div.home').css('height', height_div + 'px');
    }


}