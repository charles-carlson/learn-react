/* eslint-disable @next/next/no-img-element */
import { GalleryProps } from "@/types/gallery";
import { ListItemProps } from "@/types/listItem";
function ListItem({label,content}:ListItemProps) {
  return (
    <li>
    <b>{label}</b>
    ({content})
    </li>
  );
}

function Profile(props: GalleryProps) {
  const {scientist,size=100} = props;
  return (
  <section className="profile">
    <h2>{scientist.name}</h2>
    <img
      className="avatar"
      src={"https://i.imgur.com/"+ scientist.imageId + ".jpg"}
      alt={scientist.name}
      width={size}
      height={size}
      />
    <ul>
      <ListItem label="Profession: " content={scientist.profession}/>
      <ListItem label={"Awards: "+scientist.awards.length} content={scientist.awards} />
      <ListItem label={"Discovered: "} content={scientist.discovery} />
    </ul>
  </section>
  );
}
export default function Gallery() {
  let props1 : GalleryProps = {scientist : {name:"Maria Skłodowska-Curie",
     imageId:"szV5sdGs",
     profession:"physicist and chemist",
     awards: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
     discovery:"polonium (element)"},size:70}
  let props2 : GalleryProps = {scientist : {name:"Katsuko Saruhashi",
    imageId:"YfeOqp2s",
    profession:"geochemist",
    awards: "(Miyake Prize for geochemistry, Tanaka Prize)",
    discovery:"a method for measuring carbon dioxide in seawater"},size:70}
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile {...props1} />
      <Profile {...props2} />
    </div>
  );
}
