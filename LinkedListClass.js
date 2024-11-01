class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }
  size() {
    return `Length: ${this.length}`;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let i = 0;
    if (index > this.length - 1) {
      throw new Error("List is smaller than that!");
    }
    if (index === 0) {
      return this.head;
    }
    if (index === this.length - 1) {
      return this.tail;
    }

    if (index < 0) {
      throw new Error("Please provide a positive number");
    }
    let curr = this.head;
    let prev = null;
    while (i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    return curr;
  }
  pop() {
    const prev = this.at(this.length - 2);
    prev.next = null;
  }

  contains(value) {
    if (this.head === null) {
      throw new Error("List is empty!");
    }
    let curr = this.head;
    let prev = null;
    while (curr != null && value != curr.value) {
      prev = curr;
      curr = curr.next;
    }
    if (curr === null) {
      return false;
    }
    return true;
  }
  find(value) {
    if (this.head === null) {
      throw new Error("List is empty!");
    }
    let i = 0;
    let curr = this.head;
    let prev = null;
    while (curr != null && value != curr.value) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    if (curr === null) {
      return null;
    }
    return i;
  }

  insertAt(value, index) {
    if (index < 0) {
      throw new Error("Please provide a positive number");
    }

    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.length - 1) {
      return this.append(value);
    }
    const node = new Node(value);
    const oldNode = this.at(index);
    const prevNode = this.at(index - 1);
    prevNode.next = node;
    node.next = oldNode;
  }
  removeAt(index) {
    if (index < 0) {
      throw new Error("Please provide a positive number");
    }

    if (index >= this.length) {
      throw new Error("index is bigger than the list's length");
    }

    if (index === this.length - 1) {
      return this.pop();
    }
    const nextNode = this.at(index + 1);
    const prevNode = this.at(index - 1);
    prevNode.next = nextNode;
  }

  toString(curr = this.head, string = `( ${curr.value} ) -> `) {
    if (curr.next === null) {
      return `( ${curr.value} ) -> null`;
    }
    return string + this.toString(curr.next, `( ${curr.next.value} ) -> `);
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = {LinkedList};