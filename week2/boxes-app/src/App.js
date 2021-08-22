import Card from './components/card'

function App() {
  return (
    <div className="container">
    <Card title="Title 1" subtitle="Sub Title 1" description="Hello World 1!" color="red"/>
    <Card title="Title 2" subtitle="Sub Title 2" description="Hello World 2!" color="orange"/>
    <Card title="Title 3" subtitle="Sub Title 3" description="Hello World 3!" color="yellow"/>
    <Card title="Title 4" subtitle="Sub Title 4" description="Hello World 4!" color="green"/>
    </div>
  );
}

export default App;
