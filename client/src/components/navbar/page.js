import Link from "next/link";
const Navbar = () => {
  return (
    <div className=" bg-slate-200">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/">
          <h1 className=" font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/signin">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
