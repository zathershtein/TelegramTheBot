declare module "node-webcam" {
    export class FSWebcam {
        static Defaults: {
            bottomBanner: boolean;
            greyscale: boolean;
            saturation: boolean;
            setValues: {};
            skip: boolean;
            subTitle: boolean;
            timestamp: boolean;
            title: boolean;
            topBanner: boolean;
        };
        static Validations: {
            noWebcam: RegExp;
        };
        constructor(options: any);
        capture(location: any, callback: any): void;
        clear(): void;
        clone(): any;
        createShot(location: any, data: any): any;
        dispatch(event: any): void;
        generateSh(location: any): any;
        getBase64(shot: any, callback: any): void;
        getBase64FromBuffer(shotBuffer: any): any;
        getControlSetString(setValues: any): any;
        getLastShot(): any;
        getLastShot64(callback: any): void;
        getLastShotBuffer(callback: any): void;
        getShot(index: any, callback: any): any;
        getShotBuffer(shot: any, callback: any): void;
        handleCallbackReturnType(callback: any, shot: any): any;
        hasCamera(callback: any): void;
        hasListener(type: any, listener: any): any;
        list(callback: any): any;
        on(type: any, listener: any): void;
        removeListener(type: any, listener: any): void;
        runCaptureValidations(data: any): any;
    }
    export const Factory: {
        Platform: string;
        Types: {
            darwin: Function;
            fswebcam: Function;
            linux: Function;
            win32: Function;
            win64: Function;
        };
        create: Function;
    };
    export class ImageSnapWebcam {
        static Defaults: {
            delay: number;
        };
        constructor(options: any);
        capture(location: any, callback: any): void;
        clear(): void;
        clone(): any;
        createShot(location: any, data: any): any;
        dispatch(event: any): void;
        generateSh(location: any): any;
        getBase64(shot: any, callback: any): void;
        getBase64FromBuffer(shotBuffer: any): any;
        getLastShot(): any;
        getLastShot64(callback: any): void;
        getLastShotBuffer(callback: any): void;
        getShot(index: any, callback: any): any;
        getShotBuffer(shot: any, callback: any): void;
        handleCallbackReturnType(callback: any, shot: any): any;
        hasCamera(callback: any): void;
        hasListener(type: any, listener: any): any;
        list(callback: any): void;
        on(type: any, listener: any): void;
        removeListener(type: any, listener: any): void;
        runCaptureValidations(data: any): any;
    }
    export const REVISION: number;
    export const Webcam: {
        Platform: string;
        Types: {
            darwin: Function;
            fswebcam: Function;
            linux: Function;
            win32: Function;
            win64: Function;
        };
        create: Function;
    };
    export class WindowsWebcam {
        static Defaults: {
            output: string;
        };
        constructor(options: any);
        capture(location: any, callback: any): void;
        clear(): void;
        clone(): any;
        createShot(location: any, data: any): any;
        dispatch(event: any): void;
        generateSh(location: any): any;
        getBase64(shot: any, callback: any): void;
        getBase64FromBuffer(shotBuffer: any): any;
        getLastShot(): any;
        getLastShot64(callback: any): void;
        getLastShotBuffer(callback: any): void;
        getShot(index: any, callback: any): any;
        getShotBuffer(shot: any, callback: any): void;
        handleCallbackReturnType(callback: any, shot: any): any;
        hasCamera(callback: any): void;
        hasListener(type: any, listener: any): any;
        list(callback: any): void;
        on(type: any, listener: any): void;
        removeListener(type: any, listener: any): void;
        runCaptureValidations(data: any): any;
    }
    export function capture(location: any, options: any, callback: any): any;
    export function create(options: any): any;
    export const version: string;
}
