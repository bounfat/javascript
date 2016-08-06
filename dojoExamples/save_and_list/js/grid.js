/**
 * Created by Fatih on 4.08.2016.
 */

require([
        "dojo/cookie",
        "dojo/json",
        "dojo/request",
        "dojo/store/Memory",
        "dojo/data/ObjectStore",
        "dojox/grid/DataGrid",
        "dojo/domReady!"
    ],
    function (cookie, json, request, Memory, ObjectStore, DataGrid) {

        var data = json.parse(cookie("configObj"));

        var store = new Memory({data: data, idProperty: "id"});

        test_store = new ObjectStore({objectStore: store});

        var grid = new DataGrid({
            "class": "grid",
            store: test_store,
            query: {id: "*"},
            structure: [
                {name: "Name", field: "name", width: "10%"},
                {name: "Surname", field: "surname", width: "8%"},
                {name: "Start Date", field: "sdate", width: "9%"},
                {name: "End Date", field: "edate", width: "8%"},
                {name: "Time", field: "time", width: "8%"},
                {name: "Description", field: "description", width: "8%"}
            ]
        }, "grid");
        grid.startup();

        grid.on("RowClick", function (evt) {
            var idx = evt.rowIndex,
                rowData = grid.getItem(idx);
            document.getElementById("results").innerHTML =
                "You have clicked on " + rowData.name + ", " + rowData.surname + ".";
        }, true);

    });
