"use client";

import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-xl font-bold">나주 탐방 앱</h1>
      </header>

      <main className="p-4 space-y-4">
        <Link href="/calendar" className="text-blue-600 underline block">
          나주 이벤트 확인하기
        </Link>
        <p></p>
        <Link href="/stamp" className="text-blue-600 underline block">
          스탬프 찍기
        </Link>
        <p></p>
      </main>
    </div>
  );
}
