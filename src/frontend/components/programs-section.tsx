import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Microscope, Palette, Calculator, Music, Globe2 } from 'lucide-react';

export default function ProgramsSection() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Liberal Arts',
      description: 'Comprehensive humanities program focusing on critical thinking, literature, and communication skills.',
      features: ['Advanced Literature', 'Creative Writing', 'Philosophy', 'History']
    },
    {
      icon: Microscope,
      title: 'STEM Excellence',
      description: 'Cutting-edge science, technology, engineering, and mathematics programs with hands-on learning.',
      features: ['Research Labs', 'Coding Bootcamps', 'Engineering Design', 'Data Science']
    },
    {
      icon: Palette,
      title: 'Creative Arts',
      description: 'Nurture artistic expression through visual arts, performing arts, and digital media programs.',
      features: ['Studio Art', 'Theater', 'Digital Media', 'Art History']
    },
    {
      icon: Calculator,
      title: 'Business & Economics',
      description: 'Develop entrepreneurial skills and financial literacy through practical business education.',
      features: ['Entrepreneurship', 'Finance', 'Marketing', 'Business Ethics']
    },
    {
      icon: Music,
      title: 'Music & Performance',
      description: 'Comprehensive music education with instrumental, vocal, and composition opportunities.',
      features: ['Orchestra', 'Jazz Band', 'Choir', 'Music Theory']
    },
    {
      icon: Globe2,
      title: 'Global Studies',
      description: 'Explore world cultures, languages, and international relations in our global curriculum.',
      features: ['World Languages', 'Cultural Studies', 'Model UN', 'Study Abroad']
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of academic programs designed to challenge, inspire, and prepare students for their future endeavors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                    <program.icon className="h-8 w-8 text-blue-800" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}