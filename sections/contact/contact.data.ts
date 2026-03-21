export interface ContactData {
  title: string;
  description: string;
  email: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export const contactData: ContactData = {
  title: "GET IN TOUCH",
  description: "Ready to revolutionize your hackathon? Contact us to get started.",
  email: "hello@hackathonai.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/hackathon-ai",
      icon: "github",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/hackathonai",
      icon: "twitter",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/hackathon-ai",
      icon: "linkedin",
    },
  ],
};