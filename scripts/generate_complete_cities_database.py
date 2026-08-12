import json
import os

# Load countries metadata
with open("./scripts/countries_info.json", "r") as f:
    countries_meta = json.load(f)

print(f"Loaded metadata for {len(countries_meta)} countries.")

# Comprehensive real cities dictionary per ISO country code
# Format per city: (cityName, stateOrRegion, population, cityType, isCapital, focus, languages)

SPECIFIC_WORLD_CITIES = {
    "DZ": [
        ("Algiers", "Algiers Province", 3415811, "Capital", True, "Government Administration, Financial Operations, Energy Tech & Higher Education", ["Arabic (Algerian)", "Tamazight (Berber)", "French"]),
        ("Oran", "Oran Province", 856890, "Industrial & Port", False, "Petrochemical Refining, Mediterranean Maritime Port, Automotive Assembly & Textiles", ["Arabic (Algerian)", "French"]),
        ("Constantine", "Constantine Province", 448374, "Regional Center", False, "Pharmaceutical Manufacturing, Electronics, Flour Milling & Heritage Tourism", ["Arabic (Algerian)", "French"]),
        ("Annaba", "Annaba Province", 257359, "Industrial & Port", False, "Steel Manufacturing (El Hadjar Complex), Phosphate Fertilizer Export & Seaport", ["Arabic (Algerian)", "French"]),
        ("Blida", "Blida Province", 331712, "Regional Center", False, "Agribusiness Processing, Citrus Exports, Rose Flower Essences & Logistics", ["Arabic (Algerian)", "French"]),
        ("Batna", "Batna Province", 290645, "Regional Center", False, "Aures Agribusiness, Textile Weaving, Construction Materials & Education", ["Arabic (Algerian)", "Tamazight (Berber)"]),
        ("Djelfa", "Djelfa Province", 289226, "Regional Center", False, "Livestock Trade Hub, Leather Craft, Woolen Goods & Agriculture", ["Arabic (Algerian)"]),
        ("Sétif", "Sétif Province", 288461, "Industrial & Port", False, "Home Appliances Assembly, Plastics, Commercial Trade & Food Processing", ["Arabic (Algerian)", "French"]),
        ("Sidi Bel Abbès", "Sidi Bel Abbès Province", 212935, "Tech Hub", False, "Electronics Industrial Park, Agricultural Machinery & Solar Energy", ["Arabic (Algerian)", "French"]),
        ("Biskra", "Biskra Province", 205608, "Regional Center", False, "Date Palm Export Capital, Geothermal Agriculture & Food Processing", ["Arabic (Algerian)"]),
        ("Tébessa", "Tébessa Province", 196537, "Industrial & Port", False, "Phosphate & Iron Ore Mining, Cross-Border Logistics & Trade", ["Arabic (Algerian)"]),
        ("El Oued", "El Oued Province", 134690, "Regional Center", False, "Sahara Potato & Agri-Export, Carpet Weaving & Trading", ["Arabic (Algerian)"]),
        ("Skikda", "Skikda Province", 163618, "Industrial & Port", False, "Sonatrach LNG Liquefaction Terminal, Oil Refining & Deepwater Shipping", ["Arabic (Algerian)", "French"]),
        ("Tiaret", "Tiaret Province", 201263, "Industrial & Port", False, "Mercedes-Benz Military Vehicle Assembly, Grain Silos & Agriculture", ["Arabic (Algerian)", "French"]),
        ("Béjaïa", "Béjaïa Province", 177988, "Industrial & Port", False, "Hydrocarbon Seaport Terminal, Food Processing (Cevital) & Cork Export", ["Arabic (Algerian)", "Tamazight (Berber)", "French"]),
        ("Tlemcen", "Tlemcen Province", 140158, "Regional Center", False, "Handicrafts, Silk Weaving, Leathercraft & Olive Oil Processing", ["Arabic (Algerian)", "French"]),
        ("Ouargla", "Ouargla Province", 133024, "Industrial & Port", False, "Hassi Messaoud Oilfield Headquarters, Natural Gas Services & Palms", ["Arabic (Algerian)", "French"]),
        ("Mostaganem", "Mostaganem Province", 145696, "Industrial & Port", False, "Fertilizers, Steel Tubing, Fishing Port & Commercial Maritime", ["Arabic (Algerian)", "French"]),
        ("Bordj Bou Arréridj", "Bordj Bou Arréridj Province", 158869, "Tech Hub", False, "Algerian Electronics Capital (Condor/Iris Assembly) & Appliances", ["Arabic (Algerian)", "French"]),
        ("Chlef", "Chlef Province", 178609, "Regional Center", False, "Agricultural Logistics, Cement Manufacturing & Plastics", ["Arabic (Algerian)", "French"])
    ],
    "EG": [
        ("Cairo", "Cairo Governorate", 9600000, "Capital", True, "Government Administration, Financial Operations, FinTech, Media & Tech", ["Arabic"]),
        ("Alexandria", "Alexandria Governorate", 5200000, "Industrial & Port", False, "Prime Mediterranean Seaport Logistics, Petrochemicals, Textiles & Shipping", ["Arabic"]),
        ("Giza", "Giza Governorate", 4368000, "Major City", False, "Smart Village IT Park, Tourism, Automotive Assembly & Food Tech", ["Arabic"]),
        ("Shubra El Kheima", "Qalyubia Governorate", 1165000, "Industrial & Port", False, "Textile Spinning & Weaving, Glass Manufacturing & Plastics", ["Arabic"]),
        ("Port Said", "Port Said Governorate", 750000, "Industrial & Port", False, "Suez Canal Port Gateway, Container Freight, Duty-Free Trade & Marine Services", ["Arabic", "English"]),
        ("Suez", "Suez Governorate", 740000, "Industrial & Port", False, "Suez Canal Petroleum Refining, Petrochemical Plants & Marine Shipping", ["Arabic"]),
        ("El Mahalla El Kubra", "Gharbia Governorate", 535000, "Industrial & Port", False, "Egypt Cotton Textile Capital (Ghazl El Mahalla) & Garments Export", ["Arabic"]),
        ("Luxor", "Luxor Governorate", 506000, "Regional Center", False, "World Heritage Tourism Capital, Nile River Logistics & Agriculture", ["Arabic", "English"]),
        ("Mansoura", "Dakahlia Governorate", 480000, "Tech Hub", False, "Nile Delta Education Center, Nephrology Medical Research & Software", ["Arabic"]),
        ("Tanta", "Gharbia Governorate", 420000, "Regional Center", False, "Cotton Ginning, Sweet Production, Rice Milling & Transportation", ["Arabic"]),
        ("Asyut", "Asyut Governorate", 390000, "Regional Center", False, "Upper Egypt Economic Center, Fertilizers, Cement & University Hub", ["Arabic"]),
        ("Ismailia", "Ismailia Governorate", 380000, "Regional Center", False, "Suez Canal Authority Headquarters, Mango Agribusiness & Logistics", ["Arabic"]),
        ("Fayoum", "Fayoum Governorate", 350000, "Regional Center", False, "Oasis Agribusiness Export, Poultry Processing & Ceramics", ["Arabic"]),
        ("Zagazig", "Sharqia Governorate", 319000, "Regional Center", False, "Grain Trade Granary, Cotton Marketing & Veterinary Medicine", ["Arabic"]),
        ("Aswan", "Aswan Governorate", 290000, "Industrial & Port", False, "Benban Solar Park Clean Energy, Granite Mining, Hydroelectric Power & Tourism", ["Arabic", "Nubian"]),
        ("Damietta", "Damietta Governorate", 305000, "Industrial & Port", False, "Damietta Furniture Manufacturing City, LNG Export Terminal & Fishing", ["Arabic"]),
        ("Damanhur", "Beheira Governorate", 278000, "Regional Center", False, "Agricultural Trading, Carpet Weaving, Cotton Ginning & Oilseed", ["Arabic"]),
        ("Minya", "Minya Governorate", 256000, "Regional Center", False, "Limestone Quarrying, Sugar Beet Processing & Cotton Trade", ["Arabic"]),
        ("Beni Suef", "Beni Suef Governorate", 235000, "Tech Hub", False, "Samsung Electronics Manufacturing Plant, Cement & Ceramics Park", ["Arabic"]),
        ("Qena", "Qena Governorate", 230000, "Industrial & Port", False, "Aluminum Smelting (Nag Hammadi), Sugarcane Mills & Pottery", ["Arabic"])
    ],
    "ZA": [
        ("Johannesburg", "Gauteng", 5635000, "Financial Hub", False, "JSE Stock Exchange, Gold Mining Corporate HQs, FinTech & Telecoms", ["English", "Zulu", "Afrikaans"]),
        ("Cape Town", "Western Cape", 4618000, "Tech Hub", True, "Silicon Cape Tech Startups, Financial Services, E-Commerce & Tourism", ["English", "Afrikaans", "Xhosa"]),
        ("Durban", "KwaZulu-Natal", 3442000, "Industrial & Port", False, "Port of Durban Container Hub, Toyota Auto Assembly, Chemicals & Sugar", ["English", "Zulu"]),
        ("Pretoria", "Gauteng", 2472000, "Capital", True, "Administrative Capital, Diplomatic Corps, BMW Auto Fab & Defense Science", ["English", "Afrikaans", "Sepedi", "Tswana"]),
        ("Gqeberha (Port Elizabeth)", "Eastern Cape", 1152000, "Industrial & Port", False, "Automotive Assembly (VW/Isuzu), Coega Special Economic Zone & Seaport", ["English", "Xhosa", "Afrikaans"]),
        ("Soweto", "Gauteng", 1271000, "Major City", False, "Retail Commerce, Urban Youth Workforce, Creative Arts & Tourism", ["Zulu", "Sotho", "English"]),
        ("Pietermaritzburg", "KwaZulu-Natal", 500000, "Capital", True, "KZN Provincial Government, Aluminum Fabrication, Furniture & Timber", ["English", "Zulu"]),
        ("Bloemfontein", "Free State", 463000, "Capital", True, "Judicial Capital, Federal Appeals Court, Agribusiness & Higher Ed", ["Afrikaans", "Sotho", "English"]),
        ("East London", "Eastern Cape", 267000, "Industrial & Port", False, "Mercedes-Benz C-Class Plant, IDZ Automotive Logistics & Seaport", ["English", "Xhosa", "Afrikaans"]),
        ("Polokwane", "Limpopo", 228000, "Capital", True, "Limpopo Administrative Capital, Platinum Processing & Agri-Trade", ["Sepedi", "English"]),
        ("Mbombela (Nelspruit)", "Mpumalanga", 215000, "Capital", True, "Gateway to Kruger, Subtropical Citrus Export & Timber Logistics", ["siSwati", "Afrikaans", "English"]),
        ("Kimberley", "Northern Cape", 225000, "Capital", True, "De Beers Diamond Mining Heritage, Solar Energy Parks & Gov", ["Afrikaans", "Tswana", "English"]),
        ("Rustenburg", "North West", 311000, "Industrial & Port", False, "World Platinum Mining Capital (Anglo American/Impala) & Mining Tech", ["Tswana", "Afrikaans", "English"]),
        ("Centurion", "Gauteng", 280000, "Tech Hub", False, "High-Tech Defense Electronics, IT Data Centers & Financial Hub", ["Afrikaans", "English"]),
        ("George", "Western Cape", 203000, "Regional Center", False, "Garden Route Logistics, Forestry, Food Processing & Call Centers", ["Afrikaans", "English", "Xhosa"]),
        ("Klerksdorp", "North West", 198000, "Industrial & Port", False, "Gold Mining Operations, Agri-Services & Medical Facilities", ["Afrikaans", "Sotho", "English"]),
        ("Stellenbosch", "Western Cape", 155000, "Tech Hub", False, "Technopark Innovation Hub, Wine Export Capital & Biotech Research", ["Afrikaans", "English"]),
        ("Richards Bay", "KwaZulu-Natal", 150000, "Industrial & Port", False, "Deepwater Coal Export Terminal, Heavy Minerals & Aluminum Smelter", ["Zulu", "English"]),
        ("Vereeniging", "Gauteng", 100000, "Industrial & Port", False, "Vaal Triangle Heavy Steel Manufacturing (ArcelorMittal) & Power", ["Afrikaans", "Sotho", "English"]),
        ("Witbank (Emalahleni)", "Mpumalanga", 110000, "Industrial & Port", False, "Coal Mining Center, Thermal Power Generation & Vanadium Steel", ["Zulu", "Afrikaans", "English"])
    ],
    "NG": [
        ("Lagos", "Lagos State", 15388000, "Financial Hub", False, "Nollywood, FinTech (Paystack/Flutterwave), E-Commerce, Banking & Port", ["English", "Yoruba", "Pidgin"]),
        ("Kano", "Kano State", 4103000, "Industrial & Port", False, "Trans-Saharan Commercial Hub, Leather Export, Textiles & Grain Trade", ["Hausa", "English"]),
        ("Ibadan", "Oyo State", 3649000, "Regional Center", False, "Agribusiness Research (IITA), Cocoa Trade, Publishing & Education", ["Yoruba", "English"]),
        ("Kaduna", "Kaduna State", 1582000, "Industrial & Port", False, "Textile Mills, Petroleum Refining, Defense Academy & Agriculture", ["Hausa", "English"]),
        ("Port Harcourt", "Rivers State", 3171000, "Industrial & Port", False, "Nigeria Oil & Gas Capital, Offshore Services, Petrochemicals & Seaport", ["English", "Igbo", "Pidgin"]),
        ("Benin City", "Edo State", 1780000, "Regional Center", False, "Rubber Plantations, Palm Oil Processing, Woodcraft & Software BPO", ["Yoruba", "Edo", "English"]),
        ("Maiduguri", "Borno State", 1110000, "Regional Center", False, "Northeast Trade Hub, Gum Arabic, Livestock & Agricultural Trade", ["Hausa", "Kanuri", "English"]),
        ("Zaria", "Kaduna State", 975000, "Regional Center", False, "Ahmadu Bello University Educational Hub, Aviation Training & Grain", ["Hausa", "English"]),
        ("Aba", "Abia State", 1160000, "Industrial & Port", False, "Made-in-Aba Leathercraft, Footwear, Textiles & Light Engineering", ["Igbo", "English"]),
        ("Ilorin", "Kwara State", 960000, "Regional Center", False, "Sugar Refining, Agro-Allied Processing & University Center", ["Yoruba", "Hausa", "English"]),
        ("Jos", "Plateau State", 900000, "Regional Center", False, "Tin Mining Heritage, Subtropical Vegetable Agriculture & Software", ["Hausa", "English"]),
        ("Ogbomosho", "Oyo State", 520000, "Regional Center", False, "Cashew Agribusiness Export, Health Sciences & Technology University", ["Yoruba", "English"]),
        ("Enugu", "Enugu State", 800000, "Capital", True, "Coal City Heritage, Film Production, BPO Services & Regional Commerce", ["Igbo", "English"]),
        ("Abeokuta", "Ogun State", 600000, "Capital", True, "Industrial Manufacturing, Quarrying, Adire Textiles & Agro-Forestry", ["Yoruba", "English"]),
        ("Onitsha", "Anambra State", 1480000, "Industrial & Port", False, "West Africa Largest Main Market, Plastics Manufacturing & River Port", ["Igbo", "English"]),
        ("Warri", "Delta State", 850000, "Industrial & Port", False, "Petroleum Refining, Marine Logistics, Gas Processing & Ports", ["English", "Urhobo", "Pidgin"]),
        ("Sokoto", "Sokoto State", 650000, "Capital", True, "Leather Tanning, Cement Manufacturing (BUA), Cattle Trade & Heritage", ["Hausa", "English"]),
        ("Calabar", "Cross River State", 600000, "Industrial & Port", False, "Free Trade Zone, Eco-Tourism, Palm Oil & Marine Logistics", ["Efik", "English"]),
        ("Akure", "Ondo State", 650000, "Capital", True, "Cocoa Trade Center, Tech Incubators & Federal University of Tech", ["Yoruba", "English"]),
        ("Abuja", "Federal Capital Territory", 3652000, "Capital", True, "Federal Government of Nigeria, Public Administration, GovTech & Law", ["English", "Hausa", "Yoruba", "Igbo"])
    ]
}

# Regional languages fallback mapper
def get_languages_for_country(code, meta):
    langs = meta.get("languages", ["English"])
    return langs

print("Initialized comprehensive world cities engine.")
