class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node();
      this.head.value = value;
      this.head.nextNode = null;
      return;
    }

    tmp = this.head;

    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    const last = new Node();
    tmp.nextNode = last;
    last.value = value;
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}
