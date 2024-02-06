const mongoose=require('mongoose')
const Blogs=require('./models/Blogs')
const password=encodeURIComponent('Sukritb#123456')
mongoose.connect(`mongodb+srv://blogs:${password}@cluster0.q6updbe.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=>{
        add()
        console.log('db connected')
    })
    .catch((err)=>{
        console.log(err)
    })

const dummydata=[
    {
        title: 'Exploring the Wonders of Nature',
        img: 'https://media.istockphoto.com/id/917911572/photo/standing-woman-on-the-hill-against-mountain-valley-at-bright-sunny-day-landscape-with-girl.jpg?s=1024x1024&w=is&k=20&c=CdAO7r8O3xWGG_v3aqJCCEWwQTRG2PIvZqyZS0933T0=',
        desc: `Discover the breathtaking beauty of nature as we explore picturesque landscapes and share insights into the wonders of our planet. Nature's wonders captivate the senses, offering a symphony of colors, sounds, and fragrances that harmonize in perfect balance.
        From the intricate patterns of a delicate butterfly's wings to the towering majesty of ancient redwood trees, nature's diversity is a tapestry of awe-inspiring beauty.
        The rhythmic dance of ocean waves against sandy shores and the melodious songs of birds perched on swaying branches create a soothing symphony of natural music.
        Exploring the wonders of nature reveals the intricacies of ecosystems, where every living organism plays a crucial role in maintaining the delicate equilibrium of life.
        The vibrant hues of a sunrise or sunset paint the sky with a palette that changes seamlessly, leaving observers in wonder at the ever-shifting canvas above.`,
        author: 'NatureEnthusiast123',
        views: '5000 views'
    },
    {
        title: 'Tech Trends 2024: What to Expect',
        img: 'https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak=',
        desc: `Dive into the future of technology as we anticipate the groundbreaking trends of 2024. From advancements in artificial intelligence and quantum computing to the evolution of augmented reality, this exploration unveils the cutting-edge innovations shaping our digital landscape.
        Witness the integration of 5G technology, transforming connectivity and enabling new possibilities in communication and data transfer. Robotics and automation continue to revolutionize industries, while sustainable tech solutions gain prominence in addressing environmental challenges.
        Cybersecurity takes center stage as digital threats evolve, and blockchain technology expands its applications beyond cryptocurrency. The Internet of Things (IoT) reaches new heights, connecting devices in innovative ways to enhance efficiency and convenience.
        As we navigate the dynamic tech landscape of 2024, join us in forecasting the next wave of transformative technologies that will redefine the way we live, work, and interact with the digital world.`,
        author: 'TechGuru21',
        views: '8000 views'
    },
    {
        title: 'Delicious Recipes for Every Home Chef',
        img: 'https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8=',
        desc: `Embark on a culinary journey with our collection of mouthwatering recipes designed for every home chef. From savory entrees to delectable desserts, these culinary delights cater to diverse tastes and skill levels, ensuring a delightful cooking experience.
        Explore the art of flavor combinations, innovative cooking techniques, and time-tested family favorites. Whether you're a seasoned cook or just starting in the kitchen, our recipes provide step-by-step guidance, making each dish a rewarding masterpiece.
        Indulge in the aromas of freshly baked goods, sizzling stir-fries, and hearty stews as you bring these recipes to life in your own kitchen. Discover the joy of creating delicious meals that not only tantalize the taste buds but also bring loved ones together around the dining table.`,
        author: 'ChefCuisine',
        views: '3500 views'
    },
    {
        title: 'Space Exploration: Journey to the Stars',
        img: 'https://media.istockphoto.com/id/157639696/photo/purple-space-stars.jpg?s=612x612&w=0&k=20&c=fkLtGZxUS9UPlLJUTeGjvvURT0u-vtxvj5sAYbDNrH4=',
        desc: `Embark on an awe-inspiring journey through the cosmos with our exploration of space in 2024. From the latest advancements in rocket technology to the mysteries of distant galaxies, this odyssey takes you on a thrilling ride through the wonders of our universe.
        Witness the launch of cutting-edge space missions, delve into the science of exoplanets, and explore the potential for human settlement on other celestial bodies. Space telescopes unveil breathtaking images of nebulae, supernovae, and distant planets, offering a glimpse into the vastness and beauty of the cosmos.
        As we push the boundaries of space exploration, join us in unraveling the mysteries of the stars and the possibilities that lie beyond our planet. From cosmic phenomena to the search for extraterrestrial life, this journey promises to inspire and ignite the curiosity of space enthusiasts and aspiring astronomers alike.`,
        author: 'SpaceExplorerX',
        views: '6500 views'
    },
    {
        title: 'Health and Wellness: Mind-Body Connection',
        img: 'https://media.istockphoto.com/id/1255236230/photo/body-mind-soul-spirit.jpg?s=612x612&w=0&k=20&c=GR0wKYibbxqL1BxQYXY8vvSq_BzOieiQSorNrlVl1MA=',
        desc: `Embark on a transformative exploration of health and wellness, delving into the intricate connection between mind and body. Our journey explores holistic approaches to well-being, encompassing mental, physical, and emotional dimensions for a balanced and fulfilling life.
        Discover mindfulness practices, stress-relief techniques, and the profound impact of positive thinking on overall health. Dive into the world of nutrition, exercise, and self-care, uncovering the secrets to cultivating a resilient and vibrant mind-body connection.
        From the latest trends in wellness to ancient practices that stand the test of time, join us in navigating the path to optimal health. Embrace a holistic lifestyle that nurtures not only the body but also the mind, fostering a harmonious connection that enhances your overall quality of life.`,
        author: 'WellnessWarrior',
        views: '4200 views'  
    },
    {
        title: 'Travel Diaries: Hidden Gems Around the World',
        img: 'https://media.istockphoto.com/id/1176439818/photo/making-a-memory.jpg?s=612x612&w=0&k=20&c=QdOhqkmo-9hxfrspVSA0hDdb2W3qITaJgPKqr3J4anc=',
        desc: `Embark on a globetrotter's adventure with our travel diaries, uncovering the hidden gems scattered across the world's diverse landscapes. From quaint villages tucked away in rolling hills to untouched natural wonders off the beaten path, this journey invites you to explore the lesser-known treasures of our planet.
        Immerse yourself in the rich cultures, unique traditions, and breathtaking scenery that define these hidden gems. Follow the footsteps of intrepid travelers as they share their encounters with local cuisines, off-the-grid adventures, and encounters with indigenous communities, providing a glimpse into the authenticity and charm of these undiscovered destinations.
        Join us in unraveling the stories behind each hidden gem, inspiring your wanderlust and encouraging a deeper appreciation for the diverse tapestry of our world. Get ready to add new destinations to your travel bucket list and embark on a journey to explore the extraordinary and the unexplored.`,
        author: 'WanderlustExplorer',
        author: 'GlobeTrotter123',
        views: '5800 views'
    },
    {
        title: 'The Art of Culinary Delights: A Food Lover’s Paradise',
        img: 'https://media.istockphoto.com/id/1226801480/photo/top-view-traditional-turkish-coffee-in-porcelain-cup-with-copper-coffee-pot-and-turkish.jpg?s=612x612&w=0&k=20&c=WI9nbcFQpXzIJF18Ph_ehcKJBeFa-sBq5wRcWPgnIHw=',
        desc: 'https://example.com/culinary-delights-image.jpg',
        desc: `Embark on a gastronomic journey into the heart of culinary artistry, where flavors dance on the palate and every dish tells a story. "The Art of Culinary Delights" invites food lovers to indulge in a paradise of delectable creations, exploring the diverse and exquisite world of gastronomy.
        Delve into the mastery of culinary techniques, savoring the fusion of unique ingredients and innovative presentations. From classic recipes with a modern twist to avant-garde culinary experiments, this culinary odyssey celebrates the creativity and passion that chefs infuse into their craft.
        Join us in discovering the cultural influences, culinary traditions, and gastronomic wonders that make each dish a masterpiece. Whether you're a seasoned epicurean or a budding food enthusiast, this journey promises to tantalize your taste buds and deepen your appreciation for the artistry behind every culinary delight.`,
        author: 'FoodieExplorer',
        views: '7200 views'
    },
    {
        title: 'Tech Trends 2024: Navigating the Future of Innovation',
        img: 'https://media.istockphoto.com/id/1406742992/photo/businessman-draws-increase-arrow-graph-corporate-future-growth-year-2022-to-2023-planning.jpg?s=612x612&w=0&k=20&c=QmIxmVKDPyM8sW9QLrVYsSPvTrV-PXd90qr5f1F1gJA=',
        desc:`Embark on a captivating journey through the realm of technology as we navigate the future of innovation in 2024. "Tech Trends 2024" explores the cutting-edge advancements that will shape our digital landscape, from artificial intelligence and quantum computing to the evolution of augmented reality.
        Uncover the transformative power of 5G technology, witness the integration of robotics in various industries, and explore the expanding applications of blockchain beyond cryptocurrency. As cybersecurity takes center stage and the Internet of Things (IoT) continues to revolutionize connectivity, this exploration provides insights into the dynamic and ever-evolving world of tech.
        Join us in forecasting the trends that will redefine how we live, work, and connect in the digital age. From groundbreaking developments to revolutionary breakthroughs, this journey through the future of tech promises to inspire tech enthusiasts, innovators, and anyone curious about the possibilities that lie ahead.`,
        author: 'TechInnovator',
        views: '8900 views'
      },
      {
        title: 'Beyond the Canvas: Exploring Modern Art Movements',
        img: 'https://media.istockphoto.com/id/923181658/vector/on-kandinskys-motives.jpg?s=612x612&w=0&k=20&c=8so-ehxqC2QJ46Oh4lWGOoHhXCLsQRXKoR63u6kxnzA=',
        desc: `Embark on a visual odyssey into the world of modern art, where creativity knows no bounds. "Beyond the Canvas" invites art enthusiasts to explore the diverse and avant-garde movements that have shaped the contemporary art scene.
        Delve into the bold expressions of abstract art, the thought-provoking messages conveyed by street art, and the innovative techniques employed by multimedia artists. From surrealism to minimalism, witness the evolution of artistic expression that defies traditional boundaries.
        Join us in unraveling the stories behind iconic artworks, understanding the cultural influences that fuel artistic revolutions, and appreciating the impact of technology on the modern art landscape. Whether you're a seasoned art connoisseur or a curious newcomer, this exploration promises to expand your perspective and ignite a passion for the ever-evolving world of modern art.`,
        author: 'ArtEnthusiast',
        views: '5200 views'
      }

]

async function add(){
    await Blogs.deleteMany({})
    await Blogs.insertMany(dummydata)
    console.log('data inserted')
}