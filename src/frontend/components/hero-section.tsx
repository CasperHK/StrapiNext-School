import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Tomorrow's
            <span className="text-yellow-400 block">Leaders Today</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join Excellence Academy where innovation meets tradition, and every student is inspired to reach their full potential in a nurturing, world-class environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3 text-lg">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
            >
              Take a Virtual Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white">2,500+</div>
              <div className="text-blue-200">Students</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white">150+</div>
              <div className="text-blue-200">Programs</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}