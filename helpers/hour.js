const hour = () => {
  const generatedHour = (Math.random() * 12).toFixed(0)
  return generatedHour > 12 || generatedHour < 1 ? hour() : generatedHour
}

exports.hour = hour
