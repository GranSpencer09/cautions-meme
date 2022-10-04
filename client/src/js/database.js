import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    // Add database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  console.log("PUT to jate database");

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB("jate", 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction("jate", "readwrite");

  // Open up the desired object store.
  const store = tx.objectStore("jate");

  // Use the .put() method on the store and pass in the content.
  const request = store.put({
    id: 1,
    value: content,
  });

  // Get confirmation of the request.
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// Logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET from JATE database");

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB("jate", 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction("jate", "readonly");

  // Open up the desired object store.
  const store = tx.objectStore("jate");

  // Use the .get() method to get data from the database.
  const request = store.get(1);

  // Get confirmation of the request.
  const result = await request;
  return result?.value;
};

initdb();
