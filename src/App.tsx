import 'normalize.css';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './layout/sharedLayout';
import { QuizzesPage } from './pages/QuizzesPage';
import { AddOrEditQuizPage } from './pages/AddOrEditQuizPage';
import { ActiveQuizPage } from './pages/ActiveQuizPage';
import { EnterNamePage } from './pages/EnterNamePage';
import { RestrictedRoute } from './redirect/RestrictedRoute';
import { PrivateRoute } from './redirect/PrivateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/quizzes">
                <EnterNamePage />
              </RestrictedRoute>
            }
          />

          <Route
            path="/quizzes"
            element={
              <PrivateRoute>
                <QuizzesPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/quizzes/:id"
            element={
              <PrivateRoute>
                <ActiveQuizPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/quizzForm"
            element={
              <PrivateRoute>
                <AddOrEditQuizPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/*"
            element={<div>Ouch something wrong page is not found</div>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
