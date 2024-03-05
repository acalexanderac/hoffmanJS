const { HuffmanCoding } = require("./huffman");

test("HuffmanCoding", () => {
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
  console.log("Encoded:", encoded); // This will print the encoded string
  let decoded = huffman.decode(encoded);
  console.log("Decoded:", decoded); // This will print the decoded string
  expect(decoded).toBe("abcdef");
});
