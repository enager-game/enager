import { openDB } from "idb";
import GameDatabase from "./model";

const DATABASE_VERSION = 1;

const gameDatabase = openDB<GameDatabase>("game", DATABASE_VERSION, {
  upgrade(newDB, _, newVer) {
    switch (newVer) {
    }
  },
  blocked() {
    alert(
      "Database Error: Older version of database is opened. Close the other tab.",
    );
  },
  blocking() {
    alert("Database Error: Newer version of database opened. Close this tab.");
  },
  terminated() {
    alert("Database Error: Connection was unexpectedly terminated.");
  },
});

export default gameDatabase;
