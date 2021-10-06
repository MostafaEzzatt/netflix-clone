import { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import questionsList from "../Data/questions";
import Mail from "./Mail";

function Question() {
  const [nowOpen, setNowOpen] = useState(false);

  return (
    <div className="container section-border">
      <section className="question flex f-ai-c">
        <h1 className="question__title t-center">Frequently Asked Questions</h1>
        <ul className="question__list">
          {questionsList.map((q) => {
            return (
              <QItem
                id={q.id}
                title={q.title}
                content={q.content}
                nowOpen={nowOpen}
                setNowOpen={setNowOpen}
              />
            );
          })}
        </ul>
        <Mail />
      </section>
    </div>
  );
}

const QItem = ({ id, title, content, nowOpen, setNowOpen }) => {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = (i) => {
    if (isOpen == i) {
      setNowOpen(false);
      return setIsOpen(null);
    }

    setNowOpen(i);
    setIsOpen(i);
  };

  useEffect(() => {
    if (nowOpen != isOpen) {
      setIsOpen(null);
    }
  });
  return (
    <>
      <li className="question__list__item">
        <button
          className="question__list__item__title flex f-jc-b"
          onClick={() => toggle(id)}
        >
          {title}
          {isOpen === id ? <AiOutlineClose /> : <AiOutlinePlus />}
        </button>
        <div
          className={
            "question__list__item__content" +
            (isOpen === id ? " open" : " close")
          }
        >
          {content.map((c) => {
            return <p>{c}</p>;
          })}
        </div>
      </li>
    </>
  );
};

export default Question;
