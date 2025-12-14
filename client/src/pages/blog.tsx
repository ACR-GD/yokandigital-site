import { useEffect } from "react";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/use-language";
import { useQuery } from "@tanstack/react-query";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: "seo-guide-malaysian-businesses-2024",
    title: "Complete SEO Guide for Malaysian Businesses in 2024",
    excerpt: "Master local SEO strategies to dominate search results in Malaysia. Learn keyword research, on-page optimization, and Google My Business tactics.",
    category: "SEO",
    publishDate: "2025-01-15",
    readTime: "8 min read",
    tags: ["SEO", "Local Business", "Malaysia", "Google"]
  },
  {
    slug: "web-design-trends-malaysia-singapore-2024",
    title: "Top Web Design Trends for Malaysia & Singapore in 2024",
    excerpt: "Discover the latest web design trends that Malaysian and Singaporean users love. From mobile-first design to cultural considerations.",
    category: "Web Design",
    publishDate: "2025-01-20",
    readTime: "6 min read",
    tags: ["Web Design", "Trends", "UX", "Mobile"]
  },
  {
    slug: "social-media-marketing-strategy-malaysian-brands",
    title: "Social Media Marketing Strategy for Malaysian Brands",
    excerpt: "Build a winning social media strategy for the Malaysian market. Platform-specific tactics for Facebook, Instagram, TikTok, and LinkedIn.",
    category: "Digital Marketing",
    publishDate: "2025-01-25",
    readTime: "10 min read",
    tags: ["Social Media", "Marketing", "Strategy", "Branding"]
  },
  {
    slug: "google-ads-optimization-malaysia-market",
    title: "Google Ads Optimization for the Malaysian Market",
    excerpt: "Maximize ROI from Google Ads campaigns targeting Malaysian consumers. Budget allocation, keyword bidding, and ad copy best practices.",
    category: "PPC",
    publishDate: "2025-02-01",
    readTime: "7 min read",
    tags: ["Google Ads", "PPC", "ROI", "Advertising"]
  },
  {
    slug: "ecommerce-website-development-malaysia",
    title: "E-commerce Website Development Guide for Malaysia",
    excerpt: "Build successful online stores for the Malaysian market. Payment gateways, logistics integration, and customer behavior insights.",
    category: "E-commerce",
    publishDate: "2025-02-05",
    readTime: "12 min read",
    tags: ["E-commerce", "Development", "Online Store", "Payments"]
  },
  {
    slug: "content-marketing-malaysian-audience",
    title: "Content Marketing That Resonates with Malaysian Audiences",
    excerpt: "Create compelling content that connects with Malaysian consumers. Cultural insights, language preferences, and content formats that work.",
    category: "Content Marketing",
    publishDate: "2025-02-10",
    readTime: "9 min read",
    tags: ["Content Marketing", "Culture", "Storytelling", "Engagement"]
  },
  {
    slug: "website-speed-optimization-malaysia",
    title: "Website Speed Optimization for Malaysian Users",
    excerpt: "Improve website loading times for Malaysian internet infrastructure. Technical optimization and CDN strategies for Southeast Asia.",
    category: "Performance",
    publishDate: "2025-02-15",
    readTime: "8 min read",
    tags: ["Performance", "Speed", "Technical SEO", "UX"]
  },
  {
    slug: "digital-transformation-sme-malaysia",
    title: "Digital Transformation Guide for Malaysian SMEs",
    excerpt: "Help small and medium enterprises embrace digital technologies. Step-by-step roadmap for digital adoption and growth.",
    category: "Business Strategy",
    publishDate: "2025-02-20",
    readTime: "11 min read",
    tags: ["Digital Transformation", "SME", "Technology", "Growth"]
  },
  {
    slug: "email-marketing-best-practices-malaysia",
    title: "Email Marketing Best Practices for Malaysian Businesses",
    excerpt: "Build effective email campaigns for Malaysian consumers. Automation, personalization, and compliance with local regulations.",
    category: "Email Marketing",
    publishDate: "2025-02-25",
    readTime: "7 min read",
    tags: ["Email Marketing", "Automation", "Personalization", "GDPR"]
  },
  {
    slug: "local-business-online-presence-malaysia",
    title: "Building Strong Online Presence for Local Malaysian Businesses",
    excerpt: "Complete guide for local businesses to establish digital presence. Google My Business, local directories, and community engagement.",
    category: "Local SEO",
    publishDate: "2025-03-01",
    readTime: "10 min read",
    tags: ["Local SEO", "Online Presence", "Community", "Directories"]
  },
  {
    slug: "why-labuan-businesses-need-professional-website-2024",
    title: "Why Every Labuan Business Needs a Professional Website in 2024",
    excerpt: "Discover why having a website is crucial for Labuan businesses. From reaching tourists to competing with mainland Malaysia, learn how a professional website drives growth in Labuan's unique market.",
    category: "Web Design",
    publishDate: "2025-11-04",
    readTime: "12 min read",
    tags: ["Labuan", "Website", "Business Growth", "Tourism", "Digital Presence"]
  },
  {
    slug: "paid-advertising-guide-labuan-businesses-2024",
    title: "Complete Paid Advertising Guide for Labuan Businesses in 2024",
    excerpt: "Master paid advertising strategies for Labuan's unique market. Learn Google Ads, Facebook Ads, and local targeting tactics that bring customers to your Labuan business.",
    category: "PPC",
    publishDate: "2025-11-04",
    readTime: "14 min read",
    tags: ["Labuan", "Paid Ads", "Google Ads", "Facebook Ads", "ROI"]
  }
];

export default function BlogPage() {
  const { t } = useLanguage();

  // Fetch blog posts from database
  const { data: dbPostsData } = useQuery<{ success: boolean; posts: BlogPost[] }>({
    queryKey: ['/api/blog/posts/published']
  });

  // Combine database posts with hardcoded posts
  const allPosts = [...(dbPostsData?.posts || []), ...blogPosts].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  // Set page title for SEO
  useEffect(() => {
    document.title = 'Digital Marketing Blog | Yokan Digital - SEO, Web Design & Marketing Tips';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Expert insights on SEO, web design, and digital marketing for Malaysian businesses. Get actionable tips to grow your online presence and boost sales.');
    
    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Simple Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white hover:text-[#00ff88] transition-colors">
            YOKAN<span className="text-[#00ff88]">.</span>
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revenue{" "}
              <span className="text-[#00ff88]">
                Insights
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Expert insights on data-driven revenue architecture, AI automation, 
              and scalable growth systems for B2B companies.
            </p>

            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search blog posts..." 
                  className="pl-10"
                  data-testid="input-blog-search"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {allPosts.map((post, index) => (
              <Card key={post.slug} className="bg-[#0A0A0A] border-white/10 hover:border-[#00ff88]/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30">{post.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500 gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.publishDate).toLocaleDateString('en-MY')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mb-2 line-clamp-2 text-white">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-[#00ff88] transition-colors"
                      data-testid={`link-blog-${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  
                  <CardDescription className="line-clamp-3 text-gray-400">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-white/20 text-gray-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="w-full group border-white/20 text-white hover:border-[#00ff88] hover:text-[#00ff88]" data-testid={`button-read-${post.slug}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Get Revenue Engineering Insights
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join founders and revenue leaders who get data-driven growth strategies weekly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="flex-1 bg-[#050505] border-white/20 text-white placeholder:text-gray-500"
              data-testid="input-newsletter-email"
            />
            <Button className="bg-[#00ff88] text-black hover:bg-[#00ff88]/90" size="lg" data-testid="button-subscribe-newsletter">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Yokan Digital. All rights reserved.
        </div>
      </footer>
    </div>
  );
}