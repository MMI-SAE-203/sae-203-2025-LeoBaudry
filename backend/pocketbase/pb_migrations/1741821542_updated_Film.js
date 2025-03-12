/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select4117576053",
    "maxSelect": 1,
    "name": "categorie_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Animation",
      "Thriller",
      "Drama",
      "Comédie"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select4117576053",
    "maxSelect": 1,
    "name": "categorie_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Animation"
    ]
  }))

  return app.save(collection)
})
