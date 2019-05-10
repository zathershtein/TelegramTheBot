const NodeWebcam = require( "node-webcam" );

//Default options

const opts = {
    //Picture related
    width: 1280,
    height: 720,
    quality: 100,

    delay: 0,

    //Save shots in memory
    saveShots: true,

    // [jpeg, png] support varies
    // Webcam.OutputTypes
    output: "jpeg",

    //Which camera to use
    //Use Webcam.list() for results
    //false for default device
    device: false,

    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes
    callbackReturn: "location",

    //Logging
    verbose: false
};


// const Webcam = NodeWebcam.create( opts );

// Webcam.list( function( list: any ) {
//     //Use another device
//     var anotherCam = NodeWebcam.create( { device: list[ 0 ] } );
//     console.log("Используем камеру: ", anotherCam);
// });

export function getPicture (webcam: any) {
    NodeWebcam.capture( "test_picture", opts, function( err: any, data: any ) {
        console.log("Пишем файл...");
    });
}


//Will automatically append location output type
// Webcam.capture( "test_picture", function( err: any, data: any ) {
//     console.log("Пишем файл");
// } );


//Also available for quick use

//Return type with base 64 image
// var opts = {
//     callbackReturn: "base64"
// };

// NodeWebcam.capture( "test_picture", opts, function( err: any, data: any ) {
//     var image = "<img src='" + data + "'>";
//     fs.writeFileSync("./test.jpeg", data);
// });
