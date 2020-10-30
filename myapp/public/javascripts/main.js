
var frame_Width = 80;
var ChangeHeight = 800;
var ChangeWidth = 600;
var number = 100;
let photoImage;
let colorName;// color of mat//
let matWidth = 0;
let matHeight = 0;
var colorrect = "transparent"; //color of the core by default transparent//
var width = 10.2;
var height = 15.2;
var outwidth = 13.2;
var outheight = 18.2;



var glassdetails = [
    "✅ 2mm thick Cost effective Available in very large sizes",
    "✅ 2mm thick Optical grade (clear as glass) Highly durable Very light 94% UV resistant",
    "✅ 2mm thick Reduces glare and reflections Suitable for highly lit rooms Matte finish",
    "✅ 2.5mm thick 99% UV resistant Conservation grade Protects artworks from fading",
    "✅ 2.5mm thick 99% UV resistant Conservation grade Protects artworks from fading Reduces glare and reflections Matte finish",
    "✅ Cut and join, empty frame Frame your protected canvas and artworks",
];
function getdetail(obj) {
    var number = obj.id;
    var selected = obj.value;
    document.getElementById("glass-details").innerHTML = glassdetails[number];
    document.getElementById("selected-glass").innerHTML = selected;
}


var backdetails = [
    "✅ Great value for money Rigid and durable Can swap out images at any time",
    "✅ Acid-Free to protect image Very light Allows for flattest mounting of image",
    "✅ Acid-Free to protect image Very light Can swap out images more easily",
    " ",
];
function getbackdetail(obj) {
    var number = obj.id;
    var selected = obj.value;
    document.getElementById("back-details").innerHTML = backdetails[number];
    document.getElementById("selected-backing").innerHTML = selected;
}

function gethangerdetail(obj) {
    var number = obj.id;
    var selected = obj.value;
    document.getElementById("selected-hanger").innerHTML = selected;
}

var printdetails = [
    "✅ Industry standard professional photographic paper Perfect for all types of photographs and portraits Partial gloss and reflection of light 90 Year Archival Rating Ilford GALERIE Prestige Smooth Pearl 310gsm",
    "✅ Amazing glossy metallic reflections Highlights vibrant colours with pearlescent finish Incredible image clarity Ilford GALERIE Prestige Metallic Gloss 260gsm",
    "✅ Smooth fine art paper Matte warm-white tone Incredible durability and longevity Crisp and vivid colours Excellent results with black and white images Gives character to digital art Ilford GALERIE Prestige Fine Art Smooth 200gsm",
    " ",
];
function getprintdetail(obj) {
    var number = obj.id;
    var selected = obj.value;
    document.getElementById("print-details").innerHTML = printdetails[number];
    document.getElementById("printing").innerHTML = selected;
}

if (document.getElementById('cus_Frame')) {


    //code for changine the varying height of the frame//
    $("#height").on('change', function () {

        height = document.getElementById('height').value;

        ChangeHeight = height * 20;
        frame_Width = height * 2;

        document.getElementById("canvasBkGr").style.height = ChangeHeight + 'px';
        frameadder();
        document.getElementById("imagesize").innerHTML = width + 'cm' + 'X' + height + 'cm'; // set the summary part//
        document.getElementById("glasssize").innerHTML = width + 'cm' + 'X' + height + 'cm'; // set the summary part//
        outheight = parseFloat(height) + 3.0;
        outwidth = parseFloat(width) + 3.0;

        document.getElementById("outsidesize").innerHTML = outwidth + 'cm' + 'X' + outheight + 'cm'; // set the summary part//
    })

    // code for setting the varying width of the frame//

    $("#width").on('change', function () {

        width = document.getElementById('width').value;

        ChangeWidth = width * 20;
        frame_Width = width * 2;
        console.log(ChangeWidth);
        document.getElementById("canvasBkGr").style.width = ChangeWidth + 'px';

        frameadder();
        document.getElementById("imagesize").innerHTML = width + 'cm' + 'X' + height + 'cm'; // set the summary part//
        document.getElementById("glasssize").innerHTML = width + 'cm' + 'X' + height + 'cm'; // set the summary part//
        outheight = parseFloat(height) + 3.0;
        outwidth = parseFloat(width) + 3.0;
        document.getElementById("outsidesize").innerHTML = outwidth + 'cm' + 'X' + outheight + 'cm'; // set the summary part//

    })

    // fucntion for changing the mat color as per input//

    function matcolorchange(id) {

        if (typeof (id) !== 'undefined') {
            colorName = document.getElementById(id).getAttribute('value');

            document.getElementById("canvasBkGr").style.background = colorName;
            document.getElementById("matcolor").innerHTML = colorName; // set the summary part//
        }


    }

    // to take the data of the id of the mat on selection//

    $(".colorbutton").on('click', function () {

        //console.log($(this).attr('id'));
        matcolorchange($(this).attr('id'));
    })

    // to add white core border to the image//

    $("#whitecore").on('click', function () {
        document.getElementById("mattype").innerHTML = "white";
        matWidth = canvasWidth / 6;
        matHeight = canvasHeight / 6;

        colorrect = "#FFFFFF";
        imageDraw();
    })

    // to add black core border to the image//

    $("#blackcore").on('click', function () {
        document.getElementById("mattype").innerHTML = "black";
        matWidth = canvasWidth / 6;
        matHeight = canvasHeight / 6;
        colorrect = "#000000";
        imageDraw();
    })

    // to add double black core border to the image//

    $("#doublebcore").on('click', function () {
        document.getElementById("mattype").innerHTML = "doubleblack";
        // matWidth = 100;
        matWidth = canvasWidth / 6;
        matHeight = canvasHeight / 6;
        colorrect = "#000000";
        // imageDraw();
        imageDrawdouble();
    })

    // to add double white core border to the image//

    $("#doublewcore").on('click', function () {
        document.getElementById("mattype").innerHTML = "doublewhite";
        // matWidth = 100;
        matWidth = canvasWidth / 6;
        matHeight = canvasHeight / 6;
        colorrect = "#FFFFFF";
        // imageDraw();
        imageDrawdouble();
    })


    //to check the condition and set for no core border value of the image//
    $("#nocore").on('click', function () {
        document.getElementById("mattype").innerHTML = "nocolor";
        matWidth = 0;
        matHeight = 0;
        colorrect = "transparent";
        imageDraw();
    })

    //to vary the width and height of the frame accordingly on the pre determined selection//

    $("#sizes").on('change select', function () {


        var size = $.parseJSON($(this).val());

        var width = parseInt(size['width']);
        var height = parseInt(size['height']);
        var vwidth = parseFloat(size['vwidth']);
        var vheight = parseFloat(size['vheight']);
        frame_Width = width + height;

        frameadder();


        document.getElementById("imagesize").innerHTML = vwidth + 'cm' + 'X' + vheight + 'cm'; // set the summary part//
        document.getElementById("glasssize").innerHTML = vwidth + 'cm' + 'X' + vheight + 'cm'; //set the summary part//
        outheight = parseFloat(vheight) + 3.0;
        outwidth = parseFloat(vwidth) + 3.0;
        document.getElementById("outsidesize").innerHTML = outwidth + 'cm' + 'X' + outheight + 'cm';

    })


    //function to create border and effect on selected thumbnail 


    // Code for drawing Some silly default frame on Canvas
    // anonymous function automatically call when page loads

    window.onload = () => {
        // console.log('test');
        // if (canvasFrGr.getContext) {
        //     // returns a drawing context on the canvas
        //     let ctx = canvasFrGr.getContext('2d');

        //     // creates a matrix of blocks and fill with mix of red to green colors
        //     for (let i = 0; i < 10; i++) {
        //         for (let j = 0; j < 10; j++) {
        //             ctx.fillStyle = 'rgb(' + Math.floor(255 - 25.5 * i) + ', ' + Math.floor(255 - 25.5 * j) + ', 0)';
        //             ctx.fillRect(j * 60, i * 60, 60, 60);
        //         }
        //     }
        //     ctx.clearRect(60, 60, 480, 480);
        // }
        imgName = "frame-2.jpg";

        let ctx = canvasFrGr.getContext('2d');
        let ctx2 = canvasFrGr.getContext('2d');
        let ctx3 = canvasFrGr.getContext('2d');
        let ctx4 = canvasFrGr.getContext('2d');

        canvasWidth = ChangeWidth;
        canvasHeight = ChangeHeight;


        frameWidth = frame_Width;

        document.getElementById('canvasFrGr').width = canvasWidth;
        document.getElementById('canvasFrGr').height = canvasHeight;

        document.getElementById('canvasBkGr').width = canvasWidth;
        document.getElementById('canvasBkGr').height = canvasHeight;

        //console.log(frameWidth);
        function topbottom(pathPoints, img, x, y, a, b) {

            // save the unclipped context
            ctx.save();

            // define the path that will be clipped to
            ctx.beginPath();
            ctx.moveTo(pathPoints[0], pathPoints[1]);
            // this demo has a known number of polygon points
            // but include a loop of "lineTo's" if you have a variable number of points
            ctx.lineTo(pathPoints[2], pathPoints[3]);
            ctx.lineTo(pathPoints[4], pathPoints[5]);
            ctx.lineTo(pathPoints[6], pathPoints[7]);
            ctx.closePath();

            // make the current path a clipping path
            ctx.clip();
            ctx.scale(a, b);

            // draw the image which will be clipped except in the clipping path
            ctx.drawImage(img, x, y, canvasWidth, frameWidth);

            ctx.drawImage(img, x, y, canvasWidth + canvasWidth, frameWidth);
            ctx.drawImage(img, x - canvasWidth, y, canvasWidth + canvasWidth, frameWidth);

            // restore the unclipped context (==undo the clipping path)
            ctx.restore();
        }

        function sides(pathPoints, img, x, y, a, b, d) {

            // save the unclipped context
            ctx.save();

            // define the path that will be clipped to
            ctx.beginPath();
            ctx.moveTo(pathPoints[0], pathPoints[1]);
            // this demo has a known number of polygon points
            // but include a loop of "lineTo's" if you have a variable number of points
            ctx.lineTo(pathPoints[2], pathPoints[3]);
            ctx.lineTo(pathPoints[4], pathPoints[5]);
            ctx.lineTo(pathPoints[6], pathPoints[7]);
            ctx.closePath();


            // make the current path a clipping path
            ctx.clip();
            ctx.scale(a, b);
            ctx.rotate(d * Math.PI / 180);
            // draw the image which will be clipped except in the clipping path
            ctx.drawImage(img, x, y, canvasWidth, frameWidth);

            ctx.drawImage(img, x, y, canvasWidth + canvasWidth, frameWidth);
            ctx.drawImage(img, x - canvasWidth, y, canvasWidth + canvasWidth, frameWidth);



            // restore the unclipped context (==undo the clipping path)
            ctx.restore();
        }



        // clears the canvas pixels 
        ctx.clearRect(0, 0, 600, 600);
        // creating a new image object   
        let img = new Image();
        img.onload = () => {

            var pat = ctx.createPattern(img, "repeat");

            topbottom([0, 0, canvasWidth, 0, (canvasWidth - frameWidth), frameWidth, frameWidth, frameWidth], img, 0, 0);

            topbottom([0, canvasHeight, canvasWidth, canvasHeight, (canvasWidth - frameWidth), (canvasHeight - frameWidth), frameWidth, canvasHeight - frameWidth], img, 0, -canvasHeight, 1, -1);

            sides([0, 0, 0, canvasHeight, frameWidth, (canvasHeight - frameWidth), frameWidth, frameWidth], img, -canvasWidth, 0, 1, 1, 270);

            sides([canvasWidth, 0, canvasWidth, canvasHeight, canvasWidth - frameWidth, canvasHeight - frameWidth, canvasWidth - frameWidth, frameWidth], img, 0, -canvasWidth, 1, 1, 90);
            imageDraw();

        };
        // fetching image source
        img.src = './images/' + imgName;
    };

    //code for drawing single core and displaying image//

    function imageDraw() {

        let ctx = canvasBkGr.getContext('2d');

        // clearing previous image picture
        ctx.clearRect(0, 0, 800, 800);
        let img = new Image();
        img.src = photoImage;

        img.onload = () => {
            ctx.drawImage(img, frameWidth + matWidth / 2, frameWidth + matHeight / 2, canvasWidth - (frameWidth * 2) - matWidth, canvasHeight - (frameWidth * 2) - matHeight);
        };

        //calling function to create border and effect on selected thumbnail 
        ctx.strokeStyle = colorrect;
        ctx.lineWidth = 3;
        ctx.strokeRect(frameWidth + matWidth / 2, frameWidth + matHeight / 2, canvasWidth - (frameWidth * 2) - matWidth, canvasHeight - (frameWidth * 2) - matHeight);
        //FUCNITON FOR DOUBLE 
    }

    //code for drawing dual core and displaying image//
    function imageDrawdouble() {

        let ctx = canvasBkGr.getContext('2d');

        // clearing previous image picture
        ctx.clearRect(0, 0, 800, 800);
        let img = new Image();
        img.src = photoImage;

        img.onload = () => {
            ctx.drawImage(img, frameWidth + matWidth / 2, frameWidth + matHeight / 2, canvasWidth - (frameWidth * 2) - matWidth, canvasHeight - (frameWidth * 2) - matHeight);
        };

        //calling function to create border and effect on selected thumbnail 
        ctx.strokeStyle = colorrect;
        ctx.lineWidth = 3;
        ctx.strokeRect(frameWidth + matWidth / 2, frameWidth + matHeight / 2, canvasWidth - (frameWidth * 2) - matWidth, canvasHeight - (frameWidth * 2) - matHeight);
        //FUCNITON FOR DOUBLE 

        var doubleMargin = 10;
        ctx.strokeRect(frameWidth + matWidth / 2 - doubleMargin, frameWidth + matHeight / 2 - doubleMargin, canvasWidth - (frameWidth * 2) - matWidth + doubleMargin * 2, canvasHeight - (frameWidth * 2) - matHeight + doubleMargin * 2);


    }

    // ***************************************************
    //  Code for drawing frame on Canvas
    // ***************************************************
    var imgName;
    var canvasWidth;
    var canvasHeight;
    var frameWidth;


    // Binding click event listener to all frame thumbnails    
    function frameadder(id) {

        // retriving full size frame image source
        // var id = "id";
        // var res = id.concat(number);

        if (typeof (id) !== 'undefined') {
            imgName = document.getElementById(id).getAttribute('data-src');
            console.log(imgName);
        }


        let ctx = canvasFrGr.getContext('2d');
        let ctx2 = canvasFrGr.getContext('2d');
        let ctx3 = canvasFrGr.getContext('2d');
        let ctx4 = canvasFrGr.getContext('2d');

        canvasWidth = ChangeWidth;
        canvasHeight = ChangeHeight;


        frameWidth = frame_Width;

        document.getElementById('canvasFrGr').width = canvasWidth;
        document.getElementById('canvasFrGr').height = canvasHeight;

        document.getElementById('canvasBkGr').width = canvasWidth;
        document.getElementById('canvasBkGr').height = canvasHeight;

        //console.log(frameWidth);
        function topbottom(pathPoints, img, x, y, a, b) {

            // save the unclipped context
            ctx.save();

            // define the path that will be clipped to
            ctx.beginPath();
            ctx.moveTo(pathPoints[0], pathPoints[1]);
            // this demo has a known number of polygon points
            // but include a loop of "lineTo's" if you have a variable number of points
            ctx.lineTo(pathPoints[2], pathPoints[3]);
            ctx.lineTo(pathPoints[4], pathPoints[5]);
            ctx.lineTo(pathPoints[6], pathPoints[7]);
            ctx.closePath();

            // make the current path a clipping path
            ctx.clip();
            ctx.scale(a, b);

            // draw the image which will be clipped except in the clipping path
            ctx.drawImage(img, x, y, canvasWidth, frameWidth);

            ctx.drawImage(img, x, y, canvasWidth + canvasWidth, frameWidth);
            ctx.drawImage(img, x - canvasWidth, y, canvasWidth + canvasWidth, frameWidth);

            // restore the unclipped context (==undo the clipping path)
            ctx.restore();
        }

        function sides(pathPoints, img, x, y, a, b, d) {

            // save the unclipped context
            ctx.save();

            // define the path that will be clipped to
            ctx.beginPath();
            ctx.moveTo(pathPoints[0], pathPoints[1]);
            // this demo has a known number of polygon points
            // but include a loop of "lineTo's" if you have a variable number of points
            ctx.lineTo(pathPoints[2], pathPoints[3]);
            ctx.lineTo(pathPoints[4], pathPoints[5]);
            ctx.lineTo(pathPoints[6], pathPoints[7]);
            ctx.closePath();


            // make the current path a clipping path
            ctx.clip();
            ctx.scale(a, b);
            ctx.rotate(d * Math.PI / 180);
            // draw the image which will be clipped except in the clipping path
            ctx.drawImage(img, x, y, canvasWidth, frameWidth);

            ctx.drawImage(img, x, y, canvasWidth + canvasWidth, frameWidth);
            ctx.drawImage(img, x - canvasWidth, y, canvasWidth + canvasWidth, frameWidth);



            // restore the unclipped context (==undo the clipping path)
            ctx.restore();
        }



        // clears the canvas pixels 
        ctx.clearRect(0, 0, 600, 800);
        // creating a new image object   
        let img = new Image();
        img.onload = () => {

            var pat = ctx.createPattern(img, "repeat");

            topbottom([0, 0, canvasWidth, 0, (canvasWidth - frameWidth), frameWidth, frameWidth, frameWidth], img, 0, 0);

            topbottom([0, canvasHeight, canvasWidth, canvasHeight, (canvasWidth - frameWidth), (canvasHeight - frameWidth), frameWidth, canvasHeight - frameWidth], img, 0, -canvasHeight, 1, -1);

            sides([0, 0, 0, canvasHeight, frameWidth, (canvasHeight - frameWidth), frameWidth, frameWidth], img, -canvasWidth, 0, 1, 1, 270);

            sides([canvasWidth, 0, canvasWidth, canvasHeight, canvasWidth - frameWidth, canvasHeight - frameWidth, canvasWidth - frameWidth, frameWidth], img, 0, -canvasWidth, 1, 1, 90);
            imageDraw();

        };
        // fetching image source
        img.src = './images/' + imgName;




    }

    $(".card-img-top").on('click', function () {

        var code = $(this).attr('id');
        document.getElementById('selected-frame').innerHTML = code;
        //console.log($(this).attr('id'));
        frameadder($(this).attr('id'));
    })

}
//function to read input image and display//
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {

            photoImage = e.target.result;
            imageDraw();

        };

        reader.readAsDataURL(input.files[0]);
    }
}

// function to convert html table to json//

function htmlToJson() {
    var cart = [];
    var headersText = [];
    var $headers = $("th");

    // Loop through grabbing everything
    var $rows = $("tbody tr").each(function (index) {
        $cells = $(this).find("td");
        cart[index] = {};

        $cells.each(function (cellIndex) {
            // Set the header text
            if (headersText[cellIndex] === undefined) {
                headersText[cellIndex] = $($headers[cellIndex]).text();
            }
            // Update the row object with the header/cell combo
            cart[index][headersText[cellIndex]] = $(this).text();
        });
    });

    // Let's put this in the object like you want and convert to JSON (Note: jQuery will also do this for you on the Ajax request)
    var myObj = {
        "Cart Data": cart
    };
    alert(JSON.stringify(myObj));

}

//function to display tabs//
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
/* Code For Custom frame page Ends   */


