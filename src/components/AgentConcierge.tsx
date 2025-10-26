"use client";

import { useMemo, useRef, useState } from "react";
import { signaturePieces } from "@/data/signaturePieces";

type Role = "assistant" | "user";

type Message = {
  id: string;
  role: Role;
  content: string;
  recommendations?: string[];
};

const quickPrompts = [
  "I need an abaya for a Ramadan iftar at the museum.",
  "What color palette suits a seaside wedding?",
  "Recommend something breathable for summer travel.",
  "How do you personalize embroidery details?",
];

const typingDelay = 320;

function buildRecommendations(
  query: string,
): string[] {
  const normalized = query.toLowerCase();

  if (normalized.includes("wedding") || normalized.includes("nikah")) {
    return signaturePieces
      .filter((piece) =>
        ["Celestial Oasis", "Noor Midnight"].includes(piece.name),
      )
      .map((piece) => piece.name);
  }

  if (normalized.includes("travel") || normalized.includes("summer")) {
    return signaturePieces
      .filter((piece) => piece.name !== "Noor Midnight")
      .map((piece) => piece.name);
  }

  if (normalized.includes("ramadan") || normalized.includes("iftar")) {
    return signaturePieces
      .filter((piece) => piece.name !== "Noor Midnight")
      .map((piece) => piece.name);
  }

  return signaturePieces.slice(0, 2).map((piece) => piece.name);
}

function craftResponse(input: string): Message {
  const text = input.toLowerCase();

  const responses = [
    {
      match: ["ramadan", "iftar", "suhur", "eid"],
      message: `For sacred evenings, I lean toward ethereal organza that catches candlelight without feeling heavy. The Celestial Oasis abaya pairs beautifully with warm-toned accessories, while the Sands of Saffron creates a radiant ombré as you move through the space. Shall I reserve swatches for you?`,
    },
    {
      match: ["wedding", "nikah", "ceremony", "celebration"],
      message: `Occasion couture deserves layers of luminosity. I recommend a structured hood or beaded veil element to elongate your silhouette. Celestial Oasis offers constellation beadwork for ballroom lighting, while Noor Midnight thrives under evening spotlights.`,
    },
    {
      match: ["color", "palette", "tone", "shade"],
      message: `We begin by understanding your undertones and the ambience of your venue. Warm ambers and saffron gradients flatter golden skin in natural light, while graphite velvet with blush underlayers brings drama to twilight events. Would you like me to render both palettes on your avatar?`,
    },
    {
      match: ["travel", "summer", "heat", "humid", "lightweight"],
      message: `For travel, I curate breathable bamboo-silk linings and wrinkle-resistant crepe so you arrive immaculate. Sands of Saffron folds easily into our travel case and releases natural saffron fragrance when steamed. I can pre-pack care cards in your chosen language.`,
    },
    {
      match: ["personalize", "embroidery", "monogram", "custom"],
      message: `Your abaya becomes a keepsake with subtle personalization—monogrammed cuffs, heirloom motifs, or scent capsules woven into the lining. Share a memory or symbol you cherish and I will translate it into a hand-finished detail.`,
    },
    {
      match: ["delivery", "shipping", "timeline", "lead"],
      message: `Our atelier completes most commissions within 14 to 21 days, including virtual fittings. Express delivery is available globally, arriving in temperature-controlled packaging with a ritual care guide.`,
    },
  ];

  const found = responses.find((response) =>
    response.match.some((keyword) => text.includes(keyword)),
  );

  const fallback =
    "I’m ready to curate silhouettes, palettes, and rituals tailored to your occasion. Share the setting, mood, or any inspiration, and I’ll compose a capsule that feels distinctly yours.";

  return {
    id: crypto.randomUUID(),
    role: "assistant",
    content: found ? found.message : fallback,
    recommendations: buildRecommendations(input),
  };
}

export function AgentConcierge() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "I am Amira, your digital couturière. Tell me about your gathering, the light, or how you wish to feel, and I will sketch the abaya around you.",
      recommendations: signaturePieces.slice(0, 2).map((piece) => piece.name),
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const recentRecommendations = useMemo(() => {
    const lastAssistant = [...messages].reverse().find((msg) => msg.role === "assistant");
    return lastAssistant?.recommendations ?? [];
  }, [messages]);

  const sendMessage = async (content: string) => {
    const trimmed = content.trim();
    if (!trimmed) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const assistantMessage = craftResponse(trimmed);
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
      if (typeof window !== "undefined") {
        window.requestAnimationFrame(() => {
          containerRef.current?.lastElementChild?.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        });
      }
    }, typingDelay);
  };

  return (
    <section
      id="concierge"
      className="mt-24 rounded-[48px] border border-white/50 bg-white/70 px-6 py-14 backdrop-blur sm:px-10 md:px-16"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">
            Concierge
          </p>
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Meet Amira, your couture intelligence.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Share the ambience, desired sentiment, or practical details like venue and climate.
            Amira synthesizes your story with atelier expertise to curate silhouettes, embellishments,
            and care rituals in seconds.
          </p>
        </div>
        <div className="rounded-full border border-white/60 bg-white/60 px-5 py-2 text-xs uppercase tracking-[0.35em] text-muted backdrop-blur">
          Response time · 3s
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="glass-panel relative flex h-[460px] flex-col overflow-hidden rounded-[32px]">
          <div
            ref={containerRef}
            className="flex-1 space-y-4 overflow-y-auto px-6 py-6"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] rounded-3xl border px-5 py-4 text-sm leading-relaxed shadow-sm transition ${
                    message.role === "assistant"
                      ? "border-black/10 bg-white/80 text-foreground"
                      : "border-transparent bg-[var(--color-foreground)] text-white"
                  }`}
                >
                  <p>{message.content}</p>
                  {message.recommendations && message.recommendations.length > 0 && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs uppercase tracking-[0.3em] text-muted">
                        Curated
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {message.recommendations.map((recommendation) => (
                          <span
                            key={recommendation}
                            className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-muted"
                          >
                            {recommendation}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-3xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-muted">
                  <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-[var(--color-accent)]" />
                  Amira is composing…
                </div>
              </div>
            )}
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
            className="border-t border-white/70 bg-white/70 px-6 py-4 backdrop-blur"
          >
            <div className="flex gap-3">
              <input
                className="flex-1 rounded-full border border-black/10 bg-white/90 px-5 py-3 text-sm text-foreground outline-none transition focus:border-[var(--color-accent)]/60"
                placeholder="Describe your occasion, palette, or sentiment…"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--color-foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--color-foreground)]/25"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <aside className="space-y-6 rounded-[32px] border border-white/60 bg-white/70 p-6 text-sm text-muted backdrop-blur">
          <div>
            <h3 className="font-display text-xl text-foreground">
              How Amira works
            </h3>
            <p className="mt-2 leading-relaxed">
              We capture your schedule, sense of style, and climate to design abayas that move as you do.
              Your preferences become part of a private vault accessible only to our atelier.
            </p>
          </div>
          <div>
            <h4 className="font-semibold uppercase tracking-[0.3em] text-muted">
              Quick Prompts
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-left text-xs font-medium text-muted transition hover:border-black/40 hover:text-foreground"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold uppercase tracking-[0.3em] text-muted">
              Currently trending
            </h4>
            <ul className="mt-2 space-y-2">
              {recentRecommendations.map((item) => (
                <li key={item} className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/80 px-4 py-2">
                  <span>{item}</span>
                  <span className="text-[var(--color-accent)]">●</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default AgentConcierge;
