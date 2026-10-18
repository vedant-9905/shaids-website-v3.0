import { redirect } from "next/navigation";

export default function AboutOverviewPage() {
  redirect("/about?tab=overview");
}
