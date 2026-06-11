
type finalJeopardyQuestion = {
    category: string,
    question: string,
    answer: string
}

export const finalJeopardyData: finalJeopardyQuestion = {
    category: "Lore of Indiana",
    question: "Once considered folklore but now confirmed to be a real event by historians, this 1822 event is infamous for resulting in massive crop devastation across Central Indiana.",
    answer: "The Great Squirrel Stampede"
}

type question = {
    question: string,
    answer: string,
    picture: string | null,
    doubleJeopardy: boolean,
    price: number
}

type board = {
    [key: string]: Array<question>
}

export const board1data: board = {
    "Famous Hoosiers":
    [
        {
            question: "This basketball player was known for his trash talk and white boy motion on the court.",
            answer: "Larry Bird",
            picture: null,
            doubleJeopardy: false,
            price: 200
        },
        {
            question: "As counter-culture icon with a rebellious attitude, this 1950s actor tragically died at the age of 24 in an automobile accident.",
            answer: "James Dean",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This hip-hop artist was born in Gary, and is known for his lyrical technique and collaboration with the DJ Madlib.",
            answer: "Freddie Gibbs",
            picture: null,
            doubleJeopardy: false,
            price: 600
        },
        {
            question: "Getting his start with the People's Temple in Indianapolis, this cult leader is infamous for orchestrating a mass suicide of over 900 people.",
            answer: "Jim Jones",
            picture: "jimjones.png",
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "Frequently collaborating with his two brothers, this Jazz guitarist is famous for his plucking technique.",
            answer: "Wes Montgomery",
            picture: null,
            doubleJeopardy: false,
            price: 1000
        }
    ],
    "Political History": [
        {
            question: "The last time a Democrat won the state of Indiana in a presidental race was during this person's presidential campaign.",
            answer: "Barack Obama",
            picture: null,
            doubleJeopardy: false,
            price: 200
        },
        {
            question: "While only being in the position for 10 days, this former White House communications director generated countless memes from his press conferences.",
            answer: "Anthony Scaramucci",
            picture: "whitehouseguy.png",
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "Prior to being married to Don Jr, this former California District Attorney was in a relationship with this notable Democrat mayor and governor.",
            answer: "Gavin Newsom",
            picture: null,
            doubleJeopardy: false,
            price: 600
        },
        {
            question: "Known for his immense aura when he would play the saxophone while being a sitting president.",
            answer: "Bill Clinton",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "In the mid 19th century, this political party was the opposition to the newely formed Democratic Party and would later become the Republican Party.",
            answer: "Whigs",
            picture: null,
            doubleJeopardy: false,
            price: 1000
        }
    ],
    "Zoomer Slang": [
        {
            question: "This word is used to describe someone's innate reputation or charisma.",
            answer: "Aura",
            picture: null,
            doubleJeopardy: false,
            price: 200
        },
        {
            question: "Becoming popular in the late 2010s, this word refers to what happens when one hits a cannabis cart for a long period.",
            answer: "Blinker",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This word comes from a 1984 B-horror film of the same name, but was later popularized by online incel communities.",
            answer: "Chud",
            picture: null,
            doubleJeopardy: false,
            price: 600
        },
        {
            question: "Originating from online bodybuilding forums, this word is used to describe the act of physically dominating someone.",
            answer: "Mogging",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "While you might use this to “settle some beef“, it can also literally mean a beef frank.",
            answer: "Glizzy",
            picture: null,
            doubleJeopardy: false,
            price: 1000
        }
    ],
    "Musical Mayhem": [
        {
            question: "“Do You Hear The People Sing“ and “Bring Him Home“ are songs from this musical.",
            answer: "Les Miserables",
            picture: null,
            doubleJeopardy: false,
            price: 200
        },
        {
            question: "As a fusion of samba and jazz, bossa nova was formed in the 1950s from this country.",
            answer: "Brazil",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This orchestral style from the early 20th century swing era had an alliterative name.",
            answer: "Big Band",
            picture: "bigband.png",
            doubleJeopardy: false,
            price: 600
        },
        {
            question: "In this musical, swooning teenagers sing “We Love You Conrad“ to rock star Conrad Birdie.",
            answer: "Bye Bye Birdie",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "The process of changing from one key or tonality to another is called this.",
            answer: "Transposition/Modulation",
            picture: null,
            doubleJeopardy: false,
            price: 1000
        }
    ],
    "Sports": [
        {
            question: "This hall of fame quarterback led the Colts to the 2007 Super Bowl.",
            answer: "Peyton Manning",
            picture: null,
            doubleJeopardy: false,
            price: 200
        },
        {
            question: "This team was originally from Baltimore before relocating to Indianapolis following the 1983 season.",
            answer: "Colts",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This Indianapolis team hosts “Pucks & Paws“, where you can bring your furry friend to watch the game.",
            answer: "Indy Fuel",
            picture: null,
            doubleJeopardy: false,
            price: 600
        },
        {
            question: "While this NHL team cannot actually fly, they do hold the record for most Stanley Cups.",
            answer: "Detroit Red Wings",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "This Polish-American baseball player is the only one to ever hit a walk-off home run in the world series.",
            answer: "Bill Mazeroski",
            picture: null,
            doubleJeopardy: false,
            price: 1000
        }
    ]
}
export const board2data: board = {
    "Television": [
        {
            question: "Taking its name from an Orwell character, this show has contestants living in a house together and causing drama.",
            answer: "Big Brother",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "In this 2010s fantasy political drama, the character Littlefinger famous said “Chaos is a ladder“.",
            answer: "Game of Thrones",
            picture: "littlefinger.png",
            doubleJeopardy: false,
            price: 800
        },
		{
            question: "Characters on this series include Sally Draper & office manager Joan Holloway.",
            answer: "Mad Men",
            picture: null,
            doubleJeopardy: false,
            price: 1200
        },
        {
            question: "When “Cheers“ ended, this character played by Kelsey Grammer moved to Seattle and became a radio shrink.",
            answer: "Frasier",
            picture: null,
            doubleJeopardy: false,
            price: 1600
        },
        {
            question: "This 1970s sitcom about Army doctors during the Korean War and was a spinoff for a film with the same name.",
            answer: "M*A*S*H",
            picture: null,
            doubleJeopardy: false,
            price: 2000
        }
    ],
    "Artists": [
        {
            question: "For the 2026 reboot of “The Muppets Show“, this pop singer performed a rendition of her hit song “Manchild“.",
            answer: "Sabrina Carpenter",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "In the late 2000s, this party girl pop star released the hit single “TiK ToK“.",
            answer: "Ke$ha",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "It was never this group's intention to brag when they released their song “Misery Business“.",
            answer: "Paramore",
            picture: null,
            doubleJeopardy: false,
            price: 1200
        },
        {
            question: "This American folk singer-songwriter is known for hits like “Bad, Bad Leroy Blame“ and “Time in a Bottle“.",
            answer: "Jim Croce",
            picture: null,
            doubleJeopardy: false,
            price: 1600
        },
        {
            question: "Before releasing hit albums like “The Fame“ and “Artpop“, she was an extra on “The Sopranos“.",
            answer: "Lady Gaga",
            picture: null,
            doubleJeopardy: false,
            price: 2000
        }
    ],
    "Hoosier History": [
        {
            question: "This popular nickname for Indianapolis originated from the city's 1920s Jazz scene.",
            answer: "Naptown",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "Prior to 1816, this city was the capital of Indiana.",
            answer: "Corydon",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "This northern city is famous for being the home of the Studebaker automobile company.",
            answer: "South Bend",
            picture: null,
            doubleJeopardy: false,
            price: 1200
        },
        {
            question: "This Hoosier college was the first university in the United States to have a Computer Science department.",
            answer: "Purdue University",
            picture: null,
            doubleJeopardy: true,
            price: 1600
        },
        {
            question: "This Indianapolis suburb was originally named after the biblical town of Bethlehem, but was changed after the town was incorporated.",
            answer: "Carmel",
            picture: null,
            doubleJeopardy: false,
            price: 2000
        }
    ],
    "World Geography": [
        {
            question: "This body of water connects the Gulf of Oman to the Persian Gulf.",
            answer: "Strait of Hormuz",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This body of water is the lowest land below sea level, and aptly named due to it's high salinity.",
            answer: "Dead Sea",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "In this frigid region, Russia's Lena River rises to Lake Baikal and flows north to the Laptev Sea.",
            answer: "Siberia",
            picture: null,
            doubleJeopardy: false,
            price: 1200
        },
        {
            question: "Canada's smallest providence, and the only one not connected to the North American mainland.",
            answer: "Prince Edward Island",
            picture: null,
            doubleJeopardy: false,
            price: 1600
        },
        {
            question: "This long stretch of South American rainforest acts as a natural barrier between North and South America.",
            answer: "Darien Gap",
            picture: null,
            doubleJeopardy: false,
            price: 2000
        }
    ],
    "Ancient Slang": [
        {
            question: "When someone will not stop talking, you can tell them to quit doing this.",
            answer: "Yapping",
            picture: null,
            doubleJeopardy: false,
            price: 400
        },
        {
            question: "This word is used to refer to someone who is uncool or conventional.",
            answer: "Square",
            picture: null,
            doubleJeopardy: false,
            price: 800
        },
        {
            question: "One might call this phrase “buzzing“, as it refers to something being superb.",
            answer: "Bee's Knees",
            picture: null,
            doubleJeopardy: false,
            price: 1200
        },
        {
            question: "If someone has immense courage or initative, you might say they have a lot of this.",
            answer: "Moxie",
            picture: null,
            doubleJeopardy: false,
            price: 1600
        },
        {
            question: "This two word phrase includes the word for a person's chest and means to speak honestly.",
            answer: "Unbosom Yourself",
            picture: null,
            doubleJeopardy: false,
            price: 2000
        }
    ]
}