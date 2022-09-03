// helpers
const validateAmOrPm = value =>
  value === "am" || value === "pm"
    ? true
    : `Error!! Please enter either "am" or "pm" only`

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