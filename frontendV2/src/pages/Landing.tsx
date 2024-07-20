import { MouseEvent } from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "../components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaJsSquare } from 'react-icons/fa';
import { CiDumbbell } from "react-icons/ci";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiShadcnui, SiVite } from "react-icons/si";
import { IoIosStats } from "react-icons/io";
import { AiOutlineOpenAI } from "react-icons/ai";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

export default function Landing() {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="w-full px-4 py-6 flex items-center justify-between bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          <a href="#" onClick={scrollToTop} className="hover:text-gray-900 dark:hover:text-gray-100">
            WorkoutWise
          </a>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuLink asChild>
              <a href="#welcome" onClick={(e) => handleScroll(e, 'welcome')} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                Home
              </a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                Features
              </a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <a href="#tech-stack" onClick={(e) => handleScroll(e, 'tech-stack')} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                Tech Stack
              </a>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <section id="welcome" className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to WorkoutWise
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
                Generative AI Tool for Fitness Plans
              </p>
            </div>
            <div className="space-x-4">
              <Link
                to="/login"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                Get Started
              </Link>
              <a
                href="#features"
                onClick={(e) => handleScroll(e, 'features')}
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                Features
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Features
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
                We empower you with AI-driven fitness plans tailored to your goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <AiOutlineOpenAI className="text-black-500 text-4xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">AI-Powered Fitness Plans</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Generate personalized workout plans based on your fitness goals and preferences, powered by AI.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <CiDumbbell className="text-yellow-500 text-4xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Wide Variety Of Workouts</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Engage with interactive workout routines that adapt to your progress and provide real-time feedback.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <IoIosStats className="text-blue-600 text-4xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Comprehensive Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Track your progress with detailed analytics and reports, helping you stay on top of your fitness journey.
                </p>
              </div>
            </div>
            <div>
              <a
                href="#tech-stack"
                onClick={(e) => handleScroll(e, 'tech-stack')}
                className="inline-flex items-center justify-center rounded-md bg-gray-900 text-sm font-medium text-gray-50 px-8 py-3 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                Tech Stack
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="tech-stack" className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Tech Stack
              </h2>
              <br />
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
                Our technology stack includes:
              </p>
              <br />
              {/* Frontend Technologies */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Frontend</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <FaReact className="text-blue-500 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">React.js</span>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <FaJsSquare className="text-yellow-500 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">JavaScript</span>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <SiTypescript className="text-blue-600 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">TypeScript</span>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <RiTailwindCssFill className="text-blue-400 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">Tailwind CSS</span>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <SiShadcnui className="text-black-500 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">Shadcn UI</span>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <SiVite className="text-purple-600 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">Vite</span>
                  </div>
                </div>
              </div>

              {/* Backend Technologies */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Backend</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <FaNodeJs className="text-green-500 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">Node.js</span>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <FaJsSquare className="text-green-500 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">Express.js</span>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <RiSupabaseFill className="text-green-500 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">Supabase</span>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <AiOutlineOpenAI className="text-black-500 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">OpenAI</span>
                  </div>
                </div>
              </div>
              <div>
                <br />
              <a
                href="#meet"
                onClick={(e) => handleScroll(e, 'meet')}
                className="inline-flex items-center justify-center rounded-md bg-gray-900 text-sm font-medium text-gray-50 px-8 py-3 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                Meet The Team
              </a>
            </div>
            </div>
          </div>
        </div>
        
      </section>

      <section id="meet" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Team</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The team behind the creation of this website.
            </p>
          </div>
          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CK</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 text-center">
                <div className="text-lg font-semibold">Choon Kiat</div>
                <div className="text-sm text-muted-foreground">Frontend</div>
                <p className="text-sm text-muted-foreground">
                  Worked on Frontend design and built components for the Frontend
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>ZY</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 text-center">
                <div className="text-lg font-semibold">Zhan Yan</div>
                <div className="text-sm text-muted-foreground">Frontend</div>
                <p className="text-sm text-muted-foreground">
                Worked on Frontend design and built components for the Frontend
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>KP</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 text-center">
                <div className="text-lg font-semibold">Kendrick</div>
                <div className="text-sm text-muted-foreground">Full-Stack + DevOps</div>
                <p className="text-sm text-muted-foreground">
                  Developed Backend API and Model (MVC) codebase + integration to Supabase and Frontend. Implemented Frontend state management and axios requests. Utilised CI/CD and deployed staging and production environment.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>RH</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 text-center">
                <div className="text-lg font-semibold">Ryan</div>
                <div className="text-sm text-muted-foreground">Backend</div>
                <p className="text-sm text-muted-foreground">
                  Designed and developed Supabase table layout. Developed APIs and Models codebase and automated Supabase requests.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>NG</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 text-center">
                <div className="text-lg font-semibold">Nathan</div>
                <div className="text-sm text-muted-foreground">QA + Scrum</div>
                <p className="text-sm text-muted-foreground">
                  QA Test and project manager for the team. Helped to advise the team on workflow and software blockers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="w-full py-4 px-6 bg-gray-200 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
        <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} WorkoutWise. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
