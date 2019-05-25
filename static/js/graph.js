queue()
    .defer(d3.csv, "data/shark-attack-data.csv")
    .await(makeGraphs);

function makeGraphs(error, sharkData) {
    var ndx = crossfilter(sharkData);

    show_type_selector(ndx);
    show_fifty_years(ndx);
    show_country_selector(ndx);
    show_country(ndx);
    show_activity_selector(ndx);
    show_activity(ndx);
    show_countrypi(ndx);

    show_years(ndx);
    
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

function show_years(ndx) {
    var date_dim = ndx.dimension(dc.pluck('Year'));
    var country_date = date_dim.group();

    dc.lineChart("#chart-here")
        .width(1700)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(date_dim)
        .group(country_date)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Year")
        .yAxisLabel("Attacks")
        .yAxis().ticks(4);
}

function show_country_year(ndx) {
        var date_dim = ndx.dimension(dc.pluck('Year'));
       
        
            function attacks_by_country(Country) {
            return function(d) {
                if (d.Country === Country) {
                    return +d.Number;
                } else {
                    return 0;
                }
            }
        }
        
        var SouthAfricaAttacksByYear = date_dim.group().reduceSum(attacks_by_country('SOUTH AFRICA'));
        
        var UsaAttacksByYear = date_dim.group().reduceSum(attacks_by_country('USA'));
        
        var AustraliaAttacksByYear = date_dim.group().reduceSum(attacks_by_country('AUSTRALIA'));
        
        var NewZealandAttacksByYear = date_dim.group().reduceSum(attacks_by_country('NEW ZEALAND'));
        
        var ItalyAttacksByYear = date_dim.group().reduceSum(attacks_by_country('ITALY'));
        
        var compositeChart = dc.compositeChart('#composite-chart');
		
        compositeChart
            .width(1700)
            .height(300)
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
                    .group(ItalyAttacksByYear, 'ITALY')    
            ])
            .brushOn(false)
            .render();
            
    }
    
