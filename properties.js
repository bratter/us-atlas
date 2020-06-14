const meta = require('./state-metadata.json');
const metaMap = new Map(meta.map(d => {
  // Pull out id as there is no need to duplicate in the properties
  const { id, ...rest } = d;
  return [id, rest];
}));

function parseInput() {
  return new Promise((resolve, reject) => {
    const chunks = [];
    process.stdin
        .on('data', chunk => chunks.push(chunk))
        .on('end', () => {
          try { resolve(JSON.parse(chunks.join(''))); }
          catch (error) { reject(error); }
        })
        .setEncoding('utf8');
  });
}

module.exports = { metaMap, parseInput };
