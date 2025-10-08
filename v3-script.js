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

// Heat map color scheme - red for high density
function getHeatMapColor(count) {
    if (count >= 4) {
        return am5.color(0xFF0000); // Bright red for highest density
    } else if (count === 3) {
        return am5.color(0xFF6600); // Orange-red
    } else if (count === 2) {
        return am5.color(0xFFAA00); // Yellow-orange
    } else if (count === 1) {
        return am5.color(0x00FF00); // Green for low density
    } else {
        return am5.color(0x333333); // Dark gray for no connections
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

// Create heat map legend
function createHeatMapLegend() {
    var legend = document.createElement("div");
    legend.className = "heat-legend";
    legend.innerHTML = `
        <h3>Connection Density</h3>
        <div class="heat-legend-item">
            <div class="heat-legend-color" style="background: #FF0000;"></div>
            <div class="heat-legend-text">4+ connections (High)</div>
        </div>
        <div class="heat-legend-item">
            <div class="heat-legend-color" style="background: #FF6600;"></div>
            <div class="heat-legend-text">3 connections</div>
        </div>
        <div class="heat-legend-item">
            <div class="heat-legend-color" style="background: #FFAA00;"></div>
            <div class="heat-legend-text">2 connections</div>
        </div>
        <div class="heat-legend-item">
            <div class="heat-legend-color" style="background: #00FF00;"></div>
            <div class="heat-legend-text">1 connection (Low)</div>
        </div>
        <div class="heat-legend-item">
            <div class="heat-legend-color" style="background: #333333;"></div>
            <div class="heat-legend-text">No connections</div>
        </div>
    `;
    document.getElementById("chartdiv").appendChild(legend);
}

// Initialize heat map
am5.ready(function() {
    var root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    // Create 3D chart with orthographic projection for heat map
    var chart = root.container.children.push(
        am5map.MapChart.new(root, {
            panX: "rotateX",
            panY: "rotateY",
            wheelX: "rotateX",
            wheelY: "rotateY",
            projection: am5map.geoOrthographic(), // 3D globe projection
            paddingBottom: 20,
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            // Enhanced zoom settings
            wheelZoomable: true,
            wheelZoomSpeed: 0.5,
            wheelZoomFactor: 1.1
        })
    );

    var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow,
            exclude: ["AQ"] // Excludes Antarctica
        })
    );

    // Heat map styling - more vibrant colors
    polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}: {value} connections",
        toggleKey: "active",
        interactive: true,
        fill: am5.color(0x333333),  // Dark base
        stroke: am5.color(0x666666),
        strokeWidth: 1
    });

    // Enhanced hover state for heat map
    polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color(0xFFFFFF),  // White highlight
        stroke: am5.color(0x000000),
        strokeWidth: 3
    });

    // Active state
    polygonSeries.mapPolygons.template.states.create("active", {
        fill: am5.color(0xFFFFFF),  // White highlight
        stroke: am5.color(0x000000),
        strokeWidth: 3
    });

    // Apply heat map colors
    polygonSeries.mapPolygons.template.adapters.add("fill", function(fill, target) {
        var dataItem = target.dataItem;
        var id = dataItem.get("id");
        
        if (countryInterviews[id]) {
            return getHeatMapColor(countryInterviews[id]);
        }
        return am5.color(0x333333); // Dark gray for no connections
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

    // Add enhanced zoom control for heat map
    var zoomControl = chart.set("zoomControl", am5map.ZoomControl.new(root, {
        wheelZoomable: true,
        wheelZoomSpeed: 0.5,
        wheelZoomFactor: 1.1,
        touchZoomable: true,
        touchZoomSpeed: 0.3
    }));
    
    // Add home button for heat map
    var homeButton = chart.children.push(am5.Button.new(root, {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        background: am5.Rectangle.new(root, {
            fill: am5.color("#00ff88"),
            cornerRadius: 5
        })
    }));
    
    homeButton.label.set("text", "Reset View");
    homeButton.label.set("fill", am5.color("#000000"));
    
    homeButton.events.on("click", function() {
        chart.set("projection", am5map.geoOrthographic.new(root, {
            centerLongitude: 0,
            centerLatitude: 0
        }));
        chart.invalidateProjection();
    });
    
    // Position home button
    homeButton.set("x", 20);
    homeButton.set("y", 20);

    // Create heat map legend
    createHeatMapLegend();

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
