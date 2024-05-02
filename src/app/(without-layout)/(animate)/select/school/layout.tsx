"use client";

import Button from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Appbar from "@/components/layout/appbar";

// Full screen Dialog 스타일로 구현

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Appbar className="border-none" title="학교 고르기" navigation={<Appbar.Close />} />
      <div className="h-16"></div>
      {children}
    </motion.main>
  );
}
