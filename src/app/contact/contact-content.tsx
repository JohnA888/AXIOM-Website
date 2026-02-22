"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarCheck,
  MessageSquare,
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  Loader2,
} from "lucide-react";

type DemoFormData = {
  name: string;
  email: string;
  company: string;
  companySize: string;
  role: string;
  deployment: string;
  message: string;
};

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const companySizes = ["1-10", "11-50", "51-200", "201-500", "500+"];

const roles = ["IT Director", "Developer", "Executive", "Other"];

const deployments = ["Cloud", "Hybrid", "Air-Gap"];

function InputField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = true,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy mb-1.5">
        {label} {required && <span className="text-accent-blue">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-body-text placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-shadow"
      />
    </div>
  );
}

function SelectField({
  label,
  id,
  placeholder,
  options,
  value,
  onChange,
  required = true,
}: {
  label: string;
  id: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy mb-1.5">
        {label} {required && <span className="text-accent-blue">*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-body-text focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-shadow appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({
  label,
  id,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
}: {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy mb-1.5">
        {label} {required && <span className="text-accent-blue">*</span>}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        rows={rows}
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-body-text placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-shadow resize-none"
      />
    </div>
  );
}

function DemoForm() {
  const [formData, setFormData] = useState<DemoFormData>({
    name: "",
    email: "",
    company: "",
    companySize: "",
    role: "",
    deployment: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof DemoFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success mb-6">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">
          Demo Request Received
        </h3>
        <p className="text-muted-text max-w-sm">
          Our team will reach out within one business day to schedule your
          personalized demo of AXIOM.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          label="Full Name"
          id="demo-name"
          placeholder="Jane Smith"
          value={formData.name}
          onChange={(v) => updateField("name", v)}
        />
        <InputField
          label="Work Email"
          id="demo-email"
          type="email"
          placeholder="jane@company.com"
          value={formData.email}
          onChange={(v) => updateField("email", v)}
        />
      </div>
      <InputField
        label="Company"
        id="demo-company"
        placeholder="Acme Corp"
        value={formData.company}
        onChange={(v) => updateField("company", v)}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Company Size"
          id="demo-company-size"
          placeholder="Select company size"
          options={companySizes}
          value={formData.companySize}
          onChange={(v) => updateField("companySize", v)}
        />
        <SelectField
          label="Your Role"
          id="demo-role"
          placeholder="Select your role"
          options={roles}
          value={formData.role}
          onChange={(v) => updateField("role", v)}
        />
      </div>
      <SelectField
        label="Deployment Interest"
        id="demo-deployment"
        placeholder="Select deployment type"
        options={deployments}
        value={formData.deployment}
        onChange={(v) => updateField("deployment", v)}
      />
      <TextAreaField
        label="Message"
        id="demo-message"
        placeholder="Tell us about your current operations challenges or what you'd like to see in the demo..."
        value={formData.message}
        onChange={(v) => updateField("message", v)}
        required={false}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white rounded-lg h-11"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <CalendarCheck className="mr-2 h-4 w-4" />
            Schedule My Demo
          </>
        )}
      </Button>
    </form>
  );
}

function GeneralContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success mb-6">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Message Sent</h3>
        <p className="text-muted-text max-w-sm">
          Thanks for reaching out. We will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          label="Full Name"
          id="contact-name"
          placeholder="Jane Smith"
          value={formData.name}
          onChange={(v) => updateField("name", v)}
        />
        <InputField
          label="Email"
          id="contact-email"
          type="email"
          placeholder="jane@example.com"
          value={formData.email}
          onChange={(v) => updateField("email", v)}
        />
      </div>
      <InputField
        label="Subject"
        id="contact-subject"
        placeholder="How can we help?"
        value={formData.subject}
        onChange={(v) => updateField("subject", v)}
      />
      <TextAreaField
        label="Message"
        id="contact-message"
        placeholder="Write your message here..."
        value={formData.message}
        onChange={(v) => updateField("message", v)}
        required={true}
        rows={5}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white rounded-lg h-11"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

export function ContactContent() {
  const [activeTab, setActiveTab] = useState<"demo" | "general">("demo");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 bg-accent-blue/20 text-accent-blue border-accent-blue/30 hover:bg-accent-blue/20">
              Get in Touch
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-up">
              Let&apos;s talk about your{" "}
              <span className="text-gradient">operations.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed animate-fade-up delay-200">
              Whether you want to see AXIOM in action or have a question, our
              team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="border-b border-gray-100 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-2 text-sm text-muted-text">
              <Mail className="h-4 w-4 text-accent-blue" />
              <span>hello@AxiomAssistant.ai</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-text">
              <MapPin className="h-4 w-4 text-accent-blue" />
              <span>Austin, TX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          {/* Tab Switcher */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveTab("demo")}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                activeTab === "demo"
                  ? "bg-accent-blue text-white shadow-md"
                  : "bg-surface text-muted-text hover:text-body-text hover:bg-gray-200"
              }`}
            >
              <CalendarCheck className="h-4 w-4" />
              Schedule a Demo
            </button>
            <button
              onClick={() => setActiveTab("general")}
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                activeTab === "general"
                  ? "bg-accent-blue text-white shadow-md"
                  : "bg-surface text-muted-text hover:text-body-text hover:bg-gray-200"
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              General Contact
            </button>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:p-10 animate-fade-up">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy">
                {activeTab === "demo"
                  ? "Schedule a Demo"
                  : "Send Us a Message"}
              </h2>
              <p className="mt-2 text-muted-text">
                {activeTab === "demo"
                  ? "Fill out the form below and our team will set up a personalized walkthrough of AXIOM for your organization."
                  : "Have a question, partnership inquiry, or just want to say hello? We would love to hear from you."}
              </p>
            </div>

            {activeTab === "demo" ? <DemoForm /> : <GeneralContactForm />}
          </div>
        </div>
      </section>
    </div>
  );
}
