import * as fs from "fs";

export const tempCPU = fs.readFile("path", (err, data) => {
    console.log(data);
})