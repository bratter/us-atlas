const topojson = require('topojson-client');
const projection = require('@d3ts/us-map').usMapProjection(['02', '15', '72', '78', '66', '69', '60']);

const k = projection.scale();
const [tx, ty] = projection.translate();
const transform = pt => [pt[0] * k + tx, pt[1] * k + ty];
const insetMap = new Map(projection.insets().map(d => [d.id, d]));

// Generate point components that will be composed into arcs
const [gutl, gubr] = insetMap.get('66,69').extent;
const [aktl, akbr] = insetMap.get('02').extent;
const [hitl, hibr] = insetMap.get('15').extent;
const [prtl, prbr] = insetMap.get('72,78').extent;
const gutr = [gubr[0], gutl[1]];
const gubl = [gutl[0], gubr[1]];
const asbr = [gubr[0], aktl[1]];
const aktr = [akbr[0], aktl[1]];
const hitr = [hibr[0], hitl[1]];
const prbl = [prtl[0], prbr[1]];
const prtr = [prbr[0], prtl[1]];

// Assemble the arcs, all wound clockwise, then transform with the projection scale and translate
const arcs = [
  // 0: Top and right side of GU-MP
  [gutl, gutr, gubr],
  // 1: Divider between AS and GU-MP
  [gubl, gubr],
  // 2: Right side of AS
  [gubr, asbr],
  // 3: Divider between AS and AK
  [aktl, asbr],
  // 4: Top-right of AK
  [asbr, aktr, hitl],
  // 5: Divider between HI and AK
  [akbr, hitl],
  // 6: Top and right of HI
  [hitl, hitr, hibr],
  // 7: All of PR-VI
  [prbl, prtl, prtr, prbr],
].map(d => d.map(transform));

// Map the arc segments for the geometries array
const arcsMap = new Map([
  ['66,69', [0, ~1]],
  ['60', [1, 2, ~3]],
  ['02', [3, 4, ~5]],
  ['15', [5, 6]],
  ['72,78', [7]],
]);

// Build the topology, then quantize
const topology = {
  type: 'Topology',
  objects: {
    outlines: {
      type: 'GeometryCollection',
      geometries: [...insetMap.values()].map(d => ({
        type: 'LineString',
        id: d.id,
        properties: { name: d.name, fips: d.fips, codes: d.codes, type: d.type },
        arcs: arcsMap.get(d.id),
      })),
    },
  },
  arcs,
}
const quantized = topojson.quantize(topology, 1e5);

process.stdout.write(JSON.stringify(quantized));
process.stdout.write('\n');
