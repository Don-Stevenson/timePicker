// requires
const prompts = require("prompts");

// import helpers
const { minGen } = require("./helpers/minGen");
const { hour } = require("./helpers/hour");
const { questions } = require("./helpers/questions");
const { onCancel } = require("./helpers/onCancel");

// run program
(async () => {
  const response = await prompts(questions, { onCancel });

  const output = `  
  * Thank you for using TimePickr *
  *********************************
  Here is your generated time

  ${hour()}:${minGen()}${response.amOrPm}
  `;

  if (response.amOrPm) console.log(output);
  else
    console.log(`
  Timepickr has been aborted. Goodbye! 
  `);
})();
