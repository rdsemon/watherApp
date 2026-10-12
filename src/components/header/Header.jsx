import HeaderModal from "./HeaderModal";
import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";
function Header() {
  return (
    <header class="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav class="container flex items-center justify-between py-6">
        <Logo />
        <div class="flex items-center gap-4 relative">
          <HeaderSearch />
          <div class="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src="./assets/heart.svg" alt="" />
            <span>Favourite Locations</span>
          </div>

          <HeaderModal />
        </div>
      </nav>
    </header>
  );
}

export default Header;
