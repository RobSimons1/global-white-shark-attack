queue()
    .defer(d3.csv, "data/shark-attack-data.csv")
    .await(makeGraphs);

function makeGraphs(error, sharkData) {
    var ndx = crossfilter(sharkData);
    
    show_data_table(ndx); 

    show_type_selector(ndx);

    show_country_selector(ndx);

    show_activity_selector(ndx);
    show_activity(ndx);
    show_fatalpi(ndx);
    show_countrypi(ndx);
    show_agepi(ndx);
    show_fatal_selector(ndx);


    show_country_year(ndx);

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

function show_fatal_selector(ndx) {
    var dim = ndx.dimension(dc.pluck('Fatal'));
    var group = dim.group();

    dc.selectMenu("#fatal-selector")
        .dimension(dim)
        .group(group);
}

function show_data_table(ndx) {
    
var dim = ndx.dimension(function(d) {return d.dim;});

    dc.dataTable("#dc-data-table")

    .dimension(dim)
    .group(function(d) {return "";})
    .size(Infinity)
    // dynamic columns creation using an array of closures
    .columns([
        function(d) {return d.Year;},
        function(d) {return d.Type;},
        function(d) {return d.Country;},
        function(d) {return d.Sex;},
        function(d) {return d.Age;},
        function(d) {return d.Activity;},
        function(d) {return d.Fatal;},
        function(d) {return d.Species;}
        
        
    ]).sortBy(function(d) {
        return d.Value;
    })
    .order(d3.descending);
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

function show_countrypi(ndx) {
    var name_dim = ndx.dimension(dc.pluck('Country'));
    var country_attacks = name_dim.group();

    dc.pieChart('#country-chart')
        .height(400)
        .radius(600)
        .dimension(name_dim)
        .group(country_attacks)
        .transitionDuration(1500)
}

function show_agepi(ndx) {
    var name_dim = ndx.dimension(dc.pluck('Age'));
    var country_attacks = name_dim.group();

    dc.pieChart('#age-chart')
        .height(400)
        .radius(600)
        .dimension(name_dim)
        .group(country_attacks)
        .transitionDuration(1500)
}

function show_fatalpi(ndx) {
    var name_dim = ndx.dimension(dc.pluck('Fatal'));
    var country_attacks = name_dim.group();

    dc.pieChart('#fatal-chart')
        .height(400)
        .radius(600)
        .dimension(name_dim)
        .group(country_attacks)
        .transitionDuration(1500)
}



function show_country_year(ndx) {
    var date_dim = ndx.dimension(dc.pluck('Year'));


    function attacks_by_country(Country) {
        return function(d) {
            if (d.Country === Country) {
                return +d.Number;
                // Number column added to .CSV file in order that function multiplies count by a numerical value (e.g. 1)    
            }
            else {
                return 0;
            }
        }
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
        .width(1700)
        .height(500)
        .dimension(date_dim)
        .x(d3.scale.linear().domain([1968, 2018]))
        .xUnits(dc.units.linear)
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

}
