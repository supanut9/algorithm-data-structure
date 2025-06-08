class RandomizedSet1 {
  set: Set<number>;

  constructor() {
    this.set = new Set<number>();
  }

  insert(val: number): boolean {
    if (this.set.has(val)) {
      return false;
    }
    this.set.add(val);
    return true;
  }

  remove(val: number): boolean {
    return this.set.delete(val);
  }

  getRandom(): number {
    const rand = Math.floor(Math.random() * this.set.size);
    return Array.from(this.set)[rand];
  }
}

// AI using Map
class RandomizedSet {
  private list: number[] = [];
  private map = new Map<number, number>(); // value → index

  insert(val: number): boolean {
    if (this.map.has(val)) return false;
    this.list.push(val);
    this.map.set(val, this.list.length - 1);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;

    const idx = this.map.get(val)!;
    const lastVal = this.list[this.list.length - 1];

    // Swap with last and pop
    this.list[idx] = lastVal;
    this.map.set(lastVal, idx);
    this.list.pop();

    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    const randIdx = Math.floor(Math.random() * this.list.length);
    return this.list[randIdx];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet();
var param_1 = obj.insert(3);
var param_2 = obj.insert(3);
obj.insert(1);
obj.insert(9);
obj.insert(83);
obj.insert(94);
obj.insert(5);

console.log(obj);
console.log(param_1, param_2);
console.log(obj.getRandom());
