import re

with open("./src/data/countryJobsData.ts", "r") as f:
    content = f.read()

# Fix 1: Fix line 772 Python f-string remnant
content = content.replace(
    'description: f"Global tech startup job board matching candidates with innovative companies in ${countryName}."',
    'description: `Global tech startup job board matching candidates with innovative companies in ${countryName}.`'
)

# Fix 2: Clean up duplicated "jobSites: [\njobSites: ["
content = re.sub(r'jobSites:\s*\[\s*jobSites:\s*\[', 'jobSites: [', content)

with open("./src/data/countryJobsData.ts", "w") as f:
    f.write(content)

print("Cleaned up countryJobsData.ts syntax!")
