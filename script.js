// Interview data structure
var interviewData = [
    { 
        name: "Joe Smith", 
        title: "Coach", 
        url: "https://linkedin.com", 
        country1: "GB", 
        club: "Manchester United" 
    },
    { 
        name: "Anna Garcia", 
        title: "Scout", 
        url: "https://linkedin.com", 
        country1: "ES", 
        club: "Real Madrid" 
    },
    { 
        name: "Lucas Silva", 
        title: "Academy Director", 
        url: "https://linkedin.com", 
        country1: "BR", 
        club: "Flamengo" 
    },
    { 
        name: "Omar Khaled", 
        title: "Analyst", 
        url: "https://linkedin.com", 
        country1: "EG", 
        club: "Al Ahly" 
    },
    { 
        name: "Sophie Kim", 
        title: "Marketing", 
        url: "https://linkedin.com", 
        country1: "US", 
        club: "LAFC" 
    },
    { 
        name: "Michael Brown", 
        title: "Sporting Director", 
        url: "https://linkedin.com", 
        country1: "GB", 
        club: "Chelsea" 
    },
    { 
        name: "David Osei", 
        title: "Scout", 
        url: "https://linkedin.com", 
        country1: "GH", 
        club: "Hearts of Oak" 
    },
    { 
        name: "Maria Rodriguez", 
        title: "Physiotherapist", 
        url: "https://linkedin.com", 
        country1: "ES", 
        club: "Barcelona" 
    },
    { 
        name: "James Wilson", 
        title: "Goalkeeper Coach", 
        url: "https://linkedin.com", 
        country1: "GB", 
        club: "Liverpool" 
    },
    { 
        name: "Carlos Mendez", 
        title: "Youth Coach", 
        url: "https://linkedin.com", 
        country1: "AR", 
        club: "River Plate" 
    },
    { 
        name: "Yuki Tanaka", 
        title: "Data Analyst", 
        url: "https://linkedin.com", 
        country1: "JP", 
        club: "Urawa Red Diamonds" 
    },
    { 
        name: "Ahmed Hassan", 
        title: "Scout", 
        url: "https://linkedin.com", 
        country1: "EG", 
        club: "Zamalek" 
    },
    { 
        name: "Emma Thompson", 
        title: "Sports Scientist", 
        url: "https://linkedin.com", 
        country1: "GB", 
        club: "Arsenal" 
    },
    { 
        name: "Roberto Santos", 
        title: "Technical Director", 
        url: "https://linkedin.com", 
        country1: "BR", 
        club: "São Paulo" 
    },
    { 
        name: "Lisa Chen", 
        title: "Marketing Manager", 
        url: "https://linkedin.com", 
        country1: "CN", 
        club: "Shanghai Port" 
    },
    { 
        name: "Pierre Dubois", 
        title: "Talent Scout", 
        url: "https://linkedin.com", 
        country1: "FR", 
        club: "Paris Saint-Germain" 
    },
    { 
        name: "Klaus Müller", 
        title: "Academy Coach", 
        url: "https://linkedin.com", 
        country1: "DE", 
        club: "Bayern Munich" 
    },
    { 
        name: "Giuseppe Rossi", 
        title: "Technical Scout", 
        url: "https://linkedin.com", 
        country1: "IT", 
        club: "Juventus" 
    },
    { 
        name: "Sarah Johnson", 
        title: "Performance Analyst", 
        url: "https://linkedin.com", 
        country1: "GB", 
        club: "Manchester City" 
    },
    { 
        name: "Diego Martinez", 
        title: "Head Coach", 
        url: "https://linkedin.com", 
        country1: "ES", 
        club: "Atletico Madrid" 
    }
];

// Country code mapping
var countryNames = {
    "GB": "United Kingdom",
    "ES": "Spain", 
    "BR": "Brazil",
    "EG": "Egypt",
    "US": "United States",
    "GH": "Ghana",
    "AR": "Argentina",
    "JP": "Japan",
    "CN": "China",
    "FR": "France",
    "DE": "Germany",
    "IT": "Italy"
};

// Count interviews per country
var countryInterviews = {};
interviewData.forEach(function(interview) {
    if (interview.country1) {
        if (!countryInterviews[interview.country1]) {
            countryInterviews[interview.country1] = 0;
        }
        countryInterviews[interview.country1]++;
    }
});

// Color coding based on interview count
function getColorByInterviewCount(count) {
    if (count >= 4) {
        return am5.color(0x0047B3); // Darkest blue
    } else if (count === 3) {
        return am5.color(0x227CFF);
    } else if (count === 2) {
        return am5.color(0x5DB3FF);
    } else {
        return am5.color(0xA6D8FF); // Lightest blue
    }
}

// Flag emoji generation
function getFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

// Modal functionality
function showInterviewModal(countryCode, countryName, interviews) {
    var modal = document.getElementById("interviewModal");
    var modalTitle = document.getElementById("modalTitle");
    var interviewList = document.getElementById("interviewList");

    var flagEmoji = getFlagEmoji(countryCode);
    var displayCountryName = countryNames[countryCode] || countryName || "Unknown Country";
    modalTitle.textContent = "Connections in " + displayCountryName + " " + flagEmoji;
    interviewList.innerHTML = "";

    interviews.forEach(function(interview) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = interview.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = interview.name + " - " + interview.title + " - " + interview.club;
        li.appendChild(a);
        interviewList.appendChild(li);
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
        tooltipText: "{name}",
        toggleKey: "active",
        interactive: true,
        fill: am5.color(0xD3D3D3)  // Light grey default
    });

    // Hover state
    polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color(0x677935)  // Green hover
    });

    // Active state
    polygonSeries.mapPolygons.template.states.create("active", {
        fill: am5.color(0x677935)  // Green active
    });

    // Apply colors to countries
    polygonSeries.mapPolygons.template.adapters.add("fill", function(fill, target) {
        var dataItem = target.dataItem;
        var id = dataItem.get("id");
        
        if (countryInterviews[id]) {
            return getColorByInterviewCount(countryInterviews[id]);
        }
        return am5.color(0xDDDDDD); // Light grey for no interviews
    });

    // Click event handling
    polygonSeries.mapPolygons.template.events.on("click", function(ev) {
        var dataItem = ev.target.dataItem;
        var id = dataItem.get("id");
        var countryName = dataItem.get("name");
        
        if (countryInterviews[id]) {
            showInterviewModal(id, countryName, interviewData.filter(function(interview) {
                return interview.country1 === id;
            }));
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