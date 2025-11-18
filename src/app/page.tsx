"use client";

import styles from "./page.module.css";
import { useState } from "react";
import {
  generateVideoStrategy,
  type StrategyInput,
  type VideoStrategy,
} from "@/lib/strategy";

const GOAL_OPTIONS = [
  "Grow subscribers fast",
  "Drive affiliate sales",
  "Build authority for consulting",
  "Grow an email list",
];

const TONE_OPTIONS = [
  "High-energy cinematic",
  "Calm documentary",
  "Techno/neo-noir",
  "Educational storyteller",
];

const VIDEO_LENGTH_OPTIONS = [
  "Under 4 minutes shorts-only",
  "5-8 minutes hybrid",
  "8-12 minutes episodic",
  "12+ minutes documentary",
  "8-12 minutes long-form + 60s shorts remix",
];

const RESOURCE_OPTIONS = [
  "Solo creator with AI tools",
  "Solo creator + freelancers",
  "Small remote team",
  "Agency scale pipeline",
];

const POSTING_CADENCE_OPTIONS = [
  "Daily drops",
  "Twice per week",
  "Weekly anchor",
  "Bi-weekly cinematic",
];

const DEFAULT_INPUT: StrategyInput = {
  channelName: "Shadow Systems",
  niche: "AI productivity automations",
  audience: "Busy solo creators",
  goal: "Grow subscribers fast",
  tone: "High-energy cinematic",
  videoLength: "8-12 minutes long-form + 60s shorts remix",
  resources: "Solo creator + freelancers",
  aiVoice: true,
  topicFocus: "building automations that save 10+ hours a week",
  uniqueAngle: "Every build happens in real time with live dashboards",
  postingCadence: "Weekly anchor",
};

type StrategyField = keyof StrategyInput;

export default function Home() {
  const [formState, setFormState] = useState<StrategyInput>(DEFAULT_INPUT);
  const [strategy, setStrategy] = useState<VideoStrategy | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const updateField = (field: StrategyField, value: string | boolean) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsGenerating(true);
    const nextStrategy = generateVideoStrategy(formState);
    setStrategy(nextStrategy);
    setIsGenerating(false);
  };

  const handleReset = () => {
    setStrategy(null);
  };

  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        <header className={styles.hero}>
          <span className={styles.badge}>Faceless Viral Studio</span>
          <h1>Design faceless YouTube hits in minutes</h1>
          <p>
            Feed the engine with your niche and goals. Receive battle-tested
            hooks, programming pillars, faceless production tactics, and a
            distribution game plan engineered for virality.
          </p>
        </header>

        <main className={styles.content}>
          <section className={styles.formSection}>
            <h2>Channel blueprint</h2>
            <p className={styles.sectionLead}>
              Lock in the inputs once, remix forever. Everything stays faceless,
              cinematic, and relentlessly bingeable.
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fieldGrid}>
                <label className={styles.field}>
                  <span>Channel nickname</span>
                  <input
                    type="text"
                    value={formState.channelName}
                    onChange={(event) =>
                      updateField("channelName", event.target.value)
                    }
                    placeholder="Shadow Systems"
                  />
                </label>

                <label className={styles.field}>
                  <span>Niche focus</span>
                  <input
                    type="text"
                    value={formState.niche}
                    onChange={(event) => updateField("niche", event.target.value)}
                    placeholder="AI productivity automations"
                    required
                  />
                </label>

                <label className={styles.field}>
                  <span>Primary audience</span>
                  <input
                    type="text"
                    value={formState.audience}
                    onChange={(event) =>
                      updateField("audience", event.target.value)
                    }
                    placeholder="Busy solo creators"
                    required
                  />
                </label>

                <label className={styles.field}>
                  <span>Main growth goal</span>
                  <select
                    value={formState.goal}
                    onChange={(event) => updateField("goal", event.target.value)}
                  >
                    {GOAL_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={styles.field}>
                  <span>Voice &amp; tone</span>
                  <select
                    value={formState.tone}
                    onChange={(event) => updateField("tone", event.target.value)}
                  >
                    {TONE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={styles.field}>
                  <span>Hero video cadence</span>
                  <select
                    value={formState.videoLength}
                    onChange={(event) =>
                      updateField("videoLength", event.target.value)
                    }
                  >
                    {VIDEO_LENGTH_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={styles.field}>
                  <span>Production resources</span>
                  <select
                    value={formState.resources}
                    onChange={(event) =>
                      updateField("resources", event.target.value)
                    }
                  >
                    {RESOURCE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={styles.field}>
                  <span>Posting cadence</span>
                  <select
                    value={formState.postingCadence}
                    onChange={(event) =>
                      updateField("postingCadence", event.target.value)
                    }
                  >
                    {POSTING_CADENCE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className={styles.field}>
                <span>Signature topic / transformation</span>
                <input
                  type="text"
                  value={formState.topicFocus}
                  onChange={(event) =>
                    updateField("topicFocus", event.target.value)
                  }
                  placeholder="building automations that save 10+ hours a week"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>Signature angle</span>
                <textarea
                  value={formState.uniqueAngle}
                  onChange={(event) =>
                    updateField("uniqueAngle", event.target.value)
                  }
                  placeholder="Every build happens in real time with live dashboards"
                  rows={3}
                />
              </label>

              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={formState.aiVoice}
                  onChange={(event) =>
                    updateField("aiVoice", event.target.checked)
                  }
                />
                <span>Use an AI voice for narration</span>
              </label>

              <div className={styles.actions}>
                <button type="submit" disabled={isGenerating}>
                  {isGenerating ? "Crafting blueprint..." : "Generate viral plan"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormState(DEFAULT_INPUT);
                    setStrategy(null);
                  }}
                  className={styles.secondaryButton}
                >
                  Reset inputs
                </button>
                {strategy && (
                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={handleReset}
                  >
                    Clear results
                  </button>
                )}
              </div>
            </form>
          </section>

          {strategy && (
            <StrategyOutput strategy={strategy} />
          )}
        </main>
      </div>
    </div>
  );
}

function StrategyOutput({ strategy }: { strategy: VideoStrategy }) {
  return (
    <section className={styles.results}>
      <div className={styles.section}>
        <h2>Positioning blueprint</h2>
        <p className={styles.lead}>{strategy.positioning}</p>
        <div className={styles.callout}>
          <h3>Content north star</h3>
          <p>{strategy.contentNorthStar}</p>
        </div>
        <ul className={styles.list}>
          {strategy.programmingPillars.map((pillar) => (
            <li key={pillar}>{pillar}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Posting rhythm</h2>
        <p>{strategy.postingRhythm}</p>
      </div>

      <div className={styles.section}>
        <h2>Packaging &amp; hooks</h2>
        <div className={styles.gridTwo}>
          <div>
            <h3>Packaging angles</h3>
            <ul className={styles.list}>
              {strategy.packagingAngles.map((angle) => (
                <li key={angle}>{angle}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Hook lines</h3>
            <ul className={styles.list}>
              {strategy.hookIdeas.map((hook) => (
                <li key={hook}>{hook}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Hero video concepts</h2>
        <div className={styles.cardGrid}>
          {strategy.concepts.map((concept) => (
            <article key={concept.id} className={styles.card}>
              <header>
                <h3>{concept.title}</h3>
                <p>{concept.elevatorPitch}</p>
              </header>
              <div className={styles.cardSection}>
                <strong>Hook</strong>
                <p>{concept.hook}</p>
              </div>
              <div className={styles.cardSection}>
                <strong>Story beats</strong>
                <ol className={styles.beatList}>
                  {concept.storyBeats.map((beat) => (
                    <li key={beat}>{beat}</li>
                  ))}
                </ol>
              </div>
              <div className={styles.cardSection}>
                <strong>Pattern interrupt</strong>
                <p>{concept.patternInterrupt}</p>
              </div>
              <div className={styles.cardSection}>
                <strong>Thumbnail concept</strong>
                <p>{concept.thumbnailIdea}</p>
              </div>
              <div className={styles.cardSection}>
                <strong>B-roll prompts</strong>
                <div className={styles.chipGroup}>
                  {concept.brollPrompts.map((prompt) => (
                    <span key={prompt} className={styles.chip}>
                      {prompt}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.cardSection}>
                <strong>Narration direction</strong>
                <p>{concept.aiVoiceDirection}</p>
              </div>
              <div className={styles.cardSection}>
                <strong>Call to action</strong>
                <p>{concept.callToAction}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2>Retention &amp; editing stack</h2>
        <div className={styles.gridTwo}>
          <div>
            <h3>Retention devices</h3>
            <ul className={styles.list}>
              {strategy.retentionDevices.map((device) => (
                <li key={device}>{device}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Editing rhythm</h3>
            <ul className={styles.list}>
              {strategy.editingStyle.map((edit) => (
                <li key={edit}>{edit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Faceless production tactics</h2>
        <div className={styles.gridTwo}>
          <div>
            <h3>Execution playbook</h3>
            <ul className={styles.list}>
              {strategy.facelessTactics.map((tactic) => (
                <li key={tactic}>{tactic}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Automation stack</h3>
            <ul className={styles.list}>
              {strategy.automationStack.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Distribution engine</h2>
        <div className={styles.cardGrid}>
          {strategy.distributionMoves.map((move) => (
            <article key={move.title} className={styles.card}>
              <h3>{move.title}</h3>
              <ul className={styles.list}>
                {move.ideas.map((idea) => (
                  <li key={idea}>{idea}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2>Launch checklist</h2>
        <ul className={styles.list}>
          {strategy.publishingChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Bonus plays</h2>
        <ul className={styles.list}>
          {strategy.bonusIdeas.map((idea) => (
            <li key={idea}>{idea}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
