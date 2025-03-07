import { Track } from '../types/Track'
import { SetlistData } from '../types/Setlist'

const debut: Track[] = [{
    title: 'Tim McGraw',
    venue: 'AZ-1',
    isPlayed: true
  },
  {
    title: 'Picture To Burn',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Teardrops On My Guitar',
    venue: 'TN-1',
    isPlayed: true
  },
  {
    title: 'A Place in this World',
    venue: 'TX-2',
    isPlayed: true
  },
  {
    title: 'Cold As You',
    venue: 'TX-3',
    isPlayed: true
  },
  {
    title: 'The Outside',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Tied Together with a Smile',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Stay Beautiful',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Should\'ve Said No',
    venue: 'MA-1',
    isPlayed: true
  },
  {
    title: 'Mary\'s Song',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Our Song',
    venue: 'NV-1',
    isPlayed: true
  },
  {
    title: 'I\'m Only Me When I\'m With You',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Invisible',
    venue: 'MA-2',
    isPlayed: true
  },
  {
    title: 'A Perfectly Good Heart',
    venue: '?',
    isPlayed: false
  }
]

const fearless: Track[] = [{
    title: 'Fearless',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Fifteen',
    venue: 'TN-2',
    isPlayed: true
  },
  {
    title: 'Love Story',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Hey Stephen',
    venue: 'PA-3',
    isPlayed: true
  },
  {
    title: 'White Horse',
    venue: 'NV-2',
    isPlayed: true
  },
  {
    title: 'You Belong With Me',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Breathe',
    venue: 'MI-2',
    isPlayed: true
  },
  {
    title: 'Tell Me Why',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'You\'re Not Sorry',
    venue: 'TX-1',
    isPlayed: true
  },
  {
    title: 'The Way I Loved You',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Forever & Always',
    venue: 'PA-2',
    isPlayed: true
  },
  {
    title: 'The Best Day',
    venue: 'PA-3',
    isPlayed: true
  },
  {
    title: 'Change',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Jump Then Fall',
    venue: 'TX-3',
    isPlayed: true
  },
  {
    title: 'Untouchable',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Come In with the Rain',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Superstar',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'The Other Side of the Door',
    venue: 'GA-1',
    isPlayed: true
  },
  {
    title: 'Today Was a Fairytale',
    venue: 'TX-2',
    isPlayed: true
  },
  {
    title: 'You All Over Me',
    venue: 'CH-2',
    isPlayed: true
  },
  {
    title: 'Mr. Perfectly Fine',
    venue: 'PA-1',
    isPlayed: true
  },
  {
    title: 'We Were Happy',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'That\'s When',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Don\'t You',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Bye Bye Baby',
    venue: '?',
    isPlayed: false
  },
]

const speakNow: Track[] = [{
    title: 'Mine',
    venue: 'TN-3',
    isPlayed: true
  },
  {
    title: 'Sparks Fly',
    venue: 'TN-1',
    isPlayed: true
  },
  {
    title: 'Back to December',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Speak Now',
    venue: 'FL-1',
    isPlayed: true
  },
  {
    title: 'Dear John',
    venue: 'MN-2',
    isPlayed: true
  },
  {
    title: 'Mean',
    venue: 'FL-3',
    isPlayed: true
  },
  {
    title: 'The Story of Us',
    venue: 'PA-2',
    isPlayed: true
  },
  {
    title: 'Never Grow Up',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Enchanted',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Better than Revenge',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Innocent',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Haunted',
    venue: 'MI-1',
    isPlayed: true
  },
  {
    title: 'Last Kiss',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Long Live',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Ours',
    venue: 'TX-1',
    isPlayed: true
  },
  {
    title: 'If This Was a Movie',
    venue: 'MN-1',
    isPlayed: true
  },
  {
    title: 'Superman',
    venue: '?',
    isPlayed: false
  },
]

const red: Track[] = [{
    title: 'State of Grace',
    venue: 'AZ-2',
    isPlayed: true
  },
  {
    title: 'Red',
    venue: 'MA-3',
    isPlayed: true
  },
  {
    title: 'Treacherous',
    venue: 'FL-1',
    isPlayed: true
  },
  {
    title: 'I Knew You Were Trouble',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'All Too Well',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: '22',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'I Almost Do',
    venue: 'MI-1',
    isPlayed: true
  },
  {
    title: 'We Are Never Ever Getting Back Together',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Stay Stay Stay',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'The Last Time',
    venue: 'PA-1',
    isPlayed: true
  },
  {
    title: 'Holy Ground',
    venue: 'NJ-2',
    isPlayed: true
  },
  {
    title: 'Sad Beautiful Tragic',
    venue: 'TX-1',
    isPlayed: true
  },
  {
    title: 'The Lucky One',
    venue: 'TX-3',
    isPlayed: true
  },
  {
    title: 'Everything Has Changed',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Starlight',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Begin Again',
    venue: 'TX-3',
    isPlayed: true
  },
  {
    title: 'The Moment I Knew',
    venue: 'IL-3',
    isPlayed: true
  },
  {
    title: 'Come Back... Be Here',
    venue: 'PA-1',
    isPlayed: true
  },
  {
    title: 'Girl at Home',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Ronan',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Better Man',
    venue: 'MA-1',
    isPlayed: true
  },
  {
    title: 'Nothing New',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Babe',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Message In a Bottle',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'I Bet You Think About Me',
    venue: 'GA-3',
    isPlayed: true
  },
  {
    title: 'Forever Winter',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'Run',
    venue: '?',
    isPlayed: false
  },
  {
    title: 'The Very First Night',
    venue: '?',
    isPlayed: false
  },
]

const nine: Track[] = [{
    title: 'Welcome to New York',
    venue: 'NJ-3',
    isPlayed: true
  },
  {
    title: 'Blank Space',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Style',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Out of the Woods',
    venue: 'TN-2',
    isPlayed: true
  },
  {
    title: 'All You Had to Do Was Stay',
    venue: 'MI-2',
    isPlayed: true
  },
  {
    title: 'Shake It Off',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'I Wish You Would',
    venue: 'IL-1',
    isPlayed: true
  },
  {
    title: 'Bad Blood',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Wildest Dreams',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'How You Get the Girl',
    venue: 'GA-3',
    isPlayed: true
  },
  {
    title: 'This Love',
    venue: 'PA-2',
    isPlayed: true
  },
  {
    title: 'I Know Places',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Clean',
    venue: 'TX-2/NJ-3',
    isPlayed: true
  },
  {
    title: 'Wonderland',
    venue: 'TX-1',
    isPlayed: true
  },
  {
    title: 'You Are in Love',
    venue: '',
    isPlayed: false
  },
  {
    title: 'New Romantics',
    venue: '',
    isPlayed: false
  },
]

const reputation: Track[] = [{
    title: '...Ready for It?',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'End Game',
    venue: '',
    isPlayed: false
  },
  {
    title: 'I Did Something Bad',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Don\'t Blame Me',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Delicate',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Look What You Made Me Do',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'So It Goes...',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Gorgeous',
    venue: 'GA-2',
    isPlayed: true
  },
  {
    title: 'Getaway Car',
    venue: 'NJ-1',
    isPlayed: true
  },
  {
    title: 'King of My Heart',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Dancing with Our Hands Tied',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Dress',
    venue: '',
    isPlayed: false
  },
  {
    title: 'This Is Why We Can\'t Have Nice Things',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Call It What You Want',
    venue: '',
    isPlayed: false
  },
  {
    title: 'New Years Day',
    venue: '',
    isPlayed: false
  },
]

const lover: Track[] = [{
    title: 'I Forgot That You Existed',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Cruel Summer',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Lover',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'The Man',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'The Archer',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'I Think He Knows',
    venue: 'MA-3',
    isPlayed: true
  },
  {
    title: 'Miss Americana & the Heartbreak Prince',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Paper Rings',
    venue: 'MN-1',
    isPlayed: true
  },
  {
    title: 'Cornelia Street',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Death by a Thousand Cuts',
    venue: 'TX-2',
    isPlayed: true
  },
  {
    title: 'London Boy',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Soon You\'ll Get Better',
    venue: '',
    isPlayed: false
  },
  {
    title: 'False God',
    venue: 'NJ-2',
    isPlayed: true
  },
  {
    title: 'You Need to Calm Down',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Afterglow',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Me!',
    venue: '',
    isPlayed: false
  },
  {
    title: 'It\'s Nice to Have a Friend',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Daylight',
    venue: 'MN-2',
    isPlayed: true
  },
]

const folklore: Track[] = [{
    title: 'the 1',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'cardigan',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'the last great american dynasty',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'exile',
    venue: '',
    isPlayed: false
  },
  {
    title: 'my tears ricochet',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'mirrorball',
    venue: 'AZ-1',
    isPlayed: true
  },
  {
    title: 'seven',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'august',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'this is me trying',
    venue: 'AZ-2',
    isPlayed: true
  },
  {
    title: 'illicit affairs',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'invisible string',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'mad woman',
    venue: 'FL-3',
    isPlayed: true
  },
  {
    title: 'epiphany',
    venue: '',
    isPlayed: false
  },
  {
    title: 'betty',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'peace',
    venue: '',
    isPlayed: false
  },
  {
    title: 'hoax',
    venue: '',
    isPlayed: false
  },
  {
    title: 'the lakes',
    venue: 'IL-1',
    isPlayed: true
  },
]

const evermore: Track[] = [{
    title: 'willow',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'champagne problems',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'gold rush',
    venue: 'PA-1',
    isPlayed: true
  },
  {
    title: '\'tis the damn season',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'tolerate it',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'no body, no crime',
    venue: '',
    isPlayed: false
  },
  {
    title: 'happiness',
    venue: '',
    isPlayed: false
  },
  {
    title: 'dorothea',
    venue: '',
    isPlayed: false
  },
  {
    title: 'coney island',
    venue: 'GA-1',
    isPlayed: true
  },
  {
    title: 'ivy',
    venue: '',
    isPlayed: false
  },
  {
    title: 'cowboy like me',
    venue: 'NV-2',
    isPlayed: true
  },
  {
    title: 'long story short',
    venue: '',
    isPlayed: false
  },
  {
    title: 'marjorie',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'closure',
    venue: '',
    isPlayed: false
  },
  {
    title: 'evermore',
    venue: '',
    isPlayed: false
  },
  {
    title: 'right where you left me',
    venue: '',
    isPlayed: false
  },
  {
    title: 'it\'s time to go',
    venue: '',
    isPlayed: false
  },
]

const midnights: Track[] = [{
    title: 'Lavender Haze',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Maroon',
    venue: 'NJ-1',
    isPlayed: true
  },
  {
    title: 'Anti-Hero',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Snow on the Beach',
    venue: 'NV-1',
    isPlayed: true
  },
  {
    title: 'You\'re On Your Own, Kid',
    venue: 'FL-2',
    isPlayed: true
  },
  {
    title: 'Midnight Rain',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Question...?',
    venue: 'MA-2',
    isPlayed: true
  },
  {
    title: 'Vigilante Shit',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Bejeweled',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Labyrinth',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Karma',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'Sweet Nothing',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Mastermind',
    venue: 'SETLIST',
    isPlayed: true
  },
  {
    title: 'The Great War',
    venue: 'FL-2',
    isPlayed: true
  },
  {
    title: 'Bigger Than the Whole Sky',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Paris',
    venue: '',
    isPlayed: false
  },
  {
    title: 'High Infidelity',
    venue: 'GA-2',
    isPlayed: true
  },
  {
    title: 'Glitch',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Would\'ve, Could\'ve, Should\'ve',
    venue: 'TN-3',
    isPlayed: true
  },
  {
    title: 'Dear Reader',
    venue: '',
    isPlayed: false
  },
  {
    title: 'Hits Different',
    venue: 'IL-3',
    isPlayed: true
  },
  {
    title: 'You\'re Losing Me',
    venue: '',
    isPlayed: false
  },
]

const misc: Track[] = [{
  title: 'I Don\'t Wanna Live Forever',
  venue: 'IL-2',
  isPlayed: true
}]

export const surpriseSongs: Track[] = [
  {
    title: 'Dear John',
    venue: 'MN-2',
    isPlayed: true
  },
  {
    title: 'Daylight',
    venue: 'MN-2',
    isPlayed: true
  }
] 

export enum Albums {
  DEBUT = 'debut',
  FEARLESS = 'fearless',
  SPEAK_NOW = 'speakNow',
  RED = 'red',
  NINETEEN_EIGHT_NINE = '1989',
  REPUTATION = 'reputation',
  LOVER = 'lover',
  FOLKLORE = 'folklore',
  EVERMORE = 'evermore',
  MIDNIGHTS = 'midnights',
  MISC = 'misc'
}

export const setlist: {[key in Albums]: SetlistData}= {
  "debut": {
    albumName: 'Taylor Swift',
    columnNumber: 1,
    albumNumber: 1,
    setList: debut,
    colorData: "#adffc2",
    headerCssStyle: {
      fontFamily: 'Debut',
      textAlign: "center",
    },
  },
  "fearless": {
    albumName: 'Fearless',
    columnNumber: 2,
    albumNumber: 2,
    setList: fearless,
    colorData: '#fff3ad',
    headerCssStyle: {
      fontFamily: 'Fearless',
      textAlign: "center",
    },
  },
  "speakNow": {
    albumName: 'Speak Now',
    columnNumber: 1,
    albumNumber: 3,
    setList: speakNow,
    colorData: 'plum',
    headerCssStyle: {
      fontFamily: 'Speak-Now',
      textAlign: "center",
    },
  },
  "red": {
    albumName: 'Red',
    columnNumber: 2,
    albumNumber: 4,
    setList: red,
    colorData: '#FF6666',
    headerCssStyle: {
      fontFamily: 'Impact, fantasy',
      textAlign: "center",
    },
  },
  "1989": {
    albumName: '1989',
    columnNumber: 1,
    albumNumber: 5,
    setList: nine,
    colorData: 'lightblue',
    headerCssStyle: {
      fontFamily: 'nine',
      textAlign: "center",
    },
  },
  "reputation": {
    albumName: 'reputation',
    columnNumber: 2,
    albumNumber: 6,
    setList: reputation,
    colorData: '#818589',
    headerCssStyle: {
      fontFamily: 'reputation',
      color: "black",
      textAlign: "center",
    },
  },
  "lover": {
    albumName: 'Lover',
    columnNumber: 1,
    albumNumber: 7,
    setList: lover,
    colorData: 'lightpink',
    headerCssStyle: {
      fontFamily: 'Lover',
      textAlign: "center",
    },
  }, 
  "folklore": {
    albumName: 'folklore',
    columnNumber: 2,
    albumNumber: 8,
    setList: folklore,
    colorData: '#D3D3D3',
    headerCssStyle: {
      fontFamily: 'folklore',
      textAlign: "center",
    },
  },
  "evermore": {
    albumName: 'evermore',
    columnNumber: 1,
    albumNumber: 9,
    setList: evermore,
    colorData: '#C4A484',
    headerCssStyle: {
      fontFamily: 'folklore',
      textAlign: "center",
    },
  },
  "midnights": {
    albumName: 'Midnights',
    columnNumber: 1,
    albumNumber: 10,
    setList: midnights,
    colorData: '#acace6',
    headerCssStyle: {
      fontFamily: 'Neue Haas Grotesk Display Pro',
      textAlign: "center",
    },
    dataViewClassName: 'bg-purple-600',
  },
  "misc": {
    albumName: 'Miscellaneous',
    columnNumber: 2,
    albumNumber: 11,
    setList: misc,
    colorData: '#F2D2BD',
    headerCssStyle: {
      fontFamily: 'Neue Haas Grotesk Display Pro',
      textAlign: "center",
    },
  },
}

// Used for API conversion
console.log(JSON.stringify(setlist));
