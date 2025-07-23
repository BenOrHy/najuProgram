"use client";

import { useState } from "react";
import Link from "next/link";

type Stamp = {
  id: number;
  label: string;
  collected: boolean;
};

export default function StampPage() {
  const initialStamps: Stamp[] = [
    { id: 1, label: "영산강", collected: false },
    { id: 2, label: "금성산", collected: false },
    { id: 3, label: "나주곰탕거리", collected: false },
    { id: 4, label: "내주배키우는곳", collected: false },
  ];

  const [stamps, setStamps] = useState(initialStamps);

  const handleCollect = (id: number) => {
    setStamps(prev =>
      prev.map(stamp =>
        stamp.id === id ? { ...stamp, collected: true } : stamp
      )
    );
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-6">나주 스탬프 투어</h1>

      <div className="grid grid-cols-2 gap-4">
        {stamps.map(stamp => (
          <button
            key={stamp.id}
            onClick={() => handleCollect(stamp.id)}
            className={`p-4 rounded-lg border text-center ${
              stamp.collected ? "bg-green-400 text-white" : "bg-gray-100"
            }`}
          >
            {stamp.label}
            <br />
            {stamp.collected ? "획득" : "미획득"}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          메뉴로 돌아가기
        </Link>
      </div>
    </main>
  );
}
