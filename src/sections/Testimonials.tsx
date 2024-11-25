import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { LetterFx } from '@/components/LetterFx';
import google from "@/assets/images/google2.webp";
import deeplearning from '@/assets/images/deeplearning.webp'
import datacamp from '@/assets/images/datacamp.png'
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg';
import { Card } from "@/components/Card";
import { Fragment } from "react";



const testimonials = [
  {
    name: "Machine Learning Specialization",
    position: "Deep Learning AI, Stanford",
    avatar: deeplearning,
  },
  {
    name: "Google Data Analytics",
    position: "Google",
    avatar: google,
  },
  {
    name: "SQL Fundamentals",
    position: "Data Camp",
    avatar: datacamp,
  },
  {
    name: "Machine Learning Fundamentals",
    position: "Data Camp",
    avatar: datacamp,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <LetterFx trigger="hover" speed="medium" className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent text-3xl">
            Certification
          </LetterFx>
        </div>
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4"> 
          <div className="flex gap-8 flex-none animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_,index) => (
              <Fragment key={index}>
                {testimonials.map(testimonial => (
                  <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image src={testimonial.avatar} alt = {testimonial.name} className="max-h-full" />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};
