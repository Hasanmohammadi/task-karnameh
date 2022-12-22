import { useState } from "react";
import useFetchData from "../../../helpers/useFetchData";

interface AddQuestionModalI {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRefetch?: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddQuestionModal: React.FC<AddQuestionModalI> = ({
  setOpen,
  setRefetch,
}) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onSubmit = async () => {
    setOpen(false);
    await fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image:
          "https://news-cdn.varzesh3.com/pictures/2022/12/22/B/h0ylbeua.jpg?w=450",
        name: "Ali",
        title: title,
        question_text: text,
        date: "1400-02-15",
        hour: "23:52",
        answers: [],
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
    <div className="w-[700px] m-auto rounded-lg">
      <div className="w-full bg-white py-5 flex justify-between rounded-t-lg px-6">
        <span className="font-extrabold text-base">ایجاد سوال جدید</span>
        <span
          onClick={() => setOpen(false)}
          className="font-semibold cursor-pointer text-xl"
        >
          X
        </span>
      </div>
      <div className="bg-[#F9F9F9] h-full w-full px-6 pt-5">
        <p>موضوع</p>
        <input
          className="mt-3 w-full h-11 rounded-lg px-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="mt-4">متن سوال</p>
        <textarea
          className="w-full h-52 mt-4 rounded-lg px-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-end mt-10 pb-10 flex-wrap gap-12">
          <button className="text-green-600" onClick={() => setOpen(false)}>
            انصراف
          </button>
          <button
            className="py-2 px-5 bg-green-600 text-white rounded-lg"
            onClick={onSubmit}
          >
            ایجاد سوال
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionModal;
