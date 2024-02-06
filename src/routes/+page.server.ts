import type { PageServerLoad } from "./$types"
import type { Question } from "$types"

const questions: Question[] = [
    {
        title: "Bewerten Sie folgende Aussagen zu Zahlendarstellungen",
        questions: [
            {
                text: "Die Binärdarstellung der Dezimalzahl 106 ist 111010.",
                isCorrect: false
            }, {
                text: "Die Hexadezimaldarstellung der Dezimalzahl 106 ist 6A.",
                isCorrect: false
            }, {
                text: "Die Binärdarstellung der Dezimalzahl 106 benötigt 7 Stellen.",
                isCorrect: false
            }, {
                text: "Die Hexadezimalzahl A6 entspricht der Dezimalzahl 167.",
                isCorrect: false
            }
        ]
    }
]

function getQuestions(): Question[] {
    return questions
}

export const load: PageServerLoad = (): { questions: Question[] } => {
    return {
        questions: getQuestions()
    }
}