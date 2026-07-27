"use client";

import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  FileText,
  Gauge,
  Image as ImageIcon,
  LayoutDashboard,
  Menu,
  MessageSquareText,
  MoreHorizontal,
  Plus,
  Rocket,
  Search,
  Settings,
  Sparkles,
  UsersRound,
  Video,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

type Project = {
  id: string;
  name: string;
  description: string;
  accent: string;
};

type Executive = {
  title: string;
  role: string;
  status: string;
  icon: typeof Bot;
};

const projects: Project[] = [
  {
    id: "nova",
    name: "Nova AI Creator",
    description: "Build and launch the AI executive team platform.",
    accent: "from-violet-500 to-indigo-500",
  },
  {
    id: "leanpl8",
    name: "LeanPl8",
    description: "Grow a high-protein recipe content brand.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    id: "cars",
    name: "Cars",
    description: "Create premium automotive content and guides.",
    accent: "from-orange-500 to-rose-500",
  },
];

const executives: Executive[] = [
  { title: "Chief Content Officer", role: "Coordinates the team and protects the strategy", status: "Reviewing campaign direction", icon: BriefcaseBusiness },
  { title: "Research Director", role: "Finds audience, competitor and trend signals", status: "12 insights ready", icon: Search },
  { title: "Content Strategist", role: "Turns goals into channel plans and briefs", status: "Building a 7-day plan", icon: BrainCircuit },
  { title: "Copy Director", role: "Creates platform-native copy and narratives", status: "3 drafts waiting", icon: MessageSquareText },
  { title: "Social Media Director", role: "Adapts content for every social channel", status: "Optimising five posts", icon: UsersRound },
  { title: "Video Director", role: "Creates scripts, hooks and production plans", status: "YouTube outline complete", icon: Video },
  { title: "Design Director", role: "Creates visual concepts and asset briefs", status: "2 concepts ready", icon: ImageIcon },
  { title: "Publishing Manager", role: "Coordinates approvals, timing and distribution", status: "Calendar is on track", icon: CalendarDays },
];

const modelOptions = [
  { provider: "Auto", model: "Nova Smart Router", note: "Best model selected per task" },
  { provider: "OpenAI", model: "GPT family", note: "Reasoning, structured work and tool use" },
  { provider: "Anthropic", model: "Claude family", note: "Long-form writing and editorial quality" },
  { provider: "Google", model: "Gemini family", note: "Research, multimodal and large context" },
  { provider: "OpenRouter", model: "Multi-model catalogue", note: "Broad choice and fallback routing" },
];

const activity = [
  ["Research Director", "Completed audience signal scan", "2 min ago"],
  ["Content Strategist", "Created the launch campaign structure", "8 min ago"],
  ["Copy Director", "Drafted LinkedIn and Instagram variations", "14 min ago"],
  ["Publishing Manager", "Updated the approval queue", "21 min ago"],
];

const nav = [
  ["Command Center", LayoutDashboard],
  ["Projects", FileText],
  ["Executive Team", UsersRound],
  ["Campaigns", Rocket],
  ["Deliverables", CheckCircle2],
  ["Model Lab", BrainCircuit],
  ["Analytics", BarChart3],
];

const channels = ["LinkedIn", "Instagram", "Facebook", "YouTube", "TikTok"];

export function NovaDashboard() {
  const [active, setActive] = useState("Command Center");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectId, setProjectId] = useState("nova");
  const [projectOpen, setProjectOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [assignment, setAssignment] = useState("Create a launch campaign that explains why Nova is an AI executive team, not another collection of AI tools.");
  const [selectedChannels, setSelectedChannels] = useState(channels);
  const [selectedModel, setSelectedModel] = useState("Auto");
  const [submitted, setSubmitted] = useState(false);

  const project = useMemo(() => projects.find((item) => item.id === projectId) ?? projects[0], [projectId]);

  function toggleChannel(channel: string) {
    setSelectedChannels((current) =>
      current.includes(channel) ? current.filter((item) => item !== channel) : [...current, channel],
    );
  }

  function assignCampaign() {
    if (!assignment.trim() || selectedChannels.length === 0) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  }

  return (
    <main className="min-h-screen bg-[#f4f6fb] text-[#182033]">
      <div className="mx-auto flex min-h-screen max-w-[1800px]">
        <aside className={`${mobileOpen ? "flex" : "hidden"} fixed inset-y-0 left-0 z-50 w-72 flex-col border-r border-slate-200 bg-[#10182a] p-5 text-white lg:static lg:flex`}>
          <div className="mb-7 flex items-center gap-3 px-1">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 shadow-lg shadow-indigo-950/30">
              <Sparkles size={22} />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight">Nova AI Creator</div>
              <div className="text-xs text-slate-400">Your AI executive team</div>
            </div>
          </div>

          <div className="relative mb-5">
            <button onClick={() => setProjectOpen(!projectOpen)} className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-left transition hover:bg-white/10">
              <div className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${project.accent} text-sm font-black`}>
                {project.name.slice(0, 1)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Current project</div>
                <div className="truncate text-sm font-bold">{project.name}</div>
              </div>
              <ChevronDown size={16} className="text-slate-400" />
            </button>
            {projectOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 rounded-2xl border border-slate-700 bg-[#172138] p-2 shadow-2xl">
                {projects.map((item) => (
                  <button key={item.id} onClick={() => { setProjectId(item.id); setProjectOpen(false); }} className="flex w-full items-center gap-3 rounded-xl p-2.5 text-left hover:bg-white/8">
                    <div className={`grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br ${item.accent} text-xs font-black`}>{item.name[0]}</div>
                    <div className="min-w-0"><div className="truncate text-sm font-bold">{item.name}</div><div className="truncate text-[11px] text-slate-400">{item.description}</div></div>
                  </button>
                ))}
                <button className="mt-1 flex w-full items-center gap-2 rounded-xl border border-dashed border-slate-600 px-3 py-2.5 text-xs font-bold text-slate-300 hover:bg-white/5"><Plus size={14} /> New project</button>
              </div>
            )}
          </div>

          <button onClick={() => setCommandOpen(true)} className="mb-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-slate-300 hover:bg-white/10">
            <span className="flex items-center gap-2"><Search size={15} /> Ask Nova or run a command</span><kbd className="rounded-md border border-white/10 bg-black/20 px-1.5 py-0.5 text-[10px]">⌘K</kbd>
          </button>

          <nav className="space-y-1.5">
            {nav.map(([label, Icon]) => (
              <button key={label as string} onClick={() => { setActive(label as string); setMobileOpen(false); }} className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition ${active === label ? "bg-indigo-500 text-white shadow-lg shadow-indigo-950/30" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>
                <Icon size={18} /> {label as string}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 p-4">
            <div className="mb-2 flex items-center gap-2 font-bold"><Zap size={16} className="text-cyan-300" /> Multi-model ready</div>
            <p className="text-xs leading-5 text-slate-400">Route each executive task to the best available LLM.</p>
            <button onClick={() => setActive("Model Lab")} className="mt-3 text-xs font-black text-cyan-300">Open Model Lab →</button>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200/80 bg-white/90 px-5 backdrop-blur-xl md:px-8">
            <div className="flex items-center gap-3">
              <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-xl border border-slate-200 p-2 lg:hidden"><Menu size={20} /></button>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">{project.name}</p>
                <h1 className="text-lg font-black tracking-tight md:text-xl">{active}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setCommandOpen(true)} className="hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 md:flex md:items-center md:gap-2"><Search size={15} /> Search <kbd className="rounded bg-slate-100 px-1.5 py-0.5">⌘K</kbd></button>
              <button className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600"><Bell size={19} /></button>
              <button className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600"><CircleUserRound size={19} /></button>
            </div>
          </header>

          <div className="p-5 md:p-8">
            {active === "Command Center" && (
              <div className="space-y-7">
                <section className="relative overflow-hidden rounded-[30px] bg-[#18233d] p-7 text-white shadow-2xl shadow-slate-300 md:p-10">
                  <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-violet-500/35 blur-3xl" />
                  <div className="absolute bottom-0 right-1/3 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
                  <div className="relative z-10 grid gap-8 xl:grid-cols-[1.3fr_.7fr] xl:items-end">
                    <div>
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold tracking-wide"><Sparkles size={14} /> CONTENT CREATION EXECUTIVE TEAM</div>
                      <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] md:text-5xl">Give your team the outcome. Nova coordinates the work.</h2>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">Research, strategy, copy, social, video, design and publishing—working together inside one project.</p>
                      <div className="mt-7 flex flex-wrap gap-3">
                        <button onClick={() => document.getElementById("assignment")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950">Assign work <ArrowRight size={16} /></button>
                        <button onClick={() => setActive("Executive Team")} className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold">Meet your team</button>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur">
                      <div className="flex items-center justify-between"><div className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">Team pulse</div><Activity size={17} className="text-cyan-300" /></div>
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        {[['8','Executives'],['4','Working'],['3','Ready']].map(([value,label]) => <div key={label} className="rounded-xl bg-white/8 p-3"><div className="text-2xl font-black">{value}</div><div className="text-[11px] text-slate-300">{label}</div></div>)}
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-xs text-emerald-300"><CheckCircle2 size={14} /> All systems operational</div>
                    </div>
                  </div>
                </section>

                <section id="assignment" className="grid gap-5 xl:grid-cols-[1.25fr_.75fr]">
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-600">New assignment</p><h3 className="mt-1 text-2xl font-black tracking-tight">What should your team accomplish?</h3></div>
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-700"><WandSparkles size={20} /></div>
                    </div>
                    <textarea value={assignment} onChange={(event) => setAssignment(event.target.value)} className="mt-5 min-h-32 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100" />
                    <div className="mt-5">
                      <div className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">Channels</div>
                      <div className="flex flex-wrap gap-2">
                        {channels.map((channel) => <button key={channel} onClick={() => toggleChannel(channel)} className={`rounded-full border px-3 py-2 text-xs font-bold transition ${selectedChannels.includes(channel) ? "border-indigo-200 bg-indigo-50 text-indigo-700" : "border-slate-200 bg-white text-slate-500"}`}>{selectedChannels.includes(channel) ? "✓ " : "+ "}{channel}</button>)}
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <button onClick={() => setActive("Model Lab")} className="flex items-center gap-2 text-left text-xs font-bold text-slate-600"><BrainCircuit size={16} className="text-indigo-600" /> Model routing: <span className="text-indigo-700">{selectedModel}</span></button>
                      <button onClick={assignCampaign} className="flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg shadow-slate-200 hover:-translate-y-0.5"><Rocket size={16} /> Assign to team</button>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-600">Live activity</p><h3 className="mt-1 text-xl font-black">Your team at work</h3></div><button className="rounded-xl border border-slate-200 p-2 text-slate-500"><MoreHorizontal size={18} /></button></div>
                    <div className="mt-5 space-y-4">
                      {activity.map(([name, action, time]) => <div key={action} className="flex gap-3"><div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 ring-4 ring-emerald-50"/><div className="min-w-0 flex-1"><div className="text-sm font-black">{name}</div><div className="text-xs leading-5 text-slate-600">{action}</div></div><div className="whitespace-nowrap text-[10px] text-slate-400">{time}</div></div>)}
                    </div>
                    <button onClick={() => setActive("Deliverables")} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-xs font-black text-slate-700">Open activity center <ChevronRight size={14} /></button>
                  </div>
                </section>

                <section>
                  <div className="mb-4 flex items-end justify-between"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-600">Executive team</p><h3 className="mt-1 text-2xl font-black tracking-tight">Specialists working as one company</h3></div><button onClick={() => setActive("Executive Team")} className="text-sm font-bold text-indigo-700">View all</button></div>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {executives.slice(0,4).map(({ title, role, status, icon: Icon }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"><div className="flex items-start justify-between"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-100 text-indigo-700"><Icon size={20} /></div><span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-black text-emerald-700">ACTIVE</span></div><h4 className="mt-4 font-black">{title}</h4><p className="mt-2 text-xs leading-5 text-slate-500">{role}</p><div className="mt-4 border-t border-slate-100 pt-3 text-xs font-bold text-indigo-700">{status}</div></article>)}
                  </div>
                </section>
              </div>
            )}

            {active === "Projects" && <ProjectsView projectId={projectId} setProjectId={setProjectId} />}
            {active === "Executive Team" && <TeamView />}
            {active === "Campaigns" && <CampaignsView />}
            {active === "Deliverables" && <DeliverablesView />}
            {active === "Model Lab" && <ModelLab selectedModel={selectedModel} setSelectedModel={setSelectedModel} />}
            {active === "Analytics" && <AnalyticsView />}
          </div>
        </section>
      </div>

      {commandOpen && (
        <div className="fixed inset-0 z-[80] flex items-start justify-center bg-slate-950/50 px-4 pt-[12vh] backdrop-blur-sm" onMouseDown={() => setCommandOpen(false)}>
          <div onMouseDown={(event) => event.stopPropagation()} className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
            <div className="flex items-center gap-3 border-b border-slate-200 p-4"><Search size={20} className="text-indigo-600" /><input autoFocus placeholder="Ask Nova or run a command…" className="min-w-0 flex-1 text-base outline-none"/><button onClick={() => setCommandOpen(false)} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"><X size={18}/></button></div>
            <div className="p-3"><div className="px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Suggested</div>{["Create a seven-day content campaign","Ask the Research Director for trend ideas","Generate a LinkedIn post and YouTube script","Switch to the LeanPl8 project","Open Model Lab"].map((item) => <button key={item} className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-bold hover:bg-slate-50"><span className="flex items-center gap-3"><Sparkles size={16} className="text-indigo-600"/>{item}</span><ArrowRight size={14} className="text-slate-400"/></button>)}</div>
          </div>
        </div>
      )}

      {submitted && <div className="fixed bottom-6 right-6 z-[90] flex max-w-sm items-start gap-3 rounded-2xl bg-slate-950 p-4 text-white shadow-2xl"><div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500"><CheckCircle2 size={18}/></div><div><div className="text-sm font-black">Assignment accepted</div><div className="mt-1 text-xs leading-5 text-slate-300">The Chief Content Officer is coordinating {selectedChannels.length} channel deliverables.</div></div></div>}
    </main>
  );
}

function PageIntro({ eyebrow, title, copy, action }: { eyebrow: string; title: string; copy: string; action?: string }) {
  return <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-600">{eyebrow}</p><h2 className="mt-1 text-3xl font-black tracking-tight">{title}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{copy}</p></div>{action && <button className="flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-black text-white"><Plus size={16}/>{action}</button>}</div>;
}

function ProjectsView({ projectId, setProjectId }: { projectId: string; setProjectId: (value: string) => void }) {
  return <div><PageIntro eyebrow="Project context" title="Everything belongs to a project" copy="Each project keeps its own goals, memory, files, campaigns, executive activity and model settings." action="New project"/><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{projects.map((project) => <button key={project.id} onClick={() => setProjectId(project.id)} className={`rounded-3xl border bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${projectId === project.id ? "border-indigo-300 ring-4 ring-indigo-50" : "border-slate-200"}`}><div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${project.accent} text-xl font-black text-white`}>{project.name[0]}</div><div className="mt-5 flex items-start justify-between"><div><h3 className="text-xl font-black">{project.name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p></div>{projectId === project.id && <CheckCircle2 size={20} className="text-indigo-600"/>}</div><div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center"><div><div className="font-black">4</div><div className="text-[10px] text-slate-500">Campaigns</div></div><div><div className="font-black">18</div><div className="text-[10px] text-slate-500">Assets</div></div><div><div className="font-black">8</div><div className="text-[10px] text-slate-500">Executives</div></div></div></button>)}</div></div>;
}

function TeamView() {
  return <div><PageIntro eyebrow="Content creation executive team" title="Your AI company" copy="Each executive owns a clear responsibility, collaborates with the others and reports progress back to the Chief Content Officer." action="Hire specialist"/><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{executives.map(({ title, role, status, icon: Icon }) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-start justify-between"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700"><Icon size={21}/></div><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-black text-emerald-700">ONLINE</span></div><h3 className="mt-5 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{role}</p><div className="mt-5 rounded-xl bg-slate-50 p-3 text-xs font-bold text-indigo-700">{status}</div><button className="mt-4 flex items-center gap-2 text-xs font-black text-slate-700">Open executive profile <ChevronRight size={14}/></button></article>)}</div></div>;
}

function CampaignsView() {
  return <div><PageIntro eyebrow="Campaign orchestration" title="From one goal to every channel" copy="Campaigns keep strategy, tasks, approvals and channel deliverables coordinated across the executive team." action="New campaign"/><div className="space-y-4">{[["Nova positioning launch","In production","5 channels","72%"],["Creator workflow education series","Strategy","3 channels","34%"],["Founder story campaign","Ready for review","4 channels","100%"]].map(([name,status,scope,progress]) => <article key={name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex flex-col gap-4 md:flex-row md:items-center"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700"><Rocket size={20}/></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h3 className="font-black">{name}</h3><span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-600">{status}</span></div><div className="mt-2 text-xs text-slate-500">{scope} · Coordinated by Chief Content Officer</div><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-indigo-500" style={{width:progress}}/></div></div><div className="text-sm font-black text-indigo-700">{progress}</div><button className="rounded-xl border border-slate-200 p-2"><ChevronRight size={17}/></button></div></article>)}</div></div>;
}

function DeliverablesView() {
  return <div><PageIntro eyebrow="Review queue" title="Approve the work, not every step" copy="Nova presents finished deliverables with context, quality checks and the executive responsible for each item."/><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{[["LinkedIn thought-leadership post","Copy Director","Ready"],["Instagram carousel brief","Design Director","Ready"],["YouTube launch script","Video Director","In review"],["Facebook launch post","Social Media Director","Ready"],["TikTok hook variations","Video Director","Drafting"],["Campaign publishing schedule","Publishing Manager","Ready"]].map(([title,owner,status]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><span className={`rounded-full px-2 py-1 text-[10px] font-black ${status === "Ready" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{status.toUpperCase()}</span><FileText size={18} className="text-slate-400"/></div><h3 className="mt-4 font-black">{title}</h3><p className="mt-2 text-xs text-slate-500">Owner: {owner}</p><div className="mt-5 flex gap-2"><button className="flex-1 rounded-xl bg-slate-950 px-3 py-2.5 text-xs font-black text-white">Review</button><button className="rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-black">Regenerate</button></div></article>)}</div></div>;
}

function ModelLab({ selectedModel, setSelectedModel }: { selectedModel: string; setSelectedModel: (value: string) => void }) {
  return <div><PageIntro eyebrow="Multi-LLM foundation" title="Use the best model for each executive task" copy="Nova routes requests through one provider-neutral gateway, enabling quality, speed, cost and fallback controls without locking the product to one vendor."/><div className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]"><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-lg font-black">Default routing mode</h3><p className="mt-2 text-sm leading-6 text-slate-600">Most users should keep Auto enabled. Advanced users can select a preferred provider or override individual executives later.</p><div className="mt-5 space-y-3">{modelOptions.map((option) => <button key={option.provider} onClick={() => setSelectedModel(option.provider)} className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${selectedModel === option.provider ? "border-indigo-300 bg-indigo-50 ring-4 ring-indigo-50" : "border-slate-200 hover:bg-slate-50"}`}><div className={`grid h-10 w-10 place-items-center rounded-xl ${selectedModel === option.provider ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"}`}><BrainCircuit size={18}/></div><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><div className="font-black">{option.provider}</div><div className="text-xs text-slate-500">{option.model}</div></div><div className="mt-1 text-xs text-slate-500">{option.note}</div></div>{selectedModel === option.provider && <CheckCircle2 size={19} className="text-indigo-600"/>}</button>)}</div></div><div className="space-y-5"><div className="rounded-3xl bg-[#18233d] p-6 text-white"><div className="flex items-center justify-between"><div><div className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Smart router</div><h3 className="mt-2 text-xl font-black">How Auto decides</h3></div><Gauge size={24} className="text-cyan-300"/></div><div className="mt-5 space-y-3 text-sm text-slate-300">{["Task type and executive role","Required quality and context length","Latency and estimated cost","Provider health and fallback availability","Historical user ratings"].map((item) => <div key={item} className="flex items-center gap-3"><CheckCircle2 size={15} className="text-emerald-300"/>{item}</div>)}</div></div><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><div><div className="text-xs font-black uppercase tracking-[0.16em] text-indigo-600">Provider status</div><h3 className="mt-1 text-lg font-black">Connections</h3></div><Settings size={19} className="text-slate-400"/></div><div className="mt-4 space-y-3">{["OpenAI","Anthropic","Google Gemini","OpenRouter"].map((provider,index) => <div key={provider} className="flex items-center justify-between rounded-xl bg-slate-50 p-3"><span className="text-sm font-bold">{provider}</span><span className={`rounded-full px-2 py-1 text-[10px] font-black ${index === 0 ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-500"}`}>{index === 0 ? "READY" : "CONNECT"}</span></div>)}</div></div></div></div></div>;
}

function AnalyticsView() {
  return <div><PageIntro eyebrow="Performance intelligence" title="Quality, speed and cost in one view" copy="Track campaign output, executive performance and model usage across each project."/><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[["24","Deliverables"],["88%","Approval rate"],["3m 42s","Avg. completion"],["£2.14","Estimated model cost"]].map(([value,label]) => <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="text-3xl font-black">{value}</div><div className="mt-1 text-xs font-bold text-slate-500">{label}</div></div>)}</div><div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><div><h3 className="text-lg font-black">Executive throughput</h3><p className="mt-1 text-xs text-slate-500">Completed deliverables this week</p></div><BarChart3 size={21} className="text-indigo-600"/></div><div className="mt-7 flex h-56 items-end gap-3">{[38,64,47,82,70,92,76,58].map((height,index) => <div key={index} className="flex-1 rounded-t-xl bg-indigo-100" style={{height:`${height}%`}}><div className="h-full rounded-t-xl bg-gradient-to-t from-indigo-600 to-violet-400"/></div>)}</div></div></div>;
}
