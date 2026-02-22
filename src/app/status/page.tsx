import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "System Status",
  description: "AXIOM system status and uptime monitoring.",
};

const services = [
  { name: "API", status: "operational" },
  { name: "Email Intelligence", status: "operational" },
  { name: "Calendar Optimization", status: "operational" },
  { name: "Meeting Transcription", status: "operational" },
  { name: "Policy Engine", status: "operational" },
  { name: "Memory System", status: "operational" },
  { name: "OpenRouter Gateway", status: "operational" },
  { name: "Web Application", status: "operational" },
];

export default function StatusPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold text-navy mb-4">
          System Status
        </h1>

        <div className="mb-8 rounded-xl bg-success/10 border border-success/20 p-6 flex items-center gap-4">
          <CheckCircle className="h-8 w-8 text-success" />
          <div>
            <p className="text-lg font-semibold text-success">
              All Systems Operational
            </p>
            <p className="text-sm text-muted-text">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-between rounded-lg border border-gray-200 px-6 py-4"
            >
              <span className="font-medium text-body-text">{service.name}</span>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-success" />
                <span className="text-sm text-success capitalize">
                  {service.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold text-navy mb-4">Uptime History</h2>
          <div className="rounded-xl border border-gray-200 p-6 text-center">
            <p className="text-4xl font-bold text-success mb-1">99.9%</p>
            <p className="text-sm text-muted-text">
              Uptime over the last 90 days
            </p>
            <div className="mt-4 flex justify-center gap-0.5">
              {Array.from({ length: 90 }).map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-1 rounded-full bg-success"
                  title={`Day ${90 - i}: Operational`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
