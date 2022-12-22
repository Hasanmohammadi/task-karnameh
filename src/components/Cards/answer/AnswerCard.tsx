import { happyIcons, unhappyIcons } from "../../../icons/icons";

interface AnswerCardI {
  time: string;
  date: string;
  image: string;
  title: string;
  className?: string;
  hasFooter?: boolean;
  questionText: string;
  dislikeNumber: number;
}

const AnswerCard: React.FC<AnswerCardI> = ({
  date,
  time,
  title,
  image,
  className,
  questionText,
  dislikeNumber,
  hasFooter = true,
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
          <div className="mr-12 text-xs font-bold text-gray-400 flex flex-wrap gap-10">
            <div className="flex">
              <span className="ml-1">{happyIcons("#66CB9F")}</span>
              <span className="self-center">{dislikeNumber}</span>
            </div>
            <div className="flex">
              <span className="ml-1">{unhappyIcons("#9CAEBB")}</span>
              <span className="self-center">{dislikeNumber}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-4 bg-[#F9F9F9] shadow-md rounded-lg">
        <p>{questionText}</p>
        {hasFooter && (
          <div className="flex justify-end flex-wrap gap-3">
            <button className="border-gray-300 text-green-600 rounded-lg border px-2 py-2 text-xs font-bold mt-4 flex flex-wrap gap-2">
              <span>{happyIcons("#66CB9F")}</span>
              پاسخ خوب بود
            </button>
            <button className="border-gray-300 text-red-500 rounded-lg border px-2 py-2 text-xs font-bold mt-4 flex flex-wrap gap-2">
              <span>{unhappyIcons("#F16063")}</span>
              پاسخ خوب نبود
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnswerCard;
