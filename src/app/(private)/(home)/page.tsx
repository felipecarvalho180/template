import { getUsers } from "@/api/users/users.api";
import { Suspense } from "react";
import LogoutButton from "./LogoutButton";

interface Memory {
  name: string;
  description: string;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const users = await getUsers();

  return (
    <div>
      <LogoutButton />
      <h1>Home</h1>
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
