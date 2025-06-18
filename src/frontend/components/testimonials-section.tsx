"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Emma Thompson',
      grade: 'Class of 2023',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Excellence Academy didn\'t just prepare me for college; it prepared me for life. The supportive community and innovative teaching methods helped me discover my passion for biotechnology.',
      achievement: 'Now studying at Stanford University'
    },
    {
      name: 'Marcus Johnson',
      grade: 'Class of 2022',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The STEM program at Excellence Academy opened doors I never knew existed. The hands-on learning and mentorship from incredible teachers shaped my future career path.',
      achievement: 'Software Engineer at Google'
    },
    {
      name: 'Sophia Martinez',
      grade: 'Class of 2023',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The arts program here is phenomenal. I was able to explore my creativity while maintaining academic excellence. The balance and support I received was incredible.',
      achievement: 'Attending Juilliard School'
    },
    {
      name: 'Alex Chen',
      grade: 'Current Senior',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'What sets Excellence Academy apart is how they treat each student as an individual. The personalized attention and diverse opportunities have made my high school experience unforgettable.',
      achievement: 'Student Body President'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hear from our graduates and current students about their transformative experiences at Excellence Academy.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
                <blockquote className="text-xl sm:text-2xl leading-relaxed mb-8 text-white">
                  "{testimonials[currentSlide].quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-lg text-white">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-blue-200">
                      {testimonials[currentSlide].grade}
                    </div>
                    <div className="text-yellow-400 text-sm">
                      {testimonials[currentSlide].achievement}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}