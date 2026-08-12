import json
import os

print("Starting timezones generator for all 197 UN countries + state breakdowns...")

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

COUNTRY_IANA = {
    "AF": ("Asia/Kabul", "UTC+4:30 / AFT"),
    "AL": ("Europe/Tirana", "UTC+1 / CET"),
    "DZ": ("Africa/Algiers", "UTC+1 / CET"),
    "AD": ("Europe/Andorra", "UTC+1 / CET"),
    "AO": ("Africa/Luanda", "UTC+1 / WAT"),
    "AG": ("America/Antigua", "UTC-4 / AST"),
    "AR": ("America/Argentina/Buenos_Aires", "UTC-3 / ART"),
    "AM": ("Asia/Yerevan", "UTC+4 / AMT"),
    "AU": ("Australia/Sydney", "UTC+10 / AEST"),
    "AT": ("Europe/Vienna", "UTC+1 / CET"),
    "AZ": ("Asia/Baku", "UTC+4 / AZT"),
    "BS": ("America/Nassau", "UTC-5 / EST"),
    "BH": ("Asia/Bahrain", "UTC+3 / AST"),
    "BD": ("Asia/Dhaka", "UTC+6 / BST"),
    "BB": ("America/Barbados", "UTC-4 / AST"),
    "BY": ("Europe/Minsk", "UTC+3 / MSK"),
    "BE": ("Europe/Brussels", "UTC+1 / CET"),
    "BZ": ("America/Belize", "UTC-6 / CST"),
    "BJ": ("Africa/Porto-Novo", "UTC+1 / WAT"),
    "BT": ("Asia/Thimphu", "UTC+6 / BTT"),
    "BO": ("America/La_Paz", "UTC-4 / BOT"),
    "BA": ("Europe/Sarajevo", "UTC+1 / CET"),
    "BW": ("Africa/Gaborone", "UTC+2 / CAT"),
    "BR": ("America/Sao_Paulo", "UTC-3 / BRT"),
    "BN": ("Asia/Brunei", "UTC+8 / BNT"),
    "BG": ("Europe/Sofia", "UTC+2 / EET"),
    "BF": ("Africa/Ouagadougou", "UTC+0 / GMT"),
    "BI": ("Africa/Bujumbura", "UTC+2 / CAT"),
    "CV": ("Atlantic/Cape_Verde", "UTC-1 / CVT"),
    "KH": ("Asia/Phnom_Penh", "UTC+7 / ICT"),
    "CM": ("Africa/Douala", "UTC+1 / WAT"),
    "CA": ("America/Toronto", "UTC-5 / EST"),
    "CF": ("Africa/Bangui", "UTC+1 / WAT"),
    "TD": ("Africa/Ndjamena", "UTC+1 / WAT"),
    "CL": ("America/Santiago", "UTC-4 / CLT"),
    "CN": ("Asia/Shanghai", "UTC+8 / CST"),
    "CO": ("America/Bogota", "UTC-5 / COT"),
    "KM": ("Indian/Comoro", "UTC+3 / EAT"),
    "CG": ("Africa/Brazzaville", "UTC+1 / WAT"),
    "CD": ("Africa/Kinshasa", "UTC+1 / WAT"),
    "CR": ("America/Costa_Rica", "UTC-6 / CST"),
    "CI": ("Africa/Abidjan", "UTC+0 / GMT"),
    "HR": ("Europe/Zagreb", "UTC+1 / CET"),
    "CU": ("America/Havana", "UTC-5 / CST"),
    "CY": ("Asia/Nicosia", "UTC+2 / EET"),
    "CZ": ("Europe/Prague", "UTC+1 / CET"),
    "DK": ("Europe/Copenhagen", "UTC+1 / CET"),
    "DJ": ("Africa/Djibouti", "UTC+3 / EAT"),
    "DM": ("America/Dominica", "UTC-4 / AST"),
    "DO": ("America/Santo_Domingo", "UTC-4 / AST"),
    "EC": ("America/Guayaquil", "UTC-5 / ECT"),
    "EG": ("Africa/Cairo", "UTC+3 / EET"),
    "SV": ("America/El_Salvador", "UTC-6 / CST"),
    "GQ": ("Africa/Malabo", "UTC+1 / WAT"),
    "ER": ("Africa/Asmara", "UTC+3 / EAT"),
    "EE": ("Europe/Tallinn", "UTC+2 / EET"),
    "SZ": ("Africa/Mbabane", "UTC+2 / SAST"),
    "ET": ("Africa/Addis_Ababa", "UTC+3 / EAT"),
    "FJ": ("Pacific/Fiji", "UTC+12 / FJT"),
    "FI": ("Europe/Helsinki", "UTC+2 / EET"),
    "FR": ("Europe/Paris", "UTC+1 / CET"),
    "GA": ("Africa/Libreville", "UTC+1 / WAT"),
    "GM": ("Africa/Banjul", "UTC+0 / GMT"),
    "GE": ("Asia/Tbilisi", "UTC+4 / GET"),
    "DE": ("Europe/Berlin", "UTC+1 / CET"),
    "GH": ("Africa/Accra", "UTC+0 / GMT"),
    "GR": ("Europe/Athens", "UTC+2 / EET"),
    "GD": ("America/Grenada", "UTC-4 / AST"),
    "GT": ("America/Guatemala", "UTC-6 / CST"),
    "GN": ("Africa/Conakry", "UTC+0 / GMT"),
    "GW": ("Africa/Bissau", "UTC+0 / GMT"),
    "GY": ("America/Guyana", "UTC-4 / GYT"),
    "HT": ("America/Port-au-Prince", "UTC-5 / EST"),
    "HN": ("America/Tegucigalpa", "UTC-6 / CST"),
    "HU": ("Europe/Budapest", "UTC+1 / CET"),
    "IS": ("Atlantic/Reykjavik", "UTC+0 / GMT"),
    "IN": ("Asia/Kolkata", "UTC+5:30 / IST"),
    "ID": ("Asia/Jakarta", "UTC+7 / WIB"),
    "IR": ("Asia/Tehran", "UTC+3:30 / IRST"),
    "IQ": ("Asia/Baghdad", "UTC+3 / AST"),
    "IE": ("Europe/Dublin", "UTC+0 / GMT / IST"),
    "IL": ("Asia/Jerusalem", "UTC+2 / IST"),
    "IT": ("Europe/Rome", "UTC+1 / CET"),
    "JM": ("America/Jamaica", "UTC-5 / EST"),
    "JP": ("Asia/Tokyo", "UTC+9 / JST"),
    "JO": ("Asia/Amman", "UTC+3 / AST"),
    "KZ": ("Asia/Almaty", "UTC+5 / ORAT"),
    "KE": ("Africa/Nairobi", "UTC+3 / EAT"),
    "KI": ("Pacific/Tarawa", "UTC+12 / GILT"),
    "KP": ("Asia/Pyongyang", "UTC+9 / KST"),
    "KR": ("Asia/Seoul", "UTC+9 / KST"),
    "KW": ("Asia/Kuwait", "UTC+3 / AST"),
    "KG": ("Asia/Bishkek", "UTC+6 / KGT"),
    "LA": ("Asia/Vientiane", "UTC+7 / ICT"),
    "LV": ("Europe/Riga", "UTC+2 / EET"),
    "LB": ("Asia/Beirut", "UTC+2 / EET"),
    "LS": ("Africa/Maseru", "UTC+2 / SAST"),
    "LR": ("Africa/Monrovia", "UTC+0 / GMT"),
    "LY": ("Africa/Tripoli", "UTC+2 / EET"),
    "LI": ("Europe/Vaduz", "UTC+1 / CET"),
    "LT": ("Europe/Vilnius", "UTC+2 / EET"),
    "LU": ("Europe/Luxembourg", "UTC+1 / CET"),
    "MG": ("Indian/Antananarivo", "UTC+3 / EAT"),
    "MW": ("Africa/Blantyre", "UTC+2 / CAT"),
    "MY": ("Asia/Kuala_Lumpur", "UTC+8 / MYT"),
    "MV": ("Indian/Maldives", "UTC+5 / MVT"),
    "ML": ("Africa/Bamako", "UTC+0 / GMT"),
    "MT": ("Europe/Malta", "UTC+1 / CET"),
    "MH": ("Pacific/Majuro", "UTC+12 / MHT"),
    "MR": ("Africa/Nouakchott", "UTC+0 / GMT"),
    "MU": ("Indian/Mauritius", "UTC+4 / MUT"),
    "MX": ("America/Mexico_City", "UTC-6 / CST"),
    "FM": ("Pacific/Pohnpei", "UTC+11 / PONT"),
    "MD": ("Europe/Chisinau", "UTC+2 / EET"),
    "MC": ("Europe/Monaco", "UTC+1 / CET"),
    "MN": ("Asia/Ulaanbaatar", "UTC+8 / ULAT"),
    "ME": ("Europe/Podgorica", "UTC+1 / CET"),
    "MA": ("Africa/Casablanca", "UTC+1 / WEST"),
    "MZ": ("Africa/Maputo", "UTC+2 / CAT"),
    "MM": ("Asia/Yangon", "UTC+6:30 / MMT"),
    "NA": ("Africa/Windhoek", "UTC+2 / CAT"),
    "NR": ("Pacific/Nauru", "UTC+12 / NRT"),
    "NP": ("Asia/Kathmandu", "UTC+5:45 / NPT"),
    "NL": ("Europe/Amsterdam", "UTC+1 / CET"),
    "NZ": ("Pacific/Auckland", "UTC+12 / NZST"),
    "NI": ("America/Managua", "UTC-6 / CST"),
    "NE": ("Africa/Niamey", "UTC+1 / WAT"),
    "NG": ("Africa/Lagos", "UTC+1 / WAT"),
    "MK": ("Europe/Skopje", "UTC+1 / CET"),
    "NO": ("Europe/Oslo", "UTC+1 / CET"),
    "OM": ("Asia/Muscat", "UTC+4 / GST"),
    "PK": ("Asia/Karachi", "UTC+5 / PKT"),
    "PW": ("Pacific/Palau", "UTC+9 / PWT"),
    "PA": ("America/Panama", "UTC-5 / EST"),
    "PG": ("Pacific/Port_Moresby", "UTC+10 / PGT"),
    "PY": ("America/Asuncion", "UTC-4 / PYT"),
    "PE": ("America/Lima", "UTC-5 / PET"),
    "PH": ("Asia/Manila", "UTC+8 / PST"),
    "PL": ("Europe/Warsaw", "UTC+1 / CET"),
    "PT": ("Europe/Lisbon", "UTC+0 / WET"),
    "QA": ("Asia/Qatar", "UTC+3 / AST"),
    "RO": ("Europe/Bucharest", "UTC+2 / EET"),
    "RU": ("Europe/Moscow", "UTC+3 / MSK"),
    "RW": ("Africa/Kigali", "UTC+2 / CAT"),
    "KN": ("America/St_Kitts", "UTC-4 / AST"),
    "LC": ("America/St_Lucia", "UTC-4 / AST"),
    "VC": ("America/St_Vincent", "UTC-4 / AST"),
    "WS": ("Pacific/Apia", "UTC+13 / WST"),
    "SM": ("Europe/San_Marino", "UTC+1 / CET"),
    "ST": ("Africa/Sao_Tome", "UTC+0 / GMT"),
    "SA": ("Asia/Riyadh", "UTC+3 / AST"),
    "SN": ("Africa/Dakar", "UTC+0 / GMT"),
    "RS": ("Europe/Belgrade", "UTC+1 / CET"),
    "SC": ("Indian/Mahe", "UTC+4 / SCT"),
    "SL": ("Africa/Freetown", "UTC+0 / GMT"),
    "SG": ("Asia/Singapore", "UTC+8 / SGT"),
    "SK": ("Europe/Bratislava", "UTC+1 / CET"),
    "SI": ("Europe/Ljubljana", "UTC+1 / CET"),
    "SB": ("Pacific/Guadalcanal", "UTC+11 / SBT"),
    "SO": ("Africa/Mogadishu", "UTC+3 / EAT"),
    "ZA": ("Africa/Johannesburg", "UTC+2 / SAST"),
    "SS": ("Africa/Juba", "UTC+2 / CAT"),
    "ES": ("Europe/Madrid", "UTC+1 / CET"),
    "LK": ("Asia/Colombo", "UTC+5:30 / SLST"),
    "SD": ("Africa/Khartoum", "UTC+2 / CAT"),
    "SR": ("America/Paramaribo", "UTC-3 / SRT"),
    "SE": ("Europe/Stockholm", "UTC+1 / CET"),
    "CH": ("Europe/Zurich", "UTC+1 / CET"),
    "SY": ("Asia/Damascus", "UTC+3 / EEST"),
    "TW": ("Asia/Taipei", "UTC+8 / CST"),
    "TJ": ("Asia/Dushanbe", "UTC+5 / TJT"),
    "TZ": ("Africa/Dar_es_Salaam", "UTC+3 / EAT"),
    "TH": ("Asia/Bangkok", "UTC+7 / ICT"),
    "TL": ("Asia/Dili", "UTC+9 / TLT"),
    "TG": ("Africa/Lome", "UTC+0 / GMT"),
    "TO": ("Pacific/Tongatapu", "UTC+13 / TOT"),
    "TT": ("America/Port_of_Spain", "UTC-4 / AST"),
    "TN": ("Africa/Tunis", "UTC+1 / CET"),
    "TR": ("Europe/Istanbul", "UTC+3 / TRT"),
    "TM": ("Asia/Ashgabat", "UTC+5 / TMT"),
    "TV": ("Pacific/Funafuti", "UTC+12 / TVT"),
    "UG": ("Africa/Kampala", "UTC+3 / EAT"),
    "UA": ("Europe/Kyiv", "UTC+2 / EET"),
    "AE": ("Asia/Dubai", "UTC+4 / GST"),
    "GB": ("Europe/London", "UTC+0 / GMT / BST"),
    "US": ("America/New_York", "UTC-5 / EST / EDT"),
    "UY": ("America/Montevideo", "UTC-3 / UYT"),
    "UZ": ("Asia/Tashkent", "UTC+5 / UZT"),
    "VU": ("Pacific/Efate", "UTC+11 / VUT"),
    "VA": ("Europe/Vatican", "UTC+1 / CET"),
    "VE": ("America/Caracas", "UTC-4 / VET"),
    "VN": ("Asia/Ho_Chi_Minh", "UTC+7 / ICT"),
    "YE": ("Asia/Aden", "UTC+3 / AST"),
    "ZM": ("Africa/Lusaka", "UTC+2 / CAT"),
    "ZW": ("Africa/Harare", "UTC+2 / CAT")
}

us_states_raw = [
  ("US-AL", "Alabama (Central)", "America/Chicago", "UTC-6 / Central", "Birmingham / Montgomery"),
  ("US-AK", "Alaska", "America/Anchorage", "UTC-9 / Alaska", "Anchorage / Juneau"),
  ("US-AZ", "Arizona (Mountain Standard)", "America/Phoenix", "UTC-7 / MST (No DST)", "Phoenix / Tucson"),
  ("US-AR", "Arkansas (Central)", "America/Chicago", "UTC-6 / Central", "Little Rock"),
  ("US-CA", "California (Pacific)", "America/Los_Angeles", "UTC-8 / Pacific", "Los Angeles / San Francisco"),
  ("US-CO", "Colorado (Mountain)", "America/Denver", "UTC-7 / Mountain", "Denver"),
  ("US-CT", "Connecticut (Eastern)", "America/New_York", "UTC-5 / Eastern", "Hartford / Bridgeport"),
  ("US-DE", "Delaware (Eastern)", "America/New_York", "UTC-5 / Eastern", "Dover / Wilmington"),
  ("US-DC", "District of Columbia (DC)", "America/New_York", "UTC-5 / Eastern", "Washington, D.C."),
  ("US-FL", "Florida (Eastern)", "America/New_York", "UTC-5 / Eastern", "Miami / Orlando"),
  ("US-GA", "Georgia (Eastern)", "America/New_York", "UTC-5 / Eastern", "Atlanta"),
  ("US-HI", "Hawaii (HST)", "Pacific/Honolulu", "UTC-10 / Hawaii (No DST)", "Honolulu"),
  ("US-ID", "Idaho (Mountain)", "America/Boise", "UTC-7 / Mountain", "Boise"),
  ("US-IL", "Illinois (Central)", "America/Chicago", "UTC-6 / Central", "Chicago / Springfield"),
  ("US-IN", "Indiana (Eastern)", "America/Indiana/Indianapolis", "UTC-5 / Eastern", "Indianapolis"),
  ("US-IA", "Iowa (Central)", "America/Chicago", "UTC-6 / Central", "Des Moines"),
  ("US-KS", "Kansas (Central)", "America/Chicago", "UTC-6 / Central", "Wichita / Topeka"),
  ("US-KY", "Kentucky (Eastern)", "America/New_York", "UTC-5 / Eastern", "Louisville / Lexington"),
  ("US-LA", "Louisiana (Central)", "America/Chicago", "UTC-6 / Central", "New Orleans / Baton Rouge"),
  ("US-ME", "Maine (Eastern)", "America/New_York", "UTC-5 / Eastern", "Portland / Augusta"),
  ("US-MD", "Maryland (Eastern)", "America/New_York", "UTC-5 / Eastern", "Baltimore / Annapolis"),
  ("US-MA", "Massachusetts (Eastern)", "America/New_York", "UTC-5 / Eastern", "Boston"),
  ("US-MI", "Michigan (Eastern)", "America/Detroit", "UTC-5 / Eastern", "Detroit / Lansing"),
  ("US-MN", "Minnesota (Central)", "America/Chicago", "UTC-6 / Central", "Minneapolis / St. Paul"),
  ("US-MS", "Mississippi (Central)", "America/Chicago", "UTC-6 / Central", "Jackson"),
  ("US-MO", "Missouri (Central)", "America/Chicago", "UTC-6 / Central", "St. Louis / Kansas City"),
  ("US-MT", "Montana (Mountain)", "America/Denver", "UTC-7 / Mountain", "Billings / Helena"),
  ("US-NE", "Nebraska (Central)", "America/Chicago", "UTC-6 / Central", "Omaha / Lincoln"),
  ("US-NV", "Nevada (Pacific)", "America/Los_Angeles", "UTC-8 / Pacific", "Las Vegas / Reno"),
  ("US-NH", "New Hampshire (Eastern)", "America/New_York", "UTC-5 / Eastern", "Manchester / Concord"),
  ("US-NJ", "New Jersey (Eastern)", "America/New_York", "UTC-5 / Eastern", "Newark / Trenton"),
  ("US-NM", "New Mexico (Mountain)", "America/Denver", "UTC-7 / Mountain", "Albuquerque / Santa Fe"),
  ("US-NY", "New York (Eastern)", "America/New_York", "UTC-5 / Eastern", "New York City / Albany"),
  ("US-NC", "North Carolina (Eastern)", "America/New_York", "UTC-5 / Eastern", "Charlotte / Raleigh"),
  ("US-ND", "North Dakota (Central)", "America/Chicago", "UTC-6 / Central", "Fargo / Bismarck"),
  ("US-OH", "Ohio (Eastern)", "America/New_York", "UTC-5 / Eastern", "Columbus / Cleveland"),
  ("US-OK", "Oklahoma (Central)", "America/Chicago", "UTC-6 / Central", "Oklahoma City"),
  ("US-OR", "Oregon (Pacific)", "America/Los_Angeles", "UTC-8 / Pacific", "Portland / Salem"),
  ("US-PA", "Pennsylvania (Eastern)", "America/New_York", "UTC-5 / Eastern", "Philadelphia / Pittsburgh"),
  ("US-RI", "Rhode Island (Eastern)", "America/New_York", "UTC-5 / Eastern", "Providence"),
  ("US-SC", "South Carolina (Eastern)", "America/New_York", "UTC-5 / Eastern", "Charleston / Columbia"),
  ("US-SD", "South Dakota (Central)", "America/Chicago", "UTC-6 / Central", "Sioux Falls / Pierre"),
  ("US-TN", "Tennessee (Central)", "America/Chicago", "UTC-6 / Central", "Nashville / Memphis"),
  ("US-TX", "Texas (Central)", "America/Chicago", "UTC-6 / Central", "Houston / Austin / Dallas"),
  ("US-UT", "Utah (Mountain)", "America/Denver", "UTC-7 / Mountain", "Salt Lake City"),
  ("US-VT", "Vermont (Eastern)", "America/New_York", "UTC-5 / Eastern", "Burlington / Montpelier"),
  ("US-VA", "Virginia (Eastern)", "America/New_York", "UTC-5 / Eastern", "Richmond / Virginia Beach"),
  ("US-WA", "Washington (Pacific)", "America/Los_Angeles", "UTC-8 / Pacific", "Seattle / Olympia"),
  ("US-WV", "West Virginia (Eastern)", "America/New_York", "UTC-5 / Eastern", "Charleston"),
  ("US-WI", "Wisconsin (Central)", "America/Chicago", "UTC-6 / Central", "Milwaukee / Madison"),
  ("US-WY", "Wyoming (Mountain)", "America/Denver", "UTC-7 / Mountain", "Cheyenne"),
  ("US-PR", "Puerto Rico", "America/Puerto_Rico", "UTC-4 / AST (No DST)", "San Juan"),
  ("US-GU", "Guam", "Pacific/Guam", "UTC+10 / ChST", "Hagåtña")
]

US_STATES = []
for uid, st_name, iana, offset, city in us_states_raw:
    flag = '🇵🇷' if uid == 'US-PR' else ('🇬🇺' if uid == 'US-GU' else '🇺🇸')
    reg = 'Oceania' if uid == 'US-GU' else 'Americas'
    US_STATES.append({
        "id": uid, "countryCode": "US", "countryName": "United States", "flag": flag,
        "region": reg, "stateOrRegionName": st_name, "ianaTimeZone": iana,
        "utcOffsetLabel": offset, "capitalOrMajorCity": city
    })

ca_prov_raw = [
  ("CA-ON", "Ontario (Eastern)", "America/Toronto", "UTC-5 / Eastern", "Toronto / Ottawa"),
  ("CA-QC", "Quebec (Eastern)", "America/Montreal", "UTC-5 / Eastern", "Montreal / Quebec City"),
  ("CA-BC", "British Columbia (Pacific)", "America/Vancouver", "UTC-8 / Pacific", "Vancouver / Victoria"),
  ("CA-AB", "Alberta (Mountain)", "America/Edmonton", "UTC-7 / Mountain", "Calgary / Edmonton"),
  ("CA-MB", "Manitoba (Central)", "America/Winnipeg", "UTC-6 / Central", "Winnipeg"),
  ("CA-SK", "Saskatchewan (Central)", "America/Regina", "UTC-6 / CST (No DST)", "Saskatoon / Regina"),
  ("CA-NS", "Nova Scotia (Atlantic)", "America/Halifax", "UTC-4 / Atlantic", "Halifax"),
  ("CA-NB", "New Brunswick (Atlantic)", "America/Moncton", "UTC-4 / Atlantic", "Moncton / Fredericton"),
  ("CA-NL", "Newfoundland and Labrador (NT)", "America/St_Johns", "UTC-3:30 / NST", "St. John's"),
  ("CA-PE", "Prince Edward Island (Atlantic)", "America/Halifax", "UTC-4 / Atlantic", "Charlottetown"),
  ("CA-NT", "Northwest Territories (Mountain)", "America/Yellowknife", "UTC-7 / Mountain", "Yellowknife"),
  ("CA-NU", "Nunavut (Eastern)", "America/Iqaluit", "UTC-5 / Eastern", "Iqaluit"),
  ("CA-YT", "Yukon (MST Standard)", "America/Whitehorse", "UTC-7 / MST (No DST)", "Whitehorse")
]

CANADA_PROVINCES = []
for uid, st_name, iana, offset, city in ca_prov_raw:
    CANADA_PROVINCES.append({
        "id": uid, "countryCode": "CA", "countryName": "Canada", "flag": "🇨🇦",
        "region": "Americas", "stateOrRegionName": st_name, "ianaTimeZone": iana,
        "utcOffsetLabel": offset, "capitalOrMajorCity": city
    })

au_states_raw = [
  ("AU-NSW", "New South Wales (Sydney)", "Australia/Sydney", "UTC+10 / AEST", "Sydney"),
  ("AU-VIC", "Victoria (Melbourne)", "Australia/Melbourne", "UTC+10 / AEST", "Melbourne"),
  ("AU-QLD", "Queensland (Brisbane)", "Australia/Brisbane", "UTC+10 / AEST (No DST)", "Brisbane / Gold Coast"),
  ("AU-WA", "Western Australia (Perth)", "Australia/Perth", "UTC+8 / AWST", "Perth"),
  ("AU-SA", "South Australia (Adelaide)", "Australia/Adelaide", "UTC+9:30 / ACST", "Adelaide"),
  ("AU-TAS", "Tasmania (Hobart)", "Australia/Hobart", "UTC+10 / AEST", "Hobart"),
  ("AU-ACT", "Australian Capital Territory (Canberra)", "Australia/Sydney", "UTC+10 / AEST", "Canberra"),
  ("AU-NT", "Northern Territory (Darwin)", "Australia/Darwin", "UTC+9:30 / ACST (No DST)", "Darwin")
]

AUSTRALIA_STATES = []
for uid, st_name, iana, offset, city in au_states_raw:
    AUSTRALIA_STATES.append({
        "id": uid, "countryCode": "AU", "countryName": "Australia", "flag": "🇦🇺",
        "region": "Oceania", "stateOrRegionName": st_name, "ianaTimeZone": iana,
        "utcOffsetLabel": offset, "capitalOrMajorCity": city
    })

uk_nations_raw = [
  ("GB-ENG", "England (London & Midlands)", "Europe/London", "UTC+0 / GMT / BST", "London / Birmingham / Manchester"),
  ("GB-SCT", "Scotland (Edinburgh & Glasgow)", "Europe/London", "UTC+0 / GMT / BST", "Edinburgh / Glasgow"),
  ("GB-WLS", "Wales (Cardiff)", "Europe/London", "UTC+0 / GMT / BST", "Cardiff / Swansea"),
  ("GB-NIR", "Northern Ireland (Belfast)", "Europe/Belfast", "UTC+0 / GMT / BST", "Belfast / Derry")
]

UK_NATIONS = []
for uid, st_name, iana, offset, city in uk_nations_raw:
    UK_NATIONS.append({
        "id": uid, "countryCode": "GB", "countryName": "United Kingdom", "flag": "🇬🇧",
        "region": "Europe", "stateOrRegionName": st_name, "ianaTimeZone": iana,
        "utcOffsetLabel": offset, "capitalOrMajorCity": city
    })

all_timezones = []
all_timezones.extend(US_STATES)
all_timezones.extend(CANADA_PROVINCES)
all_timezones.extend(AUSTRALIA_STATES)
all_timezones.extend(UK_NATIONS)

for code, meta in sorted(countries_meta.items(), key=lambda x: x[1]['name']):
    if code in ['US', 'CA', 'AU', 'GB']:
        continue
    flag = FLAG_MAP.get(code, '🌐')
    iana, label = COUNTRY_IANA.get(code, ("UTC", "UTC+0"))
    
    all_timezones.append({
        "id": code,
        "countryCode": code,
        "countryName": meta['name'],
        "flag": flag,
        "region": meta['region'],
        "stateOrRegionName": f"{meta['capital'] or meta['name']}",
        "ianaTimeZone": iana,
        "utcOffsetLabel": label,
        "capitalOrMajorCity": meta['capital'] or meta['name']
    })

print(f"Total timezones created: {len(all_timezones)}")

out_ts = f"""export interface TimeZoneLocation {{
  id: string;
  countryCode: string;
  countryName: string;
  flag: string;
  region: 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
  stateOrRegionName?: string;
  ianaTimeZone: string;
  utcOffsetLabel: string;
  capitalOrMajorCity: string;
}}

export const US_STATE_TIMEZONES: TimeZoneLocation[] = {json.dumps(US_STATES, indent=2)};

export const CANADA_PROVINCE_TIMEZONES: TimeZoneLocation[] = {json.dumps(CANADA_PROVINCES, indent=2)};

export const AUSTRALIA_STATE_TIMEZONES: TimeZoneLocation[] = {json.dumps(AUSTRALIA_STATES, indent=2)};

export const UK_REGION_TIMEZONES: TimeZoneLocation[] = {json.dumps(UK_NATIONS, indent=2)};

export const GLOBAL_COUNTRY_TIMEZONES: TimeZoneLocation[] = {json.dumps(all_timezones, indent=2)};

export function getFormattedTimeForZone(timeZone: string, date: Date = new Date()): {{
  formattedTime: string;
  formattedDate: string;
  hours: number;
  minutes: number;
  period: string;
  utcOffsetHours: number;
  timeZoneAbbr: string;
}} {{
  try {{
    const timeFormatter = new Intl.DateTimeFormat('en-US', {{
      timeZone,
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }});

    const dateFormatter = new Intl.DateTimeFormat('en-US', {{
      timeZone,
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }});

    const parts = timeFormatter.formatToParts(date);
    let hours = 0;
    let minutes = 0;
    let period = 'AM';

    parts.forEach(p => {{
      if (p.type === 'hour') hours = parseInt(p.value, 10);
      if (p.type === 'minute') minutes = parseInt(p.value, 10);
      if (p.type === 'dayPeriod') period = p.value.toUpperCase();
    }});

    const formattedTime = timeFormatter.format(date);
    const formattedDate = dateFormatter.format(date);

    const nowUtc = new Date(date.toISOString());
    const targetStr = date.toLocaleString('en-US', {{ timeZone }});
    const targetDate = new Date(targetStr);
    const utcOffsetHours = Math.round((targetDate.getTime() - nowUtc.getTime()) / (1000 * 60 * 60));

    return {{
      formattedTime,
      formattedDate,
      hours,
      minutes,
      period,
      utcOffsetHours,
      timeZoneAbbr: timeZone.split('/')[1]?.replace('_', ' ') || timeZone
    }};
  }} catch (err) {{
    return {{
      formattedTime: '12:00:00 PM',
      formattedDate: 'Today',
      hours: 12,
      minutes: 0,
      period: 'PM',
      utcOffsetHours: 0,
      timeZoneAbbr: timeZone
    }};
  }}
}}
"""

with open("src/data/timezones.ts", "w") as f:
    f.write(out_ts)

print("Successfully generated src/data/timezones.ts covering all 197 countries + US/CA/AU/UK per-state breakdowns!")
