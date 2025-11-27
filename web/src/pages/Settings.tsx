import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Settings</h2>
        <p className="text-muted-foreground">Configure your antivirus preferences</p>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Scan Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-scan">Automatic Scanning</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically scan files when accessed
                  </p>
                </div>
                <Switch id="auto-scan" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="scheduled-scan">Scheduled Scans</Label>
                  <p className="text-sm text-muted-foreground">
                    Run full system scan daily at 2:00 AM
                  </p>
                </div>
                <Switch id="scheduled-scan" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="cloud-scan">Cloud-Based Scanning</Label>
                  <p className="text-sm text-muted-foreground">
                    Use cloud resources for enhanced detection
                  </p>
                </div>
                <Switch id="cloud-scan" defaultChecked />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Threat Response</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-quarantine">Auto Quarantine</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically quarantine detected threats
                  </p>
                </div>
                <Switch id="auto-quarantine" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Threat Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Show notifications when threats are detected
                  </p>
                </div>
                <Switch id="notifications" defaultChecked />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Discord Integration</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="discord-webhook">Discord Webhook URL</Label>
                <Input
                  id="discord-webhook"
                  type="url"
                  placeholder="https://discord.com/api/webhooks/..."
                  className="max-w-xl"
                />
                <p className="text-sm text-muted-foreground">
                  Receive threat alerts in your Discord server
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="discord-alerts">Discord Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Send threat notifications to Discord
                  </p>
                </div>
                <Switch id="discord-alerts" />
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="flex gap-4">
        <Button onClick={handleSave}>Save Changes</Button>
        <Button variant="outline">Reset to Defaults</Button>
      </div>
    </div>
  );
}
