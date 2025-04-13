import { HeroSection } from "./blocks/hero-section";

export const Hero = () => {
  return (
    <HeroSection
      title="Deploy your social media campaigns to millions"
      description="Save time. Save money. Save resources. Distribute your campaign among hundreds of influencers and scale your reach."
      actions={[
        {
          text: "Book a Demo",
          href: "",
          variant: "glow",
        },
        {
          text: "Get Started",
          href: "",
          variant: "default",
        },
      ]}
      image={{
        light: "https://www.launchuicomponents.com/app-light.png",
        dark: "https://www.launchuicomponents.com/app-dark.png",
        alt: "UI Components Preview",
      }}
    />
  );
};
