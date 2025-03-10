/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1569729562")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1194168192",
    "max": 0,
    "min": 0,
    "name": "nom_invite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4174772449",
    "max": 0,
    "min": 0,
    "name": "prenom_invite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date4043192530",
    "max": "",
    "min": "",
    "name": "date_naissance_invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3506526845",
    "max": 0,
    "min": 0,
    "name": "ville_invite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file2455595007",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "photo_invite",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3952171119",
    "maxSize": 0,
    "name": "biographie_invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
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

  // remove field
  collection.fields.removeById("text1194168192")

  // remove field
  collection.fields.removeById("text4174772449")

  // remove field
  collection.fields.removeById("date4043192530")

  // remove field
  collection.fields.removeById("text3506526845")

  // remove field
  collection.fields.removeById("file2455595007")

  // remove field
  collection.fields.removeById("editor3952171119")

  // remove field
  collection.fields.removeById("select1824846182")

  return app.save(collection)
})
