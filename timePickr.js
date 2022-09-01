const prompts = require("prompts")
import { validateAmOrPm, hour, minGen, onCancel } from "./helpers"

// questions
const questions = [
  {
    type: "text",
    name: "amOrPm",
    initial: `enter "am" or "pm"`,
    message: `
  * Welcome to TimePickr! *
  *************************
A program to help you pick a time

Choose morning (am) or evening (pm)?
or hit "escape" to quit
`,
    validate: amOrPm => validateAmOrPm(amOrPm),
  },
]

// run program
;(async () => {
  const response = await prompts(questions, { onCancel })

  const output = `  
  * Thank you for using TimePickr *
  *********************************
  Here is your generated time

  ${hour}:${minGen()}${response.amOrPm}
  `

  if (response.amOrPm) console.log(output)
  else
    console.log(`
  'The program has been aborted. Goodbye! 
  `)
})()
