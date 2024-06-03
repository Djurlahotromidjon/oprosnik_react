import { useEffect, useState } from 'react';
import { QuestionType } from "../../types/types";


function useButton() {

    const useContent: QuestionType[] = [
        {count: 0, id: 1, question: 'Вопрос с вариантами ответа в выпадающем списке?', type: 'SELECT', answers: [
            'Ответ 1', 'Ответ 2', 'Ответ 3'
        ]
        },
        {count: 0, id: 2, question: 'Вопрос с выбором одного варианта ответа?', type: 'RADIO', answers: [
            'Ответ 1',  'Ответ 2', 'Ответ 3'
            ]
        },
        {count: 0, id: 3, question: 'Вопрос с выбором нескольких вариантов ответа?', type: 'CHECKBOX', answers: [
                'Ответ 1',  'Ответ 2', 'Ответ 3'
            ]
        },
        {count: 0, id: 4, question: 'Вопрос с коротким ответом?', type: 'TEXT'},
        {count: 0, id: 5, question: 'Вопрос с развёрнутым ответом?', type: 'LONG_TEXT'},
        {count: 0, id: 6, question: 'ОПРОС ЗАВЕРШЕН!', type: 'END'}
    ]

    const [objArr, setNextCount] = useState(useContent)
    const [stage, setStage] = useState<number>(1);

    useEffect(() => {
        const savedStage = localStorage.getItem('surveyStage');
        if (savedStage) {
            setStage(parseInt(savedStage));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('surveyStage', stage.toString());
    }, [stage]);

    function setNextStage() {
        if(stage <= useContent.length - 1) {
            setStage(prev => prev + 1)
        }
    }

    function setBackStage() {
        if(stage > 1) {
            setStage(prev => prev - 1);
        }
    }

    return { objArr, setNextStage, setBackStage, stage }
}

export default useButton
