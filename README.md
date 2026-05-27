# Design Your Lab — A Layout Planner for BioSpherix

**AI 201 · Project 3: Persons Required**
**Built for Nihar · Mechanical Engineer, BioSpherix**
**Live URL:** https://niharika12002.github.io/BiospherixCatalogue/

---

## Design Argument

> *Written before AI engagement. This is the thesis the project is evaluated against.*

### The Person

Nihar is a mechanical engineer at BioSpherix, a company that manufactures environmental control systems for cell culture and in-vivo research. He spends his days designing custom configurations of BioSpherix's standard chamber and controller catalog to fit each client's proprietary workflow — pharma R&D groups running ischemia studies, university labs working on hypoxia, biotech startups doing live-cell microscopy.

His daily tools are Fusion 360, SolidWorks, and Blender. He runs CNC machines, lathes, mills, and a welder in the BioSpherix warehouse where systems get assembled, tested, disassembled, and shipped. He then flies to client sites to reassemble and run dry runs. None of his clients use any of those tools.

Nihar is a good friend, which is the reason this project exists in the form it does. Friendship gave me access — four interviews in a week, the latitude to push back on his answers and ask follow-up questions, and the trust to put rough prototypes in front of him without an explanation prepared. That access isn't a small thing for a four-week project. Most "design for a real person" assignments stall at the research stage because the person being designed for has no incentive to keep showing up. Nihar showed up because he wanted to.

### The Problem

Nihar's biggest time sink isn't building the systems. It's the conversations *before* the build, when he and a client are trying to align on what to build.

When a client describes their protocol, Nihar can usually translate it into a system spec in his head — *two C474 chambers, one OxyCycler C42 for paired experimental and control conditions, integrated with their existing microscope*. But getting the client to *see* that spec, agree with it, and feel confident enough to commit is the slow part. He currently has three ways to handle this and all of them are bad:

1. **He builds a Blender render.** Polished, professional, and takes hours per revision. When the client comes back with "actually, can we add a second chamber?", he goes back to Blender.
2. **He sketches on a whiteboard.** Fast, but imprecise — clients can't tell whether the system will fit on their bench, what gas requirements are, or what it'll cost.
3. **He starts a Fusion 360 model.** Engineering-grade, but commits the design before alignment. If the client changes their mind, the modeling work is thrown away.

What's missing is a tool that sits between these three: precise enough that a client reads it as a real proposal (with dimensions, parts, gases, footprint, price), fast enough that Nihar can revise it in real time during a video call, and visual enough that a non-engineer biologist can understand it at a glance.

In his own words from the interview:

> *"If there was a way to easily make those layouts from standard components and to see how much space they're going to take, what the dimensions of the whole system going to be… an easy way to know what's the plan, the floor plan of the system."*

And later, the translation problem:

> *"Maybe they could translate what the design intent is to the customer properly. Some design concepts are difficult to show visually. Maybe a brief paragraph that goes along with the design."*

### The Definition of "Helped"

Helped is observable, not aspirational. Nihar is helped if all four of these are true:

1. **He can assemble a representative client layout in under five minutes**, by clicking standard chambers and controllers from a library and arranging them on a floor plan — without me explaining how the tool works.
2. **The output reads as a real proposal to a non-engineer client.** The floor plan, parts list, gas requirements, footprint, design intent paragraph, and pricing all appear in a printable view he could send to a client without follow-up explanation.
3. **He uses the tool for at least one real client conversation within a week of the build.** Not just "this is cool" — actually opening it during work.
4. **The tool becomes his, not BioSpherix's.** He can add custom chamber variants, edit dimensions when specs change, set real catalog prices, and persist all of that across sessions.

If any one of these fails, the tool isn't finished. The fourth is the hardest test — it's what distinguishes a polished demo from a living tool.

### Qualification

I'm the right person to attempt this because I have three things AI doesn't: direct access to Nihar, prior context on his work, and the discipline to listen before building. The access is the friendship. The context is that I already knew where he worked and roughly what BioSpherix made before this project started, which meant the first interview wasn't spent explaining the company — it was spent on his actual pain points. The discipline is what I learned in AI 201: every time AI generalized away from what Nihar specifically said, my job was to pull it back. The clearest example is when AI's pattern-matching pushed me toward a catalogue browser early on, and the interview revealed Nihar actually needed a layout planner. The case study documents several more. The Art Director's authority in this project comes from understanding the person, not from technical skill — and on that dimension I had the unfair advantage of already knowing him.

### The Platform Decision

A single-page React application hosted on GitHub Pages.

Three platform constraints, all driven by Nihar's actual context, not my comfort zone:

- **Has to open during a client call without friction.** This rules out anything that requires installation (native app, Fusion 360 plugin) or an account (most SaaS tools). A URL works on any laptop, any browser, mid-Zoom-call.
- **Has to produce an artifact the client receives as a document.** This rules out spatial or immersive platforms (Unity, AR) where the output *is* the experience, not a thing you can email after the meeting. The print view becomes the proposal.
- **Has to live where Nihar already works *with* his clients.** Nihar uses Fusion, SolidWorks, Blender — but his clients don't. The shared space between them is a browser window during a screen-share. That's where the tool has to be.

The single-file architecture (React + Babel via CDN, no build step) is a deliberate choice over a Vite or Next.js setup: it keeps the entire project auditable in one document, eliminates deploy complexity, and means Nihar can download `index.html` and run it offline by double-clicking if his internet drops mid-meeting.

### Non-Negotiables

The following are constraints driven by what Nihar needs, not by what looks good in a demo. I will not compromise on them, including when AI proposes a faster or "smarter" alternative:

- **No emoji.** Nihar's professional context is clinical and engineering. Emoji pull the entire artifact toward consumer-app territory and undermine the credibility of the tool the first time it's screen-shared with a research group.
- **Real BioSpherix specifications.** Every component dimension, weight, gas spec, and material reference comes from official BioSpherix product PDFs. No invented numbers, no "rounded for cleanliness." Nihar would notice immediately.
- **Floor plan to scale.** Visual size on the canvas equals real physical size. The whole point of the floor plan is footprint accuracy — what fits on a 60-inch bench, what doesn't. Visual cohesion lives in typography and spacing, not in sacrificing scale.
- **Client-ready by default.** No "client mode" toggle, no presenter view. Every screen state has to be polished enough that Nihar can turn the laptop toward a client mid-conversation without feeling exposed.
- **The tool has to belong to Nihar.** Editable library, persistent across sessions. If his customizations don't survive a reload, the tool is a fixed BioSpherix presentation, not Nihar's working library.
- **Brand integrity.** BioSpherix is a real company with a real visual identity. The logo, color palette, and naming conventions are not approximations — they're the official 2024 brand assets. Anything less reads as a class project, not a tool.
