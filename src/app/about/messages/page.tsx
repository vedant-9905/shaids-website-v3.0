import { redirect } from "next/navigation";

export default function AboutMessagesPage() {
  redirect("/about?tab=messages");
}
