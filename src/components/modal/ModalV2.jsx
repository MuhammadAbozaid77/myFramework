// How To Build Modal With Design Pattern
//1- Create Context
//2- Buiild Main Component
//3- Build Childern Components
//4- Tie  Between Main and Children.
// --- Using Clone Element-------  Create An Element Depend On Another Element
// No Event From An Element === Then You Can Pass Props to Children By An Opject
// Usong clone Element
// props Can Go With Your Name Givven
// Function In Clone element Work Direct When the element is children
// Function In Clone element Not Work Direct When the Component is children == Need To Recice it
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";

const ModalContext = createContext({});

export default function ModalV2({ children }) {
  const [openModalStatus, setOpenModalStatus] = useState("");
  const closeWindow = () => setOpenModalStatus("");
  const openWindow = setOpenModalStatus;

  return (
    <ModalContext.Provider value={{ openModalStatus, closeWindow, openWindow }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ openModalName, children }) {
  const { openWindow } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => openWindow(openModalName) });
}

function Window({ children, windowModalName }) {
  const { closeWindow, openModalStatus } = useContext(ModalContext);
  const ref = useRef();

  useEffect(() => {
    const handelClickOutside = (e) => {
      if (ref?.current && !ref?.current?.contains(e.target)) {
        closeWindow();
      }
    };
    document.addEventListener("click", handelClickOutside, true);
    return () => {
      document.removeEventListener("click", handelClickOutside, true);
    };
  }, [closeWindow]);

  if (windowModalName !== openModalStatus) {
    return null;
  }

  return createPortal(
    <>
      <div className="bg-gray-800/80 fixed top-0 left-0  w-full h-screen  backdrop-blur-[.7px] z-[1000] duration-300 transition-all">
        <div
          ref={ref}
          className="p-[40px] fixed top-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2  rounded-lg transition-all"
        >
          <button
            onClick={closeWindow}
            className="absolute top-[15px] right-[15px] border rounded-md bg-red-600 text-white"
          >
            <MdClose size={30} />
          </button>
          <div>{cloneElement(children, { onClick: () => closeWindow() })}</div>
        </div>
      </div>
    </>,
    document.body
  );
}

ModalV2.Open = Open;
ModalV2.Window = Window;
