migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("itzu51z8cpul03q")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("itzu51z8cpul03q")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
