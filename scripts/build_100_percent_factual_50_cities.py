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

# Detailed factual cities dictionary for key countries & comprehensive world fallback
# Map: ISO Code -> List of 50 real specific cities/towns/municipalities (cityName, stateOrRegion, population, cityType, isCapital, focus)
WORLD_CITIES_DB = {
    "DZ": [
        ("Algiers", "Algiers Province", 3415811, "Capital", True, "Government Administration, Financial Operations & Tech"),
        ("Oran", "Oran Province", 856890, "Industrial & Port", False, "Petrochemical Refining, Mediterranean Port & Trade"),
        ("Constantine", "Constantine Province", 448374, "Regional Center", False, "Pharmaceutical Manufacturing & Higher Education"),
        ("Annaba", "Annaba Province", 257359, "Industrial & Port", False, "Steel Manufacturing, Phosphate Export & Seaport"),
        ("Blida", "Blida Province", 331712, "Regional Center", False, "Agribusiness Processing, Citrus Exports & Logistics"),
        ("Batna", "Batna Province", 290645, "Regional Center", False, "Aures Agribusiness, Textiles & Construction"),
        ("Djelfa", "Djelfa Province", 289226, "Regional Center", False, "Livestock Trade Hub, Leather Craft & Agriculture"),
        ("Sétif", "Sétif Province", 288461, "Industrial & Port", False, "Home Appliances Assembly, Plastics & Commerce"),
        ("Sidi Bel Abbès", "Sidi Bel Abbès Province", 212935, "Tech Hub", False, "Electronics Industrial Park & Renewable Tech"),
        ("Biskra", "Biskra Province", 205608, "Regional Center", False, "Date Palm Agriculture, Geothermal Energy & Tourism"),
        ("Tébessa", "Tébessa Province", 196537, "Regional Center", False, "Phosphate Mining, Cross-Border Trade & Freight"),
        ("El Oued", "El Oued Province", 134699, "Regional Center", False, "Sahara Agribusiness, Potato Export & Commerce"),
        ("Skikda", "Skikda Province", 163618, "Industrial & Port", False, "LNG Export Terminal, Oil Refinery & Maritime Port"),
        ("Tiaret", "Tiaret Province", 201263, "Regional Center", False, "Automotive Assembly (SAFAV-MB), Agriculture"),
        ("Béjaïa", "Béjaïa Province", 177988, "Industrial & Port", False, "Food Processing, Agro-Industry & Deep-Water Port"),
        ("Tlemcen", "Tlemcen Province", 173531, "Regional Center", False, "Handicrafts, Textiles, Cultural Tourism & Universities"),
        ("Ouargla", "Ouargla Province", 133024, "Tech Hub", False, "Oil & Gas Services Capital, Hassi Messaoud Hub"),
        ("Mostaganem", "Mostaganem Province", 145696, "Industrial & Port", False, "Port Logistics, Agribusiness & University Center"),
        ("Bordj Bou Arréridj", "Bordj Bou Arréridj Province", 168346, "Tech Hub", False, "Electronics Capital of Algeria, Hardware Assembly"),
        ("Chlef", "Chlef Province", 178614, "Regional Center", False, "Agricultural Trade, Commerce & Building Materials"),
        ("Souk Ahras", "Souk Ahras Province", 155634, "Regional Center", False, "Forestry, Dairy Processing & Agriculture"),
        ("Médéa", "Médéa Province", 138355, "Regional Center", False, "Pharmaceutical Industry, Wines & Fruit Orchards"),
        ("El Eulma", "Sétif Province", 155042, "BPO / Service Hub", False, "Wholesale Commercial Market & International Trade"),
        ("Béchar", "Béchar Province", 165627, "Regional Center", False, "Saoura Regional Administration & Mining Services"),
        ("Jijel", "Jijel Province", 134839, "Industrial & Port", False, "Djen Djen Container Port, Steelworks & Cork"),
        ("Relizane", "Relizane Province", 130094, "Regional Center", False, "Textile Park, Cotton Processing & Agribusiness"),
        ("Saïda", "Saïda Province", 128225, "Regional Center", False, "Mineral Water Bottling, Leather & Livestock"),
        ("Laghouat", "Laghouat Province", 144747, "Tech Hub", False, "Hassi R'Mel Gas Field Logistics & Solar Power"),
        ("Guelma", "Guelma Province", 120807, "Regional Center", False, "Thermal Springs Tourism, Canning & Sugar Refining"),
        ("Ghardaïa", "Ghardaïa Province", 120000, "Regional Center", False, "M'zab Valley UNESCO Heritage, Carpet Weaving"),
        ("Khenchela", "Khenchela Province", 108580, "Regional Center", False, "Timber, Grain Farming & Aures Agriculture"),
        ("Ain Oussera", "Djelfa Province", 101239, "Regional Center", False, "High Plateau Agriculture, Grain Silos & Trade"),
        ("Mascara", "Mascara Province", 108587, "Regional Center", False, "Olive Oil Refining, Vineyards & Grain Milling"),
        ("Ain Beida", "Oum El Bouaghi Province", 118662, "Regional Center", False, "Trade Hub, Grain Production & Woolen Textiles"),
        ("Tamanrasset", "Tamanrasset Province", 92635, "Regional Center", False, "Ahaggar Trade Crossroads, Mining & Eco-Tourism"),
        ("Tizi Ouzou", "Tizi Ouzou Province", 135000, "Regional Center", False, "Kabylie Academic Hub, Electronics & Agriculture"),
        ("Bouira", "Bouira Province", 88801, "Regional Center", False, "Agribusiness, Construction & Djurdjura Tourism"),
        ("M'Sila", "M'Sila Province", 132975, "Regional Center", False, "University Center, Solar Research & Farming"),
        ("Khemis Miliana", "Ain Defla Province", 84574, "Regional Center", False, "Fruit Canning, Agribusiness & Transportation"),
        ("Ain Defla", "Ain Defla Province", 65453, "Regional Center", False, "Chelif Valley Agribusiness & Agriculture"),
        ("Aflou", "Laghouat Province", 102025, "Regional Center", False, "High Plateau Livestock & Forestry Trade"),
        ("El Khroub", "Constantine Province", 90112, "Industrial & Port", False, "Pharmaceutical Logistics & Industrial Zone"),
        ("Sig", "Mascara Province", 70852, "Regional Center", False, "Olive Canning & Agribusiness Processing"),
        ("Maghnia", "Tlemcen Province", 114003, "Regional Center", False, "Border Trade & Ceramic Tile Manufacturing"),
        ("Barika", "Batna Province", 104388, "Regional Center", False, "Agribusiness & Transportation Junction"),
        ("Messaad", "Djelfa Province", 102422, "Regional Center", False, "Saharan Wool Weaving & Agriculture"),
        ("Bouchegouf", "Guelma Province", 35439, "Regional Center", False, "Railway Logistics & Citrus Orchards"),
        ("El Borma", "Ouargla Province", 15000, "Tech Hub", False, "Petroleum Extraction & Gas Pipeline Hub"),
        ("Hassi Messaoud", "Ouargla Province", 45147, "Tech Hub", False, "Oil Capital of Algeria & Petroleum Engineering"),
        ("In Salah", "In Salah Province", 32518, "Tech Hub", False, "Natural Gas Extraction & Solar Energy Grid")
    ]
}

print("Base script setup complete.")
