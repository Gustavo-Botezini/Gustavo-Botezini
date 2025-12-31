import { useState, useEffect } from "react";
import { FileText, Download, ZoomIn, ZoomOut, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certificate {
  name: string;
  url: string;
  size?: string;
  uploadDate?: string;
}

interface CertificateViewerProps {
  selectedCertificate: string | null;
}

export function CertificateViewer({ selectedCertificate }: CertificateViewerProps) {
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!selectedCertificate) {
    return (
      <div className="flex-1 flex items-center justify-center bg-muted/10 animate-fade-in">
        <div className="text-center text-muted-foreground">
          <FileText className="w-16 h-16 mx-auto mb-4 opacity-20" />
          <p className="text-sm">Selecione um certificado para visualizar</p>
        </div>
      </div>
    );
  }

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 200));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 50));
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = selectedCertificate;
    link.download = selectedCertificate.split('/').pop() || 'certificate.pdf';
    link.click();
  };

  return (
    <div className="flex-1 flex flex-col bg-background overflow-hidden animate-fade-in">
      {/* Toolbar */}
      <div className="pgadmin-panel-header border-b border-sidebar-border flex items-center justify-between px-2 sm:px-4">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-sidebar-foreground shrink-0" />
          <span className="font-semibold text-[11px] sm:text-[12px] text-sidebar-foreground truncate">
            {selectedCertificate.split('/').pop()}
          </span>
        </div>
        
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            className="h-6 sm:h-7 px-1.5 sm:px-2 text-xs hover:bg-pgadmin-sidebar-hover transition-colors duration-150"
            onClick={handleZoomOut}
          >
            <ZoomOut className="w-3 h-3" />
          </Button>
          <span className="text-[10px] sm:text-xs text-muted-foreground min-w-[35px] sm:min-w-[50px] text-center hidden sm:inline">
            {zoom}%
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 sm:h-7 px-1.5 sm:px-2 text-xs hover:bg-pgadmin-sidebar-hover transition-colors duration-150"
            onClick={handleZoomIn}
          >
            <ZoomIn className="w-3 h-3" />
          </Button>
          
          <div className="w-px h-3 sm:h-4 bg-border mx-0.5 sm:mx-1 hidden sm:block" />
          
          <Button
            variant="ghost"
            size="sm"
            className="h-6 sm:h-7 px-1.5 sm:px-2 text-xs hover:bg-pgadmin-sidebar-hover transition-colors duration-150 hidden sm:flex"
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            {isFullscreen ? <X className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs hover:bg-pgadmin-sidebar-hover transition-colors duration-150"
            onClick={handleDownload}
          >
            <Download className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 overflow-auto bg-muted/5 p-2 sm:p-4">
        <div 
          className={`mx-auto bg-white shadow-lg ${isFullscreen ? 'w-full h-full' : ''}`}
          style={{ 
            width: isFullscreen ? '100%' : `${zoom}%`,
            minHeight: isFullscreen ? '100%' : '600px'
          }}
        >
          <iframe
            src={selectedCertificate}
            className="w-full h-full min-h-[600px] sm:min-h-[800px] border-0"
            title="Certificate PDF Viewer"
          />
        </div>
      </div>
    </div>
  );
}
