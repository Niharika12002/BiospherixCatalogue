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

---

## Research Documentation

This project was built through direct research with Nihar, a mechanical engineer at BioSpherix. The research included multiple conversations, interview recordings, workflow questions, prototype reviews, and feedback sessions where he reviewed the tool as it developed.

The goal was not to design a general BioSpherix catalog. The goal was to understand what Nihar specifically needs in his day-to-day work when translating client requirements into system layouts.

### Research Method

I used a combination of:

- Initial interview questions about Nihar’s workflow, tools, repeated tasks, and pain points
- Follow-up conversations to clarify what kind of tool would actually save him time
- Prototype feedback sessions while the app was being built
- Handwritten notes from Nihar’s requested changes after seeing the working interface
- Research photos and documentation of the feedback process

The most important shift in the project came from the interviews. Early on, the project could have become a simple product catalog. Nihar’s answers made it clear that BioSpherix already has product information available. The missing piece was not another catalog. The missing piece was a faster way to turn a client conversation into a spatial system plan.

### Research Evidence

These screenshots and notes document the research and testing process with Nihar. They show that the project was shaped through real conversation, prototype review, and direct feedback instead of being designed from assumptions.

![FaceTime research call with Nihar](assets/research/nihar-research-call-01.PNG)

*Early FaceTime research call with Nihar during the workflow interview process.*

![Follow-up FaceTime research call with Nihar](assets/research/nihar-research-call-02.PNG)

*Follow-up research conversation with Nihar while clarifying what the tool needed to do.*

![Nihar reviewing the BioSpherix layout planner prototype during a call](assets/research/prototype-review-call.PNG)

*Nihar reviewing the working prototype during a live call. The screen shows the component library, scaled layout canvas, and early BioSpherix-style interface.*

![Handwritten feedback notes from Nihar reviewing the prototype](assets/research/nihar-feedback-notes-01.JPG)

*Handwritten feedback notes from Nihar’s prototype review. These notes include requests for adding and removing components, changing “Bench” to “Floor,” adding new categories, editing component cards, and using the real BioSpherix / Breeze Group logo.*

![Second round of prototype feedback notes showing naming and logo changes](assets/research/nihar-feedback-notes-02.JPG)

*Second round of feedback notes showing naming, branding, and component-library changes, including changing “Bench Configuration” to “System Configuration” and renaming the app to “Design Your Lab.”*

### Interview Insights

#### Insight 1: Nihar’s work begins with translation

Nihar’s job is not just to design equipment. A major part of his work is translating what a client describes into a system configuration that can actually be built. Clients often explain their research workflow, experiment, or lab setup, and Nihar has to turn that into chambers, controllers, gases, dimensions, and a physical arrangement.

This matters because the client is not usually thinking like a mechanical engineer. They may understand the science, but not the physical layout or engineering requirements of the system. The tool therefore needed to help Nihar explain a design, not just assemble one.

> “Maybe they could translate what the design intent is to the customer properly. Some design concepts are difficult to show visually. Maybe a brief paragraph that goes along with the design.”

This quote became the reason the app includes proposal-style language and system summaries, not only visual layout blocks.

#### Insight 2: The slowest part is aligning before the real build

Nihar already has professional tools like Fusion 360, SolidWorks, and Blender. The problem is that those tools are too detailed too early in the process. If he makes a polished render or CAD model before the client is aligned, then every change becomes expensive.

He described needing a faster layout step before committing to detailed modeling.

> “If there was a way to easily make those layouts from standard components and to see how much space they're going to take, what the dimensions of the whole system going to be… an easy way to know what's the plan, the floor plan of the system.”

This became the core direction of the project: a layout planner that sits between a rough conversation and a final engineering model.

#### Insight 3: The tool needs to be editable because Nihar’s work is custom

A fixed product catalog would not be enough. Nihar often works with custom chamber types, controller combinations, and client-specific system requirements. During feedback, he specifically asked for the ability to add, subtract, and edit components in the left-side component panel.

From my notes:

> “Wants a way to add/subtract components/parts to the left handside panel. For instance, if he designs a different kind of chamber/controller, he wants a way to add that.”

This changed the project from a static BioSpherix catalog into a tool that Nihar can keep adapting as his work changes.

#### Insight 4: Language matters because this is a professional engineering context

Nihar’s feedback also showed that small wording choices affect whether the tool feels professional and accurate. He asked to change “Bench” to “Floor,” because the system is not always limited to a bench setup. He also asked to change “Bench Configuration” to “System Configuration,” which better matches the way he thinks about complete BioSpherix setups.

Specific feedback notes included:

- Change “Bench” to “Floor”
- Change “Bench Configuration” to “System Configuration”
- Remove “Custom System”
- Rename “BioSpherix Layout Planner” to “Design Your Lab”
- Add the actual BioSpherix / Breeze Group logo
- Add a way to edit current component card information
- Add a way to create new categories

These were not visual polish requests. They were signs that the tool needed to feel like something that could belong in his real workflow.

### Observed Pain Points

#### Pain Point 1: Existing tools are too slow for early client alignment

Blender and CAD tools are useful once the direction is clear, but they are too slow for quick client revisions. If a client changes the chamber count, controller setup, or footprint requirement, Nihar has to redo work that may have taken hours.

#### Pain Point 2: Whiteboard sketches are fast but not client-ready

Sketching is useful during conversation, but it does not produce a polished artifact. It does not clearly show scale, dimensions, components, gas needs, or proposal language. A client may understand the general idea, but not enough to confidently approve the setup.

#### Pain Point 3: Clients need visual clarity

Many BioSpherix clients are scientists, researchers, or lab teams. They may understand their protocol, but not the mechanical arrangement of chambers, controllers, gas lines, or required footprint. The layout tool helps make the system visible and easier to discuss.

#### Pain Point 4: Nihar needs control over the component library

Because Nihar’s work changes from client to client, the component library cannot be locked. He needs to add new parts, edit existing cards, create categories, and adjust component information when specifications change.

### How Research Changed the Project

#### From catalog browser to layout planner

The original idea could have become a BioSpherix product catalog. After interviewing Nihar, I realized that the real problem was not finding product information. The real problem was arranging components into a system layout that could be discussed with a client.

#### From static product cards to editable component cards

Nihar’s feedback made it clear that a locked library would not be enough. The tool needed to let him add, remove, and edit components as his work changes.

#### From “bench” language to system-level language

The wording changed because Nihar’s systems are not always simple bench setups. “System Configuration” and “Floor” better describe the kind of planning he does.

#### From placeholder branding to professional branding

Nihar specifically pointed out the need for the actual logo. This reinforced that the app needed to feel credible enough to be screen-shared in a professional context.

#### From visual layout only to client-facing communication tool

The interviews showed that Nihar does not only need to build the system. He also needs to explain it. That is why the tool includes layout, component information, and proposal-style communication.

### Research Conclusion

The research showed that Nihar did not need a replacement for CAD or another BioSpherix catalog. He needed a fast, editable, client-facing planning tool that helps him move from conversation to system layout before committing to detailed engineering work.

The final product responds directly to that need. It gives him a way to assemble BioSpherix components, arrange them visually, edit system information, and communicate the plan clearly to a client.

---

## Platform Rationale

The project lives as a **browser-based React application** because Nihar’s problem happens in the space between engineering and client communication.

Nihar already has professional tools for detailed design work: Fusion 360, SolidWorks, Blender, CNC workflows, and fabrication tools. Those tools are powerful, but they are not the right platform for the early conversation where a client is still deciding what system they need. At that stage, the design needs to stay flexible. If the platform is too technical or too final, it forces Nihar to spend time building something before the client has actually agreed on the direction.

The tool needed to live somewhere lighter, faster, and easier to share.

A web app was the right choice because Nihar can open it during a client call, screen-share it, make changes live, and use it without asking the client to download software or understand engineering tools. His clients are often researchers, lab teams, or scientists, not CAD users. The browser is the shared space between Nihar and the client.

### Why React?

React was chosen because the tool depends on a changing interface: components are added, moved, edited, removed, and reflected in the layout and proposal view. React makes sense for this because the interface can update immediately as Nihar builds the system.

The app needed to support:

- A component library
- A visual layout canvas
- Editable system information
- Changing categories
- Client and project fields
- A proposal-style output
- Persistent user edits

These are all state-based interactions. React allows the product library, canvas, and proposal information to stay connected instead of being separate static screens.

### Why Not a CAD Plugin?

A CAD plugin would place the tool inside Nihar’s engineering workflow, but the problem happens before detailed engineering begins. Fusion 360 and SolidWorks are useful once the system direction is clear. They are not ideal for quick client alignment.

A CAD-based tool would also exclude the client. The client does not need to rotate a 3D model or inspect engineering geometry. They need to understand the layout, footprint, component relationships, and general system logic.

This project is not trying to replace CAD. It is trying to reduce the amount of unnecessary CAD work Nihar has to do before the client is aligned.

### Why Not Blender or 3D Rendering?

Blender is useful for polished visuals, but it is too slow for fast revision. If a client says, “Can we add another chamber?” or “Can this fit in a different layout?”, Nihar should not have to rebuild a render just to answer that question.

The React app lets him make those changes quickly in a simplified layout view. It sacrifices photorealism on purpose in order to prioritize speed, clarity, and live revision.

### Why Not a PDF or Static Catalog?

A static PDF would be easy to send, but it would not solve the core problem. Nihar does not just need to show BioSpherix products. He needs to combine products into custom systems.

A PDF cannot respond to the conversation in real time. It cannot let him drag components around, edit dimensions, add custom categories, or adjust the system while talking to a client.

BioSpherix already has catalog material. This project is not another catalog. It is a planning tool.

### Why Not a Physical Kiosk or Installation?

A kiosk would not fit Nihar’s workflow. His work happens across office conversations, client calls, design revisions, and sometimes travel. The tool needs to move with him and open wherever he is working.

A browser-based tool is more flexible because it can be used on his laptop during a Zoom or FaceTime call, shared through a URL, and updated without needing a dedicated physical setup.

### Deployment Choice

The project is hosted on **GitHub Pages** because it is simple, public, and easy to access. For this project, the priority was not building a complex backend or account system. The priority was shipping a working tool that Nihar could open and test immediately.

GitHub Pages also fits the scale of the project. It keeps the tool lightweight, easy to update, and easy to submit as part of the final case study.

### Platform Conclusion

The platform choice follows the person.

Nihar needed a tool that was faster than Blender, less technical than CAD, more flexible than a PDF, and easier to access than a specialized installation. A React web app was the best fit because it lives exactly where the problem happens: during the conversation between Nihar and the client.

The browser becomes the shared workspace where a client’s needs can turn into a visible system layout before Nihar invests time in detailed engineering work.
