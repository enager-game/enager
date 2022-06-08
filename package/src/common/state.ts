import { atom } from "jotai";
import { Tiles } from "app/tiles";

export const player = atom({});
export const places = atom({
  starter: {
    board: Array.from({ length: 9 }, _ =>
      Array.from({ length: 9 }, _ => Tiles.Land),
    ),
  },
});
