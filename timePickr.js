// requires
const prompts = require("prompts")

// import helpers
const { hour, questions, onCancel} = require("./helpers/helpers.js");
const {minGen} = require('./helpers/minGen')
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
  The program has been aborted. Goodbye! 
  `)
})()
