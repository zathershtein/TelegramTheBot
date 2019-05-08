import * as fs from "fs";

const PATH_TO_TEMP = "/sys/devices/virtual/thermal/thermal_zone0/temp";
const PATH_TO_LOAD = "/proc/loadavg";
// const PATH_TO_TEMP = "./src/orange/tests/testDataTemp";


export function getTemp(): number {
    try {
        const fileData = fs.readFileSync(PATH_TO_TEMP);
        const res = Math.round((parseInt(fileData.toString()) / 1000) * 10) / 10;
        return res;
    } catch (err) {
        if (err) {
            if (err.code == 'ENOENT') {
                console.error(err.message);
            } else {
                console.error(err);
            }
        }
    }
}

export function getSystemLoad(): string {
    try {
        const fileData = fs.readFileSync(PATH_TO_LOAD);
        const res = fileData.toString().split(" ").slice(0, 3).join(" ");
        return res;
    } catch (err) {
        if (err) {
            if (err.code == 'ENOENT') {
                console.error(err.message);
            } else {
                console.error(err);
            }
        }
    }
}
