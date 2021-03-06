// /*global varname*/ added to remove undefined variable errors 
/*global queue*/
/*global crossfilter*/
/*global dc*/
/*global d3*/
queue()
    .defer(d3.csv, "data/shark-attack-data.csv")
    .await(makeGraphs);
    /*Load data in to crossfilter*/
function makeGraphs(error, sharkData) {
    var ndx = crossfilter(sharkData);

    show_data_table(ndx);

    show_country_selector(ndx);

    show_year_selector(ndx);

    show_activity_selector(ndx);
    show_activity(ndx);
    show_fatalpi(ndx);
    show_countrypi(ndx);
    show_agepi(ndx);

    show_fatal_selector(ndx);
    show_type_selector(ndx);

    show__type_fatality_distribution(ndx);

    show_country_year(ndx);

    dc.renderAll();

}
/*Country dropdown selector displays all available countries*/
function show_country_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Country'));
    var group = dim.group();

    dc.selectMenu("#country-selector")
        .dimension(dim)
        .group(group);
}

/*Year dropdown selector displays all available years*/
function show_year_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Year'));
    var group = dim.group();

    dc.selectMenu("#year-selector")
        .dimension(dim)
        .group(group);
}

/*Activity dropdown selector displays all available activities*/
function show_activity_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Activity'));
    var group = dim.group();

    dc.selectMenu("#activity-selector")
        .dimension(dim)
        .group(group);
}

/*Fatal dropdown selector displays whether attack fatal (Y/N/Unknown)*/
function show_fatal_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Fatal'));
    var group = dim.group();

    dc.selectMenu("#fatal-selector")
        .dimension(dim)
        .group(group);
}

/*Type dropdown selector displays all types of incident*/
function show_type_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Type'));
    var group = dim.group();

    dc.selectMenu("#type-selector")
        .dimension(dim)
        .group(group);
}

/*Stacked bar chart showing the type of incident and whether resulted in fatality*/
function show__type_fatality_distribution(ndx) {

    function typeByFatality(dimension, type) {
        return dimension.group().reduce(
            function(p, v) {
                p.total++;
                if (v.Type == type) {
                    p.match++;
                }
                return p;
            },
            function(p, v) {
                p.total--;
                if (v.Type == type) {
                    p.match--;
                }
                return p;
            },
            function() {
                return { total: 0, match: 0 };
            }
        );
    }

    var dim = ndx.dimension(dc.pluck("Fatal"));
    var unprovokedByFatality = typeByFatality(dim, "Unprovoked");
    var provokedByFatality = typeByFatality(dim, "Provoked");
    var boatByFatality = typeByFatality(dim, "Boat");
    var invalidByFatality = typeByFatality(dim, "Invalid");


    dc.barChart("#type-by-fatality-distribution")
        .width(500)
        .height(500)
        .useViewBoxResizing(true)
        .dimension(dim)
        .group(unprovokedByFatality, "Unprovoked")
        .stack(provokedByFatality, "Provoked")
        .stack(boatByFatality, "Boat")
        .stack(invalidByFatality, "Invalid")

        .valueAccessor(function(d) {
            if (d.value.total > 0) {
                return (d.value.match); // To show as percentages: (d.value.match / d.value.total) * 100;
            }
            else {
                return 0;
            }
        })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Fatality")
        .yAxisLabel("Attacks")
        .legend(dc.legend().x(320).y(20).itemHeight(15).gap(5))
        .margins({ top: 10, right: 100, bottom: 50, left: 50 });
}

/*Activity bar graph that shows the type of activity the victim was partaking in when the attack took place*/
function show_activity(ndx) {
    var dim = ndx.dimension(dc.pluck('Activity'));
    var group = dim.group();

    dc.barChart("#activity")
        .width(1200)
        .height(500)
        .useViewBoxResizing(true)
        .margins({ top: 10, right: 50, bottom: 115, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Activity")
        .yAxisLabel("Attacks")
        .yAxis().ticks(20);
}

/*Country pie chart displays count of attacks in all available countries*/
function show_countrypi(ndx) {
    var name_dim = ndx.dimension(dc.pluck('Country'));
    var country_attacks = name_dim.group();

    dc.pieChart('#country-chart')
        .height(400)
        .radius(600)
        .innerRadius(70)
        .dimension(name_dim)
        .group(country_attacks)
        .transitionDuration(1500);
}

/*Age range pie chart that displays the ages of the victims in ranges */
function show_agepi(ndx) {
    var name_dim = ndx.dimension(dc.pluck('AgeRange'));
    var country_attacks = name_dim.group();
      
    dc.pieChart('#age-chart')
        .height(400)
        .radius(600)
        .innerRadius(70)
        .dimension(name_dim)
        .group(country_attacks)
        .transitionDuration(1500);
}

/*Fatal chart showing count of whether attack was fatal (Y/N/Unknown)*/
function show_fatalpi(ndx) {
    var name_dim = ndx.dimension(dc.pluck('Fatal'));
    var country_attacks = name_dim.group();

    dc.pieChart('#fatal-chart')
        .height(400)
        .radius(600)
        .innerRadius(70)
        .dimension(name_dim)
        .group(country_attacks)
        .transitionDuration(1500);
}

/*Composite chart showing all countries and the years that the attacks took place*/
function show_country_year(ndx) {
    var date_dim = ndx.dimension(dc.pluck('Year'));

    function attacks_by_country(Country) {
        return function(d) {
            if (d.Country === Country) {
                return +d.Number;
            }
            else {
                return 0;
            }
        };
    }

    var SouthAfricaAttacksByYear = date_dim.group().reduceSum(attacks_by_country('SOUTH AFRICA'));

    var UsaAttacksByYear = date_dim.group().reduceSum(attacks_by_country('USA'));

    var AustraliaAttacksByYear = date_dim.group().reduceSum(attacks_by_country('AUSTRALIA'));

    var NewZealandAttacksByYear = date_dim.group().reduceSum(attacks_by_country('NEW ZEALAND'));

    var ItalyAttacksByYear = date_dim.group().reduceSum(attacks_by_country('ITALY'));

    var CroatiaAttacksByYear = date_dim.group().reduceSum(attacks_by_country('CROATIA'));

    var ChileAttacksByYear = date_dim.group().reduceSum(attacks_by_country('CHILE'));

    var MexicoAttacksByYear = date_dim.group().reduceSum(attacks_by_country('MEXICO'));

    var OkinawaAttacksByYear = date_dim.group().reduceSum(attacks_by_country('OKINAWA'));

    var AtlanticOceanAttacksByYear = date_dim.group().reduceSum(attacks_by_country('ATLANTIC OCEAN'));

    var BrazilAttacksByYear = date_dim.group().reduceSum(attacks_by_country('BRAZIL'));

    var ElSalvadorAttacksByYear = date_dim.group().reduceSum(attacks_by_country('EL SALVADOR'));

    var FranceAttacksByYear = date_dim.group().reduceSum(attacks_by_country('FRANCE'));

    var JapanAttacksByYear = date_dim.group().reduceSum(attacks_by_country('JAPAN'));

    var MozambiqueAttacksByYear = date_dim.group().reduceSum(attacks_by_country('MOZAMBIQUE'));

    var PhilippinesAttacksByYear = date_dim.group().reduceSum(attacks_by_country('PHILIPPINES'));

    var PortugalAttacksByYear = date_dim.group().reduceSum(attacks_by_country('PORTUGAL'));

    var RussiaAttacksByYear = date_dim.group().reduceSum(attacks_by_country('RUSSIA'));

    var SeychellesAttacksByYear = date_dim.group().reduceSum(attacks_by_country('SEYCHELLES'));

    var VietnamAttacksByYear = date_dim.group().reduceSum(attacks_by_country('VIETNAM'));

    var TotalAttacksByYear = date_dim.group();

    var compositeChart = dc.compositeChart('#composite-chart');

    compositeChart
        .width(1200)
        .height(500)
        .useViewBoxResizing(true)
        .dimension(date_dim)
        .x(d3.scale.linear().domain([1968, 2018]))
        .xAxisLabel("Year")
        .yAxisLabel("Attacks")
        .legend(dc.legend().x(80).y(20).itemHeight(13).gap(5))
        .renderHorizontalGridLines(true)

        .compose([
            dc.lineChart(compositeChart)
            .colors('red')
            .group(UsaAttacksByYear, 'USA'),
            dc.lineChart(compositeChart)
            .colors('green')
            .group(SouthAfricaAttacksByYear, 'SOUTH AFRICA'),
            dc.lineChart(compositeChart)
            .colors('gold')
            .group(AustraliaAttacksByYear, 'AUSTRALIA'),
            dc.lineChart(compositeChart)
            .colors('black')
            .group(NewZealandAttacksByYear, 'NEW ZEALAND'),
            dc.lineChart(compositeChart)
            .colors('blue')
            .group(ItalyAttacksByYear, 'ITALY'),
            dc.lineChart(compositeChart)
            .colors('darkGreen')
            .group(CroatiaAttacksByYear, 'CROATIA'),
            dc.lineChart(compositeChart)
            .colors('darkRed')
            .group(ChileAttacksByYear, 'CHILE'),
            dc.lineChart(compositeChart)
            .colors('purple')
            .group(MexicoAttacksByYear, 'MEXICO'),
            dc.lineChart(compositeChart)
            .colors('darkBlue')
            .group(OkinawaAttacksByYear, 'OKINAWA'),
            dc.lineChart(compositeChart)
            .colors('brown')
            .group(AtlanticOceanAttacksByYear, 'ATLANTIC OCEAN'),
            dc.lineChart(compositeChart)
            .colors('orange')
            .group(BrazilAttacksByYear, 'BRAZIL'),
            dc.lineChart(compositeChart)
            .colors('darkOrange')
            .group(ElSalvadorAttacksByYear, 'EL SALVADOR'),
            dc.lineChart(compositeChart)
            .colors('gray')
            .group(FranceAttacksByYear, 'FRANCE'),
            dc.lineChart(compositeChart)
            .colors('darkGray')
            .group(JapanAttacksByYear, 'JAPAN'),
            dc.lineChart(compositeChart)
            .colors('Indigo')
            .group(MozambiqueAttacksByYear, 'MOZAMBIQUE'),
            dc.lineChart(compositeChart)
            .colors('Violet')
            .group(PhilippinesAttacksByYear, 'PHILIPPINES'),
            dc.lineChart(compositeChart)
            .colors('aqua')
            .group(PortugalAttacksByYear, 'PORTUGAL'),
            dc.lineChart(compositeChart)
            .colors('aquaMarine')
            .group(RussiaAttacksByYear, 'RUSSIA'),
            dc.lineChart(compositeChart)
            .colors('crimson')
            .group(SeychellesAttacksByYear, 'SEYCHELLES'),
            dc.lineChart(compositeChart)
            .colors('khaki')
            .group(VietnamAttacksByYear, 'VIETNAM'),


            dc.lineChart(compositeChart)
            .dashStyle([3, ])
            .colors('pink')
            .group(TotalAttacksByYear, 'TOTAL')
        ])
        .brushOn(false)
        .render();

    /*.function to convert xAxis tick format from 1,970 to 1968. Returns actual .csv value in correct date order */
    compositeChart.xAxis().tickFormat(function(v) { return v; });
}

/*Table to show all data that present. Next and last buttons used for scrolling through tabulated data*/
function show_data_table(ndx) {

    var dim = ndx.dimension(function(d) { return d.dim; });

    var table = dc.dataTable("#dc-data-table") /* variable created for pagination */

        .dimension(dim)
        .group(function(d) { return ""; })
        .size(Infinity) /* Adjust amount of rows here. Use 'Infinity' to show all data */

        .columns([
            function(d) { return d.Year; },
            function(d) { return d.Type; },
            function(d) { return d.Country; },
            function(d) { return d.Activity; },
            function(d) { return d.Sex; },
            function(d) { return d.Age; },
            function(d) { return d.Fatal; },
            function(d) { return d.Species; }

        ]).sortBy(function(d) {
            return d.Year; /* sortBy return = d.Year will sort data by years */
        })
        .order(d3.descending) /* reinsert ; after final peice of this section */

        /* pagination */ 

        .on('preRender', update_offset)
        .on('preRedraw', update_offset)
        .on('pretransition', display);


    /* use odd page size to show the effect better */
    var ofs = 0,
        pag = 7;

    function update_offset() {
        var totFilteredRecs = ndx.groupAll().value();
        var end = ofs + pag > totFilteredRecs ? totFilteredRecs : ofs + pag;
        ofs = ofs >= totFilteredRecs ? Math.floor((totFilteredRecs - 1) / pag) * pag : ofs;
        ofs = ofs < 0 ? 0 : ofs;
        table.beginSlice(ofs); /*table used as variable for dc.dataTable("#dc-data-table") */
        table.endSlice(ofs + pag); /*table used as variable for dc.dataTable("#dc-data-table")*/
    }

    function display() {
        var totFilteredRecs = ndx.groupAll().value();
        var end = ofs + pag > totFilteredRecs ? totFilteredRecs : ofs + pag;
        d3.select('#begin')
            .text(end === 0 ? ofs : ofs + 1);
        d3.select('#end')
            .text(end);
        d3.select('#last')
            .attr('disabled', ofs - pag < 0 ? 'true' : null);
        d3.select('#next')
            .attr('disabled', ofs + pag >= totFilteredRecs ? 'true' : null);
        d3.select('#size').text(totFilteredRecs);
        if (totFilteredRecs != ndx.size()) {
            d3.select('#totalsize').text("(filtered Total: " + ndx.size() + " )");
        }
        else {
            d3.select('#totalsize').text('');
        }
    }

    $('#next').on('click', function() {
        ofs += pag;
        update_offset();
        table.redraw();
    });
    /* Event Listener function that fires when "next" HTML btn is clicked */  


    $('#last').on('click', function() {
        ofs -= pag;
        update_offset();
        table.redraw();
    });
    /* Event Listener function that fires when "last" HTML btn is clicked */

}

/*.function to refresh page when Refresh Charts buttons are clicked */
function refreshPage() {
    window.location.reload();
}
