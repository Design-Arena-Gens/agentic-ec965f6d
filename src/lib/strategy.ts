export interface StrategyInput {
  channelName: string;
  niche: string;
  audience: string;
  goal: string;
  tone: string;
  videoLength: string;
  resources: string;
  aiVoice: boolean;
  topicFocus: string;
  uniqueAngle: string;
  postingCadence: string;
}

export interface VideoConcept {
  id: string;
  title: string;
  hook: string;
  elevatorPitch: string;
  storyBeats: string[];
  patternInterrupt: string;
  thumbnailIdea: string;
  brollPrompts: string[];
  aiVoiceDirection: string;
  callToAction: string;
}

export interface DistributionMove {
  title: string;
  ideas: string[];
}

export interface VideoStrategy {
  positioning: string;
  contentNorthStar: string;
  programmingPillars: string[];
  postingRhythm: string;
  packagingAngles: string[];
  hookIdeas: string[];
  concepts: VideoConcept[];
  retentionDevices: string[];
  editingStyle: string[];
  facelessTactics: string[];
  automationStack: string[];
  distributionMoves: DistributionMove[];
  publishingChecklist: string[];
  bonusIdeas: string[];
}

interface NicheProfile {
  id: string;
  keywords: string[];
  label: string;
  positioning: string;
  northStar: string;
  programmingPillars: string[];
  packagingAngles: string[];
  hookAngles: string[];
  retentionDevices: string[];
  distributionMoves: DistributionMove[];
  automationStack: string[];
  bonusIdeas: string[];
}

interface StrategyContext {
  input: StrategyInput;
  profile: NicheProfile;
  topic: string;
  cadenceDescriptor: string;
  vibeDescriptor: string;
}

interface FrameworkBlueprint {
  id: string;
  title: string;
  build: (context: StrategyContext) => Omit<VideoConcept, "id">;
}

const NICHE_PROFILES: NicheProfile[] = [
  {
    id: "finance",
    keywords: [
      "finance",
      "money",
      "invest",
      "investing",
      "stock",
      "crypto",
      "wealth",
      "budget",
      "trading",
      "financial",
    ],
    label: "Evidence-first wealth operator",
    positioning:
      "You translate complex wealth-building plays into simple, visual experiments that feel trustworthy and achievable.",
    northStar:
      "Every video delivers a bankable result, chart, or automation that proves the strategy and protects viewers from hype.",
    programmingPillars: [
      "Live case studies that go from idea → execution → measurable result",
      "Toolkit breakdowns showing the exact automations/AI stacks used to grow capital",
      "Contrarian takes that bust viral myths with receipts and calculated risk",
    ],
    packagingAngles: [
      "The automation that prints $X/mo without showing my face",
      "Watch me rebuild a portfolio that survived the last crash",
      "He tried THIS trend. I tried math. Here’s who wins.",
      "Before vs. After: turning $500 into recurring cashflow",
    ],
    hookAngles: [
      "This quiet automation outperformed the loudest gurus.",
      "I asked AI to rescue my {topic}. The result shocked me.",
      "Everyone said {goalPhrase}, but the spreadsheet says otherwise.",
      "I put $0.00 into paid ads and still grew {goalPhrase}.",
    ],
    retentionDevices: [
      "Reveal each metric in three phases: expectation → real number → what changed it",
      "Flash rapid-fire dashboard updates every 25 seconds to reward watch time",
      "Use a progress bar overlay that only fills when a tactic proves ROI",
      "Force curiosity loops by hiding the best-performing clip until 70% watch time",
    ],
    distributionMoves: [
      {
        title: "Authority flywheel",
        ideas: [
          "Clip the best stat for LinkedIn with a thread explaining the build",
          "Send the raw spreadsheet to your email list as a lead magnet and tease the next experiment",
        ],
      },
      {
        title: "Visibility swaps",
        ideas: [
          "Offer the automation template to mid-sized creators in exchange for a community shoutout",
          "Drop the cold open as a YouTube Short and pin the long-form in comments",
        ],
      },
    ],
    automationStack: [
      "Notion dashboard to track experiments and script beats in one shot",
      "Whisper or ElevenLabs to voice-match a neutral, trustworthy narrator",
      "CapCut or Descript templates to batch 3x shorts from the hero long-form",
      "Gumroad or Typedream landing page for lead magnets without showing your face",
    ],
    bonusIdeas: [
      "Quarterly 'portfolio autopsy' that exposes the worst-performing bets",
      "Invite subscriber-submitted money problems and fix them anonymously",
      "Run a public scoreboard of AI tools actually making you profit",
    ],
  },
  {
    id: "ai-productivity",
    keywords: [
      "ai",
      "automation",
      "productivity",
      "no-code",
      "gpt",
      "workflow",
      "systems",
      "zapier",
      "make",
      "task",
      "process",
    ],
    label: "Automation lab for overwhelmed builders",
    positioning:
      "Position the channel as a lab where messy real-world workflows become cinematic automations viewers can copy instantly.",
    northStar:
      "Every upload should unlock a repeatable system that saves time, removes grunt work, or scales a business lever without a team.",
    programmingPillars: [
      "Live over-the-shoulder builds where an entire workflow gets automated in under 10 minutes",
      "Battle-tested breakdowns comparing popular AI tools on the same task",
      "Story-driven makeovers transforming chaotic creator processes into push-button systems",
    ],
    packagingAngles: [
      "I automated {topic} so I could disappear for a week",
      "3 automations replacing an entire remote assistant",
      "The AI stack that let me make {goalPhrase} videos with zero filming",
      "Turning messy client intake into a zero-click experience",
    ],
    hookAngles: [
      "What if you never had to touch {topic} again?",
      "Here’s the faceless system pumping out {goalPhrase}.",
      "Steal my actual automation. Blur-free. No fluff.",
      "This AI workflow shaved {timeSaved} hours off my week.",
    ],
    retentionDevices: [
      "Use split screen: left shows chaotic 'before', right builds the automation in real time",
      "Promise the entire toolkit at the end and show progress each minute",
      "Flash a live stopwatch counting time saved to gamify the payoff",
      "Sprinkle Easter egg shortcuts viewers can grab only if they pause",
    ],
    distributionMoves: [
      {
        title: "Automation syndication",
        ideas: [
          "Turn each workflow into a free Airtable/Notion template gated behind email capture",
          "Export a vertical version teasing the automation reveal and publish to TikTok + Reels same day",
        ],
      },
      {
        title: "Community breakthrough",
        ideas: [
          "Drop the full SOP in automation subreddits with a curated GIF preview",
          "Partner with SaaS tools for affiliate boosts and co-marketed shorts",
        ],
      },
    ],
    automationStack: [
      "Screen studio with a masked avatar + kinetic subtitles inside Descript",
      "Premade Lottie animations for arrow callouts and UI zooms",
      "Auto chapter generator (OpusClip, Dumme) to spin shorts automatically",
      "Voice cloning for consistent narration across every episode",
    ],
    bonusIdeas: [
      "Monthly 'viewer workflow makeover' episode filmed 100% asynchronously",
      "Public leaderboard of the fastest automations submitted by viewers",
      "Ship a newsletter companion breaking down the stack with quick wins",
    ],
  },
  {
    id: "self-dev",
    keywords: [
      "self",
      "habit",
      "mindset",
      "motivation",
      "discipline",
      "psychology",
      "wellness",
      "mental",
      "confidence",
      "stoic",
    ],
    label: "Narrative-driven transformation guide",
    positioning:
      "You craft cinematic story arcs that make invisible mindset shifts feel tangible, actionable, and addictive.",
    northStar:
      "Serve bingeable mini-documentaries that turn everyday struggles into mythic quests with clear milestones.",
    programmingPillars: [
      "Anonymous success diaries from viewers filmed with stock cinematic footage",
      "Science-backed frameworks dramatized through animated metaphors",
      "Timed challenges that document real habit change with data",
    ],
    packagingAngles: [
      "Day 0 vs Day 30: the silent discipline challenge",
      "The 5 triggers sabotaging your {topic} (and the audio cures)",
      "She solved {audiencePain} without ever showing her face",
      "{goalPhrase} explained like a short film",
    ],
    hookAngles: [
      "What if your future self could call you tonight?",
      "The habit tracker that fights back when you slack.",
      "You’re 3 step changes away from {goalPhrase}. Watch.",
      "I rebuilt my identity in 90 seconds per day.",
    ],
    retentionDevices: [
      "Use chapter cards styled like movie titles to signal progress",
      "Insert anonymous voicemails or letters as emotional anchors",
      "Reveal biometric or quantified-self data right before each act break",
      "Loop original sound design motifs to reward returning viewers",
    ],
    distributionMoves: [
      {
        title: "Emotional syndication",
        ideas: [
          "Tease the hero quote on Shorts with waveform visuals and captions",
          "Cross-post cinematic stills on Pinterest to drive ambient discovery",
        ],
      },
      {
        title: "Audience co-creation",
        ideas: [
          "Collect anonymous stories via Typeform and turn them into episodes",
          "Launch a weekly audio room to premiere the next story arc",
        ],
      },
    ],
    automationStack: [
      "Kaiber/Runway B-roll sequences to match narration beats",
      "Midjourney prompts for symbolic thumbnails and chapter art",
      "Premiere or DaVinci macros for instant cinematic color grades",
      "Alitu or Adobe Podcast for AI polishing of faceless narration",
    ],
    bonusIdeas: [
      "Create a 'faceless confessional booth' for viewers to send raw audio",
      "Drop seasonal playlists curated for different challenge arcs",
      "Bundle frameworks into a companion Notion habit vault",
    ],
  },
  {
    id: "education",
    keywords: [
      "learn",
      "education",
      "tutorial",
      "coding",
      "programming",
      "math",
      "language",
      "study",
      "teach",
      "course",
      "skill",
    ],
    label: "Bite-sized masterclass studio",
    positioning:
      "Operate like a micro-masterclass brand where every video is a cinematic lesson with tangible deliverables.",
    northStar:
      "Compress expert knowledge into modular playbooks newbies can deploy the same day.",
    programmingPillars: [
      "Concept breakdowns that turn intimidating topics into simple animations",
      "Speed builds that show an entire project from blank page to finished product",
      "Framework tear-downs comparing old vs. new ways to learn a skill",
    ],
    packagingAngles: [
      "Learn {topic} in one sitting (project included)",
      "Your faceless blueprint to mastering {topic} in 14 days",
      "I turned a boring lesson into a cinematic build",
      "Old-school vs AI-powered {topic} — what actually sticks?",
    ],
    hookAngles: [
      "Skip the bootcamp. Do this instead.",
      "This is the only {topic} framework you need this week.",
      "Watch me compress 6 months of {topic} into 10 minutes.",
      "Why the internet taught you {topic} wrong (and how to fix it).",
    ],
    retentionDevices: [
      "Show the final project first, then rewind to step one",
      "Chapter cards double as downloadable timestamps",
      "Embed quick multiple-choice moments so viewers play along",
      "Color-code sections so binge-watchers instantly find part two",
    ],
    distributionMoves: [
      {
        title: "Student referral loop",
        ideas: [
          "Publish a downloadable cheat sheet and encourage viewers to share it in study communities",
          "Turn each lesson into a LinkedIn carousel that teases the outcomes",
        ],
      },
      {
        title: "Challenge-driven growth",
        ideas: [
          "Run monthly viewer build challenges and recap winners in Shorts",
          "Host a midweek live Q&A to bridge the faceless brand with real-time trust",
        ],
      },
    ],
    automationStack: [
      "OBS or Loom to capture clean screen builds with keyboard overlays",
      "Motion graphics templates for lively lower thirds and callouts",
      "Auto-summarizers to repurpose transcripts into blog posts",
      "AI dubs to localize hits into other languages without showing your face",
    ],
    bonusIdeas: [
      "Bundle lessons into a Notion syllabus and sell the roadmap",
      "Invite community experts to shadow-produce episodes behind the scenes",
      "Release downloadable project files to boost retention and trust",
    ],
  },
  {
    id: "luxury-travel",
    keywords: [
      "travel",
      "luxury",
      "lifestyle",
      "digital nomad",
      "hotel",
      "airbnb",
      "vacation",
      "destination",
      "jet",
      "resort",
    ],
    label: "Anonymous curator of jaw-dropping escapes",
    positioning:
      "Become the faceless concierge uncovering cinematic escapes, positioning every trip as a narrative experience.",
    northStar:
      "Deliver immersive, ASMR-level travel stories that let viewers feel the upgrade before they buy it.",
    programmingPillars: [
      "Itinerary fantasies comparing $X vs $Y luxury options",
      "Anonymous guest experiences narrated like a spy mission",
      "Budget hacking episodes that unlock high-end perks without being on camera",
    ],
    packagingAngles: [
      "I disguised myself to review the {topic} experience",
      "The faceless hacker’s path to a five-star {topic}",
      "Weekend in {destination}: cinematic POV itinerary",
      "From economy to first-class perks with zero status",
    ],
    hookAngles: [
      "This is what a $0 upgrade to {topic} feels like.",
      "I broke the rules of luxury travel (legally).",
      "Before you book {destination}, watch this faceless review.",
      "How to fake the five-star life without being seen.",
    ],
    retentionDevices: [
      "Layer ambient soundscapes that change every 20 seconds",
      "Use on-screen maps that animate the journey as you narrate",
      "Reveal hidden perks at the exact moment attention normally dips",
      "Overlay pricing transparency dashboards to build trust",
    ],
    distributionMoves: [
      {
        title: "Affiliate runway",
        ideas: [
          "Bundle each trip into a Google My Maps + hotel/flight affiliate links",
          "Partner with travel newsletters for cross-promotion of faceless itineraries",
        ],
      },
      {
        title: "Community concierge",
        ideas: [
          "Host Discord office hours where you plan viewer trips anonymously",
          "Share teaser clips with travel deal subreddits right before peak booking season",
        ],
      },
    ],
    automationStack: [
      "3D map animations from After Effects templates",
      "Drone + stock combination with consistent LUT grading",
      "AI voice libraries offering warm concierge tones",
      "Automated captions with stylized bilingual subtitles",
    ],
    bonusIdeas: [
      "Launch a quarterly anonymous travel dossier with limited spots",
      "Sell bundled Lightroom presets to match the on-screen vibe",
      "Create a faceless hotline for last-minute travel hacks",
    ],
  },
];

const DEFAULT_PROFILE: NicheProfile = {
  id: "default",
  keywords: [],
  label: "Magnetic faceless storyteller",
  positioning:
    "You are an invisible host who orchestrates fast-paced stories that deliver real outcomes.",
  northStar:
    "Every upload must combine an undeniable hook, bingeable pacing, and a payoff viewers can use immediately.",
  programmingPillars: [
    "Document real transformations with a cinematic blend of narration + dynamic visuals",
    "Break down trending topics into actionable playbooks",
    "Deliver contrarian lessons that challenge the status quo with data or receipts",
  ],
  packagingAngles: [
    "The faceless formula that cracked {topic}",
    "This is how I scaled without ever touching a camera",
    "POV: you execute {goalPhrase} with nothing but a voice and a screen",
    "{topic} changed forever — here’s the framework to copy",
  ],
  hookAngles: [
    "Pause scrolling. This is how anonymous creators win {goalPhrase}.",
    "You don’t know me, but you’ll copy this system.",
    "The only faceless playbook working in {topic} right now.",
    "Give me 45 seconds, I’ll build you a {topic} asset.",
  ],
  retentionDevices: [
    "Split the video into acts with progress markers and payoffs",
    "Reveal the most valuable asset at the exact midpoint",
    "Use sound design cues to signal something big is coming",
    "Promise a downloadable asset and deliver in the final 15 seconds",
  ],
  distributionMoves: [
    {
      title: "Multi-platform lift",
      ideas: [
        "Repurpose cold opens into Shorts/Reels/TikToks within 12 hours",
        "Convert scripts into Twitter/X threads with punchy stat graphics",
      ],
    },
    {
      title: "Community ignition",
      ideas: [
        "Host anonymous AMAs in niche Discords and link the hero video",
        "Offer a toolkit or resource in exchange for email capture post-view",
      ],
    },
  ],
  automationStack: [
    "Template-based editing timeline with motion graphics pre-built",
    "AI narration library for voice consistency",
    "Auto clipping tools (OpusClip, Framedrop) for short-form highlights",
    "Notion command center that tracks ideas, scripts, and distribution tasks",
  ],
  bonusIdeas: [
    "Launch a weekly faceless trend forecast for your niche",
    "Bundle scripts + assets into a community toolkit",
    "Collaborate anonymously via voice swaps with other faceless channels",
  ],
};

const PATTERN_INTERRUPTS = [
  "Crash zoom on a shocking stat while glitching the background for 1 second",
  "Smash cut to a silent typography screen that states the core promise",
  "Insert a lo-fi meme or pop culture reference to reset attention",
  "Visually rewind the footage with tape-stop SFX before revealing the twist",
  "Use a rapid, three-beat montage synced to an audio riser",
];

const CALLS_TO_ACTION = [
  "Grab the automation template linked below before I pull it next week",
  "Drop a 🔥 in the comments if you want part two with my raw files",
  "Subscribe to catch the live teardown I’m hosting on this system",
  "DM me 'blueprint' on Instagram for the private walkthrough",
  "Download the checklist in the description and duplicate it today",
];

const BROLL_LIBRARY = [
  "Macro shots of hands typing on a mechanical keyboard with screen reflections",
  "Overhead desk scenes with color-coded sticky notes transitioning to a clean setup",
  "Drone or stock aerial footage transitioning into minimalist UI captures",
  "Abstract particle or grid animations that match a techno soundtrack",
  "Tight shots of switches, buttons, or gadgets powering on",
  "Whiteboard sketch animations illustrating a funnel or workflow",
  "Cinematic slow-motion coffee pour to reset pacing before big reveals",
  "Fast-cut montage of dashboards and analytics overlays",
  "Timelapse of city lights at night to signal momentum and scale",
];

const EDITING_RHYTHMS = [
  "Open cold with the end result, then snap back to the start with a whip pan",
  "Alternate between macro B-roll and crisp screen recordings every 8 seconds",
  "Layer kinetic typography for every single metric or number mentioned",
  "Use hard-hitting SFX (riser → slam → echo) for every phase change",
  "End with a hero montage summarizing the system in under 12 seconds",
];

const PUBLISHING_CHECKLIST = [
  "Title variants brainstormed with two curiosity gaps and one payoff trigger",
  "Thumbnail storyboarded in three frames: promise, proof, payoff",
  "Chapter timestamps aligned with retention spikes (60%, 85%)",
  "Pinned comment linking assets + encouraging viewers to share their results",
  "Email + Shorts scheduled within 12 hours to reinforce the launch spike",
];

const POSTING_CADENCE_MAP: Record<string, string> = {
  "Under 4 minutes shorts-only": "Daily shorts fed by a weekly hero build that seeds 7 clipped story beats.",
  "5-8 minutes hybrid": "Two high-concept mid-form uploads weekly with supporting shorts pulled from the cold open + payoff.",
  "8-12 minutes episodic": "Aim for 1 flagship drop per week, supported by 3 shorts that ladder into the main release.",
  "12+ minutes documentary": "Bi-weekly cinematic drops with heavy pre-launch hype and behind-the-scenes shorts.",
  "8-12 minutes long-form + 60s shorts remix":
    "Every long-form narrative spawns three 60-second remixes released across the week to maintain algorithmic warmth.",
};

const FRAMEWORK_BLUEPRINTS: FrameworkBlueprint[] = [
  {
    id: "experiment",
    title: "AI Experiment",
    build: (context) => {
      const { topic, input } = context;
      return {
        title: `I automated ${topic} for ${input.audience} — here’s the dashboard`,
        hook: `I built a faceless system that now runs ${topic} in the background. Watch it work in real time.`,
        elevatorPitch:
          "Document an end-to-end automation build, expose failures, then reveal the optimized version with metrics viewers can replicate.",
        storyBeats: [
          "Cold open shows the final automation firing flawlessly with satisfying SFX.",
          "Flashback to the messy workflow and quantify the pain point in seconds lost.",
          "Build montage highlighting 3 key tools, overlaying keyboard shortcuts and UI zooms.",
          "Stress test the system live with an unexpected edge case.",
          "Finish with a metrics dashboard proving time/money saved and tease the download.",
        ],
        patternInterrupt: "Glitch transition revealing the automation name in bold typography.",
        thumbnailIdea: "Split-screen before/after of chaotic workflow vs. clean automation dashboard.",
        brollPrompts: [
          "Screen capture of the workflow triggering with cursor highlights",
          "Macro shot of a phone buzz as notifications roll in from the automation",
          "Charts animating upwards with a neon color palette",
        ],
        aiVoiceDirection:
          "Authoritative yet calm voiceover, emphasize measurable wins and speak like a systems architect.",
        callToAction: "Steal the SOP + automation blueprint from the description while it’s free.",
      };
    },
  },
  {
    id: "mythbust",
    title: "Myth Bust",
    build: (context) => {
      const { topic } = context;
      return {
        title: `I tried the viral ${topic} hack so you don’t waste weeks`,
        hook: `Everyone swears this faceless strategy is the shortcut. I put it through the wringer.`,
        elevatorPitch:
          "Pick a trending tactic, run it through a brutal test, and let the data expose what actually works.",
        storyBeats: [
          "Open by recreating the viral promise with bold text and dramatic music.",
          "Lay out the ground rules and KPIs that will prove success or failure.",
          "Run the test in three escalating phases, logging the raw results on screen.",
          "Reveal the unexpected downside and pivot into your custom fix.",
          "Deliver a condensed playbook viewers can copy, refuting the original myth.",
        ],
        patternInterrupt: "Hard cut to a black screen with a single white subtitle when the experiment fails.",
        thumbnailIdea:
          "Bold red 'Myth' stamp over the original claim with a contrasting 'Works' badge next to your optimized version.",
        brollPrompts: [
          "Cinematic close-up shots of timers, checklists, and analytics charts updating",
          "On-screen annotations pointing to exact fail points",
          "Rapid-fire social media clips of the trend you are dismantling",
        ],
        aiVoiceDirection:
          "Confident investigative tone with subtle sarcasm when the trend underperforms, then shift to instructor mode for the fix.",
        callToAction: "Comment the next viral hack I should crash test — most liked wins an episode.",
      };
    },
  },
  {
    id: "transformation",
    title: "Transformation Timeline",
    build: (context) => {
      const { topic } = context;
      return {
        title: `Day 0 → Day 30: ${topic} makeover without showing my face`,
        hook: `Witness a full transformation powered by anonymous narration and ruthless systems.`,
        elevatorPitch:
          "Turn a 30-day challenge into a hero’s journey with anonymous updates, data receipts, and cinematic pacing.",
        storyBeats: [
          "Open with a fast-forward montage from day 30 back to day 0 to tease the glow-up.",
          "Introduce the baseline metrics and hidden struggles in a voiceover confessional.",
          "Highlight weekly milestones with timestamped overlays and texture-rich B-roll.",
          "Reveal the unexpected setback mid-way to keep tension high.",
          "Pay off with the final reveal, before/after comparisons, and next steps for viewers.",
        ],
        patternInterrupt: "Insert anonymous voice memo moments to add intimacy and unpredictability.",
        thumbnailIdea: "Minimalist timeline graphic with Day 0 in grayscale and Day 30 in vibrant color.",
        brollPrompts: [
          "Time-lapse of workspace evolution over the month",
          "Tracking shots of tools or apps being used consistently",
          "Overlay of progress graphs synced to sound design swells",
        ],
        aiVoiceDirection:
          "Warm, documentary-style narration that leans into emotion while keeping delivery sleek.",
        callToAction: "Download the 30-day tracker template and start your anonymous transformation today.",
      };
    },
  },
  {
    id: "playbook",
    title: "Playbook Breakdown",
    build: (context) => {
      const { topic, input } = context;
      return {
        title: `${titleCase(topic)} playbook: steal my faceless funnel`,
        hook: `I scaled ${input.goal.toLowerCase()} with zero face time. Copy the funnel beat for beat.`,
        elevatorPitch:
          "Dissect your exact faceless engine, from hook assets to monetization, showing every moving part viewers can clone.",
        storyBeats: [
          "Hook with the final output (revenue, subscribers, leads) on screen, blurred but obvious.",
          "Map out the entire funnel with animated arrows and highlight leverage points.",
          "Deep dive into each stage: attention, conversion, retention, monetization.",
          "Overlay real analytics or testimonials to keep trust high.",
          "Close with a quick-start checklist and next experiment tease.",
        ],
        patternInterrupt: "Use a holographic HUD overlay when transitioning between funnel stages.",
        thumbnailIdea:
          "Pipeline graphic with icons for each stage and a bold 'faceless funnel' headline.",
        brollPrompts: [
          "Screen capture of workflow boards or dashboards with masked personal info",
          "Animations of gears or pipelines moving assets through stages",
          "High-contrast macro shots of hands switching between devices",
        ],
        aiVoiceDirection:
          "Crisp, strategic narration as if presenting to investors — confident and precise.",
        callToAction:
          "Grab the exact pipeline board in the description and remix it for your niche tonight.",
      };
    },
  },
  {
    id: "story",
    title: "Anonymous Origin Story",
    build: (context) => {
      const { topic, input } = context;
      const audiencePersona = input.audience || "creators";
      return {
        title: `The anonymous insider who cracked ${topic}`,
        hook: `No face. No fluff. Just the untold story of how ${audiencePersona} secretly wins at ${topic}.`,
        elevatorPitch:
          "Craft an investigative mini-doc that follows an anonymous character mastering your niche, packed with suspense and takeaways.",
        storyBeats: [
          "Start in the middle of the action with a crisis moment or make-or-break decision.",
          "Backfill their origin story using stylized reenactments and data overlays.",
          "Reveal the pivotal frameworks that changed the trajectory.",
          "Show receipts — blurred dashboards, anonymized voice notes, and results.",
          "End with an open loop inviting viewers into the next chapter.",
        ],
        patternInterrupt: "Switch to gritty, desaturated footage during conflict scenes.",
        thumbnailIdea:
          "Silhouetted figure with glowing typography and a bold claim like 'Agent X vs. The Algorithm'.",
        brollPrompts: [
          "Shadowy cityscapes, fast-moving lights, close-ups of anonymous hands working",
          "Animated dossiers or files opening with key facts",
          "Glitch transitions that protect identity but increase drama",
        ],
        aiVoiceDirection:
          "Low, cinematic narration with noir vibes and deliberate pacing to build tension.",
        callToAction:
          "Tell me the next underground story I should expose — winner gets the faceless treatment.",
      };
    },
  },
];

function titleCase(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function matchProfile(niche: string): NicheProfile {
  const cleaned = niche.toLowerCase();
  for (const profile of NICHE_PROFILES) {
    if (profile.keywords.some((keyword) => cleaned.includes(keyword))) {
      return profile;
    }
  }
  return DEFAULT_PROFILE;
}

function deriveCadence(input: StrategyInput) {
  if (POSTING_CADENCE_MAP[input.videoLength]) {
    return POSTING_CADENCE_MAP[input.videoLength];
  }
  if (POSTING_CADENCE_MAP[input.postingCadence]) {
    return POSTING_CADENCE_MAP[input.postingCadence];
  }
  return "Anchor your schedule with one flagship drop per week and drip daily micro-content that teases the payoff.";
}

function deriveTopic(input: StrategyInput) {
  const base = input.topicFocus.trim() || input.niche.trim();
  return base || "this system";
}

function deriveVibe(input: StrategyInput) {
  if (input.tone.toLowerCase().includes("cinematic")) {
    return "Cinematic, high-contrast visuals with layered sound design.";
  }
  if (input.tone.toLowerCase().includes("calm")) {
    return "Calm, confidence-inducing palette with ASMR sound beds.";
  }
  if (input.tone.toLowerCase().includes("high-energy")) {
    return "Relentless pacing with kinetic typography and aggressive cuts.";
  }
  return "Polished, modern motion graphics that feel premium yet approachable.";
}

function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function pickUnique<T>(array: T[], count: number): T[] {
  const copy = [...array];
  const picked: T[] = [];
  while (copy.length && picked.length < count) {
    const index = Math.floor(Math.random() * copy.length);
    picked.push(copy.splice(index, 1)[0]);
  }
  return picked;
}

function buildConcepts(context: StrategyContext): VideoConcept[] {
  const frameworks = pickUnique(FRAMEWORK_BLUEPRINTS, 3);
  return frameworks.map((framework, index) => {
    const conceptBuild = framework.build(context);
    const alternateCta = randomItem(CALLS_TO_ACTION);
    return {
      id: `${framework.id}-${index}`,
      ...conceptBuild,
      callToAction:
        Math.random() > 0.45 ? conceptBuild.callToAction : alternateCta,
    };
  });
}

function buildHookIdeas(context: StrategyContext, concepts: VideoConcept[]): string[] {
  const { profile, topic, input } = context;
  const goalPhrase = input.goal.toLowerCase();
  const replacements = {
    "{topic}": topic,
    "{goalPhrase}": goalPhrase,
    "{timeSaved}": input.resources.toLowerCase().includes("team") ? "15" : "10",
  };

  const templateHooks = profile.hookAngles.map((hook) =>
    hook.replace(/\{topic\}/g, topic).replace(/\{goalPhrase\}/g, goalPhrase).replace(/\{timeSaved\}/g, replacements["{timeSaved}"]),
  );

  const conceptHooks = concepts.map((concept) => concept.hook);
  return [...templateHooks.slice(0, 3), ...conceptHooks].slice(0, 6);
}

function buildPackagingAngles(context: StrategyContext): string[] {
  const { profile, topic, input } = context;
  const goalPhrase = input.goal.toLowerCase();
  return profile.packagingAngles.map((angle) =>
    angle.replace(/\{topic\}/g, topic).replace(/\{goalPhrase\}/g, goalPhrase),
  );
}

function buildFacelessTactics(context: StrategyContext): string[] {
  const { input } = context;
  const tactics = [
    "Use a masked avatar or kinetic typography instead of showing yourself on camera.",
    "Rely on AI-cloned narration to keep tone consistent even when batch recording.",
    "Design signature motion graphics that become recognizable 'brand armor'.",
    "Leverage fast-cut stock or AI-generated B-roll that matches your color grade.",
  ];

  if (input.aiVoice) {
    tactics.unshift("Dial in an AI narration voice that mirrors your chosen persona and layer subtle breaths to keep it human.");
  } else {
    tactics.unshift("Record narration in a treated space and process with gentle compression + noise removal to sound like an audio drama.");
  }

  tactics.push(
    "Create modular intros/outros so you can swap CTAs without re-editing the entire video.",
    "Protect anonymity by routing community Q&As through audio notes or on-screen text responses.",
  );

  return tactics;
}

function buildAutomationStack(context: StrategyContext): string[] {
  return context.profile.automationStack;
}

function buildRetentionDevices(context: StrategyContext): string[] {
  const combined = new Set([
    ...context.profile.retentionDevices,
    ...PATTERN_INTERRUPTS,
  ]);
  return Array.from(combined).slice(0, 8);
}

function buildDistributionMoves(context: StrategyContext): DistributionMove[] {
  return context.profile.distributionMoves;
}

function buildPublishingChecklist(): string[] {
  return PUBLISHING_CHECKLIST;
}

function buildBonusIdeas(context: StrategyContext): string[] {
  return context.profile.bonusIdeas;
}

function buildEditingStyle(context: StrategyContext): string[] {
  return [context.vibeDescriptor, ...EDITING_RHYTHMS];
}

function buildNorthStar(context: StrategyContext): string {
  return context.profile.northStar;
}

function buildPositioning(context: StrategyContext): string {
  const { profile, input } = context;
  const name = input.channelName.trim();
  if (name) {
    return `${name} is positioned as ${profile.positioning}`;
  }
  return profile.positioning;
}

function buildProgrammingPillars(context: StrategyContext): string[] {
  const { profile, input, topic } = context;
  const customAngle = input.uniqueAngle
    ? `Signature Angle: ${input.uniqueAngle}`
    : `Signature Angle: Translate ${topic} into bingeable, faceless storytelling.`;
  return [...profile.programmingPillars, customAngle];
}

function buildBrollPrompts(concepts: VideoConcept[]): string[] {
  const prompts = new Set<string>();
  for (const concept of concepts) {
    concept.brollPrompts.forEach((prompt) => prompts.add(prompt));
  }
  for (const randomPrompt of pickUnique(BROLL_LIBRARY, 4)) {
    prompts.add(randomPrompt);
  }
  return Array.from(prompts);
}

function injectBroll(prompts: string[], concepts: VideoConcept[]): VideoConcept[] {
  return concepts.map((concept) => ({
    ...concept,
    brollPrompts: Array.from(new Set([...concept.brollPrompts, ...pickUnique(prompts, 3)])),
  }));
}

export function generateVideoStrategy(input: StrategyInput): VideoStrategy {
  const profile = matchProfile(input.niche);
  const topic = deriveTopic(input);
  const cadenceDescriptor = deriveCadence(input);
  const vibeDescriptor = deriveVibe(input);

  const context: StrategyContext = {
    input,
    profile,
    topic,
    cadenceDescriptor,
    vibeDescriptor,
  };

  let concepts = buildConcepts(context);
  const sharedBroll = buildBrollPrompts(concepts);
  concepts = injectBroll(sharedBroll, concepts);

  return {
    positioning: buildPositioning(context),
    contentNorthStar: buildNorthStar(context),
    programmingPillars: buildProgrammingPillars(context),
    postingRhythm: cadenceDescriptor,
    packagingAngles: buildPackagingAngles(context),
    hookIdeas: buildHookIdeas(context, concepts),
    concepts,
    retentionDevices: buildRetentionDevices(context),
    editingStyle: buildEditingStyle(context),
    facelessTactics: buildFacelessTactics(context),
    automationStack: buildAutomationStack(context),
    distributionMoves: buildDistributionMoves(context),
    publishingChecklist: buildPublishingChecklist(),
    bonusIdeas: buildBonusIdeas(context),
  };
}
