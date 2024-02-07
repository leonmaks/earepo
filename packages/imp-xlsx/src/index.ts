import { Command } from "commander"

import { version } from "../package.json"

// Declare the program

const program = new Command()

// Add actions onto that CLI

program
  .name("imp-xlsx")
  .description("CLI to import data from .xls files")
  .version(version)

  // .argument("<string>", "string to log")
  // .option("-c, --capitalize", "Capitalize the message")
  // .action(
  //   (
  //     message: string,
  //     opts: {
  //       capitalize?: boolean
  //     }
  //   ) => {
  //     if (opts.capitalize) {
  //       console.log(message.toUpperCase())
  //     } else {
  //       console.log(message)
  //     }
  //   }
  // )

  .argument("<files...>")
  .action((files: string[]) => {
    files.forEach((file) => {
      console.log("import %s", file)
    })
  })

// Execute the CLI with the given arguments

program.parse(process.argv)
