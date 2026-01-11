/**
 * The current season entered by the user.
 * Expected values include "summer", "winter", "spring", "autumn", etc.
 * @type {string}
 */
let season = prompt("Enter the season (summer, winter, etc):").toLowerCase();

/**
 * The type of plant entered by the user.
 * Expected values include "flower", "vegetable", "tree", etc.
 * @type {string}
 */
let plantType = prompt("Enter the plant type (flower, vegetable, etc):").toLowerCase();

/**
 * A lookup table containing plant care advice by season and plant type.
 *
 * @type {Object.<string, Object.<string, string>>}
 * @property {Object} summer - Advice for the summer season.
 * @property {string} summer.flower - Advice for flowers in summer.
 * @property {string} summer.vegetable - Advice for vegetables in summer.
 * @property {Object} winter - Advice for the winter season.
 * @property {string} winter.flower - Advice for flowers in winter.
 * @property {string} winter.vegetable - Advice for vegetables in winter.
 */
const adviceData = {
    summer: {
        flower: "Water your plants regularly and provide some shade. Use fertiliser to encourage blooms.",
        vegetable: "Water regularly and watch out for pests."
    },
    winter: {
        flower: "Protect your flowers from frost using covers.",
        vegetable: "Keep vegetables warm and reduce watering."
    }
};

/**
 * Returns plant care advice based on season and plant type.
 *
 * @param {string} season - The season (e.g., "summer", "winter").
 * @param {string} plantType - The type of plant (e.g., "flower", "vegetable").
 * @returns {string} Advice text if available, otherwise a default message.
 */
function getAdvice(season, plantType) {
    if (adviceData[season] && adviceData[season][plantType]) {
        return adviceData[season][plantType];
    }
    return "No advice available for this combination.";
}

// Generate and display the advice
let advice = getAdvice(season, plantType);
console.log(advice);
