import { useEffect } from "react";
import { taskApi } from "./api/tasks";

function App() {
  useEffect(() => {
    taskApi.getAll().then((tasks) => {
      console.log("Tasks from API:", tasks);
    });
  }, []);

  return (
    <div>
      <h1>TeamBoard</h1>
      <p>Check the console for tasks</p>
    </div>
  );
}

export default App;
