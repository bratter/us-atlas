const fs = require('fs').promises;
const base = require('./base-metadata.json');
const additional = require('./additional-jurisdictions.json');
const abbrev = new Map(require('./revised-abbreviations.json'));
const fips = new Map(require('./fips-map.json'));
const filename = 'state-metadata.json';

const reformat = state => ({
  name: state.State,
  code: state.Code,
  abbrev: abbrev.get(state.Code) || state.Abbrev,
  type: state.Code === 'DC' ? 'federal district' : 'state',
});
const addFips = state => ({ id: fips.get(state.code), ...state });

fs
  .writeFile(
    filename,
    JSON.stringify(base.map(reformat).concat(additional).map(addFips)),
  )
  .then(() => console.log(`Created ${filename}.`))
  .catch(err => console.error(`Failed to create ${filname}.\n ${err.message}`));
