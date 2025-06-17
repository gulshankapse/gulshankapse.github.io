import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
import Qualification from "../components/Qualification/Qualification";

function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <Qualification />
            <About />
            <Contact />
            <FixSocialIcon />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default Home;
