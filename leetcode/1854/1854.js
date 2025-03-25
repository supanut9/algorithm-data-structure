/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  const time = [];
  for (let i = 0; i < logs.length; i++) {
    const [birth, death] = logs[i];
    time.push([birth, 1], [death, 0]);
  }

  let currentPopulation = 0;
  const ans = [[0, 0]];

  time.sort();

  for ([year, isBirth] of time) {
    if (isBirth) {
      currentPopulation++;
    } else {
      currentPopulation--;
    }

    if (currentPopulation > ans[ans.length - 1][1]) {
      ans.push([year, currentPopulation]);
    }
  }

  return ans[ans.length - 1][0];
};

logs = [
  [1950, 1961],
  [1960, 1971],
  [1970, 1981],
];

logs = [
  [2008, 2026],
  [2004, 2008],
  [2034, 2035],
  [1999, 2050],
  [2049, 2050],
  [2011, 2035],
  [1966, 2033],
  [2044, 2049],
];

maximumPopulation(logs);
