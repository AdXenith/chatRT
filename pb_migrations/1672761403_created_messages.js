migrate((db) => {
  const collection = new Collection({
    "id": "bgghn84jszd9ef0",
    "created": "2023-01-03 15:56:43.081Z",
    "updated": "2023-01-03 15:56:43.081Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v2q4kgcn",
        "name": "text",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 400,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pbfas6q8",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bgghn84jszd9ef0");

  return dao.deleteCollection(collection);
})
