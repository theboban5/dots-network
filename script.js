// CSV data from network.csv
var networkData = [
    {continent: "Africa", country: "Algeria", connection_number: 1, connection_strength: 3},
    {continent: "Africa", country: "Angola", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Benin", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Botswana", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Burkina Faso", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Burundi", connection_number: 1, connection_strength: 3},
    {continent: "Africa", country: "Cameroon", connection_number: 1, connection_strength: 2},
    {continent: "Africa", country: "Cape Verde", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Central African Republic", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Chad", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Comoros", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Congo", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Congo DR", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Djibouti", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Egypt", connection_number: 2, connection_strength: 2},
    {continent: "Africa", country: "Equatorial Guinea", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Eritrea", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Eswatini", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Ethiopia", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Gabon", connection_number: 1, connection_strength: 2},
    {continent: "Africa", country: "Gambia", connection_number: 2, connection_strength: 3},
    {continent: "Africa", country: "Ghana", connection_number: 3, connection_strength: 4},
    {continent: "Africa", country: "Guinea", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Guinea-Bissau", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Ivory Coast", connection_number: 2, connection_strength: 2},
    {continent: "Africa", country: "Kenya", connection_number: 2, connection_strength: 3},
    {continent: "Africa", country: "Lesotho", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Liberia", connection_number: 2, connection_strength: 3},
    {continent: "Africa", country: "Libya", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Madagascar", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Malawi", connection_number: 2, connection_strength: 2},
    {continent: "Africa", country: "Mali", connection_number: 1, connection_strength: 1},
    {continent: "Africa", country: "Mauritania", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Mauritius", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Morocco", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Mozambique", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Namibia", connection_number: 2, connection_strength: 1},
    {continent: "Africa", country: "Niger", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Nigeria", connection_number: 3, connection_strength: 2},
    {continent: "Africa", country: "Rwanda", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Senegal", connection_number: 2, connection_strength: 1},
    {continent: "Africa", country: "Seychelles", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Sierra Leone", connection_number: 2, connection_strength: 2},
    {continent: "Africa", country: "Somalia", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "South Africa", connection_number: 3, connection_strength: 4},
    {continent: "Africa", country: "South Sudan", connection_number: 2, connection_strength: 2},
    {continent: "Africa", country: "Sudan", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "São Tomé and Príncipe", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Tanzania", connection_number: 2, connection_strength: 1},
    {continent: "Africa", country: "Togo", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Tunisia", connection_number: 0, connection_strength: 0},
    {continent: "Africa", country: "Uganda", connection_number: 1, connection_strength: 1},
    {continent: "Africa", country: "Zambia", connection_number: 2, connection_strength: 2},
    {continent: "Africa", country: "Zimbabwe", connection_number: 2, connection_strength: 1},
    {continent: "Asia", country: "Afghanistan", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Bahrain", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Bangladesh", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Bhutan", connection_number: 2, connection_strength: 2},
    {continent: "Asia", country: "Brunei", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Cambodia", connection_number: 2, connection_strength: 2},
    {continent: "Asia", country: "China", connection_number: 2, connection_strength: 2},
    {continent: "Asia", country: "Taiwan", connection_number: 2, connection_strength: 1},
    {continent: "Asia", country: "Guam", connection_number: 2, connection_strength: 4},
    {continent: "Asia", country: "Hong Kong", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "India", connection_number: 2, connection_strength: 2},
    {continent: "Asia", country: "Indonesia", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Iran", connection_number: 1, connection_strength: 1},
    {continent: "Asia", country: "Iraq", connection_number: 1, connection_strength: 3},
    {continent: "Asia", country: "Japan", connection_number: 3, connection_strength: 3},
    {continent: "Asia", country: "Jordan", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Kuwait", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Kyrgyz Republic", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Laos", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Lebanon", connection_number: 1, connection_strength: 1},
    {continent: "Asia", country: "Macau", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Malaysia", connection_number: 3, connection_strength: 1},
    {continent: "Asia", country: "Maldives", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Mongolia", connection_number: 1, connection_strength: 1},
    {continent: "Asia", country: "Myanmar", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Nepal", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "North Korea", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Oman", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Pakistan", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Palestine", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Philippines", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Qatar", connection_number: 2, connection_strength: 3},
    {continent: "Asia", country: "Saudi Arabia", connection_number: 3, connection_strength: 3},
    {continent: "Asia", country: "Singapore", connection_number: 2, connection_strength: 2},
    {continent: "Asia", country: "South Korea", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Sri Lanka", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Syria", connection_number: 1, connection_strength: 1},
    {continent: "Asia", country: "Tajikistan", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Thailand", connection_number: 2, connection_strength: 2},
    {continent: "Asia", country: "Timor-Leste", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Turkmenistan", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "United Arab Emirates", connection_number: 1, connection_strength: 2},
    {continent: "Asia", country: "Uzbekistan", connection_number: 0, connection_strength: 0},
    {continent: "Asia", country: "Vietnam", connection_number: 1, connection_strength: 1},
    {continent: "Asia", country: "Yemen", connection_number: 0, connection_strength: 0},
    {continent: "Europe", country: "Albania", connection_number: 1, connection_strength: 2},
    {continent: "Europe", country: "Andorra", connection_number: 0, connection_strength: 0},
    {continent: "Europe", country: "Armenia", connection_number: 0, connection_strength: 0},
    {continent: "Europe", country: "Austria", connection_number: 4, connection_strength: 4},
    {continent: "Europe", country: "Azerbaijan", connection_number: 1, connection_strength: 1},
    {continent: "Europe", country: "Belarus", connection_number: 0, connection_strength: 0},
    {continent: "Europe", country: "Belgium", connection_number: 4, connection_strength: 3},
    {continent: "Europe", country: "Bosnia and Herzegovina", connection_number: 2, connection_strength: 3},
    {continent: "Europe", country: "Bulgaria", connection_number: 1, connection_strength: 1},
    {continent: "Europe", country: "Croatia", connection_number: 4, connection_strength: 3},
    {continent: "Europe", country: "Cyprus", connection_number: 3, connection_strength: 2},
    {continent: "Europe", country: "Czechia", connection_number: 2, connection_strength: 2},
    {continent: "Europe", country: "Denmark", connection_number: 4, connection_strength: 4},
    {continent: "Europe", country: "England", connection_number: 4, connection_strength: 4},
    {continent: "Europe", country: "Estonia", connection_number: 3, connection_strength: 2},
    {continent: "Europe", country: "Faroe Islands", connection_number: 2, connection_strength: 3},
    {continent: "Europe", country: "Finland", connection_number: 3, connection_strength: 2},
    {continent: "Europe", country: "France", connection_number: 3, connection_strength: 2},
    {continent: "Europe", country: "Georgia", connection_number: 0, connection_strength: 0},
    {continent: "Europe", country: "Germany", connection_number: 4, connection_strength: 4},
    {continent: "Europe", country: "Gibraltar", connection_number: 1, connection_strength: 3},
    {continent: "Europe", country: "Greece", connection_number: 2, connection_strength: 2},
    {continent: "Europe", country: "Hungary", connection_number: 2, connection_strength: 2},
    {continent: "Europe", country: "Iceland", connection_number: 2, connection_strength: 2},
    {continent: "Europe", country: "Ireland", connection_number: 1, connection_strength: 1},
    {continent: "Europe", country: "Israel", connection_number: 1, connection_strength: 1},
    {continent: "Europe", country: "Italy", connection_number: 2, connection_strength: 4},
    {continent: "Europe", country: "Kazakhstan", connection_number: 0, connection_strength: 0},
    {continent: "Europe", country: "Kosovo", connection_number: 2, connection_strength: 3},
    {continent: "Europe", country: "Latvia", connection_number: 2, connection_strength: 2},
    {continent: "Europe", country: "Liechtenstein", connection_number: 0, connection_strength: 0},
    {continent: "Europe", country: "Lithuania", connection_number: 0, connection_strength: 0},
    {continent: "Europe", country: "Luxembourg", connection_number: 1, connection_strength: 2},
    {continent: "Europe", country: "Malta", connection_number: 1, connection_strength: 1},
    {continent: "Europe", country: "Moldova", connection_number: 0, connection_strength: 0},
    {continent: "Europe", country: "Montenegro", connection_number: 0, connection_strength: 0},
    {continent: "Europe", country: "Netherlands", connection_number: 3, connection_strength: 3},
    {continent: "Europe", country: "North Macedonia", connection_number: 1, connection_strength: 2},
    {continent: "Europe", country: "Northern Ireland", connection_number: 4, connection_strength: 4},
    {continent: "Europe", country: "Norway", connection_number: 4, connection_strength: 4},
    {continent: "Europe", country: "Poland", connection_number: 4, connection_strength: 4},
    {continent: "Europe", country: "Portugal", connection_number: 4, connection_strength: 4},
    {continent: "Europe", country: "Romania", connection_number: 2, connection_strength: 2},
    {continent: "Europe", country: "Russia", connection_number: 1, connection_strength: 1},
    {continent: "Europe", country: "San Marino", connection_number: 0, connection_strength: 0},
    {continent: "Europe", country: "Scotland", connection_number: 2, connection_strength: 2},
    {continent: "Europe", country: "Serbia", connection_number: 2, connection_strength: 2},
    {continent: "Europe", country: "Slovakia", connection_number: 2, connection_strength: 2},
    {continent: "Europe", country: "Slovenia", connection_number: 2, connection_strength: 2},
    {continent: "Europe", country: "Spain", connection_number: 2, connection_strength: 3},
    {continent: "Europe", country: "Sweden", connection_number: 4, connection_strength: 2},
    {continent: "Europe", country: "Switzerland", connection_number: 3, connection_strength: 2},
    {continent: "Europe", country: "Turkey", connection_number: 2, connection_strength: 2},
    {continent: "Europe", country: "Ukraine", connection_number: 2, connection_strength: 1},
    {continent: "Europe", country: "Wales", connection_number: 1, connection_strength: 3},
    {continent: "Europe", country: "England", connection_number: 4, connection_strength: 4},
    {continent: "Europe", country: "Scotland", connection_number: 2, connection_strength: 3},
    {continent: "Europe", country: "Northern Ireland", connection_number: 1, connection_strength: 2},
    {continent: "Europe", country: "United Kingdom", connection_number: 4, connection_strength: 4},
    {continent: "North America", country: "Antigua and Barbuda", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Aruba", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Bahamas", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Barbados", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Belize", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Bermuda", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Canada", connection_number: 4, connection_strength: 4},
    {continent: "North America", country: "Cayman Islands", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Costa Rica", connection_number: 1, connection_strength: 1},
    {continent: "North America", country: "Cuba", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Curaçao", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Dominica", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Dominican Republic", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "El Salvador", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Greenland", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Grenada", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Guadeloupe", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Guatemala", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Haiti", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Honduras", connection_number: 1, connection_strength: 2},
    {continent: "North America", country: "Jamaica", connection_number: 1, connection_strength: 1},
    {continent: "North America", country: "Martinique", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Mexico", connection_number: 2, connection_strength: 2},
    {continent: "North America", country: "Montserrat", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Nicaragua", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Panama", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Puerto Rico", connection_number: 1, connection_strength: 1},
    {continent: "North America", country: "Saint Kitts and Nevis", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Saint Lucia", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Saint Vincent and the Grenadines", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Sint Maarten", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Suriname", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Trinidad and Tobago", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "Turks and Caicos Islands", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "U.S. Virgin Islands", connection_number: 0, connection_strength: 0},
    {continent: "North America", country: "USA", connection_number: 4, connection_strength: 4},
    {continent: "Oceania", country: "American Samoa", connection_number: 0, connection_strength: 0},
    {continent: "Oceania", country: "Australia", connection_number: 2, connection_strength: 1},
    {continent: "Oceania", country: "Cook Islands", connection_number: 0, connection_strength: 0},
    {continent: "Oceania", country: "Fiji", connection_number: 0, connection_strength: 0},
    {continent: "Oceania", country: "Kiribati", connection_number: 0, connection_strength: 0},
    {continent: "Oceania", country: "New Caledonia", connection_number: 0, connection_strength: 0},
    {continent: "Oceania", country: "New Zealand", connection_number: 1, connection_strength: 3},
    {continent: "Oceania", country: "Papua New Guinea", connection_number: 0, connection_strength: 0},
    {continent: "Oceania", country: "Samoa", connection_number: 0, connection_strength: 0},
    {continent: "Oceania", country: "Solomon Islands", connection_number: 0, connection_strength: 0},
    {continent: "Oceania", country: "Tahiti", connection_number: 0, connection_strength: 0},
    {continent: "Oceania", country: "Tonga", connection_number: 0, connection_strength: 0},
    {continent: "Oceania", country: "Marshall Islands", connection_number: 1, connection_strength: 3},
    {continent: "Oceania", country: "Vanuatu", connection_number: 0, connection_strength: 0},
    {continent: "South America", country: "Argentina", connection_number: 3, connection_strength: 2},
    {continent: "South America", country: "Bolivia", connection_number: 0, connection_strength: 0},
    {continent: "South America", country: "Brazil", connection_number: 2, connection_strength: 2},
    {continent: "South America", country: "Chile", connection_number: 0, connection_strength: 0},
    {continent: "South America", country: "Colombia", connection_number: 2, connection_strength: 1},
    {continent: "South America", country: "Ecuador", connection_number: 0, connection_strength: 0},
    {continent: "South America", country: "Guyana", connection_number: 0, connection_strength: 0},
    {continent: "South America", country: "Paraguay", connection_number: 0, connection_strength: 0},
    {continent: "South America", country: "Peru", connection_number: 0, connection_strength: 0},
    {continent: "South America", country: "Suriname", connection_number: 0, connection_strength: 0},
    {continent: "South America", country: "Uruguay", connection_number: 0, connection_strength: 0},
    {continent: "South America", country: "Venezuela", connection_number: 2, connection_strength: 1}
];

// Country name to ISO code mapping (for amCharts)
var countryNameToCode = {
    "Algeria": "DZ", "Angola": "AO", "Benin": "BJ", "Botswana": "BW", "Burkina Faso": "BF",
    "Burundi": "BI", "Cameroon": "CM", "Cape Verde": "CV", "Central African Republic": "CF",
    "Chad": "TD", "Comoros": "KM", "Congo": "CG", "Congo DR": "CD", "Djibouti": "DJ",
    "Egypt": "EG", "Equatorial Guinea": "GQ", "Eritrea": "ER", "Eswatini": "SZ", "Ethiopia": "ET",
    "Gabon": "GA", "Gambia": "GM", "Ghana": "GH", "Guinea": "GN", "Guinea-Bissau": "GW",
    "Ivory Coast": "CI", "Kenya": "KE", "Lesotho": "LS", "Liberia": "LR", "Libya": "LY",
    "Madagascar": "MG", "Malawi": "MW", "Mali": "ML", "Mauritania": "MR", "Mauritius": "MU",
    "Morocco": "MA", "Mozambique": "MZ", "Namibia": "NA", "Niger": "NE", "Nigeria": "NG",
    "Rwanda": "RW", "Senegal": "SN", "Seychelles": "SC", "Sierra Leone": "SL", "Somalia": "SO",
    "South Africa": "ZA", "South Sudan": "SS", "Sudan": "SD", "São Tomé and Príncipe": "ST",
    "Tanzania": "TZ", "Togo": "TG", "Tunisia": "TN", "Uganda": "UG", "Zambia": "ZM", "Zimbabwe": "ZW",
    
    "Afghanistan": "AF", "Bahrain": "BH", "Bangladesh": "BD", "Bhutan": "BT", "Brunei": "BN",
    "Cambodia": "KH", "China": "CN", "Chinese Taipei": "Taiwan", "Guam": "GU", "Hong Kong": "HK",
    "India": "IN", "Indonesia": "ID", "Iran": "IR", "Iraq": "IQ", "Japan": "JP", "Jordan": "JO",
    "Kuwait": "KW", "Kyrgyz Republic": "KG", "Laos": "LA", "Lebanon": "LB", "Macau": "MO",
    "Malaysia": "MY", "Maldives": "MV", "Mongolia": "MN", "Myanmar": "MM", "Nepal": "NP",
    "North Korea": "KP", "Oman": "OM", "Pakistan": "PK", "Palestine": "PS", "Philippines": "PH",
    "Qatar": "QA", "Saudi Arabia": "SA", "Singapore": "SG", "South Korea": "KR", "Sri Lanka": "LK",
    "Syria": "SY", "Tajikistan": "TJ", "Thailand": "TH", "Timor-Leste": "TL", "Turkmenistan": "TM",
    "United Arab Emirates": "AE", "Uzbekistan": "UZ", "Vietnam": "VN", "Yemen": "YE",
    
    "Albania": "AL", "Andorra": "AD", "Armenia": "AM", "Austria": "AT", "Azerbaijan": "AZ",
    "Belarus": "BY", "Belgium": "BE", "Bosnia and Herzegovina": "BA", "Bulgaria": "BG",
    "Croatia": "HR", "Cyprus": "CY", "Czechia": "CZ", "Denmark": "DK", "England": "GB-ENG",
    "Estonia": "EE", "Faroe Islands": "FO", "Finland": "FI", "France": "FR", "Georgia": "GE",
    "Germany": "DE", "Gibraltar": "GI", "Greece": "GR", "Hungary": "HU", "Iceland": "IS",
    "Ireland": "IE", "Israel": "IL", "Italy": "IT", "Kazakhstan": "KZ", "Kosovo": "XK",
    "Latvia": "LV", "Liechtenstein": "LI", "Lithuania": "LT", "Luxembourg": "LU", "Malta": "MT",
    "Moldova": "MD", "Montenegro": "ME", "Netherlands": "NL", "North Macedonia": "MK",
    "Northern Ireland": "GB-NIR", "Norway": "NO", "Poland": "PL", "Portugal": "PT", "Romania": "RO",
    "Russia": "RU", "San Marino": "SM", "Scotland": "GB-SCT", "Serbia": "RS", "Slovakia": "SK",
    "Slovenia": "SI", "Spain": "ES", "Sweden": "SE", "Switzerland": "CH", "Turkey": "TR",
    "Ukraine": "UA", "Wales": "GB-WLS", "United Kingdom": "GB",
    
    "Antigua and Barbuda": "AG", "Aruba": "AW", "Bahamas": "BS", "Barbados": "BB", "Belize": "BZ",
    "Bermuda": "BM", "Canada": "CA", "Cayman Islands": "KY", "Costa Rica": "CR", "Cuba": "CU",
    "Curaçao": "CW", "Dominica": "DM", "Dominican Republic": "DO", "El Salvador": "SV",
    "Greenland": "GL", "Grenada": "GD", "Guadeloupe": "GP", "Guatemala": "GT", "Haiti": "HT",
    "Honduras": "HN", "Jamaica": "JM", "Martinique": "MQ", "Mexico": "MX", "Montserrat": "MS",
    "Nicaragua": "NI", "Panama": "PA", "Puerto Rico": "PR", "Saint Kitts and Nevis": "KN",
    "Saint Lucia": "LC", "Saint Vincent and the Grenadines": "VC", "Sint Maarten": "SX",
    "Suriname": "SR", "Trinidad and Tobago": "TT", "Turks and Caicos Islands": "TC",
    "U.S. Virgin Islands": "VI", "USA": "US",
    
    "American Samoa": "AS", "Australia": "AU", "Cook Islands": "CK", "Fiji": "FJ", "Kiribati": "KI",
    "New Caledonia": "NC", "New Zealand": "NZ", "Papua New Guinea": "PG", "Samoa": "WS",
    "Solomon Islands": "SB", "Tahiti": "PF", "Tonga": "TO", "Marshall Islands": "MH", "Vanuatu": "VU",
    
    "Argentina": "AR", "Bolivia": "BO", "Brazil": "BR", "Chile": "CL", "Colombia": "CO",
    "Ecuador": "EC", "Guyana": "GY", "Paraguay": "PY", "Peru": "PE", "Uruguay": "UY", "Venezuela": "VE"
};

// Process network data and create connection scores
var countryConnectionScores = {};
var maxScore = 0;

networkData.forEach(function(country) {
    var score = country.connection_number * country.connection_strength;
    var countryCode = countryNameToCode[country.country];
    
    if (countryCode && score > 0) {
        countryConnectionScores[countryCode] = {
            score: score,
            connection_number: country.connection_number,
            connection_strength: country.connection_strength,
            country: country.country,
            continent: country.continent
        };
        
        if (score > maxScore) {
            maxScore = score;
        }
    }
});

// Heatmap color function based on connection score
function getHeatmapColor(score) {
    if (score === 0) {
        return am5.color(0xDDDDDD); // Light grey for no connections
    }
    
    // Normalize score to 0-1 range
    var normalizedScore = score / maxScore;
    
    // Create heatmap colors from light blue to dark blue
    if (normalizedScore >= 0.8) {
        return am5.color(0x0047B3); // Darkest blue (16+ score)
    } else if (normalizedScore >= 0.6) {
        return am5.color(0x227CFF); // Dark blue (12-15 score)
    } else if (normalizedScore >= 0.4) {
        return am5.color(0x5DB3FF); // Medium blue (8-11 score)
    } else if (normalizedScore >= 0.2) {
        return am5.color(0xA6D8FF); // Light blue (4-7 score)
    } else {
        return am5.color(0xD1E7FF); // Lightest blue (1-3 score)
    }
}

// Flag emoji generation
function getFlagEmoji(countryCode) {
    // Handle UK subdivisions
    if (countryCode === "GB-ENG") return "🏴󠁧󠁢󠁥󠁮󠁧󠁿"; // England flag
    if (countryCode === "GB-SCT") return "🏴󠁧󠁢󠁳󠁣󠁴󠁿"; // Scotland flag  
    if (countryCode === "GB-WLS") return "🏴󠁧󠁢󠁷󠁬󠁳󠁿"; // Wales flag
    if (countryCode === "GB-NIR") return "🇬🇧"; // UK flag for Northern Ireland
    
    // Handle regular country codes
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

// Modal functionality for connection details
function showConnectionModal(countryCode, countryName) {
    var modal = document.getElementById("interviewModal");
    var modalTitle = document.getElementById("modalTitle");
    var interviewList = document.getElementById("interviewList");

    var flagEmoji = getFlagEmoji(countryCode);
    var connectionData = countryConnectionScores[countryCode];
    
    if (connectionData) {
        var displayCountryName = connectionData.country;
        modalTitle.textContent = displayCountryName + " " + flagEmoji;
    interviewList.innerHTML = "";

        // Add interpretation only
        var interpretationLi = document.createElement("li");
        var interpretation = "";
        if (connectionData.score >= 12) {
            interpretation = "Strong network presence with multiple high-quality connections";
        } else if (connectionData.score >= 8) {
            interpretation = "Good network presence with solid connections";
        } else if (connectionData.score >= 4) {
            interpretation = "Developing network presence";
        } else {
            interpretation = "Limited network presence";
        }
        interpretationLi.innerHTML = interpretation;
        interpretationLi.style.background = "#f8f9fa";
        interpretationLi.style.borderLeft = "4px solid #28a745";
        interpretationLi.style.padding = "20px";
        interpretationLi.style.fontSize = "1.1rem";
        interpretationLi.style.textAlign = "center";
        interpretationLi.style.fontWeight = "500";
        interviewList.appendChild(interpretationLi);
    } else {
        // For countries with no connections, try to get the full country name
        var displayName = countryName;
        
        // If we got a country code (like "PE"), look up the full name
        if (displayName && displayName.length === 2) {
            // This is likely a country code, find the full name
            var networkCountry = networkData.find(function(country) {
                return countryNameToCode[country.country] === countryCode;
            });
            if (networkCountry) {
                displayName = networkCountry.country;
            }
        }
        
        // If still no good name, try the reverse lookup
        if (!displayName || displayName.length === 2) {
            var networkCountry = networkData.find(function(country) {
                return countryNameToCode[country.country] === countryCode;
            });
            if (networkCountry) {
                displayName = networkCountry.country;
            }
        }
        
        modalTitle.textContent = displayName + " " + flagEmoji;
        interviewList.innerHTML = "<li style='text-align: center; padding: 20px; background: #f8f9fa; border-left: 4px solid #6c757d;'>No strong connections...yet!</li>";
    }

    modal.style.display = "flex";
}

// Special UK modal showing subdivisions
function showUKModal() {
    var modal = document.getElementById("interviewModal");
    var modalTitle = document.getElementById("modalTitle");
    var interviewList = document.getElementById("interviewList");

    modalTitle.textContent = "United Kingdom 🇬🇧";
    interviewList.innerHTML = "";

    // UK subdivision data
    var ukCountries = [
        { name: "England", code: "GB-ENG", connections: 4, strength: 4, score: 16 },
        { name: "Scotland", code: "GB-SCT", connections: 2, strength: 3, score: 6 },
        { name: "Wales", code: "GB-WLS", connections: 1, strength: 3, score: 3 },
        { name: "Northern Ireland", code: "GB-NIR", connections: 1, strength: 2, score: 2 }
    ];

    ukCountries.forEach(function(country) {
        var countryLi = document.createElement("li");
        var flagEmoji = getFlagEmoji(country.code);
        var interpretation = "";
        
        if (country.score >= 12) {
            interpretation = "Strong network presence with multiple high-quality connections";
        } else if (country.score >= 8) {
            interpretation = "Good network presence with solid connections";
        } else if (country.score >= 4) {
            interpretation = "Developing network presence";
        } else {
            interpretation = "Limited network presence";
        }
        
        countryLi.innerHTML = "<strong>" + country.name + " " + flagEmoji + "</strong><br>" + interpretation;
        countryLi.style.background = "#f8f9fa";
        countryLi.style.borderLeft = "4px solid #28a745";
        countryLi.style.padding = "15px";
        countryLi.style.marginBottom = "10px";
        countryLi.style.fontSize = "1rem";
        interviewList.appendChild(countryLi);
    });

    modal.style.display = "flex";
}

// Initialize map
am5.ready(function() {
    var root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
        am5map.MapChart.new(root, {
            panX: "translateX",
            panY: "translateY",
            projection: am5map.geoMercator()
        })
    );

    var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow,
            exclude: ["AQ"] // Excludes Antarctica
        })
    );

    // Default styling
    polygonSeries.mapPolygons.template.setAll({
        tooltipText: "",  // Disable tooltips
        toggleKey: "active",
        interactive: true,
        fill: am5.color(0xDDDDDD)  // Light grey default
    });

    // Hover state
    polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color(0x677935)  // Green hover
    });

    // Active state
    polygonSeries.mapPolygons.template.states.create("active", {
        fill: am5.color(0x677935)  // Green active
    });

    // Apply heatmap colors to countries
    polygonSeries.mapPolygons.template.adapters.add("fill", function(fill, target) {
        var dataItem = target.dataItem;
        var id = dataItem.get("id");
        
        if (countryConnectionScores[id]) {
            return getHeatmapColor(countryConnectionScores[id].score);
        }
        return am5.color(0xDDDDDD); // Light grey for no connections
    });

    // Tooltips disabled - no hover popup

    // Click event handling
    polygonSeries.mapPolygons.template.events.on("click", function(ev) {
        var dataItem = ev.target.dataItem;
        var id = dataItem.get("id");
        var countryName = dataItem.get("name") || dataItem.get("id") || "Unknown Country";
        
        // Special handling for UK - show subdivisions
        if (id === "GB") {
            showUKModal();
        } else {
            showConnectionModal(id, countryName);
        }
    });

    // Make stuff animate on load
    chart.appear(1000, 100);
});

// Modal close functionality
var modal = document.getElementById("interviewModal");
var closeModal = document.getElementById("closeModal");

closeModal.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};