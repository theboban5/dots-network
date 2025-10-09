// V5 Script - Split Screen Map & Table with Filtering

// Sample people data (same as v1)
var interviewData = [
    { name: "Joe Smith", title: "Coach", club: "Manchester United", country1: "GB", url: "https://linkedin.com" },
    { name: "Anna Garcia", title: "Scout", club: "Real Madrid", country1: "ES", url: "https://linkedin.com" },
    { name: "Lucas Silva", title: "Academy Director", club: "Flamengo", country1: "BR", url: "https://linkedin.com" },
    { name: "Omar Khaled", title: "Analyst", club: "Al Ahly", country1: "EG", url: "https://linkedin.com" },
    { name: "Sophie Kim", title: "Marketing", club: "LAFC", country1: "US", url: "https://linkedin.com" },
    { name: "Michael Brown", title: "Sporting Director", club: "Chelsea", country1: "GB", url: "https://linkedin.com" },
    { name: "James Wilson", title: "Goalkeeper Coach", club: "Liverpool", country1: "GB", url: "https://linkedin.com" },
    { name: "Emma Thompson", title: "Sports Scientist", club: "Arsenal", country1: "GB", url: "https://linkedin.com" },
    { name: "Sarah Johnson", title: "Performance Analyst", club: "Manchester City", country1: "GB", url: "https://linkedin.com" },
    { name: "Maria Rodriguez", title: "Physiotherapist", club: "Barcelona", country1: "ES", url: "https://linkedin.com" },
    { name: "Diego Martinez", title: "Head Coach", club: "Atletico Madrid", country1: "ES", url: "https://linkedin.com" },
    { name: "Roberto Santos", title: "Technical Director", club: "São Paulo", country1: "BR", url: "https://linkedin.com" },
    { name: "Ahmed Hassan", title: "Scout", club: "Zamalek", country1: "EG", url: "https://linkedin.com" },
    { name: "David Osei", title: "Scout", club: "Hearts of Oak", country1: "GH", url: "https://linkedin.com" },
    { name: "Carlos Mendez", title: "Youth Coach", club: "River Plate", country1: "AR", url: "https://linkedin.com" },
    { name: "Yuki Tanaka", title: "Data Analyst", club: "Urawa Red Diamonds", country1: "JP", url: "https://linkedin.com" },
    { name: "Lisa Chen", title: "Marketing Manager", club: "Shanghai Port", country1: "CN", url: "https://linkedin.com" },
    { name: "Pierre Dubois", title: "Talent Scout", club: "Paris Saint-Germain", country1: "FR", url: "https://linkedin.com" },
    { name: "Klaus Müller", title: "Academy Coach", club: "Bayern Munich", country1: "DE", url: "https://linkedin.com" },
    { name: "Giuseppe Rossi", title: "Technical Scout", club: "Juventus", country1: "IT", url: "https://linkedin.com" }
];

// Country name mapping
var countryNames = {
    "GB": "United Kingdom", "ES": "Spain", "BR": "Brazil", "EG": "Egypt", "US": "United States",
    "GH": "Ghana", "AR": "Argentina", "JP": "Japan", "CN": "China", "FR": "France",
    "DE": "Germany", "IT": "Italy"
};

// Flag emoji generation
function getFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

// Group people by country for map coloring
function groupPeopleByCountry() {
    var countryData = {};
    
    interviewData.forEach(function(person) {
        var country = person.country1;
        if (!countryData[country]) {
            countryData[country] = [];
        }
        countryData[country].push(person);
    });
    
    return countryData;
}

// Get country data for a specific country
function getCountryData(countryCode) {
    var countryData = groupPeopleByCountry();
    return countryData[countryCode] || [];
}

// Color coding based on connection count
function getColorByInterviewCount(count) {
    if (count >= 4) {
        return am5.color(0xFF0000); // Red
    } else if (count === 3) {
        return am5.color(0xFF6600); // Orange
    } else if (count === 2) {
        return am5.color(0xFFAA00); // Yellow
    } else if (count === 1) {
        return am5.color(0x00FF00); // Green
    } else {
        return am5.color(0x333333); // Dark gray
    }
}

// Modal functionality
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

function showInterviewModal(countryCode, countryName, interviews) {
    var modalTitle = document.getElementById("modalTitle");
    var interviewList = document.getElementById("interviewList");
    var flagEmoji = getFlagEmoji(countryCode);
    var displayCountryName = countryNames[countryCode] || countryName || "Unknown Country";
    
    modalTitle.textContent = "Connections in " + displayCountryName + " " + flagEmoji;
    interviewList.innerHTML = "";
    
    if (interviews && interviews.length > 0) {
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
    } else {
        var li = document.createElement("li");
        li.textContent = "No connections found for this country.";
        interviewList.appendChild(li);
    }
    
    modal.style.display = "flex";
}

// Table functionality
var filteredData = [...interviewData];
var countryFilter = document.getElementById("countryFilter");
var roleFilter = document.getElementById("roleFilter");
var sortBy = document.getElementById("sortBy");
var tableBody = document.getElementById("tableBody");

// Populate filter options
function populateFilters() {
    // Get unique countries
    var countries = [...new Set(interviewData.map(person => person.country1))];
    countries.sort();
    
    countries.forEach(function(country) {
        var option = document.createElement("option");
        option.value = country;
        option.textContent = countryNames[country] || country;
        countryFilter.appendChild(option);
    });
    
    // Get unique roles
    var roles = [...new Set(interviewData.map(person => person.title))];
    roles.sort();
    
    roles.forEach(function(role) {
        var option = document.createElement("option");
        option.value = role;
        option.textContent = role;
        roleFilter.appendChild(option);
    });
}

// Get connection count for a country
function getConnectionCount(countryCode) {
    return interviewData.filter(person => person.country1 === countryCode).length;
}

// Get connection count class for styling
function getConnectionCountClass(count) {
    if (count >= 4) return "high";
    if (count >= 2) return "medium";
    return "low";
}

// Render table
function renderTable() {
    tableBody.innerHTML = "";
    
    filteredData.forEach(function(person) {
        var row = document.createElement("tr");
        var connectionCount = getConnectionCount(person.country1);
        
        row.innerHTML = `
            <td>${countryNames[person.country1] || person.country1}</td>
            <td>${person.title}</td>
            <td>${person.name}</td>
            <td>${person.club}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Filter and sort data
function filterAndSortData() {
    var countryValue = countryFilter.value;
    var roleValue = roleFilter.value;
    var sortValue = sortBy.value;
    
    // Filter data
    filteredData = interviewData.filter(function(person) {
        var countryMatch = !countryValue || person.country1 === countryValue;
        var roleMatch = !roleValue || person.title === roleValue;
        return countryMatch && roleMatch;
    });
    
    // Sort data
    filteredData.sort(function(a, b) {
        switch(sortValue) {
            case "connections":
                var countA = getConnectionCount(a.country1);
                var countB = getConnectionCount(b.country1);
                return countB - countA; // Descending
            case "country":
                return (countryNames[a.country1] || a.country1).localeCompare(countryNames[b.country1] || b.country1);
            case "role":
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });
    
    renderTable();
}

// Event listeners for filters
countryFilter.addEventListener("change", filterAndSortData);
roleFilter.addEventListener("change", filterAndSortData);
sortBy.addEventListener("change", filterAndSortData);

// Initialize map
am5.ready(function() {
    var root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);
    
    var chart = root.container.children.push(
        am5map.MapChart.new(root, {
            panX: "translateX",
            panY: "translateY",
            projection: am5map.geoMercator(),
            paddingBottom: 20,
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 20
        })
    );
    
    var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow,
            exclude: ["AQ"] // Excludes Antarctica
        })
    );
    
    // Default styling for countries
    polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        toggleKey: "active",
        interactive: true,
        fill: am5.color(0x1a1a2e),
        stroke: am5.color(0x16213e),
        strokeWidth: 1
    });
    
    // Hover state
    polygonSeries.mapPolygons.template.states.create("hover", {
        fill: am5.color(0x00ff88)
    });
    
    // Active state
    polygonSeries.mapPolygons.template.states.create("active", {
        fill: am5.color(0x00ff88)
    });
    
    // Color countries based on connection count
    var countryData = groupPeopleByCountry();
    
    polygonSeries.mapPolygons.template.adapters.add("fill", function(fill, target) {
        var dataItem = target.dataItem;
        var id = dataItem.get("id");
        if (countryData[id]) {
            var count = countryData[id].length;
            return getColorByInterviewCount(count);
        }
        return am5.color(0x333333); // Dark gray for no connections
    });
    
    // Click event for countries
    polygonSeries.mapPolygons.template.events.on("click", function(ev) {
        var dataItem = ev.target.dataItem;
        var id = dataItem.get("id");
        var countryName = dataItem.get("name");
        var interviews = getCountryData(id);
        showInterviewModal(id, countryName, interviews);
    });
    
    // Add zoom control
    var zoomControl = am5map.ZoomControl.new(root, {
        wheelZoomable: true,
        wheelZoomSpeed: 0.5,
        wheelZoomFactor: 1.1,
        touchZoomable: true,
        touchZoomSpeed: 0.3
    });
    
    chart.set("zoomControl", zoomControl);
    
    // Add home button
    var homeButton = am5.Button.new(root, {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        background: am5.Rectangle.new(root, {
            fill: am5.color("#00ff88"),
            cornerRadius: 5
        })
    });
    
    // Add text to button
    var buttonText = am5.Label.new(root, {
        text: "Reset View",
        fill: am5.color("#000000")
    });
    
    homeButton.children.push(buttonText);
    
    homeButton.events.on("click", function() {
        chart.set("projection", am5map.geoMercator());
        chart.invalidateProjection();
    });
    
    // Position home button
    homeButton.set("x", 20);
    homeButton.set("y", 20);
    
    chart.children.push(homeButton);
    
    // Make stuff animate on load
    chart.appear(1000, 100);
});

// Initialize page
document.addEventListener("DOMContentLoaded", function() {
    populateFilters();
    filterAndSortData();
});
