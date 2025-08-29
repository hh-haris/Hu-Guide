
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';

const Cities = () => { 
  const cities = [{
    name: 'Budapest',
    slug: 'budapest',
    description: 'Hungary’s capital and largest city, offering top universities, vibrant culture, and the most job opportunities.',
    image: 'B1.jpg',
    universities: ['Budapest Metropolitan University', 'Budapest University of Economics and Business', 'Budapest University of Technology and Economics', 'Corvinus University of Budapest', 'Dennis Gabor University of Applied Sciences', 'Eötvös Loránd University', 'Ludovika University of Public Service', 'Obuda University', 'Semmelweis University']
  }, {
    name: 'Debrecen',
    slug: 'debrecen',
    description: 'The country’s second largest city, known for its strong academic scene and lower living costs compared to Budapest.',
    image: '/D1.jpg',
    universities: ['University of Debrecen']
  }, {
    name: 'Pécs',
    slug: 'pecs',
    description: 'A historic university city in southern Hungary, famous for its cultural life and Mediterranean feel.',
    image: 'P1.jpg',
    universities: ['University of Pécs']
  }, {
    name: 'Győr',
    slug: 'gyor',
    description: 'An industrial and cultural hub in western Hungary.',
    image: '/G1.jpeg',
    universities: ['Széchenyi István University']
  }, {
    name: 'Baja',
    slug: 'baja',
    description: 'A charming riverside town known for its friendly atmosphere.',
    image: '/B5.jpg',
    universities: ['Eötvös József College']
  }, {
    name: 'Dunaújváros',
    slug: 'dunaujvaros',
    description: 'A modern city with a strong technical and industrial focus.',
    image: '/D5.jpg',
    universities: ['University of Dunaújváros']
  }, {
    name: 'Eger',
    slug: 'eger',
    description: 'A historic city famous for its baroque architecture and vibrant student life.',
    image: '/E1.jpg',
    universities: ['Eszterházy Károly Catholic University']
  }, {
    name: 'Gödöllő',
    slug: 'godollo',
    description: 'Known for its green spaces and royal heritage.',
    image: '/G5.jpg',
    universities: ['Hungarian University of Agriculture and Life Sciences, MATE']
  }, {
    name: 'Kecskemét',
    slug: 'kecskemet',
    description: 'A growing economic center with strengths in agriculture and the arts.',
    image: '/K1.jpg',
    universities: ['John von Neumann University']
  }, {
    name: 'Miskolc',
    slug: 'miskolc',
    description: 'The largest city in northeastern Hungary, surrounded by natural beauty.',
    image: '/M1.jpg',
    universities: ['University of Miskolc']
  }, {
    name: 'Nyíregyháza',
    slug: 'nyiregyhaza',
    description: 'A welcoming eastern city with a relaxed pace of life.',
    image: '/N1.jpg',
    universities: ['University of Nyíregyháza']
  }, {
    name: 'Sopron',
    slug: 'sopron',
    description: 'A scenic city near the Austrian border, known for wine and cross border culture.',
    image: '/S5.jpg',
    universities: ['University of Sopron']
  }, {
    name: 'Szeged',
    slug: 'szeged',
    description: 'A sunny southern city with a vibrant cultural and academic scene.',
    image: '/S1.jpg',
    universities: ['University of Szeged']
  }, {
    name: 'Veszprém',
    slug: 'veszprem',
    description: 'A historic city near Lake Balaton with a lively cultural life.',
    image: '/V1.jpg',
    universities: ['University of Pannonia']
  }];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-14">
        <div className="mobile-container py-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Cities</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Page Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="font-secondary text-3xl font-bold text-brand-orange mb-6"
          >
            Cities
          </motion.h1>

          {/* Cities List */}
          <div className="space-y-6">
            {cities.map((city, index) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                {/* City Image - Rectangular and top-aligned */}
                <div className="w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <img src={city.image} alt={city.name} className="w-full h-full object-cover" />
                </div>
                
                {/* City Content - Top-aligned */}
                <div className="flex-1 min-h-20 flex flex-col justify-start">
                  <h2 className="font-secondary text-xl font-bold text-brand-blue mb-2">
                    {city.name}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 flex-1">
                    {city.description}
                  </p>
                  <div className="flex items-start justify-between">
                    <Link 
                      to={`/cities/${city.slug}`} 
                      className="inline-block bg-brand-light-green text-foreground px-4 py-1 rounded-full text-sm font-medium hover:bg-opacity-80 smooth-transition"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cities;
