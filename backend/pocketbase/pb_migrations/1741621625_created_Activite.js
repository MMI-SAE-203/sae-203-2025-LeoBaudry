/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1835929465",
        "max": 0,
        "min": 0,
        "name": "titre_activite",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "date2067807411",
        "max": "",
        "min": "",
        "name": "date_activite",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "convertURLs": false,
        "hidden": false,
        "id": "editor222738225",
        "maxSize": 0,
        "name": "description_activite",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "editor"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1872298947",
        "max": 0,
        "min": 0,
        "name": "lieu_activite",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "select2163348607",
        "maxSelect": 1,
        "name": "categorie_activite",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Ateliers",
          "Expositions",
          "Animations"
        ]
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_21851994",
    "indexes": [],
    "listRule": null,
    "name": "Activite",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994");

  return app.delete(collection);
})
