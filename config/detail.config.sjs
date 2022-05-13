const detailConfig  = {  

    // Detail view
    detail: {
    "entities": {
      "%%ENTITYTYPE%%": {
        "heading": {
          "title": {
            "path": "uri"
          }
        },
        "info": {
          "title": "Record Info",
          "items": [
            {
              "component": "DataTableValue",
              "config": {
                "id": "id",
                "title": "ID",
                "path": "person",
                "value": "id",
                "width": "400px",
                "metadata": []
              }
            }
          ]
        },
        "relationships": {},
        "imageGallery": {},
        "timeline": {}
      }
    }
  }
  
}
  
module.exports = detailConfig;
