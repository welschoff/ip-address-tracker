import Search from "../Search/Search";

function Header() {
  return (
    <header
      className="flex items-center justify-center w-full min-h-70 bg-[url('/header-bg.png')] bg-center bg-no-repeat bg-cover"
    >
      <div className="flex flex-col items-center gap-4 w-full font-semibold">
        <h1 className="text-white text-3xl">IP Address Tracker</h1>
        <Search />
      </div>
    </header>
  );
}

export default Header;
