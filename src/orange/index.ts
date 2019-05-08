import * as fs from "fs";

const PATH_TO_TEMP = "/sys/devices/virtual/thermal/thermal_zone0/temp";

export function getTemp(): number {
    try {
        const fileData = fs.readFileSync(PATH_TO_TEMP);
        const res = Math.round((parseInt(fileData.toString()) / 1000) * 100) / 100;
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