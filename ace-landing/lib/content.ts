// Central content config — update event details here instead of hunting through components.

export const EVENT = {
  title: "Women in Leadership",
  tagline: "Conversations that elevate the profession.",
  taglineSecond: "A community that raises the standard.",
  badge: "ACE Presents · Half-Day Event · April 10, 2025",
  date: "Thursday, April 10, 2025",
  time: "8:30 AM – 1:00 PM ET",
  location: "Toronto, Ontario (+ Virtual)",
  locationShort: "Toronto, Ontario",
  capacity: 150,
  spotsRemaining: 47,
  format: "In-Person & Virtual",
  sponsor: "AWS",
};

export const AGENDA_ITEMS = [
  {
    time: "8:30 AM",
    title: "Registration & Welcome Coffee",
    desc: "Arrive, connect, and settle in. Name tags, light refreshments, and time to meet fellow CX professionals.",
    tag: "Networking",
    tagClass: "tag-networking",
  },
  {
    time: "9:00 AM",
    title: "Opening Keynote",
    desc: "Setting the stage — what does leadership look like in the CX profession today, and where is it headed?",
    tag: "Keynote",
    tagClass: "tag-keynote",
  },
  {
    time: "9:45 AM",
    title: "Women in Leadership Panel",
    desc: "A candid conversation with senior leaders on navigating the path forward — the real wins, the hard lessons, and what still needs to change.",
    tag: "Panel Discussion",
    tagClass: "tag-panel",
  },
  {
    time: "11:00 AM",
    title: "Networking Break",
    desc: "Connect with peers, speakers, and fellow ACE community members.",
    tag: "Networking",
    tagClass: "tag-networking",
  },
  {
    time: "11:30 AM",
    title: "Giving Back — Charity Drive",
    desc: "Learn about our three supported charities: Red Door Family Shelter, Room to Read, and Indspire. Your attendance makes a difference.",
    tag: "Community",
    tagClass: "tag-keynote",
  },
  {
    time: "12:00 PM",
    title: "Closing Remarks & Mingle",
    desc: "Final words from the ACE board, followed by open networking until 1:00 PM.",
    tag: "Networking",
    tagClass: "tag-networking",
  },
];

export const CHARITIES = [
  {
    name: "Red Door Family Shelter",
    desc: "Providing emergency shelter, support, and hope to women, children, and families fleeing domestic violence and refugee crises in Toronto.",
  },
  {
    name: "Room to Read",
    desc: "Transforming the lives of millions of children in low-income countries by focusing on literacy and girls' education throughout the developing world.",
  },
  {
    name: "Indspire",
    desc: "Investing in the education of Indigenous people in Canada for the long-term benefit of individuals, communities, and the country as a whole.",
  },
];

export const CHARITY_NAMES = CHARITIES.map((c) => c.name);
