const minGen = () => {
 const mins = Math.round((Math.random() * 60) / 15) * 15
 return mins === 60 || mins === 0 ? "00" : mins
}

exports.minGen = minGen
