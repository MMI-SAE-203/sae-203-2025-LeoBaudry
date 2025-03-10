/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date4291792013",
    "max": "",
    "min": "",
    "name": "date_parution_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "date405417019",
    "max": "",
    "min": "",
    "name": "date_projection_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file1168510124",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "bande_annonce_film",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // remove field
  collection.fields.removeById("date4291792013")

  // remove field
  collection.fields.removeById("date405417019")

  // remove field
  collection.fields.removeById("file1168510124")

  return app.save(collection)
})
