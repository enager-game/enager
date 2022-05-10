import { IconCurrencyDollar, IconDeviceFloppy } from "@tabler/icons";
import { openDB, DBSchema } from "idb";
import { atom, useAtom } from "jotai";

const moneyStore = atom(0),
  moneyRW = atom(
    get => get(moneyStore),
    (get, set) => set(moneyStore, get(moneyStore) + 1),
  );

const db = await (() => {
  interface money_test extends DBSchema {
    richness: {
      key: string;
      value: number;
    };
  }

  return openDB<money_test>("money_test", 1, {
    upgrade(newDB) {
      newDB.createObjectStore("richness", {
        keyPath: "da_moni",
      });
    },
  });
})();

async function saveMoney(money: number) {
  await db.put("richness", money, "da_moni");
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
