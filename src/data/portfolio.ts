import type { LucideIcon } from 'lucide-react';
import {
  Braces,
  Cloud,
  CodeXml,
  Container,
  DatabaseBackup,
  Github,
  GitBranch,
  Globe,
  Infinity,
  KeyRound,
  Layers,
  LockKeyhole,
  Palette,
  RefreshCw,
  Server,
  ShieldCheck,
  ShipWheel,
  SquareTerminal,
  Terminal,
  Users,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Manu',
  title: 'Aspiring DevOps Engineer',
  tagline: 'Linux | AWS | Cloud Computing | Automation | CI/CD',
  intro: [
    'I am an aspiring DevOps Engineer passionate about Linux system administration, cloud infrastructure, automation and server management.',
    'I enjoy working with Linux environments, managing servers, configuring secure remote access and building practical infrastructure projects.',
    'I am continuously improving my technical skills through hands-on projects and learning modern DevOps technologies.',
  ],
  about: [
    'I am Manu, an aspiring DevOps Engineer interested in Linux Administration, Cloud Computing, Server Infrastructure and Automation.',
    'I enjoy learning through practical implementation and building projects that help me understand real-world IT infrastructure.',
    'My career goal is to become a skilled DevOps Engineer and work with modern cloud and automation technologies.',
  ],
  email: 'manubharadwaj978@gmail.com',
  githubUrl: 'https://github.com/mxnubhxrxdwxj',
  // Replace with your personal LinkedIn URL when available
  linkedinUrl: 'https://www.linkedin.com/in/manu-manu-296104325',
  resumeFile: 'assets/resume/Manu_Bharadwaj_Resume.pdf',
  certificationFile: 'assets/certifications/linux_certification.pdf',
  photoFile: 'assets/images/Futuristic_DevOps_Developer_Portrait_(1).png',
};

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    icon: CodeXml,
    skills: [
      { name: 'C', icon: CodeXml },
      { name: 'C++', icon: CodeXml },
      { name: 'Python', icon: CodeXml },
      { name: 'Java', icon: CodeXml },
      { name: 'JavaScript', icon: Braces },
    ],
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: [
      { name: 'HTML', icon: Globe },
      { name: 'CSS', icon: Palette },
      { name: 'JavaScript', icon: Braces },
    ],
  },
  {
    title: 'Linux & System Administration',
    icon: Server,
    skills: [
      { name: 'Linux', icon: Terminal },
      { name: 'Ubuntu', icon: Server },
      { name: 'User and Group Management', icon: Users },
      { name: 'File Permissions', icon: LockKeyhole },
      { name: 'SSH Configuration', icon: KeyRound },
      { name: 'Server Administration', icon: ShieldCheck },
      { name: 'Backup Management', icon: DatabaseBackup },
      { name: 'Shell Commands', icon: SquareTerminal },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    skills: [
      { name: 'AWS', icon: Cloud },
      { name: 'Docker', icon: Container },
      { name: 'Jenkins', icon: Workflow },
      { name: 'Kubernetes', icon: ShipWheel },
      { name: 'Terraform', icon: Layers },
      { name: 'CI/CD', icon: RefreshCw },
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Github },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  status: 'Completed' | 'In Progress';
  situation: string;
  task: string;
  action: string;
  result: string;
  technologies: string[];
  // Leave empty until the repository URL is available
  repoUrl: string;
}

export const projects: Project[] = [
  {
    title: 'Linux Server Administration & Backup System',
    description:
      'Linux-based server administration and data backup management to maintain secure and reliable server operations.',
    status: 'Completed',
    situation:
      'Linux server administration and data backup management to maintain secure and reliable server operations.',
    task: 'Configured Linux user and group management, file permissions, SSH remote access and backup procedures.',
    action:
      'Used Linux commands for user administration, file ownership, access control, SSH configuration and backup management using shell commands and scheduling tools.',
    result:
      'Improved practical understanding of Linux server administration, secure remote access, file management and backup and recovery processes.',
    technologies: ['Linux', 'Ubuntu', 'SSH', 'Shell Commands', 'User Management', 'Backup Management'],
    repoUrl: '',
  },
];

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
}

export const education: EducationEntry[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Galgotias University',
    location: 'Greater Noida, Uttar Pradesh',
    period: '2024 – 2027',
    highlights: ['Represented University in Technical Fest.', 'Top 10% in Academics.'],
  },
  {
    degree: 'Bachelor of Commerce (B.Com)',
    institution: 'Kherimal Gautam Smarak Mahavidyalaya',
    location: 'Gabhana, Aligarh, Uttar Pradesh',
    period: '2022 – 2025',
    highlights: ['Represented University in Business Fest.', 'Top 5% in Academics.'],
  },
];

export interface Certification {
  title: string;
  course: string;
  issuer: string;
  date: string;
  file: string;
}

export const certifications: Certification[] = [
  {
    title: 'Linux Administration Certification',
    course: 'Introduction to Linux (LFS101)',
    issuer: 'The Linux Foundation',
    date: 'November 10, 2026',
    file: 'assets/certifications/linux_certification.pdf',
  },
];
