import { Link, NavLink } from "react-router-dom";
import { MessageIcon } from "../../../icons/icons";

interface QuestionCardI {
  time: string;
  date: string;
  image: string;
  title: string;
  className?: string;
  hasFooter?: boolean;
  questionText: string;
  answersNumber: number;
  id: number;
}

const QuestionCard: React.FC<QuestionCardI> = ({
  date,
  time,
  title,
  image,
  className,
  questionText,
  answersNumber,
  hasFooter = true,
  id,
}) => {
  return (
    <div className={`rounded-lg border border-gray-300 ${className}`}>
      <div className="flex justify-between bg-white py-3 px-5 rounded-lg ">
        <div className="flex justify-between flex-wrap gap-4">
          <img src={image} alt="profile" className="w-8 h-8 rounded-lg" />
          <p className="text-base font-bold">{title}</p>
        </div>
        <div className="flex items-center">
          <span className="text-xs font-bold">
            <span className="text-gray-400 ml-2  font-normal">ساعت :</span>
            {time}
          </span>
          <span className="px-3 text-gray-300">|</span>
          <span className="text-xs font-bold">
            <span className="text-gray-400 ml-2 text-xs font-normal">
              تاریخ :
            </span>
            {date}
          </span>
          <div className="mr-5 text-xs font-bold text-gray-400 flex">
            <span className="ml-1">{MessageIcon}</span>
            <span className="self-center">{answersNumber}</span>
          </div>
        </div>
      </div>
      <div className="py-5 px-4 bg-[#F9F9F9] shadow-md rounded-lg">
        <p>{questionText}</p>
        {hasFooter && (
          <div className="flex justify-end">
            <Link to={`/${id}`}>
              <button className="border-green-600 text-green-600 rounded-lg border-2 px-2 py-3 text-xs font-bold mt-4">
                مشاهده جزییات
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
