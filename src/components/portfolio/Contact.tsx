import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, User, Send, MessageSquare } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast({ title: "Please check the form", description: r.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    setLoading(true);
    
    // EmailJS integration
    const serviceID = 'service_5dehy4x';
    const templateID = 'template_b96ddui';
    const publicKey = '5To8EY60UkA78mLAE';

    emailjs.send(
      serviceID, 
      templateID, 
      {
        name: form.name,
        from_name: form.name,
        email: form.email,
        from_email: form.email,
        reply_to: form.email,
        message: form.message,
      }, 
      publicKey
    )
    .then(() => {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message sent!", description: "Thanks for reaching out — I'll get back to you soon." });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setLoading(false);
      toast({ title: "Failed to send", description: "Something went wrong. Please email me directly.", variant: "destructive" });
    });
  };

  return (
    <section id="contact" className="container py-24">
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Get in touch</h2>
        <h3 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
          <Mail className="text-primary" size={32} />
          Contact Me
        </h3>
      </div>

      <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 max-w-5xl mx-auto">
        
        {/* Left Column: Contact Detail Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          {/* Email Card */}
          <div className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-primary/10 grid place-items-center">
                <Mail className="text-primary" size={24} />
              </div>
              <h4 className="font-bold text-lg">Email</h4>
            </div>
            <div className="h-px w-full bg-border" />
            <div className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
              <Mail size={16} className="text-primary/70" />
              <a href="mailto:ayinalakoteswararao@gmail.com" className="hover:text-primary transition-colors">
                ayinalakoteswararao@gmail.com
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-primary/10 grid place-items-center">
                <Phone className="text-primary" size={24} />
              </div>
              <h4 className="font-bold text-lg">Phone</h4>
            </div>
            <div className="h-px w-full bg-border" />
            <div className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
              <Phone size={16} className="text-primary/70" />
              <a href="tel:+919542564729" className="hover:text-primary transition-colors">
                +91 9542564729
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-primary/10 grid place-items-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <h4 className="font-bold text-lg">Location</h4>
            </div>
            <div className="h-px w-full bg-border" />
            <div className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
              <MapPin size={16} className="text-primary/70" />
              <span>Gudivada, Andhra Pradesh, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={submit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 space-y-6 shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 size-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 font-semibold">
                <User size={16} className="text-primary" /> Name
              </Label>
              <Input id="name" placeholder="Enter your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                     maxLength={100} className="bg-background/50 border-border h-12 rounded-xl" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 font-semibold">
                <Mail size={16} className="text-primary" /> Email
              </Label>
              <Input id="email" type="email" placeholder="Enter your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                     maxLength={255} className="bg-background/50 border-border h-12 rounded-xl" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2 font-semibold">
                <MessageSquare size={16} className="text-primary" /> Message
              </Label>
              <Textarea id="message" rows={6} placeholder="Enter your message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        maxLength={1000} className="bg-background/50 border-border resize-none rounded-xl" />
            </div>
            
            <Button type="submit" disabled={loading} size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl h-12 shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
              {loading ? "Sending..." : <>
                <Send className="mr-2 size-5" /> Send Message
              </>}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
