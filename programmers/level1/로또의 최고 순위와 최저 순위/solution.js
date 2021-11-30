{
  const pedigree = {
    0 : 6,
    1 : 6,
    2 : 5,
    3 : 4,
    4 : 3,
    5 : 2,
    6 : 1
  }
  function solution(lottos, win_nums) {
    lottos.forEach(element => {
      const idx = win_nums.indexOf(element)
      if(idx !== -1) win_nums.splice(idx, 1)
    })
    const equal = 6 - win_nums.length
    const zeros = lottos.filter(element => element === 0).length
    return [pedigree[equal + zeros] , pedigree[equal]]
  }

  console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]))
  console.log(solution([0, 0, 0, 0, 0, 0],	[38, 19, 20, 40, 15, 25]))
  console.log(solution([1,2,3,4,5,6], [7,8,9,10,11,12]))

}