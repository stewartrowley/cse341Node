
import ContactsApi from './api/ContactsApi';
import CreateContact from './components/CreateContact';

function App() {

  return (
    <div className="App">
      <ContactsApi/>
      <CreateContact />
    </div>
  );
}

export default App;
