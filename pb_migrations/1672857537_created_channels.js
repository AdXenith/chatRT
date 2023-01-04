migrate((db) => {
  const collection = new Collection({
    "id": "itzu51z8cpul03q",
    "created": "2023-01-04 18:38:57.886Z",
    "updated": "2023-01-04 18:38:57.886Z",
    "name": "channels",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sokrodwh",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("itzu51z8cpul03q");

  return dao.deleteCollection(collection);
})
