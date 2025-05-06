"use client";
import { UpArrowIcon } from "@/public/icon/icons";
import React, { useState } from "react";

const Support = () => {
  const questionList: IQuestionItemProps[] = [
    {
      question: "How does purchasing on Apps Store benefit your players?",
      answer:
        "In Apps Store, players can purchase game items at lower prices, find some special offers, and claim free rewards. Moreover, there’s a variety of payment options available, allowing your players to choose the most convenient one for their purchases.",
    },
    {
      question: "Is it safe to purchase on Apps Store?",
      answer:
        "Web Store which refers to the highest level of compliance with the Payment Card Industry Data Security Standard. Therefore, all payments made on Web Shop are completely secure.",
    },
    {
      question: "What payment methods does Apps Store support?",
      answer:
        "Web Store currently accepts payments via most popular credit/debit card brands and digital wallets. All available payment options can be viewed on the payment page.",
    },
    {
      question: "Who can help your players with purchase issues?",
      answer: "Who can help your players with purchase issues?",
    },
  ];
  return (
    <div id="support" className="pb-[124px] px-[64px] flex flex-col gap-3">
      {questionList.map((item, index) => (
        <QuestionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

interface IQuestionItemProps {
  question: string;
  answer: string;
}

const QuestionItem = ({ answer, question }: IQuestionItemProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleToggleQuestion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="bg-dark-red px-8 py-3 border border-alternative-gray">
      <div
        onClick={handleToggleQuestion}
        className="py-5 flex gap-6 items-center w-full cursor-pointer"
      >
        <div className="p-2">
          <UpArrowIcon
            className={`duration-150 ${isExpanded ? "" : "rotate-180"}`}
          />
        </div>
        <div className="text-2xl font-bold">{question}</div>
      </div>
      {isExpanded && <div className="py-5">{answer}</div>}
    </div>
  );
};

export default Support;
