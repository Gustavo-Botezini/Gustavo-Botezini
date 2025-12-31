import { Database, Server, Clock, CheckCircle } from "lucide-react";

export function StatusBar() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("pt-BR", { 
    hour: "2-digit", 
    minute: "2-digit",
    second: "2-digit"
  });

  return (
    <footer className="h-6 bg-pgadmin-header-bg border-t border-border flex items-center px-2 sm:px-3 text-[10px] sm:text-[11px] text-muted-foreground">
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" />
          <span className="hidden sm:inline">Connected</span>
          <span className="sm:hidden">OK</span>
        </div>
        <span className="text-border hidden sm:inline">|</span>
        <div className="flex items-center gap-1 sm:gap-1.5">
          <Server className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          <span className="hidden md:inline">localhost:5432</span>
          <span className="md:hidden">local</span>
        </div>
        <span className="text-border hidden sm:inline">|</span>
        <div className="flex items-center gap-1 sm:gap-1.5">
          <Database className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          <span>curriculo</span>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-1 sm:gap-1.5">
        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
        <span className="hidden sm:inline">{timeStr}</span>
        <span className="sm:hidden">{now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</span>
      </div>
    </footer>
  );
}
