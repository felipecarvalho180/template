import { getMemories } from "@/api/memories/memories.api";
import { Suspense } from "react";

export default async function Home() {
  const memories = await getMemories();

  return (
    <div>
      <a href="/api/logout">Logout</a>
      <h1>Home</h1>
      <Suspense fallback={<p>Carregando</p>}>
        {memories?.length === 0 || !memories ? (
          <p className="whitespace-pre-line">Nenhuma memória encontrada</p>
        ) : (
          <p className="whitespace-pre-line">
            {JSON.stringify(memories, null, 2)}
          </p>
        )}
      </Suspense>
    </div>
  );
}
