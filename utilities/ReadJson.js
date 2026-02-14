
import fs from "fs"

export function readJson(filepath)
{
   const fileData=fs.readFileSync(filepath,"utf-8");
   const data=JSON.parse(fileData);
   return data;
}