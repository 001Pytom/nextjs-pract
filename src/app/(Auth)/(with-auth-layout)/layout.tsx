export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-yellow-500">Inner layout</h2>
      {children}
      <h3>this is a lay out for with auth</h3>
    </div>
  );
}
