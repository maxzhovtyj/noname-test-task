import './App.css';
import HeaderComponent from "./components/header/header.component";
import MainComponent from "./components/main/main.component";
import FooterComponent from "./components/footer/footer.component";
import {AuthProvider} from "./Auth";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <AuthProvider>
          <Router>
              <div className="App">
                  <HeaderComponent/>
                  <MainComponent/>
                  <FooterComponent/>
              </div>
          </Router>
      </AuthProvider>
  );
}

export default App;
