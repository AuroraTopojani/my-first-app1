export default function AlertBox({ children }) {
  function handleButton() {
    alert("button clicked");
  }
  return <button onClick={handleButton}>{children}</button>;
}
