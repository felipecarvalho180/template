import { getMemories } from "@/api/memories/memories.api";
import { Suspense } from "react";

interface Memory {
  name: string;
  description: string;
}

export default async function Home() {
  const memories: Memory[] = await getMemories();

  return (
    <div>
      <a href="/api/logout">Logout</a>
      <h1>Home</h1>
      <Suspense fallback={<p>Carregando</p>}>
        {memories?.length === 0 || !memories ? (
          <p className="whitespace-pre-line">Nenhuma memória encontrada</p>
        ) : (
          memories.map((memory, index) => (
            <div key={`${memory.name}_${memory.description}_${index}`}>
              <h1>{memory.name}</h1>
            </div>
          ))
        )}
      </Suspense>
    </div>
  );
}
