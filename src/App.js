import './App.css';
import HeaderComponent from "./components/header/header.component";
import MainComponent from "./components/main/main.component";
import FooterComponent from "./components/footer/footer.component";
import {AuthProvider} from "./Auth";

function App() {
  return (
      <AuthProvider>
          <div className="App">
              <HeaderComponent/>
              <MainComponent/>
              <FooterComponent/>
          </div>
      </AuthProvider>
  );
}

export default App;
