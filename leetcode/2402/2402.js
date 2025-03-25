/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
  meetings.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  const rf = Array(n).fill(0);
  const rt = Array(n).fill(0);

  for ([start, end] of meetings) {
    let index = rt.findIndex((endTime) => {
      return endTime <= start;
    });

    if (index < 0) {
      index = rt.indexOf(Math.min(...rt));
    }

    if (start >= rt[index]) {
      rt[index] = end;
    } else {
      rt[index] += end - start;
    }

    rf[index]++;
  }

  return rf.indexOf(Math.max(...rf));
};

(n = 2),
  (meetings = [
    [0, 10],
    [1, 5],
    [2, 7],
    [3, 4],
  ]);

(n = 3),
  (meetings = [
    [1, 20],
    [2, 10],
    [3, 5],
    [4, 9],
    [6, 8],
  ]);

(n = 4),
  (meetings = [
    [18, 19],
    [3, 12],
    [17, 19],
    [2, 13],
    [7, 10],
  ]);

(n = 2),
  (meetings = [
    [0, 10],
    [1, 2],
    [12, 14],
    [13, 15],
  ]);

(n = 3),
  (meetings = [
    [1, 20],
    [2, 10],
    [3, 5],
    [4, 9],
    [6, 8],
  ]);

(n = 3),
  (meetings = [
    [1, 27],
    [29, 49],
    [47, 49],
    [41, 43],
    [15, 36],
    [11, 15],
  ]);

console.log(mostBooked(n, meetings));
