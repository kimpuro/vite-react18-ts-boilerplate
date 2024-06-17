import mrEggSushi from '@assets/icons/mr-egg-sushi-trans.png';
import './styles/App.css';

function App() {
  return (
    <>
      <div className="w-dvw h-dvh flex flex-col justify-center items-center">
        <div className="w-40 h-40 animate-spin">
          <a href="https://github.com/kimpuro" target="_blank">
            <img src={mrEggSushi} className="mr-egg-sushi" alt="mr-egg-sushi" />
          </a>
        </div>
        <h1 className="mb-2">Vite</h1>
        <h1 className="mb-2">React</h1>
        <h1 className="mb-2">Tailwind CSS</h1>
      </div>
    </>
  );
}

export default App;
