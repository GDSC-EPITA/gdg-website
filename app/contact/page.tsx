import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />

      <section className="relative container mx-auto px-4 py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#4285F4]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#DB4437]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-[#F4B400]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#4285F4] via-[#DB4437] to-[#0F9D58] bg-clip-text text-transparent">
            Contactez-nous
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Une question, une idee, une proposition de talk ? Ecrivez-nous.
          </p>

          <form className="grid gap-4 text-left rounded-3xl border-2 border-border/50 bg-background/70 p-8 backdrop-blur-sm shadow-xl">
            <Input
              placeholder="Nom"
              name="name"
              required
              className="border-2 focus-visible:ring-[#4285F4]/20 focus-visible:border-[#4285F4]"
            />
            <Input
              placeholder="Email"
              name="email"
              type="email"
              required
              className="border-2 focus-visible:ring-[#0F9D58]/20 focus-visible:border-[#0F9D58]"
            />
            <Input
              placeholder="Sujet"
              name="subject"
              required
              className="border-2 focus-visible:ring-[#DB4437]/20 focus-visible:border-[#DB4437]"
            />
            <textarea
              name="message"
              required
              placeholder="Votre message"
              className="min-h-[160px] rounded-xl border-2 border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4B400]/20 focus-visible:border-[#F4B400]"
            />
            <Button
              className="w-full sm:w-auto bg-gradient-to-r from-[#4285F4] via-[#DB4437] to-[#0F9D58] text-white shadow-lg hover:shadow-xl"
              type="submit"
            >
              Envoyer
            </Button>
          </form>

          <p className="mt-6 text-sm text-muted-foreground">
            Ou contactez-nous directement:{" "}
            <a
              className="font-semibold text-[#4285F4] hover:text-[#0F9D58] transition-colors"
              href="mailto:contact@gdgepita.fr"
            >
              contact@gdgepita.fr
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
