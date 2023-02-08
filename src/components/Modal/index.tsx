import { useEffect } from "react";

interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}
const Modal = ({ children, isOpen, toggle }: Props) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center "
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={toggle}
        >
          <div
            className="rounded-xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
