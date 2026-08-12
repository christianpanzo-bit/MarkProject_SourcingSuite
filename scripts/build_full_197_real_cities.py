import json
import os

# Load metadata
with open("./scripts/countries_info.json", "r") as f:
    countries_meta = json.load(f)

print(f"Loaded metadata for {len(countries_meta)} countries.")

def fmt_pop(num):
    if num >= 1_000_000_000:
        return f"{num / 1_000_000_000:.2f} Billion"
    if num >= 1_000_000:
        return f"{num / 1_000_000:.2f} Million"
    return f"{num:,}"

FOCI = [
    "Government Administration, Financial Operations & Services",
    "Software Development, IT Support & Digital Services",
    "Agribusiness Exports, Grain Processing & Storage",
    "Industrial Manufacturing, Automotive Parts & Assembly",
    "Healthcare Services, Clinical Research & Hospital Networks",
    "Maritime Shipping, Container Logistics & Port Operations",
    "Textiles, Garments Manufacturing & Artisanal Craft",
    "Renewable Energy, Solar Operations & Electrical Grid",
    "Higher Vocational Training, Engineering & Trades",
    "Mining Operations, Raw Material Extraction & Metallurgy",
    "Tourism & Cultural Heritage, Hospitality Management",
    "Commercial Wholesale, Retail Distribution & Supply Chain",
    "Telecommunications, Cloud Infrastructure & Fiber Networks",
    "Banking, Insurance, Stock Exchange & Asset Management",
    "Biotechnology, Pharmaceuticals & Chemical Processing"
]

TYPES = ["Tech Hub", "Industrial & Port", "Regional Center", "Financial Hub", "Major City", "BPO / Service Hub"]

# Dictionary mapping country ISO code -> list of specific real city names
# We will ensure EVERY ONE of the 197 countries has 50 clean, specific real city names!

def clean_city_name(raw_name, country_name, capital_name):
    # Strip unnecessary prefixes or generic labels
    c = raw_name.strip()
    c = c.replace(" Province", "").replace(" State", "").replace(" Region", "").replace(" Department", "").replace(" District", "").replace(" Governorate", "").replace(" County", "").replace(" Canton", "")
    return c if c else f"{capital_name} Central"

print("Helper definitions complete.")
