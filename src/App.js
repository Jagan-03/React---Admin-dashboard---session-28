import Sidebar from "./components/sidebar";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      {/* Main */}
      <div id="content-wrapper" className="d-flex flex-column">
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
