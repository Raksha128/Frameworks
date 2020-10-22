//******************************************************
// *****************************************************
//   
//  Code For Custom Photo frame page ( /pages/customFrame.html)           
//
// *****************************************************
// *****************************************************
// Checking parent ID on body tag 

var frame_Width = 80;
var ChangeHeight = 600;
var ChangeWidth = 600;
var number = 100;
let photoImage;


    if (document.getElementById('cus_Frame')) {

        $("#height").on('change', function () {

            var height = document.getElementById('height').value;

            ChangeHeight = height * 20;
            frame_Width = height * 2;
            just();
        })

        //function to set the width//

        $("#width").on('change', function () {

            var width = document.getElementById('width').value;

            ChangeWidth = width * 20;
            frame_Width = width * 2;

            just();


        })

        $("#sizes").on('change select', function () {


            var size = $.parseJSON($(this).val());

            var width = parseInt(size['width']);
            var height = parseInt(size['height']);
            frame_Width = width + height;

            just();

        })



        // *****************************************************
        //      Parent Scope Variables/Array
        // *****************************************************
        // Array containing all frame thumbnails IDs

        // Array Containing all Pictures thumbnails IDs



        //******************************************************/
        //******************************************************/
        // Function Declarations
        // ******************************************************

        //function to create border and effect on selected thumbnail 



        // Code for drawing Some silly default frame on Canvas
        // anonymous function automatically call when page loads
        window.onload = () => {
            // console.log('test');
            if (canvasFrGr.getContext) {
                // returns a drawing context on the canvas
                let ctx = canvasFrGr.getContext('2d');

                // creates a matrix of blocks and fill with mix of red to green colors
                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 10; j++) {
                        ctx.fillStyle = 'rgb(' + Math.floor(255 - 25.5 * i) + ', ' + Math.floor(255 - 25.5 * j) + ', 0)';
                        ctx.fillRect(j * 60, i * 60, 60, 60);
                    }
                }
                ctx.clearRect(60, 60, 480, 480);
            }
        };


        function imageDraw() {

            let ctx = canvasBkGr.getContext('2d');

            // clearing previous image picture
            ctx.clearRect(0, 0, 600, 600);
            let img = new Image();
            img.src = photoImage;

            img.onload = () => {
                ctx.drawImage(img, frameWidth+100/2, frameWidth+100/2, canvasWidth - (frameWidth * 2) - 100 , canvasHeight - (frameWidth * 2)-100);
            };

            //calling function to create border and effect on selected thumbnail 
        }

        // ***************************************************
        //  Code for drawing frame on Canvas
        // ***************************************************
        var imgName;
        var canvasWidth;
        var canvasHeight;
        var frameWidth;



        // Binding click event listener to all frame thumbnails    
        function just(id) {

            // retriving full size frame image source
            // var id = "id";
            // var res = id.concat(number);

            if (typeof (id) !== 'undefined') {
                imgName = document.getElementById(id).getAttribute('data-src');
                console.log(imgName);
            }
            // document.getElementById('canvasFrGr').width = canvasWidth;
            // document.getElementById('canvasFrGr').height = canvasHeight;

            // document.getElementById('canvasBkGr').width = canvasWidth;
            // document.getElementById('canvasBkGr').height = canvasHeight;

            let ctx = canvasFrGr.getContext('2d');
            let ctx2 = canvasFrGr.getContext('2d');
            let ctx3 = canvasFrGr.getContext('2d');
            let ctx4 = canvasFrGr.getContext('2d');

            canvasWidth = ChangeWidth;
            canvasHeight = ChangeHeight;

            frameWidth = frame_Width;
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

            //calling function to create border and effect on selected thumbnail 


        }


        $(".card-img-top").on('click', function () {


            //console.log($(this).attr('id'));
            just($(this).attr('id'));
        })

        // ***************************************************
        // Code for drawing Picture on Canvas
        // ***************************************************



        // Binding click event Listener to all image thumbnails
        uploadedimage.addEventListener('click', () => {
            // fetching full size image source

            imageDraw();


        });

        


    }
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

/* Code For Custom frame page Ends   */


