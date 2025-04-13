import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  return (
    <section
      className={cn(
        "bg-transparent text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0"
      )}
    >
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground delay-100 sm:text-xl">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-12 delay-300">
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-300 via-purple-200 to-pink-300 text-background rounded-lg p-1 cursor-pointer group hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-300 hover:to-pink-400 hover:scale-105 transition-all ease-in-out duration-300">
              <div className="h-full w-full bg-black rounded-md px-10 py-4">
                <p className="text-base font-medium">Get in touch</p>
              </div>
            </button>
            {/* <button className="flex items-center gap-2 bg-gradient-to-r from-gray-300 via-zinc-200 to-gray-300 text-background rounded-lg p-1 cursor-pointer group hover:bg-gradient-to-r hover:from-gray-400 hover:via-zinc-300 hover:to-gray-400 hover:scale-105 transition-all ease-in-out duration-300">
              <div className="h-full w-full bg-black rounded-md px-6 py-3">
                <p className="text-sm font-medium">Get started</p>
              </div>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
