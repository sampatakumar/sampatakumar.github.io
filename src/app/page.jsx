import Preloader from "@/components/preloader/Preloader";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SelectedProjects from "@/components/projects/SelectedProjects";
import FlagshipSSH from "@/components/casestudy/FlagshipSSH";
import TechnicalArsenal from "@/components/stack/TechnicalArsenal";
import ExperienceTimeline from "@/components/journey/ExperienceTimeline";
import GithubActivity from "@/components/github/GithubActivity";
import CurrentlyExploring from "@/components/exploring/CurrentlyExploring";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      {/* Section 01: Preloader */}
      <Preloader />

      {/* Section 02: Fixed Editorial Navigation */}
      <Navbar />

      {/* Section 03: Cinematic Hero */}
      <HeroSection />

      {/* Section 04: The Person Behind The Code */}
      <AboutSection />

      {/* Section 05: Selected Projects Grid */}
      <SelectedProjects />

      {/* Section 06: Flagship Capstone Case Study (SSH Architecture) */}
      <FlagshipSSH />

      {/* Section 07: Technical Arsenal & Verified Stack */}
      <TechnicalArsenal />

      {/* Section 08: Education, Milestones & Publications */}
      <ExperienceTimeline />

      {/* Section 09: GitHub Open Source Telemetry */}
      <GithubActivity />

      {/* Section 10: Currently Exploring Modern Horizons */}
      <CurrentlyExploring />

      {/* Section 11: Contact & Student Collaboration */}
      <ContactSection />

      {/* Section 12: Minimalist Editorial Footer */}
      <Footer />
    </>
  );
}

