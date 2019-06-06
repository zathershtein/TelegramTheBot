import * as fs from "fs";
import { PATH_TO } from "../constants";
import { Log } from "@uk/log";

export type SysInfo = number | string;
export interface SysData {
    [value: string]: SysInfo;
}

const log = new Log(__filename);

export function getSysInfo(path: string): SysData {
    let res: SysData = {
        temp: -255,
        load: "",
        memTotal: -255,
        memFree: -255
    };

    function calcMem(item: string): number {
        return Math.round(parseInt(item.split(" ").filter(el => el !== "")[1]) / 1024);
    };

    try {
        if (fs.existsSync(path)) {
            const fileData = fs.readFileSync(path);
            switch (path) {
                case PATH_TO.TEMP:
                    res.temp = Math.round((parseInt(fileData.toString()) / 1000) * 10) / 10;
                    break;
                case PATH_TO.LOAD:
                    res.load = fileData.toString().split(" ").slice(0, 3).join(" ");
                    break;
                case PATH_TO.MEMORY:
                    fileData.toString().split("\n").map(item => {
                        if (item.indexOf("MemTotal:") != -1) {
                            res.memTotal = calcMem(item);
                        } else if (item.indexOf("MemFree:") != -1) {
                            res.memFree = calcMem(item);
                        };
                    });
                    break;
                default:
                    break;
            }
        }
    } catch (err) {
        if (err) {
            if (err.code == 'ENOENT') {
                console.error(err.message);
            } else {
                console.error(err);
            }
        }
    }
    return res;
}
