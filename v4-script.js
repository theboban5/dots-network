// City-based data structure with coordinates
var cityData = [
    { 
        name: "London", 
        lat: 51.5074, 
        lng: -0.1278, 
        connections: 4,
        people: [
            { name: "Joe Smith", title: "Coach", club: "Manchester United", url: "https://linkedin.com" },
            { name: "Michael Brown", title: "Sporting Director", club: "Chelsea", url: "https://linkedin.com" },
            { name: "James Wilson", title: "Goalkeeper Coach", club: "Liverpool", url: "https://linkedin.com" },
            { name: "Emma Thompson", title: "Sports Scientist", club: "Arsenal", url: "https://linkedin.com" },
            { name: "Sarah Johnson", title: "Performance Analyst", club: "Manchester City", url: "https://linkedin.com" }
        ]
    },
    { 
        name: "Madrid", 
        lat: 40.4168, 
        lng: -3.7038, 
        connections: 3,
        spikeHeight: 90,
        spikeColor: "#FF6600",
        people: [
            { name: "Anna Garcia", title: "Scout", club: "Real Madrid", url: "https://linkedin.com" },
            { name: "Maria Rodriguez", title: "Physiotherapist", club: "Barcelona", url: "https://linkedin.com" },
            { name: "Diego Martinez", title: "Head Coach", club: "Atletico Madrid", url: "https://linkedin.com" }
        ]
    },
    { 
        name: "São Paulo", 
        lat: -23.5505, 
        lng: -46.6333, 
        connections: 2,
        spikeHeight: 60,
        spikeColor: "#FFAA00",
        people: [
            { name: "Lucas Silva", title: "Academy Director", club: "Flamengo", url: "https://linkedin.com" },
            { name: "Roberto Santos", title: "Technical Director", club: "São Paulo", url: "https://linkedin.com" }
        ]
    },
    { 
        name: "Cairo", 
        lat: 30.0444, 
        lng: 31.2357, 
        connections: 2,
        spikeHeight: 60,
        spikeColor: "#FFAA00",
        people: [
            { name: "Omar Khaled", title: "Analyst", club: "Al Ahly", url: "https://linkedin.com" },
            { name: "Ahmed Hassan", title: "Scout", club: "Zamalek", url: "https://linkedin.com" }
        ]
    },
    { 
        name: "Los Angeles", 
        lat: 34.0522, 
        lng: -118.2437, 
        connections: 1,
        spikeHeight: 30,
        spikeColor: "#00FF00",
        people: [
            { name: "Sophie Kim", title: "Marketing", club: "LAFC", url: "https://linkedin.com" }
        ]
    },
    { 
        name: "Accra", 
        lat: 5.6037, 
        lng: -0.1870, 
        connections: 1,
        spikeHeight: 30,
        spikeColor: "#00FF00",
        people: [
            { name: "David Osei", title: "Scout", club: "Hearts of Oak", url: "https://linkedin.com" }
        ]
    },
    { 
        name: "Buenos Aires", 
        lat: -34.6118, 
        lng: -58.3960, 
        connections: 1,
        spikeHeight: 30,
        spikeColor: "#00FF00",
        people: [
            { name: "Carlos Mendez", title: "Youth Coach", club: "River Plate", url: "https://linkedin.com" }
        ]
    },
    { 
        name: "Tokyo", 
        lat: 35.6762, 
        lng: 139.6503, 
        connections: 1,
        spikeHeight: 30,
        spikeColor: "#00FF00",
        people: [
            { name: "Yuki Tanaka", title: "Data Analyst", club: "Urawa Red Diamonds", url: "https://linkedin.com" }
        ]
    },
    { 
        name: "Shanghai", 
        lat: 31.2304, 
        lng: 121.4737, 
        connections: 1,
        spikeHeight: 30,
        spikeColor: "#00FF00",
        people: [
            { name: "Lisa Chen", title: "Marketing Manager", club: "Shanghai Port", url: "https://linkedin.com" }
        ]
    },
    { 
        name: "Paris", 
        lat: 48.8566, 
        lng: 2.3522, 
        connections: 1,
        spikeHeight: 30,
        spikeColor: "#00FF00",
        people: [
            { name: "Pierre Dubois", title: "Talent Scout", club: "Paris Saint-Germain", url: "https://linkedin.com" }
        ]
    },
    { 
        name: "Munich", 
        lat: 48.1351, 
        lng: 11.5820, 
        connections: 1,
        spikeHeight: 30,
        spikeColor: "#00FF00",
        people: [
            { name: "Klaus Müller", title: "Academy Coach", club: "Bayern Munich", url: "https://linkedin.com" }
        ]
    },
    { 
        name: "Turin", 
        lat: 45.0703, 
        lng: 7.6869, 
        connections: 1,
        spikeHeight: 30,
        spikeColor: "#00FF00",
        people: [
            { name: "Giuseppe Rossi", title: "Technical Scout", club: "Juventus", url: "https://linkedin.com" }
        ]
    }
];

// Connection arcs data for animated lines
var connectionArcs = [
    {
        startLat: 51.5074, startLng: -0.1278, startName: "London",
        endLat: 40.4168, endLng: -3.7038, endName: "Madrid",
        color: "#FF6600", strength: 3, animated: true
    },
    {
        startLat: 40.4168, startLng: -3.7038, startName: "Madrid",
        endLat: -23.5505, endLng: -46.6333, endName: "São Paulo",
        color: "#FFAA00", strength: 2, animated: true
    },
    {
        startLat: 51.5074, startLng: -0.1278, startName: "London",
        endLat: 30.0444, endLng: 31.2357, endName: "Cairo",
        color: "#00FF00", strength: 1, animated: true
    },
    {
        startLat: 51.5074, startLng: -0.1278, startName: "London",
        endLat: 34.0522, endLng: -118.2437, endName: "Los Angeles",
        color: "#00CCFF", strength: 1, animated: true
    },
    {
        startLat: 40.4168, startLng: -3.7038, startName: "Madrid",
        endLat: 48.8566, endLng: 2.3522, endName: "Paris",
        color: "#00FF00", strength: 1, animated: true
    }
];

// Arc color scheme based on connection strength
function getSpikeColor(connections) {
    if (connections >= 4) {
        return am5.color(0xFF0000); // Bright red for highest density
    } else if (connections === 3) {
        return am5.color(0xFF6600); // Orange-red
    } else if (connections === 2) {
        return am5.color(0xFFAA00); // Yellow-orange
    } else {
        return am5.color(0x00FF00); // Green for low density
    }
}

// Calculate spike height based on connections
function getSpikeHeight(connections) {
    return connections * 0.3; // Each connection adds 0.3 units of height
}

// Flag emoji generation
function getFlagEmoji(cityName) {
    const flagMap = {
        "London": "🇬🇧",
        "Madrid": "🇪🇸", 
        "São Paulo": "🇧🇷",
        "Cairo": "🇪🇬",
        "Los Angeles": "🇺🇸",
        "Accra": "🇬🇭",
        "Buenos Aires": "🇦🇷",
        "Tokyo": "🇯🇵",
        "Shanghai": "🇨🇳",
        "Paris": "🇫🇷",
        "Munich": "🇩🇪",
        "Turin": "🇮🇹"
    };
    return flagMap[cityName] || "🌍";
}

// Modal functionality
function showCityModal(cityName, people) {
    var modal = document.getElementById("interviewModal");
    var modalTitle = document.getElementById("modalTitle");
    var interviewList = document.getElementById("interviewList");

    var flagEmoji = getFlagEmoji(cityName);
    modalTitle.textContent = "Connections in " + cityName + " " + flagEmoji;
    interviewList.innerHTML = "";

    people.forEach(function(person) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = person.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = person.name + " - " + person.title + " - " + person.club;
        li.appendChild(a);
        interviewList.appendChild(li);
    });

    modal.style.display = "flex";
}

// Create city markers legend
function createCityLegend() {
    var legend = document.createElement("div");
    legend.className = "spikes-legend";
    legend.innerHTML = `
        <h3>Global Football Network</h3>
        <div class="spikes-legend-item">
            <div class="spikes-legend-color" style="background: #FF0000; border-radius: 50%;"></div>
            <div class="spikes-legend-text">London (4 connections)</div>
        </div>
        <div class="spikes-legend-item">
            <div class="spikes-legend-color" style="background: #FF6600; border-radius: 50%;"></div>
            <div class="spikes-legend-text">Madrid (3 connections)</div>
        </div>
        <div class="spikes-legend-item">
            <div class="spikes-legend-color" style="background: #FFAA00; border-radius: 50%;"></div>
            <div class="spikes-legend-text">São Paulo (2 connections)</div>
        </div>
        <div class="spikes-legend-item">
            <div class="spikes-legend-color" style="background: #00FF00; border-radius: 50%;"></div>
            <div class="spikes-legend-text">Cairo (2 connections)</div>
        </div>
        <div class="spikes-legend-item">
            <div class="spikes-legend-color" style="background: #00CCFF; border-radius: 50%;"></div>
            <div class="spikes-legend-text">Los Angeles (1 connection)</div>
        </div>
    `;
    document.getElementById("chartdiv").appendChild(legend);
}

// Initialize 3D spikes globe
am5.ready(function() {
    var root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    // Create 3D chart with orthographic projection
    var chart = root.container.children.push(
        am5map.MapChart.new(root, {
            panX: "rotateX",
            panY: "rotateY",
            wheelX: "rotateX",
            wheelY: "rotateY",
            projection: am5map.geoOrthographic(),
            paddingBottom: 20,
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            wheelZoomable: true,
            wheelZoomSpeed: 0.5,
            wheelZoomFactor: 1.1
        })
    );

    // Create polygon series for countries
    var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow,
            exclude: ["AQ"]
        })
    );

    // Style the base globe
    polygonSeries.mapPolygons.template.setAll({
        fill: am5.color(0x1a1a2e),
        stroke: am5.color(0x16213e),
        strokeWidth: 1
    });

    // Create points series for cities
    var pointSeries = chart.series.push(
        am5map.MapPointSeries.new(root, {
            valueField: "connections",
            calculateAggregates: true
        })
    );

    // Style city points
    pointSeries.bullets.push(function() {
        var circle = am5.Circle.new(root, {
            radius: 8,
            fill: am5.color(0x00ff88),
            stroke: am5.color(0xffffff),
            strokeWidth: 3
        });

        return am5.Bullet.new(root, {
            sprite: circle
        });
    });

    // Add click interaction to points
    pointSeries.events.on("click", function(ev) {
        var dataItem = ev.target.dataItem;
        if (dataItem) {
            var city = dataItem.dataContext;
            showCityModal(city.name, city.people);
        }
    });

    // Set city data
    pointSeries.data.setAll(cityData);

    // Add manual city markers for better visibility
    setTimeout(function() {
        // London marker
        var londonMarker = am5.Circle.new(root, {
            radius: 12,
            fill: am5.color("#FF0000"),
            stroke: am5.color(0xffffff),
            strokeWidth: 3
        });
        londonMarker.set("x", 0);
        londonMarker.set("y", 0);
        chart.children.push(londonMarker);

        // Madrid marker
        var madridMarker = am5.Circle.new(root, {
            radius: 10,
            fill: am5.color("#FF6600"),
            stroke: am5.color(0xffffff),
            strokeWidth: 3
        });
        madridMarker.set("x", -20);
        madridMarker.set("y", -20);
        chart.children.push(madridMarker);

        // São Paulo marker
        var saoPauloMarker = am5.Circle.new(root, {
            radius: 8,
            fill: am5.color("#FFAA00"),
            stroke: am5.color(0xffffff),
            strokeWidth: 3
        });
        saoPauloMarker.set("x", 40);
        saoPauloMarker.set("y", -40);
        chart.children.push(saoPauloMarker);

        // Cairo marker
        var cairoMarker = am5.Circle.new(root, {
            radius: 8,
            fill: am5.color("#00FF00"),
            stroke: am5.color(0xffffff),
            strokeWidth: 3
        });
        cairoMarker.set("x", 20);
        cairoMarker.set("y", -10);
        chart.children.push(cairoMarker);

        // Los Angeles marker
        var laMarker = am5.Circle.new(root, {
            radius: 6,
            fill: am5.color("#00CCFF"),
            stroke: am5.color(0xffffff),
            strokeWidth: 3
        });
        laMarker.set("x", -60);
        laMarker.set("y", -20);
        chart.children.push(laMarker);

        // Add click interactions to city markers
        londonMarker.events.on("click", function() {
            showCityModal("London", cityData[0].people);
        });
        madridMarker.events.on("click", function() {
            showCityModal("Madrid", cityData[1].people);
        });
        saoPauloMarker.events.on("click", function() {
            showCityModal("São Paulo", cityData[2].people);
        });
        cairoMarker.events.on("click", function() {
            showCityModal("Cairo", cityData[3].people);
        });
        laMarker.events.on("click", function() {
            showCityModal("Los Angeles", cityData[4].people);
        });
    }, 1000);

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
        chart.set("projection", am5map.geoOrthographic());
        chart.invalidateProjection();
    });
    
    // Position home button
    homeButton.set("x", 20);
    homeButton.set("y", 20);
    
    chart.children.push(homeButton);

    // Create city markers legend
    createCityLegend();

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
