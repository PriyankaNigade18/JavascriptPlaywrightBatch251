
import fs from "fs"
import Papa from "papaparse"

export function readCSV(filepath)
{
    const fileData=fs.readFileSync(filepath,"utf-8");
    const result=Papa.parse(fileData,{header:true})
    return result.data

}