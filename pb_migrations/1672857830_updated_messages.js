migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bgghn84jszd9ef0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2vj9n9sg",
    "name": "channel",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "itzu51z8cpul03q",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bgghn84jszd9ef0")

  // remove
  collection.schema.removeField("2vj9n9sg")

  return dao.saveCollection(collection)
})
