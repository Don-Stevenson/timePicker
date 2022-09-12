const validateAmOrPm = value =>
  value === "am" || value === "pm"
    ? true
    : `Error!! Please enter either "am" or "pm" only`

exports.validateAmOrPm = validateAmOrPm
