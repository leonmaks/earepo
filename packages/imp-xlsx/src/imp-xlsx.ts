import { program } from "commander"
import {
  ParsingOptions,
  Range,
  utils,
  WorkBook,
  WorkSheet,
  readFile as xlsxReadFile,
} from "xlsx"

import { version } from "../package.json"

const commaSeparatedList = (
  value: string,
  description?: string | undefined,
  defaultValue?: string | boolean | string[] | undefined
) => value.split(",")

program
  .name("imp-xlsx")
  .description("CLI to import data from .xls")
  .version(version)

// program.option(
//   "-f, --files <files>",
//   "comma separated list of .xls files",
//   commaSeparatedList
// )

export interface impSysListParams {
  xlsxFiles: string[]
  options: {
    wsNames?: string[]
    sheetRows?: number
  }
}

export const impSysList = async ({
  xlsxFiles,
  options: { wsNames, sheetRows },
}: impSysListParams) => {
  console.log("impSysList", { xlsxFiles, wsNames, sheetRows })

  // for (const fname of xlsxFiles) {
  // }
}

console.log("i'm running...")

program.parse()
