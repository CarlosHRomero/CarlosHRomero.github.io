// JavaScript source code

$(document).ready(function () {
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
        var ratio =image.height / image.width;

        var height_div = parseInt( ratio * width_vp);
        //alert(height_div);
        if (height_div > height_vp - 50)
            height_div = height_vp - 50
        
        $('div.home').css('height', height_div+'px');
    }
    
    //var url = $('.home').css('background-image').replace('url(', '').replace(')', '').replace("'", '').replace('"', '');
    
    //var bgImg = $('div.home').css('background-image');//  $('<img />');
    //alert(bgImg.height);
    //bgImg.hide();
    //bgImg.bind('load', function () {
    //    var height = $(this).height();
    //    alert(height);
    //});
    //$('#myDiv').append(bgImg);
    //bgImg.attr('src', url);
});