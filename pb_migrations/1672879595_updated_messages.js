migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bgghn84jszd9ef0")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bgghn84jszd9ef0")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
