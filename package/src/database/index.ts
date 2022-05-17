import { openDB, deleteDB, IDBPDatabase } from "idb";
import GameDatabase from "./model";

async function openGameDatabase(verison: number) {
  if (process.env.NEXT_PUBLIC_DB_MODE === "remove") deleteDB("game");

  const gameDatabase = await openDB<GameDatabase>("game", verison, {
    async upgrade(newDB, _, newVer) {
      // switch (newVer) {
      // }
      await newDB.createObjectStore("saves", { keyPath: "name" });
    },
    blocked() {
      alert(
        "Database Error: Older version of database is opened. Close the other tab.",
      );
    },
    blocking() {
      alert(
        "Database Error: Newer version of database opened. Close this tab.",
      );
    },
    terminated() {
      alert("Database Error: Connection was unexpectedly terminated.");
    },
  });

  await gameDatabase.add("saves", { name: "a save", money: 0 });

  return gameDatabase;
}

export default openGameDatabase;
