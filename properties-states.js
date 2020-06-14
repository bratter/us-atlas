const { metaMap, parseInput } = require('./properties');

parseInput().then(output);

function output(topology) {
  for (const state of topology.objects.states.geometries) {
    state.properties = metaMap.get(state.id);
  }
  process.stdout.write(JSON.stringify(topology));
  process.stdout.write('\n');
}
