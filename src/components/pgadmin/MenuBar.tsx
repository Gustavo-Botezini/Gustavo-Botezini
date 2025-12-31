import { Database, Mail, Linkedin, Github, LayoutDashboard } from "lucide-react";
import { profissional } from "@/data/resumeData";

interface MenuBarProps {
  onDashboardClick?: () => void;
}

export function MenuBar({ onDashboardClick }: MenuBarProps) {
  return (
    <header className="h-10 bg-pgadmin-sidebar-bg border-b border-sidebar-border flex items-center justify-between px-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-pgadmin-icon-db" />
          <span className="font-semibold text-[14px] text-sidebar-foreground">
            pgAdmin 4
          </span>
        </div>
        <span className="text-sidebar-foreground/40 hidden sm:inline">|</span>
        <nav className="hidden sm:flex items-center gap-1 text-[12px] text-sidebar-foreground">
          <button
            onClick={onDashboardClick}
            className="px-2 py-1 hover:bg-pgadmin-sidebar-hover rounded transition-colors flex items-center gap-1"
          >
            <LayoutDashboard className="w-3 h-3" />
            Dashboard
          </button>
          {["Object", "Tools", "Help"].map((item) => (
            <button
              key={item}
              className="px-2 py-1 hover:bg-pgadmin-sidebar-hover rounded transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
        {/* Mobile Dashboard Button */}
        <button
          onClick={onDashboardClick}
          className="sm:hidden p-1.5 hover:bg-pgadmin-sidebar-hover rounded transition-colors"
          title="Dashboard"
        >
          <LayoutDashboard className="w-4 h-4 text-sidebar-foreground" />
        </button>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-[12px] text-sidebar-foreground/80 mr-2 hidden md:inline">
          {profissional.nome}
        </span>
        <a
          href={`mailto:${profissional.email}`}
          className="p-1.5 hover:bg-pgadmin-sidebar-hover rounded transition-colors"
          title={profissional.email}
        >
          <Mail className="w-4 h-4 text-sidebar-foreground/70" />
        </a>
        <a
          href={`https://${profissional.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 hover:bg-pgadmin-sidebar-hover rounded transition-colors hidden sm:flex"
          title="LinkedIn"
        >
          <Linkedin className="w-4 h-4 text-sidebar-foreground/70" />
        </a>
        <a
          href={`https://${profissional.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 hover:bg-pgadmin-sidebar-hover rounded transition-colors hidden sm:flex"
          title="GitHub"
        >
          <Github className="w-4 h-4 text-sidebar-foreground/70" />
        </a>
      </div>
    </header>
  );
}
