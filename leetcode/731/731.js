var MyCalendarTwo = function () {
  this.books = [];
  this.intersects = [];
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (startTime, endTime) {
  for (const [start, end] of this.intersects) {
    if (
      (startTime >= start && startTime < end) ||
      (startTime < start && endTime > start)
    ) {
      return false;
    }
  }

  for (const [start, end] of this.books) {
    if (
      (startTime >= start && startTime < end) ||
      (startTime < start && endTime > start)
    ) {
      let cs = Math.max(start, startTime);
      let ce = Math.min(end, endTime);
      this.intersects.push([cs, ce]);
    }
  }

  this.books.push([startTime, endTime]);
  return true;
};

const myCalendarTwo = new MyCalendarTwo();

let books = [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]];

for (const book of books) {
  console.log(myCalendarTwo.book(book[0], book[1]));
}

console.log(myCalendarTwo.books);
console.log(myCalendarTwo.intersects);
