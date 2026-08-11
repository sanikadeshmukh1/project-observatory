export const site = {
  name: "Project Observatory",
  author: "Sanika Deshmukh",
  description:
    "An evolving knowledge system exploring psychology, business, research, and systems thinking.",
  philosophy: ["Observe.", "Understand.", "Build."],

  navigation: {
    primary: [
      {
        label: "Projects",
        href: "/projects",
      },
      {
        label: "Research",
        href: "/research",
      },
      {
        label: "Thinking",
        href: "/thinking",
      },
    ],

    more: {
      explore: [
        {
          label: "Frameworks",
          href: "/frameworks",
        },
        {
          label: "Courses",
          href: "/courses",
        },
        {
          label: "Resources",
          href: "/resources",
        },
      ],

      utility: [
        {
          label: "About",
          href: "/about",
        },
        {
          label: "Resume",
          href: "/resume",
        },
        {
          label: "Contact",
          href: "/contact",
        },
      ],
    },
  },
} as const;