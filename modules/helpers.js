// helpers
const validateAmOrPm = value =>
  value === "am" || value === "pm"
    ? true
    : `Error!! Please enter either "am" or "pm" only`

const hour = (Math.random() * 12).toFixed(0)

const minGen = () => {
  const mins = Math.round((Math.random() * 60) / 15) * 15
  return mins === 60 || mins === 0 ? "00" : mins
}

const onCancel = () => true

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

exports.hour = hour
exports.minGen = minGen
exports.onCancel = onCancel
exports.validateAmOrPm = validateAmOrPm
exports.questions = questions