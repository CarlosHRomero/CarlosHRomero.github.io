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

        image.src = image_url;
        var ratio = parseInt (image.height*100/image.width)-10;
        //alert(ratio);
        $('div.home').css('height', ratio+'vw');
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