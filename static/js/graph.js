queue()
    .defer(d3.csv, "data/shark-attack-data.csv")
    .await(makeGraphs);

function makeGraphs(error, sharkData) {
    var ndx = crossfilter(sharkData);

    show_type_selector(ndx);
    show_fifty_years(ndx);
    show_country_selector(ndx);
    show_country(ndx)
    show_activity_selector(ndx);
    show_activity(ndx);

    dc.renderAll();

}

function show_type_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Type'));
    var group = dim.group();

    dc.selectMenu("#type-selector")
        .dimension(dim)
        .group(group);
}

function show_country_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();

    dc.selectMenu("#country-selector")
        .dimension(dim)
        .group(group);
}

function show_activity_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Activity'));
    var group = dim.group();

    dc.selectMenu("#activity-selector")
        .dimension(dim)
        .group(group);
}


function show_fifty_years(ndx) {
    var dim = ndx.dimension(dc.pluck('Year'));
    var group = dim.group();

    dc.barChart("#fifty-years")
        .width(1200)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Year")
        .yAxisLabel("Attacks")
        .yAxis().ticks(20);
}

function show_country(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();

    dc.barChart("#country")
        .width(1400)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 90, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Country")
        .yAxisLabel("Attacks")
        .yAxis().ticks(20);
}

function show_activity(ndx) {
    var dim = ndx.dimension(dc.pluck('Activity'));
    var group = dim.group();

    dc.barChart("#activity")
        .width(1700)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 90, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Activity")
        .yAxisLabel("Attacks")
        .yAxis().ticks(20);
}



