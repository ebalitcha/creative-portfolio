import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Palette,
  Zap,
} from "lucide-react";

import {Button} from "@/components/ui/button";
import {ProjectCard} from "@/components/project-card";
import {Timeline} from "@/components/timeline";
import {ContactForm} from "@/components/contact-form";
import {FloatingNav} from "@/components/floating-nav";
import {MouseFollower} from "@/components/mouse-follower";
import {ScrollProgress} from "@/components/scroll-progress";
import {SectionHeading} from "@/components/section-heading";
import {GlassmorphicCard} from "@/components/glassmorphic-card";
import {MatrixRain} from "@/components/matrix-rain";
import {InteractiveHero} from "@/components/interactive-hero";
import {AnimatedSkillsGrid} from "@/components/animated-skills-grid";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <MatrixRain />
      {/* <MouseFollower /> */}
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative">
        <InteractiveHero />
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="About Me"
            subtitle="My background and journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-border bg-card">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Earl Balitcha"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-white">
              <GlassmorphicCard>
                <p className="text-lg text-white text-muted-foreground leading-relaxed">
                  I'm a passionate full stack web developer based in Tarlac
                  City, specializing in building modern, responsive websites and
                  applications using technologies like React.js, Next.js,
                  Node.js, and more.
                </p>
                <p className="text-lg text-white text-muted-foreground mt-4 leading-relaxed">
                  My journey began at Central Luzon State University where I
                  studied Information Technology from 2019 to 2024. I gained
                  valuable experience as a network engineering intern before
                  transitioning to full-stack development.
                </p>
                <p className="text-lg text-white text-muted-foreground mt-4 leading-relaxed">
                  Currently working at Falcon Global Services Group, I handle
                  everything from Shopify and React development to backend
                  systems with Node.js and SQL Server, always focusing on
                  creating accessible and user-friendly experiences.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-white text-muted-foreground">
                      Name
                    </div>
                    <div className="font-medium">Earl Balitcha</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-white text-muted-foreground">
                      Email
                    </div>
                    <div className="font-medium">earlbalitcha@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-white text-muted-foreground">
                      Location
                    </div>
                    <div className="font-medium">Tarlac City, Philippines</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-white text-muted-foreground">
                      Availability
                    </div>
                    <div className="font-medium text-white">
                      Open to opportunities
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Download Resume
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="My Skills"
            subtitle="Technologies I work with"
          />

          <div className="mt-16">
            <AnimatedSkillsGrid />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="group text-center space-y-6 p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                <Code className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                Frontend Development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                React, Next.js, Vue.js, TypeScript, Responsive Design
              </p>
            </div>
            <div className="group text-center space-y-6 p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-300">
                <Zap className="h-10 w-10 text-secondary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors duration-300">
                Backend Development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Node.js, SQL Server, Prisma ORM, REST & GraphQL APIs
              </p>
            </div>
            <div className="group text-center space-y-6 p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                <Palette className="h-10 w-10 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                UI/UX Design
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Figma, Responsive Design, Accessibility, User Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my recent work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Super Host Depot"
              description="E-commerce platform built with Next.js for hosting solutions and services."
              tags={["Next.js", "TypeScript", "E-commerce", "Responsive"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://superhostdepot.com"
              repoUrl="https://github.com/earlbalitcha"
            />
            <ProjectCard
              title="XMGCA Platform"
              description="Corporate website with multilingual support and modern design."
              tags={[
                "Next.js",
                "Internationalization",
                "Corporate",
                "Modern UI",
              ]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://xmgca.com/en"
              repoUrl="https://github.com/earlbalitcha"
            />
            <ProjectCard
              title="Shopify Integration"
              description="Custom Shopify themes and integrations for e-commerce clients."
              tags={["Shopify", "Liquid", "JavaScript", "Custom Themes"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/earlbalitcha"
            />
            <ProjectCard
              title="HubSpot Integration"
              description="CRM integration and automation solutions for business workflows."
              tags={["HubSpot", "API Integration", "Automation", "CRM"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/earlbalitcha"
            />
            <ProjectCard
              title="React Dashboard"
              description="Modern admin dashboard with data visualization and user management."
              tags={["React", "TypeScript", "Dashboard", "Data Viz"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/earlbalitcha"
            />
            <ProjectCard
              title="Full Stack Web App"
              description="Complete web application with authentication and database integration."
              tags={["Next.js", "Node.js", "SQL Server", "Prisma"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/earlbalitcha"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey"
          />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">earlbalitcha@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium">+63 926 787 6389</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Location
                    </div>
                    <div className="font-medium">Tarlac City, Philippines</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      LinkedIn
                    </div>
                    <div className="font-medium">
                      linkedin.com/in/earlbalitcha
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>
                    Available for freelance work and full-time opportunities
                  </span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl font-montserrat">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Earl
              </span>
              <span className="text-foreground">Balitcha</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} Earl Balitcha. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/earlbalitcha"
              target="_blank"
              rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-card hover:bg-muted text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/earlbalitcha/"
              target="_blank"
              rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-card hover:bg-muted text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:earlbalitcha@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-card hover:bg-muted text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
