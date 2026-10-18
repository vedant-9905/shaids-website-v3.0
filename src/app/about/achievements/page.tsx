import { redirect } from "next/navigation";

export default function AboutAchievementsPage() {
  redirect("/about?tab=academics");
}
