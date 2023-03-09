import { Footer } from "./components/Footer";
import { Navbar as NavbarComponent } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form as FormComponent } from "./components/Form";

function App() {
  return (
    <div className="container mt-3">
      <NavbarComponent />

      <FormComponent />

      <Footer />
    </div>
  );
}

export default App;
