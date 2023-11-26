import './App.css';
import ComponsedMail from './Components/ComponsedMail';
import EnvSelector from './Components/EnvSelector';
import Form from './Components/Form';
import Header from './Components/Header';
import MailComponser from './Components/MailComponser';

function App() {
  return (
    <div className="App">
      <MailComponser/>
      {/* <Header/>
      <EnvSelector/>
      <Form/>
      <ComponsedMail/> */}
    </div>
  );
}

export default App;
