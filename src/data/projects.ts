export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  stars: number;
  forks: number;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  image: string;
  language: string;
  updatedAt: string;
}

export const projects: Project[] = [
  {
    id: "IPsubnetting",
    title: "IPsubnetting",
    description: "CLI tool for automatic IP subnet calculation with CIDR validation, network range mapping, usable host counts, and binary mask breakdown.",
    tags: ["Python", "CLI", "Networking", "Subnetting", "TCP/IP"],
    stars: 5,
    forks: 1,
    githubUrl: "https://github.com/dieg0y/IPsubnetting",
    featured: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    language: "Python",
    updatedAt: "2026"
  }
];
