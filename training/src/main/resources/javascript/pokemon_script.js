const moves = [
    {
        "accuracy": 100,
        "category": "physical",
        "id": 1,
        "name": "Attack Order",
        "power": 90,
        "pp": 15,
        "type": "bug"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 2,
        "name": "Bug Bite",
        "power": 60,
        "pp": 20,
        "type": "bug"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "spd"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 3,
        "name": "Bug Buzz",
        "power": 60,
        "pp": 10,
        "type": "bug"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "def", "spd"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 4,
        "name": "Defend Order",
        "pp": 10,
        "type": "bug"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 100,
            "condition": "ko",
            "conditionTarget": "opponent",
            "stats": [
                "att"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 5,
        "name": "Fell Stinger",
        "power": 50,
        "pp": 25,
        "type": "bug"
    },
    {
        "accuracy": 95,
        "effect": {
            "chance": 100,
            "condition": "hit",
            "conditionTarget": "opponent",
            "stats": [
                "att"
            ],
            "target": "move",
            "type": "raise"
        },
        "category": "physical",
        "id": 6,
        "name": "Fury Cutter",
        "power": 40,
        "pp": 20,
        "type": "bug"
    },
    {
        "accuracy": 85,
        "category": "physical",
        "id": 8,
        "name": "Megahorn",
        "power": 120,
        "pp": 10,
        "type": "bug"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 9,
        "name": "Pollen Puff",
        "power": 90,
        "pp": 15,
        "type": "bug"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "spa", "spd", "spe"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 10,
        "name": "Quiver Dance",
        "pp": 20,
        "type": "bug"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 11,
        "name": "Signal Beam",
        "power": 75,
        "pp": 15,
        "type": "bug"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "att", "def", "spa", "spd", "spe"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 12,
        "name": "Silver Wind",
        "power": 60,
        "pp": 5,
        "type": "bug"
    },
    {
        "category": "status",
        "effect": {
            "chance": 95,
            "stats": [
                "spe"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 13,
        "name": "String Shot",
        "pp": 40,
        "type": "bug"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 100,
            "stats": [
                "spa"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 14,
        "name": "Struggle Bug",
        "power": 50,
        "pp": 20,
        "type": "bug"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "spa"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 15,
        "name": "Tail Glow",
        "pp": 20,
        "type": "bug"
    },
    {
        "accuracy": 95,
        "category": "special",
        "id": 16,
        "name": "Baddy Bad",
        "power": 80,
        "pp": 15,
        "type": "dark"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 17,
        "name": "Bite",
        "power": 60,
        "pp": 25,
        "type": "dark"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 18,
        "name": "Brutal Swing",
        "power": 60,
        "pp": 20,
        "type": "dark"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 10,
            "stats": [
                "def"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 19,
        "name": "Crunch",
        "power": 80,
        "pp": 15,
        "type": "dark"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 20,
        "name": "Dark Pulse",
        "power": 80,
        "pp": 15,
        "type": "dark"
    },
    {
        "category": "status",
        "effect": {
            "chance": 50,
            "status": "sleeping",
            "target": "opponent",
            "type": "status"
        },
        "id": 21,
        "name": "Dark Void",
        "pp": 10,
        "type": "dark"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "spd"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 22,
        "name": "Fake Tears",
        "pp": 20,
        "type": "dark"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 23,
        "name": "False Surrender",
        "power": 80,
        "pp": 10,
        "type": "dark"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 24,
        "name": "Feint Attack",
        "power": 60,
        "pp": 20,
        "type": "dark"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 25,
        "name": "Fiery Wrath",
        "power": 90,
        "pp": 10,
        "type": "dark"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "att"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 26,
        "name": "Hone Claws",
        "pp": 15,
        "type": "dark"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "att", "def"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 27,
        "name": "Obstruct",
        "pp": 10,
        "type": "dark"
    },
    {
        "accuracy": 95,
        "category": "special",
        "effect": {
            "chance": 100,
            "condition": "hit",
            "conditionTarget": "opponent",
            "stats": [
                "spa"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 28,
        "name": "Snarl",
        "power": 55,
        "pp": 15,
        "type": "dark"
    },
    {
        "accuracy": 95,
        "category": "special",
        "id": 30,
        "name": "Night Daze",
        "power": 85,
        "pp": 10,
        "type": "dark"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 100,
            "stats": [
                "att"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 31,
        "name": "Breaking Swipe",
        "power": 60,
        "pp": 15,
        "type": "dragon"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 32,
        "name": "Dragon Claw",
        "power": 80,
        "pp": 15,
        "type": "dragon"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 33,
        "name": "Dragon Hammer",
        "power": 90,
        "pp": 15,
        "type": "dragon"
    },
    {
        "accuracy": 75,
        "category": "physical",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 34,
        "name": "Dragon Rush",
        "power": 100,
        "pp": 10,
        "type": "dragon"
    },
    {
        "accuracy": 90,
        "category": "physical",
        "id": 35,
        "name": "Dragon Tail",
        "power": 60,
        "pp": 15,
        "type": "dragon"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 100,
            "stats": [
                "def"
            ],
            "target": "self",
            "type": "lower"
        },
        "id": 36,
        "name": "Clanging Scales",
        "power": 110,
        "pp": 5,
        "type": "dragon"
    },
    {
        "accuracy": 90,
        "category": "special",
        "effect": {
            "chance": 100,
            "stats": [
                "spa"
            ],
            "target": "self",
            "type": "lower"
        },
        "id": 37,
        "name": "Draco Meteor",
        "power": 130,
        "pp": 5,
        "type": "dragon"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 38,
        "name": "Dragon Breath",
        "power": 60,
        "pp": 20,
        "type": "dragon"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 39,
        "name": "Dragon Pulse",
        "power": 85,
        "pp": 10,
        "type": "dragon"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 40,
        "name": "Twister",
        "power": 40,
        "pp": 20,
        "type": "dragon"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "att", "spe"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 41,
        "name": "Dragon Dance",
        "pp": 20,
        "type": "dragon"
    },
    {
        "accuracy": 85,
        "category": "physical",
        "effect": {
            "chance": 10,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 42,
        "name": "Bolt Strike",
        "power": 130,
        "pp": 5,
        "type": "electric"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 43,
        "name": "Fusion Bolt",
        "power": 100,
        "pp": 5,
        "type": "electric"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 100,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 44,
        "name": "Nuzzle",
        "power": 20,
        "pp": 20,
        "type": "electric"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 10,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 45,
        "name": "Spark",
        "power": 65,
        "pp": 20,
        "type": "electric"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 10,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 46,
        "name": "Thunder Punch",
        "power": 75,
        "pp": 15,
        "type": "electric"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 47,
        "name": "Buzzy Buzz",
        "power": 60,
        "pp": 20,
        "type": "electric"
    },
    {
        "accuracy": 90,
        "category": "special",
        "effect": {
            "chance": 30,
            "stats": [
                "spa"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 48,
        "name": "Charge Beam",
        "power": 50,
        "pp": 10,
        "type": "electric"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 49,
        "name": "Discharge",
        "power": 80,
        "pp": 15,
        "type": "electric"
    },
    {
        "accuracy": 95,
        "category": "special",
        "effect": {
            "chance": 100,
            "stats": [
                "spe"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 50,
        "name": "Electroweb",
        "power": 55,
        "pp": 15,
        "type": "electric"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 51,
        "name": "Shock Wave",
        "power": 60,
        "pp": 20,
        "type": "electric"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "spa"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 52,
        "name": "Eerie Impulse",
        "pp": 15,
        "type": "electric"
    },
    {
        "category": "status",
        "effect": {
            "chance": 90,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 53,
        "name": "Thunder Wave",
        "pp": 20,
        "type": "electric"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "def", "spd"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 54,
        "name": "Magnetic Flux",
        "pp": 20,
        "type": "electric"
    },
    {
        "accuracy": 90,
        "category": "physical",
        "effect": {
            "chance": 10,
            "stats": [
                "att"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 55,
        "name": "Play Rough",
        "power": 90,
        "pp": 10,
        "type": "fairy"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 100,
            "stats": [
                "spa"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 56,
        "name": "Spirit Break",
        "power": 75,
        "pp": 15,
        "type": "fairy"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 57,
        "name": "Dazzling Gleam",
        "power": 80,
        "pp": 10,
        "type": "fairy"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 58,
        "name": "Disarming Voice",
        "power": 40,
        "pp": 15,
        "type": "fairy"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 59,
        "name": "Fairy Wind",
        "power": 40,
        "pp": 30,
        "type": "fairy"
    },
    {
        "accuracy": 90,
        "category": "special",
        "effect": {
            "chance": 100,
            "stats": [
                "spa"
            ],
            "target": "self",
            "type": "lower"
        },
        "id": 60,
        "name": "Fleur Cannon",
        "power": 130,
        "pp": 5,
        "type": "fairy"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "spa"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 61,
        "name": "Moonblast",
        "power": 95,
        "pp": 15,
        "type": "fairy"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "att"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 62,
        "name": "Charm",
        "pp": 20,
        "type": "fairy"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "att", "spa"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 63,
        "name": "Decorate",
        "pp": 15,
        "type": "fairy"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "spa", "spd", "spe"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 64,
        "name": "Geomancy",
        "pp": 10,
        "type": "fairy"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "status": "confused",
            "target": "opponent",
            "type": "status"
        },
        "id": 65,
        "name": "Sweet Kiss",
        "pp": 10,
        "type": "fairy"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 66,
        "name": "Body Press",
        "power": 80,
        "pp": 10,
        "type": "fighting"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 67,
        "name": "Brick Break",
        "power": 75,
        "pp": 15,
        "type": "fighting"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 100,
            "stats": [
                "def", "spd"
            ],
            "target": "self",
            "type": "lower"
        },
        "id": 68,
        "name": "Close Combat",
        "power": 120,
        "pp": 5,
        "type": "fighting"
    },
    {
        "accuracy": 50,
        "category": "physical",
        "effect": {
            "chance": 100,
            "condition": "hit",
            "conditionTarget": "opponent",
            "status": "confused",
            "target": "opponent",
            "type": "status"
        },
        "id": 69,
        "name": "Dynamic Punch",
        "power": 100,
        "pp": 5,
        "type": "fighting"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 10,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 70,
        "name": "Force Palm",
        "power": 60,
        "pp": 10,
        "type": "fighting"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 71,
        "name": "Aura Sphere",
        "power": 80,
        "pp": 20,
        "type": "fighting"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 100,
            "stats": [
                "spa"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 71,
        "name": "Body Press",
        "power": 80,
        "pp": 10,
        "type": "fighting"
    },
    {
        "accuracy": 70,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "spd"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 72,
        "name": "Focus Blast",
        "power": 120,
        "pp": 5,
        "type": "fighting"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 73,
        "name": "Secret Sword",
        "power": 85,
        "pp": 10,
        "type": "fighting"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "att", "def"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 74,
        "name": "Bulk Up",
        "pp": 20,
        "type": "fighting"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 75,
        "name": "Aerial Ace",
        "power": 60,
        "pp": 20,
        "type": "flying"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 100,
            "status": "burned",
            "target": "opponent",
            "type": "status"
        },
        "id": 76,
        "name": "Beak Blast",
        "power": 100,
        "pp": 15,
        "type": "flying"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 77,
        "name": "Brave Bird",
        "power": 120,
        "pp": 15,
        "type": "flying"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 100,
            "stats": [
                "def", "spd"
            ],
            "target": "self",
            "type": "lower"
        },
        "id": 78,
        "name": "Body Press",
        "power": 120,
        "pp": 5,
        "type": "flying"
    },
    {
        "accuracy": 95,
        "category": "physical",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 79,
        "name": "Floaty Fall",
        "power": 90,
        "pp": 15,
        "type": "flying"
    },
    {
        "accuracy": 95,
        "category": "special",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 80,
        "name": "Air Slash",
        "power": 75,
        "pp": 15,
        "type": "flying"
    },
    {
        "accuracy": 80,
        "category": "special",
        "id": 81,
        "name": "Bleakwind Storm",
        "power": 95,
        "pp": 5,
        "type": "flying"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 100,
            "status": "confused",
            "target": "opponent",
            "type": "status"
        },
        "id": 82,
        "name": "Chatter",
        "power": 65,
        "pp": 20,
        "type": "flying"
    },
    {
        "accuracy": 70,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "confused",
            "target": "opponent",
            "type": "status"
        },
        "id": 83,
        "name": "Hurricane",
        "power": 110,
        "pp": 10,
        "type": "flying"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 84,
        "name": "Gust",
        "power": 40,
        "pp": 35,
        "type": "flying"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "att"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 85,
        "name": "Feather Dance",
        "pp": 15,
        "type": "flying"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 86,
        "name": "Astonish",
        "power": 30,
        "pp": 15,
        "type": "ghost"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 10,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 87,
        "name": "Lick",
        "power": 30,
        "pp": 30,
        "type": "ghost"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 10,
            "stats": [
                "def"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 88,
        "name": "Shadow Bone",
        "power": 85,
        "pp": 10,
        "type": "ghost"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 89,
        "name": "Spirit Shackle",
        "power": 80,
        "pp": 10,
        "type": "ghost"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 90,
        "name": "Shadow Punch",
        "power": 60,
        "pp": 20,
        "type": "ghost"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 91,
        "name": "Astral Barrage",
        "power": 120,
        "pp": 5,
        "type": "ghost"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 92,
        "name": "Moongeist Beam",
        "power": 100,
        "pp": 5,
        "type": "ghost"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "att", "def", "spa", "spd", "spe"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 93,
        "name": "Ominous Wind",
        "power": 60,
        "pp": 5,
        "type": "ghost"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 94,
        "name": "Night Shade",
        "power": 50,
        "pp": 15,
        "type": "ghost"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "spd"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 95,
        "name": "Shadow Ball",
        "power": 80,
        "pp": 15,
        "type": "ghost"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "status": "confused",
            "target": "opponent",
            "type": "status"
        },
        "id": 96,
        "name": "Confuse Ray",
        "pp": 10,
        "type": "ghost"
    },
    {
        "accuracy": 90,
        "category": "physical",
        "effect": {
            "chance": 10,
            "status": "burned",
            "target": "opponent",
            "type": "status"
        },
        "id": 97,
        "name": "Blaze Kick",
        "power": 85,
        "pp": 10,
        "type": "fire"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 100,
            "stats": [
                "spd"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 98,
        "name": "Fire Lash",
        "power": 80,
        "pp": 15,
        "type": "fire"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 10,
            "status": "burned",
            "target": "opponent",
            "type": "status"
        },
        "id": 99,
        "name": "Fire Punch",
        "power": 75,
        "pp": 15,
        "type": "fire"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 100,
            "stats": [
                "spe"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 100,
        "name": "Flame Charge",
        "power": 50,
        "pp": 20,
        "type": "fire"
    },
    {
        "accuracy": 90,
        "category": "physical",
        "effect": {
            "chance": 10,
            "status": "burned",
            "target": "opponent",
            "type": "status"
        },
        "id": 101,
        "name": "Pyro Ball",
        "power": 120,
        "pp": 5,
        "type": "fire"
    },
    {
        "accuracy": 85,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "burned",
            "target": "opponent",
            "type": "status"
        },
        "id": 102,
        "name": "Blue Flare",
        "power": 130,
        "pp": 5,
        "type": "fire"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "burned",
            "target": "opponent",
            "type": "status"
        },
        "id": 103,
        "name": "Ember",
        "power": 40,
        "pp": 25,
        "type": "fire"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "spa"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 104,
        "name": "Fiery Dance",
        "power": 80,
        "pp": 10,
        "type": "fire"
    },
    {
        "accuracy": 85,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "burned",
            "target": "opponent",
            "type": "status"
        },
        "id": 105,
        "name": "Fire Blast",
        "power": 110,
        "pp": 5,
        "type": "fire"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "burned",
            "target": "opponent",
            "type": "status"
        },
        "id": 106,
        "name": "Flamethrower",
        "power": 90,
        "pp": 15,
        "type": "fire"
    },
    {
        "category": "status",
        "effect": {
            "chance": 85,
            "status": "burned",
            "target": "opponent",
            "type": "status"
        },
        "id": 107,
        "name": "Will-O-Wisp",
        "pp": 15,
        "type": "fire"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 100,
            "stats": [
                "spe"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 108,
        "name": "Drum Beating",
        "power": 80,
        "pp": 10,
        "type": "grass"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 100,
            "stats": [
                "def"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 109,
        "name": "Grav Apple",
        "power": 80,
        "pp": 10,
        "type": "grass"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 110,
        "name": "Needle Arm",
        "power": 60,
        "pp": 15,
        "type": "grass"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 111,
        "name": "Petal Blizzard",
        "power": 90,
        "pp": 15,
        "type": "grass"
    },
    {
        "accuracy": 85,
        "category": "physical",
        "id": 112,
        "name": "Power Whip",
        "power": 120,
        "pp": 10,
        "type": "grass"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 100,
            "stats": [
                "spd"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 113,
        "name": "Apple Acid",
        "power": 80,
        "pp": 10,
        "type": "grass"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "spd"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 114,
        "name": "Energy Ball",
        "power": 90,
        "pp": 10,
        "type": "grass"
    },
    {
        "accuracy": 90,
        "category": "special",
        "effect": {
            "chance": 100,
            "stats": [
                "spa"
            ],
            "target": "self",
            "type": "lower"
        },
        "id": 115,
        "name": "Leaf Storm",
        "power": 130,
        "pp": 5,
        "type": "grass"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 116,
        "name": "Magical Leaf",
        "power": 60,
        "pp": 20,
        "type": "grass"
    },
    {
        "accuracy": 85,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "spd"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 117,
        "name": "Seed Flare",
        "power": 120,
        "pp": 5,
        "type": "grass"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "def"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 118,
        "name": "Cotton Guard",
        "pp": 10,
        "type": "grass"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "spe"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 119,
        "name": "Cotton Spore",
        "pp": 40,
        "type": "grass"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "status": "sleeping",
            "target": "opponent",
            "type": "status"
        },
        "id": 120,
        "name": "Grass Whistle",
        "pp": 15,
        "type": "grass"
    },
    {
        "category": "status",
        "effect": {
            "chance": 75,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 121,
        "name": "Stun Spore",
        "pp": 30,
        "type": "grass"
    },
    {
        "accuracy": 85,
        "category": "physical",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 122,
        "name": "Bone Club",
        "power": 65,
        "pp": 20,
        "type": "ground"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 100,
            "stats": [
                "spe"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 123,
        "name": "Bulldoze",
        "power": 60,
        "pp": 20,
        "type": "ground"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 124,
        "name": "Earthquake",
        "power": 100,
        "pp": 10,
        "type": "ground"
    },
    {
        "accuracy": 85,
        "category": "physical",
        "id": 125,
        "name": "Precipice Blades",
        "power": 120,
        "pp": 10,
        "type": "ground"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 126,
        "name": "Land's Wrath",
        "power": 90,
        "pp": 10,
        "type": "ground"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "spd"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 127,
        "name": "Earth Power",
        "power": 90,
        "pp": 10,
        "type": "ground"
    },
    {
        "accuracy": 95,
        "category": "special",
        "effect": {
            "chance": 100,
            "stats": [
                "spe"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 128,
        "name": "Mud Shot",
        "power": 55,
        "pp": 15,
        "type": "ground"
    },
    {
        "accuracy": 80,
        "category": "special",
        "effect": {
            "chance": 100,
            "status": "burned",
            "target": "opponent",
            "type": "status"
        },
        "id": 129,
        "name": "Sandsear Storm",
        "power": 95,
        "pp": 5,
        "type": "ground"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "burned",
            "target": "opponent",
            "type": "status"
        },
        "id": 130,
        "name": "Scoarching Sands",
        "power": 70,
        "pp": 10,
        "type": "ground"
    },
    {
        "accuracy": 90,
        "category": "physical",
        "effect": {
            "chance": 10,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 131,
        "name": "Freeze Shock",
        "power": 140,
        "pp": 5,
        "type": "ice"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 132,
        "name": "Glacial Lance",
        "power": 130,
        "pp": 5,
        "type": "ice"
    },
    {
        "accuracy": 90,
        "category": "physical",
        "effect": {
            "chance": 100,
            "stats": [
                "spe"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 133,
        "name": "Ice Hammer",
        "power": 100,
        "pp": 10,
        "type": "ice"
    },
    {
        "accuracy": 90,
        "category": "physical",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 134,
        "name": "Icicle Crash",
        "power": 85,
        "pp": 10,
        "type": "ice"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "att"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 135,
        "name": "Aurora Beam",
        "power": 65,
        "pp": 20,
        "type": "ice"
    },
    {
        "accuracy": 95,
        "category": "special",
        "effect": {
            "chance": 100,
            "stats": [
                "spe"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 136,
        "name": "Glaciate",
        "power": 65,
        "pp": 10,
        "type": "ice"
    },
    {
        "accuracy": 90,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "burned",
            "target": "opponent",
            "type": "status"
        },
        "id": 137,
        "name": "Ice Burn",
        "power": 140,
        "pp": 5,
        "type": "ice"
    },
    {
        "accuracy": 95,
        "category": "special",
        "effect": {
            "chance": 100,
            "stats": [
                "spe"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 138,
        "name": "Icy Wind",
        "power": 55,
        "pp": 15,
        "type": "ice"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 10,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 139,
        "name": "Body Slam",
        "power": 85,
        "pp": 15,
        "type": "normal"
    },
    {
        "accuracy": 95,
        "category": "physical",
        "effect": {
            "chance": 10,
            "stats": [
                "def"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 140,
        "name": "Crush Claw",
        "power": 75,
        "pp": 10,
        "type": "normal"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 10,
            "status": "confused",
            "target": "opponent",
            "type": "status"
        },
        "id": 141,
        "name": "Dizzy Punch",
        "power": 70,
        "pp": 10,
        "type": "normal"
    },
    {
        "accuracy": 75,
        "category": "physical",
        "id": 142,
        "name": "Egg Bomb",
        "power": 100,
        "pp": 10,
        "type": "normal"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 143,
        "name": "Headbutt",
        "power": 70,
        "pp": 15,
        "type": "normal"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 144,
        "name": "Boomburst",
        "power": 140,
        "pp": 10,
        "type": "normal"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 145,
        "name": "Hyper Voice",
        "power": 90,
        "pp": 10,
        "type": "normal"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 146,
        "name": "Judgment",
        "power": 100,
        "pp": 10,
        "type": "normal"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "sleep",
            "target": "opponent",
            "type": "status"
        },
        "id": 147,
        "name": "Relic Song",
        "power": 75,
        "pp": 10,
        "type": "normal"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 148,
        "name": "Swift",
        "power": 60,
        "pp": 20,
        "type": "normal"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "spa"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 149,
        "name": "Confide",
        "pp": 20,
        "type": "normal"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "def"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 150,
        "name": "Defense Curl",
        "pp": 40,
        "type": "normal"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "status": "paralyzed",
            "target": "opponent",
            "type": "status"
        },
        "id": 151,
        "name": "Glare",
        "pp": 30,
        "type": "normal"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "att", "spa"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 152,
        "name": "Growth",
        "pp": 20,
        "type": "normal"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "def"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 153,
        "name": "Leer",
        "pp": 30,
        "type": "normal"
    },
    {
        "accuracy": 80,
        "category": "physical",
        "effect": {
            "chance": 10,
            "status": "poisoned",
            "target": "opponent",
            "type": "status"
        },
        "id": 154,
        "name": "Gunk Shot",
        "power": 120,
        "pp": 5,
        "type": "poison"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 10,
            "status": "poisoned",
            "target": "opponent",
            "type": "status"
        },
        "id": 155,
        "name": "Poison Jab",
        "power": 80,
        "pp": 20,
        "type": "poison"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 50,
            "status": "poisoned",
            "target": "opponent",
            "type": "status"
        },
        "id": 156,
        "name": "Poison Jab",
        "power": 15,
        "pp": 35,
        "type": "poison"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "spd"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 157,
        "name": "Poison Jab",
        "power": 40,
        "pp": 30,
        "type": "poison"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "poisoned",
            "target": "opponent",
            "type": "status"
        },
        "id": 158,
        "name": "Sludge",
        "power": 65,
        "pp": 20,
        "type": "poison"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "poisoned",
            "target": "opponent",
            "type": "status"
        },
        "id": 159,
        "name": "Sludge Bomb",
        "power": 90,
        "pp": 10,
        "type": "poison"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "poisoned",
            "target": "opponent",
            "type": "status"
        },
        "id": 160,
        "name": "Sludge Wave",
        "power": 95,
        "pp": 10,
        "type": "poison"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "def"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 161,
        "name": "Acid Armor",
        "pp": 20,
        "type": "poison"
    },
    {
        "category": "status",
        "effect": {
            "chance": 90,
            "status": "poisoned",
            "target": "opponent",
            "type": "status"
        },
        "id": 162,
        "name": "Poison Gas",
        "pp": 40,
        "type": "poison"
    },
    {
        "category": "status",
        "effect": {
            "chance": 75,
            "status": "poisoned",
            "target": "opponent",
            "type": "status"
        },
        "id": 163,
        "name": "Poison Powder",
        "pp": 35,
        "type": "poison"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 164,
        "name": "Heart Stamp",
        "power": 60,
        "pp": 25,
        "type": "psychic"
    },
    {
        "accuracy": 90,
        "category": "physical",
        "effect": {
            "chance": 10,
            "stats": [
                "def", "spd"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 165,
        "name": "Psyshield Bash",
        "power": 70,
        "pp": 10,
        "type": "psychic"
    },
    {
        "accuracy": 90,
        "category": "physical",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 166,
        "name": "Zen Headbutt",
        "power": 80,
        "pp": 15,
        "type": "psychic"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 167,
        "name": "Psychic Fangs",
        "power": 85,
        "pp": 10,
        "type": "psychic"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "confused",
            "target": "opponent",
            "type": "status"
        },
        "id": 168,
        "name": "Confusion",
        "power": 50,
        "pp": 25,
        "type": "psychic"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 169,
        "name": "Expanding Force",
        "power": 80,
        "pp": 20,
        "type": "psychic"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 170,
        "name": "Confusion",
        "power": 80,
        "pp": 20,
        "type": "psychic"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "spd"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 171,
        "name": "Psychic",
        "power": 90,
        "pp": 10,
        "type": "psychic"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "confused",
            "target": "opponent",
            "type": "status"
        },
        "id": 172,
        "name": "Psybeam",
        "power": 65,
        "pp": 20,
        "type": "psychic"
    },
    {
        "category": "status",
        "effect": {
            "chance": 60,
            "status": "sleep",
            "target": "opponent",
            "type": "status"
        },
        "id": 173,
        "name": "Hypnosis",
        "pp": 20,
        "type": "psychic"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "spa", "spd"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 174,
        "name": "Calm mind",
        "pp": 20,
        "type": "psychic"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "def", "spd"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 175,
        "name": "Cosmic Power",
        "pp": 20,
        "type": "psychic"
    },
    {
        "accuracy": 95,
        "category": "physical",
        "effect": {
            "chance": 10,
            "stats": [
                "def"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 176,
        "name": "Diamond Storm",
        "power": 70,
        "pp": 5,
        "type": "rock"
    },
    {
        "accuracy": 90,
        "category": "physical",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 177,
        "name": "Rock Slide",
        "power": 75,
        "pp": 10,
        "type": "rock"
    },
    {
        "accuracy": 95,
        "category": "physical",
        "effect": {
            "chance": 100,
            "stats": [
                "spe"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 178,
        "name": "Rock Tomb",
        "power": 60,
        "pp": 15,
        "type": "rock"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "att", "def", "spa", "spd", "spe"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 179,
        "name": "Ancient Power",
        "power": 60,
        "pp": 5,
        "type": "rock"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 180,
        "name": "Power Gem",
        "power": 80,
        "pp": 20,
        "type": "rock"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 181,
        "name": "Iron Head",
        "power": 80,
        "pp": 15,
        "type": "steel"
    },
    {
        "accuracy": 75,
        "category": "physical",
        "effect": {
            "chance": 10,
            "stats": [
                "def"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 182,
        "name": "Iron Tail",
        "power": 100,
        "pp": 15,
        "type": "steel"
    },
    {
        "accuracy": 90,
        "category": "physical",
        "effect": {
            "chance": 10,
            "stats": [
                "att"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 183,
        "name": "Meteor Mash",
        "power": 90,
        "pp": 10,
        "type": "steel"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "id": 184,
        "name": "Steel Roller",
        "power": 130,
        "pp": 5,
        "type": "steel"
    },
    {
        "accuracy": 90,
        "category": "physical",
        "effect": {
            "chance": 10,
            "stats": [
                "def"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 185,
        "name": "Steel Wing",
        "power": 70,
        "pp": 25,
        "type": "steel"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "spd"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 186,
        "name": "Flash Cannon",
        "power": 80,
        "pp": 10,
        "type": "steel"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "att", "spe"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 187,
        "name": "Shift Gear",
        "pp": 10,
        "type": "steel"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "def"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 188,
        "name": "Iron Defense",
        "pp": 15,
        "type": "steel"
    },
    {
        "category": "status",
        "effect": {
            "chance": 85,
            "stats": [
                "spd"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 187,
        "name": "Metal Sound",
        "pp": 40,
        "type": "steel"
    },
    {
        "accuracy": 90,
        "category": "physical",
        "id": 188,
        "name": "Aqua Tail",
        "power": 90,
        "pp": 10,
        "type": "water"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 10,
            "stats": [
                "att"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 188,
        "name": "Aqua Tail",
        "power": 90,
        "pp": 10,
        "type": "water"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 10,
            "stats": [
                "def"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 189,
        "name": "Liquidation",
        "power": 85,
        "pp": 10,
        "type": "water"
    },
    {
        "accuracy": 100,
        "category": "physical",
        "effect": {
            "chance": 30,
            "status": "flinch",
            "target": "opponent",
            "type": "status"
        },
        "id": 190,
        "name": "Waterfall",
        "power": 80,
        "pp": 15,
        "type": "water"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "stats": [
                "spe"
            ],
            "target": "opponent",
            "type": "lower"
        },
        "id": 191,
        "name": "Bubble Beam",
        "power": 65,
        "pp": 20,
        "type": "water"
    },
    {
        "accuracy": 80,
        "category": "special",
        "id": 192,
        "name": "Hydro Pump",
        "power": 110,
        "pp": 5,
        "type": "water"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "burned",
            "target": "opponent",
            "type": "status"
        },
        "id": 193,
        "name": "Scald",
        "power": 80,
        "pp": 15,
        "type": "water"
    },
    {
        "accuracy": 100,
        "category": "special",
        "id": 194,
        "name": "Surf",
        "power": 90,
        "pp": 15,
        "type": "water"
    },
    {
        "accuracy": 100,
        "category": "special",
        "effect": {
            "chance": 10,
            "status": "confused",
            "target": "opponent",
            "type": "status"
        },
        "id": 195,
        "name": "Water Pulse",
        "power": 60,
        "pp": 20,
        "type": "water"
    },
    {
        "category": "status",
        "effect": {
            "chance": 100,
            "stats": [
                "def"
            ],
            "target": "self",
            "type": "raise"
        },
        "id": 196,
        "name": "Withdraw",
        "pp": 40,
        "type": "water"
    }
];

const pokemonData = [
    {
        "att": 194,
        "def": 167,
        "hp": 172,
        "id": 1,
        "name": "Pinsir",
        "spa": 117,
        "spd": 134,
        "spe": 150,
        "type": "bug"
    },
    {
        "att": 137,
        "def": 139,
        "hp": 172,
        "id": 2,
        "name": "Volbeat",
        "spa": 108,
        "spd": 150,
        "spe": 150,
        "type": "bug"
    },
    {
        "att": 137,
        "def": 139,
        "hp": 172,
        "id": 3,
        "name": "Illumise",
        "spa": 137,
        "spd": 150,
        "spe": 150,
        "type": "bug"
    },
    {
        "att": 150,
        "def": 113,
        "hp": 184,
        "id": 4,
        "name": "Kricketune",
        "spa": 117,
        "spd": 113,
        "spe": 128,
        "type": "bug"
    },
    {
        "att": 128,
        "def": 178,
        "hp": 202,
        "id": 5,
        "name": "Umbreon",
        "spa": 123,
        "spd": 200,
        "spe": 128,
        "type": "dark"
    },
    {
        "att": 156,
        "def": 134,
        "hp": 177,
        "id": 6,
        "name": "Mightyena",
        "spa": 123,
        "spd": 123,
        "spe": 134,
        "type": "dark"
    },
    {
        "att": 200,
        "def": 123,
        "hp": 172,
        "id": 7,
        "name": "Absol",
        "spa": 139,
        "spd": 123,
        "spe": 139,
        "type": "dark"
    },
    {
        "att": 156,
        "def": 156,
        "hp": 177,
        "id": 8,
        "name": "Darkrai",
        "spa": 205,
        "spd": 156,
        "spe": 194,
        "type": "dark"
    },
    {
        "att": 154,
        "def": 112,
        "hp": 171,
        "id": 9,
        "name": "Liepard",
        "spa": 117,
        "spd": 112,
        "spe": 173,
        "type": "dark"
    },
    {
        "att": 121,
        "def": 121,
        "hp": 177,
        "id": 10,
        "name": "Thievul",
        "spa": 152,
        "spd": 158,
        "spe": 156,
        "type": "dark"
    },
    {
        "att": 167,
        "def": 112,
        "hp": 307,
        "id": 11,
        "name": "Regidrago",
        "spa": 167,
        "spd": 112,
        "spe": 145,
        "type": "dragon"
    },
    {
        "att": 218,
        "def": 156,
        "hp": 183,
        "id": 12,
        "name": "Haxorus",
        "spa": 123,
        "spd": 134,
        "spe": 163,
        "type": "dragon"
    },
    {
        "att": 184,
        "def": 189,
        "hp": 184,
        "id": 13,
        "name": "Druddigon",
        "spa": 123,
        "spd": 156,
        "spe": 110,
        "type": "dragon"
    },
    {
        "att": 167,
        "def": 134,
        "hp": 197,
        "id": 14,
        "name": "Goodra",
        "spa": 178,
        "spd": 222,
        "spe": 145,
        "type": "dragon"
    },
    {
        "att": 156,
        "def": 117,
        "hp": 167,
        "id": 15,
        "name": "Raichu",
        "spa": 156,
        "spd": 145,
        "spe": 178,
        "type": "electric"
    },
    {
        "att": 192,
        "def": 130,
        "hp": 182,
        "id": 16,
        "name": "Electivire",
        "spa": 161,
        "spd": 150,
        "spe": 161,
        "type": "electric"
    },
    {
        "att": 128,
        "def": 123,
        "hp": 172,
        "id": 17,
        "name": "Jolteon",
        "spa": 178,
        "spd": 161,
        "spe": 200,
        "type": "electric"
    },
    {
        "att": 139,
        "def": 150,
        "hp": 197,
        "id": 18,
        "name": "Ampharos",
        "spa": 183,
        "spd": 156,
        "spe": 117,
        "type": "electric"
    },
    {
        "att": 150,
        "def": 139,
        "hp": 197,
        "id": 19,
        "name": "Raikou",
        "spa": 183,
        "spd": 167,
        "spe": 183,
        "type": "electric"
    },
    {
        "att": 139,
        "def": 123,
        "hp": 177,
        "id": 20,
        "name": "Manectric",
        "spa": 172,
        "spd": 123,
        "spe": 172,
        "type": "electric"
    },
    {
        "att": 167,
        "def": 112,
        "hp": 187,
        "id": 21,
        "name": "Regieleki",
        "spa": 167,
        "spd": 112,
        "spe": 277,
        "type": "electric"
    },
    {
        "att": 134,
        "def": 137,
        "hp": 202,
        "id": 22,
        "name": "Clefable",
        "spa": 161,
        "spd": 156,
        "spe": 123,
        "type": "fairy"
    },
    {
        "att": 128,
        "def": 128,
        "hp": 202,
        "id": 23,
        "name": "Sylveon",
        "spa": 178,
        "spd": 200,
        "spe": 123,
        "type": "fairy"
    },
    {
        "att": 189,
        "def": 139,
        "hp": 197,
        "id": 24,
        "name": "Granbull",
        "spa": 123,
        "spd": 123,
        "spe": 106,
        "type": "fairy"
    },
    {
        "att": 172,
        "def": 123,
        "hp": 172,
        "id": 25,
        "name": "Primeape",
        "spa": 123,
        "spd": 134,
        "spe": 161,
        "type": "fighting"
    },
    {
        "att": 200,
        "def": 145,
        "hp": 197,
        "id": 26,
        "name": "Machamp",
        "spa": 128,
        "spd": 150,
        "spe": 117,
        "type": "fighting"
    },
    {
        "att": 189,
        "def": 115,
        "hp": 157,
        "id": 27,
        "name": "Hitmonlee",
        "spa": 95,
        "spd": 178,
        "spe": 152,
        "type": "fighting"
    },
    {
        "att": 172,
        "def": 144,
        "hp": 157,
        "id": 28,
        "name": "Hitmonchan",
        "spa": 95,
        "spd": 178,
        "spe": 140,
        "type": "fighting"
    },
    {
        "att": 161,
        "def": 161,
        "hp": 157,
        "id": 29,
        "name": "Hitmontop",
        "spa": 95,
        "spd": 178,
        "spe": 134,
        "type": "fighting"
    },
    {
        "att": 189,
        "def": 123,
        "hp": 251,
        "id": 30,
        "name": "Hariyama",
        "spa": 101,
        "spd": 123,
        "spe": 112,
        "type": "fighting"
    },
    {
        "att": 184,
        "def": 139,
        "hp": 187,
        "id": 31,
        "name": "Cinderace",
        "spa": 128,
        "spd": 139,
        "spe": 188,
        "type": "fire"
    },
    {
        "att": 140,
        "def": 139,
        "hp": 180,
        "id": 32,
        "name": "Ninetails",
        "spa": 146,
        "spd": 167,
        "spe": 167,
        "type": "fire"
    },
    {
        "att": 178,
        "def": 145,
        "hp": 197,
        "id": 33,
        "name": "Arcanine",
        "spa": 167,
        "spd": 145,
        "spe": 161,
        "type": "fire"
    },
    {
        "att": 167,
        "def": 134,
        "hp": 172,
        "id": 34,
        "name": "Rapidash",
        "spa": 145,
        "spd": 145,
        "spe": 172,
        "type": "fire"
    },
    {
        "att": 161,
        "def": 130,
        "hp": 182,
        "id": 35,
        "name": "Magmortar",
        "spa": 194,
        "spd": 161,
        "spe": 148,
        "type": "fire"
    },
    {
        "att": 200,
        "def": 123,
        "hp": 172,
        "id": 36,
        "name": "Flareon",
        "spa": 161,
        "spd": 178,
        "spe": 128,
        "type": "fire"
    },
    {
        "att": 149,
        "def": 143,
        "hp": 185,
        "id": 37,
        "name": "Typhlosion",
        "spa": 177,
        "spd": 150,
        "spe": 167,
        "type": "fire"
    },
    {
        "att": 183,
        "def": 150,
        "hp": 222,
        "id": 38,
        "name": "Entei",
        "spa": 156,
        "spd": 139,
        "spe": 167,
        "type": "fire"
    },
    {
        "att": 150,
        "def": 211,
        "hp": 177,
        "id": 39,
        "name": "Torkoal",
        "spa": 150,
        "spd": 134,
        "spe": 79,
        "type": "fire"
    },
    {
        "att": 130,
        "def": 117,
        "hp": 175,
        "id": 40,
        "name": "Corvisquire",
        "spa": 104,
        "spd": 117,
        "spe": 141,
        "type": "flying"
    },
    {
        "att": 123,
        "def": 123,
        "hp": 167,
        "id": 41,
        "name": "Mismagius",
        "spa": 172,
        "spd": 172,
        "spe": 172,
        "type": "ghost"
    },
    {
        "att": 183,
        "def": 128,
        "hp": 171,
        "id": 42,
        "name": "Banette",
        "spa": 148,
        "spd": 126,
        "spe": 128,
        "type": "ghost"
    },
    {
        "att": 134,
        "def": 200,
        "hp": 147,
        "id": 43,
        "name": "Dusclops",
        "spa": 123,
        "spd": 200,
        "spe": 84,
        "type": "ghost"
    },
    {
        "att": 194,
        "def": 156,
        "hp": 207,
        "id": 44,
        "name": "Rillaboom",
        "spa": 123,
        "spd": 134,
        "spe": 150,
        "type": "grass"
    },
    {
        "att": 189,
        "def": 165,
        "hp": 179,
        "id": 45,
        "name": "Tsareena",
        "spa": 112,
        "spd": 165,
        "spe": 136,
        "type": "grass"
    },
    {
        "att": 147,
        "def": 167,
        "hp": 187,
        "id": 46,
        "name": "Meganium",
        "spa": 148,
        "spd": 167,
        "spe": 145,
        "type": "grass"
    },
    {
        "att": 178,
        "def": 200,
        "hp": 172,
        "id": 47,
        "name": "Leafeon",
        "spa": 123,
        "spd": 123,
        "spe": 161,
        "type": "grass"
    },
    {
        "att": 145,
        "def": 161,
        "hp": 182,
        "id": 48,
        "name": "Bellossom",
        "spa": 156,
        "spd": 167,
        "spe": 112,
        "type": "grass"
    },
    {
        "att": 139,
        "def": 117,
        "hp": 182,
        "id": 49,
        "name": "Sunflora",
        "spa": 172,
        "spd": 150,
        "spe": 90,
        "type": "grass"
    },
    {
        "att": 150,
        "def": 128,
        "hp": 177,
        "id": 50,
        "name": "Sceptile",
        "spa": 172,
        "spd": 150,
        "spe": 189,
        "type": "grass"
    },
    {
        "att": 123,
        "def": 134,
        "hp": 177,
        "id": 51,
        "name": "Cherrim",
        "spa": 152,
        "spd": 143,
        "spe": 150,
        "type": "grass"
    },
    {
        "att": 167,
        "def": 178,
        "hp": 182,
        "id": 52,
        "name": "Sandslash",
        "spa": 106,
        "spd": 117,
        "spe": 128,
        "type": "ground"
    },
    {
        "att": 167,
        "def": 112,
        "hp": 142,
        "id": 53,
        "name": "Dugtrio",
        "spa": 112,
        "spd": 134,
        "spe": 189,
        "type": "ground"
    },
    {
        "att": 145,
        "def": 178,
        "hp": 167,
        "id": 54,
        "name": "Marowak",
        "spa": 112,
        "spd": 145,
        "spe": 106,
        "type": "ground"
    },
    {
        "att": 189,
        "def": 189,
        "hp": 197,
        "id": 55,
        "name": "Donphan",
        "spa": 123,
        "spd": 123,
        "spe": 112,
        "type": "ground"
    },
    {
        "att": 222,
        "def": 211,
        "hp": 207,
        "id": 56,
        "name": "Groudon",
        "spa": 167,
        "spd": 156,
        "spe": 156,
        "type": "ground"
    },
    {
        "att": 123,
        "def": 178,
        "hp": 172,
        "id": 57,
        "name": "Glaceon",
        "spa": 200,
        "spd": 161,
        "spe": 128,
        "type": "ice"
    },
    {
        "att": 145,
        "def": 145,
        "hp": 187,
        "id": 58,
        "name": "Glalie",
        "spa": 145,
        "spd": 145,
        "spe": 145,
        "type": "ice"
    },
    {
        "att": 112,
        "def": 167,
        "hp": 187,
        "id": 59,
        "name": "Regice",
        "spa": 167,
        "spd": 277,
        "spe": 112,
        "type": "ice"
    },
    {
        "att": 161,
        "def": 150,
        "hp": 178,
        "id": 60,
        "name": "Vanilluxe",
        "spa": 178,
        "spd": 161,
        "spe": 144,
        "type": "ice"
    },
    {
        "att": 200,
        "def": 145,
        "hp": 202,
        "id": 61,
        "name": "Beartic",
        "spa": 134,
        "spd": 145,
        "spe": 112,
        "type": "ice"
    },
    {
        "att": 134,
        "def": 123,
        "hp": 172,
        "id": 62,
        "name": "Persian",
        "spa": 128,
        "spd": 128,
        "spe": 183,
        "type": "normal"
    },
    {
        "att": 117,
        "def": 139,
        "hp": 197,
        "id": 63,
        "name": "Lickitung",
        "spa": 123,
        "spd": 139,
        "spe": 90,
        "type": "normal"
    },
    {
        "att": 68,
        "def": 68,
        "hp": 362,
        "id": 64,
        "name": "Blissey",
        "spa": 139,
        "spd": 205,
        "spe": 117,
        "type": "normal"
    },
    {
        "att": 161,
        "def": 145,
        "hp": 212,
        "id": 65,
        "name": "Kangaskhan",
        "spa": 101,
        "spd": 145,
        "spe": 156,
        "type": "normal"
    },
    {
        "att": 167,
        "def": 161,
        "hp": 182,
        "id": 66,
        "name": "Tauros",
        "spa": 101,
        "spd": 134,
        "spe": 178,
        "type": "normal"
    },
    {
        "att": 123,
        "def": 123,
        "hp": 172,
        "id": 67,
        "name": "Porygon",
        "spa": 150,
        "spd": 139,
        "spe": 101,
        "type": "normal"
    },
    {
        "att": 178,
        "def": 128,
        "hp": 267,
        "id": 68,
        "name": "Snorlax",
        "spa": 128,
        "spd": 178,
        "spe": 90,
        "type": "normal"
    },
    {
        "att": 140,
        "def": 127,
        "hp": 192,
        "id": 69,
        "name": "Furret",
        "spa": 106,
        "spd": 117,
        "spe": 156,
        "type": "normal"
    },
    {
        "att": 167,
        "def": 129,
        "hp": 182,
        "id": 70,
        "name": "Ambipom",
        "spa": 123,
        "spd": 129,
        "spe": 183,
        "type": "normal"
    },
    {
        "att": 134,
        "def": 134,
        "hp": 207,
        "id": 71,
        "name": "Dunsparce",
        "spa": 128,
        "spd": 128,
        "spe": 106,
        "type": "normal"
    },
    {
        "att": 200,
        "def": 139,
        "hp": 197,
        "id": 72,
        "name": "Ursaring",
        "spa": 139,
        "spd": 139,
        "spe": 117,
        "type": "normal"
    },
    {
        "att": 150,
        "def": 133,
        "hp": 167,
        "id": 73,
        "name": "Arbok",
        "spa": 128,
        "spd": 144,
        "spe": 145,
        "type": "poison"
    },
    {
        "att": 137,
        "def": 148,
        "hp": 207,
        "id": 74,
        "name": "Swalot",
        "spa": 137,
        "spd": 148,
        "spe": 117,
        "type": "poison"
    },
    {
        "att": 172,
        "def": 139,
        "hp": 212,
        "id": 75,
        "name": "Muk",
        "spa": 128,
        "spd": 167,
        "spe": 112,
        "type": "poison"
    },
    {
        "att": 156,
        "def": 189,
        "hp": 172,
        "id": 76,
        "name": "Weezing",
        "spa": 150,
        "spd": 134,
        "spe": 123,
        "type": "poison"
    },
    {
        "att": 167,
        "def": 123,
        "hp": 180,
        "id": 77,
        "name": "Seviper",
        "spa": 167,
        "spd": 123,
        "spe": 128,
        "type": "poison"
    },
    {
        "att": 106,
        "def": 128,
        "hp": 187,
        "id": 78,
        "name": "Grumpig",
        "spa": 156,
        "spd": 178,
        "spe": 145,
        "type": "psychic"
    },
    {
        "att": 112,
        "def": 106,
        "hp": 162,
        "id": 79,
        "name": "Alakazam",
        "spa": 205,
        "spd": 150,
        "spe": 189,
        "type": "psychic"
    },
    {
        "att": 137,
        "def": 134,
        "hp": 192,
        "id": 80,
        "name": "Hypno",
        "spa": 137,
        "spd": 183,
        "spe": 130,
        "type": "psychic"
    },
    {
        "att": 128,
        "def": 123,
        "hp": 172,
        "id": 81,
        "name": "Espeon",
        "spa": 200,
        "spd": 161,
        "spe": 178,
        "type": "psychic"
    },
    {
        "att": 178,
        "def": 156,
        "hp": 213,
        "id": 82,
        "name": "Mewtwo",
        "spa": 226,
        "spd": 156,
        "spe": 200,
        "type": "psychic"
    },
    {
        "att": 112,
        "def": 134,
        "hp": 172,
        "id": 83,
        "name": "Chimecho",
        "spa": 161,
        "spd": 145,
        "spe": 128,
        "type": "psychic"
    },
    {
        "att": 136,
        "def": 110,
        "hp": 155,
        "id": 84,
        "name": "Unown",
        "spa": 136,
        "spd": 110,
        "spe": 110,
        "type": "psychic"
    },
    {
        "att": 222,
        "def": 112,
        "hp": 157,
        "id": 85,
        "name": "Deoxys",
        "spa": 222,
        "spd": 112,
        "spe": 222,
        "type": "psychic"
    },
    {
        "att": 167,
        "def": 183,
        "hp": 177,
        "id": 86,
        "name": "Sudowoodo",
        "spa": 90,
        "spd": 128,
        "spe": 90,
        "type": "rock"
    },
    {
        "att": 167,
        "def": 277,
        "hp": 187,
        "id": 87,
        "name": "Regirock",
        "spa": 112,
        "spd": 167,
        "spe": 112,
        "type": "rock"
    },
    {
        "att": 238,
        "def": 123,
        "hp": 204,
        "id": 88,
        "name": "Rampardos",
        "spa": 128,
        "spd": 112,
        "spe": 121,
        "type": "rock"
    },
    {
        "att": 139,
        "def": 222,
        "hp": 187,
        "id": 89,
        "name": "Registeel",
        "spa": 139,
        "spd": 222,
        "spe": 112,
        "type": "steel"
    },
    {
        "att": 167,
        "def": 183,
        "hp": 167,
        "id": 90,
        "name": "Klinklang",
        "spa": 134,
        "spd": 150,
        "spe": 156,
        "type": "steel"
    },
    {
        "att": 214,
        "def": 214,
        "hp": 242,
        "id": 91,
        "name": "Melmetal",
        "spa": 145,
        "spd": 128,
        "spe": 94,
        "type": "steel"
    },
    {
        "att": 200,
        "def": 133,
        "hp": 229,
        "id": 92,
        "name": "Copperajah",
        "spa": 145,
        "spd": 133,
        "spe": 90,
        "type": "steel"
    },
    {
        "att": 148,
        "def": 167,
        "hp": 186,
        "id": 93,
        "name": "Blastoise",
        "spa": 150,
        "spd": 172,
        "spe": 143,
        "type": "water"
    },
    {
        "att": 147,
        "def": 143,
        "hp": 187,
        "id": 94,
        "name": "Golduck",
        "spa": 161,
        "spd": 145,
        "spe": 150,
        "type": "water"
    },
    {
        "att": 156,
        "def": 106,
        "hp": 277,
        "id": 95,
        "name": "Wailord",
        "spa": 156,
        "spd": 106,
        "spe": 123,
        "type": "water"
    },
    {
        "att": 200,
        "def": 183,
        "hp": 162,
        "id": 96,
        "name": "Kingler",
        "spa": 112,
        "spd": 112,
        "spe": 139,
        "type": "water"
    },
    {
        "att": 158,
        "def": 128,
        "hp": 187,
        "id": 97,
        "name": "Seaking",
        "spa": 128,
        "spd": 145,
        "spe": 132,
        "type": "water"
    },
    {
        "att": 128,
        "def": 123,
        "hp": 237,
        "id": 98,
        "name": "Vaporeon",
        "spa": 178,
        "spd": 161,
        "spe": 128,
        "type": "water"
    },
    {
        "att": 123,
        "def": 144,
        "hp": 202,
        "id": 99,
        "name": "Milotic",
        "spa": 167,
        "spd": 194,
        "spe": 146,
        "type": "water"
    },
    {
        "att": 172,
        "def": 167,
        "hp": 192,
        "id": 100,
        "name": "Feraligatr",
        "spa": 144,
        "spd": 148,
        "spe": 143,
        "type": "water"
    },
    {
        "att": 139,
        "def": 139,
        "hp": 197,
        "id": 101,
        "name": "Politoed",
        "spa": 156,
        "spd": 167,
        "spe": 134,
        "type": "water"
    },
    {
        "att": 172,
        "def": 139,
        "hp": 182,
        "id": 102,
        "name": "Octillery",
        "spa": 172,
        "spd": 139,
        "spe": 106,
        "type": "water"
    },
    {
        "att": 139,
        "def": 183,
        "hp": 207,
        "id": 103,
        "name": "Suicune",
        "spa": 156,
        "spd": 183,
        "spe": 150,
        "type": "water"
    },
    {
        "att": 149,
        "def": 172,
        "hp": 162,
        "id": 104,
        "name": "Gorebyss",
        "spa": 182,
        "spd": 139,
        "spe": 114,
        "type": "water"
    },
    {
        "att": 171,
        "def": 172,
        "hp": 162,
        "id": 105,
        "name": "Huntail",
        "spa": 160,
        "spd": 139,
        "spe": 114,
        "type": "water"
    },
    {
        "att": 90,
        "def": 117,
        "hp": 150,
        "id": 106,
        "name": "Luvdisc",
        "spa": 106,
        "spd": 128,
        "spe": 163,
        "type": "water"
    },
    {
        "att": 172,
        "def": 117,
        "hp": 192,
        "id": 107,
        "name": "Floatzel",
        "spa": 150,
        "spd": 112,
        "spe": 183,
        "type": "water"
    },
    {
        "att": 167,
        "def": 156,
        "hp": 207,
        "id": 108,
        "name": "Kyogre",
        "spa": 222,
        "spd": 211,
        "spe": 156,
        "type": "water"
    }
];

const typeData = [
    {
        "immunities": [],
        "resistances": [
            "fighting", "grass", "ground"
        ],
        "type": "bug",
        "weaknesses": [
            "fire", "flying", "rock"
        ]
    },
    {
        "immunities": [
            "psychic"
        ],
        "resistances": [
            "dark", "ghost"
        ],
        "type": "dark",
        "weaknesses": [
            "bug", "fairy", "fighting"
        ]
    },
    {
        "immunities": [],
        "resistances": [
            "electric", "fire", "grass", "water"
        ],
        "type": "dragon",
        "weaknesses": [
            "dragon", "fairy", "ice"
        ]
    },
    {
        "immunities": [],
        "resistances": [
            "electric", "flying", "steel"
        ],
        "type": "electric",
        "weaknesses": [
            "ground"
        ]
    },
    {
        "immunities": [
            "dragon"
        ],
        "resistances": [
            "bug", "dark", "fighting"
        ],
        "type": "fairy",
        "weaknesses": [
            "poison", "steel"
        ]
    },
    {
        "immunities": [],
        "resistances": [
            "bug", "dark", "rock"
        ],
        "type": "fighting",
        "weaknesses": [
            "fairy", "flying", "psychic"
        ]
    },
    {
        "immunities": [],
        "resistances": [
            "bug", "fairy", "fire", "grass", "ice", "steel"
        ],
        "type": "fire",
        "weaknesses": [
            "ground", "rock", "water"
        ]
    },
    {
        "immunities": [
            "ground"
        ],
        "resistances": [
            "bug", "fighting", "grass"
        ],
        "type": "flying",
        "weaknesses": [
            "electric", "ice", "rock"
        ]
    },
    {
        "immunities": [
            "fighting", "normal"
        ],
        "resistances": [
            "bug", "poison"
        ],
        "type": "ghost",
        "weaknesses": [
            "dark", "ghost"
        ]
    },
    {
        "immunities": [],
        "resistances": [
            "electric", "grass", "ground", "water"
        ],
        "type": "grass",
        "weaknesses": [
            "bug", "fire", "flying", "ice", "poison"
        ]
    },
    {
        "immunities": [
            "electric"
        ],
        "resistances": [
            "poison", "rock"
        ],
        "type": "ground",
        "weaknesses": [
            "grass", "ice", "water"
        ]
    },
    {
        "immunities": [],
        "resistances": [
            "ice"
        ],
        "type": "ice",
        "weaknesses": [
            "fighting", "fire", "rock", "steel"
        ]
    },
    {
        "immunities": [
            "ghost"
        ],
        "resistances": [],
        "type": "normal",
        "weaknesses": [
            "fighting"
        ]
    },
    {
        "immunities": [],
        "resistances": [
            "bug", "fairy", "fighting", "grass", "poison"
        ],
        "type": "poison",
        "weaknesses": [
            "ground", "psychic"
        ]
    },
    {
        "immunities": [],
        "resistances": [
            "fighting", "psychic"
        ],
        "type": "psychic",
        "weaknesses": [
            "bug", "dark", "ghost"
        ]
    },
    {
        "immunities": [],
        "resistances": [
            "fire", "flying", "normal", "poison"
        ],
        "type": "rock",
        "weaknesses": [
            "fighting", "grass", "ground", "steel", "water"
        ]
    },
    {
        "immunities": [
            "poison"
        ],
        "resistances": [
            "bug", "dragon", "fairy", "flying", "grass", "ice", "normal", "psychic", "rock", "steel"
        ],
        "type": "steel",
        "weaknesses": [
            "fighting", "fire", "ground"
        ]
    },
    {
        "immunities": [],
        "resistances": [
            "fire", "ice", "steel", "water"
        ],
        "type": "water",
        "weaknesses": [
            "grass", "electric"
        ]
    }
]

const damageStatuses = ["burned", "poisoned"];

const extension = ".png";

const pokemonsFolder = "images/pokemons/";

var filteredMoves = moves;

var filteredPokemonData = pokemonData;

var filteredTypeData = typeData;

var myActivePokemon = null;
var opponentActivePokemon = null;

var turn = 0;

function applyStatEffect(pokemon, stat, type) {
    let attributeName = stat.concat("-actual");

    let attributeValue = pokemon.getAttribute(attributeName);

    let statAttributeFullName = getStatAttributeFullName(stat);

    let statModifier = getStatModifier(pokemon, stat);

    if (type == "lower") {
        attributeValue = Math.ceil(attributeValue / statModifier);

        pokemon.setAttribute(attributeName, attributeValue);

        log("p", pokemon.getAttribute("name") + " " + statAttributeFullName + " fells!");
    }
    else if (type == "raise") {
        attributeValue = Math.ceil(attributeValue * statModifier);

        pokemon.setAttribute(attributeName, attributeValue);

        log("p", pokemon.getAttribute("name") + " " + statAttributeFullName + " roses!");
    }

    applyStatIcons(pokemon);
}

function applyStatIcons(pokemon) {
    let pokemonAttack = pokemon.getAttribute("att");
    let pokemonActualAttack = pokemon.getAttribute("att-actual");
    let pokemonDefense = pokemon.getAttribute("def");
    let pokemonActualDefense = pokemon.getAttribute("def-actual");
    let pokemonSpecialAttack = pokemon.getAttribute("spa");
    let pokemonActualSpecialAttack = pokemon.getAttribute("spa-actual");
    let pokemonSpecialDefense = pokemon.getAttribute("spd");
    let pokemonActualSpecialDefense = pokemon.getAttribute("spd-actual");
    let pokemonSpeed = pokemon.getAttribute("spe");
    let pokemonActualSpeed = pokemon.getAttribute("spe-actual");

    let positiveStatsContainer = pokemon.querySelector(".stats[positive]");
    let negativeStatsContainer = pokemon.querySelector(".stats[negative]");

    positiveStatsContainer.innerHTML = "";
    negativeStatsContainer.innerHTML = "";

    if (parseInt(pokemonActualAttack, 10) > parseInt(pokemonAttack, 10)) {
        let imgElement = document.createElement("img");

        imgElement.classList.add("stat");

        imgElement.src = pokemonsFolder + "icons/att" + extension;

        positiveStatsContainer.appendChild(imgElement);
    }
    else if (parseInt(pokemonActualAttack, 10) < parseInt(pokemonAttack, 10)) {
        let imgElement = document.createElement("img");

        imgElement.classList.add("stat");

        imgElement.src = pokemonsFolder + "icons/att" + extension;

        negativeStatsContainer.appendChild(imgElement);
    }

    if (parseInt(pokemonActualDefense, 10) > parseInt(pokemonDefense, 10)) {
        let imgElement = document.createElement("img");

        imgElement.classList.add("stat");

        imgElement.src = pokemonsFolder + "icons/def" + extension;

        positiveStatsContainer.appendChild(imgElement);
    }
    else if (parseInt(pokemonActualDefense, 10) < parseInt(pokemonDefense, 10)) {
        let imgElement = document.createElement("img");

        imgElement.classList.add("stat");

        imgElement.src = pokemonsFolder + "icons/def" + extension;

        negativeStatsContainer.appendChild(imgElement);
    }

    if (parseInt(pokemonActualSpecialAttack, 10) > parseInt(pokemonSpecialAttack, 10)) {
        let imgElement = document.createElement("img");

        imgElement.classList.add("stat");

        imgElement.src = pokemonsFolder + "icons/spa" + extension;

        positiveStatsContainer.appendChild(imgElement);
    }
    else if (parseInt(pokemonActualSpecialAttack, 10) < parseInt(pokemonSpecialAttack, 10)) {
        let imgElement = document.createElement("img");

        imgElement.classList.add("stat");

        imgElement.src = pokemonsFolder + "icons/spa" + extension;

        negativeStatsContainer.appendChild(imgElement);
    }

    if (parseInt(pokemonActualSpecialDefense, 10) > parseInt(pokemonSpecialDefense, 10)) {
        let imgElement = document.createElement("img");

        imgElement.classList.add("stat");

        imgElement.src = pokemonsFolder + "icons/spd" + extension;

        positiveStatsContainer.appendChild(imgElement);
    }
    else if (parseInt(pokemonActualSpecialDefense, 10) < parseInt(pokemonSpecialDefense, 10)) {
        let imgElement = document.createElement("img");

        imgElement.classList.add("stat");

        imgElement.src = pokemonsFolder + "icons/spd" + extension;

        negativeStatsContainer.appendChild(imgElement);
    }

    if (parseInt(pokemonActualSpeed, 10) > parseInt(pokemonSpeed, 10)) {
        let imgElement = document.createElement("img");

        imgElement.classList.add("stat");

        imgElement.src = pokemonsFolder + "icons/spe" + extension;

        positiveStatsContainer.appendChild(imgElement);
    }
    else if (parseInt(pokemonActualSpeed, 10) < parseInt(pokemonSpeed, 10)) {
        let imgElement = document.createElement("img");

        imgElement.classList.add("stat");

        imgElement.src = pokemonsFolder + "icons/spe" + extension;

        negativeStatsContainer.appendChild(imgElement);
    }
}

function cleanUp() {
    document.getElementById("battleLog").innerHTML = "";
    document.getElementById("myPokemonsContainer").innerHTML = "";
    document.getElementById("opponentPokemonsContainer").innerHTML = "";

    filteredMoves = moves;
    
    filteredPokemonData = pokemonData;
    
    filteredTypeData = typeData;
    
    myActivePokemon = null;
    opponentActivePokemon = null;
    
    turn = 0;
}

function checkMyBenchedPokemons() {
    let benchedPokemonsCount = 0;

    let benchedPokemons = document.querySelector("#myPokemonsContainer").querySelectorAll(".pokemon_card:not([active])");

    for (let i = 0; i < benchedPokemons.length; i++) {
        if (!isPokemonFainted(benchedPokemons[i])) {
            benchedPokemons[i].setAttribute("selectable", "");

            benchedPokemonsCount++;
        }
    }

    if (benchedPokemonsCount > 0) {
        log("p", "Select another pokemon");
    }
    else {
        log("p", "The are no able pokemons to battle.");

        if (isPokemonFainted(myActivePokemon)) {
            log("p", "You lost!");
        
            $("#pokemonPlayButton").attr("disabled", false);
        }
        
    }
}

function checkOpponentBenchedPokemons() {
    let benchedPokemons = shuffle(document.querySelector("#opponentPokemonsContainer").querySelectorAll(".pokemon_card:not([active])"));

    for (let i = 0; i < benchedPokemons.length; i++) {
        if (!isPokemonFainted(benchedPokemons[i])) {
            opponentActivePokemon.removeAttribute("active");

            opponentActivePokemon = benchedPokemons[i];

            opponentActivePokemon.setAttribute("active", "");

            break;
        }
    }
}

function checkPokemonFaint(pokemon) {
    let pokemonActualHP = pokemon.getAttribute("hp-actual");

    if (parseInt(pokemonActualHP, 10) < 1) {
        pokemon.setAttribute("fainted", "");

        let positiveStatsContainer = pokemon.querySelector(".stats[positive]");
        let negativeStatsContainer = pokemon.querySelector(".stats[negative]");
    
        positiveStatsContainer.innerHTML = "";
        negativeStatsContainer.innerHTML = "";

        let movesetButtons = pokemon.querySelectorAll(".moveset > button");

        for (let i = 0; i < movesetButtons.length; i++) {
            movesetButtons[i].setAttribute("disabled", "");
        }

        pokemon.removeAttribute("status");

        log("p", pokemon.getAttribute("name") + " fainted!");
    }
}

function damageCalculation(first, attackingPokemon, defendingPokemon, move) {
    if ((move.category == "status")) {
        let effect = move.effect;

        if (!hasChance(effect.chance)) {
            log("p", "But it failed.");

            return;
        }

        if ((effect.type == "lower") || (effect.type == "raise")) {
            let stats = effect.stats;

            if (effect.target == "opponent") {
                for (let i = 0; i < stats.length; i++) {
                    applyStatEffect(defendingPokemon, stats[i], effect.type);
                }
            }
            else if (effect.target == "self") {
                for (let i = 0; i < stats.length; i++) {
                    applyStatEffect(attackingPokemon, stats[i], effect.type);
                }
            }

            return;
        }
        else if (effect.type == "status") {
            if (defendingPokemon.hasAttribute("status")) {
                log("p", "But it failed.");

                return;
            }

            let statusTurnsLeftProperty = null;

            let status = effect.status;

            if (effect.target == "opponent") {
                defendingPokemon.setAttribute("status", status);

                if (status == "burned") {
                    defendingPokemon.setAttribute("att-actual", "" + Math.ceil(defendingPokemon.getAttribute("att-actual") / 2));
                }
                else if (status == "confused") {
                    statusTurnsLeftProperty = "confused-turns-left";
                }
                else if (status == "paralyzed") {
                    defendingPokemon.setAttribute("spe-actual", "" + Math.ceil(defendingPokemon.getAttribute("spe-actual") / 2));
                }
                else if (status == "sleeping") {
                    statusTurnsLeftProperty = "sleeping-turns-left";
                }

                if (statusTurnsLeftProperty) {
                    defendingPokemon.setAttribute(statusTurnsLeftProperty, "" + Math.floor(Math.random() * 4));
                }

                log("p", defendingPokemon.getAttribute("name") + " is " + status);
            }
            else if (effect.target == "self") {
                attackingPokemon.setAttribute("status", status);

                if (status == "burned") {
                    attackingPokemon.setAttribute("att-actual", "" + Math.ceil(attackingPokemon.getAttribute("att-actual") / 2));
                }
                else if (status == "confused") {
                    statusTurnsLeftProperty = "confused-turns-left";
                }
                else if (status == "paralyzed") {
                    attackingPokemon.setAttribute("spe-actual", "" + Math.ceil(attackingPokemon.getAttribute("spe-actual") / 2));
                }
                else if (status == "sleeping") {
                    statusTurnsLeftProperty = "sleeping-turns-left";
                }

                if (statusTurnsLeftProperty) {
                    attackingPokemon.setAttribute(statusTurnsLeftProperty, "" + Math.floor(Math.random() * 4));
                }

                log("p", attackingPokemon.getAttribute("name") + " is " + status);
            }
        }

        return;
    }

    if (!hasChance(move.accuracy)) {
        log("p", "But it missed.");

        return;
    }

    let attackValue = 0;
    let defenseValue = 0;

    if (move.category === "physical") {
        attackValue = attackingPokemon.getAttribute("att-actual");
        defenseValue = defendingPokemon.getAttribute("def-actual");
    }
    else if (move.category === "special") {
        attackValue = attackingPokemon.getAttribute("spa-actual");
        defenseValue = defendingPokemon.getAttribute("spd-actual");
    }

    if (parseInt(defenseValue, 10) < 1) {
        defenseValue = 1;
    }

    let effectiveness = getEffectiveness(move.type, defendingPokemon.getAttribute("type"));

    if (effectiveness == 0) {
        log("p", defendingPokemon.getAttribute("name") + " is immune!");
    }
    else if (effectiveness == 0.5) {
        log("p", "It is not very effective.");
    }
    else if (effectiveness == 1) {
        log("p", "It is normally effective.");
    }
    else if (effectiveness == 2) {
        log("p", "It is super effective!");
    }

    let damage = Math.ceil((move.power * (attackValue/defenseValue)) * (3/2) * effectiveness);

    let defendingPokemonActualHP = defendingPokemon.getAttribute("hp-actual");

    defendingPokemonActualHP = defendingPokemonActualHP - damage;

    if (parseInt(defendingPokemonActualHP, 10) < 0) {
        defendingPokemonActualHP = 0;
    }

    defendingPokemon.setAttribute("hp-actual", defendingPokemonActualHP);

    let defendingPokemonHP = defendingPokemon.getAttribute("hp");

    let hpPercentage = Math.ceil(100 * (defendingPokemonActualHP/defendingPokemonHP));

    let defendingPokemonProgressBar = defendingPokemon.querySelector(".progress-bar");

    let defendingPokemonProgressBarValueNow = defendingPokemonProgressBar.getAttribute("aria-valuenow");

    defendingPokemonProgressBar.classList.remove("w-" + defendingPokemonProgressBarValueNow);
    defendingPokemonProgressBar.classList.add("w-" + hpPercentage);

    defendingPokemonProgressBar.setAttribute("aria-valuenow", hpPercentage);

    checkPokemonFaint(defendingPokemon);

    if (!isPokemonFainted(defendingPokemon) && move.effect) {
        let effectType = move.effect.type;

        if ((effectType == "lower") || (effectType == "raise")) {
            let stats = move.effect.stats;

            if (move.effect.target == "opponent") {
                for (let i = 0; i < stats.length; i++) {
                    if (hasChance(move.effect.chance)) {
                        applyStatEffect(defendingPokemon, stats[i], effectType);
                    }
                }
            }
            else if (move.effect.target == "self") {
                for (let i = 0; i < stats.length; i++) {
                    if (hasChance(move.effect.chance)) {
                        applyStatEffect(attackingPokemon, stats[i], effectType);
                    }
                }
            }
        }
        else if (effectType == "status") {
            if ((move.effect.status == "flinch")) {
                if (first && hasChance(move.effect.chance)) {
                    defendingPokemon.setAttribute("flinch", "");
                }
            }
            else if (!defendingPokemon.hasAttribute("status") && hasChance(move.effect.chance)) {
                let status = move.effect.status;

                defendingPokemon.setAttribute("status", status);

                let statusTurnsLeftProperty = null;

                if (status == "burned") {
                    defendingPokemon.setAttribute("att-actual", "" + Math.ceil(defendingPokemon.getAttribute("att-actual") / 2));
                }
                else if (status == "confused") {
                    statusTurnsLeftProperty = "confused-turns-left";
                }
                else if (status == "paralyzed") {
                    defendingPokemon.setAttribute("spe-actual", "" + Math.ceil(defendingPokemon.getAttribute("spe-actual") / 2));
                }
                else if (status == "sleeping") {
                    statusTurnsLeftProperty = "sleeping-turns-left";
                }

                if (statusTurnsLeftProperty) {
                    defendingPokemon.setAttribute(statusTurnsLeftProperty, "" + Math.floor(Math.random() * 4));
                }

                log("p", defendingPokemon.getAttribute("name") + " is " + status);
            }
        }
    }
}

function executeMove(first, moveName, opponent, type) {
    let move = getMove(moveName, type);

    let skippingTurn = isSkippingTurn(move, opponent);

    if (!skippingTurn) {
        if (opponent) {
            if (!isPokemonFainted(opponentActivePokemon)) {
                if (opponentActivePokemon.hasAttribute("flinch")) {
                    log("p", opponentActivePokemon.getAttribute("name") + " flinched!");

                    opponentActivePokemon.removeAttribute("flinch");
                }
                else {
                    log("p", "Opponent has selected: " + move.name);
            
                    damageCalculation(first, opponentActivePokemon, myActivePokemon, move);
                }
            }
        }
        else {
            if (!isPokemonFainted(myActivePokemon)) {
                if (myActivePokemon.hasAttribute("flinch")) {
                    log("p", myActivePokemon.getAttribute("name") + " flinched!");

                    myActivePokemon.removeAttribute("flinch");
                }
                else {
                    log("p", "You have selected: " + move.name);
            
                    damageCalculation(first, myActivePokemon, opponentActivePokemon, move);
                }
            }
        }
    }

    if (first) {
        return true;
    }
    else {
        resolveEndTurnEffects();

        if (isPokemonFainted(opponentActivePokemon)) {
            opponentRandomSwitch();
        }

        if (isPokemonFainted(myActivePokemon)) {
            let myactivePokemons = document.querySelector("#myPokemonsContainer").querySelectorAll(".pokemon_card[active]");

            for (let i = 0; i < myactivePokemons.length; i++) {
                myactivePokemons[i].setAttribute("start-turn", "");
            }

            checkMyBenchedPokemons();
        }
    }

    return true;
}

function executeOpponentMove(first) {
    let moveNumbers = ["1", "2", "3", "4"];

    let moveNumber = moveNumbers[Math.floor(Math.random() * moveNumbers.length)];

    let opponentRandomMovePP = 0;

    while((moveNumber !== 0) || (opponentRandomMovePP == 0)) {
        opponentRandomMovePP = opponentActivePokemon.getAttribute("pp-move-" + moveNumber);

        if (parseInt(opponentRandomMovePP, 10) > 0) {
            break;
        }

        moveNumbers.splice(moveNumber, 1);

        if (moveNumbers.length > 0) {
            moveNumber = moveNumbers[Math.floor(Math.random() * moveNumbers.length)];
        }
        else {
            moveNumber = 0;
        }
    }

    if (parseInt(opponentRandomMovePP, 10) > 0) {
        opponentActivePokemon.setAttribute("pp-move-" + moveNumber, (opponentRandomMovePP - 1));

        let opponentSelectedMove = opponentActivePokemon.getAttribute("move-" + moveNumber);
        
        return executeMove(first, opponentSelectedMove, true, opponentActivePokemon.getAttribute("type"));
    }

    return true;
}

function getEffectiveness(moveType, pokemonType) {
    initializeTypeData(pokemonType);

    if (filteredTypeData.weaknesses.includes(moveType)) {
        return 2;
    }
    else if (filteredTypeData.resistances.includes(moveType)) {
        return 1 / 2;
    }
    else if (filteredTypeData.immunities.includes(moveType)) {
        return 0;
    }
    
    return 1;
}

function getMove(moveName, type) {
    initializeMoves(type);

    return filteredMoves.filter(function(e) {return e.name == moveName})[0];
}

function getMoveInitialPP(moveName, type) {
    let move = getMove(moveName, type);

    return move.pp;
}

function getMoveset(type) {
    initializeMoves(type);

    filteredMoves = shuffle(filteredMoves);

    if (filteredMoves.length < 4) {
        return "";
    }

    let move1 = filteredMoves[0].name;
    let move2 = filteredMoves[1].name;
    let move3 = filteredMoves[2].name;
    let move4 = filteredMoves[3].name;

    return "".concat(
        "move-1=\"", move1, "\" pp-move-1=\"", getMoveInitialPP(move1, type), "\" ",
        "move-2=\"", move2, "\" pp-move-2=\"", getMoveInitialPP(move2, type), "\" ",
        "move-3=\"", move3, "\" pp-move-3=\"", getMoveInitialPP(move3, type), "\" ",
        "move-4=\"", move4, "\" pp-move-4=\"", getMoveInitialPP(move4, type), "\" ",
    );
}

function getMovesetButtons(moveset, type) {
    let movesetButtons = "";

    let movesetArray = moveset.split(/[""]/);

    let positions = [1, 5, 9, 13];

    if (moveset.length > 0) {
        for (let i = 0; i < 4; i++) {
            let moveName = movesetArray[positions[i]];

            let pp = getMoveInitialPP(moveName, type);

            movesetButtons = movesetButtons.concat(
                "<button class=\"mt-1 row move_button move-", (i + 1), "\" class=\"row move_button\"",
                " disabled onclick=\"makeMove(this)\" value=\"", moveName, " ", pp, "/", pp, "\">",
                moveName, " ", pp, "/", pp, "</button>"
            );
        }
    }

    return movesetButtons.concat(
        "<button class=\"mt-3 row switch_button\" disabled onclick=\"makeMove(this)\" value=\"switch\">Switch</button>"
    );
}

function getStatAttributeFullName(stat) {
    if (stat == "att") {
        return "attack";
    }
    else if (stat == "def") {
        return "defense";
    }
    else if (stat == "hp") {
        return "HP";
    }
    else if (stat == "spa") {
        return "special attack";
    }
    else if (stat == "spd") {
        return "special defense";
    }
    else if (stat == "spe") {
        return "speed";
    }
    
    return "";
}

function getStatModifier(pokemon, stat) {
    if (pokemon.hasAttribute("status")) {
        let pokemonStatus = pokemon.getAttribute("status");

        if (((pokemonStatus == "burned") && (stat == "att")) ||
            ((pokemonStatus == "paralyzed") && (stat == "spe"))) {

            return 5 / 4;
        }
    }
        
    return 3 / 2;
}

function getStats(pokemonID) {
    initializePokemonData(pokemonID);

    if (filteredPokemonData.length == 0) {
        return "";
    }

    let att = filteredPokemonData[0].att;
    let def = filteredPokemonData[0].def;
    let hp = filteredPokemonData[0].hp;
    let name = filteredPokemonData[0].name;
    let spa = filteredPokemonData[0].spa;
    let spd = filteredPokemonData[0].spd;
    let spe = filteredPokemonData[0].spe;

    return "".concat(
        "att=\"", att, "\" att-actual=\"", att, "\" ",
        "def=\"", def, "\" def-actual=\"", def, "\" ",
        "hp=\"", hp, "\" hp-actual=\"", hp, "\" ",
        "name=\"", name, "\" ",
        "spa=\"", spa, "\" spa-actual=\"", spa, "\" ",
        "spd=\"", spd, "\" spd-actual=\"", spd, "\" ",
        "spe=\"", spe, "\" spe-actual=\"", spe, "\" ",
    );
}

function hasChance(expectedChance) {
    let chance = Math.random() * 100;

    return chance < parseInt(expectedChance, 10);
}

function initializeMoves(type) {
    filteredMoves = moves;

    filteredMoves = filteredMoves.filter(function(e) {return e.type == type});
}

function initializePokemonData(id) {
    filteredPokemonData = pokemonData;

    filteredPokemonData = filteredPokemonData.filter(function(e) {return e.id == id});
}

function initializeTypeData(type) {
    filteredTypeData = typeData;

    filteredTypeData = filteredTypeData.filter(function(e) {return e.type == type})[0];
}

function isPokemonFainted(pokemon) {
    return pokemon.hasAttribute("fainted");
}

function isSkippingTurn(move, opponent) {
    let pokemon = myActivePokemon;

    if (opponent) {
        pokemon = opponentActivePokemon;
    }

    if (pokemon.hasAttribute("status")) {
        let pokemonStatus = pokemon.getAttribute("status");

        if (pokemonStatus == "confused") {
            let pokemonConfusedTurnsLeft = pokemon.getAttribute("confused-turns-left");

            if (pokemonConfusedTurnsLeft == 0) {
                log("p", pokemon.getAttribute("name") + " snapped out of confusion!");

                pokemon.removeAttribute("status");
                pokemon.removeAttribute("confused-turns-left");

                return false;
            }
            else {
                pokemon.setAttribute("confused-turns-left", pokemonConfusedTurnsLeft - 1);

                if (hasChance(50)) {
                    log("p", pokemon.getAttribute("name") + " hurts itself in confusion!");
                    
                    let attackValue = 0;
                    let defenseValue = 0;
                
                    if ((move.category === "physical") || (move.category === "status")) {
                        attackValue = pokemon.getAttribute("att-actual");
                        defenseValue = pokemon.getAttribute("def-actual");
                    }
                    else if (move.category === "special") {
                        attackValue = pokemon.getAttribute("spa-actual");
                        defenseValue = pokemon.getAttribute("spd-actual");
                    }
                
                    if (parseInt(defenseValue, 10) < 1) {
                        defenseValue = 1;
                    }

                    let damage = Math.ceil([((22* (parseInt(attackValue, 10) * 40) / parseInt(defenseValue, 10))/50)] + 2);

                    let pokemonActualHP = pokemon.getAttribute("hp-actual");

                    pokemonActualHP = pokemonActualHP - damage;

                    if (parseInt(pokemonActualHP, 10) < 0) {
                        pokemonActualHP = 0;
                    }

                    pokemon.setAttribute("hp-actual", pokemonActualHP);

                    let pokemonHP = pokemon.getAttribute("hp");

                    let hpPercentage = Math.ceil(100 * (pokemonActualHP/pokemonHP));

                    let pokemonProgressBar = pokemon.querySelector(".progress-bar");

                    let pokemonProgressBarValueNow = pokemonProgressBar.getAttribute("aria-valuenow");

                    pokemonProgressBar.classList.remove("w-" + pokemonProgressBarValueNow);
                    pokemonProgressBar.classList.add("w-" + hpPercentage);

                    pokemonProgressBar.setAttribute("aria-valuenow", hpPercentage);

                    checkPokemonFaint(pokemon);

                    return true;
                }
            }
        }
        else if (pokemonStatus == "paralyzed") {
            if (hasChance(25)) {
                log("p", pokemon.getAttribute("name") + " can't move because it is paralyzed!");

                return true;
            }
        }
        else if (pokemonStatus == "sleeping") {
            let pokemonSleepingTurnsLeft = pokemon.getAttribute("sleeping-turns-left");

            if (pokemonSleepingTurnsLeft == 0) {
                log("p", pokemon.getAttribute("name") + " woke up!");

                pokemon.removeAttribute("status");
                pokemon.removeAttribute("sleeping-turns-left");

                return false;
            }
            else {
                log("p", pokemon.getAttribute("name") + " can't move because it is sleeping!");

                pokemon.setAttribute("sleeping-turns-left", pokemonSleepingTurnsLeft - 1);

                return true;
            }
        }
    }

    return false;
}

function makeMove(element) {
    turn++;

    log("h3", "Turn " + turn);

    if (element === opponentActivePokemon) {
        executeOpponentMove(false);

        return;
    }

    if (element.value == "switch") {
        checkMyBenchedPokemons();

        return;
    }

    let values = element.value.split("/");

    let currentPP = values[0].match(/\d/g).join("") - 1;

    if (currentPP == 0) {
        element.setAttribute("disabled", "");
    }

    let valuesArray = values[0].split(" ");

    valuesArray.pop();

    let moveName = valuesArray.join(" ");

    valuesArray.push(currentPP);

    let value = valuesArray.join(" ").concat("/", values[1])

    element.value = value;
    element.innerHTML = value;

    let myActivePokemonActualSpeed = myActivePokemon.getAttribute("spe-actual");
    let opponentActivePokemonActualSpeed = opponentActivePokemon.getAttribute("spe-actual");

    if (parseInt(myActivePokemonActualSpeed, 10) > parseInt(opponentActivePokemonActualSpeed, 10)) {
        let executed = executeMove(true, moveName, false, myActivePokemon.getAttribute("type"));

        if (executed) {
            executeOpponentMove(false);
        }
    }
    else {
        let executed = executeOpponentMove(true);

        if (executed) {
            executeMove(false, moveName, false, myActivePokemon.getAttribute("type"));
        }
    }
}

function opponentRandomSwitch() {
    checkOpponentBenchedPokemons();

    if (!isPokemonFainted(opponentActivePokemon)) {
        log("p", "Opponent has selected: " + opponentActivePokemon.getAttribute("name"));
    }
    else {
        log("p", "The are no able pokemons to battle for your opponent. You won!");

        let allMovesetButtons = document.querySelectorAll(".moveset > button");

        for (let i = 0; i < allMovesetButtons.length; i++) {
            allMovesetButtons[i].setAttribute("disabled", "");
        }

        $("#pokemonPlayButton").attr("disabled", false);
    }
}

function resolveEndTurnEffects() {
    if (!isPokemonFainted(myActivePokemon) && myActivePokemon.hasAttribute("status")) {
        let myActivePokemonActualHP = myActivePokemon.getAttribute("hp-actual");
        let myActivePokemonHP = myActivePokemon.getAttribute("hp");

        let status = myActivePokemon.getAttribute("status");

        if (damageStatuses.includes(status)) {
            myActivePokemonActualHP = myActivePokemonActualHP - Math.ceil(myActivePokemonHP * (1/16));
        }

        if (parseInt(myActivePokemonActualHP, 10) < 0) {
            myActivePokemonActualHP = 0;
        }

        myActivePokemon.setAttribute("hp-actual", myActivePokemonActualHP);

        let hpPercentage = Math.ceil(100 * (myActivePokemonActualHP/myActivePokemonHP));
    
        let myActivePokemonProgressBar = myActivePokemon.querySelector(".progress-bar");
    
        let myActivePokemonProgressBarValueNow = myActivePokemonProgressBar.getAttribute("aria-valuenow");
    
        myActivePokemonProgressBar.classList.remove("w-" + myActivePokemonProgressBarValueNow);
        myActivePokemonProgressBar.classList.add("w-" + hpPercentage);
    
        myActivePokemonProgressBar.setAttribute("aria-valuenow", hpPercentage);
    
        checkPokemonFaint(myActivePokemon);
    }
    
    if (!isPokemonFainted(opponentActivePokemon) && opponentActivePokemon.hasAttribute("status")) {
        let opponentActivePokemonActualHP = opponentActivePokemon.getAttribute("hp-actual");
        let opponentActivePokemonHP = opponentActivePokemon.getAttribute("hp");

        let status = opponentActivePokemon.getAttribute("status");

        if (damageStatuses.includes(status)) {
            opponentActivePokemonActualHP = opponentActivePokemonActualHP - Math.ceil(opponentActivePokemonHP * (1/16));
        }

        if (parseInt(opponentActivePokemonActualHP, 10) < 0) {
            opponentActivePokemonActualHP = 0;
        }

        opponentActivePokemon.setAttribute("hp-actual", opponentActivePokemonActualHP);

        let hpPercentage = Math.ceil(100 * (opponentActivePokemonActualHP/opponentActivePokemonHP));
    
        let opponentActivePokemonProgressBar = opponentActivePokemon.querySelector(".progress-bar");
    
        let opponentActivePokemonProgressBarValueNow = opponentActivePokemonProgressBar.getAttribute("aria-valuenow");
    
        opponentActivePokemonProgressBar.classList.remove("w-" + opponentActivePokemonProgressBarValueNow);
        opponentActivePokemonProgressBar.classList.add("w-" + hpPercentage);
    
        opponentActivePokemonProgressBar.setAttribute("aria-valuenow", hpPercentage);
    
        checkPokemonFaint(opponentActivePokemon);
    }
}

function selectPokemon(element) {
    if (element.hasAttribute("active") || !element.hasAttribute("selectable")) {
        return;
    }

    let activePokemon = element.parentElement.querySelector(".pokemon_card[active]");

    if (activePokemon) {
        activePokemon.removeAttribute("active");
        
        let movesetButtons = activePokemon.querySelectorAll(".moveset > button");

        for (let i = 0; i < movesetButtons.length; i++) {
            movesetButtons[i].setAttribute("disabled", "");
        }
    }

    myActivePokemon = element;

    myActivePokemon.setAttribute("active", "");

    let movesetButtons = myActivePokemon.querySelectorAll(".moveset > button");

    for (let i = 0; i < movesetButtons.length; i++) {
        movesetButtons[i].removeAttribute("disabled");
    }

    let myPokemonsContainer = document.querySelector("#myPokemonsContainer");

    let allSelectable = myPokemonsContainer.querySelectorAll(".pokemon_card[selectable]");

    for (let i = 0; i < allSelectable.length; i++) {
        allSelectable[i].removeAttribute("selectable");
    }

    let startTurnPokemons = myPokemonsContainer.querySelectorAll(".pokemon_card[start-turn]");

    if (startTurnPokemons.length > 0) {
        for (let i = 0; i < startTurnPokemons.length; i++) {
            startTurnPokemons[i].removeAttribute("start-turn");
        }
    }
    else {
        makeMove(opponentActivePokemon);
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);

        currentIndex--;

        [array[currentIndex], array[randomIndex]] =
            [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function startPokemonBattle() {
    cleanUp();

    initializePokemonData();

    let myPokemons = [];
    let opponentPokemons = [];

    myPokemons.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);
    myPokemons.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);
    myPokemons.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);
    myPokemons.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);
    myPokemons.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);
    myPokemons.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);

    opponentPokemons.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);
    opponentPokemons.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);
    opponentPokemons.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);
    opponentPokemons.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);
    opponentPokemons.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);
    opponentPokemons.push(pokemonData[Math.floor(Math.random() * pokemonData.length)]);

    let htmlString = "<div class=\"row pt-2\">";

    for(let i = 0; i < myPokemons.length; i++) {
        let type = myPokemons[i].type;

        let moveset = getMoveset(type);

        let pokemonID = myPokemons[i].id;

        let stats = getStats(pokemonID);

        htmlString = htmlString.concat(
            "<div class=\"card col-2 pokemon_card\" start-turn selectable onclick=\"selectPokemon(this)\" ", moveset, stats, "type=\"", type, "\">",
            "<img class=\"pokemon\" src=\"", pokemonsFolder, type, "/pokemon-", pokemonID, extension, "\" />",
            "<img class=\"status\" src=\"", pokemonsFolder, "/icons/burned", extension, "\" burned />",
            "<img class=\"status\" src=\"", pokemonsFolder, "/icons/confused", extension, "\" confused />",
            "<img class=\"status\" src=\"", pokemonsFolder, "/icons/fainted", extension, "\" fainted />",
            "<img class=\"status\" src=\"", pokemonsFolder, "/icons/paralyzed", extension, "\" paralyzed />",
            "<img class=\"status\" src=\"", pokemonsFolder, "/icons/poisoned", extension, "\" poisoned />",
            "<img class=\"status\" src=\"", pokemonsFolder, "/icons/sleeping", extension, "\" sleeping />",
            "<div class=\"stats\" positive></div><div class=\"stats\" negative></div><div class=\"pokemon_name\">", myPokemons[i].name, "</div>",
            "<div class=\"pokemon_hp progress\">",
            "<div class=\"progress-bar w-100\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\">",
            "</div></div><div class=\"moveset\">", getMovesetButtons(moveset, type), "</div></div>"
        );
    };

    htmlString = htmlString.concat("</div>");

    $("#myPokemonsContainer").append(htmlString);

    htmlString = "<div class=\"row pokemon_row pt-2\">";

    for(let i = 0; i < opponentPokemons.length; i++) {
        let type = opponentPokemons[i].type;

        let moveset = getMoveset(type);

        let pokemonID = opponentPokemons[i].id;

        let stats = getStats(pokemonID);

        if (i == 0) {
            htmlString = htmlString.concat(
                "<div class=\"card col-2 pokemon_card\" ", moveset, stats, "active type=\"", type, "\">",
                "<img class=\"pokemon\" src=\"", pokemonsFolder, type, "/pokemon-", pokemonID, extension, "\" />",
                "<img class=\"status\" src=\"", pokemonsFolder, "/icons/burned", extension, "\" burned />",
                "<img class=\"status\" src=\"", pokemonsFolder, "/icons/confused", extension, "\" confused />",
                "<img class=\"status\" src=\"", pokemonsFolder, "/icons/fainted", extension, "\" fainted />",
                "<img class=\"status\" src=\"", pokemonsFolder, "/icons/paralyzed", extension, "\" paralyzed />",
                "<img class=\"status\" src=\"", pokemonsFolder, "/icons/poisoned", extension, "\" poisoned />",
                "<img class=\"status\" src=\"", pokemonsFolder, "/icons/sleeping", extension, "\" sleeping />",
                "<div class=\"stats\" positive></div><div class=\"stats\" negative></div><div class=\"pokemon_name\">", opponentPokemons[i].name, "</div>",
                "<div class=\"pokemon_hp progress\">",
                "<div class=\"progress-bar w-100\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\">",
                "</div></div></div>"
            );
        }
        else {
            htmlString = htmlString.concat(
                "<div class=\"card col-2 pokemon_card\" ", moveset, stats, "type=\"", type, "\">",
                "<img class=\"pokemon\" src=\"", pokemonsFolder, type, "/pokemon-", pokemonID, extension, "\" />",
                "<img class=\"status\" src=\"", pokemonsFolder, "/icons/burned", extension, "\" burned />",
                "<img class=\"status\" src=\"", pokemonsFolder, "/icons/confused", extension, "\" confused />",
                "<img class=\"status\" src=\"", pokemonsFolder, "/icons/fainted", extension, "\" fainted />",
                "<img class=\"status\" src=\"", pokemonsFolder, "/icons/paralyzed", extension, "\" paralyzed />",
                "<img class=\"status\" src=\"", pokemonsFolder, "/icons/poisoned", extension, "\" poisoned />",
                "<img class=\"status\" src=\"", pokemonsFolder, "/icons/sleeping", extension, "\" sleeping />",
                "<div class=\"stats\" positive></div><div class=\"stats\" negative></div><div class=\"pokemon_name\">", opponentPokemons[i].name, "</div>",
                "<div class=\"pokemon_hp progress\">",
                "<div class=\"progress-bar w-100\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\">",
                "</div></div></div>"
            );
        }
    };

    htmlString = htmlString.concat("</div>");

    $("#opponentPokemonsContainer").append(htmlString);

    opponentActivePokemon = document.querySelector("#opponentPokemonsContainer").querySelector(".pokemon_card[active]");

    $("#battleLog").attr("hidden", false);

    $("#pokemonPlayButton").attr("firstClick", true);
    $("#pokemonPlayButton").attr("disabled", true);

    log("h1", "Battle started!");
    log("h3", "Turn " + turn);
    log("p", "Select starter pokemon...");
}

async function log(tag, text) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    tag = document.createElement(tag);

    tag.classList.add("mb-1");

    text = document.createTextNode(text);

    tag.appendChild(text);

    let battleLog = document.getElementById("battleLog");

    battleLog.appendChild(tag);

    battleLog.scrollTop = battleLog.scrollHeight;

    await new Promise(resolve => setTimeout(resolve, 1000));
}