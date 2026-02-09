import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getEventBySlug, getEvents } from "@/lib/data/events";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return getEvents().map((event) => ({ slug: event.slug }));
}

export default function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />

      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-muted-foreground mb-4">
            Événement
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground mb-8">
            <span>{event.date}</span>
            <span>•</span>
            <span>{event.location}</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            {event.description}
          </p>
          <Button asChild>
            <a href="mailto:contact@gdgepita.fr">Nous contacter</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
