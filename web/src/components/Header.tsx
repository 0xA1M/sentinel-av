import { Shield } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";

export const Header = () => {
  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="flex items-center gap-3">
          <Shield className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold text-foreground">Sentinel-AV</h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-muted-foreground">
          Last scan: <span className="text-foreground font-medium">2 hours ago</span>
        </div>
      </div>
    </header>
  );
};
