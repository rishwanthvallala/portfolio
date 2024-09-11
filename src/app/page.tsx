import { ExperienceCard } from '@/components/experience-card';
import { ProjectCard3d } from '@/components/project-card-3d';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import experiences from '@/lib/experiences.json';
import me from '@/lib/img/me.png';
import projects from '@/lib/projects.json';
import { AtSign, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const name = [{ text: 'Rishwanth' }, { text: 'Vallala' }];

    return (
        <div className="flex flex-col overflow-x-hidden">
            {/* Hero */}
            <header className="flex flex-col sm:flex-row h-screen w-full justify-center items-center gap-4 ">
                <div className="flex flex-col gap-2 w-full">
                    <TypewriterEffectSmooth words={name} />
                    <Reveal
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.4 },
                        }}
                    >
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                            Software Engineer
                        </h3>
                    </Reveal>
                    <Reveal
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.4, delay: 0.2 },
                        }}
                    >
                        <p className="leading-7">
                            I plan, design, build, test and deploy software.
                            With the help of coffee of course.
                        </p>
                    </Reveal>
                    <div className="flex gap-4">
                        <TooltipProvider>
                            <Reveal
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.4 },
                                }}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="https://www.linkedin.com/in/rishwanth-vallala-a64775286/"
                                            target="_blank"
                                        >
                                            <Button
                                                variant="secondary"
                                                size="icon"
                                            >
                                                <Linkedin />
                                            </Button>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>LinkedIn</p>
                                    </TooltipContent>

                                </Tooltip>
                            </Reveal>
                            <Reveal
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.4, delay: 0.2 },
                                }}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="https://github.com/rishwanthvallala"
                                            target="_blank"
                                        >
                                            <Button
                                                variant="secondary"
                                                size="icon"
                                            >
                                                <Github />
                                            </Button>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Github</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Reveal>
                            <Reveal
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.4, delay: 0.4 },
                                }}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="mailto:vallalarishwanth@gmail.com"
                                            target="_blank"
                                        >
                                            <Button
                                                variant="secondary"
                                                size="icon"
                                            >
                                                <AtSign />
                                            </Button>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Email</p>
                                    </TooltipContent>
                                </Tooltip>
                            </Reveal>
                        </TooltipProvider>
                    </div>
                </div>
                <div className="flex relative w-full h-full">
                    <Image
                        src={me}
                        alt="Me"
                        fill
                        style={{ objectFit: 'contain' }}
                        className="rounded-md object-cover"
                    />
                </div>
            </header>
            <Separator />
            {/* About */}
            <section className="flex flex-col items-start justify-start gap-4 sm:py-32 py-16">
                <h2
                    id="about"
                    className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl"
                >
                    About Me
                </h2>
                <Reveal
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                    }}
                >
                    <p className="leading-7">
                        I'm Rishwanth Vallala, a creative technologist
                        passionate about bringing ideas to life. Whether
                        designing game maps for Warcraft III or crafting tunes
                        on FL Studio, I've always been drawn to visually
                        appealing and interactive projects.
                        <br />
                        <br />
                        Since diving into programming , I've explored web
                        development extensively while nearing the completion of
                        my Bachelor of Engineering in Information Technology at
                        Vasavi College of Engineering. As an Embedded Software
                        Intern at Unistring Tech Solutions Pvt. Ltd, I led the
                        development of a Python-based client-server app,
                        enhancing data security. Projects like the DSAC IT Club
                        Website and The AR Visualiser showcase my dedication to
                        impactful solutions.
                        <br />
                        <br />
                        With proficiency in Java, Python, and C, along with
                        frameworks like React and Django, I aim for excellence
                        in frontend and backend development. Through
                        certifications like CS50x by Harvard University and
                        hands-on experience with Git and Docker, I continuously
                        refine my skills to build high-quality, scalable
                        applications.
                        <br />
                        <br />
                        Beyond coding, I enjoy gaming, badminton, and
                        binge-watching YouTube. Dedicated to growth in the
                        dynamic field of software engineering, I embrace new
                        challenges, always aiming to evolve.
                    </p>
                </Reveal>
            </section>
            <Separator />
            {/* Experience */}
            <section
                id="experiences"
                className="flex flex-col items-start justify-start gap-4 sm:py-32 sm:mx-24 md:mx-32 lg:mx-64 xl:mx-96 py-16"
            >
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center w-full">
                    Where I've Worked
                </h2>
                <div className="flex flex-col gap-4 md:hidden">
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.title}
                            title={experience.title}
                            company={experience.company}
                            date={experience.date}
                            description={experience.description}
                            skills={experience.skills}
                        />
                    ))}
                </div>
                <TracingBeam className="px-6 hidden md:flex md:flex-col">
                    <div className="flex flex-col gap-4">
                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={experience.title}
                                title={experience.title}
                                company={experience.company}
                                date={experience.date}
                                description={experience.description}
                                skills={experience.skills}
                            />
                        ))}
                    </div>
                </TracingBeam>
            </section>
            <Separator />
            {/* Projects */}
            <section
                id="projects"
                className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16"
            >
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Projects Done
                </h2>
                <div className="flex flex-row flex-wrap gap-x-4 justify-evenly">
                    {projects.map((projects, index) => (
                        <Reveal
                            key={projects.title}
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.4,
                                    delay: index / 30,
                                },
                            }}
                        >
                            <ProjectCard3d
                                title={projects.title}
                                type={projects.type}
                                description={projects.description}
                                imageUrl={projects.imageUrl}
                                githubUrl={projects.githubUrl}
                                demoUrl={projects.demoUrl}
                                skills={projects.skills}
                            />
                        </Reveal>
                    ))}
                </div>
            </section>
            <Separator />
            {/* Skills */}
            <section
                id="skills"
                className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16"
            >
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Skills & Tools
                </h2>
                <br />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-start">
                    {/* Languages */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4 },
                        }}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Languages
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* C */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <linearGradient
                                            id="9nBOzQEsA2vJDj4A8wbora_shQTXiDQiQVR_gr1"
                                            x1="22.48"
                                            x2="31.833"
                                            y1="19.823"
                                            y2="45.52"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                offset="0"
                                                stopColor="#3940a4"
                                            ></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#293091"
                                            ></stop>
                                        </linearGradient>
                                        <path
                                            fill="url(#9nBOzQEsA2vJDj4A8wbora_shQTXiDQiQVR_gr1)"
                                            fillRule="evenodd"
                                            d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0	c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867	c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0	c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867	c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                                            clipRule="evenodd"
                                        ></path>
                                        <linearGradient
                                            id="9nBOzQEsA2vJDj4A8wborb_shQTXiDQiQVR_gr2"
                                            x1="16.43"
                                            x2="26.687"
                                            y1="3.382"
                                            y2="31.562"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                offset="0"
                                                stopColor="#7b83eb"
                                            ></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#5961c3"
                                            ></stop>
                                        </linearGradient>
                                        <path
                                            fill="url(#9nBOzQEsA2vJDj4A8wborb_shQTXiDQiQVR_gr2)"
                                            fillRule="evenodd"
                                            d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836	c3.343-1.872,13.405-7.507,16.748-9.38c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331	c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            fillRule="evenodd"
                                            d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14s-14-6.273-14-14	S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                                            clipRule="evenodd"
                                        ></path>
                                        <linearGradient
                                            id="9nBOzQEsA2vJDj4A8wborc_shQTXiDQiQVR_gr3"
                                            x1="31.031"
                                            x2="39.734"
                                            y1="12.865"
                                            y2="36.777"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop
                                                offset="0"
                                                stopColor="#5c65d6"
                                            ></stop>
                                            <stop
                                                offset=".999"
                                                stopColor="#464eb0"
                                            ></stop>
                                        </linearGradient>
                                        <path
                                            fill="url(#9nBOzQEsA2vJDj4A8wborc_shQTXiDQiQVR_gr3)"
                                            fillRule="evenodd"
                                            d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127	L23.593,24L42.485,13.205z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            d="M24,10c5.128,0,9.602,2.771,12.041,6.887l-6.073,3.47C28.737,18.347,26.527,17,24,17c-3.864,0-7,3.136-7,7 c0,3.863,3.137,7,7,7c2.57,0,4.812-1.392,6.029-3.459l6.132,3.374C33.75,35.142,29.21,38,24,38c-7.727,0-14-6.273-14-14 S16.273,10,24,10 M24,9.5C16.005,9.5,9.5,16.005,9.5,24S16.005,38.5,24,38.5c5.188,0,10.014-2.812,12.595-7.337l0.252-0.441 l-0.445-0.245l-6.132-3.374l-0.425-0.234l-0.246,0.418C28.431,29.269,26.286,30.5,24,30.5c-3.584,0-6.5-2.916-6.5-6.5 s2.916-6.5,6.5-6.5c2.275,0,4.346,1.166,5.542,3.118l0.253,0.414l0.421-0.241l6.073-3.47l0.441-0.252l-0.259-0.437 C33.864,12.233,29.086,9.5,24,9.5L24,9.5z"
                                            opacity=".05"
                                        ></path>
                                        <path
                                            d="M24,10c5.128,0,9.602,2.771,12.041,6.887l-6.073,3.47C28.737,18.347,26.527,17,24,17c-3.864,0-7,3.136-7,7 c0,3.863,3.137,7,7,7c2.57,0,4.812-1.392,6.029-3.459l6.132,3.374C33.75,35.142,29.21,38,24,38c-7.727,0-14-6.273-14-14 S16.273,10,24,10 M24,9.5C16.005,9.5,9.5,16.005,9.5,24S16.005,38.5,24,38.5c5.188,0,10.014-2.812,12.595-7.337l0.252-0.441 l-0.445-0.245l-6.132-3.374l-0.425-0.234l-0.246,0.418C28.431,29.269,26.286,30.5,24,30.5c-3.584,0-6.5-2.916-6.5-6.5 s2.916-6.5,6.5-6.5c2.275,0,4.346,1.166,5.542,3.118l0.253,0.414l0.421-0.241l6.073-3.47l0.441-0.252l-0.259-0.437 C33.864,12.233,29.086,9.5,24,9.5L24,9.5z"
                                            opacity=".07"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        C
                                    </p>
                                </div>
                                {/* C++ */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#00549d"
                                            fillRule="evenodd"
                                            d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            fill="#0086d4"
                                            fillRule="evenodd"
                                            d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            fillRule="evenodd"
                                            d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            fill="#0075c0"
                                            fillRule="evenodd"
                                            d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            fillRule="evenodd"
                                            d="M31 21H33V27H31zM38 21H40V27H38z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            fillRule="evenodd"
                                            d="M29 23H35V25H29zM36 23H42V25H36z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        C++
                                    </p>
                                </div>
                                {/* Java */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#F44336"
                                            d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                                        ></path>
                                        <path
                                            fill="#F44336"
                                            d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                                        ></path>
                                        <g>
                                            <path
                                                fill="#1565C0"
                                                d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                                            ></path>
                                            <path
                                                fill="#1565C0"
                                                d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                                            ></path>
                                            <path
                                                fill="#1565C0"
                                                d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                                            ></path>
                                            <path
                                                fill="#1565C0"
                                                d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                                            ></path>
                                            <path
                                                fill="#1565C0"
                                                d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                                            ></path>
                                        </g>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        Java
                                    </p>
                                </div>
                                {/* Python */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#0277BD"
                                            d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                                        ></path>
                                        <path
                                            fill="#FFC107"
                                            d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        Python
                                    </p>
                                </div>

                                {/* JavaScript */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#f7df1e"
                                            d="M6,42V6h36v36H6z"
                                        ></path>
                                        <path
                                            fill="#000001"
                                            d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        JavaScript
                                    </p>
                                </div>
                                {/* TypeScript */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <rect
                                            width="36"
                                            height="36"
                                            x="6"
                                            y="6"
                                            fill="#1976d2"
                                        ></rect>
                                        <polygon
                                            fill="#fff"
                                            points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                                        ></polygon>
                                        <path
                                            fill="#fff"
                                            d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        TypeScript
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    {/* Frontend */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4, delay: 0.1 },
                        }}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Frontend
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* CSS */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 100 100"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            d="M51.958,98c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	l-6.179-69.304c-0.16-1.813,0.451-3.621,1.677-4.962C14.485,8.77,16.233,8,18.053,8h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L86.236,84.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C53.124,97.921,52.542,98,51.958,98z"
                                            opacity=".35"
                                        ></path>
                                        <path
                                            fill="#f2f2f2"
                                            d="M49.958,96c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	L9.578,13.077c-0.16-1.813,0.451-3.621,1.677-4.962C12.485,6.77,14.233,6,16.053,6h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L84.236,82.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C51.124,95.921,50.542,96,49.958,96z"
                                        ></path>
                                        <polygon
                                            fill="#2b59a1"
                                            points="83.947,12.5 77.762,81.792 49.958,89.5 22.231,81.803 16.053,12.5"
                                        ></polygon>
                                        <path
                                            fill="#40396e"
                                            d="M49.958,91c-0.135,0-0.27-0.019-0.401-0.055L21.83,83.249c-0.602-0.167-1.037-0.689-1.093-1.312	l-6.179-69.303c-0.037-0.419,0.104-0.835,0.388-1.146C15.23,11.177,15.632,11,16.053,11h67.895c0.421,0,0.822,0.177,1.106,0.488	c0.284,0.311,0.425,0.726,0.388,1.146l-6.186,69.292c-0.056,0.622-0.491,1.145-1.094,1.312l-27.804,7.709	C50.228,90.982,50.093,91,49.958,91z M23.634,80.635l26.324,7.309l26.402-7.32L82.308,14H17.692L23.634,80.635z"
                                        ></path>
                                        <polygon
                                            fill="#2785bd"
                                            points="72.467,77.38 77.771,17.957 50,17.957 50,83.608"
                                        ></polygon>
                                        <polygon
                                            fill="#d9eeff"
                                            points="50,43.957 51,47.957 50,51.957 30.94,51.957 30.23,43.957"
                                        ></polygon>
                                        <polygon
                                            fill="#d9eeff"
                                            points="50,26.957 51,30.957 50,34.957 29.441,34.957 28.72,26.957"
                                        ></polygon>
                                        <polygon
                                            fill="#d9eeff"
                                            points="51,69.957 50,74.796 32.55,69.967 31.39,56.957 39.92,56.957 40.5,63.397 50,65.957"
                                        ></polygon>
                                        <path
                                            fill="#f2f2f2"
                                            d="M50,26.957v8h11.969l-0.807,9H50c-0.009-0.002-0.008,8-0.008,8h10.485l-1.027,11.44L50,65.957v8.84	l17.4-4.83l0.12-1.44l2-22.37l0.21-2.29l1.5-16.91H50z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        CSS
                                    </p>
                                </div>

                                {/* HTML */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#E65100"
                                            d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                                        ></path>
                                        <path
                                            fill="#FF6D00"
                                            d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                                        ></path>
                                        <path
                                            fill="#FFF"
                                            d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                                        ></path>
                                        <path
                                            fill="#EEE"
                                            d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        HTML
                                    </p>
                                </div>

                                {/* React */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="animate-spin hover:animate-none"
                                    >
                                        <path
                                            fill="#80deea"
                                            d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                                        ></path>
                                        <path
                                            fill="#80deea"
                                            d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                                        ></path>
                                        <path
                                            fill="#80deea"
                                            d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                                        ></path>
                                        <circle
                                            cx="24"
                                            cy="24"
                                            r="4"
                                            fill="#80deea"
                                        ></circle>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        React
                                    </p>
                                </div>

                                {/* NextJS */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0,0,256,256"
                                        className="hover:animate-spin"
                                    >
                                        <g
                                            fill="#ffffff"
                                            fillRule="nonzero"
                                            stroke="none"
                                            strokeWidth="1"
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            strokeMiterlimit="10"
                                            strokeDasharray=""
                                            strokeDashoffset="0"
                                            fontFamily="none"
                                            fontWeight="none"
                                            fontSize="none"
                                            textAnchor="none"
                                        >
                                            <g transform="scale(5.33333,5.33333)">
                                                <path d="M18.974,31.5c0,0.828 -0.671,1.5 -1.5,1.5c-0.829,0 -1.5,-0.672 -1.5,-1.5v-14c0,-0.653 0.423,-1.231 1.045,-1.43c0.625,-0.198 1.302,0.03 1.679,0.563l16.777,23.704c5.142,-3.628 8.525,-9.602 8.525,-16.337c0,-11 -9,-20 -20,-20c-11,0 -20,9 -20,20c0,11 9,20 20,20c3.192,0 6.206,-0.777 8.89,-2.122l-13.916,-19.662zM28.974,16.5c0,-0.828 0.671,-1.5 1.5,-1.5c0.829,0 1.5,0.672 1.5,1.5v13.84l-3,-4.227z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        NextJS
                                    </p>
                                </div>

                                {/* Angular */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#bdbdbd"
                                            d="M23.933 2L3 9.285 6.308 36.408 23.955 46 41.693 36.278 45 9.156z"
                                        ></path>
                                        <path
                                            fill="#b71c1c"
                                            d="M42.818 10.527L24 4.135 24 43.695 39.832 35.017z"
                                        ></path>
                                        <path
                                            fill="#dd2c00"
                                            d="M23.941 4.115L5.181 10.644 8.168 35.143 23.951 43.721 24 43.695 24 4.135z"
                                        ></path>
                                        <path
                                            fill="#bdbdbd"
                                            d="M24 5.996L24 15.504 32.578 34 36.987 34z"
                                        ></path>
                                        <path
                                            fill="#eee"
                                            d="M11.013 34L15.422 34 24 15.504 24 5.996z"
                                        ></path>
                                        <path
                                            fill="#bdbdbd"
                                            d="M24 24H30V28H24z"
                                        ></path>
                                        <path
                                            fill="#eee"
                                            d="M18 24H24V28H18z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        Angular
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    {/* Backend */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4, delay: 0.2 },
                        }}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Backend
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* NestJS */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#f50057"
                                            d="M24.5,32.88c0,0-0.01-0.04-0.02-0.12C24.5,32.84,24.5,32.88,24.5,32.88z"
                                        ></path>
                                        <path
                                            fill="#f50057"
                                            d="M27.375,8.625c0,0-0.375-1.375,0.125-2.5s0.5-1.875-0.5-3c2-0.125,2.75,1.25,2.75,1.25l0.025,0.159 c0.118,0.766-0.278,1.494-0.946,1.888C28.219,6.781,27.563,7.437,27.375,8.625z"
                                        ></path>
                                        <path
                                            fill="#f50057"
                                            d="M41.63,36.24c0.02-0.21,0.34-3.04-0.38-4.36c-1.5,4.24-3,8.12-7.37,10.87 c0.62-1.25,1.62-3.25,2.62-6.25c-3,4-9,8-13.5,8.25c3.04-1.68,4.75-3.84,5.5-5.25c0,0-1.75,0.5-3.88,0.75 c2.88-1.75,4.88-4.87,3.88-9.75c-2,6.25-4.75,8.25-8.38,8.62c-3.62,0.38-6.87-1.5-6.87-1.5l1.25-0.12c0,0-3.25-2.5-2.12-5.75 c0.05-0.16,0.11-0.31,0.18-0.45c0.82-1.82,3.61-0.9,3.32,1.07v0.01c0,0,0.87,2.37,3.24,1.74c0.76-1.24,1.26-2.5,1.26-2.5l0.37,1.63 c0,0,1.75-0.75,1.75-2.13c1.5,0.57,1.88,1.28,1.97,1.59c-0.26-1.4-2.52-11.03-14.49-10.89l-2.09,1.94 c-0.14,0.13-0.36,0.02-0.34-0.16L7.71,22l0.14-0.14c-0.04,0.01-0.09,0-0.13,0L7.71,22l-0.82,0.76c-0.14,0.13-0.36,0.02-0.34-0.16 l0.1-1.02c-1.74-0.74-1.9-2.7-1.9-2.7S2.58,18.27,3.5,15.5C4,14,5.2,13.85,5.71,13.97c0.65,0.15,1.32,0.16,1.94-0.09 c0.9-0.36,2.05-1.05,2.85-2.38C12,9,14.25,8,19.12,8c6.45,0,9.05,1.98,9.35,2.22c-0.18-0.21-1.27-1.66,1.03-3.84 c2.27-2.16,1.86-2.67,1.77-2.75c0.34,0.1,4.75,1.6,5.23,7.37c0.5,6-6.5,7.25-6.5,7.25s9,1.75,9.12-6.75 c1.76,1,5.38,4.75,5.88,12.88C45.49,32.26,41.84,36.03,41.63,36.24z"
                                        ></path>
                                        <path
                                            fill="#f50057"
                                            d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"
                                        ></path>
                                        <path
                                            fill="#f50057"
                                            d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        NestJS
                                    </p>
                                </div>

                                {/* Spring Boot */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#8bc34a"
                                            d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        Spring Boot
                                    </p>
                                </div>

                                {/* Django */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0,0,256,256"
                                        className="hover:animate-spin"
                                    >
                                        <g
                                            fill="#ffffff"
                                            fillRule="nonzero"
                                            stroke="none"
                                            strokeWidth="1"
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            strokeMiterlimit="10"
                                            strokeDasharray=""
                                            strokeDashoffset="0"
                                            fontFamily="none"
                                            fontWeight="none"
                                            fontSize="none"
                                            textAnchor="none"
                                        >
                                            <g transform="scale(5.12,5.12)">
                                                <path d="M6.04492,15.99023v4.23047c-0.408,-0.105 -0.8978,-0.14062 -1.3418,-0.14062c-2.859,0 -4.70312,1.79269 -4.70312,4.55469c0,2.868 1.73808,4.35928 5.08008,4.36328c1.116,0 2.14978,-0.10219 3.55078,-0.36719v-12.64063zM10.24609,16.00391v2.7793h2.73633v-2.7793zM10.24609,20v5.61523c0,2.358 -0.12267,3.2553 -0.51367,4.0293c-0.373,0.757 -0.95802,1.2515 -2.16602,1.8125l2.53906,1.19727c1.208,-0.601 1.79233,-1.14386 2.23633,-2.00586c0.475,-0.896 0.63672,-1.93566 0.63672,-4.09766v-6.55078zM45.56641,20c-2.809,0 -4.56141,1.76189 -4.56641,4.58789c0,2.722 1.69808,4.41211 4.45508,4.41211c2.792,0 4.54492,-1.75936 4.54492,-4.56836c0,-2.74 -1.68059,-4.43164 -4.43359,-4.43164zM18.08398,20.08008c-1.21,0 -2.31756,0.24764 -3.47656,0.80664l0.00391,2.08789c1.024,-0.543 2.11398,-0.82422 3.08398,-0.82422c0.662,0 0.90234,0.17797 0.90234,0.66797v0.59375c-3.22,0.278 -4.53125,1.15483 -4.53125,3.04883c0,1.751 0.9875,2.53906 3.1875,2.53906c1.088,0 2.57109,-0.12483 3.74609,-0.29883v-5.48242c0,-1.122 -0.07102,-1.64778 -0.29102,-2.05078c-0.392,-0.72 -1.277,-1.08789 -2.625,-1.08789zM26.91797,20.08008c-1.348,0 -2.67892,0.19128 -4.29492,0.61328v8.19727h2.73242v-6.4375c0.55,-0.16 0.88576,-0.19336 1.25977,-0.19336c0.975,0 1.43164,0.38678 1.43164,1.42578v5.20508h2.63672v-5.3125c0,-1.353 -0.18105,-1.98741 -0.74805,-2.56641c-0.602,-0.614 -1.61658,-0.93164 -3.01758,-0.93164zM37.78516,20.0957c-3.993,0 -6.25,1.73836 -6.25,4.81836c0,2.48 1.52387,4.04688 3.92188,4.04688c0.708,0 1.24339,-0.10714 1.77539,-0.36914v0.05078c0,1.723 -0.76464,2.44531 -2.55664,2.44531c-1.015,0 -1.97269,-0.22675 -2.92969,-0.71875h-0.00195v2.50195c0.958,0.37 1.88027,0.52734 2.94727,0.52734c2.096,0 3.57183,-0.6527 4.42383,-1.9707c0.584,-0.899 0.78125,-1.9895 0.78125,-4.3125v-0.73828c-0.018,-0.37 -0.01716,-0.73937 -0.03516,-1.10937l-0.01758,-1.47852l-0.03516,-1.14453v-0.2832c0.549,0.052 -0.11863,-0.06578 0.60938,0.07422l0.9375,-1.95312c-1.313,-0.265 -2.39731,-0.38672 -3.57031,-0.38672zM45.52734,22.1582c1.056,0 1.66211,0.87089 1.66211,2.33789c0,1.484 -0.62269,2.33984 -1.67969,2.33984c-1.071,0 -1.70117,-0.85584 -1.70117,-2.33984c0,-1.484 0.62575,-2.33789 1.71875,-2.33789zM4.9707,22.25977c0.3374,0 0.7525,0.03606 1.07227,0.14063v4.34766c-0.391,0.052 -0.78684,0.07031 -1.08984,0.07031c-1.401,0 -2.16602,-0.79633 -2.16602,-2.23633c0,-1.479 0.79959,-2.32227 2.18359,-2.32227zM36.89453,22.27734h0.19727h0.08789v0.20898l0.01758,0.89648l0.01758,1.25c0,0.369 0.01758,0.72206 0.01758,1.03906v0.73828v0.19727c-0.352,0.105 -0.65434,0.17383 -1.02734,0.17383c-1.208,0 -1.88477,-0.77591 -1.88477,-2.12891c0,-0.949 0.33719,-1.61828 0.99219,-1.98828c0.426,-0.265 1.05003,-0.40372 1.58203,-0.38672zM18.7168,25.17773v1.80664c-0.51,0.087 -0.86972,0.12305 -1.26172,0.12305c-0.717,0 -1.04102,-0.24648 -1.04102,-0.77148c0,-0.701 0.56574,-0.9842 2.30273,-1.1582z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        Django
                                    </p>
                                </div>

                                {/* Node */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#388e3c"
                                            d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"
                                        ></path>
                                        <path
                                            fill="#37474f"
                                            d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"
                                        ></path>
                                        <path
                                            fill="#2e7d32"
                                            d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                                        ></path>
                                        <path
                                            fill="#4caf50"
                                            d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
                                        ></path>
                                        <path
                                            fill="#37474f"
                                            d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        Node
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    {/* Database & Cloud */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4, delay: 0.3 },
                        }}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Database & Cloud
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* AWS */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0,0,256,256"
                                        className="hover:animate-spin"
                                    >
                                        <g
                                            fill="none"
                                            fillRule="nonzero"
                                            stroke="none"
                                            strokeWidth="1"
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            strokeMiterlimit="10"
                                            strokeDasharray=""
                                            strokeDashoffset="0"
                                            fontFamily="none"
                                            fontWeight="none"
                                            fontSize="none"
                                            textAnchor="none"
                                        >
                                            <g transform="scale(5.33333,5.33333)">
                                                <path
                                                    d="M13.527,21.529c0,0.597 0.064,1.08 0.176,1.435c0.128,0.355 0.287,0.742 0.511,1.161c0.08,0.129 0.112,0.258 0.112,0.371c0,0.161 -0.096,0.322 -0.303,0.484l-1.006,0.677c-0.144,0.097 -0.287,0.145 -0.415,0.145c-0.16,0 -0.319,-0.081 -0.479,-0.226c-0.224,-0.242 -0.415,-0.5 -0.575,-0.758c-0.16,-0.274 -0.319,-0.58 -0.495,-0.951c-1.245,1.483 -2.81,2.225 -4.694,2.225c-1.341,0 -2.411,-0.387 -3.193,-1.161c-0.782,-0.774 -1.181,-1.806 -1.181,-3.096c0,-1.37 0.479,-2.483 1.453,-3.321c0.974,-0.838 2.267,-1.258 3.911,-1.258c0.543,0 1.102,0.048 1.692,0.129c0.59,0.081 1.197,0.21 1.836,0.355v-1.177c0,-1.225 -0.255,-2.08 -0.75,-2.58c-0.511,-0.5 -1.373,-0.742 -2.602,-0.742c-0.559,0 -1.133,0.064 -1.724,0.21c-0.591,0.145 -1.165,0.322 -1.724,0.548c-0.255,0.113 -0.447,0.177 -0.559,0.21c-0.112,0.032 -0.192,0.048 -0.255,0.048c-0.224,0 -0.335,-0.161 -0.335,-0.5v-0.79c0,-0.258 0.032,-0.451 0.112,-0.564c0.08,-0.113 0.224,-0.226 0.447,-0.339c0.559,-0.29 1.229,-0.532 2.012,-0.726c0.782,-0.21 1.612,-0.306 2.49,-0.306c1.9,0 3.289,0.435 4.183,1.306c0.878,0.871 1.325,2.193 1.325,3.966v5.224h0.03zM7.045,23.979c0.527,0 1.07,-0.097 1.644,-0.29c0.575,-0.193 1.086,-0.548 1.517,-1.032c0.255,-0.306 0.447,-0.645 0.543,-1.032c0.096,-0.387 0.16,-0.855 0.16,-1.403v-0.677c-0.463,-0.113 -0.958,-0.21 -1.469,-0.274c-0.511,-0.064 -1.006,-0.097 -1.501,-0.097c-1.07,0 -1.852,0.21 -2.379,0.645c-0.527,0.435 -0.782,1.048 -0.782,1.854c0,0.758 0.192,1.322 0.591,1.709c0.383,0.404 0.942,0.597 1.676,0.597zM19.865,25.721c-0.287,0 -0.479,-0.048 -0.607,-0.161c-0.128,-0.097 -0.239,-0.322 -0.335,-0.629l-3.752,-12.463c-0.096,-0.322 -0.144,-0.532 -0.144,-0.645c0,-0.258 0.128,-0.403 0.383,-0.403h1.565c0.303,0 0.511,0.048 0.623,0.161c0.128,0.097 0.223,0.322 0.319,0.629l2.682,10.674l2.49,-10.674c0.08,-0.322 0.176,-0.532 0.303,-0.629c0.128,-0.097 0.351,-0.161 0.639,-0.161h1.277c0.303,0 0.511,0.048 0.639,0.161c0.128,0.097 0.239,0.322 0.303,0.629l2.522,10.803l2.762,-10.803c0.096,-0.322 0.208,-0.532 0.319,-0.629c0.128,-0.097 0.335,-0.161 0.623,-0.161h1.485c0.255,0 0.399,0.129 0.399,0.403c0,0.081 -0.016,0.161 -0.032,0.258c-0.016,0.097 -0.048,0.226 -0.112,0.403l-3.847,12.463c-0.096,0.322 -0.208,0.532 -0.335,0.629c-0.127,0.097 -0.335,0.161 -0.607,0.161h-1.373c-0.303,0 -0.511,-0.048 -0.639,-0.161c-0.128,-0.113 -0.239,-0.322 -0.303,-0.645l-2.474,-10.4l-2.458,10.384c-0.08,0.322 -0.176,0.532 -0.303,0.645c-0.128,0.113 -0.351,0.161 -0.639,0.161zM40.379,26.156c-0.83,0 -1.66,-0.097 -2.458,-0.29c-0.798,-0.193 -1.421,-0.403 -1.836,-0.645c-0.255,-0.145 -0.431,-0.306 -0.495,-0.451c-0.064,-0.145 -0.096,-0.306 -0.096,-0.451v-0.822c0,-0.339 0.128,-0.5 0.367,-0.5c0.096,0 0.192,0.016 0.287,0.048c0.096,0.032 0.239,0.097 0.399,0.161c0.543,0.242 1.133,0.435 1.756,0.564c0.639,0.129 1.261,0.193 1.9,0.193c1.006,0 1.788,-0.177 2.331,-0.532c0.543,-0.355 0.83,-0.871 0.83,-1.532c0,-0.451 -0.144,-0.822 -0.431,-1.129c-0.287,-0.306 -0.83,-0.58 -1.612,-0.838l-2.315,-0.726c-1.165,-0.371 -2.027,-0.919 -2.554,-1.645c-0.527,-0.709 -0.798,-1.499 -0.798,-2.338c0,-0.677 0.144,-1.274 0.431,-1.79c0.287,-0.516 0.671,-0.967 1.149,-1.322c0.479,-0.371 1.022,-0.645 1.66,-0.838c0.639,-0.192 1.309,-0.273 2.012,-0.273c0.351,0 0.718,0.016 1.07,0.064c0.367,0.048 0.702,0.113 1.038,0.177c0.319,0.081 0.623,0.161 0.91,0.258c0.287,0.097 0.511,0.193 0.671,0.29c0.224,0.129 0.383,0.258 0.479,0.403c0.096,0.129 0.144,0.306 0.144,0.532v0.758c0,0.339 -0.128,0.516 -0.367,0.516c-0.128,0 -0.335,-0.064 -0.607,-0.193c-0.91,-0.419 -1.932,-0.629 -3.065,-0.629c-0.91,0 -1.628,0.145 -2.123,0.451c-0.495,0.306 -0.75,0.774 -0.75,1.435c0,0.451 0.16,0.838 0.479,1.145c0.319,0.306 0.91,0.613 1.756,0.887l2.267,0.726c1.149,0.371 1.98,0.887 2.474,1.548c0.494,0.661 0.734,1.419 0.734,2.257c0,0.693 -0.144,1.322 -0.415,1.87c-0.287,0.548 -0.671,1.032 -1.165,1.419c-0.495,0.403 -1.086,0.693 -1.772,0.903c-0.721,0.226 -1.471,0.339 -2.285,0.339z"
                                                    fill="#ffffff"
                                                ></path>
                                                <path
                                                    d="M43.396,33.992c-5.252,3.918 -12.883,5.998 -19.445,5.998c-9.195,0 -17.481,-3.434 -23.739,-9.142c-0.495,-0.451 -0.048,-1.064 0.543,-0.709c6.769,3.966 15.118,6.369 23.755,6.369c5.827,0 12.229,-1.225 18.119,-3.741c0.879,-0.403 1.629,0.58 0.767,1.225zM45.583,31.477c-0.671,-0.871 -4.438,-0.419 -6.146,-0.21c-0.511,0.064 -0.591,-0.387 -0.128,-0.726c3.001,-2.128 7.934,-1.516 8.509,-0.806c0.575,0.726 -0.16,5.708 -2.969,8.094c-0.431,0.371 -0.846,0.177 -0.655,-0.306c0.639,-1.596 2.06,-5.192 1.389,-6.046z"
                                                    fill="#ff9900"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        AWS
                                    </p>
                                </div>

                                {/* PostgreSQL */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0,0,256,256"
                                        className="hover:animate-spin"
                                    >
                                        <g
                                            fill="#ffffff"
                                            fillRule="nonzero"
                                            stroke="none"
                                            strokeWidth="1"
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            strokeMiterlimit="10"
                                            strokeDasharray=""
                                            strokeDashoffset="0"
                                            fontFamily="none"
                                            fontWeight="none"
                                            fontSize="none"
                                            textAnchor="none"
                                        >
                                            <g transform="scale(5.12,5.12)">
                                                <path d="M35.19922,2.10156c-1.5,0 -2.80078,0.29688 -4,0.59766c2.10156,0.89844 3.40234,2 4.10156,2.5c1.60156,1.39844 2.5,2.80078 4.10156,5.10156c0.29688,0.5 0.79688,1.19922 1.09766,2.29688c0.30078,1 0.30078,1.80078 0.30078,2.60156c0,1.10156 -0.10156,2 -0.20312,2.89844c-0.09766,0.70313 -0.09766,1.00391 -0.19531,1.20313c0,0.10156 0,0.19922 -0.10156,0.39844c0,0.5 0,0.70313 0.10156,1.10156c0,0.39844 0.09766,0.80078 0.09766,1.5c0.10156,1.30078 0.10156,2.19922 -0.09766,3.29688v0.40234c-0.20312,0.89844 -0.40234,1.80078 -0.90234,2.59766c0.10156,0.20313 0.19922,0.30078 0.30078,0.5c0.5,-0.69922 0.89844,-1.39844 1.29688,-2.19531c1.20313,-2.20312 1.90234,-4.10156 2.40234,-5.5c0.89844,-2.60156 1.39844,-4.50391 1.69922,-5.90234c0.69922,-3 0.80078,-4.39844 0.5,-6c0,-0.5 -0.19922,-1.40234 -0.69922,-2.30078c-1.10156,-2 -2.80078,-2.89844 -4,-3.5c-0.80078,-0.39844 -2.90234,-1.5 -5.80078,-1.59766zM13.53516,2.54297c-1.15234,-0.02344 -2.55859,0.10547 -4.13672,0.85547c-0.5,0.20313 -2,0.90234 -3.19922,2.5c-0.80078,1 -1.39844,2.5 -1.69922,4.19922c-0.30078,1.5 -0.40234,3.30469 0.19922,6.70313c0.39844,2.39844 0.80078,4 1.60156,7.29688c0.10156,0.40234 0.69922,2.20313 2,6.20313l0.09766,0.19922c0.20313,0.69922 0.80078,2.19922 2.10156,3.69922c0.89844,1 1.69922,1.60156 2.40234,1.60156h0.19531c1.30078,0 2.20313,-1 3,-1.80078c0,-0.10156 1.90234,-2.39844 2.60156,-3.19922c-0.10156,-0.10156 -0.29687,-0.10156 -0.39844,-0.20312c-1.19922,-0.69922 -2.10156,-1.79687 -2.80078,-3c-1.19922,-2.19922 -1.10156,-4.39844 -0.90234,-5.5l0.10156,-1.69531c-0.39844,-2.70312 -0.29687,-5.30078 0.20313,-7.90234c0.39844,-2.19922 0.89844,-4.39844 2.69531,-6.69922c0.60156,-0.80078 1.30078,-1.5 2,-2c-1.59766,-0.69922 -3.29687,-1.10156 -5,-1.19922c-0.32422,-0.02734 -0.67969,-0.05078 -1.0625,-0.05859zM26.09766,3.39844c-0.5,0 -1,0 -1.5,0.10156c-2,0.39844 -3.89844,1.5 -5.39844,3.39844c-1.5,1.90234 -1.89844,3.69922 -2.29687,5.80078c-0.20312,0.80078 -0.20312,1.5 -0.30469,2.30078c0.60156,-0.5 1.40234,-1.10156 2.60156,-1.40234c0.69922,-0.19922 2.5,-0.79687 4,0.10156c0.5,0.30078 1.19922,0.90234 1.89844,2.60156c1.5,4.19922 0.00391,8.5 -0.19531,8.89844c-0.10156,0.39844 -0.30078,0.69922 -0.40234,0.89844c-0.19922,0.5 -0.39844,0.90234 -0.59766,1.70313c-0.10156,0.69922 -0.20312,1.30078 -0.20312,2c0.30078,0 0.60156,0.09766 0.89844,0.29688c0.5,0.5 0.60156,1.20313 0.70313,1.5c0.19922,1.60156 0.19922,3.60156 0.19922,5.60156c0,1.60156 0,3.10156 0.09766,4.10156c0.20313,2.30078 0.90234,3.89844 1.90234,4.69922c0.69922,0.60156 1.59766,0.59766 2.09766,0.69922h0.20313c1.5,0 3.89844,-1 4.79688,-2.39844c0.5,-0.80078 0.70313,-1.5 0.90234,-2.5c0.10156,-0.60156 0.09766,-0.89844 0.19922,-1.5c0,-0.30078 0.10156,-0.80078 0.10156,-1.39844c0,-0.5 0.09766,-1.10156 0.19922,-1.80469c0.10156,-1.69922 0.39844,-3.69531 0.5,-4.79687c0.10156,-1.30078 0.69922,-2.40234 1.19922,-3.10156c-0.69922,-0.10156 -1.39844,-0.69922 -1.79687,-1.69922c-0.60156,-1.10156 -0.70312,-1.40234 -0.80469,-1.90234c-0.09766,-0.39844 -0.29687,-0.89844 -1,-2.39844c-1.5,-3.39844 -1.69531,-4.39844 -1.69531,-5.19922c-0.10156,-1.10156 -0.20312,-2.59766 1,-3.59766c1.79688,-1.60156 4.09766,-1.5 5.29688,-1.10156v-0.20312c-0.19922,-0.79687 -0.59766,-1.39844 -0.89844,-1.79687c-1.5,-2.30078 -2.30078,-3.5 -3.70312,-4.69922c-0.59766,-0.5 -2.09766,-1.70312 -4.29687,-2.5c-1,-0.30078 -2.20312,-0.70312 -3.70312,-0.70312zM37.15234,15.125c-0.72656,-0.05078 -1.65234,0.07422 -2.45312,0.77734c-0.39844,0.39844 -0.39844,1.19922 -0.29687,1.89844c0,0.5 0.09766,1.19922 1.59766,4.60156c0.69922,1.59766 0.89844,2.09766 1,2.5c0.10156,0.39844 0.19922,0.59766 0.80078,1.69531c0.10156,0.20313 0.19922,0.40234 0.39844,0.60156c0.19922,-0.30078 0.30078,-0.80078 0.39844,-1.60156l0.10156,-0.29687c0.19922,-0.89844 0.10156,-1.60156 0.10156,-2.80078c0,-0.60156 -0.10156,-1 -0.10156,-1.30078c-0.10156,-0.5 -0.10156,-0.89844 -0.10156,-1.5c-0.19922,-0.30078 -0.19922,-0.39844 -0.09766,-0.60156c0,-0.19922 0.09766,-0.49609 0.19922,-1.09766c0.10156,-0.80078 0.20313,-1.5 0.20313,-2.30078c-0.20312,-0.10156 -0.30078,-0.19922 -0.5,-0.29687c0,0 -0.52734,-0.22656 -1.25,-0.27734zM21.51563,15.51953c-0.63672,-0.07422 -1.36719,0.13281 -1.81641,0.28125c-1.10156,0.30078 -1.79687,1 -2.29687,1.39844c-0.30078,0.30078 -0.60156,0.60156 -0.90234,1c0,0.69922 0.09766,1.40234 0.19922,2.10156v0.10156l-0.19922,2c-0.19922,0.89844 -0.30078,2.59766 0.69922,4.29688c0.5,1 1.20313,1.80078 2.10156,2.30078c0.60156,0.39844 1.39844,0.69922 2.29688,0.90234c0,-0.70312 0.10156,-1.50391 0.20313,-2.20312c0.19922,-1 0.39844,-1.5 0.69922,-2.10156c0.10156,-0.29687 0.19922,-0.49609 0.40234,-0.79687c0.09766,-0.30078 1.49609,-4.10156 0.19531,-7.60156c-0.29687,-0.80078 -0.59766,-1.30078 -1,-1.5c-0.17187,-0.10156 -0.375,-0.15625 -0.58203,-0.17969zM36.1875,16.08984c0.26172,-0.01562 0.51172,0.00781 0.61328,0.10938c0.30078,0.19922 -0.10156,0.69922 -0.20312,0.80078c-0.09766,0.10156 -0.29687,0.30078 -0.59766,0.40234c-0.39844,0.09766 -0.69922,-0.20312 -0.80078,-0.20312c-0.10156,-0.10156 -0.39844,-0.39844 -0.29687,-0.69922c0.09766,-0.19922 0.19922,-0.19922 0.59766,-0.30078c0.14844,-0.05078 0.42578,-0.09766 0.6875,-0.10937zM21.15625,16.91797c0.33594,-0.02344 0.61719,0.10547 0.84375,0.17969c0.30078,0.10156 0.59766,0.20313 0.59766,0.40234c0.10156,0.30078 -0.19531,0.5 -0.29687,0.59766c-0.30078,0.30078 -0.80078,0.30469 -0.80078,0.30469c-0.5,0 -0.80078,-0.30078 -1,-0.60156c-0.10156,-0.10156 -0.19922,-0.30078 -0.09766,-0.5c0.09766,-0.19922 0.29688,-0.30078 0.39844,-0.30078c0.125,-0.05078 0.24219,-0.07422 0.35547,-0.08203zM39.5,30c-0.5,0.69922 -1.19922,1.60156 -1.30078,2.80078c0,0.19922 0,0.30078 -0.10156,0.5c0.80078,0.19922 1.50391,0.19922 2.20313,0.10156c1.60156,-0.20312 2.69922,-1.00391 2.89844,-1.20312c0.69922,-0.5 1.60156,-1.5 1.39844,-1.89844c-0.09766,-0.19922 -0.39844,-0.10156 -2,0c-0.39844,0 -1.59766,0.30078 -2.39844,0.10156h-0.19922c-0.19922,-0.10156 -0.39844,-0.20312 -0.5,-0.40234zM22.09766,32c-0.19922,0.30078 -0.49609,0.5 -0.69531,0.69922c-0.80078,0.5 -1.80469,0.90234 -2.80469,1.10156c-0.89844,0.30078 -1.39844,0.30078 -1.39844,0.60156c-0.10156,0.39844 0.89844,0.89844 1.39844,1.09766c1.70313,0.69922 3.40234,0.30078 3.70313,0.19922c0.19922,-0.10156 0.69922,-0.30078 1.19922,-0.60156c0,-1.09766 -0.09766,-2.09766 -0.19922,-2.89844v-0.10156h-0.10156c-0.30078,0 -0.69922,0.00391 -1.10156,-0.09766z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        PostgreSQL
                                    </p>
                                </div>

                                {/* MySQL */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0,0,256,256"
                                        className="hover:animate-spin"
                                    >
                                        <g
                                            fill="#ffffff"
                                            fillRule="nonzero"
                                            stroke="none"
                                            strokeWidth="1"
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            strokeMiterlimit="10"
                                            strokeDasharray=""
                                            strokeDashoffset="0"
                                            fontFamily="none"
                                            fontWeight="none"
                                            fontSize="none"
                                            textAnchor="none"
                                        >
                                            <g transform="scale(5.12,5.12)">
                                                <path d="M31.16797,8c-0.46875,-0.01172 -0.87891,0.16797 -1.08984,0.6875c-0.35937,0.87109 0.53516,1.72266 0.85547,2.16797c0.22266,0.30859 0.51172,0.65625 0.67188,1.00391c0.10547,0.23047 0.12109,0.46094 0.21094,0.70313c0.22266,0.59766 0.57813,1.27734 0.86328,1.83203c0.14453,0.28125 0.30469,0.57422 0.48828,0.82422c0.11328,0.15234 0.30469,0.22266 0.33594,0.45703c-0.1875,0.26563 -0.19922,0.67578 -0.30469,1.01172c-0.47656,1.50391 -0.29687,3.375 0.39453,4.48438c0.21484,0.34375 0.71875,1.07422 1.40625,0.79688c0.60156,-0.24609 0.46875,-1.00781 0.64063,-1.68359c0.03906,-0.14844 0.01563,-0.26172 0.09375,-0.36328v0.03125c0.17969,0.36719 0.36328,0.73438 0.54688,1.09766c0.41016,0.65625 1.13281,1.33984 1.74219,1.80469c0.31641,0.23828 0.56641,0.65234 0.97656,0.79297v-0.03125h-0.03125c-0.07812,-0.125 -0.20312,-0.17578 -0.30469,-0.27344c-0.23828,-0.23437 -0.50391,-0.52734 -0.69922,-0.79687c-0.55859,-0.75391 -1.05078,-1.58203 -1.49609,-2.44141c-0.21484,-0.41016 -0.40234,-0.86328 -0.58203,-1.28125c-0.07031,-0.16406 -0.07031,-0.40625 -0.21484,-0.49219c-0.19922,0.30859 -0.48828,0.55469 -0.64062,0.91797c-0.24219,0.57813 -0.27734,1.28516 -0.36719,2.01563c-0.05469,0.01953 -0.03125,0.00391 -0.05859,0.03125c-0.42578,-0.10547 -0.57812,-0.54297 -0.73437,-0.91797c-0.39844,-0.94922 -0.47656,-2.48047 -0.12109,-3.57031c0.08984,-0.28516 0.5,-1.17578 0.33594,-1.4375c-0.07812,-0.26172 -0.34375,-0.41016 -0.48828,-0.60937c-0.18359,-0.24609 -0.36328,-0.57031 -0.48828,-0.85547c-0.32812,-0.74219 -0.63672,-1.60156 -0.98437,-2.35156c-0.16406,-0.35937 -0.44141,-0.71875 -0.67187,-1.03906c-0.25391,-0.35156 -0.53516,-0.60937 -0.73437,-1.03906c-0.06641,-0.14844 -0.16406,-0.39062 -0.05859,-0.54687c0.03125,-0.10547 0.07813,-0.14844 0.18359,-0.18359c0.17578,-0.13672 0.66797,0.04297 0.85547,0.12109c0.48828,0.20313 0.89844,0.39844 1.3125,0.67188c0.19922,0.13281 0.39844,0.38672 0.64063,0.46094h0.27344c0.43359,0.09766 0.91406,0.02734 1.3125,0.15234c0.71094,0.21484 1.34766,0.55078 1.92188,0.91406c1.76172,1.10938 3.20313,2.69141 4.18359,4.57813c0.16016,0.30469 0.23047,0.59766 0.37109,0.91797c0.27734,0.64844 0.63281,1.32031 0.91406,1.95313c0.27734,0.63672 0.55078,1.27344 0.94531,1.80078c0.20703,0.27734 1.01172,0.42969 1.375,0.58203c0.25391,0.10938 0.67578,0.22266 0.91406,0.36719c0.46484,0.27734 0.91016,0.60938 1.34375,0.91797c0.21875,0.15234 0.88281,0.48438 0.91797,0.76172c-1.07422,-0.02734 -1.89453,0.07031 -2.59375,0.36719c-0.19922,0.08594 -0.51953,0.08594 -0.55078,0.33594c0.10547,0.11328 0.125,0.28516 0.21094,0.42578c0.16797,0.26953 0.44922,0.63281 0.70313,0.82422c0.27734,0.20703 0.55859,0.42969 0.85547,0.61328c0.52344,0.31641 1.10938,0.5 1.61719,0.82031c0.29688,0.19141 0.59766,0.42969 0.88672,0.64063c0.14453,0.10938 0.23828,0.27344 0.42578,0.33984v-0.03125c-0.09766,-0.125 -0.12109,-0.29687 -0.21094,-0.42578l-0.40234,-0.40234c-0.38672,-0.51172 -0.87891,-0.96484 -1.40234,-1.33984c-0.41797,-0.30078 -1.35156,-0.70703 -1.52344,-1.19141l-0.03125,-0.03125c0.29297,-0.03125 0.64063,-0.14062 0.91406,-0.21484c0.46094,-0.12109 0.86719,-0.08984 1.33984,-0.21094c0.21484,-0.0625 0.42969,-0.125 0.64453,-0.18359v-0.125c-0.23828,-0.24219 -0.41016,-0.57031 -0.67187,-0.79297c-0.68359,-0.58203 -1.42969,-1.16406 -2.19922,-1.64844c-0.42578,-0.26953 -0.95312,-0.44531 -1.40234,-0.67187c-0.15234,-0.07812 -0.41797,-0.11719 -0.51953,-0.24609c-0.23828,-0.30078 -0.36719,-0.68359 -0.55078,-1.03516c-0.38281,-0.73828 -0.75781,-1.54297 -1.09766,-2.32031c-0.23047,-0.52734 -0.38281,-1.05078 -0.67187,-1.52734c-1.38672,-2.27734 -2.87891,-3.65625 -5.19141,-5.00781c-0.49219,-0.28906 -1.08203,-0.39844 -1.70703,-0.54687c-0.33984,-0.02344 -0.67187,-0.04297 -1.01172,-0.0625c-0.20312,-0.08594 -0.41797,-0.33594 -0.60937,-0.46094c-0.48047,-0.30078 -1.42578,-0.82422 -2.20703,-0.83594zM34.47656,11.3125c-0.22266,-0.00391 -0.38281,0.02734 -0.55078,0.0625v0.03125h0.03125c0.10547,0.21875 0.29688,0.35938 0.42969,0.54688c0.10156,0.21484 0.19922,0.42969 0.30078,0.64453l0.03125,-0.03125c0.1875,-0.13281 0.27734,-0.34766 0.27734,-0.67187c-0.07812,-0.07812 -0.08984,-0.17969 -0.15234,-0.27344c-0.08984,-0.12891 -0.25781,-0.19922 -0.36719,-0.30859zM1.86719,23.99609c-0.30078,0.01172 -0.62891,0.07031 -0.98438,0.18359c-0.59375,0.17969 -0.88672,0.53516 -0.88672,1.25781v7.5625h2.00391v-7.37891l2.77734,6.30859c0.34375,0.78516 0.8125,1.06641 1.73047,1.06641c0.92188,0 1.37109,-0.28125 1.71484,-1.06641l2.77734,-6.14844v7.21875h2v-7.5625c0,-0.72266 -0.28906,-1.07812 -0.88672,-1.25781c-1.42187,-0.44922 -2.37891,-0.0625 -2.80859,0.91016l-2.85156,6.41406l-2.75781,-6.41406c-0.3125,-0.73047 -0.9375,-1.12891 -1.82812,-1.09375zM26.24609,24c-0.78906,0 -3.24609,0.09375 -3.24609,2v1.23438c0,0.875 0.76953,1.58984 2.4375,1.76563c0.1875,0.01172 0.375,0.02734 0.5625,0.02734c0,0 1.94531,-0.03906 2,-0.02734c1.125,0 1,0.875 1,1v1c0,0.13672 -0.03125,1 -1.01172,1h-4.98828v1h5.00781c0.65625,0 1.29297,-0.13672 1.80078,-0.375c0.84375,-0.38672 1.19141,-0.91016 1.19141,-1.59766v-1.42969c0,-1.53516 -1.90625,-1.59766 -3,-1.59766h-2c-0.78516,0 -0.90625,-0.47656 -1,-1v-1c0.09375,-0.39844 0.26953,-0.9375 0.96484,-1h5.03516v-1zM33.98047,24c-1.47656,0.20313 -1.99609,0.9375 -1.99609,2v5c0,0.97266 0.54297,1.55859 1.66016,1.86328c0.375,0.10547 0.71484,0.14844 1.03516,0.14844l2.22656,-0.01172h1.30859l1.11328,1h2.25l-1.54687,-1.39453c0.72656,-0.30078 0.95313,-0.76172 0.95313,-1.625v-4.98047c0,-1.0625 -0.69141,-1.79687 -2.16797,-2zM42,24v6.95703c0,1.20703 0.68359,1.88672 2.49219,2.02344c0.16797,0.00781 0.33984,0.01953 0.50781,0.01953h5v-1h-4.62109c-1.03125,0 -1.37891,-0.43359 -1.37891,-1.05078v-6.94922zM35.17188,25h2.57422c0.67969,0 1.13672,0.54688 1.23828,1c0,0 0.01563,4.65625 0.01563,5c0,0.34375 -0.19141,0.5 -0.19141,0.5l-0.54297,-0.5h-2.26562l1.11328,1h-1.94141c-0.69531,0 -1.08594,-0.51562 -1.1875,-1v-4.89844c0,-0.53125 0.40625,-1.10156 1.1875,-1.10156zM14,27c0.03906,0.03906 0,4.26172 0,4.34375c0.01563,0.875 1.125,1.64063 2.86328,1.65625h3.13672v0.06641c0,0.1875 0.13672,0.8125 -1,0.93359c-0.01172,0 -4.98828,0 -5,0v1h5.21484c0.88281,-0.02734 2.79688,-0.22656 2.78516,-1.75781c0,-0.02734 0.00781,-6.24219 0,-6.24219h-2v5c-0.03125,0 -2.47656,0.00781 -2.96875,0c-0.96484,-0.01562 -1.04687,-0.56641 -1.03125,-0.77734v-4.22266z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        MySQL
                                    </p>
                                </div>

                                {/* Google Cloud */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#1976d2"
                                            d="M38.193,18.359c-0.771-2.753-2.319-5.177-4.397-7.03l-4.598,4.598	c1.677,1.365,2.808,3.374,3.014,5.648v1.508c0.026,0,0.05-0.008,0.076-0.008c2.322,0,4.212,1.89,4.212,4.212S34.61,31.5,32.288,31.5	c-0.026,0-0.05-0.007-0.076-0.008V31.5h-6.666H24V38h8.212v-0.004c0.026,0,0.05,0.004,0.076,0.004C38.195,38,43,33.194,43,27.288	C43,23.563,41.086,20.279,38.193,18.359z"
                                        ></path>
                                        <path
                                            fill="#ffe082"
                                            d="M19.56,25.59l4.72-4.72c-0.004-0.005-0.008-0.009-0.011-0.013l-4.717,4.717	C19.554,25.579,19.557,25.584,19.56,25.59z"
                                            opacity=".5"
                                        ></path>
                                        <path
                                            fill="#90caf9"
                                            d="M19.56,25.59l4.72-4.72c-0.004-0.005-0.008-0.009-0.011-0.013l-4.717,4.717	C19.554,25.579,19.557,25.584,19.56,25.59z"
                                            opacity=".5"
                                        ></path>
                                        <path
                                            fill="#ff3d00"
                                            d="M24,7.576c-8.133,0-14.75,6.617-14.75,14.75c0,0.233,0.024,0.46,0.035,0.69h6.5	c-0.019-0.228-0.035-0.457-0.035-0.69c0-4.549,3.701-8.25,8.25-8.25c1.969,0,3.778,0.696,5.198,1.851l4.598-4.598	C31.188,9.003,27.761,7.576,24,7.576z"
                                        ></path>
                                        <path
                                            fill="#90caf9"
                                            d="M15.712,31.5L15.712,31.5c-0.001,0-0.001,0-0.002,0c-0.611,0-1.188-0.137-1.712-0.373	l-4.71,4.71C11.081,37.188,13.301,38,15.71,38c0.001,0,0.001,0,0.002,0v0H24v-6.5H15.712z"
                                            opacity=".5"
                                        ></path>
                                        <path
                                            fill="#4caf50"
                                            d="M15.712,31.5L15.712,31.5c-0.001,0-0.001,0-0.002,0c-0.611,0-1.188-0.137-1.712-0.373l-4.71,4.71	C11.081,37.188,13.301,38,15.71,38c0.001,0,0.001,0,0.002,0v0H24v-6.5H15.712z"
                                        ></path>
                                        <path
                                            fill="#ffc107"
                                            d="M11.5,27.29c0-2.32,1.89-4.21,4.21-4.21c1.703,0,3.178,1.023,3.841,2.494l4.717-4.717	c-1.961-2.602-5.065-4.277-8.559-4.277C9.81,16.58,5,21.38,5,27.29c0,3.491,1.691,6.59,4.288,8.547l4.71-4.71	C12.53,30.469,11.5,28.999,11.5,27.29z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        Google Cloud
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    {/* Tools */}
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4, delay: 0.4 },
                        }}
                    >
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Tools
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                                {/* Git */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#F4511E"
                                            d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        Git
                                    </p>
                                </div>

                                {/* Figma */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 48 48"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#e64a19"
                                            d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
                                        ></path>
                                        <path
                                            fill="#7c4dff"
                                            d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
                                        ></path>
                                        <path
                                            fill="#66bb6a"
                                            d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
                                        ></path>
                                        <path
                                            fill="#ff7043"
                                            d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
                                        ></path>
                                        <circle
                                            cx="32"
                                            cy="24"
                                            r="7"
                                            fill="#29b6f6"
                                        ></circle>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        Figma
                                    </p>
                                </div>
                                {/* Framer */}
                                {/* Framer */}
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 24 24"
                                        className="hover:animate-spin"
                                    >
                                        <path
                                            fill="#24A8FF"
                                            d="M20 16H4V8h8z"
                                        ></path>
                                        <path
                                            fill="#8DDCFF"
                                            d="M20 0H4l8 8h8z"
                                        ></path>
                                        <path
                                            fill="#054EFF"
                                            d="M12 16v8l-8-8z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-muted-foreground">
                                        Framer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            <Separator />
            {/* Contact */}
            <section
                id="contact"
                className="flex flex-col items-center justify-center gap-4 sm:py-48 py-24"
            >
                <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Get In Touch
                </h2>
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4 },
                    }}
                >
                    <p className="leading-7">
                        If you'd like to get in touch with me, feel free to
                        reach out on LinkedIn or my email and I'll get back to
                        you whenever I can.
                    </p>
                </Reveal>
                <div className="flex gap-4">
                    <Reveal
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4, delay: 0.1 },
                        }}
                    >
                        <Link
                            href="mailto:vallalarishwanth@gmail.com"
                            target="_blank"
                        >
                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Say Hi!
                            </button>
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
