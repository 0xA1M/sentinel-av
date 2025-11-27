import { Search, Play, Clock } from "lucide-react";
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

const scanHistory = [
  { id: 1, type: "Full Scan", date: "2024-01-15 14:30", duration: "45m 23s", filesScanned: 248392, threatsFound: 0, status: "completed" },
  { id: 2, type: "Quick Scan", date: "2024-01-15 09:15", duration: "12m 45s", filesScanned: 82134, threatsFound: 2, status: "completed" },
  { id: 3, type: "Custom Scan", date: "2024-01-14 16:20", duration: "28m 10s", filesScanned: 125678, threatsFound: 1, status: "completed" },
  { id: 4, type: "Full Scan", date: "2024-01-13 08:00", duration: "48m 55s", filesScanned: 245892, threatsFound: 0, status: "completed" },
  { id: 5, type: "Quick Scan", date: "2024-01-12 11:30", duration: "11m 20s", filesScanned: 79834, threatsFound: 3, status: "completed" },
];

export default function Scans() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Scan Management</h2>
          <p className="text-muted-foreground">View scan history and run new scans</p>
        </div>
        <Button className="gap-2">
          <Play className="h-4 w-4" />
          Start New Scan
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">86</p>
              <p className="text-sm text-muted-foreground">Total Scans</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">32m</p>
              <p className="text-sm text-muted-foreground">Avg. Scan Time</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-destructive/10">
              <Search className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">7</p>
              <p className="text-sm text-muted-foreground">Threats Found</p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Scan History</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Scan Type</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Files Scanned</TableHead>
              <TableHead>Threats Found</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scanHistory.map((scan) => (
              <TableRow key={scan.id}>
                <TableCell className="font-medium">{scan.type}</TableCell>
                <TableCell>{scan.date}</TableCell>
                <TableCell>{scan.duration}</TableCell>
                <TableCell>{scan.filesScanned.toLocaleString()}</TableCell>
                <TableCell>
                  <span className={scan.threatsFound > 0 ? "text-destructive font-medium" : ""}>
                    {scan.threatsFound}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="capitalize">
                    {scan.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
