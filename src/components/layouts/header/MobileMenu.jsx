import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export default function MobileMenu({ menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const handelToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const submenuAnimate = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: { height: 0, overflow: "hidden" },
  };

  return (
    <>
      <button className="z-[5000]" onClick={handelToggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? "0%" : "-100%" }}
          className="absolute top-[80px] left-0 right-0 overflow-y-auto backdrop:blur bg-white/[0.05]"
        >
          <motion.ul className="p-4">
            {menus?.map(({ name, subMenu }, index) => {
              const checkSubMenu = subMenu?.length > 0;
              const isClicked = clicked === index;
              return (
                <li
                  key={index}
                  onClick={() => setClicked(isClicked ? null : index)}
                >
                  <div className="flex justify-between items-center gap-x-5 py-2">
                    <span>{name}</span>
                    {checkSubMenu && (
                      <>
                        {isClicked ? (
                          <IoChevronUpOutline
                            size={20}
                            className="group-hover/link:rotate-180 duration-200 "
                          />
                        ) : (
                          <IoChevronDownOutline
                            size={20}
                            className="group-hover/link:rotate-180 duration-200 "
                          />
                        )}
                      </>
                    )}
                  </div>

                  <div className="ml-5 ">
                    <motion.ul
                      initial={""}
                      animate={isClicked ? "enter" : "exit"}
                      variants={submenuAnimate}
                    >
                      {subMenu?.map(({ name, icon: Icon }, i) => (
                        <li
                          key={i}
                          className="group/link flex justify-start items-center gap-2 mb-2"
                        >
                          <span className="p-2 rounded-md bg-gray-800 group-hover/link:bg-gray-600 duration-300">
                            <Icon size={18} />
                          </span>
                          <span className="text-gray-400"> {name} </span>
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>
      )}
    </>
  );
}
