export default function ProgressBar({
  value,
}: {
  value: number
}) {
  return (
    <div className="w-full">
      <div style={{ width: `${value}%` }} className="bg-carolina-blue h-2 shadow-2xl" />
    </div>
  );
}
