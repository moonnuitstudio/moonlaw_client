import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./store"

import DashboardLayout from "./layouts/DashboardLayout"

import LogAuthPage from "./pages/LogAuthPage"
import SetPasswordStep from "./pages/SetPasswordStep"
import RecoverPassword from "./pages/RecoverPassword"

import DashboardPage from "./pages/DashboardPage"

import LoadScreen from "./screens/LoadScreen"

import { ToastContainer } from "react-toastify"

function App() {
  
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LogAuthPage />} />
          <Route path="/newuser" element={<SetPasswordStep />} />
          <Route path="/recover-password" element={<RecoverPassword />} />

          <Route path="/lawfirm" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
          </Route>
        </Routes>

        <LoadScreen />
        <ToastContainer />
      </Provider>
    </Router>
  )
}

export default App
