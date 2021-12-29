import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMePage from "./Pages/About";
import ProjectsPage from "./Pages/Projects";
import WorkExperiencePage from "./Pages/WorkExperience";
import ContactPage from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import TopNavBar from "./Components/NavBar";

function App() {
    return (
        <div className="App">
            <TopNavBar></TopNavBar>
            <Routes>
                <Route path="/#about_me" element={<AboutMePage />} />
                <Route path="/#projects" element={<ProjectsPage />} />
                <Route
                    path="/#work_experience"
                    element={<WorkExperiencePage />}
                />
                <Route path="/#contact_me" element={<ContactPage />} />
            </Routes>
            <section id="about_me">
                <div className="backGround">
                    <div style={{ paddingTop: "10vh" }}>
                        <AboutMePage></AboutMePage>
                    </div>
                </div>
            </section>

            <div class="pimg1">
                <div class="ptext"></div>
            </div>

            <section id="projects">
                <div className="backGround">
                    <div style={{ paddingTop: "10vh" }}>
                        <ProjectsPage></ProjectsPage>
                    </div>
                </div>
            </section>

            <div class="pimg1">
                <div class="ptext"></div>
            </div>

            <section id="work_experience">
                <div className="backGround">
                    <div style={{ paddingTop: "10vh" }}>
                        <WorkExperiencePage></WorkExperiencePage>
                    </div>
                </div>
            </section>

            <div class="pimg1">
                <div class="ptext"></div>
            </div>

            <section id="contact_me">
                <div className="backGround">
                    <div style={{ paddingTop: "10vh" }}>
                        <ContactPage></ContactPage>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;

// orignal code retained to use the animation effect for future tasks
// <div className="App">
//     <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//             Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//         >
//             Learn React
//         </a>
//     </header>
// </div>
