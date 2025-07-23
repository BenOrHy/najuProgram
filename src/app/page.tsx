// app/page.tsx - 서버 컴포넌트 그대로 유지
import Menu from './menu/Menu';

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">홈 메뉴</h1>
      <Menu />
    </main>
  );
}
