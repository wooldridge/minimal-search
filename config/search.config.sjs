const searchConfig  = {  

    // Search view
    search: {
        "defaultEntity": "%%ENTITYTYPE%%",

        "meter": {
        "component": "SummaryMeter",
        "config": {
            "colors": {
            "all": "#cccccc",
            "filters": "#1ACCA8"
            },
            "totalPath": "searchResults.recordCount.total"
        }
        },

        "facets": {
            "component": "Facets",
            "config": {
                "selected": "#1acca8",
                "unselected": "#dfdfdf",
                "displayThreshold": 3,
                "displayShort": 3,
                "displayLong": 5,
                "items": []
            }
        },

        "selectedFacets": {
            "component": "SelectedFacets",
            "config": {}
        },

        "results": {
            "component": "ResultsList",
            "config": {
                "pageLengths": [10, 20, 40, 80],
                "defaultIcon" : {
                "type": "faCircle",
                "color": "lightgrey"
                },
                "entities": {
                    "%%ENTITYTYPE%%": {
                        "icon": {
                        "type": "faUsers",
                        "color": "#fdbcc6"
                        },
                        "title": {
                        "id": "uri",
                        "path": "uri"
                        },
                        "items": []
                    }
                }
            }
        }
    }
  
}
  
module.exports = searchConfig;
