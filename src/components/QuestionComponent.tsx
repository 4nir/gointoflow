import React from 'react'

function QuestionComponent(props: any) {
    return (
        <div className="Question-box">
           { props.questionString } 
        </div>
    )
}

export default QuestionComponent
