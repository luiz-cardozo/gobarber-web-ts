import React from 'react';
import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn';

import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToasContainer';

const App: React.FC = () => 
<>
  <AuthProvider>
    <SignIn />
    <ToastContainer />
  </AuthProvider>
  <GlobalStyle /> 
</>
export default App;
