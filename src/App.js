import TinderContainer from './components/TinderContainer';
import './App.css';

function App() {

  const cards = [
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#55ccff'
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#e8e8e8'
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: '#0a043c'
    },
    {
      image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
      color: 'black'
    }
  ];

  return (
    <div className="App">
      <div className="left-container">
        <h1>Hi</h1>
      </div>
      <div className="right-container">
        <TinderContainer />
      </div>
    </div>
  );
}

export default App;
