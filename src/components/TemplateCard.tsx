import React from "react";

export default function TemplateCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-[calc(100vh-32px)] sm:basis-1/3 border-2 border-blue-500 rounded-lg flex items-center justify-center text-xl font-bold">
        {children}
    </div>
  );
}