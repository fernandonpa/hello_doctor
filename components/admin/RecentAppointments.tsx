"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

interface Appointment {
  $id: string;
  patient: {
    name: string;
    email: string;
    phone: string;
  };
  primaryPhysician: string;
  schedule: Date;
  status: "pending" | "scheduled" | "cancelled";
  reason: string;
}

interface RecentAppointmentsProps {
  appointments: Appointment[];
}

const RecentAppointments = ({ appointments }: RecentAppointmentsProps) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Recent Appointments
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {appointments.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No recent appointments
            </p>
          ) : (
            appointments.map((appointment) => (
              <div
                key={appointment.$id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {getInitials(appointment.patient.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{appointment.patient.name}</p>
                    <p className="text-sm text-gray-500">
                      {appointment.patient.email}
                    </p>
                    <p className="text-xs text-gray-400">
                      Dr. {appointment.primaryPhysician}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(appointment.schedule)}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <Clock className="h-3 w-3" />
                    {formatTime(appointment.schedule)}
                  </div>
                  <StatusBadge status={appointment.status} />
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentAppointments;
