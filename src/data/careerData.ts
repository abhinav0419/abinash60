import { CareerStage } from "../types";

export const careerData: CareerStage[] = [
  {
    id: 1,
    years: "1991-1994",
    title: "Software Engineer",
    company: "TechStartup India",
    location: "Bangalore, India",
    description: "Fresh out of college, Abinash joined a startup during the dawn of computing era in India. He spent most of his time explaining to relatives what a 'computer job' actually meant.",
    achievements: [
      "Wrote COBOL code that only he could understand",
      "Survived Y2K preparations (4 years early)",
      "Mastered the art of floppy disk flipping",
      "Convinced management that mice weren't just pets"
    ],
    funnyMoment: "Once debugged code for 48 hours straight only to discover that the computer wasn't plugged in.",
    techStack: ["COBOL", "C", "Assembly", "Floppy Disks", "MS-DOS"],
    logo: "startup",
    color: "purple",
    era: "90s"
  },
  {
    id: 2,
    years: "1994-1997",
    title: "Senior Software Engineer",
    company: "OITPL",
    location: "Mumbai, India",
    description: "Promoted to Senior Software Engineer after proving he could fix the office printer. Spent three years explaining why the internet would be 'kind of a big deal'.",
    achievements: [
      "Built the company's first website (optimized for Netscape Navigator)",
      "Introduced email to the office (ended up as the default IT support)",
      "Survived the first dot-com bubble preparations",
      "Pioneered the use of 'Have you tried turning it off and on again?'"
    ],
    funnyMoment: "Accidentally set the company's first email signature to 'Sent from my spaceship' and nobody noticed for months.",
    techStack: ["Visual Basic", "C++", "Early Java", "HTML 2.0", "Dial-up Modems"],
    logo: "oitpl",
    color: "blue",
    era: "90s"
  },
  {
    id: 3,
    years: "1997-1999",
    title: "Technology Consultant",
    company: "NIIT",
    location: "Delhi, India",
    description: "Joined NIIT as a consultant where his primary job was to look thoughtful while nodding during meetings and occasionally saying 'blockchain' before it was invented.",
    achievements: [
      "Convinced clients that the Y2K bug was real (it was)",
      "Made PowerPoint presentations with excessive animations",
      "Mastered the art of corporate jargon",
      "Successfully predicted that 'this Google thing might catch on'"
    ],
    funnyMoment: "Once fell asleep during his own presentation and woke up to applause - apparently his snoring was interpreted as 'thinking out loud'.",
    techStack: ["Java", "Early .NET", "PowerPoint", "Excel Macros", "Oracle DB"],
    logo: "niit",
    color: "green",
    era: "90s"
  },
  {
    id: 4,
    years: "1999-2000",
    title: "Consultant",
    company: "Xyant Technologies",
    location: "Hyderabad, India",
    description: "Briefly joined Xyant just in time for the Y2K panic. Spent most of the year assuring clients that the world wouldn't end while secretly stockpiling canned food.",
    achievements: [
      "Survived Y2K without a single incident (claims full credit)",
      "Learned to type with more than two fingers",
      "Discovered that the internet was not, in fact, a series of tubes",
      "Successfully convinced management that website hit counters were crucial"
    ],
    funnyMoment: "Spent New Year's Eve 1999 in the server room with party hats on the servers 'just in case they needed moral support when the millennium changed'.",
    techStack: ["JavaScript", "Y2K Patches", "ASP", "Coffee", "More Coffee"],
    logo: "xyant",
    color: "red",
    era: "2000s"
  },
  {
    id: 5,
    years: "2000-2014",
    title: "TPM → Senior TPM → Product Manager",
    company: "Microsoft",
    location: "Redmond, USA",
    description: "Joined Microsoft during the Windows XP era and somehow stayed for 14 years. Witnessed the rise and fall of Clippy, whom he still misses dearly. Climbed the corporate ladder by being the only one who could fix the projector before important meetings.",
    achievements: [
      "Survived 14 annual performance reviews",
      "Avoided wearing a Zune costume at a product launch",
      "Successfully removed Clippy despite emotional attachment",
      "Managed to explain cloud computing to his parents using actual cloud analogies",
      "Attended so many meetings he developed 'rectangle eyes' from PowerPoint"
    ],
    funnyMoment: "Once mistakenly sent a 'test email' to the entire company with just the text 'Is this thing on?' and received 342 replies.",
    techStack: [".NET", "C#", "SharePoint", "Windows Phone (briefly)", "PowerPoint Mastery"],
    logo: "microsoft",
    color: "cyan",
    era: "2000s-2010s"
  },
  {
    id: 6,
    years: "2014-2025",
    title: "Senior Manager",
    company: "Amazon",
    location: "Seattle, USA",
    description: "Joined Amazon to 'try something new' and found himself explaining to everyone why packages sometimes arrive upside down. Now specializes in attending meetings about having fewer meetings.",
    achievements: [
      "Mastered the art of ordering office supplies through their own system",
      "Developed a 6-page document on why 5-page documents are too long",
      "Successfully avoided being replaced by an AI until at least 2025",
      "Achieved inbox zero (once, in 2018, for approximately 7 minutes)",
      "Can recite the leadership principles backwards while sleeping"
    ],
    funnyMoment: "Has a personal record of attending 19 meetings in one day, three of which were scheduled at exactly the same time. Still not sure what any of them were about.",
    techStack: ["AWS", "Machine Learning", "Python", "Echo Dot (for coffee orders)", "Slack"],
    logo: "amazon",
    color: "yellow",
    era: "2010s-2020s"
  }
];