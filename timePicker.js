const prompts = require("prompts");

// helpers
// **********
const validateNum = (value) => {
  if (value > 12 || value < 1 || isNaN(parseFloat(value))) {
    return "Error!! Please enter a whole number between 0 and 12";
  } else return true;
};

const validateAmOrPm = (value) => {
  if (value === "am" || value === "pm") {
    return true;
  } else return `Error!! Please enter either "am" or "pm" only`;
};


const questions = [
  {
    type: "number",
    name: "hourRange",
    initial: `number between 1 and 12`,
    message: `
* Welcome to TimePickr! *
**************************
A program to help you pick a time`,
    validate: (hourRange) => validateNum(hourRange),
  },
  {
    type: "text",
    name: "amOrPm",
    initial: `enter "am" or "pm"`,
    message: `Choose morning (am) or evening (pm)?`,
    validate: (amOrPm) => validateAmOrPm(amOrPm),
  },
];

(async () => {
  const response = await prompts(questions);
  const hour = (Math.random() * 12).toFixed(0) 
  const min = Math.round((Math.random() * 60  / 15) * 15)

  // ((((Math.random() + 7.5)/15 | 0) * 15) % 60)
  const output = `  
    * Thank you for TimePickr *
    ***************************
    Here is your chosen time
    ${hour}:${min} ${response.amOrPm}
    `;
  console.log(output);
})();
