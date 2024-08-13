export default function HeaderHomepage({
  header,
  subhead,
}: {
  header: string
  subhead: string
}) {
  return (
    <div className="text-center">
      <h2 className="text-secondary">{subhead}</h2>
      <h1 className="text-2xl font-bold text-center text-primary">{header}</h1>
    </div>
  );
}
