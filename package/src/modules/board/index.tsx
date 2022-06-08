import { Tiles } from "app/tiles";
import Asset from "modules/asset";

export interface Props {
  data: Tiles[][];
  className: string;
}

export default function Board({ data, className }: Props) {
  return (
    <table className={className}>
      {data.map((row, i) => (
        <tr key={i}>
          {row.map((tile, i) => (
            <td key={i} className="space-x-4">
              <Asset name={tile} />
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}
