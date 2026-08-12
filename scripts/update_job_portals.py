import re

with open("./src/data/countryJobsData.ts", "r") as f:
    code = f.read()

# Replace the job sites array inside getFallbackCountryJobsData to return 20 portals:
fallback_portals_code = """    jobSites: [
      { name: `Indeed ${countryName}`, url: `https://www.indeed.com`, category: 'General', description: `Dominant global employment search engine indexing vacancies across ${countryName}.` },
      { name: `LinkedIn Jobs (${countryName})`, url: `https://www.linkedin.com/jobs`, category: 'Executive & Professional', description: `Premier worldwide professional networking and corporate executive portal serving ${countryName}.` },
      { name: `Glassdoor ${countryName}`, url: `https://www.glassdoor.com`, category: 'General', description: `Global job search portal featuring employee salary reviews and corporate ratings for ${countryName}.` },
      { name: `Jooble ${countryName}`, url: `https://jooble.org`, category: 'General', description: `International job search aggregator indexing national career pages across ${countryName}.` },
      { name: `CareerJet ${countryName}`, url: `https://www.careerjet.com`, category: 'General', description: `Aggregated employment portal scanning thousands of employer websites in ${countryName}.` },
      { name: `Monster / Foundit ${countryName}`, url: `https://www.foundit.com`, category: 'General', description: `Established international career network with candidate resume database for ${countryName}.` },
      { name: `Jora ${countryName}`, url: `https://jora.com`, category: 'General', description: `Search engine for job vacancies sourcing local listings across ${countryName}.` },
      { name: `SimplyHired ${countryName}`, url: `https://www.simplyhired.com`, category: 'General', description: `National and international employment portal with salary estimator tools.` },
      { name: `Michael Page ${countryName}`, url: `https://www.michaelpage.com`, category: 'Executive & Professional', description: `Global executive search consultancy specializing in finance, tech, and legal talent in ${countryName}.` },
      { name: `Hays Executive (${countryName})`, url: `https://www.hays.com`, category: 'Executive & Professional', description: `Professional recruitment agency for technology, engineering, and healthcare roles in ${countryName}.` },
      { name: `Adecco Workforce (${countryName})`, url: `https://www.adecco.com`, category: 'General', description: `Global staffing and temporary employment placement agency serving ${countryName}.` },
      { name: `Randstad Talent Hub (${countryName})`, url: `https://www.randstad.com`, category: 'Executive & Professional', description: `International HR solutions and workforce management platform active in ${countryName}.` },
      { name: `Dice Tech & IT`, url: `https://www.dice.com`, category: 'Tech & IT', description: `Specialized tech, software engineering, and IT candidate recruitment platform.` },
      { name: `Wellfound Startups (${countryName})`, url: `https://wellfound.com`, category: 'Niche & Startup', description: f"Global tech startup job board matching candidates with innovative companies in ${countryName}." },
      { name: `Turing AI Software Sourcing`, url: `https://www.turing.com`, category: 'Tech & IT', description: `AI-driven platform connecting vetted software engineers in ${countryName} with global firms.` },
      { name: `Toptal Elite Tech (${countryName})`, url: `https://www.toptal.com`, category: 'Tech & IT', description: `Exclusive network connecting top 3% of tech and finance talent in ${countryName}.` },
      { name: `Upwork Remote (${countryName})`, url: `https://www.upwork.com`, category: 'Remote & Freelance', description: `Leading remote contractor and online freelance marketplace for professionals in ${countryName}.` },
      { name: `Deel Global Hiring (${countryName})`, url: `https://www.deel.com`, category: 'Remote & Freelance', description: `International remote hiring, compliance, and EOR contract workforce portal for ${countryName}.` },
      { name: `FlexJobs Remote (${countryName})`, url: `https://www.flexjobs.com`, category: 'Remote & Freelance', description: `Hand-screened remote, flexible, and hybrid job directory accessible in ${countryName}.` },
      { name: `Official National Employment Service (${countryName})`, url: `https://www.google.com/search?q=${countryName}+government+job+portal`, category: 'Government', description: `Official public sector civil service and government employment directory for ${countryName}.` }
    ],"""

# Find old jobSites array in getFallbackCountryJobsData
target_pattern = r"jobSites:\s*\[\s*\{ name: `Indeed \$\{countryName\}`.*?\]\s*,"
if re.search(target_pattern, code, flags=re.DOTALL):
    new_code = re.sub(target_pattern, fallback_portals_code, code, flags=re.DOTALL)
    with open("./src/data/countryJobsData.ts", "w") as f:
        f.write(new_code)
    print("Updated getFallbackCountryJobsData jobSites with 20 portals.")
else:
    print("Pattern not matched directly, checking code structure.")
