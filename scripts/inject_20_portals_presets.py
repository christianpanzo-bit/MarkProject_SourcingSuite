import json
import re

with open("./src/data/countryJobsData.ts", "r") as f:
    code = f.read()

# Define comprehensive 20-portal arrays for key countries
US_PORTALS = """    jobSites: [
      { name: 'Indeed US', url: 'https://www.indeed.com', category: 'General', description: 'Largest employment search engine in the US covering all industries and levels.' },
      { name: 'LinkedIn Jobs US', url: 'https://www.linkedin.com/jobs', category: 'Executive & Professional', description: 'Premier professional networking and corporate recruitment portal.' },
      { name: 'Glassdoor US', url: 'https://www.glassdoor.com', category: 'General', description: 'Job listings paired with company culture ratings, salary reviews, and interview insights.' },
      { name: 'ZipRecruiter', url: 'https://www.ziprecruiter.com', category: 'General', description: 'AI-powered job marketplace connecting employers and job seekers across the US.' },
      { name: 'Dice Tech', url: 'https://www.dice.com', category: 'Tech & IT', description: 'Premier tech, engineering, cloud infrastructure, and IT candidate sourcing platform.' },
      { name: 'USAJOBS', url: 'https://www.usajobs.gov', category: 'Government', description: 'Official United States Federal government civil service and defense job portal.' },
      { name: 'Upwork US Remote', url: 'https://www.upwork.com', category: 'Remote & Freelance', description: 'Leading freelance talent platform for remote contractors, developers, and designers.' },
      { name: 'Wellfound (AngelList)', url: 'https://wellfound.com', category: 'Niche & Startup', description: 'Premier startup job board connecting talent with seed-stage to Series E technology companies.' },
      { name: 'Monster US', url: 'https://www.monster.com', category: 'General', description: 'Established national job search portal with resume posting and career advice services.' },
      { name: 'CareerBuilder', url: 'https://www.careerbuilder.com', category: 'General', description: 'Large employment platform providing AI candidate matching and salary data.' },
      { name: 'SimplyHired', url: 'https://www.simplyhired.com', category: 'General', description: 'Job search aggregator covering millions of local and national job vacancies.' },
      { name: 'FlexJobs', url: 'https://www.flexjobs.com', category: 'Remote & Freelance', description: 'Hand-screened remote, hybrid, and flexible work opportunity directory.' },
      { name: 'We Work Remotely', url: 'https://weworkremotely.com', category: 'Tech & IT', description: 'Largest global remote work community for tech, programming, and design roles.' },
      { name: 'Turing AI Tech', url: 'https://www.turing.com', category: 'Tech & IT', description: 'AI-driven platform matching vetted remote software developers with US firms.' },
      { name: 'Toptal Elite Talent', url: 'https://www.toptal.com', category: 'Tech & IT', description: 'Exclusive network for top 3% freelance developers, designers, and finance experts.' },
      { name: 'Michael Page US', url: 'https://www.michaelpage.com', category: 'Executive & Professional', description: 'Global executive search and professional recruitment consultancy for management roles.' },
      { name: 'Hays US', url: 'https://www.hays.com', category: 'Executive & Professional', description: 'Specialist recruitment agency covering technology, finance, healthcare, and engineering.' },
      { name: 'Adecco USA', url: 'https://www.adeccousa.com', category: 'General', description: 'Temporary staffing and permanent placement service across industrial and commercial sectors.' },
      { name: 'Robert Half US', url: 'https://www.roberthalf.com', category: 'Executive & Professional', description: 'Specialized accounting, finance, technology, and legal talent recruitment agency.' },
      { name: 'Jooble US', url: 'https://us.jooble.org', category: 'General', description: 'International job aggregator indexing vacancies across thousands of US corporate career pages.' }
    ],"""

PH_PORTALS = """    jobSites: [
      { name: 'JobStreet Philippines', url: 'https://www.jobstreet.com.ph', category: 'General', description: 'Dominant employment portal in the Philippines for corporate, BPO, and technical vacancies.' },
      { name: 'OnlineJobs.ph', url: 'https://www.onlinejobs.ph', category: 'Remote & Freelance', description: 'Largest portal dedicated to hiring Filipino virtual assistants, remote developers, and staff.' },
      { name: 'Kalibrr', url: 'https://www.kalibrr.com', category: 'Tech & IT', description: 'AI-driven recruitment and skill testing platform popular among tech startups and top employers.' },
      { name: 'Foundit Philippines (Monster)', url: 'https://www.foundit.com.ph', category: 'Executive & Professional', description: 'Major BPO, IT, and corporate recruitment board in the Philippines.' },
      { name: 'PhilJobNet (DOLE)', url: 'https://philjobnet.gov.ph', category: 'Government', description: 'Official Department of Labor and Employment (DOLE) national job matching portal.' },
      { name: 'Civil Service Commission (CSC)', url: 'https://www.csc.gov.ph', category: 'Government', description: 'Official Philippine civil service examination and public sector job opening directory.' },
      { name: 'Bossjob Philippines', url: 'https://bossjob.ph', category: 'General', description: 'Chat-first recruitment app connecting candidates directly with hiring managers in PH.' },
      { name: 'LinkedIn Jobs PH', url: 'https://www.linkedin.com/jobs/philippines-jobs', category: 'Executive & Professional', description: 'Professional networking and corporate executive talent search in Manila, Cebu & Davao.' },
      { name: 'Indeed Philippines', url: 'https://ph.indeed.com', category: 'General', description: 'Global job search engine aggregating thousands of Philippine employment listings.' },
      { name: 'Workabroad.ph', url: 'https://www.workabroad.ph', category: 'Niche & Industry', description: 'POEA-licensed overseas job portal for Filipino skilled workers and overseas personnel (OFW).' },
      { name: 'Upwork Philippines', url: 'https://www.upwork.com', category: 'Remote & Freelance', description: 'Primary platform for Filipino freelancers, software engineers, and digital marketers.' },
      { name: 'Remoteco Philippines', url: 'https://remoteco.com', category: 'Remote & Freelance', description: 'Curated remote job platform connecting global employers with Philippines-based talent.' },
      { name: 'FreeUp', url: 'https://freeup.net', category: 'Remote & Freelance', description: 'Vetted freelance network featuring top Filipino virtual assistants and web developers.' },
      { name: 'BPO Career Hub', url: 'https://www.bpocareerhub.com', category: 'Niche & Industry', description: 'Dedicated recruitment channel for Business Process Outsourcing and call center roles.' },
      { name: 'Mynimo', url: 'https://www.mynimo.com', category: 'General', description: 'Leading regional job portal catering specifically to Visayas and Mindanao (Cebu, Davao, Iloilo).' },
      { name: 'Jora Philippines', url: 'https://ph.jora.com', category: 'General', description: 'Fast job search engine indexing Philippine employment sources and employer sites.' },
      { name: 'Joblum Philippines', url: 'https://ph.joblum.com', category: 'General', description: 'Comprehensive job directory featuring corporate, retail, and engineering openings.' },
      { name: 'Virtual Staff PH', url: 'https://www.virtualstaff.ph', category: 'Remote & Freelance', description: 'Direct hire platform connecting international businesses with remote staff in the Philippines.' },
      { name: 'Cyberbacker', url: 'https://cyberbacker.com', category: 'Remote & Freelance', description: 'Specialized virtual assistant management and remote sourcing platform in PH.' },
      { name: 'BestJobs Philippines', url: 'https://www.bestjobs.ph', category: 'General', description: 'Established job vacancy directory with candidate resume search capabilities.' }
    ],"""

CA_PORTALS = """    jobSites: [
      { name: 'Canada Job Bank', url: 'https://www.jobbank.gc.ca', category: 'Government', description: 'Official Government of Canada employment portal with LMIA job posting information.' },
      { name: 'Indeed Canada', url: 'https://ca.indeed.com', category: 'General', description: 'Canadas largest online employment aggregator across all 10 provinces and territories.' },
      { name: 'LinkedIn Jobs Canada', url: 'https://www.linkedin.com/jobs/canada-jobs', category: 'Executive & Professional', description: 'Top professional networking and corporate recruitment portal in Canada.' },
      { name: 'Workopolis', url: 'https://www.workopolis.com', category: 'General', description: 'Established Canadian career site providing job search and industry employment advice.' },
      { name: 'Eluta.ca', url: 'https://www.eluta.ca', category: 'General', description: 'Official job search engine powered by Canadas Top 100 Employers project.' },
      { name: 'Glassdoor Canada', url: 'https://www.glassdoor.ca', category: 'General', description: 'Job listings with employee salary reviews, company ratings, and culture insights.' },
      { name: 'ZipRecruiter Canada', url: 'https://www.ziprecruiter.ca', category: 'General', description: 'AI job marketplace connecting Canadian job seekers with top regional employers.' },
      { name: 'Monster Canada', url: 'https://www.monster.ca', category: 'General', description: 'National career portal offering candidate resume databases and career tools.' },
      { name: 'CareerBeacon', url: 'https://www.careerbeacon.com', category: 'General', description: 'Leading job portal serving Atlantic Canada (Nova Scotia, New Brunswick, NL, PEI).' },
      { name: 'Techjobs.ca', url: 'https://www.techjobs.ca', category: 'Tech & IT', description: 'Dedicated technology recruitment portal for software, AI, and IT roles across Canada.' },
      { name: 'Communitech Job Board', url: 'https://jobs.communitech.ca', category: 'Tech & IT', description: 'Kitchener-Waterloo tech corridor innovation hub job board.' },
      { name: 'Toronto Tech Jobs', url: 'https://www.torontotechjobs.com', category: 'Tech & IT', description: 'Sourcing portal for Greater Toronto Area software engineering and AI startups.' },
      { name: 'BIV Jobs Vancouver', url: 'https://biv.com/jobs', category: 'Executive & Professional', description: 'Business in Vancouver executive and professional recruitment platform.' },
      { name: 'Randstad Canada', url: 'https://www.randstad.ca', category: 'Executive & Professional', description: 'Leading Canadian staffing agency for engineering, finance, IT, and skilled trades.' },
      { name: 'Adecco Canada', url: 'https://www.adecco.ca', category: 'General', description: 'National workforce solutions provider for office, industrial, and temporary roles.' },
      { name: 'Michael Page Canada', url: 'https://www.michaelpage.ca', category: 'Executive & Professional', description: 'Specialist executive search firm for mid-to-senior level Canadian professionals.' },
      { name: 'Robert Half Canada', url: 'https://www.roberthalf.ca', category: 'Executive & Professional', description: 'Accounting, finance, technology, and legal talent placement consultancy.' },
      { name: 'Upwork Canada', url: 'https://www.upwork.com', category: 'Remote & Freelance', description: 'Global remote contractor and freelance marketplace popular in Canada.' },
      { name: 'FlexJobs Canada', url: 'https://www.flexjobs.com', category: 'Remote & Freelance', description: 'Curated directory for flexible, remote, and hybrid employment in Canada.' },
      { name: 'Jooble Canada', url: 'https://ca.jooble.org', category: 'General', description: 'Aggregate search engine indexing corporate career pages across Canada.' }
    ],"""

GB_PORTALS = """    jobSites: [
      { name: 'Reed UK', url: 'https://www.reed.co.uk', category: 'General', description: 'Major UK recruitment website offering thousands of vacancies across all sectors.' },
      { name: 'CV-Library', url: 'https://www.cv-library.co.uk', category: 'General', description: 'Independent job board with extensive UK candidate CV database.' },
      { name: 'Civil Service Jobs UK', url: 'https://www.civilservicejobs.service.gov.uk', category: 'Government', description: 'Official UK government public sector and civil service vacancy portal.' },
      { name: 'Indeed UK', url: 'https://uk.indeed.com', category: 'General', description: 'Largest job aggregator in the United Kingdom.' },
      { name: 'LinkedIn Jobs UK', url: 'https://www.linkedin.com/jobs/uk-jobs', category: 'Executive & Professional', description: 'Premier professional network and corporate hiring channel in Great Britain.' },
      { name: 'Totaljobs', url: 'https://www.totaljobs.com', category: 'General', description: 'Major UK career hub featuring job matching tools and salary data.' },
      { name: 'CWJobs Tech', url: 'https://www.cwjobs.co.uk', category: 'Tech & IT', description: 'Leading UK tech and IT recruitment platform for software developers and cybersecurity.' },
      { name: 'Glassdoor UK', url: 'https://www.glassdoor.co.uk', category: 'General', description: 'UK job vacancies paired with workplace reviews and salary transparency.' },
      { name: 'Monster UK', url: 'https://www.monster.co.uk', category: 'General', description: 'National job portal with resume database search for UK employers.' },
      { name: 'Jobsite UK', url: 'https://www.jobsite.co.uk', category: 'General', description: 'Long-standing UK recruitment portal for engineering, IT, and retail.' },
      { name: 'Michael Page UK', url: 'https://www.michaelpage.co.uk', category: 'Executive & Professional', description: 'Executive search firm for UK corporate finance, legal, and tech leadership.' },
      { name: 'Hays UK', url: 'https://www.hays.co.uk', category: 'Executive & Professional', description: 'Specialist UK recruitment agency for technology, construction, and healthcare.' },
      { name: 'Adecco UK', url: 'https://www.adecco.co.uk', category: 'General', description: 'UK temporary staffing and permanent commercial recruitment agency.' },
      { name: 'Randstad UK', url: 'https://www.randstad.co.uk', category: 'Executive & Professional', description: 'HR solutions provider covering UK education, tech, healthcare, and engineering.' },
      { name: 'Otta UK Tech', url: 'https://otta.com', category: 'Tech & IT', description: 'Curated tech startup job board matching developers with high-growth UK firms.' },
      { name: 'Technojobs UK', url: 'https://www.technojobs.co.uk', category: 'Tech & IT', description: 'Specialist IT and technical contracting job board in the UK.' },
      { name: 'Upwork UK', url: 'https://www.upwork.com', category: 'Remote & Freelance', description: 'Global freelance talent marketplace used extensively by UK contractors.' },
      { name: 'EURES UK / Europe', url: 'https://eures.ec.europa.eu', category: 'Government', description: 'European job mobility portal for international candidate recruitment.' },
      { name: 'Jooble UK', url: 'https://uk.jooble.org', category: 'General', description: 'UK job search aggregator indexing employer career portals.' },
      { name: 'FlexJobs UK', url: 'https://www.flexjobs.com', category: 'Remote & Freelance', description: 'Screened remote and flexible employment directory for UK workers.' }
    ],"""

DE_PORTALS = """    jobSites: [
      { name: 'StepStone Germany', url: 'https://www.stepstone.de', category: 'General', description: 'Leading corporate job portal in Germany for professionals and executives.' },
      { name: 'XING Jobs', url: 'https://www.xing.com/jobs', category: 'Executive & Professional', description: 'Premier DACH regional professional networking and recruitment platform.' },
      { name: 'Bundesagentur für Arbeit', url: 'https://www.arbeitsagentur.de/jobsuche', category: 'Government', description: 'Official Federal Employment Agency of Germany public job portal.' },
      { name: 'Indeed Deutschland', url: 'https://de.indeed.com', category: 'General', description: 'Largest job search engine aggregating vacancies across Germany.' },
      { name: 'LinkedIn Jobs Germany', url: 'https://www.linkedin.com/jobs/germany-jobs', category: 'Executive & Professional', description: 'Global professional networking and tech recruitment portal in Germany.' },
      { name: 'Meinestadt.de', url: 'https://www.meinestadt.de/deutschland/jobs', category: 'General', description: 'Regional job portal focusing on local German municipal employment.' },
      { name: 'Kimeta.de', url: 'https://www.kimeta.de', category: 'General', description: 'German job search engine scanning corporate websites and newspaper listings.' },
      { name: 'Hays Deutschland', url: 'https://www.hays.de', category: 'Executive & Professional', description: 'Top recruitment firm for IT, engineering, finance, and healthcare in Germany.' },
      { name: 'Michael Page Germany', url: 'https://www.michaelpage.de', category: 'Executive & Professional', description: 'Executive search firm for mid-to-senior management across DACH.' },
      { name: 'Gulp.de', url: 'https://www.gulp.de', category: 'Tech & IT', description: 'Specialized DACH region portal for IT freelancers and engineering contractors.' },
      { name: 'Glassdoor Deutschland', url: 'https://www.glassdoor.de', category: 'General', description: 'Job listings with employee salary ratings and employer reviews.' },
      { name: 'Monster Deutschland', url: 'https://www.monster.de', category: 'General', description: 'Established career portal with candidate resume database in Germany.' },
      { name: 'Adecco Germany', url: 'https://www.adecco.de', category: 'General', description: 'Staffing agency for industrial, office, and skilled trade placements.' },
      { name: 'Randstad Deutschland', url: 'https://www.randstad.de', category: 'Executive & Professional', description: 'Major German HR service provider for permanent and temporary staffing.' },
      { name: 'Get-in-IT Germany', url: 'https://www.get-in-it.de', category: 'Tech & IT', description: 'Dedicated sourcing platform for IT graduates and junior software engineers.' },
      { name: 'Honeypot.io Germany', url: 'https://www.honeypot.io', category: 'Tech & IT', description: 'Developer-focused reverse recruiting platform popular in Berlin and Munich.' },
      { name: 'Jooble Deutschland', url: 'https://de.jooble.org', category: 'General', description: 'Job aggregator indexing corporate career sites in Germany.' },
      { name: 'Upwork Germany', url: 'https://www.upwork.com', category: 'Remote & Freelance', description: 'Freelance platform widely used for remote software developers and designers.' },
      { name: 'EURES Deutschland', url: 'https://eures.ec.europa.eu', category: 'Government', description: 'European cross-border job mobility and employment network.' },
      { name: 'FlexJobs Germany', url: 'https://www.flexjobs.com', category: 'Remote & Freelance', description: 'Directory for flexible, remote, and hybrid employment opportunities.' }
    ],"""

IN_PORTALS = """    jobSites: [
      { name: 'Naukri.com', url: 'https://www.naukri.com', category: 'General', description: 'Indias largest job portal with millions of registered job seekers and corporate recruiters.' },
      { name: 'Foundit India (Monster)', url: 'https://www.foundit.in', category: 'General', description: 'Major employment board covering IT, banking, manufacturing, and healthcare.' },
      { name: 'LinkedIn Jobs India', url: 'https://www.linkedin.com/jobs/india-jobs', category: 'Executive & Professional', description: 'Premier professional network and corporate tech sourcing portal in India.' },
      { name: 'National Career Service (NCS)', url: 'https://www.ncs.gov.in', category: 'Government', description: 'Official Ministry of Labour & Employment government job portal in India.' },
      { name: 'Indeed India', url: 'https://in.indeed.com', category: 'General', description: 'Top international job search engine aggregating Indian employer vacancies.' },
      { name: 'Shine.com', url: 'https://www.shine.com', category: 'General', description: 'Leading Indian career portal offering AI job matching and resume services.' },
      { name: 'Freshersworld', url: 'https://www.freshersworld.com', category: 'Niche & Industry', description: 'Indias #1 job portal for campus recruitment, fresh graduates, and entry-level IT roles.' },
      { name: 'TimesJobs', url: 'https://www.timesjobs.com', category: 'General', description: 'Employment portal operated by Times Group covering corporate and tech roles.' },
      { name: 'Instahyre', url: 'https://www.instahyre.com', category: 'Tech & IT', description: 'AI-driven talent sourcing platform connecting top software engineers with companies.' },
      { name: 'Cutshort', url: 'https://cutshort.io', category: 'Tech & IT', description: 'AI tech recruitment platform popular among Indian startups and unicorns.' },
      { name: 'Wellfound India', url: 'https://wellfound.com/location/india', category: 'Niche & Startup', description: 'Startup job board connecting developers with high-growth Indian tech firms.' },
      { name: 'Hirist', url: 'https://www.hirist.tech', category: 'Tech & IT', description: 'Exclusive job board for high-end tech, AI, mobile, and software development roles.' },
      { name: 'IIMjobs', url: 'https://www.iimjobs.com', category: 'Executive & Professional', description: 'Exclusive job portal for management graduates, MBA alumni, and executive talent.' },
      { name: 'Glassdoor India', url: 'https://www.glassdoor.co.in', category: 'General', description: 'Job listings with employee salary ratings and company reviews.' },
      { name: 'Turing India Remote', url: 'https://www.turing.com', category: 'Tech & IT', description: 'Platform matching Indian software engineers with US and international companies.' },
      { name: 'Upwork India', url: 'https://www.upwork.com', category: 'Remote & Freelance', description: 'Primary online freelance and remote contracting marketplace in India.' },
      { name: 'Jooble India', url: 'https://in.jooble.org', category: 'General', description: 'Search engine aggregating corporate recruitment listings in India.' },
      { name: 'Michael Page India', url: 'https://www.michaelpage.co.in', category: 'Executive & Professional', description: 'Executive search agency for leadership roles in Mumbai, Delhi NCR, and Bengaluru.' },
      { name: 'Randstad India', url: 'https://www.randstad.in', category: 'Executive & Professional', description: 'Workforce management and specialized recruitment consultancy in India.' },
      { name: 'WorkIndia', url: 'https://www.workindia.in', category: 'General', description: 'Blue-collar and entry-level workforce recruitment platform serving Indian metros.' }
    ],"""

# Substitute presets for US, PH, CA, GB, DE, IN
def replace_preset_job_sites(preset_code, portals_text, source_code):
    pattern = rf"(countryCode:\s*'{preset_code}'.*?jobSites:\s*\[).*?(\]\s*,)"
    return re.sub(pattern, rf"\1\n{portals_text.strip()}\n    \2", source_code, flags=re.DOTALL)

updated = replace_preset_job_sites('US', US_PORTALS, code)
updated = replace_preset_job_sites('PH', PH_PORTALS, updated)
updated = replace_preset_job_sites('CA', CA_PORTALS, updated)
updated = replace_preset_job_sites('GB', GB_PORTALS, updated)
updated = replace_preset_job_sites('DE', DE_PORTALS, updated)
updated = replace_preset_job_sites('IN', IN_PORTALS, updated)

with open("./src/data/countryJobsData.ts", "w") as f:
    f.write(updated)

print("Presets in countryJobsData.ts successfully updated with 20 portals each!")
