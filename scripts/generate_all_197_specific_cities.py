import json
import os

# Load countries metadata
with open("./scripts/countries_info.json", "r") as f:
    countries_meta = json.load(f)

print(f"Loaded metadata for {len(countries_meta)} countries.")

# Detailed database of real cities per country code
# Each entry is a list of tuples or dicts: (cityName, stateOrRegion, population, cityType, isCapital, focus, languages)

CITIES_DB = {}

def add_city(code, name, region, pop, ctype="Major City", is_cap=False, focus="Commercial Trade & Regional Services", langs=None):
    if code not in CITIES_DB:
        CITIES_DB[code] = []
    if langs is None:
        langs = countries_meta.get(code, {}).get("languages", ["English"])
    
    CITIES_DB[code].append({
        "cityName": name,
        "stateOrRegion": region,
        "population": pop,
        "cityType": ctype,
        "isCapital": is_cap,
        "primaryIndustryOrSourcingFocus": focus,
        "primaryLanguagesSpoken": langs
    })

print("Helper defined.")
