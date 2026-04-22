export default function ProductCard({ productname, price, description }) {
  return (
    <box>
      <h1>{productname}</h1>
      <p>{price}</p>
      <p>{description}</p>
    </box>
  );
}
