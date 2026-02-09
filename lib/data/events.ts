import fs from "fs";
import path from "path";
import type { Event } from "@/types/event";

const eventsPath = path.join(process.cwd(), "content", "events.json");

function readEventsFile(): Event[] {
  const raw = fs.readFileSync(eventsPath, "utf-8");
  return JSON.parse(raw) as Event[];
}

export function getEvents(): Event[] {
  return readEventsFile();
}

export function getEventBySlug(slug: string): Event | undefined {
  return readEventsFile().find((event) => event.slug === slug);
}
