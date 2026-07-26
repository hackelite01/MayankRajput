import { useContext, useEffect, useState } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  Pager,
  PagerButton,
  PageInfo,
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const PAGE_SIZE = 5;

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / PAGE_SIZE);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(
      arg,
      "go",
      projects.map(({ id }) => id.toString())
    ) ? (
      <Usage cmd="projects" />
    ) : null;

  const pageProjects = projects.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {pageProjects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      {totalPages > 1 && (
        <Pager>
          <PagerButton
            type="button"
            disabled={page === 0}
            onClick={() => setPage(p => Math.max(0, p - 1))}
          >
            &lt; prev
          </PagerButton>
          <PageInfo>
            page {page + 1} / {totalPages}
          </PageInfo>
          <PagerButton
            type="button"
            disabled={page >= totalPages - 1}
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
          >
            next &gt;
          </PagerButton>
        </Pager>
      )}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "DataHaq",
    desc: "Privacy-focused web app that scans inbox metadata from Gmail and Microsoft Outlook to help users visualize their digital footprint and submit DPDP rights requests. Built with secure OAuth SSO, encrypted mailbox token storage, multi-mailbox support, and a PostgreSQL/Prisma data model on a Next.js + TypeScript stack.",
    url: "https://datahaq.vercel.app/",
  },
  {
    id: 2,
    title: "IP Geo",
    desc: "IP intelligence lookup tool providing geographic, network, and security-related details for an IP address — location, ISP, connection type, and risk analysis to help identify suspicious or high-risk traffic.",
    url: "https://ipgeo-two.vercel.app/",
  },
  {
    id: 3,
    title: "JSProbeX",
    desc: "Python tool for extracting sensitive secrets from JavaScript files. Scans multiple URLs or files for API keys, secret tokens, and more — ideal for penetration testers and bug bounty hunters analyzing JS files for valuable data.",
    url: "https://github.com/hackelite01/JSProbeX",
  },
  {
    id: 4,
    title: "HoneyPot",
    desc: "A honeypot designed to detect, monitor, and analyze malicious activity within a controlled environment — a tool to study attack patterns, improve defensive strategies, and enhance security awareness.",
    url: "https://github.com/hackelite01/HoneyPot",
  },
  {
    id: 5,
    title: "CryptX",
    desc: "Python-based cryptography tool for secure communication, featuring key generation, message modification, encryption, and decryption using modified ASCII values to enhance message security.",
    url: "https://cryptx.streamlit.app",
  },
  {
    id: 6,
    title: "XSSProbe",
    desc: "An advanced XSS scanner in Python3 with a robust crawler engine for thorough website link scanning. Supports POST and GET forms, offers customizable settings, and excels in error handling and multiprocessing for efficient vulnerability detection.",
    url: "https://github.com/hackelite01/XSSProbe",
  },
  {
    id: 7,
    title: "ShieldSurf",
    desc: "A phishing domain detection tool that lets you safely view a website without actually visiting it. Quickly identify suspicious websites and protect yourself from phishing attacks.",
    url: "https://shieldsurf.vercel.app/",
  },
  {
    id: 8,
    title: "MailGuard",
    desc: "A forensic tool that reads through email files and analyzes headers to identify spoofed senders, malicious links, and scams — helping you avoid phishing attacks.",
    url: "https://github.com/hackelite01/mailguard",
  },
  {
    id: 9,
    title: "GitHub ReadMe Maker",
    desc: "Streamline README creation with a user-friendly web tool. Choose from templates, add badges and social links, and preview as you build. Say goodbye to writer's block and tedious formatting! 🌟",
    url: "https://github-readme-maker.vercel.app/",
  },
  {
    id: 10,
    title: "ElecTrip (EV Charging Locator)",
    desc: "An electric vehicle travel platform built with design engineering. Unique booking functionality lets EV drivers find and reserve charging stations and make early payments for a smooth trip. (Team project)",
    url: "https://electrip.tech",
  },
  {
    id: 11,
    title: "Dr.Plants",
    desc: "A plant disease recognition model using deep convolutional networks for leaf image classification — capable of identifying 38 plant diseases across 14 species and distinguishing leaves from their surroundings. (Team project)",
    url: "https://github.com/hackelite01/Dr.Plants",
  },
  {
    id: 12,
    title: "CyberGenie",
    desc: "AI assistant that utilizes GPT language models to interpret and generate cybersecurity payloads 🪄",
    url: "https://cybergenie.vercel.app/",
  },
  {
    id: 13,
    title: "KnightSpy",
    desc: "KnightSpy: Python tool for efficient information gathering and CMS detection.",
    url: "https://github.com/hackelite01/KnightSpy",
  },
  {
    id: 14,
    title: "CodeXPlain",
    desc: "Understanding code can be hard — let CodeXplain help you with that, line by line.",
    url: "https://codexplain.vercel.app/",
  },
  {
    id: 15,
    title: "SnapCode",
    desc: "Create and share code snippets as images, with customizable options.",
    url: "https://snapcode-hackelite01.vercel.app/",
  },
];

export default Projects;
