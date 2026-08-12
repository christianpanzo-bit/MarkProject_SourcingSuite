import os
import json

# Python dictionary of datasets per country code
# Each entry is a list of tuples: (cityName, stateOrRegion, population, cityType, isCapital, focus, languages)

cities_db = {}

# We populate cities_db with data for countries across all regions

# helper to add cities easily
def add_country_cities(code, city_tuples):
    cities_db[code] = []
    for ct in city_tuples:
        name = ct[0]
        region = ct[1]
        pop = ct[2]
        ctype = ct[3] if len(ct) > 3 else "Major City"
        is_cap = ct[4] if len(ct) > 4 else False
        focus = ct[5] if len(ct) > 5 else "Commercial Trade, Industry & Public Services"
        langs = ct[6] if len(ct) > 6 else ["Official Language", "English"]
        
        cities_db[code].append({
            "cityName": name,
            "stateOrRegion": region,
            "population": pop,
            "cityType": ctype,
            "isCapital": is_cap,
            "primaryIndustryOrSourcingFocus": focus,
            "primaryLanguagesSpoken": langs
        })

print("Helper ready...")
