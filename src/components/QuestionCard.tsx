import React from 'react'
import { ButtonWrapper, Wrapper } from './QuestionCard.style'
type props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNum:number;
    totalQuestion:number;
}

const QuestionCard: React.FC<props>=({question, answers, callback, userAnswer, questionNum, totalQuestion})=> {

    
    return (
        <Wrapper>
            <p>
                Question: {questionNum} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={ {__html: question}} />
            <div>
                {answers.map(answer =>(
                    <ButtonWrapper
                            correct = {userAnswer?.correctAnswer === answer}
                            userClicked = {userAnswer?.answer === answer}
                    
                    >
                        <button disabled={userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                        </ButtonWrapper>

                ))}
            </div>
            </Wrapper>
    )
}

export default QuestionCard;
