import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/quiz');
        const result = await response.json();
        console.log(result.data);
        setQuiz(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {quiz.length > 0 ? (
        <section className="quizzes">
          {quiz.map(item => (
            <form key={item._id}>
              <p>{item.question}</p>
              {
                item.options.map(ans => (
                  <article>
                    <input key={ans.index} type="radio" id={ans} value={ans}>
                    </input>
                    <label htmlFor={ans}>
                      {ans}
                    </label>
                  </article>

                  // <label
                  //   htmlFor="option1"
                  //   style={
                  //     styles.radioLabel
                  //   }
                  // >
                  //   ReactJS
                  // </label>

                ))
              }
            </form >
          ))
          }
        </section >
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default App
