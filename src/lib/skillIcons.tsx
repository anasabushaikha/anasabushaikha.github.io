import type { IconType } from "react-icons";
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiR,
  SiHtml5,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiVite,
  SiTailwindcss,
  SiPostgresql,
  SiPlotly,
  SiGit,
  SiLinux,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import {
  Coffee,
  Hash,
  Database,
  BarChart3,
  Palette,
  LineChart,
  Waves,
  Server,
  Sigma,
  TrendingUp,
  Code2,
} from "lucide-react";

export const skillIconMap: Record<string, IconType> = {
  Python: SiPython,
  C: SiC,
  "C++": SiCplusplus,
  "C#": Hash,
  JavaScript: SiJavascript,
  SQL: Database,
  R: SiR,
  SAS: BarChart3,
  HTML: SiHtml5,
  CSS: Palette,
  Java: Coffee,

  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  "scikit-learn": SiScikitlearn,
  NumPy: SiNumpy,
  Pandas: SiPandas,

  React: SiReact,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Vite: SiVite,
  "Tailwind CSS": SiTailwindcss,

  PostgreSQL: SiPostgresql,
  Matplotlib: LineChart,
  Seaborn: Waves,
  Plotly: SiPlotly,
  "SQL Server": Server,
  "Database Design": Database,

  Git: SiGit,
  Linux: SiLinux,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  "Statistical Analysis": Sigma,
  "Time Series Analysis": TrendingUp,
};

export function getSkillIcon(name: string): IconType {
  return skillIconMap[name] ?? Code2;
}
