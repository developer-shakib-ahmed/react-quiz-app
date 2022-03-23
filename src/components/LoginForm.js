import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Error from './Error';
import Form from './Form';
import TextInput from './TextInput';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const [error, setError] = useState('');
  const [errorType, setErrorType] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await login(email, password);
      setError('Login Successful');
      setErrorType('info');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setErrorType('danger');
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        required
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <TextInput
        required
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        type="password"
      />

      <p>
        <Button disabled={loading} type="submit" text="Login" className="btn-orange" />
      </p>

      {error && <Error text={error} type={errorType} />}

      <p>
        Dont have an account? <Link to="/signup">Signup</Link> now.
      </p>
    </Form>
  );
}
