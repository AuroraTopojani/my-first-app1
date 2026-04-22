import TabButton from "./TabButton";

export default function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <TabButton>HELLO</TabButton>
    </li>
  );
}
