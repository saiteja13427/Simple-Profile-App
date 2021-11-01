import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Container>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/profile" component={ProfileScreen} />
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
