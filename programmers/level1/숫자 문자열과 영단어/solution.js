{
  const number_map = {
    "zero" : 0,
    "one" : 1,
    "two" : 2,
    "three" : 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven" : 7,
    "eight" : 8,
    "nine" : 9,
  }
  function solution(s) {
    let temp_string = ""
    return +s.split("").map(data => {
      if(!isNaN(data)){
        return data
      }
      temp_string += data
      if(number_map[temp_string] !== undefined){
        const transToNum = number_map[temp_string]
        temp_string = ""
        return transToNum
      }
    }).join("")
  }

  console.log(solution("one4seveneightzero")) //1478
  console.log(solution("23zerofourfour45six7"))  //234567
  // console.log(solution("2three45sixseven")) //234567
  // console.log(solution("123"))  //123


}