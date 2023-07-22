import { ConfigProvider } from "antd";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { userAtom } from "./jotai/atoms";
import { useAtomValue } from "jotai";
import AuthRoutes from "./routes/AuthRoutes";

function App() {
  useEffect(() => console.log(import.meta.env.BASE_URL));
  const { loggedIn, role } = useAtomValue(userAtom);

  return (
    <ConfigProvider>
      <Router basename={import.meta.env.BASE_URL}>
        {!loggedIn ? (
          <Routes>
            <Route path="/*" element={<AuthRoutes />} />
          </Routes>
        ) : (
          <Routes>
            <Route path={`/${role}/*`} element={<div>Protected Route</div>} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        )}
        <Routes></Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
