import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    url: "http://facebook.com",
    icon: Facebook,
  },
  {
    name: "Instagram",
    url: "http://instagram.com",
    icon: Instagram,
  },
  {
    name: "Twitter",
    url: "http://twitter.com",
    icon: Twitter,
  },
  {
    name: "Linkedin",
    url: "http://linkedin.com",
    icon: Linkedin,
  },
];

type SocialLink = {
  name: string;
  url: string;
  icon: React.ElementType;
};
