import * as fs from "fs";

export function getTemp(): number {
    let tempCPU: number;
    fs.readFile("/sys/devices/virtual/thermal/thermal_zone0/temp", (err, data) => {
        tempCPU = data.readUIntBE(0, 2);
        // console.log(data);
    })
    return tempCPU;
}

