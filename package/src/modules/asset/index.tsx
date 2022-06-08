export interface Props {
  name: string;
}

export default function Asset({ name }: Props) {
  return <p className="border-black border-2 border-solid">{name}</p>;
}
