import React from 'react';
import './App.css';
import { Main } from './components/main';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <Main
        items={[
          { name: 'Afghanistan', value: 'Afghanistan' },
          { name: 'Albania', value: 'Albania' },
        ]}
        allowParsing={{
          delimiter: ',',
        }}
        suggestions={[
          'Afghanistan',
          'Albania',
          'Algeria',
          'Andorra',
          'Angola',
          'Anguilla',
          'Antigua &amp; Barbuda',
          'Argentina',
          'Armenia',
          'Aruba',
        ]}
        placeholder=""
      />
    </div>
  );
}

export default App;
