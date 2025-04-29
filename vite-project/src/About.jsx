// src/pages/About.jsx

const About = () => {
    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/background.jpg')] opacity-10 bg-cover bg-center z-0" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">About Us</h2>
  
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be a leading provider of innovative and sustainable interior design solutions that inspire creativity and transform living spaces.
              </p>
            </section>
  
            <section>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To deliver aesthetically pleasing, functional, and personalized interiors by combining modern design principles with customer-centric service.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  