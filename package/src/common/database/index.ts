import { defaultSave, Save } from "./model";
export * from "./model";

export function initDatabase() {
  let dbVersion = process.env.NEXT_PUBLIC_DATABASE_VERSION;

  if (dbVersion === `"dev"`) {
    localStorage.clear();
    localStorage.setItem("version", "0");
  }

  switch (Number(localStorage.getItem("version"))) {
    case 0:
      for (let i = 1; i <= 3; i++) {
        localStorage.setItem(i.toString(), JSON.stringify(defaultSave));
      }
    case 1:
    // idk
  }
}

export function update(store: number, newSave: Save): void;
export function update(store: number, oldSave: Save, newSave: Save): void;
export function update(store: number, setSave: Save, addSave?: Save) {
  localStorage.setItem(
    store.toString(),
    JSON.stringify({ ...setSave, ...(addSave !== undefined ? addSave : {}) }),
  );
}
