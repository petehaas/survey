module.exports.function = function getResponse (name, q1, q2) {
  return {
    name: name,
    q1: q1,
    q2: q2 ? q2 : false,
    // dynamic image from questions
    image: 'images/chart.png' // dummy chart example  
  }
}
