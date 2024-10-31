import { motion } from "framer-motion";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from "react";

export default function DesktopMenu({ link }) {
  const checkSubMenu = link?.subMenu?.length > 0;
  const [isHover, setIsHover] = useState(false);

  const handelToggleHover = () => {
    setIsHover((prev) => !prev);
  };

  // ------------------Animate------------------
  const submenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      display: "none",
    },
  };

  return (
    <>
      <motion.li
        className="group/link"
        onHoverStart={handelToggleHover}
        onHoverEnd={handelToggleHover}
      >
        <div className="flex justify-center items-center gap-1">
          {link?.name}
          {checkSubMenu && (
            <>
              <IoChevronDownOutline
                size={20}
                className="group-hover/link:rotate-180 duration-200 "
              />
            </>
          )}
        </div>
        {checkSubMenu && (
          <motion.div
            initial={"exit"}
            animate={isHover ? "enter" : "exit"}
            variants={submenuAnimate}
            className="absolute top-[82px] rounded-md p-2 flex flex-col  bg-white/[0.05] origin-[50%_-170px] backdrop-blur "
          >
            <div className="">
              {link?.subMenu?.map((el, index) => (
                <div key={index} className="mb-2">
                  <div className="flex gap-5 group/iconBox">
                    <div className="p-2 w-fit bg-white/5 rounded-md group-hover/iconBox:bg-white duration-300">
                      {el?.icon && <el.icon />}
                    </div>
                    <div>
                      <h6 className="font-semibold"> {el?.name} </h6>
                      <p className="text-gray-500 text-sm"> {el?.desc} </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.li>
    </>
  );
}

//
