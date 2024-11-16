import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/contactPage';
import Form from '../src/components/form';
import  NotFound from '../src/pages/404NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path='/form' element={<Form />} />
        <Route path= '*' element= {<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;

