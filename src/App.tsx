import { useId } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PUBLIC_ROUTES } from './routes';

function App() {
  const id = useId();

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {PUBLIC_ROUTES.map(({ route, page, layout }) => {
            const Page = page;
            const Layout = layout;
            return (
              <Route
                key={id}
                path={route}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
