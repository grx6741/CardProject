import CardHolder from "./components/CardHolder"

export default function App() {
    const games = [
        {
            name: "Cosmic Quest",
            desc: "Embark on an interstellar adventure.",
            images: [
            "https://www.w3schools.com/html/mov_bbb.mp4",
            "https://i.imgur.com/5yeBVeM.jpeg",
            "https://i.imgur.com/dCS4tQk.jpeg",
            ],
            downloadable: true,
        },
        {
            name: "Neon Racer",
            desc: "Race through futuristic neon landscapes.",
            images: [
            "https://i.imgur.com/UieUlMQ.jpeg",
            "https://i.imgur.com/5LHPAuk.jpeg",
            ],
            downloadable: false,
        },
        {
            name: "Virtual Wonderland",
            desc: "Explore a virtual world full of wonders.",
            images: [
            "https://i.imgur.com/AaevbdO.png",
            "https://i.imgur.com/A755ZPz.jpeg",
            ],
            downloadable: true,
        },
        {
            name: "Time Warp Puzzles",
            desc: "Solve mind-bending puzzles through time manipulation.",
            images: [
            "https://media4.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif",
            "https://i.imgur.com/LYTQeAg.jpeg",
            ],
            downloadable: false,
        },
        {
            name: "Galactic Velocity",
            desc: "Experience high-speed racing through the galaxy.",
            images: [
            "https://media2.giphy.com/media/xTiTnHvXHHxOTcdmxO/giphy.gif",
            "https://i.imgur.com/PAV7zCS.jpeg",
            ],
            downloadable: true,
        },
        {
            name: "Cybernetic Combat",
            desc: "Engage in intense cybernetic warfare.",
            images: [
            "https://i.imgur.com/z8KCBPz.jpeg",
            "https://i.imgur.com/hNmDF6p.png",
            ],
            downloadable: false,
        },
        {
            name: "Enchanted Dreams",
            desc: "Enter a dreamscape filled with enchantment.",
            images: [
            "https://i.imgur.com/7SrF82H.png",
            "https://i.imgur.com/9OQTEBr.png",
            ],
            downloadable: true,
        },
        {
            name: "VR Dimensions",
            desc: "Explore multiple dimensions in virtual reality.",
            images: [
            "https://i.imgur.com/DVJ1VGU.png",
            "https://i.imgur.com/EEqotVZ.jpeg",
            ],
            downloadable: false,
        },
        {
            name: "Mystic Realms",
            desc: "Journey through mystical realms of magic.",
            images: [
            "https://i.imgur.com/5cYE4ui.png",
            "https://i.imgur.com/L0Ci8Yj.png",
            ],
            downloadable: true,
        },
        {
            name: "Pirate's Plunder",
            desc: "Sail the seas and plunder hidden treasures.",
            images: [
            "https://i.imgur.com/YlqLu1U.jpeg",
            "https://i.imgur.com/n9hxJSB.jpeg",
            ],
            downloadable: false,
        },
        {
            name: "Lost in Space",
            desc: "Navigate through the vastness of space.",
            images: [
            "https://i.imgur.com/Tpq7jIQ.jpeg",
            "https://i.imgur.com/ea9PB3H.png",
            ],
            downloadable: true,
        },
        {
            name: "Steampunk Odyssey",
            desc: "Embark on a steampunk adventure across time.",
            images: [
            "https://i.imgur.com/PrRqkOC.jpeg",
            "https://i.imgur.com/Ywcvr7u.jpeg",
            ],
            downloadable: false,
        },
        {
            name: "Cityscape Dreams",
            desc: "Explore a dreamy cityscape filled with wonders.",
            images: [
            "https://i.imgur.com/77ofjEU.jpeg",
            "https://i.imgur.com/UAmDBFo.jpeg",
            ],
            downloadable: true,
        },
        {
            name: "Caverns of Mystery",
            desc: "Discover the mysteries hidden within caverns.",
            images: [
            "https://i.imgur.com/RIhHH2f.jpeg",
            "https://i.imgur.com/GsDyBrC.jpeg",
            ],
            downloadable: false,
        },
        {
            name: "Deep Sea Exploration",
            desc: "Dive into the depths of the ocean on an underwater journey.",
            images: [
            "https://i.imgur.com/7zT1rtQ.jpeg",
            "https://i.imgur.com/hc5BG8g.jpeg",
            ],
            downloadable: true,
        }
    ]

    const images = [
        "https://www.w3schools.com/html/mov_bbb.mp4",
        "https://i.imgur.com/5yeBVeM.jpeg",
        "https://i.imgur.com/dCS4tQk.jpeg",
        "https://i.imgur.com/UieUlMQ.jpeg",
        "https://i.imgur.com/5LHPAuk.jpeg",
        "https://i.imgur.com/AaevbdO.png",
        "https://i.imgur.com/A755ZPz.jpeg",
        "https://media4.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif",
        "https://i.imgur.com/LYTQeAg.jpeg",
        "https://media2.giphy.com/media/xTiTnHvXHHxOTcdmxO/giphy.gif",
        "https://i.imgur.com/PAV7zCS.jpeg",
        "https://i.imgur.com/z8KCBPz.jpeg",
        "https://i.imgur.com/hNmDF6p.png",
        "https://i.imgur.com/7SrF82H.png",
        "https://i.imgur.com/9OQTEBr.png",
        "https://i.imgur.com/DVJ1VGU.png",
        "https://i.imgur.com/EEqotVZ.jpeg",
        "https://i.imgur.com/5cYE4ui.png",
        "https://i.imgur.com/L0Ci8Yj.png",
        "https://i.imgur.com/YlqLu1U.jpeg",
        "https://i.imgur.com/n9hxJSB.jpeg",
        "https://i.imgur.com/Tpq7jIQ.jpeg",
        "https://i.imgur.com/ea9PB3H.png",
        "https://i.imgur.com/PrRqkOC.jpeg",
        "https://i.imgur.com/Ywcvr7u.jpeg",
        "https://i.imgur.com/77ofjEU.jpeg",
        "https://i.imgur.com/UAmDBFo.jpeg",
        "https://i.imgur.com/RIhHH2f.jpeg",
        "https://i.imgur.com/GsDyBrC.jpeg",
        "https://i.imgur.com/7zT1rtQ.jpeg",
        "https://i.imgur.com/hc5BG8g.jpeg",
        "https://i.imgur.com/6SxI005.jpeg",
        "https://i.imgur.com/cENEGeL.jpeg",
    ];
    return (
        <CardHolder images={games}/>
    );
} 
