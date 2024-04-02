const storyData = {
    start: {
        text: "You find yourself in a mysterious forest. What do you want to do?",
        choices: [
            { text: "Explore the cave", consequence: "caveEntrance" },
            { text: "Follow the path", consequence: "pathway" }
        ],
        image: "forest.jpg"
    },
    caveEntrance: {
        text: "You discover a dark cave. It seems ominous. What's your next move?",
        choices: [
            { text: "Enter the cave", consequence: "darkCave" },
            { text: "Go back to the forest", consequence: "start" }
        ],
        image: "cave.jpg"
    },
    pathway: {
        text: "The path leads to a beautiful waterfall. What do you want to do?",
        choices: [
            { text: "Swim in the waterfall", consequence: "goodEnding" },
            { text: "Continue down the path", consequence: "badEnding" }
        ],
        image: "waterfall.jpg"
    },
    darkCave: {
        text: "Inside the cave, you find a treasure chest. What do you do?",
        choices: [
            { text: "Open the chest", consequence: "goodEnding" },
            { text: "Leave the cave", consequence: "badEnding" }
        ],
        image: "treasure.jpg"
    },
    goodEnding: {
        text: "Congratulations! You found the hidden treasure. You win!",
        image: "happy.jpg"
    },
    badEnding: {
        text: "Oh no! Something went wrong. Better luck next time.",
        image: "sad.jpg"
    },
    beach: {
        text: "As you continue down the path, you suddenly find yourself at a tranquil beach. The sun is setting, casting a warm glow on the sand. What do you want to do?",
        choices: [
            { text: "Build a sandcastle", consequence: "goodEnding" },
            { text: "Follow a mysterious trail along the shore", consequence: "mysteriousTrail" }
        ],
        image: "beach.jpg"
    },
    mysteriousTrail: {
        text: "The trail leads you to an ancient temple hidden in the cliffs. It looks both intriguing and daunting. What's your next move?",
        choices: [
            { text: "Enter the temple", consequence: "mysticalArtifact" },
            { text: "Return to the beach", consequence: "beach" }
        ],
        image: "temple.jpg"
    },
    mysticalArtifact: {
        text: "Inside the temple, you discover a mystical artifact glowing with an otherworldly light. What do you want to do?",
        choices: [
            { text: "Touch the artifact", consequence: "goodEnding" },
            { text: "Leave the temple with caution", consequence: "badEnding" }
        ],
        image: "artifact.jpg"
    },
    mountainTop: {
        text: "After a long journey, you reach the top of a towering mountain. The air is thin, and the view is breathtaking. What would you like to do?",
        choices: [
            { text: "Meditate and enjoy the view", consequence: "goodEnding" },
            { text: "Search for a hidden cave", consequence: "hiddenCave" }
        ],
        image: "mountain.jpg"
    },
    hiddenCave: {
        text: "While exploring, you stumble upon a hidden cave entrance. It looks mysterious. What's your next move?",
        choices: [
            { text: "Enter the cave cautiously", consequence: "ancientChamber" },
            { text: "Descend back down the mountain", consequence: "mountainTop" }
        ],
        image: "cave_entrance.jpg"
    },
    ancientChamber: {
        text: "Inside the cave, you discover an ancient chamber filled with strange symbols. At the center lies a mystical portal. What do you want to do?",
        choices: [
            { text: "Activate the portal", consequence: "goodEnding" },
            { text: "Leave the cave", consequence: "badEnding" }
        ],
        image: "ancient_chamber.jpg"
    },
};

let currentStage = "start";

function startGame() {
    currentStage = "start";
    updatePage();
}

function updatePage() {
    const stage = storyData[currentStage];
    document.getElementById("story-text").innerText = stage.text;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    stage.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.addEventListener("click", () => makeChoice(choice.consequence));
        choicesContainer.appendChild(button);
    });

    const imageContainer = document.getElementById("image-container");
    document.getElementById("story-image").src = `images/${stage.image}`;
}

function makeChoice(consequence) {
    currentStage = consequence;
    updatePage();

    // You can add additional logic here based on the consequences of choices
}

startGame();
