export interface FeedbackI {
  negative: number;
  positive: number;
}

export interface AnswerI {
  id: number;
  image: string;
  name: string;
  title: string;
  answer_text: string;
  date: string;
  hour: string;
  feedback: FeedbackI;
}

export interface QuestionI {
  id: number;
  image: string;
  name: string;
  title: string;
  question_text: string;
  date: string;
  hour: string;
  answers: AnswerI[];
}
