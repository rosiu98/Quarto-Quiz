import React, { useRef } from "react";
import styled from "styled-components";

const Questions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & div {
    transition: 0.2s border ease-in-out;
    border-radius: 20px;
    border: 1px solid #b1b1b1;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
    position: relative;

    &:hover {
      font-weight: 600 !important;
    }
  }

  & label {
    font-size: 2rem;
    width: 100%;
  }

  & span {
    transition: 0.2s ease-out;
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: #c4c4c4;
    border-radius: 50%;
  }
`;

const Question = ({ question, setcurrentAnswer, currentAnswer }) => {
  const ref = useRef(null);

  const select = document.querySelectorAll(".select");

  const inputRef = useRef(null);

  const QuestionHanlder = () => {
    setcurrentAnswer("");
    const answer = ref.current.lastChild.textContent;

    if (inputRef.current.checked) {
      select.forEach(
        (item) =>
          (item.style.border = "1px solid #b1b1b1") &&
          (item.childNodes[1].style.backgroundColor = "#c4c4c4") &&
          (item.childNodes[2].style.fontWeight = "normal")
      );

      inputRef.current.parentNode.style.border = "5px solid #f8c76e";

      inputRef.current.nextSibling.style.backgroundColor = "#f8c76e";

      inputRef.current.nextSibling.nextSibling.style.fontWeight = "600";
    }

    setcurrentAnswer(answer);
  };

  return (
    <Questions ref={ref} onClick={QuestionHanlder} question>
      <div className="select">
        <input
          ref={inputRef}
          type="radio"
          name="item"
          id={question}
          value={question}
        />
        <span></span>
        <label htmlFor={question}>{question}</label>
      </div>
    </Questions>
  );
};

export default Question;
