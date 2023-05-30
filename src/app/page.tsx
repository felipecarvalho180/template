import { getMemories } from "@/server/memories/memories.server";

export default async function Home() {
  const memories = await getMemories();

  return (
    <div>
      <a href="/api/logout">Logout</a>
      <h1>Home</h1>
      <p className="whitespace-pre-line">{JSON.stringify(memories, null, 2)}</p>
    </div>
  );
}
