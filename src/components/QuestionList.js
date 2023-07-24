import React, { useEffect, useState } from "react";
import QuestionItem from './QuestionItem'

function QuestionList(props) {

  console.log(props.array)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{props.array}</ul>
    </section>
  );
}

export default QuestionList;
