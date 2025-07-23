"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Link from "next/link";

export default function CalendarPage() {
  const [value, setValue] = useState<[Date, Date] | Date>(new Date());

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">나주 이벤트 캘린더</h1>

      <Calendar
        onChange={(val) => setValue(val as Date | [Date, Date])}
        value={value}
        selectRange={true}
      />

      <p className="mt-2">
        선택한 날짜:{" "}
        {Array.isArray(value)
          ? `${value[0].toDateString()} ~ ${value[1].toDateString()}`
          : value.toDateString()}
      </p>

      <div className="mt-6">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          메뉴로 돌아가기
        </Link>
      </div>
    </main>
  );
}
