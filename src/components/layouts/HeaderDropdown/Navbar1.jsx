import { useState } from "react";
import { navLinks } from "../links";
import { IoChevronDownOutline } from "react-icons/io5";

// links  ====  [ dropdown , no DropDown ] ......................
// DropDown Under Link ----  ......................
// All Screen ----  ......................
// Dynamic Screen

// dropdown ==== [ subdropDown -- Not ]
// left beside dropdown.

export default function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDownTabs, setDropDownTabs] = useState(false);

  const handelDropDown = (navbarIndex) => {
    const objectToShow = navLinks[navbarIndex].dropdown;
    setShowDropDown((prev) => !prev);
    setDropDownTabs(objectToShow);
  };

  return (
    <>
      <nav className="p-3 h-[70px] bg-slate-800 flex justify-center items-center relative">
        <ul className="flex justify-center items-center gap-5">
          {navLinks?.map((el, index) => {
            return (
              <>
                {el?.dropdown ? (
                  <li
                    className=" text-gray-200 flex justify-center gap-1 items-center"
                    key={index}
                  >
                    <span> {el?.name} </span>
                    <span className="" onClick={() => handelDropDown(index)}>
                      <IoChevronDownOutline />
                    </span>
                  </li>
                ) : (
                  <li className=" text-gray-200" key={index}>
                    {el?.name}
                  </li>
                )}
              </>
            );
          })}
        </ul>

        {showDropDown && (
          <>
            <div className="absolute top-[70px] left-0 right-0 h-[200px] bg-slate-600 flex flex-col p-5">
              {dropDownTabs?.map((el, index) => (
                <span key={index} className="text-white">
                  {el?.name}
                </span>
              ))}
            </div>
          </>
        )}
      </nav>
    </>
  );
}
