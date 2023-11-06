// Sun has radius of 1 and position of 0,0,0
import { PlanetData } from '../../types';
import { Vector3 } from 'three';

const planetsData: PlanetData[] = [
  {
    name: "Mercury",
    texturePath: "/images/bodies/mercury_2k.jpg",
    position: new Vector3(1.2, 0, 0),
    radius: 0.1,
    rotationSpeed: 1,
    tilt: 0.034,
    orbitSpeed: 1,
    moons: [],
    description: "Mercury, the swift messenger of the Roman gods, befittingly lends its name to the smallest planet in our solar system and the closest to the Sun. With a scorching daytime temperature of up to 430°C and a frigid -180°C at night, Mercury is a world of extremes, primarily due to its thin atmosphere that can neither retain heat nor shield the surface from the Sun's blistering rays. This rocky planet zips around the Sun every 88 Earth days, the shortest orbital period of all the planets. Mercury's cratered terrain tells a story of a geologically active past, with smooth plains and long, cliff-like ridges that stretch for hundreds of kilometers. Despite its proximity to the Sun, Mercury is not the hottest planet, a title Venus holds due to its thick, heat-trapping atmosphere. Mercury's mysteries continue to fascinate astronomers, from its molten core to the ice in its shadowy craters."
  },
  {
    name: "Venus",
    texturePath: "/images/bodies/venus_surface_2k.jpg",
    position: new Vector3(1.6, 0, 0),
    radius: 0.15,
    rotationSpeed: 1,
    tilt: 177.36,
    orbitSpeed: 0.8,
    moons: [],
    description: "Venus, often heralded as Earth's twin due to its similar size and proximity, presents an ironic twist with its harsh, hellish conditions. Cloaked in a dense atmosphere composed mainly of carbon dioxide, with clouds of sulfuric acid, Venus boasts a runaway greenhouse effect that makes it the hottest planet in our solar system, with surface temperatures averaging a scorching 465°C. This unforgiving climate has crushed and melted all but the most robust of man-made spacecrafts sent to its surface. Despite its inhospitable environment, Venus spins leisurely on its axis in a retrograde direction, taking 243 Earth days to complete a single rotation, longer than its 225-day orbit around the Sun. This peculiar motion means a day on Venus is longer than its year. Venus's thick clouds reflect sunlight, making it the brightest natural object in the night sky after the Moon, often visible to the naked eye as the morning or evening star."
  },
  {
    name: "Earth",
    texturePath: "/images/bodies/earth_2k.jpg",
    position: new Vector3(2, 0, 0),
    radius: 0.15,
    rotationSpeed: 1,
    tilt: 23.44,
    orbitSpeed: 0.6,
    wobble: true,
    moons: [],
    description: "Earth, the cradle of humanity, is the third planet from the Sun and the only known astronomical object to harbor life. Its defining feature is the presence of liquid water, covering about 71% of its surface, a unique trait among the celestial bodies of our solar system. This abundance of water, along with a stable climate, is facilitated by Earth's protective atmosphere, which wards off harmful solar radiation while retaining life-sustaining warmth. Earth's diverse ecosystems range from the frozen arctic to the scorching deserts, teeming with millions of species that contribute to a delicate balance. The planet's rotation on its tilted axis results in the changing seasons. Human cultures have been shaped by this rhythm of nature, just as they have left their mark on the planet's surface. Earth is not just a home but a dynamic living system that continues to evolve and surprise us with its resilience and beauty."
  },
  {
    name: "Mars",
    texturePath: "/images/bodies/mars_2k.jpg",
    position: new Vector3(2.8, 0, 0),
    radius: 0.13,
    rotationSpeed: 0.5,
    tilt: 25.19,
    orbitSpeed: 0.4,
    moons: [],
    description: "Mars, the fourth planet from the Sun, captivates as the focus of human exploration and the potential of extraterrestrial life. Known as the Red Planet, its signature hue comes from iron oxide or rust dusting its surface. Mars' thin atmosphere, composed mostly of carbon dioxide, provides scant protection from solar and cosmic radiation. The planet is marked by the highest volcano and the deepest, longest canyon in the solar system: Olympus Mons and Valles Marineris, respectively. While Mars is a frigid desert today, evidence such as ancient riverbeds and minerals that only form in liquid water suggests it once had a warmer, wetter climate. With a day slightly longer than Earth's and seasons like our own due to a similar axial tilt, Mars provides familiar rhythms in an alien world. Its two moons, Phobos and Deimos, are thought to be captured asteroids, orbiting their parent planet as silent witnesses to the solar system's history."
  },
  {
    name: "Jupiter",
    texturePath: "/images/bodies/jupiter_2k.jpg",
    position: new Vector3(4.2, 0, 0),
    radius: 0.25,
    rotationSpeed: 0.2,
    tilt: 3.13,
    orbitSpeed: 0.2,
    moons: [],
    description: "Jupiter, the colossal guardian of the inner planets, reigns as the fifth from the Sun and the largest in our solar system. This gas giant is known for its striking bands of clouds swirling across its atmosphere, the result of immense storms that rage within the planet's hydrogen and helium envelope. Jupiter's Great Red Spot, a storm larger than Earth, has been observed for over 400 years, hinting at the planet's turbulent nature. With a rapid rotation completing in just under 10 hours, Jupiter has the shortest day of all the planets, which causes a noticeable bulging at the equator. This giant hosts a vast entourage of moons, with at least 79 confirmed, including Ganymede, the largest moon in the solar system, surpassing even the planet Mercury in size. Jupiter's powerful magnetic field is the largest of any planet, stretching far into space and suggesting a molten core beneath its stormy exterior. This majestic planet's presence has influenced numerous aspects of our solar system's formation and evolution."
  },
  {
    name: "Saturn",
    texturePath: "/images/bodies/saturn_2k.jpg",
    position: new Vector3(5.2, 0, 0),
    radius: 0.2,
    rotationSpeed: 0.1,
    tilt: 26.73,
    orbitSpeed: 0.1,
    rings: {
      texturePath: "/images/rings/saturn_rings.png",
      size: [0.15, 0.4],
    },
    moons: [],
    description: "Saturn, the sixth planet from the Sun, is most celebrated for its magnificent rings. This gas giant is adorned with seven conspicuous rings made up of countless small particles that range in size from micrometers to meters, composed mostly of water ice with a trace of rocky debris. Saturn's atmospheric bands are more subtle and muted than Jupiter’s, but its storms are no less fierce, including a hexagon-shaped pattern at its north pole unlike any phenomena on Earth. With over 80 moons, Saturn's system is a celestial family in its own right, with Titan, its largest moon, larger than the planet Mercury and possessing a thick atmosphere capable of sustaining stable bodies of surface liquid. Despite its size, Saturn is the least dense planet in the solar system; if there were a bathtub large enough to hold it, Saturn would float. The planet's fast rotation—about 10.5 hours—causes it to have an oblate shape, with an equatorial bulge that is easily seen through a small telescope."
  },
  {
    name: "Uranus",
    texturePath: "/images/bodies/uranus_2k.jpg",
    position: new Vector3(6.2, 0, 0),
    radius: 0.18,
    rotationSpeed: 0.07,
    tilt: 97.77,
    orbitSpeed: 0.08,
    moons: [],
    description: "Uranus stands out in the solar system for its unique sideways rotation, with its axis tilted over 90 degrees relative to its orbit. This ice giant, the seventh planet from the Sun, is wrapped in a pale blue atmosphere of hydrogen, helium, and methane, the latter of which gives it its cyan hue. Uranus is often referred to as an ice giant due to the frigid slush of water, ammonia, and methane ice that comprises its bulk. Discovered by William Herschel in 1781, it was the first planet found with a telescope, expanding the known boundaries of our solar system. Uranus completes an orbit every 84 Earth years, with each pole getting 42 years of continuous sunlight followed by 42 years of darkness. Its magnetic field is peculiar, tilted 60 degrees from its axis of rotation and offset from the center of the planet. Encircling Uranus are 13 faint rings and 27 known moons, all named after characters from the works of Shakespeare and Alexander Pope."
  },
  {
    name: "Neptune",
    texturePath: "/images/bodies/neptune_2k.jpg",
    position: new Vector3(7.2, 0, 0),
    radius: 0.18,
    rotationSpeed: 0.06,
    tilt: 28.32,
    orbitSpeed: 0.06,
    rings: {
      texturePath: "/images/rings/neptune_rings.png",
      size: [0.15, 0.4],
    },
    moons: [],
    description: "Neptune, the eighth and farthest known planet from the Sun, is a mysterious blue world, shrouded in a thick atmosphere of hydrogen, helium, and traces of methane. Its deep azure color is the result of methane absorbing red light and reflecting the blue hues. As an ice giant, Neptune has a core enveloped by a mantle of water, ammonia, and methane ices, overarched by an atmosphere with dynamic weather patterns and the fastest winds in the solar system, reaching speeds of over 2,000 kilometers per hour. Neptune's discovery in 1846 was a triumph of mathematics and astronomy, as it was located through predictions rather than through direct observation. It takes 165 Earth years to complete one orbit around the Sun, with its day lasting approximately 16 hours. The planet's ring system is faint and consists of five primary rings. It also boasts 14 known moons, with Triton being the largest, a frigid world that orbits Neptune in a direction opposite to the planet's rotation, hinting that it may have been captured by Neptune's gravity."
  },
];

export default planetsData;
