
import './App.css';
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Card from './component/Card'
import data from './component/data'

function App() {
  const cardData=data.map(item=>
    <Card key={item.id}
    {...item}
    />
)
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <section className="card-list">
        {cardData}
        </section>
        
    </div>
  );
}

export default App;
