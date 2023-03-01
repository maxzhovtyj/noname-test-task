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
            <Router>
                <SnackbarProvider>
                    <div className="App">
                        <HeaderComponent/>
                        <MainComponent/>
                        <FooterComponent/>
                    </div>
                </SnackbarProvider>
            </Router>
        </AuthProvider>
    );
}

export default App;
