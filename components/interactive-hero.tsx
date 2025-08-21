"use client";

import {useEffect, useState} from "react";
import {ArrowRight, Github, Linkedin, Mail} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export function InteractiveHero() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({x: e.clientX, y: e.clientY});
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 transition-all duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 53, 0.15), transparent 40%)`,
        }}
      />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block">
            <div className="relative px-6 py-3 text-sm font-medium rounded-full bg-card/80 backdrop-blur-sm border border-border animate-pulse-glow">
              <span className="relative z-10 text-primary font-semibold">
                Full Stack Developer & UI/UX Designer
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight font-montserrat">
              <span className="block text-foreground">Hi, I'm</span>
              <span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary glitch animate-float"
                data-text="Earl Balitcha"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                Earl Balitcha
              </span>
            </h1>

            <div className="morphing-bg p-1 rounded-lg">
              <div className="bg-background rounded-md p-6">
                <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                  I craft exceptional digital experiences with modern web
                  technologies, specializing in React, Next.js, and full-stack
                  development from Tarlac City, Philippines.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <Button
              className="relative overflow-hidden group bg-primary hover:bg-primary/90 text-primary-foreground transform hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>
              <span className="relative z-10 flex items-center">
                View Projects{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              variant="outline"
              className="border-border text-primary hover:text-primary-foreground hover:bg-primary hover:border-primary bg-transparent transform hover:scale-105 transition-all duration-300">
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4 pt-6">
            {[
              {
                href: "https://github.com/earlbalitcha",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/earlbalitcha/",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:earlbalitcha@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map(({href, icon: Icon, label}) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-card/80 hover:bg-primary text-muted-foreground hover:text-primary-foreground transform hover:scale-110 hover:rotate-12 transition-all duration-300 backdrop-blur-sm">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl animate-pulse" />
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-border flex items-center justify-center overflow-hidden">
              <div className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-pulse">
                EB
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-primary/50 flex justify-center items-start p-2 bg-card/30 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </div>
  );
}
