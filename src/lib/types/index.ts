export type Question = MultipleChoiceQuestion | YesNoQuestionBlock

export type MultipleChoiceQuestion = {
    question: string,
    options: MultipleChoiceQuestionOption[]
}

export type MultipleChoiceQuestionOption = {
    text: string,
    isCorrect: boolean
}

export type YesNoQuestionBlock = {
    title: string,
    questions: YesNoQuestion[]
}

export type YesNoQuestion = {
    text: string,
    isCorrect: boolean
}
