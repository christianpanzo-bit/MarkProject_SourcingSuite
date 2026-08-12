import json
import os
import sys

# Load countries metadata
with open("./scripts/countries_info.json", "r") as f:
    countries_meta = json.load(f)

print(f"Loaded metadata for {len(countries_meta)} countries.")

def fmt_pop(num):
    if num >= 1_000_000_000:
        return f"{num / 1_000_000_000:.2f} Billion"
    if num >= 1_000_000:
        return f"{num / 1_000_000:.2f} Million"
    return f"{num:,}"

# Country specific real city pools for world countries (sample of major real cities per country)
# For all 197 countries, we build 50 real specific cities/towns/municipalities/urban centers.

foci_list = [
    "Government Administration, Financial Operations & Regional Services",
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

types_list = ["Tech Hub", "Industrial & Port", "Regional Center", "Financial Hub", "Major City", "BPO / Service Hub"]

# Real world country cities dictionary
REAL_CITIES_MASTER = {
    "US": [
        "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
        "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte", "Indianapolis", "San Francisco", "Seattle", "Denver", "Washington",
        "Nashville", "Oklahoma City", "El Paso", "Boston", "Portland", "Las Vegas", "Detroit", "Memphis", "Louisville", "Baltimore",
        "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Atlanta", "Omaha", "Colorado Springs", "Raleigh", "Miami",
        "Oakland", "Minneapolis", "Tulsa", "Bakersfield", "Wichita", "Arlington", "Aurora", "Tampa", "New Orleans", "Cleveland"
    ],
    "CA": [
        "Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener",
        "London", "Victoria", "Halifax", "Oshawa", "Windsor", "Saskatoon", "Regina", "Barrie", "St. Catharines", "Kelowna",
        "Sherbrooke", "Abbotsford", "Sudbury", "Kingston", "Saguenay", "Trois-Rivières", "Guelph", "Moncton", "Brantford", "Thunder Bay",
        "Saint John", "Red Deer", "Lethbridge", "Kamloops", "Nanaimo", "Fredericton", "Chilliwack", "Belleville", "Peterborough", "Sarnia",
        "Drummondville", "Prince George", "Sault Ste. Marie", "Saskatoon", "Brandon", "Saint-Jean-sur-Richelieu", "Granby", "Saint-Jérôme", "Medicine Hat", "Yellowknife"
    ],
    "GB": [
        "London", "Birmingham", "Glasgow", "Manchester", "Liverpool", "Edinburgh", "Bristol", "Leeds", "Sheffield", "Newcastle upon Tyne",
        "Belfast", "Leicester", "Aberdeen", "Southampton", "Cardiff", "Nottingham", "Plymouth", "Stoke-on-Trent", "Wolverhampton", "Coventry",
        "Hull", "Preston", "Sunderland", "Bradford", "Derby", "Dundee", "Brighton", "Bournemouth", "Middlesbrough", "Swindon",
        "Portsmouth", "Oxford", "Cambridge", "Exeter", "Gloucester", "Bath", "Canterbury", "York", "Norwich", "Ipswich",
        "Inverness", "Perth", "St Albans", "Salford", "Wakefield", "Lancaster", "Carlisle", "Chester", "Winchester", "Durham"
    ],
    "FR": [
        "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Montpellier", "Strasbourg", "Bordeaux", "Lille",
        "Rennes", "Reims", "Toulon", "Saint-Étienne", "Le Havre", "Grenoble", "Dijon", "Angers", "Villeurbanne", "Nîmes",
        "Aix-en-Provence", "Clermont-Ferrand", "Le Mans", "Brest", "Tours", "Amiens", "Limoges", "Annecy", "Boulogne-Billancourt", "Perpignan",
        "Metz", "Besançon", "Orléans", "Saint-Denis", "Rouen", "Argenteuil", "Montreuil", "Mulhouse", "Caen", "Nancy",
        "Saint-Paul", "Roubaix", "Tourcoing", "Nanterre", "Avignon", "Vitry-sur-Seine", "Créteil", "Dunkerque", "Poitiers", "Versailles"
    ],
    "DE": [
        "Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig",
        "Bremen", "Dresden", "Hanover", "Nuremberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster",
        "Karlsruhe", "Mannheim", "Augsburg", "Wiesbaden", "Gelsenkirchen", "Mönchengladbach", "Braunschweig", "Chemnitz", "Kiel", "Aachen",
        "Halle", "Magdeburg", "Freiburg", "Krefeld", "Lübeck", "Oberhausen", "Erfurt", "Mainz", "Rostock", "Kassel",,
        "Hagen", "Hamm", "Saarbrücken", "Mülheim", "Potsdam", "Ludwigshafen", "Oldenburg", "Leverkusen", "Osnabrück", "Solingen"
    ]
}

print("Loaded master cities template structure.")
