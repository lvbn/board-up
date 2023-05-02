import { Form } from './form';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { UserProfile } from './profile/user-profile';

export default function AuthApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/new-board-up" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}
