
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbList, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '../components/ui/breadcrumb';

const BeforeAfter = () => {
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
                  <BreadcrumbPage>Before & After</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Page Content */}
          <div className="text-center py-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-secondary text-3xl font-bold text-brand-orange mb-6"
            >
              Before & After
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              We are working on this page. With time we will update it.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-muted-foreground mb-6"
            >
              Submit your suggestions by going to official page.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/official"
                className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 smooth-transition"
              >
                Go to Official Page
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BeforeAfter;
