const searchboxConfig  = {  

    // Application searchbox
    searchbox: {
        "items": [
            {
                "label": "All Entities",
                "value": ["%%ENTITYTYPE%%"],
                "default": true
            },
            {
                "label": "%%ENTITYLABEL%%",
                "value": "%%ENTITYTYPE%%"
            }
        ]
    }
};

module.exports = searchboxConfig;
