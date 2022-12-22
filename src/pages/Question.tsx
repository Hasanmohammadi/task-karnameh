import QuestionCard from "../components/Cards/question/QuestionCard";
import HeaderCP from "../components/Header/Header";
import useFetchData from "../helpers/useFetchData";
import { PlusIcon } from "../icons/icons";
import { QuestionI } from "../interfaces/interfaces";

const Question = () => {
  const {
    data,
    loading,
    setRefetch,
  }: {
    data: QuestionI[];
    loading: boolean;
    setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
  } = useFetchData({
    method: "GET",
    url: "http://localhost:3000/questions",
  });

  return (
    <div>
      <HeaderCP
        title="لیست سوالات"
        userInfo={{
          name: "الناز شاکردوست",
          image:
            "https://news-cdn.varzesh3.com/pictures/2022/12/22/B/h0ylbeua.jpg?w=450",
        }}
        btnText={
          <div className="flex">
            <span className="self-center ml-3">{PlusIcon}</span>
            <span>سوال جدید</span>
          </div>
        }
        setRefetch={setRefetch}
      />
      {loading && <h1>Loading...</h1>}
      {!loading &&
        data?.map((question: QuestionI) => (
          <QuestionCard
            key={question.id}
            id={question.id}
            className="mt-8"
            image={question?.image}
            title={question?.title}
            time={question?.hour}
            answersNumber={question?.answers?.length}
            date={question?.date}
            questionText={question?.question_text}
          />
        ))}
    </div>
  );
};

export default Question;
