/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const maxCitation = Math.max(...citations);
  for (let i = maxCitation; i > 0; i--) {
    let count = 0;
    for (const citation of citations) {
      if (citation >= i) {
        count++;
      }
    }

    if (count >= i) {
      return i;
    }
  }

  return 0;
};

// 1st optimized
var hIndex = function (citations) {
  const maxCitation = Math.min(Math.max(...citations), citations.length);
  for (let i = maxCitation; i > 0; i--) {
    let count = 0;
    for (const citation of citations) {
      if (citation >= i) {
        count++;
      }
    }

    if (count >= i) {
      return i;
    }
  }

  return 0;
};

// 2nd optimized
var hIndex = function (citations) {
  const maxCitation = Math.min(Math.max(...citations), citations.length);

  citations.sort((a, b) => b - a);

  for (let i = maxCitation; i > 0; i--) {
    let count = 0;
    for (const citation of citations) {
      if (citation >= i) {
        count++;
      }
    }

    if (count >= i) {
      return i;
    }
  }

  return 0;
};

// 2nd optimized
var hIndex = function (citations) {
  const paperCount = citations.length;
  const bucket = new Array(paperCount + 1).fill(0);

  for (let citation of citations) {
    bucket[Math.min(citation, paperCount)]++;
  }

  let culumativeIndex = 0;
  for (let hIndex = paperCount; hIndex >= 0; hIndex--) {
    culumativeIndex += bucket[hIndex];
    if (culumativeIndex >= hIndex) {
      return hIndex;
    }
  }
};

citations = [3, 0, 6, 1, 5];

citations = [1, 3, 1];

console.log(hIndex(citations));
