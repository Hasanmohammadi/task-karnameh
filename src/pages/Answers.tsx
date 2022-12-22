import { useParams } from "react-router-dom";
import AnswerCard from "../components/Cards/answer/AnswerCard";
import QuestionCard from "../components/Cards/question/QuestionCard";
import HeaderCP from "../components/Header/Header";
import useFetchData from "../helpers/useFetchData";
import { PlusIcon } from "../icons/icons";
import { AnswerI } from "../interfaces/interfaces";

const Answers = () => {
  const { id } = useParams();
  const {
    data,
    loading,
    setRefetch,
  }: {
    data: any;
    loading: boolean;
    setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
  } = useFetchData({
    method: "GET",
    url: `http://localhost:3000/questions/${id}`,
  });

  const onLike = async (answerId: number) => {
    const answers = data?.answers?.map((answer: AnswerI) =>
      answer.id === answerId
        ? {
            ...answer,
            feedback: {
              ...answer.feedback,
              positive: ++answer.feedback.positive,
            },
          }
        : answer
    );
    await fetch(`http://localhost:3000/questions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        answers,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setRefetch && setRefetch(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onDislike = async (answerId: number) => {
    const answers = data?.answers?.map((answer: AnswerI) =>
      answer.id === answerId
        ? {
            ...answer,
            feedback: {
              ...answer.feedback,
              negative: ++answer.feedback.negative,
            },
          }
        : answer
    );

    await fetch(`http://localhost:3000/questions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        answers,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setRefetch && setRefetch(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <HeaderCP
        title="جزییات سوال "
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
      {!loading && (
        <div>
          <QuestionCard
            key={data.id}
            id={data.id}
            className="mt-8"
            image={data?.image}
            title={data?.title}
            time={data?.hour}
            answersNumber={data?.answers?.length}
            date={data?.date}
            questionText={data?.question_text}
            hasFooter={false}
          />
          <h1 className="mt-6 font-extrabold text-2xl">پاسخ‌ها</h1>
          {data?.answers?.map((answer: AnswerI) => (
            <AnswerCard
              key={answer.id}
              className="mt-8"
              image={answer?.image}
              title={answer?.title}
              time={answer?.hour}
              dislikeNumber={answer.feedback.negative}
              likeNumber={answer.feedback.positive}
              date={answer?.date}
              answerText={answer?.answer_text}
              onLike={onLike}
              onDislike={onDislike}
              id={answer.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Answers;
