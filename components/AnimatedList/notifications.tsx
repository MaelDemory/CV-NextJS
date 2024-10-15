import {cn} from "@/lib/utils";
import {AnimatedList} from "@/components/AnimatedList/animated-list";

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
}

export let notifications = [
    {
        name: "Développement web",
        description: "PHP - Laravel, TypeScript, React, Next.js, Angular, TailwindCSS",
        icon: '🌐',
        color: "#00C9A7",
    },
    {
        name: "Développement mobile",
        description: "React Native, Ionic, Swift",
        icon: "📱",
        color: "#1E86FF",
    },
    {
        name: "Développement d'applications",
        description: "Java, JavaFX, Python",
        icon: "🖥️",
        color: "#FFB800",
    },
    {
        name: "Gestion de base de données",
        description: "MySQL, PostgreSQL, MongoDB, SQLite, PL/SQL",
        icon: "📦",
        color: "#FF3D71",
    },
    {
        name: "Gestion de projet",
        description: "Méthodes agiles, UML, Merise, GanttProject, Trello, Git",
        icon: "📊",
        color: "#1E86FF",
    },
];

export const Notification = ({ name, description, icon, color}: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                        <span className="text-sm sm:text-lg">{name}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};


export function AnimatedListDemo({
                                     className,
                                 }: {
    className?: string;
}) {
    return (
        <div
            className={cn(
                "relative flex h-[475px] w-full flex-col p-6 rounded-lg",
                className,
            )}
        >
            <AnimatedList>
                {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
}