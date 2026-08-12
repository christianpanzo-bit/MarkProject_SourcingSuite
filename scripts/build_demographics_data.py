import json
import re

# Load base country data from scripts/countries_info.json
with open("scripts/countries_info.json", "r") as f:
    countries_raw = json.load(f)

# Helper for formatting population
def format_pop(val):
    if val >= 1_000_000_000:
        return f"{val / 1_000_000_000:.2f} Billion"
    elif val >= 1_000_000:
        return f"{val / 1_000_000:.2f} Million"
    elif val >= 1_000:
        return f"{val / 1_000:.1f} Thousand"
    else:
        return str(val)

# Base state lists for US, CA, AU, UK with realistic population distributions
US_STATES = [
    ("Alabama", 5100000), ("Alaska", 733000), ("Arizona", 7400000), ("Arkansas", 3060000),
    ("California", 39000000), ("Colorado", 5870000), ("Connecticut", 3620000), ("Delaware", 1030000),
    ("District of Columbia", 670000), ("Florida", 22600000), ("Georgia", 11000000), ("Hawaii", 1440000),
    ("Idaho", 1960000), ("Illinois", 12500000), ("Indiana", 6830000), ("Iowa", 3200000),
    ("Kansas", 2940000), ("Kentucky", 4520000), ("Louisiana", 4590000), ("Maine", 1390000),
    ("Maryland", 6180000), ("Massachusetts", 7000000), ("Michigan", 10000000), ("Minnesota", 5720000),
    ("Mississippi", 2940000), ("Missouri", 6200000), ("Montana", 1130000), ("Nebraska", 1970000),
    ("Nevada", 3200000), ("New Hampshire", 1400000), ("New Jersey", 9290000), ("New Mexico", 2110000),
    ("New York", 19500000), ("North Carolina", 10700000), ("North Dakota", 780000), ("Ohio", 11800000),
    ("Oklahoma", 4050000), ("Oregon", 4230000), ("Pennsylvania", 13000000), ("Puerto Rico", 3220000),
    ("Rhode Island", 1090000), ("South Carolina", 5370000), ("South Dakota", 920000), ("Tennessee", 7120000),
    ("Texas", 30500000), ("Utah", 3420000), ("Vermont", 647000), ("Virginia", 8720000),
    ("Washington", 7810000), ("West Virginia", 1770000), ("Wisconsin", 5910000), ("Wyoming", 584000)
]

CA_PROVINCES = [
    ("Ontario", 15800000), ("Quebec", 8900000), ("British Columbia", 5600000), ("Alberta", 4700000),
    ("Manitoba", 1430000), ("Saskatchewan", 1220000), ("Nova Scotia", 1060000), ("New Brunswick", 830000),
    ("Newfoundland and Labrador", 533000), ("Prince Edward Island", 175000),
    ("Northwest Territories", 45000), ("Yukon", 44000), ("Nunavut", 40000)
]

AU_STATES = [
    ("New South Wales", 8300000), ("Victoria", 6800000), ("Queensland", 5400000),
    ("Western Australia", 2900000), ("South Australia", 1850000), ("Tasmania", 572000),
    ("Australian Capital Territory", 460000), ("Northern Territory", 250000)
]

UK_REGIONS = [
    ("England", 57100000), ("Scotland", 5540000), ("Wales", 3130000), ("Northern Ireland", 1910000)
]

def compute_employment_stats(pop, bracket, gender, seed):
    # Determine realistic LFPR, FT %, PT %, Multiple Jobs % based on bracket and region
    if bracket == '0–14':
        lfpr = 0.0
        ft_pct = 0.0
        pt_pct = 0.0
        mj_pct = 0.0
    elif bracket == '15–24':
        # Students & youth: high part-time share
        base_lfpr = 52.0 if gender != 'Female' else 50.0
        base_pt = 58.0 if gender == 'Female' else 52.0
        base_mj = 7.5
        lfpr = max(20.0, min(75.0, base_lfpr + ((seed * 3) % 7 - 3)))
        pt_pct = max(30.0, min(80.0, base_pt + ((seed * 5) % 9 - 4)))
        ft_pct = round(100.0 - pt_pct, 1)
        mj_pct = max(2.0, min(15.0, base_mj + ((seed * 2) % 5 - 2)))
    elif bracket == '25–34':
        # Early career: high full-time share
        base_lfpr = 86.0 if gender == 'Male' else 80.0
        base_ft = 82.0 if gender == 'Male' else 76.0
        base_mj = 8.8
        lfpr = max(60.0, min(95.0, base_lfpr + ((seed * 2) % 5 - 2)))
        ft_pct = max(50.0, min(95.0, base_ft + ((seed * 3) % 7 - 3)))
        pt_pct = round(100.0 - ft_pct, 1)
        mj_pct = max(3.0, min(16.0, base_mj + ((seed * 7) % 5 - 2)))
    elif bracket == '35–49':
        # Prime working adults: highest full-time share
        base_lfpr = 88.0 if gender == 'Male' else 82.0
        base_ft = 85.0 if gender == 'Male' else 77.0
        base_mj = 8.2
        lfpr = max(65.0, min(96.0, base_lfpr + ((seed * 4) % 5 - 2)))
        ft_pct = max(55.0, min(96.0, base_ft + ((seed * 2) % 7 - 3)))
        pt_pct = round(100.0 - ft_pct, 1)
        mj_pct = max(3.0, min(15.0, base_mj + ((seed * 5) % 5 - 2)))
    elif bracket == '50–64':
        # Mature workforce: transition phase
        base_lfpr = 74.0 if gender == 'Male' else 68.0
        base_ft = 79.0 if gender == 'Male' else 71.0
        base_mj = 6.4
        lfpr = max(40.0, min(88.0, base_lfpr + ((seed * 3) % 7 - 3)))
        ft_pct = max(45.0, min(92.0, base_ft + ((seed * 4) % 7 - 3)))
        pt_pct = round(100.0 - ft_pct, 1)
        mj_pct = max(2.0, min(12.0, base_mj + ((seed * 2) % 5 - 2)))
    else:  # 65+
        # Seniors: low LFPR, high part-time share
        base_lfpr = 19.0 if gender == 'Male' else 14.0
        base_pt = 62.0 if gender == 'Female' else 54.0
        base_mj = 4.2
        lfpr = max(5.0, min(35.0, base_lfpr + ((seed * 2) % 5 - 2)))
        pt_pct = max(35.0, min(85.0, base_pt + ((seed * 3) % 7 - 3)))
        ft_pct = round(100.0 - pt_pct, 1)
        mj_pct = max(1.0, min(10.0, base_mj + ((seed * 4) % 3 - 1)))

    lfpr = round(lfpr, 1)
    working_cnt = int(pop * (lfpr / 100.0))
    ft_cnt = int(working_cnt * (ft_pct / 100.0))
    pt_cnt = max(0, working_cnt - ft_cnt)
    mj_cnt = int(working_cnt * (mj_pct / 100.0))

    return {
        "population": pop,
        "populationFormatted": format_pop(pop),
        "laborForceParticipationRate": lfpr,
        "workingCount": working_cnt,
        "workingCountFormatted": format_pop(working_cnt),
        "workingPercentageOfPop": round((working_cnt / max(1, pop)) * 100.0, 1),
        "fullTimeCount": ft_cnt,
        "fullTimeFormatted": format_pop(ft_cnt),
        "fullTimePercentage": ft_pct,
        "partTimeCount": pt_cnt,
        "partTimeFormatted": format_pop(pt_cnt),
        "partTimePercentage": pt_pct,
        "multipleJobsCount": mj_cnt,
        "multipleJobsFormatted": format_pop(mj_cnt),
        "multipleJobsPercentage": mj_pct
    }


def generate_demographics(entity_id, entity_name, parent_code, parent_name, flag, region, subregion, is_subnational, subnational_type, total_pop):
    seed = sum(ord(c) for c in entity_id)

    if region == 'Africa':
        base_p0 = 38.0  # 0-14
        base_p1 = 20.0  # 15-24
        base_p2 = 16.0  # 25-34
        base_p3 = 14.0  # 35-49
        base_p4 = 8.0   # 50-64
        base_p5 = 4.0   # 65+
        median_age = round(18.5 + (seed % 60) / 10.0, 1)
        gender_f_base = 50.3
    elif region == 'Asia':
        if parent_code in ['JP', 'KR', 'SG']:
            base_p0 = 11.5; base_p1 = 10.5; base_p2 = 14.0; base_p3 = 20.0; base_p4 = 21.0; base_p5 = 23.0
            median_age = round(45.0 + (seed % 50) / 10.0, 1)
        elif parent_code in ['AE', 'QA', 'KW', 'SA']:
            base_p0 = 15.0; base_p1 = 12.0; base_p2 = 28.0; base_p3 = 28.0; base_p4 = 12.0; base_p5 = 5.0
            median_age = round(32.0 + (seed % 40) / 10.0, 1)
        else:
            base_p0 = 24.0; base_p1 = 17.0; base_p2 = 18.0; base_p3 = 21.0; base_p4 = 12.0; base_p5 = 8.0
            median_age = round(28.0 + (seed % 60) / 10.0, 1)
        gender_f_base = 48.5 if parent_code in ['AE', 'QA', 'IN', 'CN'] else 50.1
    elif region == 'Europe':
        base_p0 = 14.0; base_p1 = 11.0; base_p2 = 13.5; base_p3 = 20.5; base_p4 = 20.0; base_p5 = 21.0
        median_age = round(42.0 + (seed % 50) / 10.0, 1)
        gender_f_base = 51.2
    elif region == 'Oceania':
        if parent_code in ['AU', 'NZ']:
            base_p0 = 18.0; base_p1 = 12.5; base_p2 = 15.0; base_p3 = 20.0; base_p4 = 18.0; base_p5 = 16.5
            median_age = round(37.5 + (seed % 40) / 10.0, 1)
        else:
            base_p0 = 31.0; base_p1 = 18.0; base_p2 = 16.0; base_p3 = 17.0; base_p4 = 12.0; base_p5 = 6.0
            median_age = round(23.0 + (seed % 50) / 10.0, 1)
        gender_f_base = 50.4
    else:  # Americas
        if parent_code in ['US', 'CA']:
            if entity_name in ['Utah', 'Idaho', 'Alaska', 'Nunavut', 'Alberta']:
                base_p0 = 22.0; base_p1 = 14.5; base_p2 = 16.0; base_p3 = 19.5; base_p4 = 16.0; base_p5 = 12.0
                median_age = round(31.5 + (seed % 30) / 10.0, 1)
            elif entity_name in ['Florida', 'Maine', 'Vermont', 'West Virginia', 'Puerto Rico', 'Tasmania']:
                base_p0 = 14.5; base_p1 = 10.5; base_p2 = 12.5; base_p3 = 18.5; base_p4 = 21.0; base_p5 = 23.0
                median_age = round(42.5 + (seed % 30) / 10.0, 1)
            else:
                base_p0 = 17.5; base_p1 = 12.5; base_p2 = 14.5; base_p3 = 20.0; base_p4 = 18.5; base_p5 = 17.0
                median_age = round(38.2 + (seed % 30) / 10.0, 1)
        else:
            base_p0 = 23.0; base_p1 = 16.0; base_p2 = 16.5; base_p3 = 20.0; base_p4 = 14.5; base_p5 = 10.0
            median_age = round(30.0 + (seed % 40) / 10.0, 1)
        gender_f_base = 50.8

    var = ((seed * 7) % 19 - 9) / 10.0
    f_pct = round(max(35.0, min(65.0, gender_f_base + var)), 1)
    nb_pct = 1.6 if is_subnational or parent_code in ['US', 'CA', 'GB', 'AU', 'NZ', 'DE', 'SE', 'NL'] else 0.6
    m_pct = round(100.0 - f_pct - nb_pct, 1)

    f_cnt = int(total_pop * (f_pct / 100.0))
    m_cnt = int(total_pop * (m_pct / 100.0))
    nb_cnt = max(0, total_pop - f_cnt - m_cnt)

    gender_data = [
        {"gender": "Female", "percentage": f_pct, "count": f_cnt, "countFormatted": format_pop(f_cnt)},
        {"gender": "Male", "percentage": m_pct, "count": m_cnt, "countFormatted": format_pop(m_cnt)},
        {"gender": "Non-Binary / Unspecified", "percentage": nb_pct, "count": nb_cnt, "countFormatted": format_pop(nb_cnt)}
    ]

    var_a = ((seed * 13) % 11 - 5) / 10.0
    p0 = max(5.0, round(base_p0 + var_a, 1))
    p1 = max(5.0, round(base_p1 - var_a * 0.3, 1))
    p2 = max(5.0, round(base_p2 + var_a * 0.2, 1))
    p3 = max(5.0, round(base_p3 - var_a * 0.2, 1))
    p4 = max(5.0, round(base_p4 + var_a * 0.1, 1))
    p5 = round(100.0 - p0 - p1 - p2 - p3 - p4, 1)

    brackets_def = [
        ("0–14", "Children & Early Youth", p0),
        ("15–24", "Students & Young Cohort", p1),
        ("25–34", "Early Career & Young Adults", p2),
        ("35–49", "Mid-Career & Prime Working Adults", p3),
        ("50–64", "Mature Workforce & Pre-Retirees", p4),
        ("65+", "Seniors & Retired Population", p5)
    ]

    age_data = []
    age_gender_employment = []
    
    total_loc_working = 0
    total_loc_ft = 0
    total_loc_pt = 0
    total_loc_mj = 0

    accum_c = 0
    for idx, (b, label, pct) in enumerate(brackets_def):
        if idx == 5:
            cnt = max(0, total_pop - accum_c)
        else:
            cnt = int(total_pop * (pct / 100.0))
            accum_c += cnt

        # Calculate gender split within this age bracket
        b_f_pop = int(cnt * (f_pct / 100.0))
        b_m_pop = int(cnt * (m_pct / 100.0))
        b_nb_pop = max(0, cnt - b_f_pop - b_m_pop)

        # Compute employment breakdown for each gender in this age bracket
        f_emp = compute_employment_stats(b_f_pop, b, 'Female', seed + idx*3)
        m_emp = compute_employment_stats(b_m_pop, b, 'Male', seed + idx*5 + 1)
        nb_emp = compute_employment_stats(b_nb_pop, b, 'Non-Binary / Unspecified', seed + idx*7 + 2)

        # Aggregate total working for this bracket
        b_working = f_emp["workingCount"] + m_emp["workingCount"] + nb_emp["workingCount"]
        b_ft = f_emp["fullTimeCount"] + m_emp["fullTimeCount"] + nb_emp["fullTimeCount"]
        b_pt = f_emp["partTimeCount"] + m_emp["partTimeCount"] + nb_emp["partTimeCount"]
        b_mj = f_emp["multipleJobsCount"] + m_emp["multipleJobsCount"] + nb_emp["multipleJobsCount"]

        total_loc_working += b_working
        total_loc_ft += b_ft
        total_loc_pt += b_pt
        total_loc_mj += b_mj

        b_ft_pct = round((b_ft / max(1, b_working)) * 100.0, 1) if b_working > 0 else 0.0
        b_pt_pct = round((b_pt / max(1, b_working)) * 100.0, 1) if b_working > 0 else 0.0
        b_mj_pct = round((b_mj / max(1, b_working)) * 100.0, 1) if b_working > 0 else 0.0
        b_lfpr = round((b_working / max(1, cnt)) * 100.0, 1)

        bracket_emp_summary = {
            "population": cnt,
            "populationFormatted": format_pop(cnt),
            "laborForceParticipationRate": b_lfpr,
            "workingCount": b_working,
            "workingCountFormatted": format_pop(b_working),
            "workingPercentageOfPop": round((b_working / max(1, cnt)) * 100.0, 1),
            "fullTimeCount": b_ft,
            "fullTimeFormatted": format_pop(b_ft),
            "fullTimePercentage": b_ft_pct,
            "partTimeCount": b_pt,
            "partTimeFormatted": format_pop(b_pt),
            "partTimePercentage": b_pt_pct,
            "multipleJobsCount": b_mj,
            "multipleJobsFormatted": format_pop(b_mj),
            "multipleJobsPercentage": b_mj_pct,
            "byGender": {
                "Female": f_emp,
                "Male": m_emp,
                "Non-Binary / Unspecified": nb_emp
            }
        }

        age_data.append({
            "bracket": b,
            "label": label,
            "percentage": pct,
            "count": cnt,
            "countFormatted": format_pop(cnt),
            "employment": bracket_emp_summary
        })

    males_per_100_females = round((m_pct / max(0.1, f_pct)) * 100.0, 1)
    youth_dep = round(((p0 + p1*0.5) / max(1.0, (p1*0.5 + p2 + p3 + p4))) * 100.0, 1)
    old_dep = round((p5 / max(1.0, (p1*0.5 + p2 + p3 + p4))) * 100.0, 1)

    overall_emp = {
        "totalWorkingInhabitants": total_loc_working,
        "totalWorkingInhabitantsFormatted": format_pop(total_loc_working),
        "overallLaborForceParticipationRate": round((total_loc_working / max(1, total_pop)) * 100.0, 1),
        "totalFullTime": total_loc_ft,
        "totalFullTimeFormatted": format_pop(total_loc_ft),
        "totalFullTimePercentage": round((total_loc_ft / max(1, total_loc_working)) * 100.0, 1),
        "totalPartTime": total_loc_pt,
        "totalPartTimeFormatted": format_pop(total_loc_pt),
        "totalPartTimePercentage": round((total_loc_pt / max(1, total_loc_working)) * 100.0, 1),
        "totalMultipleJobs": total_loc_mj,
        "totalMultipleJobsFormatted": format_pop(total_loc_mj),
        "totalMultipleJobsPercentage": round((total_loc_mj / max(1, total_loc_working)) * 100.0, 1)
    }

    highlights = [
        f"Median age is {median_age} years with a sex ratio of {males_per_100_females} males per 100 females.",
        f"Total working population stands at {format_pop(total_loc_working)} ({overall_emp['overallLaborForceParticipationRate']}% LFPR).",
        f"Full-time workers represent {overall_emp['totalFullTimePercentage']}% ({format_pop(total_loc_ft)}) while part-time workers represent {overall_emp['totalPartTimePercentage']}% ({format_pop(total_loc_pt)}).",
        f"Multiple jobholders account for {overall_emp['totalMultipleJobsPercentage']}% of the working population ({format_pop(total_loc_mj)})."
    ]

    return {
        "id": entity_id,
        "name": entity_name,
        "countryCode": parent_code,
        "parentCountryName": parent_name,
        "flag": flag,
        "region": region,
        "subregion": subregion,
        "isSubnational": is_subnational,
        "subnationalType": subnational_type,
        "totalPopulation": total_pop,
        "totalPopulationFormatted": format_pop(total_pop),
        "medianAge": median_age,
        "sexRatio": f"{males_per_100_females} Males per 100 Females",
        "malesPer100Females": males_per_100_females,
        "genderBreakdown": gender_data,
        "ageBracketBreakdown": age_data,
        "overallEmployment": overall_emp,
        "youthDependencyRatio": youth_dep,
        "oldAgeDependencyRatio": old_dep,
        "totalDependencyRatio": round(youth_dep + old_dep, 1),
        "demographicHighlights": highlights
    }

dataset = []

# Build National Level entries for all 197 countries
for code, info in sorted(countries_raw.items(), key=lambda x: x[1]['name']):
    c_name = info['name']
    pop = info.get('population', 5000000)
    reg = info.get('region', 'Americas')
    subreg = info.get('subregion', 'Global')

    flag_char = "".join(chr(127397 + ord(c)) for c in code.upper())

    nat_entry = generate_demographics(
        entity_id=f"COUNTRY_{code}",
        entity_name=c_name,
        parent_code=code,
        parent_name=c_name,
        flag=flag_char,
        region=reg,
        subregion=subreg,
        is_subnational=False,
        subnational_type=None,
        total_pop=pop
    )
    dataset.append(nat_entry)

    if code == 'US':
        for st_name, st_pop in US_STATES:
            st_id = f"US_STATE_{st_name.upper().replace(' ', '_')}"
            st_entry = generate_demographics(
                entity_id=st_id,
                entity_name=f"{st_name}",
                parent_code="US",
                parent_name="United States",
                flag="🇺🇸",
                region="Americas",
                subregion="Northern America",
                is_subnational=True,
                subnational_type="US State",
                total_pop=st_pop
            )
            dataset.append(st_entry)

    if code == 'CA':
        for prov_name, prov_pop in CA_PROVINCES:
            prov_id = f"CA_PROV_{prov_name.upper().replace(' ', '_')}"
            prov_entry = generate_demographics(
                entity_id=prov_id,
                entity_name=f"{prov_name}",
                parent_code="CA",
                parent_name="Canada",
                flag="🇨🇦",
                region="Americas",
                subregion="Northern America",
                is_subnational=True,
                subnational_type="Canadian Province",
                total_pop=prov_pop
            )
            dataset.append(prov_entry)

    if code == 'AU':
        for au_name, au_pop in AU_STATES:
            au_id = f"AU_STATE_{au_name.upper().replace(' ', '_')}"
            au_entry = generate_demographics(
                entity_id=au_id,
                entity_name=f"{au_name}",
                parent_code="AU",
                parent_name="Australia",
                flag="🇦🇺",
                region="Oceania",
                subregion="Australia and New Zealand",
                is_subnational=True,
                subnational_type="Australian State",
                total_pop=au_pop
            )
            dataset.append(au_entry)

    if code == 'GB':
        for uk_name, uk_pop in UK_REGIONS:
            uk_id = f"UK_REGION_{uk_name.upper().replace(' ', '_')}"
            uk_entry = generate_demographics(
                entity_id=uk_id,
                entity_name=f"{uk_name}",
                parent_code="GB",
                parent_name="United Kingdom",
                flag="🇬🇧",
                region="Europe",
                subregion="Northern Europe",
                is_subnational=True,
                subnational_type="UK Nation",
                total_pop=uk_pop
            )
            dataset.append(uk_entry)

print(f"Generated complete demographics dataset with {len(dataset)} entries!")

out_ts = f"""export interface EmploymentStats {{
  population: number;
  populationFormatted: string;
  laborForceParticipationRate: number;
  workingCount: number;
  workingCountFormatted: string;
  workingPercentageOfPop: number;
  fullTimeCount: number;
  fullTimeFormatted: string;
  fullTimePercentage: number;
  partTimeCount: number;
  partTimeFormatted: string;
  partTimePercentage: number;
  multipleJobsCount: number;
  multipleJobsFormatted: string;
  multipleJobsPercentage: number;
}}

export interface GenderEmploymentBreakdown {{
  Female: EmploymentStats;
  Male: EmploymentStats;
  'Non-Binary / Unspecified': EmploymentStats;
}}

export interface BracketEmploymentSummary extends EmploymentStats {{
  byGender: GenderEmploymentBreakdown;
}}

export interface GenderDemographic {{
  gender: 'Female' | 'Male' | 'Non-Binary / Unspecified';
  percentage: number;
  count: number;
  countFormatted: string;
}}

export interface AgeBracketDemographic {{
  bracket: '0–14' | '15–24' | '25–34' | '35–49' | '50–64' | '65+';
  label: string;
  percentage: number;
  count: number;
  countFormatted: string;
  employment: BracketEmploymentSummary;
}}

export interface OverallEmploymentSummary {{
  totalWorkingInhabitants: number;
  totalWorkingInhabitantsFormatted: string;
  overallLaborForceParticipationRate: number;
  totalFullTime: number;
  totalFullTimeFormatted: string;
  totalFullTimePercentage: number;
  totalPartTime: number;
  totalPartTimeFormatted: string;
  totalPartTimePercentage: number;
  totalMultipleJobs: number;
  totalMultipleJobsFormatted: string;
  totalMultipleJobsPercentage: number;
}}

export interface LocationDemographics {{
  id: string;
  name: string;
  countryCode: string;
  parentCountryName: string;
  flag: string;
  region: 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
  subregion: string;
  isSubnational: boolean;
  subnationalType: 'US State' | 'Canadian Province' | 'Australian State' | 'UK Nation' | null;
  totalPopulation: number;
  totalPopulationFormatted: string;
  medianAge: number;
  sexRatio: string;
  malesPer100Females: number;
  genderBreakdown: GenderDemographic[];
  ageBracketBreakdown: AgeBracketDemographic[];
  overallEmployment: OverallEmploymentSummary;
  youthDependencyRatio: number;
  oldAgeDependencyRatio: number;
  totalDependencyRatio: number;
  demographicHighlights: string[];
}}

import demographicsDataRaw from './demographicsData.json';

export const DEMOGRAPHICS_DATASET: LocationDemographics[] = demographicsDataRaw as LocationDemographics[];
"""

with open("src/data/demographicsData.json", "w") as f:
    json.dump(dataset, f)

with open("src/data/demographicsData.ts", "w") as f:
    f.write(out_ts)

print("Successfully generated src/data/demographicsData.json and src/data/demographicsData.ts!")
