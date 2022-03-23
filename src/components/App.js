import { Route, Routes } from 'react-router-dom';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Quiz from '../pages/Quiz';
import Result from '../pages/Result';
import Signup from '../pages/Signup';
import '../styles/App.css';
import Layout from './Layout';
import PrivateOutlet from './PrivateOutlet';
import PublicOutlet from './PublicOutlet';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Error404 />} />

        <Route path="/" element={<Home />} />

        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="result/:id" element={<Result />} />
          <Route path="quiz/:id" element={<Quiz />} />
        </Route>

        <Route path="/*" element={<PublicOutlet />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
