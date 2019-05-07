import * as fs from "fs";

export async function getTemp() {
    let res: string;

    await fs.readFile("./src/orange/testData",
    (err, data) => {
        if (err) {
            if (err.code == 'ENOENT') {
                console.error(err.message);
            } else {
                console.error(err);
            }
        } else {
            console.log(data);
        }
        res = data.toString();
    })
    
    return res;
}

// /sys/devices/virtual/thermal/thermal_zone0/temp