"use client";
import { useRouter } from "next/navigation";

const BackNavigation = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-4 text-blue-500 hover:underline"
    >
      ← Regresar
    </button>
  );
};

export default BackNavigation;
