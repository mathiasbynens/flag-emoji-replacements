const fs = require('fs');

const flags = require('@unicode/unicode-16.0.0/Sequence_Property/RGI_Emoji_Flag_Sequence/index.js');

const MAX_LINES_PER_FILE = 10_000;

function* getValidStrings() {
  for (const flag of flags) {
    for (const otherFlag of flags) {
      if (flag === otherFlag) continue;
      yield `${flag}${otherFlag}`;
    }
  }
}

const hash = (string) => {
  const codePoints = [...string];
  const prefix = codePoints[0];
  const middle = codePoints[1] + codePoints[2];
  const suffix = codePoints.slice(3).join('');
  return {
    id: `${prefix}_${suffix}`,
    prefix,
    suffix,
  };
};

const mid = (string) => {
  const codePoints = [...string];
  const middle = codePoints[1] + codePoints[2];
  return middle;
};

// hash(prefix, suffix) => middles
const map = new Map();
for (const string of getValidStrings()) {
  const middle = mid(string);
  const {id, prefix, suffix} = hash(string);
  if (map.has(id)) {
    map.get(id).middles.add(middle);
  } else {
    map.set(id, {
      prefix,
      suffix,
      middles: new Set([middle]),
    });
  }
}

const stringify = (string) => {
  // This is hacky but good enough, since no emoji contains `"`.
  return JSON.stringify(string).replaceAll('"', '\'');
};

const gen = ({ prefix, suffix, middleA, middleB }) => {
  const code = `${
    stringify(prefix + middleA + suffix)
  }.replace(${
    stringify(middleA)
  }, ${
    stringify(middleB)
  }); // → ${stringify(prefix + middleB + suffix)}`;
  return code;
};

let fileIndex = 1;
const writeBuffer = (buffer) => {
  const output = buffer.join('\n') + '\n';
  const id = String(fileIndex).padStart(4, '0');
  const fileName = `./output/part-${id}.js`;
  console.log(`Writing ${fileName}…`);
  fs.writeFileSync(fileName, output);
  fileIndex++;
};

const buffer = [];
let lineCount = 0;
for (const value of map.values()) {
  const {prefix, suffix, middles} = value;
  for (const middle of middles) {
    const middleSymbols = [...middle];
    for (const otherMiddle of middles) {
      if (otherMiddle === middle) continue;
      const otherMiddleSymbols = [...otherMiddle];
      // Ensure that the first flag changes because of the replacement.
      if (otherMiddleSymbols[0] === middleSymbols[0]) continue;
      // Ensure that the second flag changes because of the replacement.
      if (otherMiddleSymbols[1] === middleSymbols[1]) continue;
      buffer.push(
        gen({
          prefix: prefix,
          suffix: suffix,
          middleA: middle,
          middleB: otherMiddle,
        })
      );
      lineCount++;
      if (buffer.length === MAX_LINES_PER_FILE) {
        writeBuffer(buffer);
        buffer.length = 0;
      }
    }
  }
}

if (buffer.length > 0) {
  writeBuffer(buffer);
}

const nf = new Intl.NumberFormat();
console.log(`Total number of variations: ${nf.format(lineCount)}`);
