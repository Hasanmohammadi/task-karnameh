import AnswerCard from "../components/Cards/answer/AnswerCard";
import QuestionCard from "../components/Cards/question/QuestionCard";
import HeaderCP from "../components/Header/Header";
import { PlusIcon } from "../icons/icons";

const Question = () => {
  return (
    <div>
      <HeaderCP
        title="لیست سوالات"
        userInfo={{
          name: "الناز شاکردوست",
          image:
            "https://news-cdn.varzesh3.com/pictures/2022/12/21/A/pxp35lha.jpg?w=450",
        }}
        btnText={
          <div className="flex">
            <span className="self-center ml-3">{PlusIcon}</span>
            <span>سوال جدید</span>
          </div>
        }
      />
      <AnswerCard
        className="mt-8"
        image={
          "https://news-cdn.varzesh3.com/pictures/2022/12/21/A/pxp35lha.jpg?w=450"
        }
        title="مشکل در Auth در React"
        time={"10:52"}
        dislikeNumber={10}
        questionText="هراد دوجو یلکشم هچ اقیقد دینیبب هک متشاذگ مه ور console یجورخ سکع .تساجک زا لکشم منودیمن .هدیم مهب ور error نیا اما مزاسب react وت هداس authentication هی ماوخیم نم مالس"
        date="1401-02-10"
      />
    </div>
  );
};

export default Question;
