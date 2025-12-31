import { ReactNode } from "react";

interface Column {
  name: string;
  type: string;
  nullable?: boolean;
  isPK?: boolean;
  isFK?: boolean;
}

interface DataGridProps {
  tableName: string;
  columns: Column[];
  rows: Record<string, ReactNode>[];
  rowCount?: number;
}

export function DataGrid({ tableName, columns, rows, rowCount }: DataGridProps) {
  const totalRows = rowCount ?? rows.length;

  return (
    <div className="flex flex-col h-full">
      {/* Grid toolbar */}
      <div className="flex items-center gap-4 px-3 py-1.5 bg-pgadmin-header-bg border-b border-border text-[11px] text-muted-foreground">
        <span>
          <strong className="text-foreground">{totalRows}</strong> row{totalRows !== 1 ? 's' : ''} returned
        </span>
        <span className="text-border">|</span>
        <span>
          <strong className="text-foreground">{columns.length}</strong> columns
        </span>
      </div>

      {/* Column definitions header */}
      <div className="px-3 py-2 bg-muted/50 border-b border-border">
        <div className="flex flex-wrap gap-3 text-[10px]">
          {columns.map((col) => (
            <div key={col.name} className="flex items-center gap-1">
              {col.isPK && <span className="constraint-pk" title="Primary Key">PK</span>}
              {col.isFK && <span className="constraint-fk" title="Foreign Key">FK</span>}
              <span className="font-mono font-medium text-foreground">{col.name}</span>
              <span className="data-type">{col.type}</span>
              {!col.nullable && <span className="constraint-nn" title="NOT NULL">NN</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Data grid */}
      <div className="flex-1 overflow-auto">
        <table className="pgadmin-grid">
          <thead className="sticky top-0 z-10">
            <tr>
              <th className="w-10 text-center font-mono text-muted-foreground">#</th>
              {columns.map((col) => (
                <th key={col.name} className="font-mono">
                  <div className="flex items-center gap-1">
                    {col.isPK && <span className="constraint-pk text-[8px]">PK</span>}
                    {col.isFK && <span className="constraint-fk text-[8px]">FK</span>}
                    {col.name}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-muted/50 transition-colors duration-150">
                <td className="text-center font-mono text-muted-foreground text-[11px]">{idx + 1}</td>
                {columns.map((col) => (
                  <td key={col.name} className="max-w-xs">
                    {row[col.name] === null || row[col.name] === undefined ? (
                      <span className="null-value">[null]</span>
                    ) : (
                      row[col.name]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
