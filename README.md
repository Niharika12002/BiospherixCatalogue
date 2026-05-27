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

---

## AI Direction Log

This log documents how AI was used across the project. I did not use AI as the final decision-maker. I used it as a thinking partner, writing partner, coding assistant, and documentation assistant. My role was to direct the project based on Nihar’s actual workflow, reject generic outputs, and keep the tool grounded in the person I was designing for.

### Entry 1: Understanding the Project 3 brief

**What I asked AI to do:**  
I first asked AI to help me understand what Project 3 required and what kind of work needed to be submitted.

**What AI produced:**  
AI broke the assignment into major deliverables: a real person, a shipped product, research documentation, evidence of use, a design argument, platform rationale, AI process documentation, and final README/case study materials.

**What I kept, changed, or rejected:**  
I kept the structure because it helped me understand that this project was not just about making a web app. It needed proof that I listened to a real person and built something for their actual context.

**Why:**  
This helped me treat the project as a full design process instead of only a coding assignment.

---

### Entry 2: Choosing who the project should be for

**What I asked AI to do:**  
I talked through possible directions for Project 3, including making something for someone close to me who had a real workflow problem.

**What AI produced:**  
AI helped me think through possible users and what kinds of tools could support them.

**What I kept, changed, or rejected:**  
I moved toward Nihar because I had direct access to him, he had a specific professional workflow, and I could interview him multiple times. I rejected directions that felt too broad or too hard to validate in the time available.

**Why:**  
Project 3 required designing for a real person. Nihar was the strongest choice because I could actually talk to him, test with him, and get honest feedback.

---

### Entry 3: Preparing the first interview with Nihar

**What I asked AI to do:**  
Before interviewing Nihar, I asked AI to help me prepare questions about his work, pain points, repeated tasks, tools, and what would save him time.

**What AI produced:**  
AI helped organize questions such as:

- Walk me through your current workflow from start to finish.
- What part of your work takes the most time?
- What do you repeat again and again?
- What information do you constantly search for?
- What would make this tool useful enough for you to actually use?

**What I kept, changed, or rejected:**  
I kept the questions that were simple and direct because Nihar did not have much time. I avoided making the interview too long or overly formal.

**Why:**  
The goal was to get useful information quickly without making the interview feel like homework for him.

---

### Entry 4: Synthesizing the interview

**What I asked AI to do:**  
After the interview, I gave AI the information from Nihar’s answers and asked it to help identify what the real tool should be.

**What AI produced:**  
AI identified themes around custom system design, product selection, client requirements, layout planning, dimensions, and communicating design intent.

**What I kept, changed, or rejected:**  
I kept the insight that Nihar needed help before the final CAD/rendering stage. I rejected the idea that the project should only be a BioSpherix catalog because BioSpherix already has product catalogs.

**Why:**  
The interview showed that the problem was not access to product information. The real problem was helping Nihar turn client conversations into system layouts quickly.

---

### Entry 5: Shifting from catalog browser to layout planner

**What I asked AI to do:**  
I asked AI to help refine the project after realizing that a catalog was not enough.

**What AI produced:**  
AI helped frame the tool as a layout builder where Nihar could select BioSpherix chambers, controllers, and system parts and arrange them visually.

**What I kept, changed, or rejected:**  
I kept the layout-planning direction. I rejected anything that made the app feel like a generic e-commerce/product browsing experience.

**Why:**  
Nihar’s work is not about browsing products casually. It is about configuring systems for specific clients. The tool needed to support system planning, not shopping.

---

### Entry 6: Writing the Claude prompt for the React app

**What I asked AI to do:**  
I asked AI to write a detailed prompt that I could give Claude to build the React web app.

**What AI produced:**  
AI created a detailed build prompt for a React layout planning tool with a component library, layout workspace, client/project fields, system summary, and proposal-style output.

**What I kept, changed, or rejected:**  
I kept the React app structure and the idea of a component-based layout workspace. I changed the prompt to make sure Claude used actual BioSpherix product images instead of generic placeholders.

**Why:**  
The app needed to feel connected to BioSpherix and Nihar’s work. Placeholder imagery would have made it feel like a class mockup instead of a professional tool.

---

### Entry 7: Choosing the platform

**What I asked AI to do:**  
I asked AI to help explain why this should live as a React web app instead of a CAD plugin, Blender file, static PDF, Unity build, or physical installation.

**What AI produced:**  
AI helped draft the platform rationale: the tool needed to be lightweight, browser-based, shareable during a client call, and easier to access than professional engineering software.

**What I kept, changed, or rejected:**  
I kept the argument that the browser is the shared space between Nihar and the client. I rejected any platform direction that would require the client to install software or understand CAD tools.

**Why:**  
The platform needed to match the person and the moment of use. Nihar’s problem happens during early client alignment, not after the system is already ready for detailed engineering.

---

### Entry 8: Turning prototype feedback into feature priorities

**What I asked AI to do:**  
After showing Nihar the prototype, I asked AI to help organize the handwritten feedback notes into README-ready research documentation.

**What AI produced:**  
AI grouped the feedback into practical changes: add and remove components, edit component cards, add new categories, change “Bench” to “Floor,” change “Bench Configuration” to “System Configuration,” remove “Custom System,” rename the app to “Design Your Lab,” and replace placeholder branding with the real BioSpherix / Breeze Group logo.

**What I kept, changed, or rejected:**  
I kept Nihar’s specific wording changes because they came directly from the person using the tool. I rejected treating these as small visual edits.

**Why:**  
The naming changes mattered because they made the tool feel more professional and closer to Nihar’s actual work language.

---

### Entry 9: Writing the README documentation

**What I asked AI to do:**  
I asked AI to help write the README sections, including the Design Argument, Research Documentation, Platform Rationale, and now the AI Direction Log.

**What AI produced:**  
AI helped turn the project process into clear written sections that explain the person, the problem, the research, the platform, and the role of AI.

**What I kept, changed, or rejected:**  
I kept the sections that explained the project clearly and matched the assignment. I changed wording when it felt too generic or when it needed to be more specific to Nihar. I also removed sections that belonged in the Blackboard submission instead of the GitHub README.

**Why:**  
The README needed to be more than a project description. It needed to show my design process, evidence of research, and decision-making.

---

### Entry 10: Fixing README structure and formatting

**What I asked AI to do:**  
I asked AI to fix the README formatting after sections started breaking because of incorrect Markdown.

**What AI produced:**  
AI identified that a Markdown code block had been opened but not closed, which caused later sections to appear incorrectly. It also helped clean the hierarchy of headings and image references.

**What I kept, changed, or rejected:**  
I kept the corrected formatting and heading structure. I changed the image paths to match the renamed research images in my GitHub repo.

**Why:**  
The README needs to be readable and professional because it is part of the final submission. Broken formatting would make the documentation look unfinished even if the project itself works.

---

### Entry 11: Maintaining design authority

**What I asked AI to do:**  
Throughout the project, I used AI to generate options, prompts, documentation, and code directions.

**What AI produced:**  
AI often produced polished writing and broad product suggestions, but some outputs were too generic or too disconnected from Nihar’s exact workflow.

**What I kept, changed, or rejected:**  
I kept AI’s help with structure, wording, and technical direction. I rejected generic product-catalog ideas, overcomplicated platform ideas, and anything that did not match Nihar’s feedback.

**Why:**  
The most important design decisions came from Nihar’s work context, not from AI. My job was to keep the project focused on the real person and make sure AI supported the design direction instead of replacing it.

---

### AI Direction Summary

AI helped me move faster, organize my thinking, write clearer documentation, and translate research into product decisions. But the final direction came from Nihar’s workflow and feedback.

The biggest example of this was the shift from a BioSpherix catalog to a layout planner. AI could help produce the app, write prompts, and organize the case study, but the core design decision came from listening to Nihar and understanding what would actually help him.

---

## Records of Resistance

This section documents moments where I rejected, corrected, or significantly revised AI output. These moments were important because they show that I was not using AI to make decisions for me. I was using AI as a collaborator, then pushing back whenever its output became too generic, too polished, too broad, or disconnected from Nihar’s actual workflow.

### Resistance 1: Rejecting the product catalog direction

**What AI produced:**  
Early in the project, AI’s suggestions leaned toward building a BioSpherix product catalog or product browser. This made sense on the surface because BioSpherix has many chambers, controllers, and system parts.

**Why I rejected it:**  
After interviewing Nihar, I realized that a catalog was not the real problem. BioSpherix already has product information available. Nihar did not need another place to browse products. He needed a way to arrange those products into a system layout that could be discussed with a client.

**What I did instead:**  
I changed the project direction from a catalog browser to a layout planner. The final tool focuses on helping Nihar build a spatial system configuration with chambers, controllers, dimensions, and layout logic.

**Why this mattered:**  
This was the most important resistance moment in the project. It kept the tool from becoming a generic product website and redirected it toward Nihar’s actual pain point: early client alignment.

---

### Resistance 2: Rejecting placeholder visuals and generic BioSpherix content

**What AI produced:**  
When I asked for a prompt to build the React app, AI initially suggested using image placeholders for the visuals and product areas.

**Why I rejected it:**  
Placeholder images would have made the tool feel like a class prototype instead of something connected to Nihar’s real work. Since BioSpherix is a real company with real equipment, the visual and product information needed to feel specific and credible.

**What I did instead:**  
I revised the direction and asked for actual BioSpherix product images and real product references instead of generic placeholders.

**Why this mattered:**  
Nihar would immediately know if the tool felt fake. Using real product references helped the app feel closer to a professional BioSpherix system planning tool.

---

### Resistance 3: Rejecting overcomplicated platform ideas

**What AI produced:**  
AI helped compare possible platform directions, including CAD plugins, Blender/3D rendering, PDFs, Unity-style experiences, and more advanced builds.

**Why I rejected it:**  
Those directions were either too technical, too slow, or too disconnected from the moment where Nihar actually needed help. Nihar’s problem happens before detailed CAD or rendering. It happens during early client conversations, when the system is still being discussed.

**What I did instead:**  
I chose a browser-based React app hosted on GitHub Pages.

**Why this mattered:**  
A browser app fits the real use case. Nihar can open it during a call, screen-share it, make changes quickly, and use it without asking the client to install or understand engineering software.

---

### Resistance 4: Rejecting a fixed component library

**What AI produced:**  
The early app direction treated the component library as a set of fixed BioSpherix parts.

**Why I rejected it:**  
Nihar’s work is custom. During feedback, he specifically asked for a way to add and subtract components, add new categories, and edit the information on the component cards. A fixed library would become outdated as soon as his project needs changed.

**What I did instead:**  
I revised the product direction so the component library had to be treated as editable and expandable, not just a static menu.

**Why this mattered:**  
This changed the tool from a demo into something that could belong to Nihar. If he cannot adapt the library, the tool is just a presentation. If he can edit it, it becomes a working system.

---

### Resistance 5: Rejecting AI/prototype language that did not match Nihar’s work

**What AI produced:**  
The early interface used terms like “Bench,” “Bench Configuration,” “Custom System,” and “BioSpherix Layout Planner.”

**Why I rejected it:**  
Nihar’s feedback made it clear that these words were not accurate enough. “Bench” was too narrow because the systems are not always limited to a bench. “Custom System” felt unnecessary. “BioSpherix Layout Planner” sounded generic and less client-facing.

**What I did instead:**  
I changed the language based on Nihar’s feedback:

- “Bench” became “Floor”
- “Bench Configuration” became “System Configuration”
- “Custom System” was removed
- “BioSpherix Layout Planner” became “Design Your Lab”

**Why this mattered:**  
The wording change was not just visual polish. It made the interface sound more like Nihar’s actual professional context and less like a temporary class prototype.

---

### Resistance 6: Rejecting the idea that the app should look playful or consumer-facing

**What AI produced:**  
Some AI-generated design directions could have pushed the interface toward a friendlier, more generic app style.

**Why I rejected it:**  
Nihar works in a clinical and engineering context. The tool may be shown to researchers, lab teams, or clients. If it feels too playful, it loses credibility.

**What I did instead:**  
I kept the interface restrained, professional, and technical. I avoided emoji, unnecessary decoration, and overly casual language.

**Why this mattered:**  
The tool needed to be client-ready by default. Nihar should be able to screen-share it without feeling like he is showing a student mockup.

---

### Resistance 7: Rejecting AI’s tendency to make the README too polished without enough proof

**What AI produced:**  
AI helped generate strong written sections for the README, but some versions sounded more like a design essay than a complete project submission.

**Why I rejected it:**  
The assignment requires evidence: research documentation, user testing, photos, quotes, the shipped product, and records of process. A polished explanation is not enough if it does not show proof that I listened to Nihar.

**What I did instead:**  
I added research screenshots, FaceTime documentation, prototype review images, handwritten feedback notes, and detailed explanations of how Nihar’s feedback changed the project.

**Why this mattered:**  
This made the README more credible. It shows that the project was shaped by a real person and not just by AI-generated writing.

---

### Resistance 8: Correcting broken Markdown formatting

**What AI produced:**  
At one point, the README formatting broke because a Markdown code block was opened but not closed correctly. This caused later sections to appear incorrectly.

**Why I rejected it:**  
Broken formatting made the README look unfinished and hard to read. Since the README is part of the final submission, the documentation needed to be clean and professional.

**What I did instead:**  
I corrected the Markdown structure, fixed the heading hierarchy, and updated the image paths so the research images could display properly.

**Why this mattered:**  
The README is the public case study for the project. Even if the app works, broken documentation would weaken the final submission.

---

### Resistance Summary

The biggest resistance moment was rejecting the catalog direction and turning the project into a layout planner. That decision came from listening to Nihar, not from accepting AI’s first idea.

Across the project, I kept using AI for speed, structure, and production help, but I pushed back whenever the output became too generic, too polished, too technical, or too disconnected from the person I was designing for. The final product is stronger because the direction came from research, not from AI default patterns.

---

## Five Questions Reflection

### 1. Can I defend this?

Yes. I can defend this project because the major design decisions point back to Nihar’s actual workflow, not just my personal taste or AI’s suggestions.

The decision to build a layout planner came directly from Nihar describing the need to quickly make system layouts from standard components and understand the space they would take. The decision to make it browser-based came from the fact that his client conversations happen through shared screens, not inside Fusion 360 or SolidWorks. The decision to make the component library editable came from his feedback that he needed to add, remove, and edit chambers, controllers, and categories.

Even smaller interface decisions are defensible. Changing “Bench” to “Floor,” changing “Bench Configuration” to “System Configuration,” removing “Custom System,” and renaming the app to “Design Your Lab” all came from Nihar’s feedback. These choices were not made because they sounded better in a vacuum. They were made because they better matched the language and flexibility of his real work.

The project is defensible because it is tied to a person, a context, and a specific workflow problem.

---

### 2. Is this mine?

Yes. AI helped me move faster, but I directed the project.

AI helped me organize research, write prompts, generate README sections, and think through possible platform choices. But the important decisions came from my understanding of Nihar and from the interviews. I did not accept AI’s first direction when it leaned toward a product catalog, because the research showed that a catalog was not the problem. I redirected the project toward a layout planner.

I also rejected generic placeholder visuals, overly broad product ideas, and language that did not match Nihar’s work. The project became mine through the decisions I made after AI produced something. I kept what supported the design argument and changed or rejected what did not.

This is not mine because I coded every line alone. It is mine because I owned the direction, protected the research, and made the final calls.

---

### 3. Did I verify?

Yes, but with the limits of the project timeline.

I verified the direction by testing the working prototype with Nihar over a live call. He reviewed the interface, saw the component library and layout canvas, and gave specific feedback about what would make the tool more useful for his workflow.

The feedback was concrete. He asked for the ability to add and subtract components, create new categories, edit component card information, change “Bench” to “Floor,” change “Bench Configuration” to “System Configuration,” remove “Custom System,” rename the tool, and use the real logo.

That testing confirmed that the tool was pointed in the right direction, but also showed what still needed to improve. I am not claiming that the product is fully proven as a long-term professional tool yet. What I verified is that the concept, platform, and core workflow matched a real need Nihar recognized.

---

### 4. Would I teach this?

Yes. I could explain the research process, the design rationale, and the system architecture to another designer.

The research process started with understanding Nihar’s workflow instead of assuming what he needed. The design rationale was built around one key problem: he needed a faster way to move from client conversation to system layout before investing time in CAD or rendering. The platform rationale followed from that: a browser-based React app made the most sense because it could be opened, shared, and revised quickly during a client call.

I could also explain the structure of the product. The app has a component library, layout canvas, project/client fields, editable system information, and a proposal-style direction. These parts work together because the tool is about building and communicating a system configuration, not just showing products.

I understand the project well enough to explain why it exists, how it works, and what should be improved next.

---

### 5. Is my disclosure honest?

Yes. My AI Direction Log and Records of Resistance reflect what actually happened during the project.

AI was used throughout the process, especially for organizing thoughts, writing prompts, generating documentation, and helping shape the React app direction. But I did not hide that. I documented where AI helped and where I pushed back.

The biggest example is the shift from a BioSpherix catalog to a layout planner. That was not AI’s default direction. It came from listening to Nihar and realizing that the real problem was spatial planning and client alignment. I also documented the moments where I rejected placeholder visuals, overcomplicated platform ideas, fixed component libraries, and generic language.

The disclosure is honest because it does not pretend AI was absent, and it does not pretend AI made the design decisions alone. The project came from a collaboration between my research, Nihar’s feedback, and AI-supported production.
