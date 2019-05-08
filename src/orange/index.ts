import * as fs from "fs";
import { PATH_TO } from "../../constants";

export type SysInfo = number | string;

export function getSysInfo(path: string): SysInfo {
    let res: SysInfo;
    try {
        const fileData = fs.readFileSync(path);
        switch (path) {
            case PATH_TO.TEMP:
                res = Math.round((parseInt(fileData.toString()) / 1000) * 10) / 10;
                break;
            case PATH_TO.LOAD:
                res = fileData.toString().split(" ").slice(0, 3).join(" ");
                break;
            case PATH_TO.MEMORY:
                // TODO res = 
                break;
            default:
                break;
        }
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
