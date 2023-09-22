import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes, // Use Routes instead of Switch
} from "react-router-dom"; // Import Routes and Link

import axios from "axios";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={ // Use 'element' instead of 'component'
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route
            path="/quiz"
            element={ // Use 'element' instead of 'component'
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route
            path="/result"
            element={ // Use 'element' instead of 'component'
              <Result name={name} score={score} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
