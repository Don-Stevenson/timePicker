const prompts = require("prompts")

// helpers
const validateAmOrPm = value => {
  if (value === "am" || value === "pm") {
    return true
  } else if (value === "") {
  } else return `Error!! Please enter either "am" or "pm" only`
}

const hour = (Math.random() * 12).toFixed(0)

const minGen = () => {
  const mins = Math.round((Math.random() * 60) / 15) * 15
  return mins === 60 || mins === 0 ? "00" : mins
}

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

  const onCancel = () => {
    console.log("Goodbye!")
    return true
  }
  const response = await prompts(questions, { onCancel })

  const output = `  
    * Thank you for using TimePickr *
    *********************************
    Here is your generated time

    ${hour}:${minGen()}${response.amOrPm}
    `

  console.log(output)
})()
