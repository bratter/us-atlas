const shapefile = require('shapefile');
const { metaMap, parseInput } = require('./properties');

Promise.all([
  parseInput(),
  shapefile.read('build/cb_2019_us_county_5m.shp'),
]).then(output);

function output([topology, counties]) {
  counties = new Map(counties.features.map(d => [d.properties.GEOID, d.properties]));
  for (const county of topology.objects.counties.geometries) {
    county.properties = {
      name: counties.get(county.id).NAME,
      state: metaMap.get(county.id.slice(0, 2)).code,
    };
  }
  for (const state of topology.objects.states.geometries) {
    state.properties = metaMap.get(state.id);
  }
  process.stdout.write(JSON.stringify(topology));
  process.stdout.write('\n');
}
