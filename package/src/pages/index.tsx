import { IconCurrencyDollar, IconDeviceFloppy } from "@tabler/icons";
import { openDB, DBSchema, IDBPDatabase } from "idb";
import { atom, useAtom } from "jotai";

const moneyStore = atom(0),
  moneyRW = atom(
    get => get(moneyStore),
    (get, set) => set(moneyStore, get(moneyStore) + 1),
  );

interface money_test extends DBSchema {
  richness: {
    key: string;
    value: number;
  };
}
let db: IDBPDatabase<money_test>;
if (typeof window !== "undefined") {
  db = await openDB<money_test>("money_test", 2, {
    upgrade(newDB) {
      newDB.deleteObjectStore("richness");
      newDB.createObjectStore("richness");
    },
  });
}

async function saveMoney(money: number) {
  await db.put("richness", money, "da_moni");
  console.log(1);
}

export default function Index() {
  const [money, setMoney] = useAtom(moneyRW);

  return (
    <>
      <p className="text-3xl">stuff: {money}</p>
      <button
        className="border-2 border-black block"
        onClick={() => setMoney()}
      >
        <IconCurrencyDollar className="inline" />
        Click this button
      </button>

      <button
        className="border-2 border-black block"
        onClick={() => saveMoney(money)}
      >
        save <IconDeviceFloppy className="inline" />
      </button>
    </>
  );
}
