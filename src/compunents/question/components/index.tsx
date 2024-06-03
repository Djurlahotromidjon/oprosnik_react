import { QuestionType } from "../../../types/types";
import { handleCheckboxChange, handleRadioChange, handleSelectChange, handleTextChange } from "../helpers";

export const TextInput = ({ currentQuestion, answer, setAnswer }: { currentQuestion: QuestionType, answer: { value: string[], stage: number }, setAnswer: React.Dispatch<React.SetStateAction<{ value: string[]; stage: number }>> }) => (
    <input type='text' onChange={(e) => handleTextChange(e, currentQuestion, setAnswer)} value={answer.value[0] || ''} />
);

export const LongTextInput = ({ currentQuestion, answer, setAnswer }: { currentQuestion: QuestionType, answer: { value: string[], stage: number }, setAnswer: React.Dispatch<React.SetStateAction<{ value: string[]; stage: number }>> }) => (
    <textarea className={'detailedAnswer'} onChange={(e) => handleTextChange(e, currentQuestion, setAnswer)} value={answer.value[0] || ''} />
);

export const CheckboxInput = ({ currentQuestion, answer, setAnswer }: { currentQuestion: QuestionType, answer: { value: string[], stage: number }, setAnswer: React.Dispatch<React.SetStateAction<{ value: string[]; stage: number }>> }) => (
    <div>
        {currentQuestion.answers?.map((item, index) => (
            <div key={index}>
                <label htmlFor={`checkbox-${index}`}>{item}</label>
                <input
                    checked={answer.value.some(ans => ans === item)}
                    onChange={(e) => handleCheckboxChange(e, currentQuestion, setAnswer, item)}
                    id={`checkbox-${index}`}
                    type='checkbox'
                />
            </div>
        ))}
    </div>
);

export const RadioInput = ({ currentQuestion, answer, setAnswer }: { currentQuestion: QuestionType, answer: { value: string[], stage: number }, setAnswer: React.Dispatch<React.SetStateAction<{ value: string[]; stage: number }>> }) => (
    <div>
        {currentQuestion.answers?.map((item, index) => (
            <div key={index}>
                <label htmlFor={`radio-${index}`}>{item}</label>
                <input
                    onChange={(e) => handleRadioChange(e, currentQuestion, setAnswer, item)}
                    id={`radio-${index}`}
                    type='radio'
                    name='radio-group'
                    checked={answer.value[0] === item}
                />
            </div>
        ))}
    </div>
);

export const SelectInput = ({ currentQuestion, answer, setAnswer }: { currentQuestion: QuestionType, answer: { value: string[], stage: number }, setAnswer: React.Dispatch<React.SetStateAction<{ value: string[]; stage: number }>> }) => (
    <select onChange={(e) => handleSelectChange(e, currentQuestion, setAnswer)} value={answer.value[0] || ''}>
        <option value="">-- Выберите ответ --</option>
        {currentQuestion.answers?.map((item, index) => (
            <option key={index} value={item}>{item}</option>
        ))}
    </select>
);

export const EndInput = ({ currentQuestion, answer, setAnswer }: { currentQuestion: QuestionType, answer: { value: string[], stage: number }, setAnswer: React.Dispatch<React.SetStateAction<{ value: string[]; stage: number }>> }) => null;
