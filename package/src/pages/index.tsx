import { useAtomValue } from "jotai";
import { focusAtom } from "jotai/optics";
import { places } from "common/state";
import Board from "modules/board";

export default function Index() {
  const placeBoard = focusAtom(places, optic =>
    optic.prop("starter").prop("board"),
  );

  const data = useAtomValue(placeBoard);

  return (
    <Board
      className="border-2 border-black border-solid border-separate          "
      data={data}
    />
  );
}
