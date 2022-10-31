import Todo from './components/Todo';


function App() {
  return (
   <div>
    <h1>To-Dos</h1>
    <Todo text='Check out Props' />
    <Todo text='And Hooks too' />
    <Todo text='Super good' />
   </div>
  );
}

export default App;
