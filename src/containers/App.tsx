// import Rooms from "../components/Rooms/Rooms";
import "./App.css";
import AboutUs from "../components/AboutUs/AboutUs";
import AppHeader from "../components/AppHeader/AppHeader";
import AppBanner from "../components/AppBanner/AppBanner";
import SearchBar from "../components/SearchBar/SearchBar";
import Newsletter from "../components/Newsletter/Newsletter";
import AppFooter from "../components/AppFooter/AppFooter";
import AppFeatured from "../components/AppFeatured/AppFeatured";

function App() {
  return (
    <>
      <div className="App">
        <AppHeader />
        <AppBanner />
        <SearchBar />
        <AboutUs />
        <AppFeatured />
        {/* <Rooms /> */}
        <Newsletter />
        <AppFooter />
      </div>
    </>
  );
}

export default App;
