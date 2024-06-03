import React, { useEffect, useState } from 'react';
import { AnswerType, InputType, QuestionType } from "../../types/types";
import NextButton from "../buttons/NextButton";
import { CheckboxInput, EndInput, LongTextInput, RadioInput, SelectInput, TextInput } from "./components";

type QuestionsBlockType = { questions: QuestionType[], stage: number, setNextStage: () => void, setBackStage: () => void }

export default function QuestionsBlock({ questions, stage, setNextStage, setBackStage }: QuestionsBlockType) {

    const initialStage = localStorage.getItem('surveyStage') ? parseInt(localStorage.getItem('surveyStage') || '1') : 1;
    const initialAnswers = localStorage.getItem('surveyAnswers') ? JSON.parse(localStorage.getItem('surveyAnswers') || '{}') : {};

    const [answer, setAnswer] = useState<AnswerType>({ value: [''], stage: initialStage });
    const [currentQuestion, setCurrentQuestion] = useState<QuestionType | undefined>(questions.find(item => item.id === initialStage));
    const [answerList, setAnswerList] = useState<{ [key: number]: AnswerType }>(initialAnswers);

    useEffect(() => {
        setCurrentQuestion(questions.find(item => item.id === stage));
        setAnswer(answerList[stage] || { value: [''], stage });
    }, [questions, stage, answerList]);

    useEffect(() => {
        localStorage.setItem('surveyStage', answer.stage.toString());
        localStorage.setItem('surveyAnswers', JSON.stringify(answerList));
    }, [answer, answerList]);

    function renderStage(inputType: keyof typeof InputType) {
        if (!currentQuestion) {
            return (
                <h1>Ошибка при выборе теста. Попробуйте перезагрузить страничку.</h1>
            );
        }

        const inputLayouts = {
            'TEXT': TextInput,
            'LONG_TEXT': LongTextInput,
            'CHECKBOX': CheckboxInput,
            'RADIO': RadioInput,
            'SELECT': SelectInput,
            'END': EndInput
        };

        const InputComponent = inputLayouts[inputType];
        return <InputComponent setAnswer={setAnswer} answer={answer} currentQuestion={currentQuestion} />;
    }

    if (!currentQuestion) {
        return null;
    }

    function goToNext(info: AnswerType) {
        setAnswerList(prev => ({
            ...prev,
            [stage]: info
        }));

        setAnswer({ value: [''], stage: stage + 1 });
        setNextStage();
    }

    function goToBack() {
        setBackStage();
    }

    return (
        <div className='questionBlock'>
            <h1>{currentQuestion.question}</h1>
            <div className='detailedAnswer'>
                {renderStage(currentQuestion.type)}
            </div>
            

            <div className='btnContainer'>
                {(stage > 1) && <NextButton option={goToBack} lable="< НАЗАД" />}
                {stage <= questions.length - 1 && <NextButton disabled={!(!!answer.value[0]?.length)} option={() => goToNext(answer)} lable="ДАЛЕЕ >" />}
            </div>
        </div>
    )
}
