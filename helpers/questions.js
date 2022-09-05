// helpers
const { validateAmOrPm } = require("./validateAmOrPm")

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

exports.questions = questions