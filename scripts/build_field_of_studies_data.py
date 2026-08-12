import json
import math

print("Generating field of studies dataset...")

# Load 197 countries info
with open("scripts/countries_info.json", "r") as f:
    countries_meta = json.load(f)

FLAG_MAP = {
    'AF': '🇦🇫', 'AL': '🇦🇱', 'DZ': '🇩🇿', 'AD': '🇦🇩', 'AO': '🇦🇴', 'AG': '🇦🇬', 'AR': '🇦🇷', 'AM': '🇦🇲', 'AU': '🇦🇺', 'AT': '🇦🇹',
    'AZ': '🇦🇿', 'BS': '🇧🇸', 'BH': '🇧🇭', 'BD': '🇧🇩', 'BB': '🇧🇧', 'BY': '🇧🇾', 'BE': '🇧🇪', 'BZ': '🇧🇿', 'BJ': '🇧🇯', 'BT': '🇧🇹',
    'BO': '🇧🇴', 'BA': '🇧🇦', 'BW': '🇧🇼', 'BR': '🇧🇷', 'BN': '🇧🇳', 'BG': '🇧🇬', 'BF': '🇧🇫', 'BI': '🇧🇮', 'CV': '🇨🇻', 'KH': '🇰🇭',
    'CM': '🇨🇲', 'CA': '🇨🇦', 'CF': '🇨🇫', 'TD': '🇹🇩', 'CL': '🇨🇱', 'CN': '🇨🇳', 'CO': '🇨🇴', 'KM': '🇰🇲', 'CG': '🇨🇬', 'CD': '🇨🇩',
    'CR': '🇨🇷', 'CI': '🇨🇮', 'HR': '🇭🇷', 'CU': '🇨🇺', 'CY': '🇨🇾', 'CZ': '🇨🇿', 'DK': '🇩🇰', 'DJ': '🇩🇯', 'DM': '🇩🇲', 'DO': '🇩🇴',
    'EC': '🇪🇨', 'EG': '🇪🇬', 'SV': '🇸🇻', 'GQ': '🇬🇶', 'ER': '🇪🇷', 'EE': '🇪🇪', 'SZ': '🇸🇿', 'ET': '🇪🇹', 'FJ': '🇫🇯', 'FI': '🇫🇮',
    'FR': '🇫🇷', 'GA': '🇬🇦', 'GM': '🇬🇲', 'GE': '🇬🇪', 'DE': '🇩🇪', 'GH': '🇬🇭', 'GR': '🇬🇷', 'GD': '🇬🇩', 'GT': '🇬🇹', 'GN': '🇬🇳',
    'GW': '🇬🇼', 'GY': '🇬🇾', 'HT': '🇭🇹', 'HN': '🇭🇳', 'HU': '🇭🇺', 'IS': '🇮🇸', 'IN': '🇮🇳', 'ID': '🇮🇩', 'IR': '🇮🇷', 'IQ': '🇮🇶',
    'IE': '🇮🇪', 'IL': '🇮🇱', 'IT': '🇮🇹', 'JM': '🇯🇲', 'JP': '🇯🇵', 'JO': '🇯🇴', 'KZ': '🇰🇿', 'KE': '🇰🇪', 'KI': '🇰🇮', 'KP': '🇰🇵',
    'KR': '🇰🇷', 'KW': '🇰🇼', 'KG': '🇰🇬', 'LA': '🇱🇦', 'LV': '🇱🇻', 'LB': '🇱🇧', 'LS': '🇱🇸', 'LR': '🇱🇷', 'LY': '🇱🇾', 'LI': '🇱🇮',
    'LT': '🇱🇹', 'LU': '🇱🇺', 'MG': '🇲🇬', 'MW': '🇲🇼', 'MY': '🇲🇾', 'MV': '🇲🇻', 'ML': '🇲🇱', 'MT': '🇲🇹', 'MH': '🇲🇭', 'MR': '🇲🇷',
    'MU': '🇲🇺', 'MX': '🇲🇽', 'FM': '🇫🇲', 'MD': '🇲🇩', 'MC': '🇲🇨', 'MN': '🇲🇳', 'ME': '🇲🇪', 'MA': '🇲🇦', 'MZ': '🇲🇿', 'MM': '🇲🇲',
    'NA': '🇳🇦', 'NR': '🇳🇷', 'NP': '🇳🇵', 'NL': '🇳🇱', 'NZ': '🇳🇿', 'NI': '🇳🇮', 'NE': '🇳🇪', 'NG': '🇳🇬', 'MK': '🇲🇰', 'NO': '🇳🇴',
    'OM': '🇴🇲', 'PK': '🇵🇰', 'PW': '🇵🇼', 'PA': '🇵🇦', 'PG': '🇵🇬', 'PY': '🇵🇾', 'PE': '🇵🇪', 'PH': '🇵🇭', 'PL': '🇵🇱', 'PT': '🇵🇹',
    'QA': '🇶🇦', 'RO': '🇷🇴', 'RU': '🇷🇺', 'RW': '🇷🇼', 'KN': '🇰🇳', 'LC': '🇱🇨', 'VC': '🇻🇨', 'WS': '🇼🇸', 'SM': '🇸🇲', 'ST': '🇸🇹',
    'SA': '🇸🇦', 'SN': '🇸🇳', 'RS': '🇸🇷', 'SC': '🇸🇨', 'SL': '🇸🇱', 'SG': '🇸🇬', 'SK': '🇸🇰', 'SI': '🇸🇮', 'SB': '🇸🇧', 'SO': '🇸🇴',
    'ZA': '🇿🇦', 'SS': '🇸🇸', 'ES': '🇪🇸', 'LK': '🇱🇰', 'SD': '🇸🇩', 'SR': '🇸🇷', 'SE': '🇸🇪', 'CH': '🇨🇭', 'SY': '🇸🇾', 'TW': '🇹🇼',
    'TJ': '🇹🇯', 'TZ': '🇹ℤ', 'TH': '🇹🇭', 'TL': '🇹🇱', 'TG': '🇹🇬', 'TO': '🇹🇴', 'TT': '🇹🇹', 'TN': '🇹🇳', 'TR': '🇹🇷', 'TM': '🇹🇲',
    'TV': '🇹🇻', 'UG': '🇺🇬', 'UA': '🇺🇦', 'AE': '🇦🇪', 'GB': '🇬🇧', 'US': '🇺🇸', 'UY': '🇺🇾', 'UZ': '🇺🇿', 'VU': '🇻🇺', 'VA': '🇻🇦',
    'VE': '🇻🇪', 'VN': '🇻🇳', 'YE': '🇾🇪', 'ZM': '🇿🇲', 'ZW': '🇿🇼'
}

fields_list = [
    {
        "id": "cs_it",
        "name": "Computer Science, IT & Software Engineering",
        "category": "Technology & Computing",
        "description": "Software Engineering, Artificial Intelligence, Data Science, Cybersecurity, Cloud Infrastructure, and Information Systems.",
        "globalAvgPercentage": 7.5,
        "iconName": "Laptop"
    },
    {
        "id": "business_mgmt",
        "name": "Business, Commerce & Management",
        "category": "Business & Finance",
        "description": "Business Administration (MBA), Finance, Accounting, Marketing, International Commerce, Supply Chain, and Human Resources.",
        "globalAvgPercentage": 19.2,
        "iconName": "Briefcase"
    },
    {
        "id": "engineering",
        "name": "Engineering & Industrial Technology",
        "category": "STEM & Industrial",
        "description": "Electrical, Mechanical, Civil, Chemical, Biomedical, Aerospace, Materials, and Industrial Systems Engineering.",
        "globalAvgPercentage": 11.4,
        "iconName": "Wrench"
    },
    {
        "id": "healthcare_med",
        "name": "Health Professions & Medical Sciences",
        "category": "Healthcare & Life Sciences",
        "description": "General Medicine (MD/MBBS), Nursing, Pharmacy, Dentistry, Public Health, Medical Laboratory Science, and Rehabilitation.",
        "globalAvgPercentage": 12.8,
        "iconName": "HeartPulse"
    },
    {
        "id": "bio_phys_sci",
        "name": "Biological, Chemical & Physical Sciences",
        "category": "Natural Sciences",
        "description": "Biochemistry, Molecular Biology, Chemistry, Physics, Genetics, Environmental Biology, and Neuroscience.",
        "globalAvgPercentage": 5.8,
        "iconName": "Atom"
    },
    {
        "id": "social_econ",
        "name": "Social Sciences, Economics & History",
        "category": "Humanities & Social Sciences",
        "description": "Economics, Political Science, International Relations, Sociology, Anthropology, History, and Public Policy.",
        "globalAvgPercentage": 8.9,
        "iconName": "Globe2"
    },
    {
        "id": "arts_design",
        "name": "Arts, Design & Fine Humanities",
        "category": "Creative & Cultural Arts",
        "description": "Graphic & UI/UX Design, Fine Arts, Architecture, Performing Arts, Music, Film & Media Production, and Industrial Design.",
        "globalAvgPercentage": 5.2,
        "iconName": "Palette"
    },
    {
        "id": "education",
        "name": "Education & Teaching Pedagogy",
        "category": "Education & Services",
        "description": "Primary & Secondary Pedagogy, Special Education, STEM Teacher Training, Educational Leadership, and Curriculum Design.",
        "globalAvgPercentage": 8.1,
        "iconName": "GraduationCap"
    },
    {
        "id": "law_legal",
        "name": "Law, Legal Studies & Criminal Justice",
        "category": "Law & Public Safety",
        "description": "Juris Doctor (JD) / LL.B, Corporate & International Law, Criminology, Legal Studies, and Intellectual Property.",
        "globalAvgPercentage": 4.6,
        "iconName": "Scale"
    },
    {
        "id": "trades_precision",
        "name": "Trades, Construction & Precision Craft",
        "category": "Vocational & Technical Trades",
        "description": "Electrical Systems, HVAC Technology, Precision Machining, Automotive Engineering, Plumbing, Welding, and Automation.",
        "globalAvgPercentage": 10.5,
        "iconName": "Hammer"
    },
    {
        "id": "agri_env",
        "name": "Agriculture, Forestry & Environmental Sciences",
        "category": "Agriculture & Environment",
        "description": "Agronomy, Food Security Sciences, Environmental Protection, Forestry, Veterinary Medicine, and Agribusiness.",
        "globalAvgPercentage": 3.8,
        "iconName": "Sprout"
    },
    {
        "id": "math_stats",
        "name": "Mathematics, Statistics & Actuarial Science",
        "category": "Mathematics & Data Analytics",
        "description": "Applied Mathematics, Mathematical Statistics, Actuarial Science, Quantitative Finance, and Cryptography.",
        "globalAvgPercentage": 2.2,
        "iconName": "Calculator"
    }
]

# US States Data Profile
us_state_profiles = [
    ("California", 14200000, ["Stanford University", "UC Berkeley", "Caltech", "UCLA", "USC"]),
    ("Texas", 8900000, ["UT Austin", "Texas A&M University", "Rice University", "University of Houston"]),
    ("New York", 7500000, ["Columbia University", "Cornell University", "NYU", "University at Buffalo"]),
    ("Florida", 6800000, ["University of Florida", "Florida State University", "University of Miami", "UCF"]),
    ("Illinois", 4500000, ["Northwestern University", "University of Chicago", "UIUC", "UIC"]),
    ("Pennsylvania", 4200000, ["University of Pennsylvania", "Carnegie Mellon", "Penn State", "Temple University"]),
    ("Ohio", 3600000, ["Ohio State University", "Case Western Reserve", "University of Cincinnati"]),
    ("Georgia", 3400000, ["Georgia Tech", "Emory University", "University of Georgia"]),
    ("North Carolina", 3300000, ["UNC Chapel Hill", "Duke University", "NC State University"]),
    ("Michigan", 3200000, ["University of Michigan", "Michigan State", "Wayne State University"]),
    ("New Jersey", 3100000, ["Princeton University", "Rutgers University", "NJIT"]),
    ("Virginia", 3000000, ["University of Virginia", "Virginia Tech", "William & Mary", "George Mason"]),
    ("Washington", 2800000, ["University of Washington", "Washington State University", "Seattle University"]),
    ("Massachusetts", 2700000, ["MIT", "Harvard University", "Boston University", "Northeastern", "Tufts"]),
    ("Arizona", 2300000, ["Arizona State University", "University of Arizona", "Northern Arizona Univ"]),
    ("Indiana", 2100000, ["Purdue University", "Indiana University Bloomington", "Notre Dame"]),
    ("Tennessee", 1950000, ["Vanderbilt University", "UT Knoxville", "University of Memphis"]),
    ("Missouri", 1850000, ["Washington University in St. Louis", "Mizzou", "SLU"]),
    ("Maryland", 2200000, ["Johns Hopkins University", "UMD College Park", "UMBC"]),
    ("Wisconsin", 1800000, ["UW-Madison", "Marquette University", "UW-Milwaukee"]),
    ("Minnesota", 1900000, ["University of Minnesota Twin Cities", "University of St. Thomas"]),
    ("Colorado", 2100000, ["CU Boulder", "Colorado School of Mines", "CSU Fort Collins", "DU"]),
    ("Alabama", 1300000, ["University of Alabama", "Auburn University", "UAB"]),
    ("South Carolina", 1450000, ["Clemson University", "University of South Carolina", "MUSC"]),
    ("Louisiana", 1200000, ["Tulane University", "LSU", "University of Louisiana"]),
    ("Kentucky", 1150000, ["University of Kentucky", "University of Louisville"]),
    ("Oregon", 1350000, ["University of Oregon", "Oregon State University", "OHSU"]),
    ("Oklahoma", 1050000, ["University of Oklahoma", "Oklahoma State University"]),
    ("Connecticut", 1250000, ["Yale University", "UConn", "Wesleyan University"]),
    ("Utah", 1100000, ["Brigham Young University", "University of Utah", "Utah State"]),
    ("Iowa", 980000, ["University of Iowa", "Iowa State University"]),
    ("Nevada", 850000, ["UNLV", "University of Nevada Reno"]),
    ("Arkansas", 780000, ["University of Arkansas", "Arkansas State"]),
    ("Mississippi", 690000, ["Ole Miss", "Mississippi State University"]),
    ("Kansas", 920000, ["University of Kansas", "Kansas State University"]),
    ("New Mexico", 580000, ["UNM", "New Mexico State University"]),
    ("Nebraska", 640000, ["University of Nebraska-Lincoln", "Creighton University"]),
    ("Idaho", 520000, ["Boise State University", "University of Idaho"]),
    ("West Virginia", 450000, ["West Virginia University", "Marshall University"]),
    ("Hawaii", 460000, ["University of Hawaii at Manoa"]),
    ("New Hampshire", 490000, ["Dartmouth College", "UNH"]),
    ("Maine", 440000, ["Bowdoin College", "University of Maine", "Bates College"]),
    ("Rhode Island", 380000, ["Brown University", "URI", "Rhode Island School of Design"]),
    ("Montana", 340000, ["Montana State University", "University of Montana"]),
    ("Delaware", 330000, ["University of Delaware"]),
    ("South Dakota", 270000, ["University of South Dakota", "South Dakota State"]),
    ("North Dakota", 250000, ["UND", "North Dakota State University"]),
    ("Alaska", 210000, ["University of Alaska Anchorage", "UAF"]),
    ("Vermont", 230000, ["University of Vermont", "Middlebury College"]),
    ("Wyoming", 170000, ["University of Wyoming"]),
    ("District of Columbia", 390000, ["Georgetown University", "George Washington Univ", "Howard Univ"]),
    ("Puerto Rico", 720000, ["University of Puerto Rico - Mayagüez", "UPR Río Piedras"])
]

# Canadian Provinces Data Profile
canada_province_profiles = [
    ("Ontario", 5800000, ["University of Toronto", "University of Waterloo", "McMaster University", "Western University", "Queen's University"]),
    ("Quebec", 3400000, ["McGill University", "Université de Montréal", "Concordia University", "Laval University"]),
    ("British Columbia", 2200000, ["University of British Columbia", "Simon Fraser University", "University of Victoria"]),
    ("Alberta", 1700000, ["University of Alberta", "University of Calgary", "University of Lethbridge"]),
    ("Manitoba", 480000, ["University of Manitoba", "University of Winnipeg"]),
    ("Saskatchewan", 420000, ["University of Saskatchewan", "University of Regina"]),
    ("Nova Scotia", 380000, ["Dalhousie University", "Saint Mary's University"]),
    ("New Brunswick", 260000, ["University of New Brunswick", "Université de Moncton"]),
    ("Newfoundland and Labrador", 180000, ["Memorial University of Newfoundland"]),
    ("Prince Edward Island", 62000, ["University of Prince Edward Island"]),
    ("Northwest Territories", 18000, ["Aurora College"]),
    ("Nunavut", 9000, ["Nunavut Arctic College"]),
    ("Yukon", 16000, ["Yukon University"])
]

def format_count(count):
    if count >= 1000000:
        val = count / 1000000.0
        return f"{val:.2f} Million" if val < 10 else f"{val:.1f} Million"
    elif count >= 1000:
        return f"{int(count):,}"
    else:
        return str(int(count))

# Build country entries for each field
dataset = []

# Estimate tertiary percentage for each country based on region/population
def get_tertiary_pop(pop, region, code):
    if code == 'US': return 112000000
    if code == 'CA': return 14600000
    if code == 'IN': return 118000000
    if code == 'CN': return 218000000
    if code == 'JP': return 48000000
    if code == 'DE': return 24500000
    if code == 'GB': return 22800000
    if code == 'FR': return 21500000
    if code == 'BR': return 32000000
    if code == 'PH': return 18200000
    if code == 'AU': return 9800000
    if code == 'KR': return 22400000
    
    # Defaults based on region tertiary enrollment rates
    rates = {'Europe': 0.38, 'Americas': 0.32, 'Asia': 0.24, 'Oceania': 0.35, 'Africa': 0.12}
    rate = rates.get(region, 0.20)
    # Assume 65% of pop is working-age adult
    return int(pop * 0.65 * rate)

# Specific multipliers per field per region/country to ensure realistic variation
field_multipliers = {
    "cs_it": {"US": 1.1, "IN": 1.8, "PH": 1.5, "EE": 1.9, "IL": 1.7, "FI": 1.4, "SG": 1.5, "RO": 1.4, "DE": 1.1},
    "business_mgmt": {"US": 1.2, "GB": 1.3, "SG": 1.4, "CA": 1.1, "HK": 1.5, "FR": 1.2, "AE": 1.4},
    "engineering": {"DE": 1.6, "JP": 1.5, "KR": 1.6, "CN": 1.7, "IN": 1.5, "RU": 1.4, "CH": 1.3},
    "healthcare_med": {"US": 1.2, "CU": 1.9, "PH": 1.6, "IN": 1.1, "GB": 1.3, "SE": 1.3},
}

def generate_gender_breakdown(field_id, grad_count, code):
    # Base female percentages per field
    base_female_pct = {
        "cs_it": 26.0,
        "business_mgmt": 50.0,
        "engineering": 22.0,
        "healthcare_med": 72.0,
        "bio_phys_sci": 51.0,
        "social_econ": 55.0,
        "arts_design": 62.0,
        "education": 74.0,
        "law_legal": 53.0,
        "trades_precision": 11.0,
        "agri_env": 44.0,
        "math_stats": 41.0
    }.get(field_id, 50.0)

    # Country modifier
    var = ((ord(code[0]) * 11 + ord(code[-1]) * 17) % 15 - 7) / 10.0
    f_pct = round(max(5.0, min(90.0, base_female_pct + var)), 1)
    nb_pct = 1.5 if code in ['US', 'CA', 'GB', 'AU', 'NZ', 'DE', 'SE', 'NL'] else 0.5
    m_pct = round(100.0 - f_pct - nb_pct, 1)

    f_count = int(grad_count * (f_pct / 100.0))
    m_count = int(grad_count * (m_pct / 100.0))
    nb_count = max(0, grad_count - f_count - m_count)

    return [
        {"gender": "Female", "percentage": f_pct, "count": f_count, "countFormatted": format_count(f_count)},
        {"gender": "Male", "percentage": m_pct, "count": m_count, "countFormatted": format_count(m_count)},
        {"gender": "Non-Binary / Unspecified", "percentage": nb_pct, "count": nb_count, "countFormatted": format_count(nb_count)}
    ]

def generate_age_breakdown(field_id, grad_count, code):
    if field_id in ['cs_it', 'arts_design']:
        base_pcts = [32.0, 42.0, 18.0, 8.0]
    elif field_id in ['healthcare_med', 'law_legal']:
        base_pcts = [20.0, 41.0, 26.0, 13.0]
    elif field_id in ['education', 'business_mgmt']:
        base_pcts = [24.0, 36.0, 25.0, 15.0]
    elif field_id in ['trades_precision', 'agri_env']:
        base_pcts = [26.0, 35.0, 24.0, 15.0]
    else:
        base_pcts = [27.0, 38.0, 22.0, 13.0]

    shift = ((ord(code[0]) * 5 + ord(code[-1]) * 3) % 9 - 4) / 10.0
    p0 = round(max(10.0, base_pcts[0] + shift), 1)
    p1 = round(max(15.0, base_pcts[1] - shift * 0.5), 1)
    p2 = round(max(10.0, base_pcts[2] - shift * 0.3), 1)
    p3 = round(100.0 - p0 - p1 - p2, 1)

    brackets = [
        ("18–24", "New & Recent Graduates", p0),
        ("25–34", "Early Career Professionals", p1),
        ("35–49", "Mid-Career Specialists", p2),
        ("50+", "Senior & Executive Level", p3)
    ]

    res = []
    accum_count = 0
    for idx, (b, label, pct) in enumerate(brackets):
        if idx == 3:
            cnt = max(0, grad_count - accum_count)
        else:
            cnt = int(grad_count * (pct / 100.0))
            accum_count += cnt
        res.append({
            "bracket": b,
            "label": label,
            "percentage": pct,
            "count": cnt,
            "countFormatted": format_count(cnt)
        })
    return res

for field in fields_list:
    field_id = field["id"]
    base_pct = field["globalAvgPercentage"]
    
    country_entries = []
    
    for code, meta in sorted(countries_meta.items(), key=lambda x: x[1]['name']):
        name = meta['name']
        region = meta['region']
        pop = meta['population']
        flag = FLAG_MAP.get(code, '🌐')
        
        tert_pop = get_tertiary_pop(pop, region, code)
        if tert_pop < 1000:
            tert_pop = max(1000, int(pop * 0.15))
            
        # calculate percentage
        mult = field_multipliers.get(field_id, {}).get(code, 1.0)
        # add deterministic variation based on code hash
        var = ((ord(code[0]) * 7 + ord(code[1]) * 13) % 25 - 12) / 100.0
        pct = round(max(1.2, min(35.0, base_pct * mult + var)), 1)
        
        grad_count = int(tert_pop * (pct / 100.0))
        annual_new = int(grad_count * 0.045)
        
        unis = [
            f"{name} National University",
            f"University of {meta['capital'] or name}",
            f"{name} Institute of Technology"
        ]
        if code == 'US': unis = ["Harvard University", "MIT", "Stanford University", "UC Berkeley", "Carnegie Mellon"]
        if code == 'CA': unis = ["University of Toronto", "UBC", "McGill University", "University of Waterloo"]
        if code == 'GB': unis = ["University of Oxford", "University of Cambridge", "Imperial College London", "UCL"]
        if code == 'DE': unis = ["TU Munich", "LMU Munich", "RWTH Aachen", "Heidelberg University"]
        if code == 'JP': unis = ["University of Tokyo", "Kyoto University", "Tokyo Tech", "Waseda"]
        if code == 'IN': unis = ["IIT Bombay", "IIT Delhi", "IIT Madras", "IISc Bangalore"]
        if code == 'PH': unis = ["University of the Philippines", "Ateneo de Manila", "De La Salle University"]
        if code == 'AU': unis = ["University of Melbourne", "University of Sydney", "UNSW", "ANU"]

        gender_data = generate_gender_breakdown(field_id, grad_count, code)
        age_data = generate_age_breakdown(field_id, grad_count, code)

        entry = {
            "countryCode": code,
            "countryName": name,
            "flag": flag,
            "region": region,
            "tertiaryEducatedPopulation": tert_pop,
            "tertiaryEducatedFormatted": format_count(tert_pop),
            "percentageInField": pct,
            "actualGraduatesCount": grad_count,
            "actualGraduatesFormatted": format_count(grad_count),
            "annualNewGraduates": annual_new,
            "annualNewGraduatesFormatted": f"{format_count(annual_new)} / yr",
            "topUniversities": unis,
            "genderBreakdown": gender_data,
            "ageBracketBreakdown": age_data
        }
        
        # Add US State Breakdown for US
        if code == 'US':
            us_states = []
            for st_name, st_tert_pop, st_unis in us_state_profiles:
                # state variation
                st_var = ((hash(st_name) % 20) - 10) / 10.0
                st_pct = round(max(1.5, min(32.0, pct + st_var)), 1)
                st_grad_count = int(st_tert_pop * (st_pct / 100.0))
                st_annual = int(st_grad_count * 0.045)
                us_states.append({
                    "stateName": st_name,
                    "tertiaryEducatedPopulation": st_tert_pop,
                    "tertiaryEducatedFormatted": format_count(st_tert_pop),
                    "percentageInField": st_pct,
                    "actualGraduatesCount": st_grad_count,
                    "actualGraduatesFormatted": format_count(st_grad_count),
                    "annualNewGraduates": st_annual,
                    "annualNewGraduatesFormatted": f"{format_count(st_annual)} / yr",
                    "topUniversities": st_unis,
                    "genderBreakdown": generate_gender_breakdown(field_id, st_grad_count, 'US'),
                    "ageBracketBreakdown": generate_age_breakdown(field_id, st_grad_count, 'US')
                })
            us_states.sort(key=lambda x: x["actualGraduatesCount"], reverse=True)
            entry["usStateBreakdown"] = us_states

        # Add Canada Province Breakdown for CA
        if code == 'CA':
            ca_provs = []
            for prov_name, prov_tert_pop, prov_unis in canada_province_profiles:
                prov_var = ((hash(prov_name) % 18) - 9) / 10.0
                prov_pct = round(max(1.5, min(30.0, pct + prov_var)), 1)
                prov_grad_count = int(prov_tert_pop * (prov_pct / 100.0))
                prov_annual = int(prov_grad_count * 0.045)
                ca_provs.append({
                    "provinceName": prov_name,
                    "tertiaryEducatedPopulation": prov_tert_pop,
                    "tertiaryEducatedFormatted": format_count(prov_tert_pop),
                    "percentageInField": prov_pct,
                    "actualGraduatesCount": prov_grad_count,
                    "actualGraduatesFormatted": format_count(prov_grad_count),
                    "annualNewGraduates": prov_annual,
                    "annualNewGraduatesFormatted": f"{format_count(prov_annual)} / yr",
                    "topUniversities": prov_unis,
                    "genderBreakdown": generate_gender_breakdown(field_id, prov_grad_count, 'CA'),
                    "ageBracketBreakdown": generate_age_breakdown(field_id, prov_grad_count, 'CA')
                })
            ca_provs.sort(key=lambda x: x["actualGraduatesCount"], reverse=True)
            entry["canadaProvinceBreakdown"] = ca_provs

        country_entries.append(entry)

    country_entries.sort(key=lambda x: x["actualGraduatesCount"], reverse=True)
    
    dataset.append({
        "fieldId": field["id"],
        "fieldName": field["name"],
        "category": field["category"],
        "description": field["description"],
        "iconName": field["iconName"],
        "globalAvgPercentage": field["globalAvgPercentage"],
        "countryData": country_entries
    })

print(f"Generated fields of study dataset with {len(dataset)} major fields across 197 countries!")

# Output to src/data/fieldOfStudiesData.ts
out_ts = f"""export interface GenderBreakdown {{
  gender: 'Female' | 'Male' | 'Non-Binary / Unspecified';
  percentage: number;
  count: number;
  countFormatted: string;
}}

export interface AgeBracketBreakdown {{
  bracket: '18–24' | '25–34' | '35–49' | '50+';
  label: string;
  percentage: number;
  count: number;
  countFormatted: string;
}}

export interface StateFieldBreakdown {{
  stateName: string;
  tertiaryEducatedPopulation: number;
  tertiaryEducatedFormatted: string;
  percentageInField: number;
  actualGraduatesCount: number;
  actualGraduatesFormatted: string;
  annualNewGraduates: number;
  annualNewGraduatesFormatted: string;
  topUniversities: string[];
  genderBreakdown: GenderBreakdown[];
  ageBracketBreakdown: AgeBracketBreakdown[];
}}

export interface ProvinceFieldBreakdown {{
  provinceName: string;
  tertiaryEducatedPopulation: number;
  tertiaryEducatedFormatted: string;
  percentageInField: number;
  actualGraduatesCount: number;
  actualGraduatesFormatted: string;
  annualNewGraduates: number;
  annualNewGraduatesFormatted: string;
  topUniversities: string[];
  genderBreakdown: GenderBreakdown[];
  ageBracketBreakdown: AgeBracketBreakdown[];
}}

export interface CountryFieldData {{
  countryCode: string;
  countryName: string;
  flag: string;
  region: 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
  tertiaryEducatedPopulation: number;
  tertiaryEducatedFormatted: string;
  percentageInField: number;
  actualGraduatesCount: number;
  actualGraduatesFormatted: string;
  annualNewGraduates: number;
  annualNewGraduatesFormatted: string;
  topUniversities: string[];
  genderBreakdown: GenderBreakdown[];
  ageBracketBreakdown: AgeBracketBreakdown[];
  usStateBreakdown?: StateFieldBreakdown[];
  canadaProvinceBreakdown?: ProvinceFieldBreakdown[];
}}

export interface FieldOfStudyTopic {{
  fieldId: string;
  fieldName: string;
  category: string;
  description: string;
  iconName: string;
  globalAvgPercentage: number;
  countryData: CountryFieldData[];
}}

import fieldOfStudiesRaw from './fieldOfStudiesData.json';

export const FIELD_OF_STUDIES_DATASET: FieldOfStudyTopic[] = fieldOfStudiesRaw as FieldOfStudyTopic[];
"""

with open("src/data/fieldOfStudiesData.json", "w") as f:
    json.dump(dataset, f, indent=2)

with open("src/data/fieldOfStudiesData.ts", "w") as f:
    f.write(out_ts)

print("Successfully wrote src/data/fieldOfStudiesData.json and src/data/fieldOfStudiesData.ts!")

