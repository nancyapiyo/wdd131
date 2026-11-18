// Footer Copyright Year and Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static Weather Values (Metric: °C and km/h)
const temperature = 24;
const windSpeed = 10;

// One-line Wind Chill Formula (Metric)
const calculateWindChill = (temp, speed) => 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);

// Check conditions before calling calculateWindChill
const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${chill.toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}
