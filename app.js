// "label": "One",
// "value": 29.765957771107

var startApp = function () {

    var weaponGroupCounts = {};
    for (var i = 0; i < charData.length; i++) {
        var killmail = charData[i];
        var ship = invTypes[killmail.victim.shipTypeID].typeName;
        var highSlots = classifier.getItemSlots(killmail.items).high;

        for (var f = 0; f < highSlots.length; f++) {
            var item = highSlots[f];
            var itemLookup = invTypes[item.typeID];
            if (itemLookup) {
                var group = invGroups[itemLookup.groupID]
                var groupName = group.groupName;
                if (group.categoryID == "7") {

                    if (!weaponGroupCounts[groupName]) {
                        weaponGroupCounts[groupName] = 0;
                    }
                    weaponGroupCounts[groupName]++;
                }
            }
        }
    }

    var chartData = [];
    for (var groupName in weaponGroupCounts) {
        var count = weaponGroupCounts[groupName]
        if (count > 5) {
            chartData.push({
                label: groupName,
                value: count
            });
        }

    }

    //Regular pie chart example
    nv.addGraph(function () {
        var chart = nv.models.pieChart()
            .x(function (d) {
                return d.label
            })
            .y(function (d) {
                return d.value
            })
            .showLabels(true);

        d3.select("#chart svg")
            .datum(chartData)
            .transition().duration(350)
            .call(chart);

        return chart;
    });

    //Donut chart example
    nv.addGraph(function () {
        var chart = nv.models.pieChart()
            .x(function (d) {
                return d.label
            })
            .y(function (d) {
                return d.value
            })
            .showLabels(true) //Display pie labels
            .labelThreshold(.05) //Configure the minimum slice size for labels to show up
            .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
            .donut(true) //Turn on Donut mode. Makes pie chart look tasty!
            .donutRatio(0.35) //Configure how big you want the donut hole size to be.
        ;

        return chart;
    });
};
