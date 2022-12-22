import { useState } from "react";
import { PolygonIcon } from "../../icons/icons";
import Modal from "../modal/Modal";
import AddQuestionModal from "./components/AddQuestionModal";

interface HeaderCPI {
  title: string;
  userInfo: {
    name: string;
    image: string;
  };
  btnText: string | React.ReactNode;
  className?: string;
  setRefetch?: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderCP: React.FC<HeaderCPI> = ({
  title,
  userInfo,
  btnText,
  className,
  setRefetch,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal open={isOpen} setOpen={setIsOpen}>
        <AddQuestionModal setOpen={setIsOpen} setRefetch={setRefetch} />
      </Modal>
      <div
        className={`w-full bg-white flex justify-between px-14 py-4 items-center ${className}`}
      >
        <p className="font-extrabold text-base">{title}</p>
        <div className="flex justify-between items-center flex-wrap gap-10">
          <button
            className="bg-green-600 px-5 py-3 rounded-md text-white font-bold text-xs"
            onClick={() => setIsOpen(true)}
          >
            {btnText}
          </button>
          <div className="flex flex-wrap gap-3">
            <img
              alt="profile"
              src={userInfo.image}
              className="w-8 h-8 rounded-full"
            />
            <p className="self-center font-bold text-sm">{userInfo.name}</p>
            <span className="self-center">{PolygonIcon}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCP;
