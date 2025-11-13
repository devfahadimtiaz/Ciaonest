export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
            About Ciaonest
          </h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-600 mb-6">
              Ciaonest is a leading provider of innovative technology solutions, dedicated to helping businesses
              transform and thrive in the digital age. We combine cutting-edge technology with deep industry
              expertise to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experienced professionals is passionate about creating solutions that not only meet
              today's needs but also anticipate tomorrow's challenges. We believe in building long-term
              partnerships with our clients, working closely with them to understand their unique requirements
              and deliver tailored solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with innovative technology solutions that drive growth, efficiency,
                  and competitive advantage in an ever-evolving digital landscape.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-gray-600">
                  To be the trusted partner of choice for organizations seeking transformative technology
                  solutions that shape the future of their industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
