/* ===========================================================================
   DOCUMENTS — this is the only list you maintain.

     title  : what shows in the side rail
     date   : free text — "2026", "July 2026", "July 15, 2026", whatever
              suits the document. Shows on its own line.
     author : person or office. Wraps to two lines, then truncates with
              an ellipsis, so long office names are safe to type in full.
     file  : SharePoint link, or a local path like "docs/name.pdf".
             Leave as "" and the thumbnail opens a "not linked yet" note.
     thumb : local image path like "thumb/name.png".
             Leave as "" and a generic page graphic is drawn instead.
             Landscape images sit as a banner above the text. Portrait
             images (report covers, 8.5x11 screengrabs) are detected
             automatically and fill the whole card, with the text on a
             white scrim across the bottom. Add  portrait:true  to an
             entry to force that treatment on a squarer image.

   SharePoint tip: use Copy link from the document library, then delete
   everything from the "?" onward. Keep the quotes.
   =========================================================================== */
window.DOCS = {
"SU_FY26": {
  title:"Entering Student Survey: Summary Findings",
  date:"September 2026",
  author:"Suffolk OIRA",
  file:"files/oiradeck.pdf",
  thumb:"thumb/FYdata.png"
},

  "SoHE2025": {
  title:"The State of Higher Education, 2025",
  date:"2025",
  author:"Gallup, Lumina Foundation",
  file:"files/GallupLumniaStateofHigherEd2025.pdf",
  thumb:"thumb/State-of-Higher-Education-2025-thumbnail.png"
},
"fafsa": {
  title:"New Lower Earnings Indicator on the FAFSA® form",
  date:"March 2026",
  author:"Federal Student Aid, U.S. DOE",
  file:"https://fsapartners.ed.gov/knowledge-center/library/electronic-announcements/2025-12-03/new-lower-earnings-indicator-fafsar-form",
  thumb:"thumb/fafsa.png"
},
"facattitudes": {
  title:"The Integration of Career Readiness Into the Curriculum",
  date:"April 2024",
  author:"AAC&U, NACE",
  file:"files/careerreadinessfacultyattitutdes.pdf",
  thumb:"thumb/facattitudes.png"
},
"NACE2024studentsurvey": {
  title:"The 2024 Student Survey Report",
  date:"September 2024",
  author:"NACE",
  file:"files/NACE2024studentsurvey.pdf",
  thumb:"thumb/NACE2024studentsurvey.png"
},

"nacecompetency": {
  title:"The 2024 Student Survey Report",
  date:"September 2024",
  author:"NACE",
  file:"https://www.naceweb.org/career-readiness/competencies/career-readiness-defined/#competencies",
  thumb:"thumb/nacecompetencies.png"
},


"soares": {
  title:"A systematic review on career interventions...",
  date:"2022",
  author:"Soares, Carvalho, & Daniela Silva",
  file:"files/soares.pdf",
  thumb:"thumb/soares.png"
},

"stradaprinciples": {
  title:"Principles for Quality Education-to-Career Guidance",
  date:"March 2025",
  author:"Strada Education",
  file:"files/stradaprinciples.pdf",
  thumb:"thumb/stradaprinciples.png"
},

"stradabeyond": {
  title:"Internships and beyond: Strengthening career value...",
  date:"July 2025",
  author:"Strada Education",
  file:"files/stradabeyond.pdf",
  thumb:"thumb/stradabeyond.png"
},
  };
