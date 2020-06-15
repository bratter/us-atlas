# US Atlas TopoJSON

This repository is a fork of [TopoJSON's US Atlas](https://github.com/topojson/us-atlas). As with the TopoJSON repository, it provides a convenient redistribution of the [Census Bureau’s](http://www.census.gov/) [cartographic boundary shapefiles](https://www.census.gov/geo/maps-data/data/tiger-cart-boundary.html) as TopoJSON. The current release uses the 2019 edition shapefiles. Both projected and unprojected geometries are included. The projection used by these files is:

```js
d3ts.usMapProjection();
```

The base projection uses [d3.**geoAlbersUsa**()](https://github.com/d3/d3-geo#geoAlbersUsa), but designed to fit a 1024×576 widescreen viewport, rather than d3's default 1024×576. Additionally, the projected and unprojected files includes objects for all states and insular areas, including Alaska and Hawaii, plus Puerto Rico, US Virgin Islands, American Samoa, Guam, and the Northern Mariana Islands &ndash; insular areas are not present in d3's version. Detailed documentation for the projection is available [here](https://github.com/bratter/us-map#projection).

Finally, this distribution ships with an additional topojson file with convenient outlines for each of the inset areas (only available as a projected file), plus some addiitonal state metadata for labelling. 

Details on all included files can be found in the [file reference](#file-reference) section below.

### Usage

These files were designed for use with d3ts [US Map tools](https://github.com/bratter/us-map#projection). For a browser example see:<br>
https://observablehq.com/@bratter/us-map.

It can also be used as a drop-in replacement for TopoJSON's US Atlas, so all the examples work as expected:

In a browser, using [d3-geo](https://github.com/d3/d3-geo) and SVG:<br>
https://observablehq.com/@d3/u-s-map

In a browser, using [d3-geo](https://github.com/d3/d3-geo) and Canvas:<br>
https://observablehq.com/@d3/u-s-map-canvas

In Node, using [d3-geo](https://github.com/d3/d3-geo) and [node-canvas](https://github.com/Automattic/node-canvas):<br>
https://bl.ocks.org/mbostock/885fffe88d72b2a25c090e0bbbef382f

## File Reference

<a href="#counties-10m.json" name="counties-10m.json">#</a> <b>counties-10m.json</b> · [Download](https://cdn.jsdelivr.net/npm/@d3ts/us-atlas@1/counties-10m.json "Source")

A [TopoJSON file](https://github.com/topojson/topojson-specification/blob/master/README.md#21-topology-objects) containing the geometry collections <i>counties</i>, <i>states</i>, and <i>nation</i>. The geometry is quantized and simplified, but not projected. This topology is derived from the Census Bureau’s [cartographic county boundaries, 2019 edition](https://www2.census.gov/geo/tiger/GENZ2019/shp/). The state boundaries are computed by [merging](https://github.com/topojson/topojson-client/blob/master/README.md#merge) counties, and the nation boundary is computed by merging states, ensuring a consistent topology.

<a href="#counties-albers-10m.json" name="counties-albers-10m.json">#</a> <b>counties-albers-10m.json</b> · [Download](https://cdn.jsdelivr.net/npm/@d3ts/us-atlas@1/counties-albers-10m.json "Source")

A [TopoJSON file](https://github.com/topojson/topojson-specification/blob/master/README.md#21-topology-objects) containing the geometry collections <i>counties</i>, <i>states</i>, and <i>nation</i>. The geometry is quantized, projected using [d3ts.usMapProjection](https://github.com/bratter/us-map/blob/master/README.md#projection) to fit a 1024×576 viewport, and simplified. This topology is derived from the Census Bureau’s [cartographic county boundaries, 2019 edition](https://www2.census.gov/geo/tiger/GENZ2019/shp/). The state boundaries are computed by [merging](https://github.com/topojson/topojson-client/blob/master/README.md#merge) counties, and the nation boundary is computed by merging states, ensuring a consistent topology.

<a href="#states-10m.json" name="states-10m.json">#</a> <b>states-10m.json</b> · [Download](https://cdn.jsdelivr.net/npm/@d3ts/us-atlas@1/states-10m.json "Source")

A [TopoJSON file](https://github.com/topojson/topojson-specification/blob/master/README.md#21-topology-objects) containing the geometry collections <i>states</i> and <i>nation</i>. The geometry is quantized and simplified, but not projected. This topology is derived from the Census Bureau’s [cartographic state boundaries, 2019 edition](https://www2.census.gov/geo/tiger/GENZ2019/shp/). The nation boundary is computed by [merging](https://github.com/topojson/topojson-client/blob/master/README.md#merge) states, ensuring a consistent topology.

<a href="#states-albers-10m.json" name="states-albers-10m.json">#</a> <b>states-albers-10m.json</b> · [Download](https://cdn.jsdelivr.net/npm/@d3ts/us-atlas@1/states-albers-10m.json "Source")

A [TopoJSON file](https://github.com/topojson/topojson-specification/blob/master/README.md#21-topology-objects) containing the geometry collections <i>states</i> and <i>nation</i>. The geometry is quantized, projected using [d3ts.usMapProjection](https://github.com/bratter/us-map/blob/master/README.md#projection) to fit a 1024×576 viewport, and simplified. This topology is derived from the Census Bureau’s [cartographic state boundaries, 2019 edition](https://www2.census.gov/geo/tiger/GENZ2019/shp/). The nation boundary is computed by [merging](https://github.com/topojson/topojson-client/blob/master/README.md#merge) states, ensuring a consistent topology.

<a href="#nation-10m.json" name="nation-10m.json">#</a> <b>nation-10m.json</b> · [Download](https://cdn.jsdelivr.net/npm/@d3ts/us-atlas@1/nation-10m.json "Source")

A [TopoJSON file](https://github.com/topojson/topojson-specification/blob/master/README.md#21-topology-objects) containing the geometry collection <i>nation</i>. The geometry is quantized and simplified, but not projected. This topology is derived from the Census Bureau’s [cartographic nation boundary, 2019 edition](https://www2.census.gov/geo/tiger/GENZ2019/shp/).

<a href="#nation-albers-10m.json" name="nation-albers-10m.json">#</a> <b>nation-albers-10m.json</b> · [Download](https://cdn.jsdelivr.net/npm/@d3ts/us-atlas@1/nation-albers-10m.json "Source")

A [TopoJSON file](https://github.com/topojson/topojson-specification/blob/master/README.md#21-topology-objects) containing the geometry collection <i>nation</i>. The geometry is quantized, projected using [d3ts.usMapProjection](https://github.com/bratter/us-map/blob/master/README.md#projection) to fit a 1024×576 viewport, and simplified. This topology is derived from the Census Bureau’s [cartographic nation boundary, 2019 edition](https://www2.census.gov/geo/tiger/GENZ2019/shp/).

<a href="#outlines-albers-10m.json" name="outlines-albers-10m.json">#</a> <b>outlines-albers-10m.json</b> · [Download](https://cdn.jsdelivr.net/npm/@d3ts/us-atlas@1/outlines-albers-10m.json "Source")

[TopoJSON file](https://github.com/topojson/topojson-specification/blob/master/README.md#21-topology-objects) containing the geometry collection <i>outlines</i>. The geometry is quantized and projected using [d3ts.usMapProjection](https://github.com/bratter/us-map/blob/master/README.md#projection) to fit a 1024×576 viewport. This collection provide convenient outlines for each of the five insets for AK, HI and the insular areas. There are five outline geometries with the following string ids:

* `"02"` - Alaska
* `"15"` - Hawaii
* `"60"` - American Samoa
* `"66,69"` - Guam and the Northern Mariana Islands
* `"72,78"` - Puerto Rico and the US Virgin Islands

Note that the last two insets cover two entities each PR/VI and GU/MP respectively. Geometries can be filtered using the id, or the four attached properties:

* *outline*.properties.name - the name, shown above
* *outline*.properties.fips - array of two-digit FIPS codes as strings, similar to the ids above, but split into an array
* *outline*.properties.codes - array of two-digit state lstter codes, such as `["AK"]`
* *outline*.properties.type - the type of entity covered by the outline, can be `"state"`, or `"insular area"`

The suggested use for this file is to filter for the desired insets and mesh using [TopoJSON's mesh](https://github.com/topojson/topojson-client/blob/master/README.md#mesh):

```js
const mesh = topojson.mesh(outlines, outlines.objects.outlines);
const path = d3.geoPath()(mesh);
```

<a href="#state-metadata.json" name="state-metadata.json">#</a> <b>state-metadata.json</b> · [Download](https://cdn.jsdelivr.net/npm/@d3ts/us-atlas@1/state-metadata.json "Source")

A JSON file containing some simple metadata for US States and Insular Areas. One entry is provided for each of the 50 States, Washington DC, 6 Insular Areas, and 3 Freely Associated States. Note that the projections above do not include the Freely Associated States or the US Minor Outlying Islands, but they are included here. Keys provided are:

* *entity*.id - the two-digit FIPS code for the entity, such as `"06"`
* *entity*.name - the official name for the entity, such as `"California"`
* *entity*.code - the two alphabetical code for the entity, such as `"CA"`
* *entity*.abbrev - the AP abbreviation for the entity, such as `"Calif."`
* *entity*.type - the legal status of the entity, such as `"state"`

This data is used to generate properties in the TopoJSON files, but provided separately for convenience.

<a href="#counties" name="counties">#</a> *us*.objects.<b>counties</b>

<img src="https://raw.githubusercontent.com/bratter/us-atlas/master/img/counties.png" width="512" height="288">

Each county has three fields:

* *county*.id - the five-digit [FIPS county code](https://en.wikipedia.org/wiki/FIPS_county_code), such as `"06069"`
* *county*.properties.name - the county name, such as `"San Benito"`
* *county*.properties.state - the two-letter state code, such as `"CA"`

The first two digits of the county FIPS code is the state FIPS code.

<a href="#states" name="states">#</a> *us*.objects.<b>states</b>

<img src="https://raw.githubusercontent.com/bratter/us-atlas/master/img/states.png" width="512" height="288">

Each state has five fields:

* *state*.id - the two-digit [FIPS state code](https://en.wikipedia.org/wiki/Federal_Information_Processing_Standard_state_code), such as `"06"`
* *state*.properties.name - the state name, such as `"California"`
* *state*.properties.code - the state's two-letter identifier, such as `"CA"`
* *state*.properties.abbrev - the state's AP abbreviation, such as `"Calif."`
* *state*.properties.type - the legal type of the entity, such as `"state"`, DC is noted as `"federal district"`, and `"insular areas"` are also provided

<a href="#nation" name="nation">#</a> *us*.objects.<b>nation</b>

<img src="https://raw.githubusercontent.com/bratter/us-atlas/master/img/nation.png" width="512" height="288">

The nation has two fields:

* *nation*.id - the string `"US"`
* *nation*.properties.name - the string `"United States"`
