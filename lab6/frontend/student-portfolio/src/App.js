import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1> Student Portfolio </h1>

      <AddStudent />
      <ViewStudents />
    </div>
  );
}

export default App;