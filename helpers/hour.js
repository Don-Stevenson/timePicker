const hour = () => {
  const generatedHour = (Math.random() * 12).toFixed(0)
  if (generatedHour > 10 || generatedHour < 1) return hour()
  else return generatedHour
}

exports.hour = hour
