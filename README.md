# 📚 Huffman Coding
This project implements Huffman Coding, a popular algorithm used for lossless data compression.

## 📁 Files
The project consists of two main files:

📄 huffman.js: This file contains the implementation of Huffman Coding. It exports a HuffmanCoding class that can be used to encode and decode messages.

📄 test.js: This file contains a test for the HuffmanCoding class. It creates a new instance of HuffmanCoding, builds a Huffman tree from a given frequency table, and then encodes and decodes a message.

### 🏷️ HuffmanCoding Class
The HuffmanCoding class has the following methods:

buildTree(frequencies): Builds a Huffman tree from a given frequency table. The frequency table should be an object where the keys are characters and the values are their frequencies.

encode(message): Encodes a message using the Huffman tree. The message should be a string.

decode(encoded): Decodes an encoded message using the Huffman tree. The encoded message should be a string of 0s and 1s.

##  🚀 Usage
First, import the HuffmanCoding class from huffman.js:
const { HuffmanCoding } = require("./huffman");

Then, create a new instance of HuffmanCoding, build a Huffman tree, and encode and decode a message:
```
let huffman = new HuffmanCoding();

let frequencies = {
  a: 5,
  b: 9,
  c: 12,
  d: 13,
  e: 16,
  f: 45,
};

huffman.buildTree(frequencies);

let encoded = huffman.encode("abcdef");

console.log("Encoded:", encoded);

let decoded = huffman.decode(encoded);

console.log("Decoded:", decoded);
```


# 🧪 Testing
This project uses Jest, a JavaScript testing framework, for running tests.

To run the tests, you will first need to install the project dependencies. You can do this by running the following command in your terminal:
```

npm install

```
This command installs all the necessary dependencies for the project, as listed in the package.json file. In this case, it will install Jest.

Once the dependencies are installed, you can run the tests using the following command:
```

npm test
```

This command runs the test script defined in the package.json file, which in turn runs Jest. Jest will automatically find and run all test files in the project. By convention, these are files that end with .test.js or .spec.js, or files located in a directory named __tests__.

Remember to replace any placeholder tests with your own tests that match the functionality of your project. Happy testing! 🎉
