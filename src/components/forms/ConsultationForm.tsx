"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _honey: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const services = [
  "Direct Taxes and GST",
  "Audit & Assurance",
  "Regulatory Services",
  "Other Advisory",
];

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      _honey: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      formData.append("_captcha", "false");
      formData.append("_template", "table");
      formData.append("_subject", `New Consultation Request: ${data.service}`);

      const response = await fetch("https://formsubmit.co/ajax/bnvcaoffice@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage("Failed to send request. Please try again or contact us directly.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "flex h-12 w-full rounded-none border-b border-foreground/20 bg-transparent px-0 py-2 text-base text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground/30 focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors font-sans";
  const labelClasses = "text-[10px] font-sans uppercase tracking-[0.2em] text-foreground/50 mb-2 block font-bold";

  if (submitStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 rounded-none border border-primary/20 bg-primary/5 p-12 text-center">
        <CheckCircle className="h-16 w-16 text-primary" />
        <h3 className="text-2xl font-serif text-foreground">Request Received</h3>
        <p className="text-foreground/60 font-sans max-w-md mx-auto">
          Thank you for reaching out. A senior partner will review your inquiry and connect with you shortly.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setSubmitStatus("idle")}
          className="mt-8 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-sans tracking-widest uppercase text-[10px] px-8 rounded-none"
        >
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      {submitStatus === "error" && (
        <div className="flex items-center gap-3 border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive font-sans">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Honeypot field */}
      <input
        {...register("_honey")}
        type="text"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name
          </label>
          <input
            id="name"
            {...register("name")}
            placeholder="John Doe"
            className={cn(inputClasses, errors.name && "border-destructive")}
          />
          {errors.name && (
            <p className="text-[10px] uppercase tracking-wider font-sans text-destructive mt-2">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="john@example.com"
            className={cn(inputClasses, errors.email && "border-destructive")}
          />
          {errors.email && (
            <p className="text-[10px] uppercase tracking-wider font-sans text-destructive mt-2">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="+91 98765 43210"
            className={cn(inputClasses, errors.phone && "border-destructive")}
          />
          {errors.phone && (
            <p className="text-[10px] uppercase tracking-wider font-sans text-destructive mt-2">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className={labelClasses}>
            Practice Area
          </label>
          <select
            id="service"
            {...register("service")}
            className={cn(inputClasses, "appearance-none", errors.service && "border-destructive")}
          >
            <option value="" className="bg-background">Select an area</option>
            {services.map((service) => (
              <option key={service} value={service} className="bg-background text-foreground">
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-[10px] uppercase tracking-wider font-sans text-destructive mt-2">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Inquiry Details
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="How can we assist you?"
          rows={4}
          className={cn(
            "flex min-h-[120px] w-full rounded-none border-b border-foreground/20 bg-transparent px-0 py-2 text-base text-foreground ring-offset-background placeholder:text-foreground/30 focus-visible:outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors font-sans resize-none",
            errors.message && "border-destructive"
          )}
        />
        {errors.message && (
          <p className="text-[10px] uppercase tracking-wider font-sans text-destructive mt-2">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 text-xs uppercase tracking-[0.3em] font-sans font-bold transition-all shadow-xl shadow-primary/10"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending Inquiry...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </Button>
    </form>
  );
}
