import { Inter } from "next/font/google";
import BaseLayout from "@/components/layouts/base";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <BaseLayout />
    </main>
  );
}
