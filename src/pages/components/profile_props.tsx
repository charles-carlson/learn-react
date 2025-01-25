import { AvatarProps } from "@/types/avatar";

function Avatar(props : AvatarProps) {
  const { person, size = 100 } = props;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile(props: AvatarProps) {
  const {person, size = 100} = props;
  return (
    <div>
        <Avatar
            person={person}
            size={size} />
    </div>
  );
}