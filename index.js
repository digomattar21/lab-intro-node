class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
    
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length){
      return Math.max(...this.items)
    } else throw new Error('EmptySortedList');
  }

  min() {
    if (this.items.length){
      return Math.min(...this.items)
    } else throw new Error('EmptySortedList');
  }
  

  sum() {
    if (this.items.length){
      return this.items.reduce((acc,curr)=> acc+curr)
    } else {
      return 0
    }
  }

  avg() {
    if (this.items.length){
      let avg =this.items.reduce((acc,curr)=> (acc+curr))
      return avg/this.length

    } else throw new Error('EmptySortedList')
  }

}

module.exports = SortedList;
