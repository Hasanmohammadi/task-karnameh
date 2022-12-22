interface ModalI {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}
const Modal: React.FC<ModalI> = ({ open, setOpen, children }) => {
  return (
    <>
      {!open && null}
      {open && (
        <div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center flex-col">
          <div className="z-10">{children}</div>
          <div className="fixed top-0 right-0 left-0 bottom-0 z-0 bg-black opacity-60"></div>
        </div>
      )}
    </>
  );
};
export default Modal;
