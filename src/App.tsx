import './styles.css';
import { ClickCounter } from './ClickCounter';

export const App = () => {
  const name = 'Chris';
  return (
    <div>
      <h1>
        React Typescript Starter Template - {process.env.NODE_ENV} -{name}
        {process.env.name}
      </h1>
      <ClickCounter />
    </div>
  );
};
