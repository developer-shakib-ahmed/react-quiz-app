import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Error from './Error';
import Form from './Form';
import TextInput from './TextInput';

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState();

  const [error, setError] = useState('');
  const [errorType, setErrorType] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Password dont match with confirm password!');
      setErrorType('danger');
    } else {
      try {
        setLoading(true);
        await signup(email, password, username);
        setError('Form submitted successful...');
        setErrorType('info');
      } catch (err) {
        setLoading(false);
        setError(err.message);
        setErrorType('danger');
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        required
      />

      <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />

      <TextInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter your password"
        required
      />

      <TextInput
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        placeholder="Confirm your password"
        required
      />

      <Checkbox
        value={agree}
        onChange={(e) => setAgree(e.target.checked)}
        label="I agree to the Terms & Conditions"
        required
      />

      <p>
        <Button disabled={loading} type="submit" text="Submit Now" className="btn-orange" />
      </p>

      {error && <Error text={error} type={errorType} />}

      <p>
        Already have an account? <Link to="/login">Login</Link> now.
      </p>
    </Form>
  );
}
