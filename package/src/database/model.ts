import { DBSchema } from "idb";

export interface Save {
  money: number;
  name: string;
}

export default interface GameDatabase extends DBSchema {
  saves: {
    key: Save["name"];
    value: Save;
  };
}
