(function($) {
    var TimezoneList = {

        init: function(opts) {
            this.countryCode = opts.countryCode;

            this.timezones = this.getTimezoneByCountry(this.countryCode);

            this.html = this.getHTMLOptions();
        },
        getHTMLOptions: function() {
            var html = '';
            var offset = 0;
            var i, c = this.timezones.length || 0,
                timezone;

            for (i = 0; i < c; i++) {
                timezone = this.timezones[i];
                html += '<option value="' + timezone + '">' + timezone + '</option>';
            }

            return html;
        },
        addNames: function(select) {
            return $(select).empty().append($(this.html));
        },
        selectValue: function(select, value) {
            value = value || this.currentTimezoon;

            var match = $(select).find('option[data-offset="' + value + '"]');

            if (match.length) {
                $(select).val(match.val());
            }

            return $(select);
        },
        getTimezoneByCountry: function(countryCode) {
            var data = {
                "AD": [
                    "Europe/Andorra"
                ],
                "AE": [
                    "Asia/Dubai"
                ],
                "AF": [
                    "Asia/Kabul"
                ],
                "AG": [
                    "America/Antigua"
                ],
                "AI": [
                    "America/Anguilla"
                ],
                "AL": [
                    "Europe/Tirane"
                ],
                "AM": [
                    "Asia/Yerevan"
                ],
                "AO": [
                    "Africa/Luanda"
                ],
                "AQ": [
                    "Antarctica/McMurdo",
                    "Antarctica/Rothera",
                    "Antarctica/Palmer",
                    "Antarctica/Mawson",
                    "Antarctica/Davis",
                    "Antarctica/Casey",
                    "Antarctica/Vostok",
                    "Antarctica/DumontDUrville",
                    "Antarctica/Syowa",
                    "Antarctica/Troll"
                ],
                "AR": [
                    "America/Argentina/Buenos_Aires",
                    "America/Argentina/Cordoba",
                    "America/Argentina/Salta",
                    "America/Argentina/Jujuy",
                    "America/Argentina/Tucuman",
                    "America/Argentina/Catamarca",
                    "America/Argentina/La_Rioja",
                    "America/Argentina/San_Juan",
                    "America/Argentina/Mendoza",
                    "America/Argentina/San_Luis",
                    "America/Argentina/Rio_Gallegos",
                    "America/Argentina/Ushuaia"
                ],
                "AS": [
                    "Pacific/Pago_Pago"
                ],
                "AT": [
                    "Europe/Vienna"
                ],
                "AU": [
                    "Australia/Lord_Howe",
                    "Antarctica/Macquarie",
                    "Australia/Hobart",
                    "Australia/Currie",
                    "Australia/Melbourne",
                    "Australia/Sydney",
                    "Australia/Broken_Hill",
                    "Australia/Brisbane",
                    "Australia/Lindeman",
                    "Australia/Adelaide",
                    "Australia/Darwin",
                    "Australia/Perth",
                    "Australia/Eucla"
                ],
                "AW": [
                    "America/Aruba"
                ],
                "AX": [
                    "Europe/Mariehamn"
                ],
                "AZ": [
                    "Asia/Baku"
                ],
                "BA": [
                    "Europe/Sarajevo"
                ],
                "BB": [
                    "America/Barbados"
                ],
                "BD": [
                    "Asia/Dhaka"
                ],
                "BE": [
                    "Europe/Brussels"
                ],
                "BF": [
                    "Africa/Ouagadougou"
                ],
                "BG": [
                    "Europe/Sofia"
                ],
                "BH": [
                    "Asia/Bahrain"
                ],
                "BI": [
                    "Africa/Bujumbura"
                ],
                "BJ": [
                    "Africa/Porto-Novo"
                ],
                "BL": [
                    "America/St_Barthelemy"
                ],
                "BM": [
                    "Atlantic/Bermuda"
                ],
                "BN": [
                    "Asia/Brunei"
                ],
                "BO": [
                    "America/La_Paz"
                ],
                "BQ": [
                    "America/Kralendijk"
                ],
                "BR": [
                    "America/Noronha",
                    "America/Belem",
                    "America/Fortaleza",
                    "America/Recife",
                    "America/Araguaina",
                    "America/Maceio",
                    "America/Bahia",
                    "America/Sao_Paulo",
                    "America/Campo_Grande",
                    "America/Cuiaba",
                    "America/Santarem",
                    "America/Porto_Velho",
                    "America/Boa_Vista",
                    "America/Manaus",
                    "America/Eirunepe",
                    "America/Rio_Branco"
                ],
                "BS": [
                    "America/Nassau"
                ],
                "BT": [
                    "Asia/Thimphu"
                ],
                "BW": [
                    "Africa/Gaborone"
                ],
                "BY": [
                    "Europe/Minsk"
                ],
                "BZ": [
                    "America/Belize"
                ],
                "CA": [
                    "America/St_Johns",
                    "America/Halifax",
                    "America/Glace_Bay",
                    "America/Moncton",
                    "America/Goose_Bay",
                    "America/Blanc-Sablon",
                    "America/Toronto",
                    "America/Nipigon",
                    "America/Thunder_Bay",
                    "America/Iqaluit",
                    "America/Pangnirtung",
                    "America/Resolute",
                    "America/Atikokan",
                    "America/Rankin_Inlet",
                    "America/Winnipeg",
                    "America/Rainy_River",
                    "America/Regina",
                    "America/Swift_Current",
                    "America/Edmonton",
                    "America/Cambridge_Bay",
                    "America/Yellowknife",
                    "America/Inuvik",
                    "America/Creston",
                    "America/Dawson_Creek",
                    "America/Vancouver",
                    "America/Whitehorse",
                    "America/Dawson"
                ],
                "CC": [
                    "Indian/Cocos"
                ],
                "CD": [
                    "Africa/Kinshasa",
                    "Africa/Lubumbashi"
                ],
                "CF": [
                    "Africa/Bangui"
                ],
                "CG": [
                    "Africa/Brazzaville"
                ],
                "CH": [
                    "Europe/Zurich"
                ],
                "CI": [
                    "Africa/Abidjan"
                ],
                "CK": [
                    "Pacific/Rarotonga"
                ],
                "CL": [
                    "America/Santiago",
                    "Pacific/Easter"
                ],
                "CM": [
                    "Africa/Douala"
                ],
                "CN": [
                    "Asia/Shanghai",
                    "Asia/Urumqi"
                ],
                "CO": [
                    "America/Bogota"
                ],
                "CR": [
                    "America/Costa_Rica"
                ],
                "CU": [
                    "America/Havana"
                ],
                "CV": [
                    "Atlantic/Cape_Verde"
                ],
                "CW": [
                    "America/Curacao"
                ],
                "CX": [
                    "Indian/Christmas"
                ],
                "CY": [
                    "Asia/Nicosia"
                ],
                "CZ": [
                    "Europe/Prague"
                ],
                "DE": [
                    "Europe/Berlin",
                    "Europe/Busingen"
                ],
                "DJ": [
                    "Africa/Djibouti"
                ],
                "DK": [
                    "Europe/Copenhagen"
                ],
                "DM": [
                    "America/Dominica"
                ],
                "DO": [
                    "America/Santo_Domingo"
                ],
                "DZ": [
                    "Africa/Algiers"
                ],
                "EC": [
                    "America/Guayaquil",
                    "Pacific/Galapagos"
                ],
                "EE": [
                    "Europe/Tallinn"
                ],
                "EG": [
                    "Africa/Cairo"
                ],
                "EH": [
                    "Africa/El_Aaiun"
                ],
                "ER": [
                    "Africa/Asmara"
                ],
                "ES": [
                    "Europe/Madrid",
                    "Africa/Ceuta",
                    "Atlantic/Canary"
                ],
                "ET": [
                    "Africa/Addis_Ababa"
                ],
                "FI": [
                    "Europe/Helsinki"
                ],
                "FJ": [
                    "Pacific/Fiji"
                ],
                "FK": [
                    "Atlantic/Stanley"
                ],
                "FM": [
                    "Pacific/Chuuk",
                    "Pacific/Pohnpei",
                    "Pacific/Kosrae"
                ],
                "FO": [
                    "Atlantic/Faroe"
                ],
                "FR": [
                    "Europe/Paris"
                ],
                "GA": [
                    "Africa/Libreville"
                ],
                "GB": [
                    "Europe/London"
                ],
                "GD": [
                    "America/Grenada"
                ],
                "GE": [
                    "Asia/Tbilisi"
                ],
                "GF": [
                    "America/Cayenne"
                ],
                "GG": [
                    "Europe/Guernsey"
                ],
                "GH": [
                    "Africa/Accra"
                ],
                "GI": [
                    "Europe/Gibraltar"
                ],
                "GL": [
                    "America/Godthab",
                    "America/Danmarkshavn",
                    "America/Scoresbysund",
                    "America/Thule"
                ],
                "GM": [
                    "Africa/Banjul"
                ],
                "GN": [
                    "Africa/Conakry"
                ],
                "GP": [
                    "America/Guadeloupe"
                ],
                "GQ": [
                    "Africa/Malabo"
                ],
                "GR": [
                    "Europe/Athens"
                ],
                "GS": [
                    "Atlantic/South_Georgia"
                ],
                "GT": [
                    "America/Guatemala"
                ],
                "GU": [
                    "Pacific/Guam"
                ],
                "GW": [
                    "Africa/Bissau"
                ],
                "GY": [
                    "America/Guyana"
                ],
                "HK": [
                    "Asia/Hong_Kong"
                ],
                "HN": [
                    "America/Tegucigalpa"
                ],
                "HR": [
                    "Europe/Zagreb"
                ],
                "HT": [
                    "America/Port-au-Prince"
                ],
                "HU": [
                    "Europe/Budapest"
                ],
                "ID": [
                    "Asia/Jakarta",
                    "Asia/Pontianak",
                    "Asia/Makassar",
                    "Asia/Jayapura"
                ],
                "IE": [
                    "Europe/Dublin"
                ],
                "IL": [
                    "Asia/Jerusalem"
                ],
                "IM": [
                    "Europe/Isle_of_Man"
                ],
                "IN": [
                    "Asia/Kolkata"
                ],
                "IO": [
                    "Indian/Chagos"
                ],
                "IQ": [
                    "Asia/Baghdad"
                ],
                "IR": [
                    "Asia/Tehran"
                ],
                "IS": [
                    "Atlantic/Reykjavik"
                ],
                "IT": [
                    "Europe/Rome"
                ],
                "JE": [
                    "Europe/Jersey"
                ],
                "JM": [
                    "America/Jamaica"
                ],
                "JO": [
                    "Asia/Amman"
                ],
                "JP": [
                    "Asia/Tokyo"
                ],
                "KE": [
                    "Africa/Nairobi"
                ],
                "KG": [
                    "Asia/Bishkek"
                ],
                "KH": [
                    "Asia/Phnom_Penh"
                ],
                "KI": [
                    "Pacific/Tarawa",
                    "Pacific/Enderbury",
                    "Pacific/Kiritimati"
                ],
                "KM": [
                    "Indian/Comoro"
                ],
                "KN": [
                    "America/St_Kitts"
                ],
                "KP": [
                    "Asia/Pyongyang"
                ],
                "KR": [
                    "Asia/Seoul"
                ],
                "KW": [
                    "Asia/Kuwait"
                ],
                "KY": [
                    "America/Cayman"
                ],
                "KZ": [
                    "Asia/Almaty",
                    "Asia/Qyzylorda",
                    "Asia/Aqtobe",
                    "Asia/Aqtau",
                    "Asia/Oral"
                ],
                "LA": [
                    "Asia/Vientiane"
                ],
                "LB": [
                    "Asia/Beirut"
                ],
                "LC": [
                    "America/St_Lucia"
                ],
                "LI": [
                    "Europe/Vaduz"
                ],
                "LK": [
                    "Asia/Colombo"
                ],
                "LR": [
                    "Africa/Monrovia"
                ],
                "LS": [
                    "Africa/Maseru"
                ],
                "LT": [
                    "Europe/Vilnius"
                ],
                "LU": [
                    "Europe/Luxembourg"
                ],
                "LV": [
                    "Europe/Riga"
                ],
                "LY": [
                    "Africa/Tripoli"
                ],
                "MA": [
                    "Africa/Casablanca"
                ],
                "MC": [
                    "Europe/Monaco"
                ],
                "MD": [
                    "Europe/Chisinau"
                ],
                "ME": [
                    "Europe/Podgorica"
                ],
                "MF": [
                    "America/Marigot"
                ],
                "MG": [
                    "Indian/Antananarivo"
                ],
                "MH": [
                    "Pacific/Majuro",
                    "Pacific/Kwajalein"
                ],
                "MK": [
                    "Europe/Skopje"
                ],
                "ML": [
                    "Africa/Bamako"
                ],
                "MM": [
                    "Asia/Rangoon"
                ],
                "MN": [
                    "Asia/Ulaanbaatar",
                    "Asia/Hovd",
                    "Asia/Choibalsan"
                ],
                "MO": [
                    "Asia/Macau"
                ],
                "MP": [
                    "Pacific/Saipan"
                ],
                "MQ": [
                    "America/Martinique"
                ],
                "MR": [
                    "Africa/Nouakchott"
                ],
                "MS": [
                    "America/Montserrat"
                ],
                "MT": [
                    "Europe/Malta"
                ],
                "MU": [
                    "Indian/Mauritius"
                ],
                "MV": [
                    "Indian/Maldives"
                ],
                "MW": [
                    "Africa/Blantyre"
                ],
                "MX": [
                    "America/Mexico_City",
                    "America/Cancun",
                    "America/Merida",
                    "America/Monterrey",
                    "America/Matamoros",
                    "America/Mazatlan",
                    "America/Chihuahua",
                    "America/Ojinaga",
                    "America/Hermosillo",
                    "America/Tijuana",
                    "America/Santa_Isabel",
                    "America/Bahia_Banderas"
                ],
                "MY": [
                    "Asia/Kuala_Lumpur",
                    "Asia/Kuching"
                ],
                "MZ": [
                    "Africa/Maputo"
                ],
                "NA": [
                    "Africa/Windhoek"
                ],
                "NC": [
                    "Pacific/Noumea"
                ],
                "NE": [
                    "Africa/Niamey"
                ],
                "NF": [
                    "Pacific/Norfolk"
                ],
                "NG": [
                    "Africa/Lagos"
                ],
                "NI": [
                    "America/Managua"
                ],
                "NL": [
                    "Europe/Amsterdam"
                ],
                "NO": [
                    "Europe/Oslo"
                ],
                "NP": [
                    "Asia/Kathmandu"
                ],
                "NR": [
                    "Pacific/Nauru"
                ],
                "NU": [
                    "Pacific/Niue"
                ],
                "NZ": [
                    "Pacific/Auckland",
                    "Pacific/Chatham"
                ],
                "OM": [
                    "Asia/Muscat"
                ],
                "PA": [
                    "America/Panama"
                ],
                "PE": [
                    "America/Lima"
                ],
                "PF": [
                    "Pacific/Tahiti",
                    "Pacific/Marquesas",
                    "Pacific/Gambier"
                ],
                "PG": [
                    "Pacific/Port_Moresby",
                    "Pacific/Bougainville"
                ],
                "PH": [
                    "Asia/Manila"
                ],
                "PK": [
                    "Asia/Karachi"
                ],
                "PL": [
                    "Europe/Warsaw"
                ],
                "PM": [
                    "America/Miquelon"
                ],
                "PN": [
                    "Pacific/Pitcairn"
                ],
                "PR": [
                    "America/Puerto_Rico"
                ],
                "PS": [
                    "Asia/Gaza",
                    "Asia/Hebron"
                ],
                "PT": [
                    "Europe/Lisbon",
                    "Atlantic/Madeira",
                    "Atlantic/Azores"
                ],
                "PW": [
                    "Pacific/Palau"
                ],
                "PY": [
                    "America/Asuncion"
                ],
                "QA": [
                    "Asia/Qatar"
                ],
                "RE": [
                    "Indian/Reunion"
                ],
                "RO": [
                    "Europe/Bucharest"
                ],
                "RS": [
                    "Europe/Belgrade"
                ],
                "RU": [
                    "Europe/Kaliningrad",
                    "Europe/Moscow",
                    "Europe/Simferopol",
                    "Europe/Volgograd",
                    "Europe/Samara",
                    "Asia/Yekaterinburg",
                    "Asia/Omsk",
                    "Asia/Novosibirsk",
                    "Asia/Novokuznetsk",
                    "Asia/Krasnoyarsk",
                    "Asia/Irkutsk",
                    "Asia/Chita",
                    "Asia/Yakutsk",
                    "Asia/Khandyga",
                    "Asia/Vladivostok",
                    "Asia/Sakhalin",
                    "Asia/Ust-Nera",
                    "Asia/Magadan",
                    "Asia/Srednekolymsk",
                    "Asia/Kamchatka",
                    "Asia/Anadyr"
                ],
                "RW": [
                    "Africa/Kigali"
                ],
                "SA": [
                    "Asia/Riyadh"
                ],
                "SB": [
                    "Pacific/Guadalcanal"
                ],
                "SC": [
                    "Indian/Mahe"
                ],
                "SD": [
                    "Africa/Khartoum"
                ],
                "SE": [
                    "Europe/Stockholm"
                ],
                "SG": [
                    "Asia/Singapore"
                ],
                "SH": [
                    "Atlantic/St_Helena"
                ],
                "SI": [
                    "Europe/Ljubljana"
                ],
                "SJ": [
                    "Arctic/Longyearbyen"
                ],
                "SK": [
                    "Europe/Bratislava"
                ],
                "SL": [
                    "Africa/Freetown"
                ],
                "SM": [
                    "Europe/San_Marino"
                ],
                "SN": [
                    "Africa/Dakar"
                ],
                "SO": [
                    "Africa/Mogadishu"
                ],
                "SR": [
                    "America/Paramaribo"
                ],
                "SS": [
                    "Africa/Juba"
                ],
                "ST": [
                    "Africa/Sao_Tome"
                ],
                "SV": [
                    "America/El_Salvador"
                ],
                "SX": [
                    "America/Lower_Princes"
                ],
                "SY": [
                    "Asia/Damascus"
                ],
                "SZ": [
                    "Africa/Mbabane"
                ],
                "TC": [
                    "America/Grand_Turk"
                ],
                "TD": [
                    "Africa/Ndjamena"
                ],
                "TF": [
                    "Indian/Kerguelen"
                ],
                "TG": [
                    "Africa/Lome"
                ],
                "TH": [
                    "Asia/Bangkok"
                ],
                "TJ": [
                    "Asia/Dushanbe"
                ],
                "TK": [
                    "Pacific/Fakaofo"
                ],
                "TL": [
                    "Asia/Dili"
                ],
                "TM": [
                    "Asia/Ashgabat"
                ],
                "TN": [
                    "Africa/Tunis"
                ],
                "TO": [
                    "Pacific/Tongatapu"
                ],
                "TR": [
                    "Europe/Istanbul"
                ],
                "TT": [
                    "America/Port_of_Spain"
                ],
                "TV": [
                    "Pacific/Funafuti"
                ],
                "TW": [
                    "Asia/Taipei"
                ],
                "TZ": [
                    "Africa/Dar_es_Salaam"
                ],
                "UA": [
                    "Europe/Kiev",
                    "Europe/Uzhgorod",
                    "Europe/Zaporozhye"
                ],
                "UG": [
                    "Africa/Kampala"
                ],
                "UM": [
                    "Pacific/Johnston",
                    "Pacific/Midway",
                    "Pacific/Wake"
                ],
                "US": [
                    "America/New_York",
                    "America/Detroit",
                    "America/Kentucky/Louisville",
                    "America/Kentucky/Monticello",
                    "America/Indiana/Indianapolis",
                    "America/Indiana/Vincennes",
                    "America/Indiana/Winamac",
                    "America/Indiana/Marengo",
                    "America/Indiana/Petersburg",
                    "America/Indiana/Vevay",
                    "America/Chicago",
                    "America/Indiana/Tell_City",
                    "America/Indiana/Knox",
                    "America/Menominee",
                    "America/North_Dakota/Center",
                    "America/North_Dakota/New_Salem",
                    "America/North_Dakota/Beulah",
                    "America/Denver",
                    "America/Boise",
                    "America/Phoenix",
                    "America/Los_Angeles",
                    "America/Metlakatla",
                    "America/Anchorage",
                    "America/Juneau",
                    "America/Sitka",
                    "America/Yakutat",
                    "America/Nome",
                    "America/Adak",
                    "Pacific/Honolulu"
                ],
                "UY": [
                    "America/Montevideo"
                ],
                "UZ": [
                    "Asia/Samarkand",
                    "Asia/Tashkent"
                ],
                "VA": [
                    "Europe/Vatican"
                ],
                "VC": [
                    "America/St_Vincent"
                ],
                "VE": [
                    "America/Caracas"
                ],
                "VG": [
                    "America/Tortola"
                ],
                "VI": [
                    "America/St_Thomas"
                ],
                "VN": [
                    "Asia/Ho_Chi_Minh"
                ],
                "VU": [
                    "Pacific/Efate"
                ],
                "WF": [
                    "Pacific/Wallis"
                ],
                "WS": [
                    "Pacific/Apia"
                ],
                "YE": [
                    "Asia/Aden"
                ],
                "YT": [
                    "Indian/Mayotte"
                ],
                "ZA": [
                    "Africa/Johannesburg"
                ],
                "ZM": [
                    "Africa/Lusaka"
                ],
                "ZW": [
                    "Africa/Harare"
                ]
            };
            return data[countryCode];
        }
    };

    $.fn.timezoneList = function(opts) {

        opts = $.extend({}, $.fn.timezoneList.defaults, opts);

        TimezoneList.init(opts);

        return this.each(function() {
            TimezoneList.addNames(this);
            TimezoneList.selectValue(this);
            return this;
        });
    };
    $.fn.timezoneList.defaults = {};

})(jQuery);

(function($) {
    var CountryList = {

        init: function(countries) {
            this.countries = this.getCountryList();

            this.html = this.getHTMLOptions();
        },
        getHTMLOptions: function() {
            var html = '';
            var offset = 0;
            var i, c = this.countries.length || 0,
                country;

            for (i = 0; i < c; i++) {
                country = this.countries[i];
                html += '<option value="' + country.code + '">' + country.name + '</option>';
            }

            return html;
        },
        addNames: function(select) {
            return $(select).empty().append($(this.html));
        },
        selectValue: function(select, value) {
            value = value || this.currentCountry;

            var match = $(select).find('option[data-offset="' + value + '"]');

            if (match.length) {
                $(select).val(match.val());
            }

            return $(select);
        },
        getCountryList: function() {
            return [{
                code: "AD",
                name: "Andorra"
            }, {
                code: "AE",
                name: "United Arab Emirates"
            }, {
                code: "AF",
                name: "Afghanistan"
            }, {
                code: "AG",
                name: "Antigua and Barbuda"
            }, {
                code: "AI",
                name: "Anguilla"
            }, {
                code: "AL",
                name: "Albania"
            }, {
                code: "AM",
                name: "Armenia"
            }, {
                code: "AN",
                name: "Netherlands Antilles"
            }, {
                code: "AO",
                name: "Angola"
            }, {
                code: "AQ",
                name: "Antarctica"
            }, {
                code: "AR",
                name: "Argentina"
            }, {
                code: "AS",
                name: "American Samoa"
            }, {
                code: "AT",
                name: "Austria"
            }, {
                code: "AU",
                name: "Australia"
            }, {
                code: "AW",
                name: "Aruba"
            }, {
                code: "AX",
                name: "Aland Islands"
            }, {
                code: "AZ",
                name: "Azerbaijan"
            }, {
                code: "BA",
                name: "Bosnia and Herzegovina"
            }, {
                code: "BB",
                name: "Barbados"
            }, {
                code: "BD",
                name: "Bangladesh"
            }, {
                code: "BE",
                name: "Belgium"
            }, {
                code: "BF",
                name: "Burkina Faso"
            }, {
                code: "BG",
                name: "Bulgaria"
            }, {
                code: "BH",
                name: "Bahrain"
            }, {
                code: "BI",
                name: "Burundi"
            }, {
                code: "BJ",
                name: "Benin"
            }, {
                code: "BL",
                name: "Saint Barthélemy"
            }, {
                code: "BM",
                name: "Bermuda"
            }, {
                code: "BN",
                name: "Brunei"
            }, {
                code: "BO",
                name: "Bolivia"
            }, {
                code: "BQ",
                name: "Bonaire, Saint Eustatius and Saba"
            }, {
                code: "BR",
                name: "Brazil"
            }, {
                code: "BS",
                name: "Bahamas"
            }, {
                code: "BT",
                name: "Bhutan"
            }, {
                code: "BV",
                name: "Bouvet Island"
            }, {
                code: "BW",
                name: "Botswana"
            }, {
                code: "BY",
                name: "Belarus"
            }, {
                code: "BZ",
                name: "Belize"
            }, {
                code: "CA",
                name: "Canada"
            }, {
                code: "CC",
                name: "Cocos Islands"
            }, {
                code: "CD",
                name: "Democratic Republic of the Congo"
            }, {
                code: "CF",
                name: "Central African Republic"
            }, {
                code: "CG",
                name: "Republic of the Congo"
            }, {
                code: "CH",
                name: "Switzerland"
            }, {
                code: "CI",
                name: "Ivory Coast"
            }, {
                code: "CK",
                name: "Cook Islands"
            }, {
                code: "CL",
                name: "Chile"
            }, {
                code: "CM",
                name: "Cameroon"
            }, {
                code: "CN",
                name: "China"
            }, {
                code: "CO",
                name: "Colombia"
            }, {
                code: "CR",
                name: "Costa Rica"
            }, {
                code: "CS",
                name: "Serbia and Montenegro"
            }, {
                code: "CU",
                name: "Cuba"
            }, {
                code: "CV",
                name: "Cape Verde"
            }, {
                code: "CW",
                name: "Curaçao"
            }, {
                code: "CX",
                name: "Christmas Island"
            }, {
                code: "CY",
                name: "Cyprus"
            }, {
                code: "CZ",
                name: "Czech Republic"
            }, {
                code: "DE",
                name: "Germany"
            }, {
                code: "DJ",
                name: "Djibouti"
            }, {
                code: "DK",
                name: "Denmark"
            }, {
                code: "DM",
                name: "Dominica"
            }, {
                code: "DO",
                name: "Dominican Republic"
            }, {
                code: "DZ",
                name: "Algeria"
            }, {
                code: "EC",
                name: "Ecuador"
            }, {
                code: "EE",
                name: "Estonia"
            }, {
                code: "EG",
                name: "Egypt"
            }, {
                code: "EH",
                name: "Western Sahara"
            }, {
                code: "ER",
                name: "Eritrea"
            }, {
                code: "ES",
                name: "Spain"
            }, {
                code: "ET",
                name: "Ethiopia"
            }, {
                code: "FI",
                name: "Finland"
            }, {
                code: "FJ",
                name: "Fiji"
            }, {
                code: "FK",
                name: "Falkland Islands"
            }, {
                code: "FM",
                name: "Micronesia"
            }, {
                code: "FO",
                name: "Faroe Islands"
            }, {
                code: "FR",
                name: "France"
            }, {
                code: "GA",
                name: "Gabon"
            }, {
                code: "GB",
                name: "United Kingdom"
            }, {
                code: "GD",
                name: "Grenada"
            }, {
                code: "GE",
                name: "Georgia"
            }, {
                code: "GF",
                name: "French Guiana"
            }, {
                code: "GG",
                name: "Guernsey"
            }, {
                code: "GH",
                name: "Ghana"
            }, {
                code: "GI",
                name: "Gibraltar"
            }, {
                code: "GL",
                name: "Greenland"
            }, {
                code: "GM",
                name: "Gambia"
            }, {
                code: "GN",
                name: "Guinea"
            }, {
                code: "GP",
                name: "Guadeloupe"
            }, {
                code: "GQ",
                name: "Equatorial Guinea"
            }, {
                code: "GR",
                name: "Greece"
            }, {
                code: "GS",
                name: "South Georgia and the South Sandwich Islands"
            }, {
                code: "GT",
                name: "Guatemala"
            }, {
                code: "GU",
                name: "Guam"
            }, {
                code: "GW",
                name: "Guinea-Bissau"
            }, {
                code: "GY",
                name: "Guyana"
            }, {
                code: "HK",
                name: "Hong Kong"
            }, {
                code: "HM",
                name: "Heard Island and McDonald Islands"
            }, {
                code: "HN",
                name: "Honduras"
            }, {
                code: "HR",
                name: "Croatia"
            }, {
                code: "HT",
                name: "Haiti"
            }, {
                code: "HU",
                name: "Hungary"
            }, {
                code: "ID",
                name: "Indonesia"
            }, {
                code: "IE",
                name: "Ireland"
            }, {
                code: "IL",
                name: "Israel"
            }, {
                code: "IM",
                name: "Isle of Man"
            }, {
                code: "IN",
                name: "India"
            }, {
                code: "IO",
                name: "British Indian Ocean Territory"
            }, {
                code: "IQ",
                name: "Iraq"
            }, {
                code: "IR",
                name: "Iran"
            }, {
                code: "IS",
                name: "Iceland"
            }, {
                code: "IT",
                name: "Italy"
            }, {
                code: "JE",
                name: "Jersey"
            }, {
                code: "JM",
                name: "Jamaica"
            }, {
                code: "JO",
                name: "Jordan"
            }, {
                code: "JP",
                name: "Japan"
            }, {
                code: "KE",
                name: "Kenya"
            }, {
                code: "KG",
                name: "Kyrgyzstan"
            }, {
                code: "KH",
                name: "Cambodia"
            }, {
                code: "KI",
                name: "Kiribati"
            }, {
                code: "KM",
                name: "Comoros"
            }, {
                code: "KN",
                name: "Saint Kitts and Nevis"
            }, {
                code: "KP",
                name: "North Korea"
            }, {
                code: "KR",
                name: "South Korea"
            }, {
                code: "KW",
                name: "Kuwait"
            }, {
                code: "KY",
                name: "Cayman Islands"
            }, {
                code: "KZ",
                name: "Kazakhstan"
            }, {
                code: "LA",
                name: "Laos"
            }, {
                code: "LB",
                name: "Lebanon"
            }, {
                code: "LC",
                name: "Saint Lucia"
            }, {
                code: "LI",
                name: "Liechtenstein"
            }, {
                code: "LK",
                name: "Sri Lanka"
            }, {
                code: "LR",
                name: "Liberia"
            }, {
                code: "LS",
                name: "Lesotho"
            }, {
                code: "LT",
                name: "Lithuania"
            }, {
                code: "LU",
                name: "Luxembourg"
            }, {
                code: "LV",
                name: "Latvia"
            }, {
                code: "LY",
                name: "Libya"
            }, {
                code: "MA",
                name: "Morocco"
            }, {
                code: "MC",
                name: "Monaco"
            }, {
                code: "MD",
                name: "Moldova"
            }, {
                code: "ME",
                name: "Montenegro"
            }, {
                code: "MF",
                name: "Saint Martin"
            }, {
                code: "MG",
                name: "Madagascar"
            }, {
                code: "MH",
                name: "Marshall Islands"
            }, {
                code: "MK",
                name: "Macedonia"
            }, {
                code: "ML",
                name: "Mali"
            }, {
                code: "MM",
                name: "Myanmar"
            }, {
                code: "MN",
                name: "Mongolia"
            }, {
                code: "MO",
                name: "Macao"
            }, {
                code: "MP",
                name: "Northern Mariana Islands"
            }, {
                code: "MQ",
                name: "Martinique"
            }, {
                code: "MR",
                name: "Mauritania"
            }, {
                code: "MS",
                name: "Montserrat"
            }, {
                code: "MT",
                name: "Malta"
            }, {
                code: "MU",
                name: "Mauritius"
            }, {
                code: "MV",
                name: "Maldives"
            }, {
                code: "MW",
                name: "Malawi"
            }, {
                code: "MX",
                name: "Mexico"
            }, {
                code: "MY",
                name: "Malaysia"
            }, {
                code: "MZ",
                name: "Mozambique"
            }, {
                code: "NA",
                name: "Namibia"
            }, {
                code: "NC",
                name: "New Caledonia"
            }, {
                code: "NE",
                name: "Niger"
            }, {
                code: "NF",
                name: "Norfolk Island"
            }, {
                code: "NG",
                name: "Nigeria"
            }, {
                code: "NI",
                name: "Nicaragua"
            }, {
                code: "NL",
                name: "Netherlands"
            }, {
                code: "NO",
                name: "Norway"
            }, {
                code: "NP",
                name: "Nepal"
            }, {
                code: "NR",
                name: "Nauru"
            }, {
                code: "NU",
                name: "Niue"
            }, {
                code: "NZ",
                name: "New Zealand"
            }, {
                code: "OM",
                name: "Oman"
            }, {
                code: "PA",
                name: "Panama"
            }, {
                code: "PE",
                name: "Peru"
            }, {
                code: "PF",
                name: "French Polynesia"
            }, {
                code: "PG",
                name: "Papua New Guinea"
            }, {
                code: "PH",
                name: "Philippines"
            }, {
                code: "PK",
                name: "Pakistan"
            }, {
                code: "PL",
                name: "Poland"
            }, {
                code: "PM",
                name: "Saint Pierre and Miquelon"
            }, {
                code: "PN",
                name: "Pitcairn"
            }, {
                code: "PR",
                name: "Puerto Rico"
            }, {
                code: "PS",
                name: "Palestinian Territory"
            }, {
                code: "PT",
                name: "Portugal"
            }, {
                code: "PW",
                name: "Palau"
            }, {
                code: "PY",
                name: "Paraguay"
            }, {
                code: "QA",
                name: "Qatar"
            }, {
                code: "RE",
                name: "Reunion"
            }, {
                code: "RO",
                name: "Romania"
            }, {
                code: "RS",
                name: "Serbia"
            }, {
                code: "RU",
                name: "Russia"
            }, {
                code: "RW",
                name: "Rwanda"
            }, {
                code: "SA",
                name: "Saudi Arabia"
            }, {
                code: "SB",
                name: "Solomon Islands"
            }, {
                code: "SC",
                name: "Seychelles"
            }, {
                code: "SD",
                name: "Sudan"
            }, {
                code: "SE",
                name: "Sweden"
            }, {
                code: "SG",
                name: "Singapore"
            }, {
                code: "SH",
                name: "Saint Helena"
            }, {
                code: "SI",
                name: "Slovenia"
            }, {
                code: "SJ",
                name: "Svalbard and Jan Mayen"
            }, {
                code: "SK",
                name: "Slovakia"
            }, {
                code: "SL",
                name: "Sierra Leone"
            }, {
                code: "SM",
                name: "San Marino"
            }, {
                code: "SN",
                name: "Senegal"
            }, {
                code: "SO",
                name: "Somalia"
            }, {
                code: "SR",
                name: "Suriname"
            }, {
                code: "SS",
                name: "South Sudan"
            }, {
                code: "ST",
                name: "Sao Tome and Principe"
            }, {
                code: "SV",
                name: "El Salvador"
            }, {
                code: "SX",
                name: "Sint Maarten"
            }, {
                code: "SY",
                name: "Syria"
            }, {
                code: "SZ",
                name: "Swaziland"
            }, {
                code: "TC",
                name: "Turks and Caicos Islands"
            }, {
                code: "TD",
                name: "Chad"
            }, {
                code: "TF",
                name: "French Southern Territories"
            }, {
                code: "TG",
                name: "Togo"
            }, {
                code: "TH",
                name: "Thailand"
            }, {
                code: "TJ",
                name: "Tajikistan"
            }, {
                code: "TK",
                name: "Tokelau"
            }, {
                code: "TL",
                name: "East Timor"
            }, {
                code: "TM",
                name: "Turkmenistan"
            }, {
                code: "TN",
                name: "Tunisia"
            }, {
                code: "TO",
                name: "Tonga"
            }, {
                code: "TR",
                name: "Turkey"
            }, {
                code: "TT",
                name: "Trinidad and Tobago"
            }, {
                code: "TV",
                name: "Tuvalu"
            }, {
                code: "TW",
                name: "Taiwan"
            }, {
                code: "TZ",
                name: "Tanzania"
            }, {
                code: "UA",
                name: "Ukraine"
            }, {
                code: "UG",
                name: "Uganda"
            }, {
                code: "UM",
                name: "United States Minor Outlying Islands"
            }, {
                code: "US",
                name: "United States"
            }, {
                code: "UY",
                name: "Uruguay"
            }, {
                code: "UZ",
                name: "Uzbekistan"
            }, {
                code: "VA",
                name: "Vatican"
            }, {
                code: "VC",
                name: "Saint Vincent and the Grenadines"
            }, {
                code: "VE",
                name: "Venezuela"
            }, {
                code: "VG",
                name: "British Virgin Islands"
            }, {
                code: "VI",
                name: "U.S. Virgin Islands"
            }, {
                code: "VN",
                name: "Vietnam"
            }, {
                code: "VU",
                name: "Vanuatu"
            }, {
                code: "WF",
                name: "Wallis and Futuna"
            }, {
                code: "WS",
                name: "Samoa"
            }, {
                code: "XK",
                name: "Kosovo"
            }, {
                code: "YE",
                name: "Yemen"
            }, {
                code: "YT",
                name: "Mayotte"
            }, {
                code: "ZA",
                name: "South Africa"
            }, {
                code: "ZM",
                name: "Zambia"
            }, {
                code: "ZW",
                name: "Zimbabwe"
            }].sort(function(a, b) {
                if (a.name > b.name)
                    return 1;

                if (a.name < b.name)
                    return -1;

                return 0;
            });
        }
    };

    $.fn.countryList = function(opts) {

        opts = $.extend({}, $.fn.countryList.defaults, opts);


        CountryList.init();

        return this.each(function() {
            CountryList.addNames(this);
            CountryList.selectValue(this);
            $(this).on('change', function(e) {
                var valueSelected = this.value;
                var timezoon = $(this).attr('data-timezone') || 'timezone';
                $('select[name="timezone"]').timezoneList({countryCode: valueSelected});
            });
            $(this).trigger('change');
            return this;
        });
    };

    $.fn.countryList.defaults = {};

})(jQuery);
