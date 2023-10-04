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
      right: "my name is mathis. \n\n",
    },
    {
      left: "education",
      right: "my name is Mathis. I'm a developer. hahhahahhahahaha",
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
        {name: "My first million", href: "/"},
        {name: "All in", href: "/"},
        {name: "How I built this", href: "/"},

      ],
    },
    {
      name: "podcasts",
      list: [
        {name: "My first million", href: "/"},
        {name: "All in", href: "/"},
        {name: "How I built this", href: "/"},

      ],
    },
  ],
};
