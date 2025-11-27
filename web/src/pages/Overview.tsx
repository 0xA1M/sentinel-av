import { Shield, Search, AlertTriangle, CheckCircle } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";

const scanData = [
  { name: "Mon", scans: 12 },
  { name: "Tue", scans: 15 },
  { name: "Wed", scans: 8 },
  { name: "Thu", scans: 18 },
  { name: "Fri", scans: 14 },
  { name: "Sat", scans: 10 },
  { name: "Sun", scans: 9 },
];

const threatData = [
  { name: "Mon", threats: 2 },
  { name: "Tue", threats: 1 },
  { name: "Wed", threats: 0 },
  { name: "Thu", threats: 3 },
  { name: "Fri", threats: 1 },
  { name: "Sat", threats: 0 },
  { name: "Sun", threats: 0 },
];

const vulnData = [
  { name: "Critical", value: 2, color: "hsl(0, 72%, 50%)" },
  { name: "High", value: 3, color: "hsl(25, 95%, 53%)" },
  { name: "Medium", value: 8, color: "hsl(45, 93%, 47%)" },
  { name: "Low", value: 12, color: "hsl(142, 76%, 36%)" },
];

export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">System Overview</h2>
        <p className="text-muted-foreground">Monitor your antivirus protection status</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="System Status"
          value="Protected"
          icon={Shield}
          trend={{ value: "All systems operational", positive: true }}
        />
        <StatCard
          title="Total Scans"
          value="86"
          icon={Search}
          trend={{ value: "+12% from last week", positive: true }}
        />
        <StatCard
          title="Threats Detected"
          value="7"
          icon={AlertTriangle}
          trend={{ value: "-43% from last week", positive: true }}
        />
        <StatCard
          title="Files Protected"
          value="248K"
          icon={CheckCircle}
          trend={{ value: "+2.4K this week", positive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Scan Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={scanData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="name" className="text-muted-foreground" />
              <YAxis className="text-muted-foreground" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="scans" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Threat Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={threatData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="name" className="text-muted-foreground" />
              <YAxis className="text-muted-foreground" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line type="monotone" dataKey="threats" stroke="hsl(var(--destructive))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Vulnerability Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={vulnData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="hsl(var(--primary))"
                dataKey="value"
              >
                {vulnData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
            <p className="text-sm text-muted-foreground">Manage your system protection</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button className="flex-1">Run Full Scan</Button>
          <Button variant="outline" className="flex-1">Quick Scan</Button>
          <Button variant="outline" className="flex-1">Update Definitions</Button>
        </div>
      </Card>
    </div>
  );
}
