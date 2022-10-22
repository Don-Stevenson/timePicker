// requires
const prompts = require("prompts")

// import helpers
const { minGen } = require("./helpers/minGen")
const { hour } = require("./helpers/hour")
const { questions } = require("./helpers/questions")
const { onCancel } = require("./helpers/onCancel")

// run program
;(async () => {
 const { amOrPm } = await prompts(questions, { onCancel })

 const header = `  
  * Thank you for using TimePickr *
  *********************************
  Here is your generated time

  `
 if (!amOrPm)
  console.log(`
  Timepickr has been aborted. Goodbye!
  `)
 else console.log(header, `${hour()}:${minGen()}${amOrPm}`)
})()
