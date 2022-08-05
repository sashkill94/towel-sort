
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (arguments.length == 0 || matrix.length == 0){
    return result;
  }
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 == 0){
      result = [...result, ...matrix[i]];
    } else {
      let arr = matrix[i].sort((a, b) => b - a);
      result = [...result, ...arr];
    }
  }
  console.log(result);
 
  return result;
}
