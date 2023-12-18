import { api } from "@/trpc/server";
import { unstable_noStore } from "next/cache";

export async function GetLatest() {
  unstable_noStore();
  const start = Date.now();
  const latestPost = await api.post.getLatest.query();
  const duration = Date.now() - start;
  return (
    <>
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
      Drizzle + PlanetScale (us-east-1 Virginia) {duration}ms
    </>
  );
}

