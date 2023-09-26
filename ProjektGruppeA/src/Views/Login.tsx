import React, { useState } from 'react';
import AuthService from '../Services/auth.service';

interface LoginFormState {
  username: string;
  password: string;
}

const initialFormState: LoginFormState = {
  username: '',
  password: '',
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormState>(initialFormState);
  const [error, setError] = useState<string | null>(null);
  const authService = new AuthService();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await authService.authorize(formData.username, formData.password);
      // Hier kannst du zur nächsten Seite oder eine Erfolgsmeldung navigieren
    } catch (error) {
      setError('Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Anmeldeinformationen.');
      console.error('Anmeldefehler:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Benutzername:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Passwort:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Anmelden</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
