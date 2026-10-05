export default async function Home() {
  const res = await fetch("http://localhost:8000/health", { cache: "no-store" });
  const data = await res.json();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Finance Dashboard</h1>
      <p>Backend status: {data.status}</p>
    </main>
  );
}

