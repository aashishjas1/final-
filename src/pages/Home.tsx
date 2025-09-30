import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Fish, Dna, Search, Map, Database, BookOpen, Waves, Microscope, Thermometer, Droplets, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 to-white opacity-50"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
            <path d="M0,200 Q200,100 400,200 T800,200" stroke="url(#oceanGradient)" strokeWidth="2" />
            <path d="M0,300 Q200,200 400,300 T800,300" stroke="url(#oceanGradient)" strokeWidth="1" />
            <path d="M0,400 Q200,300 400,400 T800,400" stroke="url(#oceanGradient)" strokeWidth="1" />
            <defs>
              <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-ocean-900 mb-6 leading-tight font-google-sans-code">
            Shark
          </h1>
          <p className="text-2xl text-ocean-800 mb-10 leading-relaxed font-zakartra-sans">
            AI-Driven Marine Insights
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Unifying ocean, fisheries, otolith, and DNA data for sustainable marine management through advanced AI-powered analytics and visualization.
          </p>
          <Link to="/ai" className="bg-ocean-800 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-ocean-700 transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span>Explore with AI</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Oceanography and Marine Science Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ocean-900 mb-4 font-google-sans-code">Oceanography & Marine Science</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-zakartra-sans">
              Delving into the complexities of our oceans to foster a deeper understanding and drive conservation.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-ocean-800 font-google-sans-code">Understanding Our Oceans</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-zakartra-sans">
                Oceanography is the scientific study of the ocean, encompassing its physical, chemical, biological, and geological aspects. Our platform integrates cutting-edge marine science research to provide comprehensive insights into ocean ecosystems, climate patterns, and marine biodiversity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-zakartra-sans">
                The Indian Ocean, covering approximately 70.6 million square kilometers, is home to diverse marine ecosystems. From coral reefs in the Maldives to deep-sea trenches, this ocean supports over 3,000 fish species and countless other marine organisms crucial for global biodiversity and climate regulation.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-ocean-400 to-aqua-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-white rounded-2xl p-8 h-96 flex flex-col justify-center items-center text-center shadow-lg">
                <Waves className="w-20 h-20 text-ocean-500 mb-4" />
                <h4 className="text-2xl font-bold text-ocean-800">Indian Ocean</h4>
                <p className="text-gray-600">70.6M km² • 3,000+ Species</p>
                <div className="flex space-x-8 mt-8 text-ocean-700">
                  <div className="text-center">
                    <Thermometer className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">5°C - 30°C</p>
                    <p className="text-sm text-gray-500">Temperature</p>
                  </div>
                  <div className="text-center">
                    <Droplets className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">33-37 PSU</p>
                    <p className="text-sm text-gray-500">Salinity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Idea Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ocean-900 mb-4 font-google-sans-code">Our Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-zakartra-sans">
              A unified platform for comprehensive marine data analysis.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
              <Globe className="w-16 h-16 text-ocean-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-ocean-800 mb-3 font-google-sans-code">Oceanographic Data</h3>
              <p className="text-gray-600 font-zakartra-sans">Ocean currents, salinity levels, and climate patterns for comprehensive marine analysis.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
              <Fish className="w-16 h-16 text-aqua-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-ocean-800 mb-3 font-google-sans-code">Fisheries Data</h3>
              <p className="text-gray-600 font-zakartra-sans">Stock health monitoring, catch trends, and sustainable fishing practices.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
              <Dna className="w-16 h-16 text-deepBlue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-ocean-800 mb-3 font-google-sans-code">Biodiversity Data</h3>
              <p className="text-gray-600 font-zakartra-sans">Environmental DNA analysis, species taxonomy, and biodiversity mapping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientists Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ocean-900 mb-4 font-google-sans-code">Our Indian Marine Scientists</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-zakartra-sans">
              Leading researchers from premier Indian institutions contributing to marine science and ocean conservation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Scientist Card */}
            <div className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-ocean-100 transition-colors duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-ocean-200 to-ocean-300 rounded-full mx-auto mb-4 flex items-center justify-center relative shadow-inner">
                <Users className="w-12 h-12 text-ocean-700" />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-lg">🇮🇳</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-ocean-800">Dr. Rajesh Kumar</h3>
              <p className="text-sm text-gray-600 mb-1">CSIR-NIO</p>
              <p className="text-xs text-ocean-600 font-semibold mb-3">Physical Oceanography</p>
              <div className="text-xs text-gray-500 text-left space-y-1">
                <p>• Ocean Circulation Modeling</p>
                <p>• Climate Change Impact</p>
                <p>• Monsoon Dynamics</p>
              </div>
            </div>
            {/* Repeat for other scientists with different colors and icons */}
            <div className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-aqua-100 transition-colors duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-aqua-200 to-aqua-300 rounded-full mx-auto mb-4 flex items-center justify-center relative shadow-inner">
                <Fish className="w-12 h-12 text-aqua-700" />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-lg">🇮🇳</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-ocean-800">Dr. Priya Nair</h3>
              <p className="text-sm text-gray-600 mb-1">CMFRI</p>
              <p className="text-xs text-aqua-600 font-semibold mb-3">Marine Biology & Fisheries</p>
              <div className="text-xs text-gray-500 text-left space-y-1">
                <p>• Fish Stock Assessment</p>
                <p>• Biodiversity Conservation</p>
                <p>• Sustainable Fisheries</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-deepBlue-100 transition-colors duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-deepBlue-200 to-deepBlue-300 rounded-full mx-auto mb-4 flex items-center justify-center relative shadow-inner">
                <Dna className="w-12 h-12 text-deepBlue-700" />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-lg">🇮🇳</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-ocean-800">Dr. Arjun Menon</h3>
              <p className="text-sm text-gray-600 mb-1">IISc</p>
              <p className="text-xs text-deepBlue-600 font-semibold mb-3">Marine Biotechnology</p>
              <div className="text-xs text-gray-500 text-left space-y-1">
                <p>• Environmental DNA</p>
                <p>• Marine Genomics</p>
                <p>• Coral Reef Genetics</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl text-center hover:bg-seafoam-100 transition-colors duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-seafoam-200 to-seafoam-300 rounded-full mx-auto mb-4 flex items-center justify-center relative shadow-inner">
                <Waves className="w-12 h-12 text-seafoam-700" />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-lg">🇮🇳</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-ocean-800">Dr. Kavitha Reddy</h3>
              <p className="text-sm text-gray-600 mb-1">NCCR</p>
              <p className="text-xs text-seafoam-600 font-semibold mb-3">Coastal & Marine Geology</p>
              <div className="text-xs text-gray-500 text-left space-y-1">
                <p>• Coastal Erosion Studies</p>
                <p>• Sediment Analysis</p>
                <p>• Sea Level Rise Research</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ocean-900 mb-4 font-google-sans-code">Platform Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-r from-ocean-400 to-aqua-400 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white p-8 rounded-xl text-center h-full">
                <Search className="w-12 h-12 text-ocean-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-ocean-800 mb-2 font-google-sans-code">AI Search</h3>
                <p className="text-sm text-gray-600 font-zakartra-sans">Intelligent query processing for marine data.</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-r from-aqua-400 to-seafoam-400 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white p-8 rounded-xl text-center h-full">
                <Map className="w-12 h-12 text-aqua-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-ocean-800 mb-2 font-google-sans-code">Interactive Maps</h3>
                <p className="text-sm text-gray-600 font-zakartra-sans">Real-time visualization of marine ecosystems.</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-r from-deepBlue-400 to-ocean-400 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white p-8 rounded-xl text-center h-full">
                <Database className="w-12 h-12 text-deepBlue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-ocean-800 mb-2 font-google-sans-code">Biodiversity Data</h3>
                <p className="text-sm text-gray-600 font-zakartra-sans">Comprehensive species and habitat information.</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-r from-seafoam-400 to-deepBlue-400 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-white p-8 rounded-xl text-center h-full">
                <BookOpen className="w-12 h-12 text-seafoam-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-ocean-800 mb-2 font-google-sans-code">API Access</h3>
                <p className="text-sm text-gray-600 font-zakartra-sans">Programmatic access to all platform data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;