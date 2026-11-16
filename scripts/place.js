// Footer Copyright Year and Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static Weather Values (Metric)
const temperature = 9; // °C (Note: Set <= 10 to test wind chill, or > 10 like 24 to test "N/A")
const windSpeed = 10;  // km/h

// One-line Wind Chill Calculation (Metric Formula)
const calculateWindChill = (temp, speed) =>
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// Validate conditions before calling calculateWindChill
const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}