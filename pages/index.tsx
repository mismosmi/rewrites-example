export default function Home() {
  if (typeof window !== "undefined") {
    return <h1>{window?.document.location.href}</h1>;
  }

  return null;
}
