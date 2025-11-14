import { useRoute } from "wouter";
import { useEffect } from "react";
import { ChevronLeft, MapPin, Phone, Mail, Clock, CheckCircle, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";

interface ServiceLocationProps {
  service: string;
  city: string;
}

export default function ServiceLocationPage() {
  const [match, params] = useRoute<{ service: string; city: string }>("/services/:service/:city");
  const { t, language } = useLanguage();

  if (!match || !params) {
    return <div>Page not found</div>;
  }

  const { service, city } = params;

  // Service and city configuration
  const serviceConfig = {
    "web-design": {
      title: "Web Design",
      description: "Professional website design and development",
      features: [
        "Responsive Design",
        "Mobile Optimization", 
        "Fast Loading Speed",
        "SEO Ready",
        "Content Management",
        "E-commerce Integration"
      ],
      deliveryTime: "2-4 weeks"
    },
    "seo": {
      title: "SEO Services",
      description: "Search engine optimization to boost your rankings",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Link Building",
        "Local SEO",
        "Monthly Reporting"
      ],
      deliveryTime: "3-6 months"
    },
    "digital-marketing": {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies",
      features: [
        "Social Media Marketing",
        "Google Ads Management",
        "Content Marketing",
        "Email Marketing",
        "Analytics Setup",
        "Conversion Optimization"
      ],
      deliveryTime: "Ongoing"
    },
    "complete-package": {
      title: "Complete Package",
      description: "All-in-one digital solution for your business",
      features: [
        "Website Development",
        "SEO Optimization",
        "Digital Marketing",
        "Social Media Management",
        "Monthly Reports",
        "Priority Support"
      ],
      deliveryTime: "1-2 months"
    }
  };

  const cityConfig = {
    "kuala-lumpur": {
      name: "Kuala Lumpur",
      description: "Malaysia's vibrant capital city",
      businessHub: "KLCC & Bukit Bintang",
      population: "1.8M"
    },
    "selangor": {
      name: "Selangor",
      description: "Malaysia's most developed state",
      businessHub: "Shah Alam & Petaling Jaya",
      population: "6.5M"
    },
    "penang": {
      name: "Penang",
      description: "The Pearl of the Orient",
      businessHub: "Georgetown & Bayan Lepas",
      population: "1.7M"
    },
    "johor-bahru": {
      name: "Johor Bahru",
      description: "Gateway to Singapore",
      businessHub: "JB City & Iskandar",
      population: "1.8M"
    },
    "ipoh": {
      name: "Ipoh",
      description: "The City of Bougainvillea",
      businessHub: "Old Town & New Town",
      population: "750K"
    },
    "kota-kinabalu": {
      name: "Kota Kinabalu",
      description: "Capital of Sabah",
      businessHub: "City Centre & Likas",
      population: "500K"
    },
    "kuching": {
      name: "Kuching",
      description: "Cat City of Sarawak",
      businessHub: "City Centre & Petra Jaya",
      population: "650K"
    },
    "petaling-jaya": {
      name: "Petaling Jaya",
      description: "Malaysia's first planned city",
      businessHub: "SS2 & Damansara",
      population: "650K"
    },
    "shah-alam": {
      name: "Shah Alam",
      description: "City of Roundabouts",
      businessHub: "Section 14 & Setia Alam",
      population: "550K"
    },
    "klang": {
      name: "Klang",
      description: "Royal Town of Selangor",
      businessHub: "Klang Parade & Port Klang",
      population: "850K"
    },
    "singapore": {
      name: "Singapore",
      description: "Southeast Asia's business hub",
      businessHub: "Raffles Place & Marina Bay",
      population: "5.9M"
    }
  };

  const currentService = serviceConfig[service as keyof typeof serviceConfig];
  const currentCity = cityConfig[city as keyof typeof cityConfig];

  if (!currentService || !currentCity) {
    return <div>Service or city not found</div>;
  }

  // Set page title and meta description for SEO
  useEffect(() => {
    const title = `${currentService.title} in ${currentCity.name} | Yokan Digital`;
    const description = language === 'en' 
      ? `Professional ${currentService.title.toLowerCase()} services for businesses in ${currentCity.name}, ${currentCity.description}. Contact us for a custom quote tailored to your business needs.`
      : `Perkhidmatan ${currentService.title.toLowerCase()} profesional untuk perniagaan di ${currentCity.name}, ${currentCity.description}. Hubungi kami untuk sebut harga tersuai mengikut keperluan perniagaan anda.`;
    
    document.title = title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update or create Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);
    
    return () => {
      // Reset to default title when component unmounts
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [currentService, currentCity]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Link href="/#services" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                <ChevronLeft className="w-4 h-4" />
                {t('navigation.backToServices')}
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span className="text-lg text-gray-600 dark:text-gray-300">
                {currentCity.name}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {currentService.title} in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {currentCity.name}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Professional {currentService.title.toLowerCase()} services for businesses in {currentCity.name}. 
              {currentService.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                {currentCity.population} Population
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                {currentCity.businessHub}
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" data-testid="button-get-quote">
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" data-testid="button-view-portfolio">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Our {currentService.title} Services?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We understand the unique business landscape in {currentCity.name}. Our {currentService.title.toLowerCase()} 
                services are specifically tailored to help local businesses succeed in the digital space.
              </p>
              
              <div className="grid gap-4">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-2 border-blue-100 dark:border-blue-800">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-600">{currentService.title} Package</CardTitle>
                <CardDescription>Perfect for businesses in {currentCity.name}</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="mb-4">
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {language === 'en' ? 'Contact us for a custom quote' : 'Hubungi kami untuk sebut harga tersuai'}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {language === 'en' ? 'Tailored to your business needs' : 'Disesuaikan dengan keperluan perniagaan anda'}
                  </p>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span>{language === 'en' ? 'Delivery' : 'Penghantaran'}: {currentService.deliveryTime}</span>
                </div>

                <Button className="w-full" size="lg" data-testid="button-start-project">
                  {language === 'en' ? 'Start Your Project' : 'Mulakan Projek Anda'}
                </Button>

                <div className="flex items-center justify-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600 dark:text-gray-300">5.0 (50+ reviews)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Business Focus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Serving {currentCity.name} Businesses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {currentCity.description}. We help local businesses in {currentCity.businessHub} and surrounding areas 
              establish a strong digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep understanding of {currentCity.name}'s business environment and market dynamics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personal Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Direct communication with local team members who understand your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Quick response times and same-timezone support for urgent requests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started in {currentCity.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our {currentCity.name} team today for a free consultation and see how we can help 
            your business grow with our {currentService.title.toLowerCase()} services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" data-testid="button-contact-us">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us Today
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-blue-600" data-testid="button-call-us">
              <Phone className="w-5 h-5 mr-2" />
              Call +60 3-1234 5678
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}