"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Doctors } from "@/constants";
import { Stethoscope, Users } from "lucide-react";

interface DoctorStats {
  name: string;
  image: string;
  totalPatients: number;
  todayAppointments: number;
  status: "available" | "busy" | "offline";
}

interface DoctorOverviewProps {
  doctorStats?: DoctorStats[];
}

const DoctorOverview = ({ doctorStats }: DoctorOverviewProps) => {
  // Mock data if no stats provided
  const mockStats: DoctorStats[] = Doctors.slice(0, 6).map((doctor, index) => ({
    name: doctor.name,
    image: doctor.image,
    totalPatients: Math.floor(Math.random() * 50) + 20,
    todayAppointments: Math.floor(Math.random() * 8) + 1,
    status: (["available", "busy", "offline"] as const)[
      Math.floor(Math.random() * 3)
    ],
  }));

  const stats = doctorStats || mockStats;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800";
      case "busy":
        return "bg-yellow-100 text-yellow-800";
      case "offline":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Stethoscope className="h-5 w-5" />
          Doctor Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {stats.map((doctor, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={doctor.image} alt={doctor.name} />
                  <AvatarFallback>
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{doctor.name}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Users className="h-3 w-3" />
                      {doctor.totalPatients} patients
                    </div>
                    <span className="text-xs text-gray-500">
                      {doctor.todayAppointments} today
                    </span>
                  </div>
                </div>
              </div>

              <Badge
                variant="secondary"
                className={getStatusColor(doctor.status)}
              >
                {doctor.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorOverview;
