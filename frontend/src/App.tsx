import './App.css';
import { Button } from './components/ui/button';

import { ThemeToggle } from './ThemeToggle';

function App() {
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">Custom Themed App</h1>
        <Button className="mt-4">I use the theme!</Button>
        <ThemeToggle />
      </div>
    </>
  );
}

export default App;
