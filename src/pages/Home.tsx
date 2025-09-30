import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Fish, Dna, Search, Map, Database, BookOpen, Users, Star } from 'lucide-react';

// Video Component for the Hero Section
const HeroVideoBackground = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
    <video
      className="min-w-full min-h-full absolute object-cover"
      src="https://www.pexels.com/download/video/18304134/"
      autoPlay
      muted
      loop
      playsInline 
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
);

// Scientist Card Component (Redesigned)
const ScientistCard = ({ imageUrl, name, institution, field, experience, impactScore }) => (
  <div className="relative bg-black rounded-xl p-3 border border-slate-700 shadow-xl overflow-hidden
              flex flex-col md:flex-row items-center justify-between text-white
              transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
    {/* Scientist Image Section */}
    <div className="relative w-full md:w-1/3 flex justify-center p-4">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-40 h-40 object-cover rounded-lg" />
      ) : (
        <div className="w-40 h-40 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
            <Users className="w-16 h-16 text-slate-400 opacity-70" />
        </div>
      )}
    </div>

    {/* Scientist Info Section */}
    <div className="w-full md:w-2/3 flex flex-col justify-between p-4 space-y-2">
      <h3 className="text-2xl font-semibold text-white mb-1 font-google-sans-code">{name}</h3>
      <p className="text-xs text-slate-400 italic mb-2">Leading Marine Research in India</p>

      <div className="space-y-1">
        <p className="text-base text-slate-200">
          <span className="font-medium text-slate-100">Specialization:</span> {field}
        </p>
        <p className="text-base text-slate-200">
          <span className="font-medium text-slate-100">Institution:</span> {institution}
        </p>
      </div>

      <div className="flex justify-between items-center pt-4">
        <div className="text-xl font-bold text-white">
          {experience}+ Years Expertise
        </div>
        <div className="flex items-center text-lg text-yellow-400">
          <Star className="w-5 h-5 mr-1 fill-yellow-400" /> {impactScore}/5
        </div>
      </div>

      <div className="flex space-x-3 mt-4">
        <button className="flex-1 bg-gradient-to-r from-ocean-600 to-aqua-600 text-white px-5 py-2 rounded-md
                          font-medium hover:from-ocean-500 hover:to-aqua-500 transition-all duration-300 shadow-lg">
          View Research
        </button>
        <button className="flex-1 border border-slate-600 text-slate-300 px-5 py-2 rounded-md
                          font-medium hover:border-slate-400 hover:text-white transition-all duration-300">
          Contact
        </button>
      </div>
    </div>
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white border border-slate-200 rounded-lg p-8 text-left transition-all duration-300 hover:border-slate-400 hover:shadow-md">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-slate-800 mb-2 font-google-sans-code">{title}</h3>
    <p className="text-sm text-slate-600 font-zakartra-sans">{description}</p>
  </div>
);

const Home = () => {
  const scientists = [
    {
      imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Dr. Rajesh Kumar",
      institution: "CSIR-NIO",
      field: "Physical Oceanography",
      experience: 22,
      impactScore: 4.9,
    },
    {
      imageUrl: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Dr. Priya Nair",
      institution: "CMFRI",
      field: "Marine Biology & Fisheries",
      experience: 18,
      impactScore: 4.8,
    },
    {
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Dr. Arjun Menon",
      institution: "Indian Institute of Science",
      field: "Marine Biotechnology",
      experience: 15,
      impactScore: 4.7,
    },
    {
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Dr. Kavitha Reddy",
      institution: "National Centre for Coastal Research",
      field: "Coastal & Marine Geology",
      experience: 20,
      impactScore: 4.9,
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white p-6">
        <HeroVideoBackground />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-google-sans-code animate-fade-in-up">
            Shark
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto font-zakartra-sans animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Unifying complex marine data for sustainable ocean management through advanced AI.
          </p>
          <Link to="/ai" className="border-2 border-white text-white px-10 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <span>Try AI Assistant</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Our Vision Section - Alternating Layout */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-left max-w-2xl mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-google-sans-code">A Unified Vision for Marine Intelligence</h2>
            <p className="text-lg text-slate-600 font-zakartra-sans">
              We centralize critical marine data streams into one intelligent platform, empowering researchers and policymakers with actionable insights for conservation and sustainable resource management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1 text-left">
              <Globe className="w-12 h-12 text-ocean-600 mb-6" />
              <h3 className="text-3xl font-semibold text-slate-800 mb-4 font-google-sans-code">Oceanographic Data</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-zakartra-sans">
                Explore vast datasets on ocean currents, salinity levels, temperature, and dynamic climate patterns. Our AI analyzes these complex interactions to provide a holistic understanding of marine physics and chemistry.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="bg-ocean-100 rounded-xl p-8 shadow-lg w-full max-w-md h-64 flex items-center justify-center">
                <p className="text-ocean-700 text-xl font-medium">Conceptual Ocean Map</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-1 md:order-1 flex justify-center items-center">
              <div className="bg-aqua-100 rounded-xl p-8 shadow-lg w-full max-w-md h-64 flex items-center justify-center">
                <p className="text-aqua-700 text-xl font-medium">Fisheries Chart/Graph</p>
              </div>
            </div>
            <div className="order-2 md:order-2 text-left">
              <Fish className="w-12 h-12 text-aqua-600 mb-6" />
              <h3 className="text-3xl font-semibold text-slate-800 mb-4 font-google-sans-code">Fisheries Data Analytics</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-zakartra-sans">
                Gain deep insights into fish stock health, analyze catch trends, and model sustainable fishing practices. Our platform helps ensure the longevity of marine populations and livelihoods.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-left">
              <Dna className="w-12 h-12 text-deepBlue-600 mb-6" />
              <h3 className="text-3xl font-semibold text-slate-800 mb-4 font-google-sans-code">Biodiversity & eDNA Insights</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-zakartra-sans">
                Uncover the secrets of marine life through environmental DNA (eDNA) analysis, comprehensive species taxonomy, and dynamic biodiversity mapping. Protect and understand the rich tapestry of ocean ecosystems.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="bg-deepBlue-100 rounded-xl p-8 shadow-lg w-full max-w-md h-64 flex items-center justify-center">
                <p className="text-deepBlue-700 text-xl font-medium">eDNA Visualization</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Scientists Section */}
      <section className="py-28 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-google-sans-code">Pioneering Indian Marine Scientists</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-zakartra-sans">
              Our platform is guided by the expertise of leading researchers from India's premier institutions.
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
            {scientists.map((scientist, index) => (
              <ScientistCard key={index} {...scientist} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-google-sans-code">Platform Features</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-zakartra-sans">
              A suite of powerful tools designed for modern marine science.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Search className="w-10 h-10 text-ocean-600" />}
              title="AI Search & Analysis"
              description="Pose complex questions in natural language and receive AI-driven insights from integrated datasets."
            />
            <FeatureCard
              icon={<Map className="w-10 h-10 text-aqua-600" />}
              title="Interactive Geovisualization"
              description="Map and visualize marine data in real-time, overlaying different datasets for spatial analysis."
            />
            <FeatureCard
              icon={<Database className="w-10 h-10 text-deepBlue-600" />}
              title="Unified Biodiversity Database"
              description="Access a comprehensive and searchable database of species, eDNA records, and habitat information."
            />
            <FeatureCard
              icon={<BookOpen className="w-10 h-10 text-seafoam-600" />}
              title="Developer API Access"
              description="Integrate our rich marine datasets into your own applications and models with a robust, documented API."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;