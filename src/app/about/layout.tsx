export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed right-0 bg-gray-800 top-10 z-10 h-screen w-60">
        <ul className="text-white py-5 px-5">
          <li>Home</li>
          <li>Profile</li>
          <li>About</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
