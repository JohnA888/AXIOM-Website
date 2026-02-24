"use client";

/* ------------------------------------------------------------------ */
/*  AXIOM Product Mockup Components                                    */
/*  Faithfully recreated from the HTML mockup screens in               */
/*  screenshots-AXIOM/ to showcase the actual product UI.              */
/* ------------------------------------------------------------------ */

/* ---- Shared primitives ---- */

function Badge({ children, variant = "ok" }: { children: React.ReactNode; variant?: "ok" | "warn" | "bad" | "info" }) {
  const styles = {
    ok: "text-emerald-700 border-emerald-300/40 bg-emerald-50",
    warn: "text-amber-700 border-amber-300/40 bg-amber-50",
    bad: "text-red-700 border-red-300/40 bg-red-50",
    info: "text-sky-700 border-sky-300/40 bg-sky-50",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider font-mono whitespace-nowrap ${styles[variant]}`}>
      {children}
    </span>
  );
}

function MockupShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#dce3ed] bg-[#f0f3f7] shadow-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-[#dce3ed] bg-white px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-[11px] text-[#6b7d94] font-mono">{title}</span>
      </div>
      <div className="p-3 space-y-3">{children}</div>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white border border-[#dce3ed] rounded-xl p-3 shadow-[0_2px_12px_rgba(26,43,66,0.06)] ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-[11px] font-semibold text-[#6b7d94] uppercase tracking-wider font-mono mb-2">{children}</h3>;
}

function Mono({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[10px] text-[#6b7d94]">{children}</span>;
}

function Item({ children }: { children: React.ReactNode }) {
  return <div className="bg-[#f7f9fc] border border-[#dce3ed] rounded-lg p-2.5 space-y-1">{children}</div>;
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-between gap-2">{children}</div>;
}

function KpiCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <Card>
      <SectionTitle>{label}</SectionTitle>
      <p className="text-xl font-bold text-[#1a2b42]">{value}</p>
      <p className="text-[10px] font-mono text-[#6b7d94] mt-1">{delta}</p>
    </Card>
  );
}

function BarLine({ percent }: { percent: number }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-[#f0f3f7] border border-[#dce3ed] overflow-hidden">
      <div className="h-full rounded-full bg-gradient-to-r from-[#e86833] to-[#f59e4e]" style={{ width: `${percent}%` }} />
    </div>
  );
}

/* ================================================================== */
/*  1. DASHBOARD MOCKUP                                                */
/* ================================================================== */

export function DashboardMockup() {
  return (
    <MockupShell title="AXIOM Command Dashboard — Atlas">
      {/* KPI Row */}
      <div className="grid grid-cols-4 gap-2">
        <KpiCard label="Heartbeat" value="92%" delta="31 runs, 4 alerts" />
        <KpiCard label="Approvals" value="7" delta="2 critical, 3 high" />
        <KpiCard label="Success Rate" value="96.4%" delta="184 / 191 total" />
        <KpiCard label="Daily Cost" value="$42.17" delta="+$7.83 remaining" />
      </div>

      <div className="grid grid-cols-12 gap-2">
        {/* Unified Inbox */}
        <Card className="col-span-5">
          <SectionTitle>Unified Inbox</SectionTitle>
          <div className="space-y-1.5">
            <Item>
              <Row><strong className="text-xs text-[#1a2b42]">VIP Email Escalation</strong><Badge variant="warn">needs action</Badge></Row>
              <Mono>source: Teams DM · workflow: morning_briefing</Mono>
            </Item>
            <Item>
              <Row><strong className="text-xs text-[#1a2b42]">Unknown Caller Voicemail</strong><Badge variant="info">triaged</Badge></Row>
              <Mono>source: Twilio voice · summary ready</Mono>
            </Item>
            <Item>
              <Row><strong className="text-xs text-[#1a2b42]">Asana Task Auto-Scheduled</strong><Badge variant="ok">completed</Badge></Row>
              <Mono>source: scheduler trigger · confidence 0.91</Mono>
            </Item>
          </div>
        </Card>

        {/* Execution Engine */}
        <Card className="col-span-7">
          <SectionTitle>Execution Engine Timeline</SectionTitle>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1.5">
              <Item>
                <Row><strong className="text-xs text-[#1a2b42]">wf-appointment-reminder</strong><Badge variant="warn">approval gate</Badge></Row>
                <Mono>step 2/4 waiting: outbound_call</Mono>
              </Item>
              <Item>
                <Row><strong className="text-xs text-[#1a2b42]">wf-deal-tracker</strong><Badge variant="ok">done</Badge></Row>
                <Mono>extracted deal + updated sheet</Mono>
              </Item>
            </div>
            <div className="space-y-1.5">
              <Item>
                <Row><strong className="text-xs text-[#1a2b42]">Policy Decision</strong><Badge variant="warn">HIGH risk</Badge></Row>
                <Mono>ctx.useTool(axiom-voice) requires approve</Mono>
              </Item>
              <Item>
                <Row><strong className="text-xs text-[#1a2b42]">Audit Trail</strong><Badge variant="ok">logged</Badge></Row>
                <Mono>actor=heartbeat · action=heartbeat_alert</Mono>
              </Item>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-3 gap-2">
        <Card>
          <SectionTitle>Voice &amp; Call Ops</SectionTitle>
          <div className="space-y-1.5">
            <Item><Row><span className="text-xs text-[#1a2b42]">Inbound Calls</span><Badge variant="info">14 today</Badge></Row></Item>
            <Item><Row><span className="text-xs text-[#1a2b42]">Voicemail to Tasks</span><Badge variant="ok">6 created</Badge></Row></Item>
          </div>
        </Card>
        <Card>
          <SectionTitle>Memory &amp; Feedback</SectionTitle>
          <div className="space-y-1.5">
            <Item><Row><span className="text-xs text-[#1a2b42]">Markdown Memory</span><Badge variant="ok">synced</Badge></Row></Item>
            <Item><Row><span className="text-xs text-[#1a2b42]">Style Drift</span><Badge variant="warn">detected</Badge></Row></Item>
          </div>
        </Card>
        <Card>
          <SectionTitle>Enterprise Observability</SectionTitle>
          <div className="space-y-1.5">
            <Item><Row><span className="text-xs text-[#1a2b42]">Active users</span><strong className="text-xs">842</strong></Row></Item>
            <Item><Row><span className="text-xs text-[#1a2b42]">RLS isolation</span><Badge variant="ok">pass</Badge></Row></Item>
          </div>
        </Card>
      </div>
    </MockupShell>
  );
}

/* ================================================================== */
/*  2. CHAT / UNIFIED INBOX MOCKUP                                     */
/* ================================================================== */

export function ChatInboxMockup() {
  return (
    <MockupShell title="AXIOM — Unified Chat Inbox">
      <div className="grid grid-cols-12 gap-2">
        {/* Thread list */}
        <Card className="col-span-4">
          <SectionTitle>Threads</SectionTitle>
          <div className="space-y-1.5">
            {[
              { name: "Acme Renewal", channel: "Teams", badge: "unread", variant: "info" as const, count: "2" },
              { name: "Unknown Caller Follow-up", channel: "SMS", badge: "triaged", variant: "ok" as const },
              { name: "Field Ops Thread", channel: "Telegram", badge: "resolved", variant: "ok" as const },
            ].map((t) => (
              <Item key={t.name}>
                <Row>
                  <strong className="text-xs text-[#1a2b42]">{t.name}</strong>
                  <Badge variant={t.variant}>{t.badge}{t.count ? ` ${t.count}` : ""}</Badge>
                </Row>
                <Mono>channel: {t.channel}</Mono>
              </Item>
            ))}
          </div>
        </Card>

        {/* Chat view */}
        <Card className="col-span-8">
          <SectionTitle>Acme Renewal — Teams</SectionTitle>
          <div className="space-y-2">
            <div className="bg-[#f7f9fc] border border-[#dce3ed] rounded-lg p-2">
              <Mono>[Teams] Sarah · 09:14</Mono>
              <p className="text-xs text-[#1a2b42] mt-1">Can we push the renewal call to Thursday? Client requested reschedule.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200/40 rounded-lg p-2">
              <Mono>[Atlas] · 09:14</Mono>
              <p className="text-xs text-[#1a2b42] mt-1">Rescheduled to Thursday 2:00 PM CT. Calendar updated. Sent confirmation to client.</p>
              <Badge variant="ok">auto-executed</Badge>
            </div>
            <div className="bg-amber-50 border border-amber-200/40 rounded-lg p-2">
              <Mono>[System] · 09:15</Mono>
              <p className="text-xs text-[#1a2b42] mt-1">Prep doc generation requires approval — deal value exceeds $50K threshold.</p>
              <Badge variant="warn">approval required</Badge>
            </div>
          </div>
        </Card>
      </div>
    </MockupShell>
  );
}

/* ================================================================== */
/*  3. POLICY ENGINE MOCKUP (Policies + Approvals + Audit)             */
/* ================================================================== */

export function PolicyEngineMockup() {
  return (
    <MockupShell title="AXIOM — Policy Engine & Governance">
      <div className="grid grid-cols-12 gap-2">
        {/* Active Rules */}
        <Card className="col-span-5">
          <SectionTitle>Active Policy Rules</SectionTitle>
          <div className="space-y-1.5">
            <Item>
              <Row><strong className="text-xs text-[#1a2b42]">voice.outbound.makeCall</strong><Badge variant="bad">critical</Badge></Row>
              <Mono>always requires approval</Mono>
            </Item>
            <Item>
              <Row><strong className="text-xs text-[#1a2b42]">files.share.external</strong><Badge variant="warn">high</Badge></Row>
              <Mono>manager override allowed</Mono>
            </Item>
            <Item>
              <Row><strong className="text-xs text-[#1a2b42]">calendar.read.private</strong><Badge variant="warn">high</Badge></Row>
              <Mono>owner level L3 only</Mono>
            </Item>
          </div>
        </Card>

        {/* Test Console */}
        <Card className="col-span-7">
          <SectionTitle>Policy Test Console</SectionTitle>
          <div className="space-y-2">
            <div className="bg-[#f7f9fc] border border-[#dce3ed] rounded-lg p-2">
              <Mono>Input:</Mono>
              <p className="text-[10px] font-mono text-[#1a2b42] mt-1">ctx.useTool(&quot;axiom-voice&quot;, &quot;make_call&quot;, &#123;to: &quot;+1...&quot;&#125;)</p>
            </div>
            <div className="bg-red-50 border border-red-200/40 rounded-lg p-2">
              <Row>
                <Mono>Result:</Mono>
                <Badge variant="bad">DENY_UNTIL_APPROVED</Badge>
              </Row>
              <p className="text-[10px] font-mono text-[#6b7d94] mt-1">reason: voice.outbound.makeCall is critical risk — requires explicit human approval</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Approvals Queue */}
      <Card>
        <SectionTitle>Approvals Queue</SectionTitle>
        <div className="space-y-1.5">
          <Item>
            <Row>
              <div className="flex items-center gap-2">
                <Badge variant="bad">critical</Badge>
                <strong className="text-xs text-[#1a2b42]">Outbound AI call to client</strong>
              </div>
              <div className="flex gap-1">
                <button className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-100 text-emerald-700 rounded border border-emerald-200">Approve</button>
                <button className="px-2 py-0.5 text-[10px] font-semibold bg-red-100 text-red-700 rounded border border-red-200">Deny</button>
              </div>
            </Row>
            <Mono>requested by: run-4f29 · age: 12 min</Mono>
          </Item>
          <Item>
            <Row>
              <div className="flex items-center gap-2">
                <Badge variant="warn">high</Badge>
                <strong className="text-xs text-[#1a2b42]">Share document externally</strong>
              </div>
              <div className="flex gap-1">
                <button className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-100 text-emerald-700 rounded border border-emerald-200">Approve</button>
                <button className="px-2 py-0.5 text-[10px] font-semibold bg-red-100 text-red-700 rounded border border-red-200">Deny</button>
              </div>
            </Row>
            <Mono>requested by: skills/export · age: 8 min</Mono>
          </Item>
        </div>
      </Card>

      {/* Audit Log */}
      <Card>
        <SectionTitle>Audit Log</SectionTitle>
        <div className="space-y-1.5">
          {[
            { time: "09:31:14", actor: "heartbeat", action: "heartbeat_alert", resource: "notifications", result: "alerted", variant: "warn" as const, corr: "corr-7a2" },
            { time: "09:29:08", actor: "policy_engine", action: "deny_until_approved", resource: "axiom-voice.make_call", result: "blocked", variant: "bad" as const, corr: "corr-7a1" },
            { time: "09:28:41", actor: "scheduler", action: "workflow_execute", resource: "wf-deal-tracker", result: "success", variant: "ok" as const, corr: "corr-79e" },
          ].map((log) => (
            <Item key={log.corr}>
              <Row>
                <div className="flex items-center gap-2">
                  <Mono>{log.time}</Mono>
                  <span className="text-xs text-[#1a2b42]">{log.actor} → {log.action}</span>
                </div>
                <Badge variant={log.variant}>{log.result}</Badge>
              </Row>
              <Mono>resource: {log.resource} · {log.corr}</Mono>
            </Item>
          ))}
        </div>
      </Card>
    </MockupShell>
  );
}

/* ================================================================== */
/*  4. MEMORY & PREFERENCES MOCKUP                                     */
/* ================================================================== */

export function MemoryMockup() {
  return (
    <MockupShell title="AXIOM — Memory & Preferences">
      {/* KPI Row */}
      <div className="grid grid-cols-4 gap-2">
        <KpiCard label="Memory Files" value="8" delta="Markdown, human-readable" />
        <KpiCard label="Pref Signals" value="147" delta="Explicit + implicit" />
        <KpiCard label="Style Conf." value="87%" delta="Across 5 channels" />
        <KpiCard label="Feedback" value="312" delta="Events processed" />
      </div>

      <div className="grid grid-cols-12 gap-2">
        {/* Memory files */}
        <Card className="col-span-7">
          <SectionTitle>Memory Files (Markdown)</SectionTitle>
          <div className="space-y-1.5">
            {[
              { file: "preferences.md", size: "2.4 KB", desc: "Communication style, scheduling rules, contact priorities", status: "synced" },
              { file: "vip_contacts.md", size: "1.8 KB", desc: "Name, relationship, channel, notes", status: "synced" },
              { file: "project_context.md", size: "3.1 KB", desc: "Active deals, timelines, stakeholders", status: "synced" },
              { file: "email_templates.md", size: "1.6 KB", desc: "Reusable email patterns and tone presets", status: "stale" },
              { file: "meeting_protocols.md", size: "1.2 KB", desc: "Prep steps, summary format, distribution", status: "synced" },
              { file: "voice_guidelines.md", size: "2.0 KB", desc: "Call scripts, consent flows, escalation paths", status: "synced" },
            ].map((f) => (
              <Item key={f.file}>
                <Row>
                  <div className="flex items-center gap-2">
                    <strong className="text-xs text-[#1a2b42] font-mono">{f.file}</strong>
                    <Mono>{f.size}</Mono>
                  </div>
                  <Badge variant={f.status === "stale" ? "warn" : "ok"}>{f.status}</Badge>
                </Row>
                <Mono>{f.desc}</Mono>
              </Item>
            ))}
          </div>
        </Card>

        {/* Style Drift + Preferences */}
        <div className="col-span-5 space-y-2">
          <Card>
            <SectionTitle>Style Drift Monitor</SectionTitle>
            <div className="space-y-2">
              {[
                { channel: "Email Formal", pct: 91, status: "stable" },
                { channel: "Email Casual", pct: 78, status: "drifting" },
                { channel: "Teams Messages", pct: 94, status: "stable" },
                { channel: "Task Descriptions", pct: 89, status: "stable" },
                { channel: "Voice Tone", pct: 35, status: "learning" },
              ].map((c) => (
                <div key={c.channel}>
                  <Row>
                    <span className="text-[11px] text-[#1a2b42]">{c.channel}</span>
                    <span className="text-[10px] font-mono text-[#6b7d94]">{c.pct}% · {c.status}</span>
                  </Row>
                  <BarLine percent={c.pct} />
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <SectionTitle>Recent Preferences</SectionTitle>
            <div className="space-y-1.5">
              <Item>
                <Mono>Prefers callbacks before 4 PM</Mono>
                <Row><Badge variant="info">implicit</Badge><Mono>confidence: 0.82</Mono></Row>
              </Item>
              <Item>
                <Mono>Always CC finance on invoices</Mono>
                <Row><Badge variant="ok">explicit</Badge><Mono>confidence: 1.0</Mono></Row>
              </Item>
            </div>
          </Card>
        </div>
      </div>
    </MockupShell>
  );
}

/* ================================================================== */
/*  5. SKILLS MOCKUP                                                   */
/* ================================================================== */

export function SkillsMockup() {
  return (
    <MockupShell title="AXIOM — Skills & Workflow Engine">
      <Card>
        <SectionTitle>Skill Execution Dashboard</SectionTitle>
        <div className="space-y-1.5">
          {[
            { skill: "meeting_summarizer", source: "built-in", status: "active", autonomy: "autonomous", accuracy: "93%", execs: "231" },
            { skill: "invoice_followup_skill", source: "workgraph", status: "pilot", autonomy: "guided", accuracy: "74%", execs: "42" },
            { skill: "contract_risk_classifier", source: "imported", status: "paused", autonomy: "supervised", accuracy: "68%", execs: "58" },
            { skill: "email_draft_composer", source: "built-in", status: "active", autonomy: "autonomous", accuracy: "96%", execs: "1,847" },
            { skill: "calendar_optimizer", source: "built-in", status: "active", autonomy: "guided", accuracy: "88%", execs: "312" },
          ].map((s) => (
            <Item key={s.skill}>
              <Row>
                <div className="flex items-center gap-2">
                  <strong className="text-xs text-[#1a2b42] font-mono">{s.skill}</strong>
                  <Mono>{s.source}</Mono>
                </div>
                <div className="flex items-center gap-1.5">
                  <Badge variant={s.status === "active" ? "ok" : s.status === "pilot" ? "info" : "bad"}>{s.status}</Badge>
                  <Mono>{s.autonomy}</Mono>
                </div>
              </Row>
              <Mono>accuracy: {s.accuracy} · executions: {s.execs}</Mono>
            </Item>
          ))}
        </div>
      </Card>

      {/* Autonomy Trust Levels + Triggers */}
      <div className="grid grid-cols-2 gap-2">
        <Card>
          <SectionTitle>Autonomy Trust Levels</SectionTitle>
          <div className="space-y-2.5 mt-1">
            {[
              { level: "Supervised", count: "12 skills", pct: 32 },
              { level: "Guided", count: "19 skills", pct: 55 },
              { level: "Autonomous", count: "9 skills", pct: 26 },
            ].map((a) => (
              <div key={a.level}>
                <Row><span className="text-[11px] text-[#1a2b42]">{a.level}</span><Mono>{a.count}</Mono></Row>
                <BarLine percent={a.pct} />
              </div>
            ))}
            <p className="text-[10px] text-[#6b7d94]">Critical risk operations force approval even in Autonomous mode.</p>
          </div>
        </Card>

        <Card>
          <SectionTitle>Triggers &amp; Schedulers</SectionTitle>
          <div className="space-y-1.5">
            {[
              { name: "Morning Briefing", type: "cron", schedule: "0 7 * * 1-5", status: "enabled" },
              { name: "Email Polling", type: "polling", schedule: "every 15m", status: "enabled" },
              { name: "Twilio Webhook", type: "webhook", schedule: "/webhooks/twilio", status: "enabled" },
              { name: "Heartbeat", type: "cron+llm", schedule: "*/30 8-18 * * 1-5", status: "running" },
            ].map((t) => (
              <Item key={t.name}>
                <Row>
                  <strong className="text-xs text-[#1a2b42]">{t.name}</strong>
                  <Badge variant={t.status === "running" ? "info" : "ok"}>{t.status}</Badge>
                </Row>
                <Mono>{t.type} · {t.schedule}</Mono>
              </Item>
            ))}
          </div>
        </Card>
      </div>
    </MockupShell>
  );
}

/* ================================================================== */
/*  6. VOICE & CALLS MOCKUP                                            */
/* ================================================================== */

export function CallsMockup() {
  return (
    <MockupShell title="AXIOM — Voice & Call Operations">
      {/* Calls table */}
      <Card>
        <SectionTitle>Call Log</SectionTitle>
        <div className="space-y-1.5">
          {[
            { id: "call-10021", caller: "Owner (John A.)", level: "L3", status: "completed", duration: "08:54", recording: "stored" },
            { id: "call-10022", caller: "Unknown +1 (214) ***-7721", level: "L1", status: "voicemail", duration: "01:13", recording: "stored" },
            { id: "call-10023", caller: "VIP — Sarah Chen", level: "L2", status: "screened", duration: "03:41", recording: "stored" },
          ].map((c) => (
            <Item key={c.id}>
              <Row>
                <div className="flex items-center gap-2">
                  <Mono>{c.id}</Mono>
                  <strong className="text-xs text-[#1a2b42]">{c.caller}</strong>
                </div>
                <div className="flex items-center gap-1.5">
                  <Badge variant={c.level === "L3" ? "ok" : c.level === "L2" ? "info" : "warn"}>{c.level}</Badge>
                  <Badge variant={c.status === "completed" ? "ok" : c.status === "voicemail" ? "info" : "warn"}>{c.status}</Badge>
                  <Mono>{c.duration}</Mono>
                </div>
              </Row>
              <Mono>recording: {c.recording}</Mono>
            </Item>
          ))}
        </div>
      </Card>

      {/* Call Detail */}
      <div className="grid grid-cols-12 gap-2">
        <Card className="col-span-4">
          <SectionTitle>Call Detail · call-10022</SectionTitle>
          <div className="space-y-1.5">
            <Item><Row><Mono>Caller Level</Mono><Badge variant="warn">L1 Unknown</Badge></Row></Item>
            <Item><Row><Mono>Consent Script</Mono><Badge variant="ok">announced</Badge></Row></Item>
            <Item><Row><Mono>Disposition</Mono><Badge variant="info">voicemail</Badge></Row></Item>
            <Item><Row><Mono>Follow-up Task</Mono><Badge variant="ok">created</Badge></Row></Item>
          </div>
        </Card>

        <Card className="col-span-8">
          <SectionTitle>Transcript &amp; Summary</SectionTitle>
          <div className="space-y-2">
            <div className="bg-[#f7f9fc] border border-[#dce3ed] rounded-lg p-2">
              <Mono>00:00 — Caller</Mono>
              <p className="text-xs text-[#1a2b42] mt-0.5">&quot;Hi, this is Mike from Regional Supply. I need to talk about the invoice from last week...&quot;</p>
            </div>
            <div className="bg-orange-50 border border-orange-200/40 rounded-lg p-2">
              <Mono>00:08 — Atlas (AI)</Mono>
              <p className="text-xs text-[#1a2b42] mt-0.5">&quot;Thank you for calling. I&apos;ll make sure John gets your message. Can I take a few details?&quot;</p>
            </div>
            <div className="bg-sky-50 border border-sky-200/40 rounded-lg p-2">
              <Mono>Summary</Mono>
              <p className="text-xs text-[#1a2b42] mt-0.5">Action items: Create Asana task, notify finance, schedule callback before 4 PM.</p>
            </div>
          </div>
        </Card>
      </div>
    </MockupShell>
  );
}

/* ================================================================== */
/*  7. INTEGRATIONS MOCKUP                                             */
/* ================================================================== */

export function IntegrationsMockup() {
  return (
    <MockupShell title="AXIOM — Integrations Hub">
      <div className="grid grid-cols-3 gap-2">
        <KpiCard label="Connected" value="10" delta="Services active" />
        <KpiCard label="Webhooks" value="6" delta="Active endpoints" />
        <KpiCard label="Creds Due" value="1" delta="Rotation in 3 days" />
      </div>
      <Card>
        <SectionTitle>Connected Services</SectionTitle>
        <div className="space-y-1.5">
          {[
            { service: "Microsoft Teams", category: "Messaging", auth: "OAuth 2.0", sync: "2 min ago", health: "healthy" },
            { service: "Twilio Voice", category: "Telephony", auth: "API Key", sync: "realtime", health: "healthy" },
            { service: "WhatsApp Business", category: "Messaging", auth: "Meta API", sync: "5 min ago", health: "healthy" },
            { service: "Asana", category: "Tasks", auth: "OAuth 2.0", sync: "15 min ago", health: "healthy" },
            { service: "Google Calendar", category: "Calendar", auth: "OAuth 2.0", sync: "3 min ago", health: "healthy" },
            { service: "Microsoft Outlook", category: "Email", auth: "OAuth 2.0", sync: "1 min ago", health: "rate limited" },
            { service: "Anthropic Claude", category: "AI Provider", auth: "API Key", sync: "realtime", health: "healthy" },
          ].map((s) => (
            <Item key={s.service}>
              <Row>
                <div className="flex items-center gap-2">
                  <strong className="text-xs text-[#1a2b42]">{s.service}</strong>
                  <Mono>{s.category}</Mono>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mono>{s.auth}</Mono>
                  <Mono>{s.sync}</Mono>
                  <Badge variant={s.health === "healthy" ? "ok" : "warn"}>{s.health}</Badge>
                </div>
              </Row>
            </Item>
          ))}
        </div>
      </Card>
    </MockupShell>
  );
}

/* ================================================================== */
/*  8. RUN DETAIL MOCKUP                                               */
/* ================================================================== */

export function RunDetailMockup() {
  return (
    <MockupShell title="AXIOM — Run Detail · run-4f29">
      <Card>
        <SectionTitle>Execution Trace</SectionTitle>
        <div className="space-y-1.5">
          {[
            { step: 1, handler: "triage_email", status: "completed", output: "Action items extracted", latency: "482ms", variant: "ok" as const },
            { step: 2, handler: "twilio.makeCall", status: "waiting approval", output: "approval-9012 pending", latency: "—", variant: "warn" as const },
            { step: 3, handler: "asana.createTask", status: "queued", output: "Blocked by step 2", latency: "—", variant: "info" as const },
            { step: 4, handler: "teams.notify", status: "queued", output: "Blocked by step 2", latency: "—", variant: "info" as const },
          ].map((s) => (
            <Item key={s.step}>
              <Row>
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e86833]/10 text-[#e86833] text-[10px] font-bold">{s.step}</span>
                  <strong className="text-xs text-[#1a2b42] font-mono">{s.handler}</strong>
                </div>
                <div className="flex items-center gap-1.5">
                  <Badge variant={s.variant}>{s.status}</Badge>
                  <Mono>{s.latency}</Mono>
                </div>
              </Row>
              <Mono>output: {s.output}</Mono>
            </Item>
          ))}
        </div>
      </Card>
    </MockupShell>
  );
}
