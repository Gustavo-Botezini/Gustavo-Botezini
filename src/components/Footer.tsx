import { Database } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-divider bg-secondary/20">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4" />
            <span className="font-mono">© {currentYear} • Currículo DBA</span>
          </div>
          <p className="text-xs font-mono">
            Desenvolvido com PostgreSQL mindset
          </p>
        </div>
      </div>
    </footer>
  );
}
