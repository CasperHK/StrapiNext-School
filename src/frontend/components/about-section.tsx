import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Lightbulb, Globe } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in education, fostering academic achievement and personal growth.'
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We create a caring community where every individual is valued, respected, and supported.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creativity and forward-thinking approaches to prepare students for the future.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We cultivate international mindedness and cultural awareness in our diverse community.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Excellence Academy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 50 years, we've been dedicated to providing exceptional education that nurtures the whole child and prepares them for success in an ever-changing world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6">
              Excellence Academy is committed to providing a transformative educational experience that empowers students to become confident, creative, and compassionate leaders who make a positive impact in their communities and beyond.
            </p>
            <p className="text-lg text-gray-700">
              Through innovative teaching methods, personalized learning approaches, and a supportive community environment, we prepare our students not just for academic success, but for meaningful lives of purpose and contribution.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Students in classroom"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <value.icon className="h-8 w-8 text-blue-800" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}