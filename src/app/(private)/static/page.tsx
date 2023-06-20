import { getUsersStatic } from "@/api/users/users.api";
import { Suspense } from "react";

export default async function Home() {
  const users = await getUsersStatic();

  return (
    <div>
      <h1>Static</h1>
      <Suspense fallback={<p>Carregando</p>}>
        {users?.length === 0 || !users ? (
          <p className="whitespace-pre-line">Nenhuma memória encontrada</p>
        ) : (
          users.map((memory, index) => (
            <div key={`${memory.name}_${memory.description}_${index}`}>
              <h1>{memory.name}</h1>
            </div>
          ))
        )}
      </Suspense>
    </div>
  );
}
