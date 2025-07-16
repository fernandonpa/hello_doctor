"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  UserPlus,
  Calendar,
  FileText,
  Settings,
  Download,
  Bell,
} from "lucide-react";
import { useRouter } from "next/navigation";

const QuickActions = () => {
  const router = useRouter();

  const actions = [
    {
      title: "Add New Patient",
      description: "Register a new patient",
      icon: UserPlus,
      color: "bg-blue-500 hover:bg-blue-600",
      onClick: () => router.push("/patients/register"),
    },
    {
      title: "Schedule Appointment",
      description: "Book a new appointment",
      icon: Calendar,
      color: "bg-green-500 hover:bg-green-600",
      onClick: () => router.push("/admin/appointments/new"),
    },
    {
      title: "Generate Report",
      description: "Create monthly report",
      icon: FileText,
      color: "bg-purple-500 hover:bg-purple-600",
      onClick: () => console.log("Generate report"),
    },
    {
      title: "Export Data",
      description: "Download patient data",
      icon: Download,
      color: "bg-orange-500 hover:bg-orange-600",
      onClick: () => console.log("Export data"),
    },
    {
      title: "Send Notifications",
      description: "Notify patients",
      icon: Bell,
      color: "bg-indigo-500 hover:bg-indigo-600",
      onClick: () => console.log("Send notifications"),
    },
    {
      title: "System Settings",
      description: "Configure system",
      icon: Settings,
      color: "bg-gray-500 hover:bg-gray-600",
      onClick: () => router.push("/admin/settings"),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-4 justify-start text-left hover:shadow-md transition-all"
                onClick={action.onClick}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg text-white ${action.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{action.title}</p>
                    <p className="text-xs text-gray-500">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
