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

export { validateAmOrPm, hour, minGen, onCancel }
