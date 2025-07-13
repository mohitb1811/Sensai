import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { features } from "@/data/features";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection/>
      <section className="w-full py-12 md;py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Powerful Features for Your Career Growth</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" >
            {features.map((feature,index)=>{
            return(
            <Card key={index}className="border-2 hover:border-primary transition-colors duration-300">
              
            <CardContent className="pt-6 text-center flex flex-col items-center">
                   <div className="flex flex-col items-center justify-center">{feature.icon}</div>
                   <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                   <p className="text-muted-foreground">{feature.description}</p>

            </CardContent>
 
            </Card>)
          }
          )}

          </div>
        </div>
      </section>
   <section className="w-full py-12 md;py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" >
            
                   <div className="flex flex-col items-center justify-center space-y-2">
                    <h3 className="text-4xl font-bold">50+</h3>
                    <p className="test-muted-foreground">Industries Covered</p>
                   </div>
                   <div className="flex flex-col items-center justify-center space-y-2">
                    <h3 className="text-4xl font-bold">1000+</h3>
                    <p className="test-muted-foreground">Interview Question</p>
                   </div>
                   <div className="flex flex-col items-center justify-center space-y-2">
                    <h3 className="text-4xl font-bold">95%</h3>
                    <p className="test-muted-foreground">Success Rate</p>
                   </div>
                   <div className="flex flex-col items-center justify-center space-y-2">
                    <h3 className="text-4xl font-bold">24/7</h3>
                    <p className="test-muted-foreground">AI Support</p>
                   </div>
                   
                  


          </div>
        </div>
      </section>
       {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*What are users say section*/}
       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
      What Our Users Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {testimonial.map((testimonial, index) => (
        <Card
          key={index}
          className="bg-background border border-transparent hover:border-white hover:scale-[1.03] transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <CardContent className="pt-6">
            <div>
              <div className="flex items-center space-x-4">
                <div className="relative h-12 w-12 flex-shrink-0">
                  <Image
                    width={48}
                    height={48}
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="rounded-full object-cover border-2 border-primary/20"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                  <p>{testimonial.company}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-muted-foreground italic relative mt-4">
                  <span className="text-3xl text-primary absolute -top-4 -left-2">
                    &quot;
                  </span>
                  {testimonial.quote}
                  <span className="text-3xl text-primary absolute -bottom-4">
                    &quot;
                  </span>
                </p>
              </blockquote>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/*FAQ Section*/}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers for the most common questions about our platform.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Accordion  type="single" collapsible className="w-full">
 

            {faqs.map((faq, index) => {
              return(
                  <AccordionItem key={index} value={`item-${index}`} >
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                </AccordionContent>
               </AccordionItem>

              );
            })}
            </Accordion>
          </div>
        </div>
      </section>
      {/*accelerate career*/ }
       <section className="w-full  bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 py-24 rounded-lg">
  <div className="max-w-4xl mx-auto text-center px-6 py-16 bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border border-gray-300 relative overflow-hidden">
    <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-800 z-10 relative">
      Ready to Accelerate Your Career?
    </h2>
    <p className="text-lg text-gray-700 mb-8 z-10 relative">
      Join thousands of professionals leveling up with AI-powered career guidance.
    </p>
   <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
  </div>
</section>



    </div>
    
  );
}
