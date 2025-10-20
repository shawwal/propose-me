import { Card, CardContent } from './ui/card';
import { TrendingUp, FileText, Calendar, Users } from 'lucide-react';

const stats = [
  { label: 'Total Proposals', value: '24', icon: FileText, trend: '+12%' },
  { label: 'This Month', value: '8', icon: Calendar, trend: '+25%' },
  { label: 'Active Partners', value: '18', icon: Users, trend: '+8%' },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label} className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    <span className="text-green-600 text-sm">{stat.trend}</span>
                    <span className="text-sm text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}