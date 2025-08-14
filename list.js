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
    if (this.head === null) {
      return 0;
    }
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
    if (this.head === null) {
      return this.head;
    }
    let tail = this.head;
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }
    return tail;
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}
