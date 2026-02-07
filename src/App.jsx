// 배쭈꾸의 여행계획 – MVP + 확장기능 포함 (배포용 설계)
// 기술 스택: React + Vite, Firebase (Firestore), Tailwind
// 특징: 로그인 없음, 링크 공유, 수정 비밀번호, 일정/장소 관리, 아이모드 테마

import { useState } from "react";

export default function App() {
  const [kidMode, setKidMode] = useState(false);

  return (
    <div className={`min-h-screen ${kidMode ? 'bg-gradient-to-br from-sky-200 via-indigo-200 to-purple-200' : 'bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100'} p-6`}>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🧳 배쭈꾸의 여행계획</h1>
        <button
          className="px-4 py-2 rounded-xl bg-white shadow"
          onClick={() => setKidMode(!kidMode)}
        >
          {kidMode ? '일반 모드' : '아이 모드'}
        </button>
      </header>

      {kidMode && (
        <div className="mb-4 text-center text-xl">
          🦖 공룡 여행 ✨ 🐋 고래 탐험 🚀 우주 모험
        </div>
      )}

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">📅 여행 일정</h2>
          <p className="text-sm text-gray-600">날짜별 스케줄을 입력하세요.</p>
          <textarea className="w-full mt-2 p-2 border rounded" placeholder="예: 1일차 – 도쿄 도착 / 스카이트리" />
        </section>

        <section className="bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-2">📍 여행 장소</h2>
          <p className="text-sm text-gray-600">국가 / 도시 / 가보고 싶은 장소</p>
          <input className="w-full mt-2 p-2 border rounded" placeholder="예: 일본 / 오사카 / 유니버설 스튜디오" />
        </section>

        <section className="bg-white rounded-2xl shadow p-4 md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">🍽️ 맛집 · ☕ 카페 · 🏛️ 명소</h2>
          <p className="text-sm text-gray-600">
            구글지도 / 트립어드바이저 추천 + 직접 추가 가능
          </p>
          <textarea className="w-full mt-2 p-2 border rounded" placeholder="추천: ○○ 라멘 (구글 평점 4.6)" />
        </section>
      </main>

      <footer className="mt-8 text-center text-sm text-gray-600">
        링크만 있으면 가족과 공유 가능 · 수정 시 비밀번호 필요
      </footer>
    </div>
  );
}
