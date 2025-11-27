import { AlertTriangle, Shield, Archive } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const threats = [
  { id: 1, name: "Trojan.GenericKD.123456", file: "C:\\Users\\Documents\\file.exe", severity: "high", detected: "2024-01-15 14:32", status: "quarantined" },
  { id: 2, name: "Adware.BrowserHelper", file: "C:\\Program Files\\Extension\\helper.dll", severity: "medium", detected: "2024-01-15 09:18", status: "quarantined" },
  { id: 3, name: "PUA.Unwanted.Tool", file: "C:\\Temp\\installer.msi", severity: "low", detected: "2024-01-14 16:25", status: "deleted" },
  { id: 4, name: "Malware.Generic.789012", file: "C:\\Users\\Downloads\\update.exe", severity: "high", detected: "2024-01-12 11:45", status: "quarantined" },
];

const getSeverityVariant = (severity: string) => {
  switch (severity) {
    case "high":
      return "destructive";
    case "medium":
      return "default";
    case "low":
      return "secondary";
    default:
      return "outline";
  }
};

export default function Threats() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Threat Management</h2>
        <p className="text-muted-foreground">Monitor and manage detected threats</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-destructive/10">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">7</p>
              <p className="text-sm text-muted-foreground">Total Threats</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">5</p>
              <p className="text-sm text-muted-foreground">Quarantined</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Archive className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">2</p>
              <p className="text-sm text-muted-foreground">Deleted</p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Detected Threats</h3>
            <p className="text-sm text-muted-foreground mt-1">Recent threats detected by the system</p>
          </div>
          <Button variant="outline" size="sm">Clear All Quarantined</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Threat Name</TableHead>
              <TableHead>File Path</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Detected</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {threats.map((threat) => (
              <TableRow key={threat.id}>
                <TableCell className="font-medium">{threat.name}</TableCell>
                <TableCell className="text-sm text-muted-foreground max-w-xs truncate">
                  {threat.file}
                </TableCell>
                <TableCell>
                  <Badge variant={getSeverityVariant(threat.severity)} className="capitalize">
                    {threat.severity}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm">{threat.detected}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {threat.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
