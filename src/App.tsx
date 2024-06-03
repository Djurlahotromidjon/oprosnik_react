import './App.css';
import StatusIndicator from './compunents/undication/StatusIndicator';
import NextButton from './compunents/buttons/NextButton';
import useButton from './compunents/hooks/useButton';
import QuestionsBlock from './compunents/question/QuestionsBlock';


function App() {

  const { objArr, setBackStage, setNextStage, stage } = useButton()


  return (
    <div className="App">
      <h1>Тестирование</h1>
      <StatusIndicator activator={stage} />
      <QuestionsBlock questions={objArr} stage={stage} setNextStage={setNextStage} setBackStage={setBackStage} />
    </div>
  );
}

export default App;
