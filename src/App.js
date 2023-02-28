import './App.css';
import HeaderComponent from "./components/header/header.component";
import MainComponent from "./components/main/main.component";
import FooterComponent from "./components/footer/footer.component";
import {AuthProvider} from "./context/AuthContext";
import {BrowserRouter as Router} from "react-router-dom";
import {SnackbarProvider} from "./context/SnackbarContext";

function App() {
    return (
        <AuthProvider>
            <SnackbarProvider>
                <Router>
                    <div className="App">
                        <HeaderComponent/>
                        <MainComponent/>
                        <FooterComponent/>
                    </div>
                </Router>
            </SnackbarProvider>
        </AuthProvider>
    );
}

export default App;
