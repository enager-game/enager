import { DBSchema } from "idb";

export interface Save {
  key: string;
  value: number;
}

export default interface GameDatabase extends DBSchema {
  save1: Save;
  save2: Save;
  save3: Save;
}
