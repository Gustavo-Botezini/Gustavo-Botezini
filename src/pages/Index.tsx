import { useState } from "react";
import { MenuBar } from "@/components/pgadmin/MenuBar";
import { ObjectExplorer, TableName } from "@/components/pgadmin/ObjectExplorer";
import { TablePanel } from "@/components/pgadmin/TablePanel";
import { CertificateViewer } from "@/components/pgadmin/CertificateViewer";
import { Dashboard } from "@/components/pgadmin/Dashboard";
import { StatusBar } from "@/components/pgadmin/StatusBar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedTable, setSelectedTable] = useState<TableName | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const [showDashboard, setShowDashboard] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleSelectTable = (table: TableName) => {
    setSelectedTable(table);
    setSelectedCertificate(null);
    setShowDashboard(false);
    if (isMobile) setIsSidebarOpen(false);
  };

  const handleSelectCertificate = (path: string) => {
    setSelectedCertificate(path);
    setSelectedTable(null);
    setShowDashboard(false);
    if (isMobile) setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <MenuBar 
        onDashboardClick={() => {
          setShowDashboard(true);
          setSelectedTable(null);
          setSelectedCertificate(null);
        }} 
      />
      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile Menu Button */}
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 left-2 z-50 bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-muted"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        {/* Desktop Sidebar */}
        {!isMobile && (
          <ObjectExplorer 
            selectedTable={selectedTable} 
            onSelectTable={handleSelectTable}
            selectedCertificate={selectedCertificate}
            onSelectCertificate={handleSelectCertificate}
          />
        )}

        {/* Mobile Sidebar (Sheet) */}
        {isMobile && (
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetContent side="left" className="p-0 w-[280px] sm:w-[320px]">
              <ObjectExplorer 
                selectedTable={selectedTable} 
                onSelectTable={handleSelectTable}
                selectedCertificate={selectedCertificate}
                onSelectCertificate={handleSelectCertificate}
              />
            </SheetContent>
          </Sheet>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {showDashboard ? (
            <Dashboard />
          ) : selectedCertificate ? (
            <CertificateViewer selectedCertificate={selectedCertificate} />
          ) : (
            <TablePanel selectedTable={selectedTable} />
          )}
        </div>
      </div>
      <StatusBar />
    </div>
  );
};

export default Index;
