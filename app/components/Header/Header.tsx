import Search from "../Search/Search";

function Header() {
  return (
    <header
      className="flex pt-20 justify-center w-full h-80 bg-[url('/header-bg.png')] bg-center bg-no-repeat bg-cover"
    >
      <div className="flex flex-col items-center gap-4 w-full font-semibold">
        <h1 className="text-white text-3xl">IP Address Tracker</h1>
        <Search />
      </div>
    </header>
  );
}

export default Header;
