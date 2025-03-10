/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1569729562")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1824846182",
    "maxSelect": 1,
    "name": "role_invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Acteur",
      "Réalisateur",
      "Animateur"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1569729562")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1824846182",
    "maxSelect": 3,
    "name": "role_invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Acteur",
      "Réalisateur",
      "Animateur"
    ]
  }))

  return app.save(collection)
})
