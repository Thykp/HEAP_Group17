import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "../components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaJsSquare, FaCss3Alt } from 'react-icons/fa';
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiShadcnui } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"

export default function Landing() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <div className="w-full px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">WorkoutWise</div>
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
      </div>

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
                    <SiTypescript className="text-blue-400 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">TypeScript</span>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <RiTailwindCssFill className="text-blue-300 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">Tailwind CSS</span>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <SiShadcnui className="text-black-500 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">Shadcn/UI</span>
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
                    <FaJsSquare className="text-green-600 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">Express.js</span>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <FaJsSquare className="text-yellow-500 text-2xl" />
                    <span className="text-gray-800 dark:text-gray-200">JavaScript</span>
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
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
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
                <div className="text-sm text-muted-foreground">Frontend + Backend</div>
                <p className="text-sm text-muted-foreground">
                  
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 text-center">
                <div className="text-lg font-semibold">Ryan</div>
                <div className="text-sm text-muted-foreground">Backend</div>
                <p className="text-sm text-muted-foreground">

                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 text-center">
                <div className="text-lg font-semibold">Nathan</div>
                <div className="text-sm text-muted-foreground">Consultant</div>
                <p className="text-sm text-muted-foreground">

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-20 flex items-center justify-center border-t text-gray-600 dark:border-gray-800 dark:text-gray-300">
        <p>&copy; Made by Grp17</p>
      </div>
    </div>
  );
}
