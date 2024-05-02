export default function Loading() {
  return (
    <ul className="container max-w-screen-sm mx-auto">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className="animate-pulse p-4">
          <div className="rounded bg-muted/20 max-w-72 h-6"></div>
          <div className="rounded bg-muted/20 max-w-44 h-5 mt-1"></div>
        </li>
      ))}
    </ul>
  );
}
