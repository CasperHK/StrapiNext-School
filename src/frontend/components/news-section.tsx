import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function NewsSection() {
  const news = [
    {
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Students Win National Science Fair Competition',
      excerpt: 'Our STEM program students took first place in the national science fair with their innovative renewable energy project.',
      date: '2024-01-15',
      readTime: '3 min read',
      category: 'Achievement'
    },
    {
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'New Arts Center Opening This Fall',
      excerpt: 'State-of-the-art facility will feature modern studios, performance spaces, and cutting-edge technology for creative learning.',
      date: '2024-01-10',
      readTime: '4 min read',
      category: 'Facility'
    },
    {
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'International Exchange Program Expansion',
      excerpt: 'We are proud to announce partnerships with 15 new schools worldwide, offering more opportunities for cultural exchange.',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'Program'
    }
  ];

  const events = [
    {
      date: '2024-02-15',
      title: 'Open House for Prospective Families',
      time: '10:00 AM - 2:00 PM',
      location: 'Main Campus'
    },
    {
      date: '2024-02-20',
      title: 'Spring Arts Festival',
      time: '7:00 PM - 9:00 PM',
      location: 'Arts Center'
    },
    {
      date: '2024-02-25',
      title: 'Science Fair Exhibition',
      time: '6:00 PM - 8:00 PM',
      location: 'STEM Building'
    },
    {
      date: '2024-03-01',
      title: 'Parent-Teacher Conferences',
      time: '9:00 AM - 5:00 PM',
      location: 'Various Classrooms'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings at Excellence Academy and upcoming events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* News Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent News</h3>
            <div className="space-y-8">
              {news.map((article, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(article.date)}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h4>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <Button variant="outline" className="text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-800 text-white p-3 rounded-lg text-center min-w-[60px]">
                      <div className="text-sm font-medium">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                      <div className="text-xl font-bold">
                        {new Date(event.date).getDate()}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button className="w-full bg-blue-800 hover:bg-blue-900">
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}