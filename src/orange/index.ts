import * as fs from "fs";

export function getTemp() {
    return fs.readFileSync("/sys/devices/virtual/thermal/thermal_zone0/temp").readUIntBE(0, 3);
}