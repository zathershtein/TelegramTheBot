import * as NodeWebcam from "node-webcam";

// Options description: https://www.npmjs.com/package/node-webcam
const opts = {
    width: 1280,
    height: 720,
    quality: 100,
    delay: 0,
    saveShots: true,
    output: "jpeg",
    device: false,
    callbackReturn: "location",
    verbose: false
};

export const Webcam = NodeWebcam.create( opts );

export async function getPicture (webcam: any) {
    await NodeWebcam.capture( "img/picture", opts, function( err: any, data: any ) {
        console.log("Пишем файл...");
    });
}









// Webcam.list( function( list: any ) {
//     //Use another device
//     var anotherCam = NodeWebcam.create( { device: list[ 0 ] } );
//     console.log("Используем камеру: ", anotherCam);
// });

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
