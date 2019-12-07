import * as nodeWebcam from "node-webcam"
import * as fs from "fs"
import { PATH_TO, CAPTURE_SETTINGS } from "../constants"

// Options description: https://www.npmjs.com/package/node-webcam
export const opts = {
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

// export const webcam = nodeWebcam.create(opts);

export async function takePicture(): Promise<string> {
    if (!fs.existsSync(PATH_TO.PHOTO_DIR)) {
        console.log("Creating directory for images...");
        fs.mkdirSync(PATH_TO.PHOTO_DIR);
    };

    if (fs.existsSync(
        PATH_TO.PHOTO_DIR +
        CAPTURE_SETTINGS.FILENAME +
        CAPTURE_SETTINGS.EXTENTION
    )) {
        console.log("Deleting existing photo...");
        fs.unlinkSync(
            PATH_TO.PHOTO_DIR +
            CAPTURE_SETTINGS.FILENAME +
            CAPTURE_SETTINGS.EXTENTION
        )
    };

    return new Promise((resolve, reject) => {
        try {
            nodeWebcam.capture(PATH_TO.PHOTO_DIR + CAPTURE_SETTINGS.FILENAME, opts, (err: Error, data: any) => {
                if (err) {
                    throw err
                } else {
                    resolve(data);
                    return (
                        PATH_TO.PHOTO_DIR +
                        CAPTURE_SETTINGS.FILENAME +
                        CAPTURE_SETTINGS.EXTENTION
                    );
                };
            });
        } catch (error) {
            console.log("--------------ERROR-----------: ", error);
            reject(error);
        };
    });
}
