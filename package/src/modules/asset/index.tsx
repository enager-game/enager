export interface Props {
  name: string;
}

export default function Asset({ name }: Props) {
  return <span>{name}</span>;
}
