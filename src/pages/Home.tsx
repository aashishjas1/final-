import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Fish, Dna, Search, Map, Database, BookOpen, Users } from 'lucide-react';

// Video Component for the Hero Section
const HeroVideoBackground = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
    <video
      className="min-w-full min-h-full absolute object-cover"
      src="https://www.pexels.com/download/video/18304134/" // <-- The new video URL is here
      autoPlay
      muted
      loop
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
);

// Scientist Card Component
const ScientistCard = ({ icon, name, institution, field, points, color }) => (
  <div className="bg-white border border-slate-200 rounded-lg p-6 text-center transition-all duration-300 hover:border-slate-400 hover:shadow-lg">
    <div className={`w-20 h-20 bg-${color}-100 rounded-full mx-auto mb-5 flex items-center justify-center`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-slate-800">{name}</h3>
    <p className="text-sm text-slate-500 mb-1">{institution}</p>
    <p className={`text-xs text-${color}-600 font-semibold mb-4`}>{field}</p>
    <div className="text-xs text-slate-500 text-left space-y-1.5">
      {points.map((point, index) => <p key={index}>• {point}</p>)}
    </div>
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-slate-50 border border-transparent rounded-lg p-8 text-left transition-all duration-300 hover:bg-white hover:border-slate-200 hover:shadow-sm">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-slate-800 mb-2 font-google-sans-code">{title}</h3>
    <p className="text-sm text-slate-600 font-zakartra-sans">{description}</p>
  </div>
);

const Home = () => {
  const scientists = [
    {
      icon: <Users className="w-10 h-10 text-ocean-700" />,
      name: "Dr. Rajesh Kumar",
      institution: "CSIR-National Institute of Oceanography",
      field: "Physical Oceanography",
      points: ["Ocean Circulation Modeling", "Climate Change Impact", "Monsoon Dynamics"],
      color: "ocean",
    },
    {
      icon: <Fish className="w-10 h-10 text-aqua-700" />,
      name: "Dr. Priya Nair",
      institution: "Central Marine Fisheries Research Institute",
      field: "Marine Biology & Fisheries",
      points: ["Fish Stock Assessment", "Biodiversity Conservation", "Sustainable Fisheries"],
      color: "aqua",
    },
    {
      icon: <Dna className="w-10 h-10 text-deepBlue-700" />,
      name: "Dr. Arjun Menon",
      institution: "Indian Institute of Science",
      field: "Marine Biotechnology",
      points: ["Environmental DNA", "Marine Genomics", "Coral Reef Genetics"],
      color: "deepBlue",
    },
    {
      icon: <Globe className="w-10 h-10 text-seafoam-700" />,
      name: "Dr. Kavitha Reddy",
      institution: "National Centre for Coastal Research",
      field: "Coastal & Marine Geology",
      points: ["Coastal Erosion Studies", "Sediment Analysis", "Sea Level Rise Research"],
      color: "seafoam",
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

      {/* Our Vision Section */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-left max-w-2xl mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-google-sans-code">A Unified Vision for Marine Intelligence</h2>
            <p className="text-lg text-slate-600 font-zakartra-sans">
              We centralize critical marine data streams into one intelligent platform, empowering researchers and policymakers with actionable insights for conservation and sustainable resource management.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-left">
              <Globe className="w-10 h-10 text-ocean-600 mb-5" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3 font-google-sans-code">Oceanographic Data</h3>
              <p className="text-slate-600 font-zakartra-sans">Analyze currents, salinity, and climate patterns for a comprehensive marine overview.</p>
            </div>
            <div className="text-left">
              <Fish className="w-10 h-10 text-aqua-600 mb-5" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3 font-google-sans-code">Fisheries Data</h3>
              <p className="text-slate-600 font-zakartra-sans">Monitor stock health, track catch trends, and promote sustainable fishing practices.</p>
            </div>
            <div className="text-left">
              <Dna className="w-10 h-10 text-deepBlue-600 mb-5" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3 font-google-sans-code">Biodiversity Data</h3>
              <p className="text-slate-600 font-zakartra-sans">Leverage eDNA, taxonomy, and habitat mapping to protect marine ecosystems.</p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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