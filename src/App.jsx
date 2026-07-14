import { useEffect, useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

const slides = [
  ["s0", "封面", "AI-NATIVE ORGANIZATION"],
  ["s1", "真实矛盾", "REAL TENSION"],
  ["s2", "瓶颈转移", "VALUE CHAIN"],
  ["s3", "准备度鸿沟", "READINESS GAP"],
  ["s4", "路径警示", "FALSE STARTS"],
  ["s5", "重新定义", "AI-NATIVE DEFINED"],
  ["s6", "人机分工", "HUMAN × AGENT"],
  ["s7", "Harness", "NEW PROCESS FORM"],
  ["s8", "案例解剖", "ANTHROPIC SHOWCASE"],
  ["s9", "行动系统", "ORGANIZATION OPERATING SYSTEM"],
  ["s10", "HR 使命", "HR MISSION"],
  ["s11", "四大场景", "FOUR ARENAS"],
  ["s12", "价值链主轴", "VALUE CHAIN CORE"],
  ["s13", "四次跃迁", "HR EVOLUTION"],
  ["s14", "组织准备度", "ORGANIZATION READINESS"],
  ["s15", "认知画像", "COGNITIVE PROFILE"],
  ["s16", "中层重塑", "MIDDLE MANAGEMENT"],
  ["s17", "新三角能力", "NEW HR TRIAD"],
  ["s18", "价值链地图", "VALUE CHAIN MAP"],
  ["s19", "HR Harness", "HR HARNESS"],
  ["s20", "评测指标", "EVALUATION SYSTEM"],
  ["s21", "三张地图", "THREE MAPS"],
  ["s22", "终局判断", "THE NEXT LEAP"],
  ["s23", "谢谢", "THANK YOU"],
].map(([id, title, eyebrow], index) => ({ id, title, eyebrow, index }));

const chapterNames = ["真实矛盾", "重新定义", "HR 主线", "最佳切入口", "理解框架", "收束"];
const chapterRanges = [[1, 4], [5, 9], [10, 13], [14, 17], [18, 20], [21, 23]];

function chapterFor(index) {
  if (index === 0) return "开场";
  return chapterNames[chapterRanges.findIndex(([a, b]) => index >= a && index <= b)];
}

function SlideShell({ children, className = "", page, eyebrow, source }) {
  return (
    <section className={`slide ${className}`} id={page.toLowerCase()} aria-label={`${page} ${eyebrow}`}>
      <div className="grid" />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <header className="slide-head">
        <span className="eyebrow">{eyebrow}</span>
        <span className="chapter-tag">{chapterFor(Number(page.slice(1)))}</span>
        <span className="page-index">{page} / S{slides.length - 1}</span>
      </header>
      {children}
      {source && <div className="source-note">{source}</div>}
    </section>
  );
}

function Title({ kicker, children, copy, compact = false }) {
  return <div className={`title-block ${compact ? "compact-title" : ""}`}><p className="kicker">{kicker}</p><h2>{children}</h2>{copy && <p>{copy}</p>}</div>;
}

function Cover() {
  return (
    <SlideShell page="S0" eyebrow="AI-NATIVE ORGANIZATION" className="cover">
      <img className="cover-scene" src="/visuals/cover-glass-city-v2.png" alt="" aria-hidden="true" />
      <div className="cover-copy">
        <h1><span>AI-Native 组织：</span><span className="neon-title">HR 的下一次跃迁</span></h1>
        <p className="cover-subtitle">从传统 HR，到人机协同价值链的组织智能架构师</p>
        <div className="identity"><strong>熊伟熠</strong><i />人力家 总裁<i />原钉钉副总裁 / P10</div>
        <p className="company"><span className="brand-logo-crop"><img src="/brand/hrenjia-logo-on-dark.png" alt="人力家 Logo" /></span><i />钉钉与人力窝共同投资的人力资源数字化科技公司</p>
      </div>
      <div className="monolith" aria-label="组织智能操作系统玻璃单体"><div className="mono-content"><span>组织战略</span><b>＋</b><span>人才供应链</span><b>＋</b><span>人机协同</span><b>＋</b><span>组织能力</span><b>＋</b><span>数据智能</span></div><div className="mono-caption"><strong>组织智能操作系统</strong><small>AI-Native OS for Organization</small></div></div>
    </SlideShell>
  );
}

function SlideOne() {
  return (
    <SlideShell page="S1" eyebrow="REAL TENSION" className="case-slide" source="真实案例 / 内部观察：研发 AI 提效访谈交叉印证">
      <Title kicker="一个真实业务矛盾" copy="单点效率提升，会把价值链里最慢、最模糊的环节放大。">技术快了，<span className="neon-inline">不等于公司快了</span></Title>
      <div className="metric-stage"><div className="metric-number"><span>研发效率</span><strong>35%</strong><em>约释放 3–4 个开发人头产能</em></div><div className="pressure-line"><span>瓶颈向前后环节转移</span></div><div className="contrast-list"><div className="fast"><b>已经变快</b><span>编码 / 日志定位 / 数据库查询</span></div><div className="slow"><b>没有同步变快</b><span>用户调研 / 需求判断 / 测试验证 / 端到端交付</span></div></div></div>
      <div className="bottom-claim">如果单点提效不会自动变成组织提效，组织会在 AI 压力下自行进化吗？</div>
    </SlideShell>
  );
}

const metaPathErrors = [
  ["01", "烧 Token", "把资源投入误当成组织能力"],
  ["02", "裁员", "组织变小，但运行逻辑没有改变"],
  ["03", "FOMO", "用恐惧推动转型，而非战略设计"],
];
function SlideTwo() {
  return (
    <SlideShell page="S2" eyebrow="META COUNTEREXAMPLE" className="meta-path-slide" source="内部研究整理：Meta AI-Native 路径判断分析 · 2026-07-05">
      <Title kicker="Meta 反例 · 路径判断" copy="把算力投入、裁员和 AI 考核叠加到旧组织，不会自然长出新的组织能力。">AI-Native，靠组织<span className="neon-inline">自演进走不通</span></Title>
      <div className="meta-path-canvas">
        <div className="meta-evidence">
          <div className="meta-evidence-head"><small>THE SELF-EVOLUTION BET</small><strong>等待组织自动适配 AI</strong></div>
          <div className="meta-error-list">{metaPathErrors.map(([index, title, detail]) => <div key={title}><span>{index}</span><b>{title}</b><small>{detail}</small></div>)}</div>
        </div>
        <div className="meta-verdict">
          <small>PATH VERDICT</small>
          <strong>技术升级</strong>
          <b>不等于组织进化</b>
          <p>AI 只提高一个能力因子；岗位、流程、决策逻辑和治理仍按旧方式运转。</p>
          <div className="meta-operating-model"><span>岗位</span><span>流程</span><span>权责</span><span>绩效</span><span>治理</span></div>
        </div>
      </div>
      <div className="bottom-claim">既然组织不会自演进，真正决定 AI 转型结果的，就是组织准备度。</div>
    </SlideShell>
  );
}

function SlideThree() {
  return (
    <SlideShell page="S3" eyebrow="READINESS GAP" className="readiness-slide" source="来源：McKinsey，AI in the workplace / agentic future readiness 调研">
      <Title kicker="麦肯锡给出了答案" copy="个人已经开始变快，但组织系统明显滞后。">真正的分水岭，是<span className="neon-inline">组织准备度</span></Title>
      <div className="readiness-compare">
        <div className="readiness-bar personal" style={{ "--value": "70%" }}><strong>70%</strong><span>个人认为自己已准备好使用 AI</span><i /></div>
        <div className="gap-mark"><span>准备度鸿沟</span><b>43</b><small>个百分点</small></div>
        <div className="readiness-bar org" style={{ "--value": "27%" }}><strong>27%</strong><span>管理者认为组织已准备好</span><i /></div>
      </div>
      <div className="evidence-strip"><div><strong>48%</strong><span>组织准备度<br />解释 AI 价值差异</span></div><div><strong>25%</strong><span>个人准备度<br />解释 AI 价值差异</span></div><div><strong>89%</strong><span>仍停留在赋能<br />或局部自动化</span></div><blockquote>AI 转型的分水岭，不是员工会不会用 AI，而是组织能不能围绕 AI 重新运转。</blockquote></div>
    </SlideShell>
  );
}

const falseStarts = [["发 AI 工具", "只提升个人"], ["提示词培训", "不改变工作方式"], ["堆模型 / 算力", "是燃料，不是引擎"], ["裁人降本", "变小不等于重构"]];
function SlideFour() {
  return (
    <SlideShell page="S4" eyebrow="FALSE STARTS" className="false-slide">
      <Title kicker="四个常见误判" copy="旧组织里增加 AI，并不会自然长出新的组织能力。">把 AI 塞进旧组织，<span className="neon-inline">不是 AI-Native</span></Title>
      <div className="false-convergence"><div className="false-list">{falseStarts.map(([a, b], i) => <div key={a}><span>0{i + 1}</span><b>{a}</b><small>{b}</small></div>)}</div><div className="converge-lines" /><div className="old-core"><small>OLD OPERATING MODEL</small><strong>旧组织未重构</strong><span>岗位 · 流程 · 权限 · 绩效仍按旧逻辑运转</span></div></div>
      <div className="bottom-claim">正如旧厂房里换上电动机，不等于重新设计工厂；旧组织里加上 AI，也不等于进入 AI-Native。</div>
    </SlideShell>
  );
}

function SlideFive() {
  return (
    <SlideShell page="S5" eyebrow="AI-NATIVE DEFINED" className="definition-slide">
      <div className="definition-hero"><p className="kicker">重新定义 AI-Native</p><h2>不是人人用 AI，<br />而是<span className="neon-inline">价值链被重新编排</span></h2><p>业务流程、组织角色、绩效机制、权限治理、知识上下文与 Agent 系统重新组合。</p></div>
      <div className="maturity-track"><div><span>01</span><b>AI Enabled</b><small>员工使用 AI 工具</small><em>价值链基本不变</em></div><div><span>02</span><b>AI First</b><small>关键流程自动化</small><em>价值链局部改变</em></div><div className="active"><span>03</span><b>AI Native</b><small>人、Agent、流程与治理重构</small><em>价值链系统改变</em></div></div>
      <div className="definition-foot">可运行 · 可评测 · 可持续优化的人机协同价值链</div>
    </SlideShell>
  );
}

function SlideSix() {
  const open = ["战略选择", "需求优先级", "组织诊断", "干部判断"];
  const closed = ["查日志 / 数据", "生成报表", "简历初筛", "规则校验"];
  return (
    <SlideShell page="S6" eyebrow="HUMAN × AGENT" className="division-slide">
      <Title kicker="人机协同的基本分工" copy="封闭问题不是低价值问题，而是已经被第一性原理拆清楚的问题。">人负责开放问题，AI 承接<span className="neon-inline">封闭问题</span></Title>
      <div className="division-canvas"><div className="problem-side human-side"><span>OPEN</span><h3>开放问题</h3><p>目标不清 · 答案不唯一 · 需要取舍</p><strong>人主导，AI 辅助推演</strong><ul>{open.map(x => <li key={x}>{x}</li>)}</ul></div><div className="principle-gate"><small>FIRST PRINCIPLES</small><b>目标</b><b>输入</b><b>约束</b><b>步骤</b><b>标准</b><b>异常</b><em>拆清楚 → SOP 化</em></div><div className="problem-side agent-side"><span>CLOSED</span><h3>封闭问题</h3><p>目标清楚 · 规则明确 · 结果可验证</p><strong>Agent 主导，人监督异常</strong><ul>{closed.map(x => <li key={x}>{x}</li>)}</ul></div></div>
      <div className="bottom-claim">组织真正稀缺的能力，是把开放问题变成高质量 SOP，再交给 AI 稳定执行。</div>
    </SlideShell>
  );
}

const loopSteps = [["目标", "人定义"], ["执行", "Agent 调度工具"], ["审计", "独立校验"], ["例外", "人类裁决"], ["写回", "规则持续进化"]];
function SlideSeven() {
  return (
    <SlideShell page="S7" eyebrow="NEW PROCESS FORM" className="loop-slide">
      <Title kicker="未来公司的新流程形态" copy="Harness 不是一个 prompt，也不是单点 Agent，而是一套持续运行的业务行动系统。">流程不再只写给人看，<span className="neon-inline">Harness 直接驱动执行</span></Title>
      <div className="loop-canvas"><div className="loop-orbit">{loopSteps.map(([a, b], i) => <div className={`loop-node n${i + 1}`} key={a}><span>0{i + 1}</span><b>{a}</b><small>{b}</small></div>)}<div className="loop-ring ring-a" /><div className="loop-ring ring-b" /><div className="loop-core"><small>AI</small><strong>HARNESS</strong><span>执行 · 评测 · 治理</span></div></div><div className="harness-stack"><span>LLM</span><span>Context / Memory</span><span>Tools / Workflow</span><span>Permissions / Guardrails</span><span>Eval / Benchmark</span><span>Runtime / Sandbox</span></div></div>
      <div className="bottom-claim">SOP 写给人看，Harness 让组织能力可以被执行、评测和持续调优。</div>
    </SlideShell>
  );
}

const reportFlow = [["汇集碎片", "复盘 · 会议 · Slack · 数仓"], ["统一口径", "核对数据定义与冲突"], ["分析生成", "形成经营报告初稿"], ["逐项校对", "数字与叙事复核"], ["输出行动", "管理页 · Asana 任务"]];
const campaignFlow = [["接收需求", "来自 Slack"], ["跨系统执行", "CRM · 活动 · 邮件 · 落地页"], ["用户态审计", "页面与确认邮件测试"], ["人工放行", "承担最终质量责任"], ["复盘写回", "失败经验沉淀为 Skill"]];
function FlowRail({ accent, type, steps, children }) { return <div className="flow-rail"><div className="flow-label" style={{ "--accent": accent }}><small>{type}</small><strong>{children}</strong></div><div className="flow-line">{steps.map(([step, detail], index) => <div className="flow-step" key={step}><span>{index + 1}</span><b>{step}</b><small>{detail}</small></div>)}</div></div>; }
function SlideEight() {
  return (
    <SlideShell page="S8" eyebrow="ANTHROPIC SHOWCASE" className="anthropic-slide" source="来源：Anthropic 官方客户案例（市场运营团队）">
      <div className="title-block wide-title"><p className="kicker">一个信息链 · 一个行动流</p><h2>AI-Native 改写的不是单点任务，<br /><span className="neon-inline">而是信息链与行动流</span></h2></div>
      <div className="case-summary"><small className="case-name">周度经营报告</small><div className="case-metric"><strong>1–2 天</strong><span>人工跨系统整理</span></div><b className="case-arrow" aria-hidden="true">→</b><div className="case-metric"><strong>2 小时</strong><span>AI 整理与分析</span></div><em>碎片信息被整理、校对并输出行动</em></div>
      <div className="flows"><FlowRail accent="#60a5fa" type="经营信息链" steps={reportFlow}>周度经营报告</FlowRail><FlowRail accent="#a855f7" type="跨系统行动流" steps={campaignFlow}>营销活动搭建</FlowRail></div>
      <div className="human-role"><span>人的角色上移</span><strong>定义目标与叙事重点</strong><strong>裁决异常</strong><strong>承担最终质量责任</strong></div>
    </SlideShell>
  );
}

const capabilityGroups = [{ title: "懂企业", detail: "Context + Memory", tone: "blue" }, { title: "能行动", detail: "Tools + Runtime", tone: "violet" }, { title: "可治理", detail: "Permissions + Eval", tone: "cyan" }];
function SlideNine() {
  return (
    <SlideShell page="S9" eyebrow="ORGANIZATION OPERATING SYSTEM" className="architecture-slide">
      <Title compact kicker="从记录系统到行动系统" copy="Harness 不是超级 Agent，而是可执行、可观测、可评测、可治理的业务行动层。">未来企业将建立在 <span className="neon-inline">AI Harness</span> 之上</Title>
      <div className="architecture"><div className="legacy-zone zone"><div className="zone-label"><span>01</span><b>传统组织</b><small>记录系统</small></div><ul><li>SOP / 审批 / 表单</li><li>人操作 SaaS</li><li>KPI 衡量人的动作</li><li>经验留在人和文档</li></ul></div><div className="transfer-arrow"><span>业务流程</span><b>→</b></div><div className="harness-zone zone"><div className="human-band"><b>人类责任带</b><span>目标</span><span>规则</span><span>例外</span><span>最终责任</span></div><div className="harness-core"><div className="model-orb"><small>业务行动引擎</small><strong>AI HARNESS</strong><span>Model 提供通用推理能力</span></div><div className="capabilities">{capabilityGroups.map(group => <div className={`cap ${group.tone}`} key={group.title}><b>{group.title}</b><span>{group.detail}</span></div>)}</div></div><div className="result-band"><span>可执行</span><span>可观测</span><span>可评测</span><span>可治理</span></div></div><div className="transfer-arrow"><span>工程化</span><b>→</b></div><div className="tooling-zone zone"><div className="zone-label"><span>03</span><b>构建工具层</b><small>工程化支撑</small></div><ul><li>编排与工作流</li><li>安全运行与部署</li><li>评测与持续调优</li></ul><div className="tool-tags"><span>LangChain</span><span>NVIDIA</span><span>Runtime</span></div></div></div>
      <div className="architecture-claim"><span>Model 提高能力上限</span><span>Context 注入企业判断力</span><strong>Harness 提高任务完成率</strong></div>
    </SlideShell>
  );
}

function SlideTen() {
  return (
    <SlideShell page="S10" eyebrow="HR MISSION" className="mission-slide">
      <Title kicker="HR 的专业主位" copy="技术会变，组织创造价值的方式会变，但 HR 的底层使命不会变。">AI 没有改变 HR 的使命，<br />却改变了<span className="neon-inline">价值创造方式</span></Title>
      <div className="mission-axis"><div className="mission-half external"><small>EXTERNAL</small><strong>外部适应性</strong><p>市场 · 客户 · 竞争 · 政策</p><em>适应 AI 改写价值创造方式</em></div><div className="mission-core"><span>×</span><b>组织活力</b><small>激发人机协同价值链</small></div><div className="mission-half internal"><small>INTERNAL</small><strong>内部有效性</strong><p>组织 · 人才 · 文化 · 机制</p><em>人、Agent、流程与治理协同</em></div></div>
      <div className="bottom-claim">帮助组织在不同环境下，提升外部适应性和内部有效性。</div>
    </SlideShell>
  );
}

const arenas = [["战略", "战略假设如何被 AI 快速验证，并变成 Agent 可执行任务？"], ["组织", "人机协同价值链如何设计，权责利如何重新分配？"], ["人才", "人—机—岗—流程如何匹配，AI fluency 如何评价？"], ["文化", "什么行为能让人和 Agent 安全协同，并建立信任？"]];
function SlideEleven() {
  return (
    <SlideShell page="S11" eyebrow="FOUR ARENAS" className="arena-slide">
      <Title kicker="HR 不变的四大场景" copy="工作场景没有消失，但每一个场景都被人机协同重新打开。">战略、组织、人才、文化，<span className="neon-inline">都出现了新问题</span></Title>
      <div className="arena-cross"><div className="cross-line x" /><div className="cross-line y" /><div className="arena-core">HR<span>重新定义组织秩序</span></div>{arenas.map(([a, b], i) => <div className={`arena-item a${i + 1}`} key={a}><span>0{i + 1}</span><h3>{a}</h3><p>{b}</p></div>)}</div>
    </SlideShell>
  );
}

const chainImpacts = [["支撑战略", "战略落到价值活动"], ["决定人效", "衡量端到端效率"], ["暴露成本", "识别结构与过程浪费"], ["塑造文化", "协同与反馈沉淀为基因"], ["培养领导力", "管理者在链上被锻炼"]];
function SlideTwelve() {
  return (
    <SlideShell page="S12" eyebrow="VALUE CHAIN CORE" className="spine-slide">
      <Title kicker="HR 工作的主轴" copy="价值链连接内部与外部，连接战略与组织，是组织的命脉。">真正的人效，来自<span className="neon-inline">价值链整体效率</span></Title>
      <div className="spine-canvas"><div className="spine-line"><span>外部环境</span><b>战略</b><strong>价值链</strong><b>组织</b><span>业务结果</span></div><div className="impact-fan">{chainImpacts.map(([a, b], i) => <div style={{ "--i": i }} key={a}><span>0{i + 1}</span><b>{a}</b><small>{b}</small></div>)}</div></div>
      <div className="bottom-claim">研发提效 35% 以后，真正的问题是整条产研测价值链如何重构。</div>
    </SlideShell>
  );
}

const evolution = [["支持型 HR", "行政与事务支持", "合规 · 服务 · 效率"], ["职能型 HR", "专业模块专家", "专业体系建设"], ["战略型 HR", "业务 / 组织伙伴", "业务理解 · 组织诊断"], ["AI-Native HR", "组织智能架构师", "价值链设计 · AI 治理"]];
function SlideThirteen() {
  return (
    <SlideShell page="S13" eyebrow="HR EVOLUTION" className="evolution-slide">
      <Title kicker="HR 的四次跃迁" copy="下一次跃迁，不是多学一个工具，而是成为人机协同价值链的设计者。">从支持型 HR，到<span className="neon-inline">组织智能架构师</span></Title>
      <div className="evolution-steps">{evolution.map(([a, b, c], i) => <div className={i === 3 ? "active" : ""} key={a}><span>0{i + 1}</span><h3>{a}</h3><b>{b}</b><small>{c}</small></div>)}</div>
      <div className="evolution-arrow"><span>事务效率</span><i /><span>组织价值</span></div>
    </SlideShell>
  );
}

const readinessLabels = [["个人", "AI fluency / 技能画像"], ["流程", "流程盘点 / 人机分工"], ["角色", "岗位重塑 / 任职资格"], ["治理", "权限 / 审计 / 风控"], ["绩效", "KPI / Eval / 薪酬"], ["信任", "沟通 / 反馈 / 文化"]];
function SlideFourteen() {
  return (
    <SlideShell page="S14" eyebrow="ORGANIZATION READINESS" className="org-radar-slide">
      <div className="radar-copy"><p className="kicker">为什么 HR 是最佳切入口</p><h2>组织准备度，<br />正是<span className="neon-inline">HR 的主场</span></h2><p>AI 转型越深入，越需要 HR 把技术变化翻译成组织秩序。</p><div className="readiness-list">{readinessLabels.map(([a, b]) => <div key={a}><b>{a}</b><span>{b}</span></div>)}</div></div>
      <div className="readiness-map-wrap" aria-label="六维组织准备度地图"><div className="radar-caption"><strong>六维组织准备度</strong><span>结构示意 · 不代表测评分数</span></div><div className="readiness-map-halo" /><div className="readiness-spokes" aria-hidden="true"><i /><i /><i /></div>{readinessLabels.map(([a, b], index) => <div className={`readiness-node rn${index + 1}`} key={a}><span>{String(index + 1).padStart(2, "0")}</span><b>{a}准备度</b><small>{b}</small></div>)}<div className="translation-core"><small>HR TRANSLATION LAYER</small><b>技术变化</b><i>↓</i><strong>组织秩序</strong></div></div>
    </SlideShell>
  );
}

const profileRadar = [{ skill: "技术判断", value: 82 }, { skill: "第一性原理", value: 94 }, { skill: "学习速度", value: 88 }, { skill: "系统抽象", value: 86 }, { skill: "啃硬问题", value: 78 }, { skill: "低内耗", value: 84 }, { skill: "审美克制", value: 76 }];
function SlideFifteen() {
  return (
    <SlideShell page="S15" eyebrow="COGNITIVE PROFILE" className="profile-slide">
      <div className="profile-copy"><p className="kicker">人才评价范式迁移</p><h2>人才差异，不在年龄和履历，<br />而在<span className="neon-inline">认知操作系统</span></h2><div className="profile-shift"><div><small>职位画像</small><span>职位 · 经验 · 职级</span></div><b>→</b><div><small>认知画像</small><span>判断 · 拆解 · 学习 · 抽象 · 协同</span></div></div><blockquote>真正的 AI Fluency，是能把复杂问题拆清楚，并带着 AI 做成系统能力。</blockquote></div>
      <div className="radar-wrap" aria-label="人才认知画像能力雷达图"><div className="radar-caption"><strong>认知能力画像</strong><span>示意图 · 不代表精确测评分数</span></div><div className="radar-halo" /><ResponsiveContainer width="100%" height="100%"><RadarChart data={profileRadar} outerRadius="73%" margin={{ top: 34, right: 58, bottom: 28, left: 58 }}><PolarGrid gridType="polygon" stroke="#7f8dad" strokeOpacity={0.26} /><PolarAngleAxis dataKey="skill" tick={{ fill: "#d8e2f0", fontSize: 13, fontWeight: 650 }} /><Radar dataKey="value" stroke="#7c8cff" strokeWidth={2.5} fill="url(#radarGradient)" fillOpacity={0.68} dot={{ fill: "#9fa8ff", stroke: "#d6dcff", strokeWidth: 1, r: 3 }} /><defs><linearGradient id="radarGradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#3B82F6" /><stop offset="58%" stopColor="#A855F7" /><stop offset="100%" stopColor="#58D9E9" /></linearGradient></defs></RadarChart></ResponsiveContainer><div className="radar-core"><small>认知核</small><b>第一性原理</b><span>拆清目标、约束与标准</span></div><div className="fluency-label"><b>AI Fluency</b><span>把业务问题 SOP 化 · 产品化 · 系统化</span></div></div>
    </SlideShell>
  );
}

const managerMoves = [["传递信息", "澄清目标与上下文"], ["盯过程", "设计反馈与 Eval"], ["派任务", "编排人 + Agent"], ["靠经验判断", "基于 Context / Evidence"], ["控制下属", "建立信任与安全反馈"]];
function SlideSixteen() {
  return (
    <SlideShell page="S16" eyebrow="MIDDLE MANAGEMENT" className="manager-slide">
      <Title kicker="最大焦虑点，也是最大杠杆点" copy="AI 最容易改写的，恰恰是信息传递、任务拆解、过程监督和经验判断。">中层不是被消失，<span className="neon-inline">而是被重新定义</span></Title>
      <div className="manager-shift"><div className="old-manager"><small>OLD VALUE</small><strong>信息中继站</strong><span>传递 · 分派 · 监督 · 协调</span></div><div className="move-rails">{managerMoves.map(([a, b], i) => <div key={a}><span>{a}</span><i><em>{String(i + 1).padStart(2, "0")}</em></i><b>{b}</b></div>)}</div><div className="new-manager"><small>NEW LEVER</small><strong>人机编排者</strong><span>目标 · 上下文 · Eval · 信任</span></div></div>
      <div className="bottom-claim">只会传递信息的中层会被重塑；能编排人机协同的中层会变得更重要。</div>
    </SlideShell>
  );
}

const triad = [["People Strategist", "组织如何围绕 AI 重构", "价值链与角色设计"], ["People Scientist", "如何理解人与组织行为", "画像、网络与文化分析"], ["People Technologist", "如何把 HR 流程 Harness 化", "工具、权限与 Eval"]];
function SlideSeventeen() {
  return (
    <SlideShell page="S17" eyebrow="NEW HR TRIAD" className="triad-slide">
      <Title kicker="HR 必须长出的新能力" copy="像 CIO 设计系统架构一样，HR 需要设计和治理人机协同价值链。">组织智能架构师，需要<br /><span className="neon-inline">新三角能力</span></Title>
      <div className="triad-canvas"><div className="triad-lines" /><div className="triad-core"><small>AI-NATIVE HR</small><strong>组织智能<br />架构师</strong></div>{triad.map(([a, b, c], i) => <div className={`triad-node t${i + 1}`} key={a}><span>0{i + 1}</span><h3>{a}</h3><b>{b}</b><small>{c}</small></div>)}</div>
    </SlideShell>
  );
}

const hireChain = ["岗位需求", "能力定义", "候选人获取", "AI 简历筛选", "面试安排", "面试评价", "录用决策", "入职衔接", "试用反馈"];
function SlideEighteen() {
  return (
    <SlideShell page="S18" eyebrow="VALUE CHAIN MAP" className="hire-slide">
      <Title compact kicker="第一张地图：价值链" copy="候选人 Agent 让简历包装成本趋近于零；AI 让事实核验成本同步下降，招聘流程因此可以重新排序。">当候选人也拥有 Agent，<br /><span className="neon-inline">招聘必须验证证据</span></Title>
      <div className="hire-chain">
        {hireChain.map((x, i) => <div className={`hire-step ${i === 3 || i === 4 ? "agent" : i === 1 || i === 6 ? "human" : "hybrid"}`} key={x}><span>{String(i + 1).padStart(2, "0")}</span><b>{x}</b><small>{i === 3 || i === 4 ? "Agent 主导" : i === 1 || i === 6 ? "人主导" : "人机协同"}</small></div>)}
        <div className="candidate-agent-signal"><em>NEW INPUT</em><b>候选人也拥有 Agent</b><small>表达优化 → 过度包装风险</small></div>
        <div className="future-route" aria-label="假设流程：AI 简历筛选之后先进行 AI 增强背调，再进入面试安排"><i className="route-down" /><i className="route-across" /><i className="route-up" /><div className="background-check-node"><em>HYPOTHESIS</em><b>AI 增强背调</b><small>候选人授权 · 前置事实核验</small></div></div>
      </div>
      <div className="evidence-pivot"><span>过去：筛选表达</span><i>→</i><strong>未来：验证证据</strong></div>
      <div className="lens-rail"><strong>五个观察镜头</strong>{["价值创造", "瓶颈环节", "人机边界", "责任归属", "组织影响"].map((x, i) => <span key={x}><i>0{i + 1}</i>{x}</span>)}</div>
      <div className="legend"><span className="human-dot">人主导</span><span className="agent-dot">Agent 主导</span><span className="hybrid-dot">人机协同</span><span className="future-dot">未来重构路径</span></div>
    </SlideShell>
  );
}

const harnessLayers = [["业务场景层", "哪个流程最值得先改？", "招聘 · 薪酬 · 绩效 · 培训 · 组织诊断"], ["Harness 执行层", "哪些动作交给 Agent？", "任务拆解 · 工具调用 · 流程推进 · 异常升级"], ["组织上下文层", "哪些知识必须沉淀？", "岗位 · 能力 · 绩效 · 文化事件 · 反馈样本"], ["治理与评测层", "如何证明有效、安全、公平？", "权限 · 审计 · Eval · 人工回退 · 持续调优"]];
function SlideNineteen() {
  return (
    <SlideShell page="S19" eyebrow="HR HARNESS" className="hr-harness-slide">
      <Title compact kicker="第二张地图：Harness" copy="不是 HR 系统加一个 AI 助手，而是把流程变成可执行、可评估、可进化的组织能力。">HR Harness，让流程成为<span className="neon-inline">组织能力</span></Title>
      <div className="layer-stack">{harnessLayers.map(([a, b, c], i) => <div className={`layer l${i + 1}`} key={a}><span>0{i + 1}</span><h3>{a}</h3><b>{b}</b><p>{c}</p></div>)}</div>
      <div className="layer-flow"><span>业务意图</span><i>↓</i><span>稳定执行</span><i>↓</i><span>企业判断力</span><i>↓</i><span>可信治理</span></div>
    </SlideShell>
  );
}

const evalMetrics = [["周期", "端到端是否缩短"], ["完成率", "是否形成任务闭环"], ["审计通过率", "是否有独立校验"], ["人工接管率", "异常原因是否记录"], ["规则写回率", "纠错是否沉淀"], ["组织影响", "人的角色是否上移"]];
function SlideTwenty() {
  return (
    <SlideShell page="S20" eyebrow="EVALUATION SYSTEM" className="eval-slide">
      <Title kicker="如何判断一条流程进入 AI-Native" copy="不是看用了多少 AI，而是看流程能否执行、审计、复盘和持续学习。">真正的指标，是<span className="neon-inline">组织学习闭环</span></Title>
      <div className="eval-orbit"><div className="eval-rings"><div className="eval-core"><small>AI-NATIVE FLOW</small><strong>可执行</strong><span>可审计 · 可复盘 · 可学习</span></div>{evalMetrics.map(([a, b], i) => <div className={`eval-node e${i + 1}`} key={a}><span>0{i + 1}</span><b>{a}</b><small>{b}</small></div>)}<i className="orbit-line o1" /><i className="orbit-line o2" /></div><div className="eval-emphasis"><div><strong>周期</strong><span>不是省时，而是端到端瓶颈消失</span></div><div><strong>完成率</strong><span>不是生成，而是动作真实闭环</span></div><div><strong>规则写回率</strong><span>不是纠错，而是组织持续学习</span></div></div></div>
    </SlideShell>
  );
}

const maps = [["Value Chain Map", "哪条价值链正在被 AI 改写？", "找到真实入口"], ["Human-Agent Work Map", "人和 Agent 怎么分工？", "定义协同边界"], ["Harness Map", "哪些流程可变成智能系统？", "建立执行与治理"]];
function SlideTwentyOne() {
  return (
    <SlideShell page="S21" eyebrow="THREE MAPS" className="maps-slide">
      <Title kicker="给 HR 的三张地图" copy="HR 的价值，是让 AI 转型变成可被组织承接的秩序。">看清价值、分工与系统，<span className="neon-inline">才能重构组织</span></Title>
      <div className="map-venn">{maps.map(([a, b, c], i) => <div className={`map-disc m${i + 1}`} key={a}><div className="map-disc-content"><span>0{i + 1}</span><h3>{a}</h3><p>{b}</p><b>{c}</b></div></div>)}<div className="map-core"><small>HR</small><strong>组织秩序</strong></div></div>
      <div className="map-sequence"><span>价值链</span><i>→</i><span>人机分工</span><i>→</i><span>Harness</span><i>→</i><strong>组织能力</strong></div>
    </SlideShell>
  );
}

function SlideTwentyTwo() {
  return (
    <SlideShell page="S22" eyebrow="THE NEXT LEAP" className="closing-slide">
      <div className="closing-copy"><p className="kicker">HR 的下一次跃迁</p><h2>从管理人，<br />到设计<span className="neon-inline">人机协同价值链</span></h2><div className="closing-judgments"><div><span>01</span><b>AI 先改变个人，再暴露组织。</b></div><div><span>02</span><b>AI-Native 的本质，是价值链与生产关系重构。</b></div><div><span>03</span><b>HR 将成为组织智能架构师。</b></div></div></div>
      <div className="closing-visual"><div className="super-worker"><small>SUPER WORKER</small><strong>超级员工</strong><span>个体用好 AI</span></div><div className="hr-bridge"><span>HR</span><b>连接</b><small>角色 · 能力 · 绩效<br />文化 · 信任 · 治理</small></div><div className="super-org"><small>SUPER ORGANIZATION</small><strong>超级组织</strong><span>价值链为 AI 重构</span></div></div>
      <div className="closing-quote">个体用好 AI，会出现超级员工；价值链为 AI 重构，才会出现超级组织。</div>
    </SlideShell>
  );
}

function SlideTwentyThree() {
  return (
    <SlideShell page="S23" eyebrow="THANK YOU" className="ending-slide">
      <div className="ending-content">
        <h2 className="ending-quote">周虽旧邦，<span className="neon-inline">其命维新</span></h2>
        <p className="ending-thanks neon-title">谢谢</p>
      </div>
      <p className="ending-source">《诗经·大雅·文王》</p>
    </SlideShell>
  );
}

const slideComponents = [Cover, SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen, SlideEleven, SlideTwelve, SlideThirteen, SlideFourteen, SlideFifteen, SlideSixteen, SlideSeventeen, SlideEighteen, SlideNineteen, SlideTwenty, SlideTwentyOne, SlideTwentyTwo, SlideTwentyThree];

export function App() {
  const initial = Math.max(0, slides.findIndex(s => `#${s.id}` === window.location.hash));
  const [active, setActive] = useState(initial < 0 ? 0 : initial);
  const CurrentSlide = slideComponents[active];

  useEffect(() => {
    const handleKey = event => {
      if (["ArrowRight", " ", "PageDown"].includes(event.key)) { event.preventDefault(); setActive(v => Math.min(slides.length - 1, v + 1)); }
      if (["ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); setActive(v => Math.max(0, v - 1)); }
      if (event.key === "Home") setActive(0);
      if (event.key === "End") setActive(slides.length - 1);
      if (event.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    history.replaceState(null, "", `#${slides[active].id}`);
  }, [active]);

  return (
    <main className="deck-shell">
      <div className="stage"><CurrentSlide key={slides[active].id} /></div>
      <nav className="deck-nav" aria-label="演示页面导航">
        <button className="nav-arrow" onClick={() => setActive(v => Math.max(0, v - 1))} disabled={active === 0} aria-label="上一页">‹</button>
        <button className="nav-arrow" onClick={() => setActive(v => Math.min(slides.length - 1, v + 1))} disabled={active === slides.length - 1} aria-label="下一页">›</button>
      </nav>
    </main>
  );
}
