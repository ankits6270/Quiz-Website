import { CircularProgress } from "@mui/material"; // Import CircularProgress from @mui/material
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (questions && questions.length > 0) {
      setOptions(
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
      );
      setLoading(false); // Set loading to false when questions are available
    }
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {loading ? ( // Display loading indicator
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      ) : questions ? ( // Check if questions are available
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>Score: {score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
};

export default Quiz;
