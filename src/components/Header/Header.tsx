import { PolygonIcon } from "../../icons/icons";

interface HeaderCPI {
  title: string;
  userInfo: {
    name: string;
    image: string;
  };
  btnText: string | React.ReactNode;
  className?: string;
}

const HeaderCP: React.FC<HeaderCPI> = ({
  title,
  userInfo,
  btnText,
  className,
}) => {
  return (
    <div
      className={`w-full bg-white flex justify-between px-14 py-4 items-center ${className}`}
    >
      <p className="font-extrabold text-base">{title}</p>
      <div className="flex justify-between items-center flex-wrap gap-10">
        <button className="bg-green-600 px-5 py-3 rounded-md text-white font-bold text-xs">
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
  );
};

export default HeaderCP;
