export type EventType = React.ChangeEvent<HTMLInputElement>

export type AnswerType = {
    value: string[],
    stage: number,
}

export enum InputType {
    TEXT = 'text',
    LONG_TEXT = 'long_text',
    CHECKBOX = 'checkbox',
    RADIO = 'radio',
    SELECT = 'select',
    END = 'end'
}

export type QuestionType = {
    count: number,
    id: number,
    question: string,
    type: keyof typeof InputType,
    answers?: string[]
}
