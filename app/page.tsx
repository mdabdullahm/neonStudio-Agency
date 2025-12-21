// app/page.js
import Hero from "./home/Hero";
import About from "./home/About";
import Services from "./home/Services";
import WhyChooseUs from "./home/WhyChooseUs";
import Portfolio from "./home/Portfolio";
import Team from "./home/Team";
import Testimonials from "./home/Testimonials";
import FAQ from "./home/FAQ";
import Contact from "./home/Contact"; // নতুন ইম্পোর্ট

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact /> {/* এখানে যুক্ত করা হয়েছে */}
    </main>
  );
}