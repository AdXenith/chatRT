migrate((db) => {

  const dao = new Dao(db)
  collection = dao.findCollectionByNameOrId("channels")

  const record1 = new Record(collection, {
    "name": "Backyard Hooligans",
  })

  const record2 = new Record(collection, {
    "name": "Pizza Party Hangout",
  })

  const record3 = new Record(collection, {
    "name": "Class 9B",
  })

  dao.saveRecord(record1)
  dao.saveRecord(record2)
  dao.saveRecord(record3)
})
