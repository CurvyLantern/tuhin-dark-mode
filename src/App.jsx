import Basic from './Basic';
import Toggle from './Toggle';
import CheckDarkMode from './CheckDarkMode';

function App() {
  return (
    <div>
      <CheckDarkMode></CheckDarkMode>
      <div>
        <Toggle></Toggle>
      </div>
      <Basic></Basic>
    </div>
  );
}

export default App;
