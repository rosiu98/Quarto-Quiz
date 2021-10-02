import { motion } from "framer-motion";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "../components/Box";
import { Image } from "../components/BoxImage";
import Popup from "../components/Popup";
import Question from "../components/Question";
import Title from "../components/Title";

const questions = [
  {
    id: 1,
    title: "Question #1",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea.",
    image: "/img/tortila.png",
    question: ["Hamburger", "Kebab", "Pizza"],
    answer: "Kebab",
  },
  {
    id: 2,
    title: "Question #2",
    description:
      "How many eggs was made into the biggest scrambled eggs in the world?",
    image: "/img/jajecznica.png",
    question: ["3 000 eggs", "15 000 eggs", "30 000 eggs"],
    answer: "30 000 eggs",
  },
  {
    id: 3,
    title: "Question #3",
    description: "How much is measured by the largest pineapple in the world?",
    image: "/img/annanas.png",
    question: ["20cm", "35cm", "42cm"],
    answer: "35cm",
  },
];

const QuestionContainer = styled.div`
  padding: 5rem 0 3.5rem 4rem;
  display: flex;
  flex-direction: column;
`;

const QuestionsBox = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 2rem;
`;

const QuestionButton = styled(Link)`
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem 3.5rem;
  border-radius: 4rem;
  color: white;
  font-family: "Titan One", cursive;
  font-size: 2.4rem;
  align-self: end;
  margin-right: 4.5rem;
  margin-top: 2.5rem;
`;

const QuestionPage = ({ match }) => {
  const id = match.params.id;

  const dispatch = useDispatch();

  const score = useSelector((state) => state.score);

  const [currentAnswer, setcurrentAnswer] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    setcurrentAnswer("");
  }, [setcurrentAnswer]);

  const select = document.querySelectorAll(".select");

  const nextHandler = () => {
    if (currentAnswer === questions[id].answer) {
      dispatch({ type: "INCREASE" });
    }

    setcurrentAnswer("");
    select.forEach(
      (item) =>
        (item.style.border = "1px solid #b1b1b1") &&
        (item.childNodes[1].style.backgroundColor = "#c4c4c4") &&
        (item.childNodes[2].style.fontWeight = "normal")
    );
  };

  const endHandler = (e) => {
    if (currentAnswer === questions[id].answer) {
      dispatch({ type: "INCREASE" });
    }
    e.preventDefault();
    setButtonPopup(true);
  };

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      className={`${buttonPopup ? "unset" : ""}`}
      transition={{ type: "spring", delay: 0.5, stiffness: 50 }}
      exit={{ x: "-80vw", transition: { ease: "easeIn" } }}
    >
      <Title
        title={questions[id].title}
        description={questions[id].description}
      />
      <Box>
        <Image
          animate={{ top: "-20%" }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          src={questions[id].image}
        />
        <QuestionContainer>
          <QuestionsBox>
            {questions[id].question.map((item, index) => (
              <Question
                currentAnswer={currentAnswer}
                setcurrentAnswer={setcurrentAnswer}
                key={index}
                question={item}
              ></Question>
            ))}
          </QuestionsBox>
          {id === "2" ? (
            <>
              <QuestionButton to="/" onClick={endHandler}>
                End
              </QuestionButton>
              <Popup trigger={buttonPopup}>
                <div className="container">
                  <img
                    src="/img/annanas.png"
                    alt="annanas"
                    className="annanas"
                  />
                  <img
                    src="/img/jajecznica.png"
                    alt="jajko"
                    className="jajko"
                  />
                  <img src="/img/tortila.png" alt="tortila" className="kebab" />
                  <div className="title">
                    <h1>Thank You for taking a part of our quiz!</h1>
                  </div>

                  <div className="score">
                    <p>
                      Your Score:{" "}
                      <span
                        style={{ color: `${score > 0 ? "#3ACA37" : "red"}` }}
                      >
                        {score}
                      </span>{" "}
                      / {questions.length}
                    </p>
                  </div>

                  <div className="button-popup">
                    <Link to="/">Try Again</Link>
                  </div>
                </div>
              </Popup>
            </>
          ) : (
            <QuestionButton onClick={nextHandler} to={`/question/${+id + 1}`}>
              Next
            </QuestionButton>
          )}
        </QuestionContainer>
      </Box>
    </motion.div>
  );
};

export default QuestionPage;
