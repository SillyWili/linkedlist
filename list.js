class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node();
      this.head.value = value;
      return;
    }

    let tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    const last = new Node();
    tmp.nextNode = last;
    last.value = value;
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node();
      this.head.value = value;
      return;
    }

    const tmp = new Node();
    tmp.value = value;
    tmp.nextNode = this.head;
    this.head = tmp;
  }

  size() {
    if (this.head === null) return 0;

    let count = 0;
    let tmp = this.head;
    while (tmp !== null) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    if (this.head === null) return this.head;

    let tail = this.head;
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }
    return tail;
  }

  at(index) {
    let count = 0;
    if (this.head === null) return this.head;

    let tmp = this.head;
    while (tmp !== null) {
      if (index === count) return tmp;
      count++;
      tmp = tmp.nextNode;
    }
    return null;
  }

  pop() {
    if (this.head === null) return;

    if (this.head.nextNode === null) {
      this.head = null;
      return;
    }

    let last = this.head;
    let before = null;
    while (last.nextNode !== null) {
      before = last;
      last = last.nextNode;
    }
    before.nextNode = null;
  }

  contains(value) {
    if (this.head === null) return false;

    let tmp = this.head;
    while (tmp !== null) {
      if (value === tmp.value) return true;
      tmp = tmp.nextNode;
    }
    return false;
  }

  find(value) {
    if (this.head === null) return this.head;

    let tmp = this.head;
    let count = 0;
    while (tmp !== null) {
      if (value === count) return count;
      count++;
      tmp = tmp.nextNode;
    }
    return null;
  }

  toString() {
    if (this.head === null) return `null`;

    let string = "";
    let tmp = this.head;
    while (tmp !== null) {
      string += `(${tmp.value}) -> `;
      tmp = tmp.nextNode;
    }
    string += "null";
    return string;
  }

  insertAt(value, index) {
    if (this.head === null && index !== 0) return;
    if (index === 0) {
      let tmp = new Node();
      tmp.value = value;
      let next = this.head;
      tmp.nextNode = next;
      this.head = tmp;

      return;
    }

    let before = this.head;
    let next = before.nextNode;
    let count = 1;
    while (next !== null) {
      if (index === count) {
        const tmp = new Node();
        tmp.value = value;
        before.nextNode = tmp;
        tmp.nextNode = next;
        return;
      }
      before = next;
      next = next.nextNode;
      count++;
    }
  }

  removeAt(index) {
    if (this.head === null) return;
    if (index === 0) {
      let tmp = this.head.nextNode;
      this.head = tmp;
      return;
    }

    let before = this.head;
    let next = before.nextNode;
    let count = 1;
    while (next !== null) {
      if (index === count) {
        before.nextNode = next.nextNode;
        return;
      }
      before = next;
      next = next.nextNode;
      count++;
    }
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}
