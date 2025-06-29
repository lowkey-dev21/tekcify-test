import type { Testimonial } from "@/types/app";

export const avatars = [
  "/assets/avatars/sarahchen.webp",
  "/assets/avatars/alexrivera.webp",
  "/assets/avatars/emilyzhang.webp",
  "/assets/avatars/marcusthompson.webp",
  "/assets/avatars/lisapatel.webp",
  "/assets/avatars/davidkim.webp",
];

export const icons = {
  pdfx: "/assets/icons/pdfx.webp",
  binx: "/assets/icons/binx.webp",
  campux: "/assets/icons/campux.webp",
  instagram: "/assets/icons/instagram.svg",
  twitter: "/assets/icons/twitter.svg",
  tiktok: "/assets/icons/tiktok.svg",
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    username: "@sarahchen",
    avatar: avatars[0],
    text: `Binx AI on WhatsApp is a game-changer! From transcribing voice notes to generating images and analyzing PDFs – it's like having a personal AI assistant in my pocket. The image recognition feature is incredibly accurate! 🤖✨`,
    icons: [icons.binx, icons.twitter],
  },
  {
    name: "Alex Rivera",
    username: "@alextech",
    avatar: avatars[1],
    text: `PDFX.chat has revolutionized how I handle documents. The ability to chat with PDFs, generate flashcards, and add digital signatures all in one place is incredible. Perfect for both students and professionals! 📚`,
    icons: [icons.pdfx, icons.instagram],
  },
  {
    name: "Emily Zhang",
    username: "@emilyzhang",
    avatar: avatars[2],
    text: `As a student, Campux has transformed my academic life! Found amazing study partners, joined campus communities, and the AI academic assistance is super helpful. Love how it combines social networking with learning! 🎓`,
    icons: [icons.campux, icons.tiktok],
  },
  {
    name: "Marcus Thompson",
    username: "@marcust",
    avatar: avatars[3],
    text: `Using Binx AI for my business communications has been incredible. The way it handles image recognition, PDF summaries, and media downloads makes my workflow so much smoother. Truly simplifying technology! 🧑🏾‍💻`,
    icons: [icons.binx, icons.twitter],
  },
  {
    name: "Lisa Patel",
    username: "@lisapatel",
    avatar: avatars[4],
    text: `PDFX.chat's quiz generation feature is a lifesaver! As an educator, I can quickly create assessments from any document. The summarization and flashcard features help my students grasp concepts faster. 📝`,
    icons: [icons.pdfx, icons.instagram],
  },
  {
    name: "David Kim",
    username: "@davidkim",
    avatar: avatars[5],
    text: `The student marketplace on Campux is brilliant! Found study materials, connected with peers, and the AI-powered academic assistance helps me tackle challenging subjects. This platform truly understands student needs! 🎉`,
    icons: [icons.campux, icons.tiktok],
  },
];
