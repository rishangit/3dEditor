import './App.scss';
import { ThemeProvider } from 'styled-components';
import theme from './system/styled/theme';
import EditorCanvas from './editor/editorCanvas';
import GlobalStyle from './system/styled/globalStyles';
import obj from './object.json'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className="App">
        <EditorCanvas obj={obj}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
