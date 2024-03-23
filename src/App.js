import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const content = "Welcome";
  const taskList = ["Wake up", "eat food", "Sleep"];
  return (
    <div className="App">
      <Header content={content} />
      <TaskList taskList={taskList} />
    </div>
  );
}

export default App;
