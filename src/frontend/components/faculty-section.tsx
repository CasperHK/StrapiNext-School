import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function FacultySection() {
  const faculty = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Head of Mathematics Department',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ph.D. in Mathematics from MIT, 15 years of teaching experience, published researcher in algebraic geometry.',
      specialties: ['Advanced Calculus', 'Statistics', 'Research Methods']
    },
    {
      name: 'Prof. Michael Chen',
      title: 'Director of STEM Programs',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former NASA engineer with expertise in robotics and AI, passionate about inspiring the next generation of scientists.',
      specialties: ['Robotics', 'Computer Science', 'Engineering Design']
    },
    {
      name: 'Dr. Elena Rodriguez',
      title: 'English Literature Department',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning poet and literature scholar, dedicated to fostering creativity and critical thinking in students.',
      specialties: ['Creative Writing', 'Contemporary Literature', 'Literary Analysis']
    },
    {
      name: 'Mr. David Thompson',
      title: 'Arts & Music Coordinator',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Professional musician and composer with 20 years of experience in music education and performance.',
      specialties: ['Orchestra', 'Music Theory', 'Composition']
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Faculty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated educators bring expertise, passion, and innovation to every classroom, inspiring students to reach their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-800 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Teaching Community</h3>
            <p className="text-gray-700 mb-6">
              We're always looking for passionate educators who share our commitment to excellence in education. 
              Explore opportunities to make a difference in students' lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                View Open Positions
              </button>
              <button className="border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Faculty Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}