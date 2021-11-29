export default function Home() {
  if (window) {
    return <h1>{window?.document.location.href}</h1>;
  }

  return null;
}
