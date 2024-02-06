import { useState ,useEffect} from "react";
import Card from './Card';
import './cardCss.css'
import Footer from "./Footer";
import Searchbar from "./Searchbar";
const Body=()=>{
    
    const [locals,setLocals]= useState([
        {id:1,name:"Chandramouleshwara temple",location:"Location: Near Unkal Lake", desc:"The Chandramauleshwara Temple, sometimes referred to as the Candramauḷĩśvara or Chandramouleshwara temple at Unkal, is an 11th-century Shiva temple with Chalukyan architecture in Unkal (Hubballi), Karnataka, India. The temple has a square plan architecture with four entrances from the cardinal directions, while illustrating the sandhara plan found in Sanskrit texts on architecture. It originally had a Chaturmukha (four-faced) Linga in the center of the temple and many more mandapas (halls), but the surviving structure is much smaller. The temple preserves an early example of a relatively uncommon Hindu architecture. The temple is also notable for how it integrates the artwork of Shaivism, Vaishnavism, Shaktism and Vedic deities together. It is a Monument of National importance and is designated as a Protected Monument under the Ancient Monuments and Archaeological Sites Act (1958). It is managed by the Dharwad circle of the Archaeological Survey of India (ASI).",time:"Timing: 6AM – 7.30PM", review: ["Peaceful"]},
        {
            id:2,name:"Unkal Lake",location:"Location: 6km from Hubli Railway Junction",desc:"At a distance of 6 km from Hubli Junction Railway Station, Unkal Lake is a stunning lake situated at the Unkal locality of Hubli. It is one of the must include places in Hubli Tour Packages. Unkal Lake is a beautiful picnic spot and a major source of drinking water for the twin cities of Hubli & Dharwad. About 110 years old, the lake covers an area of nearly 200 acres. This site is renowned as the 'Karma Bhoomi' of Shri Siddappajja, who was born in 1859. He eloped from his home at the age of 14 to find a Guru and resided in Unkal Mailarlings Temple. Shri Siddappajja died in 1921 and since then a 'Jatre' is organized at this site. This picturesque water body is surrounded by a lush garden that mesmerizes travelers coming here in search of peace and serenity. This is among the most popular places to visit in Hubli. Most people visit this lake during evening times as it offers an enchanting sunset view. Another attraction of this lake is the statue of Swami Vivekananda that has been placed in the middle of the lake. This is a famous family picnic spot where the locals are found strolling in the park and enjoy boating in the serene waters of the lake.",time:"Timing: 8AM – 8PM", review: ["Peaceful"]
        },
        {
            id:3,name:"Budhan Gudda",location:"Location: 6km from Hubli Railway Junction",desc:"A sunset point and basaveshwara temple on the hill top which gives a complete view of Hubli.",time:"Timing: Good to return before 7.30PM if you are travelling alone.", review: ["Peaceful"]
        },
        {
            id:4,name:"Tolankere",location:"Location: Shirur park road",desc:"Hubballi Dharwad Smart City Abhivruddhi Society (HDSCAS) can take great pride in saying that they have been the driving force behind the development of Tolankere Lake into one of the most beautiful and peaceful landmarks in the twin cities. The landscaping of the lake and the park could have been completed by 2020 if not for the onset of covid. The officials of HDSCAS took it upon themselves to make good of the delay caused by the pandemic and it is down to their efforts that Tolankere Lake is one of the most talked about recreational spot in the twin cities. The Lake and the attached park is spread across a 17 acre land parcel. The lake falls acts as a conjunction between Shirur park and Gokul Road, two of the most happening and vibrant areas of Hubballi. Extensive thought has gone into the planning and execution of the park surrounding the lake. The amenities provided in the park are aimed at improving the general well-being of the patrons that would frequent the lake.",time:"Timing: 6-9AM, 5-7PM.", review: ["Peaceful"]
        },
        {
            id:5,name:"Siddharoodha Matth",location:"Location: 4km from Hubli Railway Station",desc:"At a distance of 4 km from Hubli Junction Railway Station, Siddharoodha Math is a sacred place located at Srinivasa Nagar locality of Hubli. It is one of the popular places of Pilgrimage in Hubli, and among the must-visit places as part of Hubli Tour. Siddharoodha Math is an important religious institution that preaches Advaita philosophy. This math was established by the followers of Sri Siddharoodha Swami who took his Samadhi in 1929. Born in the year 1836, Swami Sidharoodha is known to have been a famous spiritual leader who preached Advaitha Philosophy in the 18th century. The math has seen notable visitors like Lokmanya Bal Gangadhar Tilak and Mahatma Gandhi. The Siddharoodha Math is an excellent shrine that features a marble statue of Swami Sidharoodha. The environment of the math is extremely soothing and hence, the visitors are sure to get a positive feeling when they are here. This math is a center for spreading the teachings of Swami Siddharoodha that includes his 'Advaita' philosophy. Numerous devotees of the Swami visit this math during the Car Festival that takes place on the occasion of Maha Shivaratri.",time:"Timing: 6AM-6PM.", review: ["Peaceful"]
        },
        {
            id:6,name:"Moorsaavr Matth",location:"Location: 2km from Hubli Railway Station",desc:"Moorusavira Math is a religious center dedicated to the accomplishment of the universal good by fostering the growth of educational, social, religious, cultural and medical institutions. Built in 12th century, the monument comprise of the tomb of Shri Gurusiddeshwar Swamy, the founder member of the math. It is said that, during the Kalyan Revolutionistic period, Sri Channabasavanna (one of the most revered saints of the Lingayat faith) who was accompanied by 3,000 Shivasharanas (saints), halted here on their way to the pilgrimage center 'Ulavi'. On request of Channabasavanna, the saints reside there to spread the universal Gospel and he installed Shree Gurusiddheshwar as the head of three thousand Shivasharanas. In Kannda three thousand means 'mooru savira' and the place came to be known as Moorusavira Math. ",time:"Timing: 6AM-6PM.", review: ["Peaceful"]
        },
        
    ]);
    locals.push({id:7,name:"Hello hubballi",location:"neear hubli",desc:"ille ello",time:"67",review:["aagullo"]})

    const [historicals,setHistoricals]= useState([
        {id:7,name:"Badami",location:"Distance: 104Km from Hubli city", desc:"Badami, formerly known as Vatapi, is a town and headquarters of a taluk by the same name in the Bagalkot district of Karnataka, India. It was the regal capital of the Badami Chalukyas from CE 540 to 757. It is famous for its rock cut monuments such as the Badami cave temples, as well as the structural temples such as the Bhutanatha temples, Badami Shivalaya and Jambulingesvara Temple, Badami|Jambulingesvara temple. It is located in a ravine at the foot of a rugged, red sandstone outcrop that surrounds Agastya lake. Badami has been selected as one of the heritage cities for HRIDAY - Heritage City Development and Augmentation Yojana scheme of Government of India. Nearest Railway Station is Badami Railway Station which is just 2 km from Badami city.Nearest Airport is Hubli Airport which is 109 km away from Badami." ,time:"Timing: 9AM – 5.30PM", review: ["Peaceful"]
    },
        {
            id:8,name:"Hampi",location:"Distance: 162km from Hubli city",desc:"Hampi or Hampe, also referred to as the Group of Monuments at Hampi, is a UNESCO World Heritage Site located in Hampi town, Vijayanagara district, east-central Karnataka, India.Located in Karnataka near the modern-era city of Hosapete, Hampi's ruins are spread over 4,100 hectares (16 sq mi) and it has been described by UNESCO as an 'austere, grandiose site' of more than 1,600 surviving remains of the last great Hindu kingdom in South India that includes forts, riverside features, royal and sacred complexes, temples, shrines, pillared halls, mandapas, memorial structures, water structures and others. Hampi predates the Vijayanagara Empire, it is mentioned in the Ramayana and the Puranas of Hinduism as Pampaa Devi Tirtha Kshetra.[3][9] Hampi continues to be an important religious centre, housing the Virupaksha Temple, an active Adi Shankara-linked monastery and various monuments belonging to the old city.",time:"Timing: 8AM – 8PM", review: ["Peaceful"]
        },
        {
            id:9,name:"Aihole",location:"138km from Hubli City",desc:"Aihole (pronounced 'Eye-hoḷé'), also referred to as Aivalli, Ahivolal or Aryapura, is a historic site of ancient and medieval era Buddhist, Hindu and Jain monuments in Karnataka, India that dates from the sixth century through the twelfth century CE.[1][2][3] Most of the surviving monuments at the site date from the 7th to 10th centuries.[4] Located around an eponymous small village surrounded by farmlands and sandstone hills, Aihole is a major archaeological site featuring over one hundred and twenty stone and cave temples spread along the Malaprabha river valley, in Bagalakote district. Hunagunda Taluk Distance 35km. Aihole, along with nearby Badami (Vatapi), emerged by the 6th century as the cradle of experimentation with temple architecture, stone artwork, and construction techniques. This resulted in 16 types of free-standing temples and 4 types of rock-cut shrines. The experimentation in architecture and arts that began in Aihole yielded the group of monuments at Pattadakal, a UNESCO World Heritage Site.",time:"Timing: 6AM – 5.30PM", review: ["Peaceful"]
        },
        {
            id:10,name:"Pattadakal",location:"124km from Hubli City",desc:"Pattadakal, also called Paṭṭadakallu or Raktapura, is a complex of 7th and 8th century CE Hindu and Jain temples in northern Karnataka (India). Located on the west bank of the Malaprabha River in Bagalakote district, this UNESCO World Heritage Site[1][2] is 14 miles (23 km) from Badami and about 6 miles (9.7 km) from Aihole, both of which are historically significant centres of Chalukya monuments.[3][4] The monument is a protected site under Indian law and is managed by the Archaeological Survey of India (ASI). UNESCO has described Pattadakal as 'a harmonious blend of architectural forms from northern and southern India' and an illustration of 'eclectic art' at its height.[2] The Hindu temples are generally dedicated to Shiva, but elements of Vaishnavism and Shaktism theology and legends are also featured. The friezes in the Hindu temples display various Vedic and Puranic concepts, depict stories from the Ramayana, the Mahabharata, the Bhagavata Purana, as well as elements of other Hindu texts, such as the Panchatantra and the Kirātārjunīya.[2][6] The Jain temple is only dedicated to a single Jina.[7] The most sophisticated temples, with complex friezes and a fusion of Northern and Southern styles, are found in the Papanatha and Virupaksha temples.[8][9] The Virupaksha temple is an active house of Hindu worship.",time:"Timing: 6AM – 5.30PM", review: ["Peaceful"]
        },
        {
            id:11,name:"Lakkundi",location:"67km from Hubli City",desc:"Lakkundi, also referred to as Lokkugundi, was a major city prior to the 14th-century, and is now a village in Gadag District of Karnataka, India. By 10th-century, it was already a major economic and commerce center with mint operations for South India, one mentioned in Kannada and Sanskrit inscriptions and texts. By 12th-century, a galaxy of Hindu and Jain temples had been consecrated here, along with public infrastructure such as step wells and water reservoirs. Among the major temples are the Brahma Jinalaya (oldest), Mallikarjuna, Lakshminarayana, Manikeshwara, Naganatha, Kumbheshvara, Nanneshwara, Someshwara, Narayana, Nilakanteshwara, Kasivisesvara (most sophisticated, ornate), Virabhadhara, Virupaksha, and others. As its importance and wealth grew, Lakkundi became one of the capitals of the Hoysalas.",time:"Timing: 6AM – 5.30PM", review: ["Peaceful"]
        },
        {
            id:12,name:"SahasraLinga",location:"108km from Hubli City",desc:"Sahasralinga is a pilgrimage place, located around 14 km from the Sirsi Taluk in the district of Uttara Kannada of Karnataka state in India. It is in the river Shalmala and is famous for being the location where around a thousand lingas are carved on rocks in the river and on its banks. Sahasralingeshwara temple in Uppinangady is situated on the banks of the river Netravati and Kumaradhara, where a thousand lingas are found. The story goes like: After Kurukshetra war, Krishna suggests Pandavas to get 'Pushpa Mruga' to hold Rajasooryadwara Yaga. Bheema dashed to 'Mahendragiri' to fetch it. On the way he meets Hanuman taking rest, which is stretched on his way. Bheema finds it difficult to cross the tail of Hanuman and requests to remove the tail. Hanuman asks Bheema to lift tail but he struggles and fails.Later both realised that both are divine powers. Hanuman learns the purpose of Bheem's journey and offers him hair from his tail for the protection. Bheem, after reaching Mahendragiri meets pushpamruga and it agrees on a condition that it would follow him only a 'manovega'-speed at which mind moves. Bheem agrees trusting the tail hair. While leading the animal, whenever Bheem finds he cannot keep the pace with the animal, he drops a hair. Strangely a 'Shivalinga' appears just on the spot and Pushpamruga proceeds only after worshipping the linga. This gives Bheem sufficient time to adjust his speed. When they reach the place called 'Uppinangady', Bheem finds difficult and drops remaining one thousand tail hair. A thousand lingas appear and by the time animal completes worship, Bheem safely reaches Yagamantap. Thus it is believed that a thousand Lingas are found in the temple vicinity.One out of those Lingas found in the middle of the river sand becomes visible in the month of February.",time:"Timing: 9AM – 10AM is preferred", review: ["Peaceful"]
        },

    ]);
        const [waters,setWaters]= useState([
            {id:13,name:"Jog Falls",location:"Distance: 152Km from Hubli city", desc:"Jog Falls is created by the Sharavati dropping 253 m (830 ft), making it the third-highest waterfall in India after the Nohkalikai Falls with a drop of 335 m (1,099 ft) in Meghalaya[11] and the Dudhsagar Falls with a drop of 310 m (1,020 ft) in Goa. Sharavathi, a river which rises at Ambutirtha, next to Nonabur, in the Thirthahalli taluk takes a northwesterly course by Fatte petta, receives the Haridravati on the right below Pattaguppe and the Yenne Hole on the left above Barangi. Then, it bends to the west, precipitates itself down the Jog Falls (aka Gersoppa Falls), and passes the village of Gersoppa (properly Geru-Sappe), which is some 30 kilometres (19 mi) away, discharging into the Arabian Sea at Honnavar in Uttara Kannada." ,time:"Timing: 8AM – 8PM", review: ["Peaceful"]
        },
            {
                id:14,name:"Magod Falls",location:"Distance: 90km from Hubli city",desc:"Magod Falls is a group of waterfalls in Karnataka, India, where the river Bedti falls from a height of nearly 200 metres (660 ft) in two steps. The falls are located about 16 km (9.9 mi) from the town of Yellapur and 58 km (36 mi) from Sirsi, in the district of Uttara Kannada, and are easily accessible from several lakes and towns. Magod Falls is a popular waterfall in North Canara (Uttar Kannada) district, in Yellapur taluk, on river Bedti. Here, the Bedthi River takes two distinct leaps, to hurtle from a height of 650 feet into a rocky ravine. The thickly wooded countryside, the roar of gushing water and a beautiful view combine to make this spot an ideal choice for outings. Well built walkway with handrails is available from the parking area till Magod Fall viewpoint.",time:"Timing: 9AM – 6PM", review: ["Peaceful"]
            },
            {
                id:15,name:"Sathodi Falls",location:"72km from Hubli City",desc:"Sathodi Falls is a picturesque rectangular-shaped waterfall in the Western Ghats. Several unknown streams converge near Kallaramane Ghat to become Sathodi Falls and plunge from a height of about 15 m to create a picturesque picnic spot. In between the bushes and the rocky terrain, there are small pathways leading to the waterfalls. The Falls is located in the dense Western Ghats and remains active for the most part of the year. Water below the falls is not too deep and is ideal for a dip/short swim. However, caution is advised, particularly with children. Sathodi Falls is an ideal picnic spot with family, because of beautiful surroundings. Few home stay options are available near the falls. Yellapura city (27 kms) has basic accommodations.  More stay options are available in Dandeli (80 kms), Hubballi (97 kms) and Sirsi (75 kms).",time:"Timing: 7AM – 5PM", review: ["Peaceful"]
            },
            {
                id:16,name:"Vibhooti Falls",location:"130km from Hubli City",desc:"Vibhooti Falls near Gokarna is a hidden gem that you must add to the itinerary to get your dose of serenity. Head down to Vibhooti Falls which is about 42 kilometres from Gokarna, perfect for a long drive and picnic. It is a hidden gem in the Western ghats and a spot one shouldn't miss while travelling to Gokarna. Situated amidst the limestone deposits and large rocks, this 70 feet multi-tiered waterfalls is picturesque and peaceful. It is popularly believed that the water that flows through the Yana rocks is the sacred ash and so the waterfall is named as Vibhooti falls. The water here is crystal clear and you can sit down here and enjoy the view. The entry fee is priced at INR 20 (inclusive of parking) and once you reach the entry, walk down for about 1.5 kilometres to reach Vibhooti Falls. The walk down to the falls is a bit tiring but they do have benches where you can sit and relax before heading down again. There is a lifeguard posted at the falls which makes it safe for swimming or taking a dip at the falls. Vibhooti falls is highly prone to leeches, so make sure to carry packets of salt as first aid if they stick on to you. People usually spend about half a day at the waterfalls. Best time to visit Vibhooti Falls is from October to January and during monsoons, due to the heavy rainfall, there are usually restrictions considering the safety of the tourists.",time:"Timing: 6AM – 5PM", review: ["Peaceful"]
            },
            {
                id:17,name:"Lucington/Unchalli Falls",location:"139km from Hubli City",desc:"At a distance of 36 km from Sirsi, and 54 km from Jog Falls, Unchalli Falls is a magnificent waterfall situated at Heggarni in the Uttara Kannada district of Karnataka. It is one of the best waterfalls in Karnataka, and among the must include places in Jog Falls Tour Packages. Also known as Lushington Falls, Unchalli Falls is created by a 116 m drop in the Aghanashini River. The Aghanashini River here takes a deep plunge to create this spectacular waterfall. The waterfall is named after J.D. Lushington, a district collector of the British empire who discovered it in 1845. This waterfall is also known as Keppa Joga because of the deafening sound it makes. It is one of the top Jog Falls tourist places. Heggarne is the nearest village to Unchalli Falls, which is about 5 km away and the last 2 km to be covered on foot. The trek path is wide and not very steep. There is no path to reach the bottom of the falls/pool and any attempt is also very dangerous. For the convenience of the visitor, the government built two viewpoints to view the falls but the dense forest surrounding makes it difficult to get a complete view of the falls. The best time to visit the falls is from July to September when it will be in full bloom. It attracts locals and tourists from all over the world, with its magnificent, misty cascade of water.",time:"Timing: 6AM – 6PM", review: ["Peaceful"]
            },
        
    

    ]);

    const [hikes,setHikes]= useState([
        {id:18,name:"Yana",location:"Distance: 135Km from Hubli city", desc:"The gigantic crystalline-like rock formations of Yana stand proud and tall among the evergreen forests of the Western Ghats in Uttara Kannada District. Yana is an ideal destination for pilgrims, trekkers, and nature-lovers alike. A 16km trek through the cool and breezy hills brings you to the foot of the mountain where the rock formations begin. At the top, a stunning sight awaits you: the awesome Bhairaveshwara and Jaganmohini shikharas (or peaks). A cave temple dedicated to Lord Shiva lies below these shikharas. The vagaries of time have caused these limestone structures to turn blackish brown and lots of beehives dot the rock surface. A popular legend associated with Yana holds that Bhasmasura, an evil demon, performed penance to Lord Shiva and obtained the power of reducing to ashes anybody on whose head he placed his hand. An ungrateful Bhasmasura, however, soon decided to test the boon on his benefactor. To escape from him, Lord Shiva came to earth and hid in this place. Lord Vishnu taking the form of a beautiful woman Mohini, challenged the demon to dance and made him touch his own head and thereby reducing him to ashes. Yana rocks are an adventure seeker’s ultimate destination. Yanà in Uttara Kannada district attracts trekkers and climbers from all over the world." ,time:"Timing: 6AM – 5PM", review: ["Peaceful"]
    },
        {
            id:19,name:"Jenukallu Gudda",location:"Distance: 87km from Hubli city",desc:"Jenukallu Gudda is around 20 KM from Yellapur town. The Bedti River cuts across the forest & hills around here to bounce its way to join the Arabian Sea gushing down the hills The breathtaking view of the valley is worth a visit and this place gives you the magical myriad hues of a spectacular sunset",time:"Timing: 6AM – 6PM", review: ["Peaceful"]
        },
        {
            id:20,name:"Syntheri Rocks",location:"103km from Hubli City",desc:"At a distance of 31 km from Dandeli and 16 km from Ulavi, Syntheri Rock is monolithic granite structure with a height of 300 feet, which is located in the dense forests of Dandeli Wildlife Sanctuary. It is one of the top Dandeli tourist places to visit. Syntheri Rock is a huge, massive limestone rock formed due to volcanic eruptions some million years ago. It is named after an English lady called Ms. Cinthera who is believed to have discovered this place in 20th century. River Kaneri passes along the side of this rock. Owing to the flow of the river from the vicinity, erosion has resulted in the rocks getting hollowed. The corners of this rock cave are inhabited by numerous pigeons and honeybees. Entry to the venue is controlled by forest department. The site can be reached either by jeep or by walk through the dense forest from the entrance. At the entrance visitors need to pay nominal entry fee and vehicles can go up to the parking area from where visitors need to climb down to reach the base. There is a 15-20 minute walk from the vehicle parking to the rock. A flight of 200 odd steps downwards lead you to the base. The steps are very steep and various types of rocks found in the forest are displayed along the steps. Entry fee: Rs. 20 per person and Rs. 20 per car.",time:"Timing: 10AM – 5.30PM", review: ["Peaceful"]
        },
        {
            id:21,name:"Ulavi Caves",location:"120km from Hubli City",desc:"Ulavi is a small village located about 30 kilometers from the nearest town of Dandeli in Karnataka. It is here that the head of Lingayat sect, Chinnabasveshwara meditated in the caves situated around the village. There are a couple of caves some of which are quite difficult to trek to. We visited Vibhuti Kanja which is a big stalegmite reaching the top of the cave and is in shape of a shiva linga. The trek further on leads to Akal gavi, the cow cave which has stones in shape of cow udders. It is said that the sage had unending supply of cow milk dripping from these udder shaped rocks. Even today water drips from these udder shaped rocks. It is a strenous trek to reach Akalgavi and even difficult to reach the cave which is located at a considerable height from the base of the formation. The return trek is a steep climb up the hill back to the parked car. Please ensure to carry ample water as nothing is available at the location as these caves are located deep inside the jungles of Dandeli.",time:"Timing: 10AM – 5PM", review: ["Peaceful"]
        },
        
        


]);

const [places,setPlaces]=useState([]);

const getplaces=async ()=>{
    const responce=await fetch('/api/places/getplaces')
    const json=await responce.json()
    console.log(json.Name)
    if(responce.ok){
        setPlaces(json)
    }
}

useEffect(() => {
   
    /*localStorage.setItem('locals', JSON.stringify(locals));
    localStorage.setItem('waters', JSON.stringify(waters));
    localStorage.setItem('hikes', JSON.stringify(hikes));
    localStorage.setItem('historicals', JSON.stringify(historicals));*/
    getplaces();
  }, []);

function Searchbar(){
    const [query,setQuery]=useState("");
    return(
      <div className="Searchbar">
        <input type="text" placeholder="Search the place" className="search" onChange={(e)=> setQuery(e.target.value)}></input>
        <ul className="list">
          {locals.filter((l)=>
           l.name.toLowerCase().includes(query)).map((l) => (
            <li key={l.id} className="listItems">{l.name} </li>
            ))}
        </ul>
      </div>
    )
  }
    return(
    
        <div className="cat " id='cat'>
        <h1>Hubli Local</h1>
        <div className="local scroll" id={places.id}>
            <Card places={places}/>
        </div>
        {/* <h1>Historical</h1>
        <div className="historical scroll" id={historicals.id}>
            <Card places={historicals}/>
        </div>
        <h1>WaterFalls</h1>
        <div className="water scroll" id={waters.id}>
            <Card places={waters}/>
        </div>
        <h1>Trekking Spots</h1>
        <div className="hike scroll" id={hikes.id}>
            <Card places={hikes}/>
        </div>  */}
        
        </div>

       
        
    );

}
// return(
//     // <div className="body" id={place.id}>
//     //     <Card places={place}/>
//     // </div>
//     <div className="main-container">
//     <div className="heading">
//       <h1 className="heading__title">Places</h1>
//     </div>
   
//     <div className="local">
      
//         <div className="card__icon"><i className="fas fa-bolt"></i></div>
//         <div className="body" id={local.id}>
//          <Card places={local}/>
//      </div>            
//     </div>
//     <div className="historical">
      
//         <div className="card__icon"><i className="fas fa-bolt"></i></div>
//         <div className="body" id={historical.id}>
//          <Card places={historical}/>
//      </div>            
//     </div>
//     <div className="water">
      
//         <div className="card__icon"><i className="fas fa-bolt"></i></div>
//         <div className="body" id={water.id}>
//          <Card places={water}/>
//      </div>            
//     </div>
//     <div className="hike">
      
//         <div className="card__icon"><i className="fas fa-bolt"></i></div>
//         <div className="body" id={hike.id}>
//          <Card places={hike}/>
//      </div>            
//     </div>
//   </div>
//   );
  
//   }
export default Body;