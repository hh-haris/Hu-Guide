import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { X } from 'lucide-react';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Avatar, AvatarFallback } from '../components/ui/avatar';

const CityDetail = () => {
  const { citySlug } = useParams();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const getCityData = (slug: string) => {
    const cityData: { [key: string]: any } = {
      'budapest': {
        name: 'Budapest',
        livingCost: 'The cost of living may vary from city to city and also depends on individual spending habits. In big cities like Budapest, monthly expenses can be around 250–300 euros if you spend carefully. However, you can get a clearer idea by using the official cost of living calculator, which helps estimate expenses for a specific city.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
    
        universities: [
          {
            name: 'Budapest Metropolitan University',
           
          },
          {
            name: 'Budapest University of Economics and Business',
         
          },
          {
            name: 'Budapest University of Technology and Economics',
           
          },
          {
            name: 'Corvinus University of Budapest',
           
          },
          {
            name: 'Dennis Gabor University of Applied Sciences',
            
          },
          {
            name: 'Eötvös Loránd University',
        
          },
          {
            name: 'Ludovika University of Public Service',
            
          },
          {
            name: 'Obuda University',
          
          },
          {
            name: 'Semmelweis University',
            
          }
        ]
      },
      'debrecen': {
        name: 'Debrecen',
        livingCost: 'Debrecen is the second largest city after Budapest, so the monthly cost of living can be expected to be close to that of Budapest. However, it may vary from city to city and also depends on individual spending habits. You can get a clearer idea by using the official cost of living calculator below, which helps estimate expenses for a specific city.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
        fun: 'Debrecen is known for its vibrant student life with numerous festivals including the famous Flower Carnival. The city offers beautiful parks, historic sites like the Great Reformed Church, and thermal baths. Students enjoy the lively downtown area, cultural events, and the nearby Hortobágy National Park.',
        universities: [
          {
            name: 'University of Debrecen',
            description: 'Hungary\'s second-largest university offering comprehensive programs across all fields including medicine, engineering, agriculture, and humanities with excellent research facilities and international recognition.'
          }
        ]
      },
      'pecs': {
        name: 'Pécs',
        livingCost: 'Pécs is the fifth largest city in Hungary, and the cost of living may be relatively higher. However, it can vary from city to city and also depends on individual spending habits. You can get a clearer idea by using the official cost of living calculator below, which helps estimate expenses for a specific city.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
        fun: 'Pécs is a UNESCO World Heritage city with rich cultural heritage, beautiful architecture, and vibrant arts scene. Students enjoy exploring the historic city center, visiting museums, attending cultural festivals, and experiencing the famous Pécs nightlife. The nearby Mecsek Hills offer great hiking opportunities.',
        universities: [
          {
            name: 'University of Pécs',
            description: 'A comprehensive university with over 650 years of history, offering strong programs in medicine, humanities, sciences, and business with beautiful historic campus and modern facilities.'
          }
        ]
      },
      'gyor': {
        name: 'Győr',
        livingCost: 'The cost of living in Hungary varies depending on the city and individual spending habits. Larger cities may have higher expenses, while smaller cities can be more affordable. To get a clearer idea of expected monthly costs in a specific location, use the official cost of living calculator below.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
        fun: 'Győr combines historic charm with modern amenities. Students enjoy the beautiful baroque city center, thermal baths, and proximity to Vienna (just 1 hour away). The city offers various cultural events, sports facilities, and easy access to both Austrian and Slovakian borders for weekend trips.',
        universities: [
          {
            name: 'Széchenyi István University',
            description: 'A dynamic technical university known for automotive engineering, mechanical engineering, and business programs with strong industry partnerships, especially with Audi and other automotive companies.'
          }
        ]
      },
      'baja': {
        name: 'Baja',
        livingCost: 'The cost of living in Hungary varies depending on the city and individual spending habits. Larger cities may have higher expenses, while smaller cities can be more affordable. To get a clearer idea of expected monthly costs in a specific location, use the official cost of living calculator below.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
        fun: 'Baja is a charming small city on the Danube River known for its fish soup festival and water sports. Students enjoy river activities, cycling, fishing, and the peaceful small-town atmosphere. The city offers a quiet study environment with beautiful natural surroundings.',
        universities: [
          {
            name: 'Eötvös József College',
            description: 'A small, intimate college offering teacher training and liberal arts programs with personalized attention, small class sizes, and close student-faculty relationships.'
          }
        ]
      },
      'dunaujvaros': {
        name: 'Dunaújváros',
        livingCost: 'The cost of living in Hungary varies depending on the city and individual spending habits. Larger cities may have higher expenses, while smaller cities can be more affordable. To get a clearer idea of expected monthly costs in a specific location, use the official cost of living calculator below.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
        fun: 'Dunaújváros is a planned city with modern architecture and green spaces. Students enjoy the Danube riverfront, parks, sports facilities, and cultural center. The city offers a quiet, focused study environment with easy access to Budapest for weekend entertainment.',
        universities: [
          { 
            name: 'University of Dunaújváros',
            description: 'A modern university focusing on engineering, business, and information technology with strong connections to local industries and emphasis on practical, career-oriented education.'
          }
        ]
      },
      'eger': {
        name: 'Eger',
        livingCost: 'The cost of living in Hungary varies depending on the city and individual spending habits. Larger cities may have higher expenses, while smaller cities can be more affordable. To get a clearer idea of expected monthly costs in a specific location, use the official cost of living calculator below.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
        fun: 'Eger is famous for its historic castle, thermal baths, and wine cellars in the Valley of Beautiful Women. Students enjoy wine tasting, exploring baroque architecture, visiting the castle, and relaxing in thermal baths. The city hosts various cultural festivals and events.',
        universities: [
          {
            name: 'Eszterházy Károly Catholic University',
            description: 'A Catholic university with strong programs in education, humanities, and natural sciences, offering a values-based education with excellent teacher training programs and research opportunities.'
          }
        ]
      },
      'godollo': {
        name: 'Gödöllő',
        livingCost: 'The cost of living in Hungary varies depending on the city and individual spending habits. Larger cities may have higher expenses, while smaller cities can be more affordable. To get a clearer idea of expected monthly costs in a specific location, use the official cost of living calculator below.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
        fun: 'Gödöllő is home to the beautiful Royal Palace and offers a peaceful, green environment. Students enjoy palace tours, horseback riding, agricultural festivals, and easy access to Budapest for entertainment. The city combines rural charm with urban accessibility.',
        universities: [
          {
            name: 'Hungarian University of Agriculture and Life Sciences, MATE',
            description: 'Hungary\'s leading agricultural university offering programs in veterinary medicine, agriculture, food science, and environmental studies with extensive research facilities and practical training opportunities.'
          }
        ]
      },
      'kecskemet': {
        name: 'Kecskemét',
        livingCost: 'The cost of living in Hungary varies depending on the city and individual spending habits. Larger cities may have higher expenses, while smaller cities can be more affordable. To get a clearer idea of expected monthly costs in a specific location, use the official cost of living calculator below.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
        fun: 'Kecskemét is known for its Art Nouveau architecture, cultural events, and proximity to the Great Plain. Students enjoy exploring the historic city center, attending festivals, visiting the Kodály Institute, and experiencing traditional Hungarian culture. The city offers a perfect blend of tradition and modernity.',
        universities: [
          {
            name: 'John von Neumann University',
            description: 'A modern university specializing in computer science, engineering, and business with strong emphasis on technology, innovation, and practical skills development for the digital age.'
          }
        ]
      },
      'miskolc': {
        name: 'Miskolc',
        livingCost: 'The cost of living in Hungary varies depending on the city and individual spending habits. Larger cities may have higher expenses, while smaller cities can be more affordable. To get a clearer idea of expected monthly costs in a specific location, use the official cost of living calculator below.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
        fun: 'Miskolc offers unique attractions including the famous Cave Bath, historic downtown, and nearby Bükk National Park. Students enjoy thermal baths, hiking, exploring caves, and winter sports. The city provides a good balance of urban amenities and natural beauty.',
        universities: [
          {
            name: 'University of Miskolc',
            description: 'A technical university with strong programs in engineering, materials science, and earth sciences, known for its research in mining, metallurgy, and mechanical engineering with modern laboratories.'
          }
        ]
      },
      'nyiregyhaza': {
        name: 'Nyíregyháza',
        livingCost: 'The cost of living in Hungary varies depending on the city and individual spending habits. Larger cities may have higher expenses, while smaller cities can be more affordable. To get a clearer idea of expected monthly costs in a specific location, use the official cost of living calculator below.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
        fun: 'Nyíregyháza is known for the Sóstó Zoo and thermal baths, beautiful parks, and cultural events. Students enjoy the zoo, aqua park, museums, and festivals. The city offers a relaxed lifestyle with good recreational facilities and proximity to the Ukrainian border for cultural exchange.',
        universities: [
          {
            name: 'University of Nyíregyháza',
            description: 'A comprehensive university offering programs in education, humanities, sciences, and engineering with focus on regional development and teacher training in a supportive academic environment.'
          }
        ]
      },
      'sopron': {
        name: 'Sopron',
        livingCost: 'The cost of living in Hungary varies depending on the city and individual spending habits. Larger cities may have higher expenses, while smaller cities can be more affordable. To get a clearer idea of expected monthly costs in a specific location, use the official cost of living calculator below.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
        fun: 'Sopron is a beautiful medieval city near the Austrian border with rich history and wine culture. Students enjoy exploring the historic old town, wine tasting, hiking in the Alps foothills, and easy access to Vienna. The city offers a perfect blend of Hungarian and Austrian cultures.',
        universities: [
          {
            name: 'University of Sopron',
            description: 'Specialized university focusing on forestry, wood sciences, and environmental studies with unique programs in sustainable development and natural resource management in a beautiful natural setting.'
          }
        ]
      },
      'szeged': {
        name: 'Szeged',
        livingCost: 'The cost of living in Hungary varies depending on the city and individual spending habits. Larger cities may have higher expenses, while smaller cities can be more affordable. To get a clearer idea of expected monthly costs in a specific location, use the official cost of living calculator below.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
        fun: 'Szeged is known as the "City of Sunshine" with beautiful architecture, the Tisza River, and vibrant cultural life. Students enjoy the Open-Air Festival, riverside activities, exploring the historic city center, and the famous Szeged paprika culture. The city offers excellent recreational facilities.',
        universities: [
          {
            name: 'University of Szeged',
            description: 'A prestigious research university with excellent programs in medicine, sciences, humanities, and law, known for high academic standards, research excellence, and beautiful campus facilities.'
          }
        ]
      },
      'veszprem': {
        name: 'Veszprém',
        livingCost: 'The cost of living in Hungary varies depending on the city and individual spending habits. Larger cities may have higher expenses, while smaller cities can be more affordable. To get a clearer idea of expected monthly costs in a specific location, use the official cost of living calculator below.',
        jobSituation: 'In big cities like Budapest, job opportunities are generally better, though they still vary from city to city. Students can work up to 24 hours per week, with earnings depending on location and job type. In smaller cities, finding a job can take time. Common student jobs include food delivery, store work, and other service roles, while securing a professional job related to one’s field of study is uncommon and extremely rare in smaller cities.',
        fun: 'Veszprém is known as the "City of Queens" with beautiful baroque architecture and Lake Balaton nearby. Students enjoy exploring the historic castle district, visiting Lake Balaton (30 minutes away), attending cultural events, and experiencing the vibrant student life in this charming hilltop city.',
        universities: [
          {
            name: 'University of Pannonia',
            description: 'A technical university specializing in engineering, information technology, and business with strong programs in chemical engineering, computer science, and modern research facilities.'
          }
        ]
      }
    };
    return cityData[slug] || {
      name: 'Unknown City',
      livingCost: 'Information not available.',
      jobSituation: 'Information not available.',
      fun: 'Information not available.',
      universities: []
    };
  };

  const cityData = getCityData(citySlug || '');

  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-14">
        <div className="mobile-container py-6">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">{'>'}</span>
            <Link to="/cities" className="hover:text-foreground">Cities</Link>
            <span className="mx-2">{'>'}</span>
            <span className="text-brand-orange">{cityData.name}</span>
          </div>

          {/* City Title */}
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="font-secondary text-3xl font-bold text-brand-orange mb-5"
>
  {cityData.name}
</motion.h1>




{/* Living Cost Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="mb-6"
>
  <h2 className="font-secondary text-xl font-bold text-brand-blue mb-3">Living Cost</h2>
  <p className="text-muted-foreground text-sm leading-relaxed">
    {cityData.livingCost}
  </p>

  <motion.div className="mt-4">
    <motion.a
      href="https://studyinhungary.hu/living-in-hungary/menu/your-costs-of-living.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-brand-light-green text-foreground rounded-lg font-primary font-medium hover:bg-opacity-80 smooth-transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Living Cost Calculator
              </motion.a>
            </motion.div>
          </motion.div>

      {/* Job Situation Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="mb-6"
>
  <h2 className="font-secondary text-xl font-bold text-brand-blue mb-4">
    Job Situation
  </h2>
  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
    {cityData.jobSituation}
  </p>

  {/* Single Universities Card */}
  <div className="mb-7">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Card
        className="overflow-hidden cursor-pointer rounded-lg hover:shadow-xl active:scale-[0.98] transition-all duration-300"
        onClick={() => setActiveModal('universities')}
      >
        <CardContent className="p-0">
          <img
            src="/Uni.jpg"
            alt="Universities"
            className="w-full h-28 sm:h-32 object-cover"
          />
        </CardContent>
      </Card>
    </motion.div>
  </div>
</motion.div>

        

       
        </div>
      </main>

      {/* Universities Modal */}
<AnimatePresence>
  {activeModal === 'universities' && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
                      className="bg-background rounded-lg max-w-sm w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-secondary text-lg font-bold text-brand-orange">
              Universities in {cityData.name}
            </h2>
            <button
              onClick={closeModal}
                              className="p-1 hover:bg-muted rounded transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* University List */}
          <div className="flex flex-col">
            {cityData.universities.map((university: any, index: number) => (
              <div key={index} className="flex flex-col">
                <span
                  className="font-secondary text-sm text-brand-blue py-2 px-1 leading-relaxed tracking-wide transition-colors duration-200 hover:text-brand-orange focus:text-brand-orange active:text-brand-orange"
                >
                  {university.name}
                </span>
                {index < cityData.universities.length - 1 && (
                  <div className="h-px w-10 bg-muted/60 my-1 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default CityDetail;