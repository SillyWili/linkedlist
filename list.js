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
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}
