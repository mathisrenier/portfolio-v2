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
    { name: "linkedin", href: "https://www.linkedin.com/in/mathisrenier/" },
    { name: "github", href: "https://github.com/mathisrenier/" },
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
        coverImage:
          "https://static.mathisrenier.com/projects/serene-keys/serenekeys1.png",
        images: [
          "https://static.mathisrenier.com/projects/serene-keys/serenekeys1.png",
          "https://static.mathisrenier.com/projects/serene-keys/serenekeys2.png",
          "https://static.mathisrenier.com/projects/serene-keys/serenekeys3.png",
          "https://static.mathisrenier.com/projects/serene-keys/serenekeys4.png",
        ],
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
              "Serene Keys is an online library of playable sampled instruments. Plug in an external midi controller or simply use your keyboard to start playing the meticulously sampled instruments, complete with multiple velocity layers and sustain pedal support.",
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
        coverImage:
          "https://static.mathisrenier.com/projects/apr-avocats/apr1.png",
        images: [
          "https://static.mathisrenier.com/projects/apr-avocats/apr1.png",
          "https://static.mathisrenier.com/projects/apr-avocats/apr2.png",
          "https://static.mathisrenier.com/projects/apr-avocats/apr3.png",
          "https://static.mathisrenier.com/projects/apr-avocats/apr4.png",
        ],
        details: [
          { left: "name", right: "apr avocats online portal" },
          { left: "type", right: "web app" },
          { left: "year", right: "2023\n\n" },
          {
            left: "tech stack",
            right:
              "typescript\nnode.js\nreact\nredwood.js\ngraphql\nnetlify\npostgresql\n\n",
          },
          {
            left: "info",
            right:
              "This web app was built for the APR Avocats law firm to automate the generation of summons to court documents. The adoption of this app decreased the time required to generate and update these documents from more than an hour to 10 minutes, and serves as a repository of previously generated documents.",
          },
        ],
      },
      {
        name: "ar metro map - montreal",
        date: "/ 2021",
        key: "montreal-metro-map",
        coverImage:
          "https://static.mathisrenier.com/projects/metro-map/metro1.png",
        images: [
          "https://static.mathisrenier.com/projects/metro-map/metro1.png",
          "https://static.mathisrenier.com/projects/metro-map/metro2.gif",
        ],
        details: [
          { left: "name", right: "montreal metro map lens" },
          { left: "type", right: "snapchat lens" },
          { left: "year", right: "2021\n\n" },
          { left: "tech stack", right: "javascript\nlens studio\n\n" },
          {
            left: "info",
            right:
              "This Snapchat lens with more than 60k views projects a map of Montreal's metro on top of the transports card.",
          },
        ],
        callToAction: {
          text: "try the lens",
          href: "https://www.snapchat.com/lens/e9be86bf67c845988814f910731e055d",
        },
      },
      {
        name: "simple os",
        date: "/ 2021",
        key: "simple-os",
        coverImage: "https://static.mathisrenier.com/projects/simple-os/os1.png",
        images: ["https://static.mathisrenier.com/projects/simple-os/os1.png"],
        details: [
          { left: "name", right: "simple os" },
          { left: "type", right: "operating system" },
          { left: "year", right: "2021\n\n" },
          {
            left: "tech stack",
            right: "C\n\n",
          },
          { left: "info", right: "I built this bare bone operating system as part of the COMP310 Operating Systems class at McGill. It contains a shell with a few commands. It is able to mount partitions, read and write to files, manage memory, and execute programs written in a custom interpreted language."}
        ],
        callToAction: {
          text: "visit project",
          href: "https://github.com/mathisrenier/simple-os/",
        },
      },
      {
        name: "goodboy",
        date: "/ 2021",
        key: "goodboy",
        coverImage: "https://static.mathisrenier.com/projects/goodboy/goodboy1.png",
        images: ["https://static.mathisrenier.com/projects/goodboy/goodboy1.png", "https://static.mathisrenier.com/projects/goodboy/goodboy2.png", "https://static.mathisrenier.com/projects/goodboy/goodboy3.png", "https://static.mathisrenier.com/projects/goodboy/goodboy4.png", "https://static.mathisrenier.com/projects/goodboy/goodboy5.png"],
        details: [
          { left: "name", right: "goodboy" },
          { left: "type", right: "web app" },
          { left: "year", right: "2021\n\n" },
          { left: "award", right: "QHacks2021 winner for best use of google cloud\n\n"},
          {
            left: "tech stack",
            right: "javascript\nreact\nexpress.js\nfirebase\ngoogle cloud\n\n",
          },
          { left: "info", right: "My team and I set out to reduce the inefficiency of dog adoption. Out of 30,000 dogs taken in by shelters each year, only 50% get adopted and 15% end up euthanized. By streamlining the pet/owner matching process, we hoped to increase both the number of happy dogs and happy families."}
        ],
        callToAction: {
          text: "visit project",
          href: "https://devpost.com/software/goodboy",
        },
      },
      {
        name: "homebody",
        date: "/ 2020",
        key: "homebody",
        coverImage: "https://static.mathisrenier.com/projects/homebody/homebody1.png",
        images: ["https://static.mathisrenier.com/projects/homebody/homebody1.png", "https://static.mathisrenier.com/projects/homebody/homebody2.png", "https://static.mathisrenier.com/projects/homebody/homebody3.png"],
        details: [
          { left: "name", right: "homebpdy" },
          { left: "type", right: "android app" },
          { left: "year", right: "2020\n\n" },
          { left: "award", right: "TOHacks2020 winner for most creative Radar hack\n\n"},
          {
            left: "tech stack",
            right: "java\nandroid studio\nradar.io\n\n",
          },
          {left: "info", right: "My team and I built the prototype of an app that incentivises social distancing. It allows friends to compete over who is the best social distancer."}
        ],
        callToAction: {
          text: "visit project",
          href: "https://devpost.com/software/homebody",
        },
      },
    ],
  },
};

export const about = {
  title: "about me",
  image: "https://static.mathisrenier.com/about-me/mathis_renier_picture.jpg",
  descriptions: [
    {
      left: "hi there",
      right:
        "I'm Mathis. On top of my job, I'm working on finishing side projects, climbing a v6, and becoming a better pianist. Don't hesitate to reach out!  \n\n",
    },
    {
      left: "work",
      right:
        "I started working for Morgan Stanley after graduating in 2022. I took part in the analyst training program in New York City, then joined the algorithmic trading division. \n\n",
    },
    {
      left: "education",
      right:
        "I studied at McGill University in Montreal, majoring in computer science and minoring in economics. I developed a kin interest in machine learning during my degree and took as many related graduate courses as I could.",
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
        
        {
          name: "Acquired",
          href: "https://open.spotify.com/show/7Fj0XEuUQLUqoMZQdsLXqp",
        },
        {
          name: "Sharp Tech with Ben Thompson",
          href: "https://open.spotify.com/show/4vk2MfVMEAuOnTWUOz6lnE",
        },
        {
          name: "Astral Codex Ten Podcast",
          href: "https://open.spotify.com/show/5FEwz047DHuxiJnhq3Qjkg",
        },
        {
          name: "All-In",
          href: "https://open.spotify.com/show/2IqXAVFR4e0Bmyjsdc8QzF",
        },
        {
          name: "The Bayesian Conspiracy",
          href: "https://open.spotify.com/show/012ewyJUV46EXjY2RSsgXG",
        },
        {
          name: "My First Million",
          href: "https://open.spotify.com/show/3mliji9352UAk3XnWElnDV",
        },
        {
          name: "Indie Hackers",
          href: "https://open.spotify.com/show/4ex8hmrHCPvPohKJb3wsuC",
        },
        {
          name: "Risk of Ruin",
          href: "https://open.spotify.com/show/1ETt1dCpYajVhDSFNAiQlP",
        },
      ],
    },
    {
      name: "blogs / newsletters",
      list: [
        { name: "Astral Codex Ten", href: "https://www.astralcodexten.com/" },
        {
          name: "Money Stuff by Matt Levine",
          href: "https://www.bloomberg.com/opinion/authors/ARbTQlRLRjE/matthew-s-levine",
        },
        { name: "Bits about Money", href: "https://www.bitsaboutmoney.com/" },
        { name: "Gwern's blog", href: "https://gwern.net/" },
      ],
    },
    {
      name: "youtube channels",
      list: [
        { name: "3Blue1Brown", href: "https://www.youtube.com/@3blue1brown" },
        { name: "Ben Eater", href: "https://www.youtube.com/@BenEater" },
        {
          name: "CodeAesthetic",
          href: "https://www.youtube.com/@CodeAesthetic",
        },
        { name: "Coderized", href: "https://www.youtube.com/@coderized" },
        { name: "Fireship", href: "https://www.youtube.com/@Fireship" },
        { name: "Hyperplexed", href: "https://www.youtube.com/@Hyperplexed" },
        { name: "Juxtopposed", href: "https://www.youtube.com/@juxtopposed" },
        { name: "Primer", href: "https://www.youtube.com/@PrimerBlobs" },
        { name: "Reducible", href: "https://www.youtube.com/@Reducible" },
        { name: "Sam Selikoff", href: "https://www.youtube.com/@samselikoff" },
        {
          name: "Sebastian Lague",
          href: "https://www.youtube.com/@SebastianLague",
        },
      ],
    },
    {
      name: "miscellaneous",
      list: [
        { name: "Product Hunt", href: "https://www.producthunt.com/" },
        { name: "Hacker News", href: "https://news.ycombinator.com/" },
        { name: "Indie Hackers", href: "https://www.indiehackers.com/" },
        {
          name: "Metaculus",
          href: "https://www.metaculus.com/questions/?main-feed=true&status=open&has_group=false&type=forecast",
        },
        { name: "Manifold", href: "https://manifold.markets/" },
      ],
    },
  ],
};
