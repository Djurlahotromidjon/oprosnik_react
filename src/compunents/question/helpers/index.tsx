import React from "react";
import { QuestionType } from "../../../types/types";

export const handleTextChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, currentQuestion: QuestionType, setAnswer: React.Dispatch<React.SetStateAction<{ value: string[]; stage: number }>>) => {
    setAnswer(prev => ({ ...prev, value: [e.target.value] }));
};

export const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, currentQuestion: QuestionType, setAnswer: React.Dispatch<React.SetStateAction<{ value: string[]; stage: number }>>, answer: string) => {
    setAnswer(prev => {
        const copy = { ...prev };
        if (e.target.checked) {
            if (!copy.value.includes(answer)) {
                copy.value.push(answer);
            }
        } else {
            copy.value = copy.value.filter(item => item !== answer);
        }

        if (prev.value[0] === '') {
            copy.value.shift();
        }

        return copy;
    });
};

export const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>, currentQuestion: QuestionType, setAnswer: React.Dispatch<React.SetStateAction<{ value: string[]; stage: number }>>, answer: string) => {
    setAnswer(prev => ({ ...prev, value: [answer] }));
};

export const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, currentQuestion: QuestionType, setAnswer: React.Dispatch<React.SetStateAction<{ value: string[]; stage: number }>>) => {
    setAnswer(prev => ({ ...prev, value: [e.target.value] }));
};
