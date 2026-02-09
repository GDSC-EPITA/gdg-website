import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EventCard } from "@/components/event-card";
import { getEvents } from "@/lib/data/events";

export default function EventsPage() {
  const events = getEvents();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />

      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Événements GDG EPITA
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tous nos prochains événements, workshops et conférences.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard
              key={event.slug}
              href={`/events/${event.slug}`}
              title={event.title}
              location={event.location}
              date={event.date}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
