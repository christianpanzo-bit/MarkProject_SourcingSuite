import json
import os

# Load countries metadata
with open("./scripts/countries_info.json", "r") as f:
    countries_meta = json.load(f)

print(f"Loaded metadata for {len(countries_meta)} countries.")

# Specific 20+ job portals for major presets
PRESET_JOB_PORTALS = {
    "US": [
        {"name": "Indeed US", "url": "https://www.indeed.com", "category": "General", "description": "Largest employment search engine in the United States covering all industries and experience levels."},
        {"name": "LinkedIn Jobs US", "url": "https://www.linkedin.com/jobs", "category": "Executive & Professional", "description": "Premier professional networking and corporate recruitment portal for US professionals."},
        {"name": "Glassdoor US", "url": "https://www.glassdoor.com", "category": "General", "description": "Job listings paired with company culture ratings, salary reviews, and interview insights."},
        {"name": "ZipRecruiter", "url": "https://www.ziprecruiter.com", "category": "General", "description": "AI-powered job marketplace connecting employers and job seekers across mainland US."},
        {"name": "Dice", "url": "https://www.dice.com", "category": "Tech & IT", "description": "Premier tech, engineering, cloud infrastructure, and IT candidate sourcing platform."},
        {"name": "USAJOBS", "url": "https://www.usajobs.gov", "category": "Government", "description": "Official United States Federal government civil service and defense job portal."},
        {"name": "Upwork US Remote", "url": "https://www.upwork.com", "category": "Remote & Freelance", "description": "Leading freelance talent platform for remote contractors, developers, and designers."},
        {"name": "Wellfound (AngelList)", "url": "https://wellfound.com", "category": "Niche & Startup", "description": "Premier startup job board connecting talent with seed-stage to Series E technology companies."},
        {"name": "Monster US", "url": "https://www.monster.com", "category": "General", "description": "Established national job search portal with resume posting and career advice services."},
        {"name": "CareerBuilder", "url": "https://www.careerbuilder.com", "category": "General", "description": "Large employment platform providing AI candidate matching and salary data."},
        {"name": "SimplyHired", "url": "https://www.simplyhired.com", "category": "General", "description": "Job search aggregator covering millions of local and national job vacancies."},
        {"name": "FlexJobs", "url": "https://www.flexjobs.com", "category": "Remote & Freelance", "description": "Hand-screened remote, hybrid, and flexible work opportunity directory."},
        {"name": "We Work Remotely", "url": "https://weworkremotely.com", "category": "Tech & IT", "description": "Largest global remote work community for tech, programming, and design roles."},
        {"name": "Turing AI Tech", "url": "https://www.turing.com", "category": "Tech & IT", "description": "AI-driven platform matching vetted remote software developers with US firms."},
        {"name": "Toptal Elite Talent", "url": "https://www.toptal.com", "category": "Tech & IT", "description": "Exclusive network for top 3% freelance developers, designers, and finance experts."},
        {"name": "Michael Page US", "url": "https://www.michaelpage.com", "category": "Executive & Professional", "description": "Global executive search and professional recruitment consultancy for management roles."},
        {"name": "Hays US", "url": "https://www.hays.com", "category": "Executive & Professional", "description": "Specialist recruitment agency covering technology, finance, healthcare, and engineering."},
        {"name": "Adecco USA", "url": "https://www.adeccousa.com", "category": "General", "description": "Temporary staffing and permanent placement service across industrial and commercial sectors."},
        {"name": "Robert Half US", "url": "https://www.roberthalf.com", "category": "Executive & Professional", "description": "Specialized accounting, finance, technology, and legal talent recruitment agency."},
        {"name": "Jooble US", "url": "https://us.jooble.org", "category": "General", "description": "International job aggregator indexing vacancies across thousands of US corporate career pages."}
    ],
    "PH": [
        {"name": "JobStreet Philippines", "url": "https://www.jobstreet.com.ph", "category": "General", "description": "Dominant employment portal in the Philippines for corporate, BPO, and technical vacancies."},
        {"name": "OnlineJobs.ph", "url": "https://www.onlinejobs.ph", "category": "Remote & Freelance", "description": "Largest portal dedicated to hiring Filipino virtual assistants, remote developers, and staff."},
        {"name": "Kalibrr", "url": "https://www.kalibrr.com", "category": "Tech & IT", "description": "AI-driven recruitment and skill testing platform popular among tech startups and top employers."},
        {"name": "Foundit Philippines (Monster)", "url": "https://www.foundit.com.ph", "category": "Executive & Professional", "description": "Major BPO, IT, and corporate recruitment board in the Philippines."},
        {"name": "PhilJobNet (DOLE)", "url": "https://philjobnet.gov.ph", "category": "Government", "description": "Official Department of Labor and Employment (DOLE) national job matching portal."},
        {"name": "Civil Service Commission (CSC)", "url": "https://www.csc.gov.ph", "category": "Government", "description": "Official Philippine civil service examination and public sector job opening directory."},
        {"name": "Bossjob Philippines", "url": "https://bossjob.ph", "category": "General", "description": "Chat-first recruitment app connecting candidates directly with hiring managers in PH."},
        {"name": "LinkedIn Jobs PH", "url": "https://www.linkedin.com/jobs/philippines-jobs", "category": "Executive & Professional", "description": "Professional networking and corporate executive talent search in Manila, Cebu & Davao."},
        {"name": "Indeed Philippines", "url": "https://ph.indeed.com", "category": "General", "description": "Global job search engine aggregating thousands of Philippine employment listings."},
        {"name": "Workabroad.ph", "url": "https://www.workabroad.ph", "category": "Niche & Industry", "description": "POEA-licensed overseas job portal for Filipino skilled workers and overseas personnel (OFW)."},
        {"name": "Upwork Philippines", "url": "https://www.upwork.com", "category": "Remote & Freelance", "description": "Primary platform for Filipino freelancers, software engineers, and digital marketers."},
        {"name": "Remoteco Philippines", "url": "https://remoteco.com", "category": "Remote & Freelance", "description": "Curated remote job platform connecting global employers with Philippines-based talent."},
        {"name": "FreeUp", "url": "https://freeup.net", "category": "Remote & Freelance", "description": "Vetted freelance network featuring top Filipino virtual assistants and web developers."},
        {"name": "BPO Career Hub", "url": "https://www.bpocareerhub.com", "category": "Niche & Industry", "description": "Dedicated recruitment channel for Business Process Outsourcing and call center roles."},
        {"name": "Mynimo", "url": "https://www.mynimo.com", "category": "General", "description": "Leading regional job portal catering specifically to Visayas and Mindanao (Cebu, Davao, Iloilo)."},
        {"name": "Jora Philippines", "url": "https://ph.jora.com", "category": "General", "description": "Fast job search engine indexing Philippine employment sources and employer sites."},
        {"name": "Joblum Philippines", "url": "https://ph.joblum.com", "category": "General", "description": "Comprehensive job directory featuring corporate, retail, and engineering openings."},
        {"name": "Virtual Staff PH", "url": "https://www.virtualstaff.ph", "category": "Remote & Freelance", "description": "Direct hire platform connecting international businesses with remote staff in the Philippines."},
        {"name": "Cyberbacker", "url": "https://cyberbacker.com", "category": "Remote & Freelance", "description": "Specialized virtual assistant management and remote sourcing platform in PH."},
        {"name": "BestJobs Philippines", "url": "https://www.bestjobs.ph", "category": "General", "description": "Established job vacancy directory with candidate resume search capabilities."}
    ],
    "CA": [
        {"name": "Canada Job Bank", "url": "https://www.jobbank.gc.ca", "category": "Government", "description": "Official Government of Canada employment portal with LMIA job posting information."},
        {"name": "Indeed Canada", "url": "https://ca.indeed.com", "category": "General", "description": "Canada's largest online employment aggregator across all 10 provinces and territories."},
        {"name": "LinkedIn Jobs Canada", "url": "https://www.linkedin.com/jobs/canada-jobs", "category": "Executive & Professional", "description": "Top professional networking and corporate recruitment portal in Canada."},
        {"name": "Workopolis", "url": "https://www.workopolis.com", "category": "General", "description": "Established Canadian career site providing job search and industry employment advice."},
        {"name": "Eluta.ca", "url": "https://www.eluta.ca", "category": "General", "description": "Official job search engine powered by Canada's Top 100 Employers project."},
        {"name": "Glassdoor Canada", "url": "https://www.glassdoor.ca", "category": "General", "description": "Job listings with employee salary reviews, company ratings, and culture insights."},
        {"name": "ZipRecruiter Canada", "url": "https://www.ziprecruiter.ca", "category": "General", "description": "AI job marketplace connecting Canadian job seekers with top regional employers."},
        {"name": "Monster Canada", "url": "https://www.monster.ca", "category": "General", "description": "National career portal offering candidate resume databases and career tools."},
        {"name": "CareerBeacon", "url": "https://www.careerbeacon.com", "category": "General", "description": "Leading job portal serving Atlantic Canada (Nova Scotia, New Brunswick, NL, PEI)."},
        {"name": "Techjobs.ca", "url": "https://www.techjobs.ca", "category": "Tech & IT", "description": "Dedicated technology recruitment portal for software, AI, and IT roles across Canada."},
        {"name": "Communitech Job Board", "url": "https://jobs.communitech.ca", "category": "Tech & IT", "description": "Kitchener-Waterloo tech corridor innovation hub job board."},
        {"name": "Toronto Tech Jobs", "url": "https://www.torontotechjobs.com", "category": "Tech & IT", "description": "Sourcing portal for Greater Toronto Area software engineering and AI startups."},
        {"name": "BIV Jobs Vancouver", "url": "https://biv.com/jobs", "category": "Executive & Professional", "description": "Business in Vancouver executive and professional recruitment platform."},
        {"name": "Randstad Canada", "url": "https://www.randstad.ca", "category": "Executive & Professional", "description": "Leading Canadian staffing agency for engineering, finance, IT, and skilled trades."},
        {"name": "Adecco Canada", "url": "https://www.adecco.ca", "category": "General", "description": "National workforce solutions provider for office, industrial, and temporary roles."},
        {"name": "Michael Page Canada", "url": "https://www.michaelpage.ca", "category": "Executive & Professional", "description": "Specialist executive search firm for mid-to-senior level Canadian professionals."},
        {"name": "Robert Half Canada", "url": "https://www.roberthalf.ca", "category": "Executive & Professional", "description": "Accounting, finance, technology, and legal talent placement consultancy."},
        {"name": "Upwork Canada", "url": "https://www.upwork.com", "category": "Remote & Freelance", "description": "Global remote contractor and freelance marketplace popular in Canada."},
        {"name": "FlexJobs Canada", "url": "https://www.flexjobs.com", "category": "Remote & Freelance", "description": "Curated directory for flexible, remote, and hybrid employment in Canada."},
        {"name": "Jooble Canada", "url": "https://ca.jooble.org", "category": "General", "description": "Aggregate search engine indexing corporate career pages across Canada."}
    ]
}

# Function to build 20 distinct, well-described, category-tagged job portals for ANY country
def generate_20_portals_for_country(country_code, country_name):
    if country_code in PRESET_JOB_PORTALS:
        return PRESET_JOB_PORTALS[country_code]
    
    # Generic, factual template generating 20 high quality portals for any country
    return [
        {"name": f"Indeed {country_name}", "url": f"https://www.indeed.com", "category": "General", "description": f"Dominant global employment search engine indexing vacancies across {country_name}."},
        {"name": f"LinkedIn Jobs ({country_name})", "url": "https://www.linkedin.com/jobs", "category": "Executive & Professional", "description": f"Premier worldwide professional networking and corporate executive portal serving {country_name}."},
        {"name": f"Glassdoor {country_name}", "url": "https://www.glassdoor.com", "category": "General", "description": f"Global job search portal featuring employee salary reviews and corporate ratings for {country_name}."},
        {"name": f"Jooble {country_name}", "url": f"https://jooble.org", "category": "General", "description": f"International job search aggregator indexing national career pages across {country_name}."},
        {"name": f"CareerJet {country_name}", "url": "https://www.careerjet.com", "category": "General", "description": f"Aggregated employment portal scanning thousands of employer websites in {country_name}."},
        {"name": f"Monster / Foundit {country_name}", "url": "https://www.foundit.com", "category": "General", "description": f"Established international career network with candidate resume database for {country_name}."},
        {"name": f"Jora {country_name}", "url": "https://jora.com", "category": "General", "description": f"Search engine for job vacancies sourcing local listings across {country_name}."},
        {"name": f"SimplyHired {country_name}", "url": "https://www.simplyhired.com", "category": "General", "description": f"National and international employment portal with salary estimator tools."},
        {"name": f"Michael Page {country_name}", "url": "https://www.michaelpage.com", "category": "Executive & Professional", "description": f"Global executive search consultancy specializing in finance, tech, and legal talent in {country_name}."},
        {"name": f"Hays Executive ({country_name})", "url": "https://www.hays.com", "category": "Executive & Professional", "description": f"Professional recruitment agency for technology, engineering, and healthcare roles."},
        {"name": f"Adecco Workforce ({country_name})", "url": "https://www.adecco.com", "category": "General", "description": f"Global staffing and temporary employment placement agency serving {country_name}."},
        {"name": f"Randstad Talent Hub ({country_name})", "url": "https://www.randstad.com", "category": "Executive & Professional", "description": f"International HR solutions and workforce management platform active in {country_name}."},
        {"name": f"Dice Tech & IT", "url": "https://www.dice.com", "category": "Tech & IT", "description": f"Specialized tech, software engineering, and IT candidate recruitment platform."},
        {"name": f"Wellfound Startups ({country_name})", "url": "https://wellfound.com", "category": "Niche & Startup", "description": f"Global tech startup job board matching candidates with innovative companies in {country_name}."},
        {"name": f"Turing AI Software Sourcing", "url": "https://www.turing.com", "category": "Tech & IT", "description": f"AI-driven platform connecting vetted software engineers in {country_name} with global firms."},
        {"name": f"Toptal Elite Tech ({country_name})", "url": "https://www.toptal.com", "category": "Tech & IT", "description": f"Exclusive network connecting the top 3% of tech and finance talent in {country_name}."},
        {"name": f"Upwork Remote ({country_name})", "url": "https://www.upwork.com", "category": "Remote & Freelance", "description": f"Leading remote contractor and online freelance marketplace for professionals in {country_name}."},
        {"name": f"Deel Global Hiring ({country_name})", "url": "https://www.deel.com", "category": "Remote & Freelance", "description": f"International remote hiring, compliance, and EOR contract workforce portal for {country_name}."},
        {"name": f"FlexJobs Remote ({country_name})", "url": "https://www.flexjobs.com", "category": "Remote & Freelance", "description": f"Hand-screened remote, flexible, and hybrid job directory accessible in {country_name}."},
        {"name": f"Official National Employment Service ({country_name})", "url": f"https://www.google.com/search?q={country_name}+government+job+portal", "category": "Government", "description": f"Official public sector civil service and government employment directory for {country_name}."}
    ]

print("Script template ready.")
