export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      {/* TOP */}
      <div className="pt-6 text-center">
        <h2 className="text-lg font-bold">학년과 반 고르기</h2>
        <p className="mt-4 text-base">정보를 확인할 학급을 골라주세요</p>
      </div>
      {/* BODY */}
      <div className="flex-grow py-4">{children}</div>
    </div>
  );
}
