/* ==========================================================================
   Illustrative assignments: the single source of truth for the 13 assignment
   cards and their detail views (CE-100: seven, CE-200: six).

   index.html renders every card and every detail pane from this list.
   Edit the text here; do not copy it elsewhere.

   Fields
     id, course, ordinal, total, title, teaser, icon, tags[]
     essentialQuestion, overview
     steps[]                   numbered student steps
     deliverables              what students produce
     learningOutcomes          assignment-level outcomes (proposed)
     rubric[{criterion,weight}] weights total 100
     rubricNote                extra grading guardrail for this assignment (optional)
     connections{before,cp,next}
     example{student,major,text,note}   fictional, always labelled as such
     implementation{access,note}        note shows in a collapsed instructor panel

   Status: proposed curricular design for faculty review. Not adopted policy.
   All student examples are fictional and illustrative.
   ========================================================================== */
window.ASSIGNMENTS = [

/* ============================== CE-100 ============================== */
{
  id:"CE100-01", course:"CE-100", ordinal:1, total:7, icon:"compass",
  title:"Starting Point Reflection & Career Diagnostic",
  teaser:"Examine your interests, strengths, experiences, values, assumptions, and open questions. Capture a starting point for exploration, not a prediction about what you should become.",
  tags:["Self-assessment","Reflection","v1.0 baseline"],
  essentialQuestion:"What do I know about myself and possible futures, and what do I still need to learn?",
  overview:"Students produce a specific, evidence-grounded account of their starting point. They distinguish interests from strengths, interests from occupational stereotypes, and certainty from actual knowledge. The assignment is formative: it establishes questions they can answer through later academic and career investigation.",
  steps:[
    "Inventory meaningful experiences from employment, family responsibilities, classes, activities, volunteering, and personal projects; cite specific examples of skills demonstrated.",
    "Examine values, motivators, interests, educational and practical priorities, and areas of uncertainty without being asked to disclose sensitive circumstances.",
    "Rate current familiarity with professional pathways and confidence in taking career-related actions; briefly explain the ratings.",
    "Identify at least two tentative directions or broad areas of curiosity and distinguish evidence from assumptions.",
    "Write three investigable questions and an initial plan for finding answers during CE-100."
  ],
  deliverables:"Structured Starting Point Reflection; skills-and-evidence inventory; baseline confidence and readiness measures; three exploration questions, stored as early Career Plan inputs.",
  learningOutcomes:"Explain how interests, experiences, values, and circumstances may inform possible directions; substantiate self-descriptions with evidence; identify uncertainties and relevant next inquiries.",
  rubric:[
    {criterion:"Specific evidence from experience",weight:30},
    {criterion:"Depth and nuance of self-analysis",weight:30},
    {criterion:"Quality of investigable questions",weight:25},
    {criterion:"Thoughtful baseline and next steps",weight:15}
  ],
  rubricNote:"No grade for being certain, choosing a particular field, or revealing private information.",
  connections:{
    before:"Orientation or first-semester reflections, where available. No prerequisite is required.",
    cp:"Baseline interests, experiences, confidence, and questions.",
    next:"Shapes choices for CE100-02 pathway investigation and CE100-03 academic exploration. Revisited explicitly in CE200-01."
  },
  example:{student:"Theo",major:"Philosophy",text:"starts with strong intellectual interests but little sense of occupational possibilities. His low confidence is documented as a question to investigate, not treated as a deficit."},
  implementation:{
    access:"Common reflective prompts and brief structured input in Canvas or the Career Plan. Offer private submission, a choice of written or audio reflection where appropriate, and alternative examples for students with little paid work experience. The Career Center can provide a shared rubric; faculty retain meaningful feedback opportunities.",
    note:"Introduce early; use a light-touch formative review to avoid creating a one-credit-course grading bottleneck."
  }
},
{
  id:"CE100-02", course:"CE-100", ordinal:2, total:7, icon:"search",
  title:"Career Pathway & Labor-Market Investigation",
  teaser:"Research and compare three professional roles using credible sources, actual job descriptions, working-condition information, and career-entry evidence rather than stereotypes or assumptions.",
  tags:["Career research","Labor-market literacy","Critical reasoning"],
  essentialQuestion:"What is the work actually like, and which sources should I trust when evaluating it?",
  overview:"Students practice the transferable research skill of making defensible claims about future opportunities from imperfect sources. The exercise combines occupational research with a modest quantitative and financial reasoning component, including compensation, education costs, or required credentials where applicable.",
  steps:[
    "Select at least three plausible professional roles or pathways, including one that broadens their original view.",
    "Gather job responsibilities, entry routes, representative qualifications, working conditions, compensation information, and development possibilities from credible sources.",
    "Analyze at least two real position descriptions and one relevant labor-market information source; note geography, seniority, data limitations, and whether the posting is truly entry-level.",
    "Compare the opportunities against interests, values, educational plans, and practical considerations.",
    "Write a short evidence-based conclusion identifying promising and uncertain aspects of each route."
  ],
  deliverables:"Three-pathway comparison matrix; annotated sources and job descriptions; short evidence brief; questions for future professional conversations.",
  learningOutcomes:"Locate and evaluate relevant career sources; compare occupational responsibilities and qualifications; interpret basic labor-market and compensation evidence; draw qualified conclusions rather than unsupported generalizations.",
  rubric:[
    {criterion:"Accuracy and breadth of research",weight:30},
    {criterion:"Credibility and critique of evidence",weight:25},
    {criterion:"Comparative reasoning",weight:30},
    {criterion:"Clarity, documentation, and open questions",weight:15}
  ],
  connections:{
    before:"CE100-01 provides hypotheses and questions.",
    cp:"Evidence-based pathway descriptions and priority questions.",
    next:"CE100-03 connects roles to academic programs; CE100-04 and CE100-05 test written sources against professional perspectives; CE200-02 converts broad roles into specific WBL targets."
  },
  example:{student:"Jordan",major:"Accounting",text:"discovers meaningful differences among audit, tax, and advisory work rather than treating “accountant” as a single job."},
  implementation:{
    access:"Provide a small library of source categories and sample annotated postings, not canned occupational rankings. Source links and comparison templates can be shared centrally. Faculty may contribute discipline-specific examples. Assess evidence and reasoning, not whether students favor high-paying fields.",
    note:"Integrate financial literacy through interpreting real salary ranges, qualifications, costs, and uncertainties rather than bolting on an unrelated budgeting unit."
  }
},
{
  id:"CE100-03", course:"CE-100", ordinal:3, total:7, icon:"signpost",
  title:"Academic Pathways & Possibilities",
  teaser:"Investigate how Suffolk majors, minors, courses, faculty expertise, and scholarly opportunities connect to your interests and potential futures, without having to choose one “correct” major.",
  tags:["Academic exploration","Faculty engagement","v1.0 input"],
  essentialQuestion:"How can the academic choices I make at Suffolk expand the possibilities I am exploring?",
  overview:"Students explore at least two academic pathways within Suffolk, including the intellectual questions disciplines investigate, the work students do within them, and the possibilities those paths may support. This makes academic departments visible partners in career exploration while respecting that majors do not map one-to-one to occupations.",
  steps:[
    "Identify two academic possibilities, such as majors, minors, concentrations, or complementary course combinations; one should offer a meaningful comparison to their current direction.",
    "Review accurate degree information, representative courses, introductory prerequisites, faculty or departmental expertise, and research, creative, or community-linked opportunities.",
    "Participate in one approved academic engagement: department talk, faculty or advanced-student conversation, showcase, class visit, or other accessible equivalent.",
    "Compare what each pathway would help them learn and how it connects to their interests or researched professional directions.",
    "Identify one or two realistic next steps, such as a course to investigate, faculty contact, advisor discussion, or academic experience to explore."
  ],
  deliverables:"Academic Pathway Map; two-pathway comparison; short engagement summary; student-authored next steps linked to v1.0.",
  learningOutcomes:"Interpret curricular and departmental information; explain academic-professional connections without oversimplification; conduct purposeful academic inquiry; make informed academic exploration choices.",
  rubric:[
    {criterion:"Accurate academic research",weight:25},
    {criterion:"Analysis of intellectual and professional connections",weight:30},
    {criterion:"Engagement and synthesis",weight:20},
    {criterion:"Specificity and feasibility of next steps",weight:25}
  ],
  rubricNote:"Never grade on declaring or changing a major.",
  connections:{
    before:"CE100-01 interests and CE100-02 occupational research.",
    cp:"Academic pathways of interest, faculty contacts, course ideas, and next-step actions.",
    next:"CE100-05 professional conversations provide an outside perspective; CE200-02 checks how coursework and opportunities relate to qualifications and WBL access."
  },
  example:{student:"Amara",major:"Biology",text:"investigates how coursework and faculty research can help her distinguish clinical care from scientific research, then identifies a laboratory connection."},
  implementation:{
    access:"Departments may provide standardized profiles, preexisting lectures, research showcases, or short recorded introductions, rather than individual appointments for every student. Create an accessible event menu and an advisor, faculty, or asynchronous equivalent when events conflict with work or commuting. A central template can minimize instructor variation.",
    note:"Explicitly design meaningful paths for students who are already committed to a major: they can explore adjacent programs, a minor, specializations, faculty research, or alternative applications of their discipline."
  }
},
{
  id:"CE100-04", course:"CE-100", ordinal:4, total:7, icon:"users-round",
  title:"Professional Communities & Associations Investigation",
  teaser:"Explore one professional association: who belongs, what members learn, what student participation costs, and which events or networks would be worth exploring.",
  tags:["Professional landscape","Cost/benefit","Opportunity discovery"],
  essentialQuestion:"How do people in a field learn, connect, and develop beyond their initial jobs?",
  overview:"Students treat a professional association as evidence about how a field organizes itself. The assignment builds practical literacy about membership, conferences, codes of practice, publications, mentorship, credentials, and professional networks. The most important outcome is an informed recommendation, not a pasted directory listing.",
  steps:[
    "Find one credible professional or scholarly association aligned with a pathway under consideration (or a relevant interdisciplinary group).",
    "Research its mission, professions represented, priorities, publications, and professional learning activities.",
    "Determine available student membership and current cost; identify at least one scheduled conference, local chapter gathering, webinar, or comparable event, noting timing and cost where available.",
    "Identify mentorship, student chapters, scholarships, job boards, professional standards, or other relevant resources and evaluate which appear useful.",
    "Recommend a realistic, affordable next point of engagement and explain limitations or unanswered questions; identify a suitable alternative if no association is relevant to the pathway."
  ],
  deliverables:"One-page Professional Community Profile; source links and verified costs and dates; recommended engagement step; short cost-benefit rationale.",
  learningOutcomes:"Research professional communities; evaluate access and value; interpret logistical and cost data accurately; identify feasible ways to build field-specific knowledge and relationships.",
  rubric:[
    {criterion:"Accurate and documented investigation",weight:30},
    {criterion:"Evaluation of substantive benefits and limitations",weight:30},
    {criterion:"Realistic access and cost assessment",weight:20},
    {criterion:"Actionable recommendation",weight:20}
  ],
  connections:{
    before:"CE100-02 identifies target fields; CE100-03 frames disciplinary communities.",
    cp:"Professional organizations and possible future contacts and events.",
    next:"CE100-05 may use an association event or member conversation; CE200-05 may turn an identified community into targeted outreach."
  },
  example:{student:"Samira",major:"Political Science",text:"compares the networks around local government, policy, and public affairs; an association event becomes one possible way to learn about the field and meet practitioners.",note:"Illustrative curricular extension to a fictional scenario; not an event described as completed in the original journey."},
  implementation:{
    access:"Supply criteria for legitimate associations but avoid a closed mandatory list. Accept fields that use communities of practice rather than formal associations. Research-only participation suffices; do not require paid membership, travel, conference registration, or attendance.",
    note:"Encourage students to check the organization's website for current dates and pricing and record when information was accessed."
  }
},
{
  id:"CE100-05", course:"CE-100", ordinal:5, total:7, icon:"messages-square",
  title:"Professional Conversation & Exploration Event",
  teaser:"Prepare for, participate in, and reflect on authentic professional engagement, including an informational interview and a campus career exploration event or approved equivalent.",
  tags:["Professional outreach","Campus engagement","Relationships"],
  essentialQuestion:"What can I learn by asking professionals thoughtful questions that research alone cannot answer?",
  overview:"Students practice initiating professional relationships and evaluating first-person perspectives. The assignment intentionally aligns with Career Center and department programming, but academic credit comes from preparation, purposeful participation, and synthesis rather than event attendance alone.",
  steps:[
    "Identify a relevant professional, alumni contact, or other approved person and prepare a respectful personalized message and thoughtful questions.",
    "Initiate outreach and conduct at least one substantive informational interview or comparable approved career-focused conversation; provide a fair alternative if attempts do not yield a response.",
    "Choose and attend one approved campus career or exploration event, employer or alumni talk, or comparable accessible equivalent; prepare a question or engagement goal in advance.",
    "Compare the insights from conversations and events with occupational research, noting useful perspectives and possible limits or biases.",
    "Send appropriate thanks or follow-up and identify one contact or avenue worth maintaining."
  ],
  deliverables:"Outreach message and question set; interview or conversation summary; event preparation-and-reflection record; appropriate follow-up and key insights for v1.0.",
  learningOutcomes:"Initiate ethical, professional outreach; pose informed questions; communicate respectfully; interpret experiential perspectives critically; act on new information.",
  rubric:[
    {criterion:"Preparation and quality of questions",weight:25},
    {criterion:"Initiative and professional communication",weight:25},
    {criterion:"Depth of synthesis and critical reflection",weight:35},
    {criterion:"Appropriate follow-up and next steps",weight:15}
  ],
  rubricNote:"Do not grade the student's popularity or whether professionals respond.",
  connections:{
    before:"CE100-02, CE100-03, and CE100-04 suggest people and questions.",
    cp:"At least one professional perspective, new relationships, and updated priorities.",
    next:"CE100-06 sharpens personal introduction and resume; CE200-05 revisits and expands the relationship network for opportunity pursuit."
  },
  example:{student:"Maya",major:"Psychology",text:"learns through an alumni conversation about distinctions between clinical counseling and bachelor's-level behavioral-health work; that insight changes her next academic and experience choices."},
  implementation:{
    access:"Coordinate a semesterly eligible-event calendar with Career Communities, departments, and alumni engagement. Offer an equivalent professional conversation or event format for commuters, students who work, and students with access needs. If a professional is unavailable after good-faith outreach, assess preparation plus a guided alternative.",
    note:"Use “Prepare, Engage, Follow through” as a reusable reflection template across both courses; explicitly teach appropriate boundaries and privacy."
  }
},
{
  id:"CE100-06", course:"CE-100", ordinal:6, total:7, icon:"contact-round",
  title:"Foundational Resume & Professional Introduction",
  teaser:"Build a truthful first resume and concise professional introduction that make existing experiences and transferable skills understandable to others.",
  tags:["Professional storytelling","Writing","Oral communication"],
  essentialQuestion:"How can I communicate who I am and what I have done without exaggerating or underselling it?",
  overview:"Students use evidence from their experience inventory to practice presenting themselves to an audience. Unlike CE-200's role-targeted application materials, CE-100 focuses on clarity, accuracy, and the ability to explain specific experiences and developing interests.",
  steps:[
    "Inventory education, jobs, coursework, activities, caregiving, service, projects, and skill evidence that may belong on a foundational resume.",
    "Draft a well-organized resume using accurate accomplishment statements, appropriate language, and accessible formatting.",
    "Receive guided, peer, or rubric-based feedback and revise the resume accordingly.",
    "Write and practice a concise introduction with a natural conversational version and an appropriate audience in mind.",
    "Deliver or record the introduction and reflect on one improvement based on feedback."
  ],
  deliverables:"Foundational resume (draft and revised); short professional introduction; evidence-based skill examples; feedback-and-revision note.",
  learningOutcomes:"Represent experience accurately; translate experience into demonstrable competencies; adapt basic communication to an audience; respond constructively to feedback.",
  rubric:[
    {criterion:"Accuracy and specificity of skill evidence",weight:30},
    {criterion:"Resume organization and clarity",weight:25},
    {criterion:"Effective professional introduction",weight:25},
    {criterion:"Thoughtful incorporation of feedback",weight:20}
  ],
  connections:{
    before:"CE100-01 supplies evidence; CE100-05 supplies audience insight.",
    cp:"Current resume, practiced introduction, transferable-skills inventory.",
    next:"CE200-03 targets resume and professional presence to identified opportunities; CE200-04 builds evidence-based interview stories."
  },
  example:{student:"Elena",major:"English",text:"recognizes that customer communication and shift coordination from her retail job are legitimate evidence of transferable competencies; she also preserves an academic writing sample."},
  implementation:{
    access:"Shared Career Center templates and possible asynchronous resume review scale feedback; keep faculty and peer review lightweight. Permit multiple valid resume formats by discipline and stage. Provide accessible oral-presentation alternatives.",
    note:"Resist treating the first resume as an employer-ready targeted application. That is CE-200 work."
  }
},
{
  id:"CE100-07", course:"CE-100", ordinal:7, total:7, icon:"map", capstone:true,
  title:"Career Exploration Plan (v1.0): Evidence & Next Steps",
  teaser:"Integrate what you learned about yourself, careers, academics, and professional communities into a student-authored plan for what to investigate next.",
  tags:["Synthesis","Evidence-based decisions","Career Plan 1"],
  essentialQuestion:"Given what I have learned, what should I explore, try, and revisit next?",
  overview:"v1.0 is the culminating intellectual product of CE-100, not a duplicate submission of every earlier assignment. Students synthesize findings, choose next experiments, and document their reasoning, including what remains uncertain. The output becomes a living resource for advisers and the student, subject to student-controlled sharing.",
  steps:[
    "Revisit their starting assumptions and identify at least two meaningful changes or confirmations supported by evidence.",
    "Prioritize one or more career and academic possibilities without requiring a single final decision.",
    "Integrate comparative occupational research, academic exploration, and professional conversations, identifying contradictions and information gaps.",
    "Select three specific next actions spanning coursework, relationships, skills, or experience, with realistic timing or checkpoints.",
    "Complete and submit v1.0 using structured fields and links to existing work products rather than reauthoring them wholesale."
  ],
  deliverables:"Career Exploration Plan (v1.0) in the proposed Suffolk Career Plan portal (or equivalent launch workflow); prioritized directions, documented evidence, open questions, and time-bound exploration goals.",
  learningOutcomes:"Synthesize credible career and academic evidence; justify plausible choices; articulate uncertainty responsibly; create feasible, revisable next-step plans.",
  rubric:[
    {criterion:"Quality of evidence integration",weight:30},
    {criterion:"Reasoning and reflection",weight:30},
    {criterion:"Actionable next steps and sequencing",weight:30},
    {criterion:"Completion and organization of v1.0",weight:10}
  ],
  connections:{
    before:"Draws explicitly from CE100-01 through CE100-06.",
    cp:"The final consolidated artifact itself.",
    next:"CE200-01 reopens the plan as a starting point; later v2.0 compares original hypotheses with WBL targets. Faculty and advisers can use student-shared parts of v1.0 for timely opportunities."
  },
  example:{student:"Lena",major:"Marketing",text:"arrives confident about marketing but uses exploration to refine what kinds of roles, environments, and experiences actually appeal to her. v1.0 records an evolving hypothesis, not a fixed identity."},
  implementation:{
    access:"Use a common, brief v1.0 schema so data are interpretable without turning students into form-fillers. Allow selective sharing, clear privacy guidance, and an alternate submission route if the future portal is unavailable at launch.",
    note:"Assess synthesis and reasoning, not the perceived prestige of the chosen field."
  }
},

/* ============================== CE-200 ============================== */
{
  id:"CE200-01", course:"CE-200", ordinal:1, total:6, icon:"clipboard-check",
  title:"Career Readiness Audit & Action Challenge",
  teaser:"Revisit v1.0, identify the obstacles most relevant to your WBL search, and choose two or three concrete actions to strengthen your readiness during the semester.",
  tags:["Reflection to action","Personalized challenge","v2.0 baseline"],
  essentialQuestion:"What could realistically keep me from securing and succeeding in WBL, and what will I do about it now?",
  overview:"Rather than repeating generic self-assessment, students use a short diagnostic to select two or three actions from an approved menu or propose equivalents. Credit is based on defining reasonable commitments, documenting completed actions, and reflecting on results, not on whether confidence rises or circumstances disappear. This is a term-long assignment with an early proposal and a later completion check.",
  steps:[
    "Revisit v1.0 and assess developments in direction, skills, relationships, practical availability, confidence, and timeline for WBL.",
    "Privately identify two or three meaningful challenge areas (for example unfamiliarity with recruiting timelines, limited network, materials quality, interviewing, transportation or scheduling, financial constraints, or uncertainty about qualifying pathways).",
    "Choose two to three concrete and feasible actions from a menu, each related to an identified challenge; obtain an equivalent option when needed.",
    "Complete the actions throughout the semester, recording minimal appropriate evidence such as revised materials, workshop participation plus reflection, outreach documentation, or a feasible alternative-pathway plan.",
    "Compare starting expectations with what the actions revealed and feed outstanding needs into v2.0."
  ],
  actionMenu:"Schedule resume feedback and submit a revised resume; complete a mock interview and revise three examples; attend a networking practice session and thoughtfully engage two people; identify and contact alumni or professionals and complete one exchange; research five real opportunities with deadlines; create an affordable WBL pathway plan with advising; investigate a relevant professional association and one viable event; speak with a campus job supervisor about a potential qualifying project; design a weekly opportunity-search practice.",
  deliverables:"Short readiness diagnostic; selected action commitments with due dates; completion evidence for two or three actions; brief outcomes reflection and updated readiness notes.",
  learningOutcomes:"Evaluate readiness and constraints responsibly; select feasible improvement strategies; execute documented actions; interpret feedback; revise plans without requiring disclosure of sensitive personal information.",
  rubric:[
    {criterion:"Quality of challenge and action alignment",weight:25},
    {criterion:"Feasibility and specificity of plan",weight:15},
    {criterion:"Documented completion of agreed actions",weight:45},
    {criterion:"Constructive reflection and forward planning",weight:15}
  ],
  rubricNote:"Missing external responses or lack of confidence gain should not lower grades when genuine effort and an approved alternative are documented.",
  connections:{
    before:"Reopens CE100-07 v1.0, the CE100-06 initial resume, and prior conversations.",
    cp:"Personalized remaining readiness gaps, completed actions, and next actions.",
    next:"Reinforces CE200-02 through CE200-05 and supports realistic CE200-06 WBL planning."
  },
  example:{student:"Maya",major:"Psychology",text:"rates her internship confidence low and receives additional advising before building her target list. The assignment would let her choose concrete steps, rather than treating a low rating as failure.",note:"Automated scheduling is a future-system illustration, not a guaranteed feature."},
  implementation:{
    access:"Use a short structured menu but permit instructor-approved alternatives. Students can indicate access or timing constraints without disclosing reasons publicly. Events must be available in multiple formats and times.",
    note:"Grade in two checkpoints: action selection near the start; proof and reflection at the end. Clearly articulate the difference between completion of a meaningful action and simply clicking “attended.”"
  }
},
{
  id:"CE200-02", course:"CE-200", ordinal:2, total:6, icon:"list-filter",
  title:"WBL Opportunity Targeting & Qualifications Gap Analysis",
  teaser:"Find real internships or other qualifying experiences, compare their requirements with your evidence and constraints, and identify a realistic strategy to become a stronger candidate.",
  tags:["Opportunity evaluation","Skills gaps","WBL targeting"],
  essentialQuestion:"Which opportunities are genuinely viable for me, and how can I improve my fit?",
  overview:"Students move beyond CE-100's broad occupational investigation to actionable WBL opportunities. They study the five WBL criteria so they can evaluate whether an opportunity is educationally substantive, not just whether it is advertised as an internship.",
  steps:[
    "Identify at least three real candidate experiences, including internships or eligible alternatives appropriate to their situation.",
    "Analyze duties, qualifications, application and approval requirements, recruiting dates, location, compensation, and likely supervision.",
    "Evaluate whether each could meet the five WBL criteria; flag ambiguities requiring confirmation before approval.",
    "Map required skills and experiences against current evidence; prioritize two or three realistic gaps.",
    "Select target opportunities and concrete steps to address the gaps, including a backup WBL pathway."
  ],
  deliverables:"Opportunity tracker with at least three entries, annotated postings or project descriptions, criteria-screening notes, qualifications matrix, gap-closure action plan.",
  learningOutcomes:"Evaluate opportunities against evidence and academic standards; analyze role requirements and personal qualifications; distinguish viable targets from aspirational ones; design a realistic improvement plan.",
  rubric:[
    {criterion:"Quality and relevance of target opportunities",weight:25},
    {criterion:"Accurate WBL-criteria screening",weight:25},
    {criterion:"Skills and qualifications analysis",weight:30},
    {criterion:"Specific achievable next steps",weight:20}
  ],
  connections:{
    before:"CE100-02 career pathways and CE200-01 challenges.",
    cp:"Target pathways, risks, skill gaps, expected WBL term.",
    next:"CE200-03 tailors materials to actual targets; CE200-05 links contacts to opportunity pursuit; CE200-06 creates timelines and contingencies."
  },
  example:{student:"Priya",major:"Computer Science",text:"realizes routine help-desk shifts do not count, then works with her supervisor on the scope of a separate, supervised software development project."},
  implementation:{
    access:"Provide sample approval screens for internships, faculty research, campus jobs, and existing-workplace projects. Where no public posting exists, accept a documented project proposal or research scope.",
    note:"Do not promise that students need to have secured an experience to succeed in the course."
  }
},
{
  id:"CE200-03", course:"CE-200", ordinal:3, total:6, icon:"file-user",
  title:"Targeted Resume, Evidence & Professional Presence",
  teaser:"Turn your foundational resume into strong evidence for a particular opportunity, with credible accomplishment statements and a professional profile or appropriate alternative.",
  tags:["Tailored writing","Skills evidence","Professional identity"],
  essentialQuestion:"How do I demonstrate that my experiences matter to the specific opportunity I am pursuing?",
  overview:"The assignment measures students' ability to interpret employer or WBL-supervisor expectations and communicate relevant qualifications accurately. It is not a cosmetic résumé workshop and should accommodate field-specific portfolios, writing samples, or technical artifacts where appropriate.",
  steps:[
    "Use one CE200-02 target description to identify its most important capabilities and selection signals.",
    "Audit their current resume, course and project evidence, work history, and portfolio material against those expectations.",
    "Write or revise evidence-based accomplishment statements and produce a tailored resume or appropriate professional document.",
    "Create, refine, or critically review a professional online presence, with a non-public alternative when needed.",
    "Obtain feedback, revise materials, and annotate two or three deliberate tailoring choices."
  ],
  deliverables:"Updated master resume; role-targeted resume; professional profile or equivalent; relevant portfolio artifact where appropriate; change rationale and evidence of feedback.",
  learningOutcomes:"Analyze audience and opportunity demands; select accurate evidence of capability; write persuasively without exaggeration; revise meaningfully in response to feedback.",
  rubric:[
    {criterion:"Alignment to actual target requirements",weight:30},
    {criterion:"Specificity and truthfulness of skills evidence",weight:30},
    {criterion:"Clarity, quality, and field appropriateness of materials",weight:25},
    {criterion:"Responsiveness to feedback",weight:15}
  ],
  connections:{
    before:"CE100-06 foundational materials and CE200-02 target analysis.",
    cp:"Current professional documents, target fit, remaining evidence gaps.",
    next:"CE200-04 uses the same examples in interviews; WBL and v3.0 later add verified work accomplishments."
  },
  example:{student:"Nico",major:"Graphic Design",text:"revises a portfolio so hiring audiences can see his design process, not merely a gallery of completed visuals; CE-200 makes that portfolio useful for targeting studios."},
  implementation:{
    access:"Common resume-review supports plus discipline-sensitive options for creative, technical, science, or public affairs applications. A public LinkedIn presence should not be a universal requirement.",
    note:"A revised master resume and one role-specific version are generally sufficient for an assessable one-credit experience."
  }
},
{
  id:"CE200-04", course:"CE-200", ordinal:4, total:6, icon:"mic",
  title:"Application & Interview Simulation",
  teaser:"Complete a realistic application exercise and demonstrate evidence-based interview answers, then use feedback to improve your communication under real selection conditions.",
  tags:["Application practice","Oral communication","Feedback"],
  essentialQuestion:"Can I persuasively and accurately demonstrate my fit when an opportunity asks me to do so?",
  overview:"Students practice actionable selection skills, including adapting to different application formats, explaining qualifications, and responding constructively to feedback. Evaluation addresses demonstrated communication rather than personality or charisma.",
  steps:[
    "Select an appropriate CE200-02 target and identify its likely application and interview expectations.",
    "Draft an authentic application response, targeted statement, or cover letter where suitable to the field.",
    "Prepare an interview evidence bank with three or four experiences using PAR, STAR, or another clear structure.",
    "Participate in a structured mock interview or equivalent simulation and obtain actionable feedback.",
    "Revise the weakest response or application component and explain the improvement."
  ],
  deliverables:"Targeted application response; structured interview example bank; assessed interview performance; revised response and reflection.",
  learningOutcomes:"Interpret selection prompts; select and organize credible examples; communicate professionally in writing and speech; respond to feedback and improve performance.",
  rubric:[
    {criterion:"Application relevance and quality",weight:25},
    {criterion:"Strength and specificity of evidence-based stories",weight:30},
    {criterion:"Clarity and responsiveness during interview",weight:30},
    {criterion:"Meaningful revision",weight:15}
  ],
  connections:{
    before:"CE200-02 target descriptions and CE200-03 tailored materials.",
    cp:"Completed practice, feedback, and development priorities.",
    next:"CE200-05 uses professional introductions in actual settings; CE200-06 translates readiness into an application calendar."
  },
  example:{student:"Jordan",major:"Accounting",text:"practices talking about reliability and analytical reasoning in preparation for audit and advisory recruiting, rather than relying on the assumption that employers will infer those strengths."},
  implementation:{
    access:"Simulations can occur in alternating-week small groups, with trained peer facilitators or structured recorded alternatives. Use a common simple scoring rubric; allow reasonable accommodations.",
    note:"Do not require an actual invitation to interview for course credit."
  }
},
{
  id:"CE200-05", course:"CE-200", ordinal:5, total:6, icon:"network",
  title:"Professional Networking & Opportunity Engagement",
  teaser:"Use a job fair, employer event, professional association gathering, or comparable interaction to pursue real opportunities through preparation, substantive conversations, and follow-up.",
  tags:["Career Center synergy","Networking","Opportunity pursuit"],
  essentialQuestion:"How do I turn professional encounters into informed relationships and actionable opportunities?",
  overview:"The course deliberately leverages Suffolk's career fairs, internship fairs, employer information sessions, alumni programs, and relevant departmental events. Students demonstrate strategic engagement and ethical follow-through; they are not evaluated on offers, introductions granted, or attendance alone.",
  steps:[
    "Select an approved career or internship fair or employer or professional event appropriate to their target field, or arrange an approved substantive alternative.",
    "Research at least two relevant organizations, representatives, or professions and set a specific engagement goal.",
    "Prepare a focused professional introduction and two or three thoughtful questions tailored to a target.",
    "Participate in at least two substantive professional exchanges where feasible (or one substantial guided conversation with an approved equivalent activity).",
    "Complete appropriate follow-up, update a contact and opportunity tracker, and record how the interactions change next actions."
  ],
  deliverables:"Event or interaction plan; researched target list; professional introduction and questions; concise interaction records; follow-up communications; revised contact and opportunity tracker.",
  learningOutcomes:"Identify strategically relevant people and organizations; prepare and communicate professionally; initiate and develop contacts appropriately; translate interactions into informed opportunity actions.",
  rubric:[
    {criterion:"Quality of event and target preparation",weight:25},
    {criterion:"Appropriate active engagement",weight:25},
    {criterion:"Synthesis of professional information",weight:25},
    {criterion:"Relevant follow-up and action planning",weight:25}
  ],
  connections:{
    before:"CE100-05 foundational informational interview and CE100-04 professional communities; CE200-02 target opportunities and CE200-04 practiced introduction.",
    cp:"Contact list, networking steps, leads, and realistic next actions.",
    next:"CE200-06 integrates outreach into a dated WBL strategy; WBL later requires additional intentional network expansion."
  },
  example:{student:"Samira",major:"Political Science",text:"follows up with a public-service alumnus after a panel and uses that conversation to identify agencies and policy offices to approach."},
  implementation:{
    access:"The Career Center and academic departments publish a tagged menu of eligible semester events, including virtual or alternate-time options. Coordinate assignments to existing event calendars without making a single fair mandatory for every student. Avoid grading on number of contacts alone; encourage high-quality, appropriate exchanges.",
    note:"The common “Prepare, Participate, Follow through” template should be shared with CE100-05, but expectations should be more opportunity-directed in CE-200."
  }
},
{
  id:"CE200-06", course:"CE-200", ordinal:6, total:6, icon:"calendar-check", capstone:true,
  title:"Career Readiness Plan (v2.0) & WBL Action Strategy",
  teaser:"Combine target opportunities, professional evidence, contacts, readiness actions, and constraints into a feasible plan for securing and succeeding in a qualifying WBL experience.",
  tags:["Strategic synthesis","WBL readiness","Career Plan 2"],
  essentialQuestion:"What exactly will I pursue, when will I act, and how will I adapt if my first route doesn't work?",
  overview:"v2.0 consolidates learning from the course into a practical opportunity pursuit plan. It includes the student's projected WBL term, plausible alternative routes, and preparation for what meaningful supervised work requires. This bridges search readiness and workplace readiness, and it does not require obtaining a placement before the course ends.",
  steps:[
    "Prioritize target roles and opportunities and state how each could satisfy the five WBL criteria or what needs further verification.",
    "Build a realistic timeline for application, employer outreach, faculty or project approval if needed, follow-up, and likely WBL completion; identify a projected term.",
    "Summarize two or three readiness actions completed in CE200-01 and prioritize remaining skill, experience, or access gaps.",
    "Identify a preferred WBL route and at least one credible backup, including campus work, faculty research, an approved existing-workplace project, or institutional support where appropriate.",
    "Draft provisional WBL learning goals and a plan to seek feedback, build professional relationships beyond a direct supervisor, and document work-based learning; submit v2.0 with links to existing materials."
  ],
  deliverables:"v2.0 Career Readiness Plan in the proposed portal (or equivalent launch workflow); target list and applications and approval calendar; projected WBL term; contingency route; provisional work-learning goals; links to resume, interaction tracker, and readiness evidence.",
  learningOutcomes:"Integrate research, skills evidence, outreach, and constraints into a coherent plan; evaluate WBL fit; sequence and prioritize actions; identify realistic alternatives; anticipate professional responsibilities and learning.",
  rubric:[
    {criterion:"Evidence-based opportunity strategy",weight:30},
    {criterion:"Feasibility, timing, and backup pathways",weight:30},
    {criterion:"Integration of readiness and professional evidence",weight:20},
    {criterion:"Quality of provisional WBL learning goals and v2.0 completion",weight:20}
  ],
  connections:{
    before:"Synthesizes CE200-01 through CE200-05 and builds on CE100-07 v1.0.",
    cp:"Complete student-authored readiness and WBL action plan.",
    next:"Provides an approved starting point for WBL application and project approval; v3.0 later documents actual learning and impact; v4.0 provides the final launch check."
  },
  example:{student:"Marcus",major:"Business Management and Leadership",text:"uses his existing employment as a starting point but identifies a separately scoped, substantive employer project to propose for WBL approval; v2.0 distinguishes qualifying new duties from routine work."},
  implementation:{
    access:"Use structured v2.0 fields with document links and student-controlled information sharing. Incorporate a clear referral path for students without an actionable placement plan; avoid implying that automatic placement or a fully built portal is required for first launch.",
    note:"A credible plan with necessary contingencies merits full course credit even if the student's first internship applications are unsuccessful."
  }
}
];

/* quick sanity check while editing: every rubric must total 100 */
(function(){
  window.ASSIGNMENTS.forEach(function(a){
    var t=a.rubric.reduce(function(n,r){return n+r.weight;},0);
    if(t!==100 && window.console) console.warn("Rubric for "+a.id+" totals "+t+", not 100.");
  });
})();
