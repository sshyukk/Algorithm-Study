function solution(n) {
  let answer = 0;
  for (let i = 1; i < n + 1; i++) {
    answer += i;
  }
  return parseInt(answer);
}

console.log(solution(10));
