// import React, { useState } from 'react';

// interface LoginFormState {
//   username: string;
//   password: string;
// }

// const initialFormState: LoginFormState = {
//   username: '',
//   password: '',
// };

// const Login: React.FC = () => {
//   const [formData, setFormData] = useState<LoginFormState>(initialFormState);

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     console.log('Anmeldedaten:', formData);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Benutzername:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Passwort:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit">Anmelden</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
