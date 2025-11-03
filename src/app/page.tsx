"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, ChefHat, Mail, Star, Users, Utensils } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bella Vista"
          button={{
            text: "Reserve Table",
            href: "https://example.com/reservations"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Authentic Italian Dining Experience"
          description="Discover the taste of Italy in every dish, crafted with traditional recipes and the finest ingredients"
          tag="Established 1985"
          tagIcon={Award}
          buttons={[
            { text: "View Menu", href: "pricing" },
            { text: "Reserve Now", href: "https://example.com/reservations" }
          ]}
          imageSrc="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant Italian restaurant dining room"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="For over 35 years, Bella Vista has been serving authentic Italian cuisine, bringing the warmth and tradition of Italy to your table with every carefully crafted dish"
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Meet the Chef", href: "team" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Signature Dishes"
          description="Experience our most beloved creations, each prepared with authentic Italian techniques and premium ingredients"
          tag="Chef's Selection"
          tagIcon={ChefHat}
          features={[
            {
              title: "Pasta Carbonara",
              description: "Classic Roman pasta with eggs, pancetta, and Parmigiano-Reggiano, prepared the traditional way",
              imageSrc: "https://images.pexels.com/photos/5710181/pexels-photo-5710181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Authentic Italian pasta carbonara",
              button: { text: "Order Now", href: "pricing" }
            },
            {
              title: "Margherita Pizza",
              description: "Wood-fired Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, and basil",
              imageSrc: "https://images.pexels.com/photos/5953495/pexels-photo-5953495.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Margherita pizza from wood fired oven",
              button: { text: "Order Now", href: "pricing" }
            },
            {
              title: "Risotto ai Funghi",
              description: "Creamy Arborio rice with wild mushrooms and truffle oil, finished with aged Parmesan",
              imageSrc: "https://images.pexels.com/photos/2773940/pexels-photo-2773940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Italian mushroom truffle risotto",
              button: { text: "Order Now", href: "pricing" }
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Menu Selection"
          description="Choose from our carefully curated menu featuring traditional Italian favorites"
          tag="Daily Fresh"
          tagIcon={Utensils}
          plans={[
            {
              id: "appetizers",
              price: "$12-18",
              name: "Antipasti",
              buttons: [
                { text: "Order Now", href: "https://example.com/order" },
                { text: "View Details", href: "pricing" }
              ],
              features: [
                "Bruschetta al Pomodoro",
                "Antipasto Misto",
                "Burrata con Prosciutto",
                "Arancini Siciliani"
              ]
            },
            {
              id: "mains",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$24-38",
              name: "Main Courses",
              buttons: [
                { text: "Order Now", href: "https://example.com/order" },
                { text: "View Details", href: "pricing" }
              ],
              features: [
                "Osso Buco alla Milanese",
                "Spaghetti alle Vongole",
                "Pollo Parmigiana",
                "Branzino al Sale"
              ]
            },
            {
              id: "desserts",
              price: "$8-14",
              name: "Dolci",
              buttons: [
                { text: "Order Now", href: "https://example.com/order" },
                { text: "View Details", href: "pricing" }
              ],
              features: [
                "Tiramisu della Casa",
                "Panna Cotta ai Frutti",
                "Cannoli Siciliani",
                "Gelato Artigianale"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="The passionate culinary artisans who bring authentic Italian flavors to life"
          tag="Our People"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Chef Antonio",
              role: "Executive Chef",
              imageSrc: "https://images.pexels.com/photos/8877114/pexels-photo-8877114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Chef Antonio"
            },
            {
              id: "2",
              name: "Sofia Martinez",
              role: "General Manager",
              imageSrc: "https://images.pexels.com/photos/4428046/pexels-photo-4428046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sofia Martinez"
            },
            {
              id: "3",
              name: "Marco Rossi",
              role: "Wine Sommelier",
              imageSrc: "https://images.pexels.com/photos/8921579/pexels-photo-8921579.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Marco Rossi"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Authentic reviews from our valued customers who have experienced our Italian hospitality"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "David Thompson",
              role: "Food Critic",
              testimonial: "The most authentic Italian dining experience outside of Italy. Every dish tells a story of tradition and passion.",
              imageSrc: "https://images.pexels.com/photos/5086615/pexels-photo-5086615.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Thompson"
            },
            {
              id: "2",
              name: "Maria Rodriguez",
              role: "Local Food Blogger",
              testimonial: "Bella Vista has become our family's favorite restaurant. The atmosphere is warm and the food is consistently exceptional.",
              imageSrc: "https://images.pexels.com/photos/6969962/pexels-photo-6969962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Maria Rodriguez"
            },
            {
              id: "3",
              name: "James Wilson",
              role: "Regular Customer",
              testimonial: "I've been coming here for over 10 years and the quality never disappoints. It truly feels like dining in Italy.",
              imageSrc: "https://images.pexels.com/photos/8921574/pexels-photo-8921574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wilson"
            },
            {
              id: "4",
              name: "Elena Caruso",
              role: "Wine Enthusiast",
              testimonial: "The wine selection perfectly complements every meal. Marco, the sommelier, knows how to pair flavors beautifully.",
              imageSrc: "https://images.pexels.com/photos/21783003/pexels-photo-21783003.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Elena Caruso"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Dining Information"
          sideDescription="Everything you need to know for your visit"
          faqs={[
            {
              id: "1",
              title: "Do I need a reservation?",
              content: "We recommend reservations, especially for dinner service and weekends. Walk-ins are welcome based on availability."
            },
            {
              id: "2",
              title: "What are your hours?",
              content: "Tuesday-Thursday: 5:00 PM - 10:00 PM, Friday-Saturday: 5:00 PM - 11:00 PM, Sunday: 4:00 PM - 9:00 PM. Closed Mondays."
            },
            {
              id: "3",
              title: "Do you accommodate dietary restrictions?",
              content: "Yes, we offer vegetarian, vegan, and gluten-free options. Please inform us of any allergies when making your reservation."
            },
            {
              id: "4",
              title: "Is there parking available?",
              content: "We offer complimentary valet parking during dinner hours. Street parking is also available nearby."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Connected with Bella Vista"
          description="Subscribe to receive updates about seasonal menus, special events, and exclusive dining offers"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our newsletter and promotional offers. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/6287322/pexels-photo-6287322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Italian chef preparing fresh pasta"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Menu", href: "pricing" },
                { label: "Our Team", href: "team" },
                { label: "Reviews", href: "testimonial" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Reservations", href: "https://example.com/reservations" },
                { label: "Private Events", href: "https://example.com/events" },
                { label: "Catering", href: "https://example.com/catering" },
                { label: "Gift Cards", href: "https://example.com/gifts" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Location", href: "contact" },
                { label: "Hours", href: "faq" },
                { label: "Phone", href: "tel:+1234567890" },
                { label: "Email", href: "mailto:info@bellavista.com" }
              ]
            }
          ]}
          copyrightText="© 2025 Bella Vista Italian Restaurant. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}