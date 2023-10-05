export const navBar = {
  logo: { name: "mlr", href: "/" },
  navItems: [
    { name: "index", href: "/" },
    { name: "about", href: "/about" },
    { name: "links", href: "/links" },
  ],
};

export const footer = {
  contacts: [
    { name: "email", href: "mailto:hello@mathisrenier.com" },
    { name: "linkedin", href: "/" },
  ],
  copyright: { left: "mathis leo renier", right: "©2023 all rights reserved" },
};

export const index = {
  title: "mathis leo renier",
  titleSuperscript: "(mæti:s)",
  subtitle: {
    bold: [
      {
        left: "i am",
        right: "a full stack developer working in algorithmic finance",
      },
    ],
    thin: [
      { left: "location", right: "45.5019° N, 73.5674° W\nmontreal / canada" },
      {
        left: "working on",
        right: "algo portfolio analytics at morgan stanley",
      },
    ],
  },
  showcase: {
    heading: "selected projects",
    projects: [
      {
        name: "serene keys",
        date: "/ 2023",
        key: "serene-keys",
        coverImage: "https://source.unsplash.com/800x800/?piano",
        images: ["", "", "", ""],
        details: [
          { left: "name", right: "serene keys" },
          { left: "type", right: "web app" },
          { left: "year", right: "2023\n\n" },
          {
            left: "tech stack",
            right:
              "typescript\nthree.js\nframer motion\nreact\nnext.js\nfirebase\nvercel\n\n",
          },
          {
            left: "info",
            right:
              "Serene Keys is more than just an online library of sampled instruments. It's a place where you can express yourself, explore your creativity, and find your inner peace. For the best experience, I suggest that you use an external midi keyboard plugged into your computer. But don't worry if you don't have one. You can still use your computer keyboard as a midi controller like in the image below, where Z and X control the octave. Have fun and enjoy the music!",
          },
        ],
        callToAction: {
          text: "visit site",
          href: "https://www.serenekeys.com/",
        },
      },
      {
        name: "law firm online portal",
        date: "/ 2022",
        key: "apr-avocats-web-app",
        coverImage: "",
      },
      {
        name: "ar metro map - montreal",
        date: "/ 2021",
        key: "montreal-metro-map",
        coverImage: "",
      },
      {
        name: "simple os",
        date: "/ 2021",
        key: "simple-os",
        coverImage: "",
      },
      {
        name: "goodboy",
        date: "/ 2021",
        key: "goodboy",
        coverImage: "",
      },
      {
        name: "homebody",
        date: "/ 2020",
        key: "goodboy",
        coverImage: "",
      },
    ],
  },
};

export const about = {
  title: "about me",
  image: "https://source.unsplash.com/800x800/?portrait",
  descriptions: [
    {
      left: "hi there",
      right: "I'm Mathis. On top of my job, I'm working on finishing side projects, climbing a v6, and becoming a better pianist. Don't hesitate to reach out!  \n\n",
    },
    {
      left: "work",
      right: "I started working at Morgan Stanley after graduating in 2022. I took part in the analyst training program in New York City, then joined the algorithmic trading division. \n\n",
    },
    {
      left: "education",
      right: "I studied at McGill University in Montreal, majoring in computer science and minoring in economics. I developed a kin interest in machine learning during my degree and took as many related graduate courses as I could.",
    },
  ],
};

export const links = {
  title: "links",
  subtitle: "some things i like for your bookmarks",
  categories: [
    {
      name: "podcasts",
      list: [
        {name: "My First Million", href: "https://open.spotify.com/show/3mliji9352UAk3XnWElnDV"},
        {name: "Acquired", href: "https://open.spotify.com/show/7Fj0XEuUQLUqoMZQdsLXqp"},
        {name: "Sharp Tech with Ben Thompson", href: "https://open.spotify.com/show/4vk2MfVMEAuOnTWUOz6lnE"},
        {name: "Astral Codex Ten Podcast", href: "https://open.spotify.com/show/5FEwz047DHuxiJnhq3Qjkg"},
        {name: "All-In", href: "https://open.spotify.com/show/2IqXAVFR4e0Bmyjsdc8QzF"},
        {name: "The Bayesian Conspiracy", href: "https://open.spotify.com/show/012ewyJUV46EXjY2RSsgXG"},
        {name: "Indie Hackers", href: "https://open.spotify.com/show/4ex8hmrHCPvPohKJb3wsuC"},
        {name: "Risk of Ruin", href: "https://open.spotify.com/show/1ETt1dCpYajVhDSFNAiQlP"},

      ],
    },
    {
      name: "blogs / newsletters",
      list: [
        {name: "Astral Codex Ten", href: "https://www.astralcodexten.com/"},
        {name: "Money Stuff by Matt Levine", href: "https://www.bloomberg.com/opinion/authors/ARbTQlRLRjE/matthew-s-levine"},
        {name: "Bits about Money", href: "https://www.bitsaboutmoney.com/"},
        {name: "Gwern's blog", href: "https://gwern.net/"},

      ],
    },
  ],
};
