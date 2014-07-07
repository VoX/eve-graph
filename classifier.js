var classifier = (function () {

    var classifier = {};

    classifier.getItemSlots = function (items) {
        var slots = {
            high: [],
            med: [],
            low: []
        };
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.flag >= 28 || item.flag <= 34) {
                slots.high.push(item);
            }
            //TODO: other item slots
        }
        return slots;
    };


    return classifier;
})();
