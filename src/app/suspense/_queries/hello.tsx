import { api } from "@/trpc/server";
import { unstable_noStore } from "next/cache";

export async function Hello() {
  unstable_noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  return (
    <p className="text-2xl text-white">
      {hello ? hello.greeting : "Loading tRPC query..."}
    </p>
  );
}

