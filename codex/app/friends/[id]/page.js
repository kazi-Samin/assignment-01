import { notFound } from "next/navigation";
import { FriendDetailShell } from "@/components/friend-detail-shell";
import { getFriendById } from "@/lib/friends";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const friend = getFriendById(id);

  if (!friend) {
    return {
      title: "Friend Not Found | KinKeeper",
    };
  }

  return {
    title: `${friend.name} | KinKeeper`,
    description: `Relationship details and quick check-ins for ${friend.name}.`,
  };
}

export default async function FriendDetailPage({ params }) {
  const { id } = await params;
  const friend = getFriendById(id);

  if (!friend) {
    notFound();
  }

  return <FriendDetailShell friend={friend} />;
}
