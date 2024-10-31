import { Menus } from "./../links";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <div>
      <header className="flex justify-center items-center p-5 border-b h-[80px] relative">
        <nav className="flex justify-between items-center font-semibold w-[100%]">
          <div className="">
            <Logo />
          </div>
          <ul className="lg:flex hidden justify-center items-center gap-4">
            {Menus?.map((el, index) => (
              <DesktopMenu link={el} key={index} />
            ))}
          </ul>
          <div className="flex justify-center items-center gap-x-5">
            <button> SignIn </button>
            <div className="lg:hidden block">
              <MobileMenu menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
