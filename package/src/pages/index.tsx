import { IconCurrencyDollar, IconDeviceFloppy } from "@tabler/icons";
import getDB from "../database";
import { atom, useAtom } from "jotai";
import { useAtomDevtools } from "jotai/devtools";
import { useEffect } from "react";

const moneyStore = atom(0),
  moneyRW = atom(
    get => get(moneyStore),
    (get, set) => set(moneyStore, get(moneyStore) + 1),
  );

export default function Index() {
  const [money, setMoney] = useAtom(moneyRW);
  useAtomDevtools(moneyStore);

  useEffect(() => {
    (async () => {
      const db = await getDB(1);
      db.put("saves", { ...(await db.get("saves", "a save")), money });
    })();
  }, [money]);

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
    </>
  );
}
