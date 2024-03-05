class HuffmanNode {
  constructor(char, frequency, left = null, right = null) {
    this.char = char;
    this.frequency = frequency;
    this.left = left;
    this.right = right;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(node) {
    if (this.isEmpty()) {
      this.queue.push(node);
    } else {
      let added = false;
      for (let i = 0; i < this.queue.length; i++) {
        if (node.frequency < this.queue[i].frequency) {
          this.queue.splice(i, 0, node);
          added = true;
          break;
        }
      }
      if (!added) {
        this.queue.push(node);
      }
    }
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

class HuffmanCoding {
  constructor() {
    this.root = null;
    this.codes = {};
  }

  buildTree(frequencies) {
    let priorityQueue = new PriorityQueue();
    for (let char in frequencies) {
      let node = new HuffmanNode(char, frequencies[char]);
      priorityQueue.enqueue(node);
    }

    while (priorityQueue.queue.length > 1) {
      let node1 = priorityQueue.dequeue();
      let node2 = priorityQueue.dequeue();
      let merged = new HuffmanNode(
        null,
        node1.frequency + node2.frequency,
        node1,
        node2
      );
      priorityQueue.enqueue(merged);
    }

    this.root = priorityQueue.dequeue();
    this.buildCodes(this.root, "");
  }

  buildCodes(node, code) {
    if (node === null) return;
    if (node.char !== null) {
      this.codes[node.char] = code;
    }
    this.buildCodes(node.left, code + "0");
    this.buildCodes(node.right, code + "1");
  }

  encode(message) {
    let encoded = "";
    for (let char of message) {
      encoded += this.codes[char];
    }
    return encoded;
  }

  decode(encoded) {
    let decoded = "";
    let node = this.root;
    for (let bit of encoded) {
      if (bit === "0") {
        node = node.left;
      } else {
        node = node.right;
      }
      if (node.char !== null) {
        decoded += node.char;
        node = this.root;
      }
    }
    return decoded;
  }
}
module.exports = { HuffmanCoding };
