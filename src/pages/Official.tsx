import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbList, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '../components/ui/breadcrumb';

const Official = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: 'Pakistan',
    message: ''
  });

  const creators = [
    {
      name: 'Haris Habib',
      bio: 'This website was created by me, Haris Habib, with the support of Abdullah Saleem and Abdul Muneeb. I am currently an applicant for SHS 2025/26 and still in the process myself, so I understand the challenges students face. The structure, UI design, and coding of this website were done entirely by me. The development process took about a month, and I built it with the intention of expanding its features in the future as we receive suggestions from seniors and from you, the community.',
    },
    {
      name: 'Abdullah Saleem',
      bio: 'Abdullah Saleem is the co-creator of this website with me. He is one of the nicest people you’ll meet and among the most knowledgeable about USAT and the entire journey from USAT to nomination. Much of the information you see on this website has been compiled and gathered by Abdullah, showing his dedication and future commitment to helping applicants. The structure of the website and everything you see here is the result of our discussions and shared understanding of what to include and what to leave out. If you have any queries, tag Abdullah in the group and ask him.',
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = encodeURIComponent(`*Hungaricum Suggestion*

*Name:* ${formData.name}
*Location:* ${formData.location}

*Message:*
${formData.message}

---
Sent from Hungaricum Guide`);

    // WhatsApp number updated to +923200505154
    const whatsappLink = `https://wa.me/923200505154?text=${message}`;

    window.open(whatsappLink, '_blank');

    // Reset form
    setFormData({
      name: '',
      location: 'Pakistan',
      message: ''
    });
  };

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
                  <BreadcrumbPage>Official</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Page Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-secondary text-3xl font-bold text-brand-orange mb-8"
          >
            Official
          </motion.h1>

          {/* Who Created It Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-left"
          >
            <h2 className="font-secondary text-xl font-bold text-brand-blue mb-6">
              Who created it?
            </h2>

            <div className="space-y-6">
              {creators.map((creator) => (
                <div key={creator.name}>
                  <h3 className="font-secondary text-lg font-bold text-brand-orange mb-2">
                    {creator.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {creator.bio}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What Next Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="font-secondary text-xl font-bold text-brand-blue mb-4">
              What’s Next
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed space-y-4">
              We started this project to guide students from the USAT stage to the nomination process. While we’ve done our best to build a helpful resource, we don’t plan to expand or add new updates on our own. Future improvements will depend on the suggestions we receive.
              <br />
              We highly value feedback from seniors in Hungary and will implement their ideas to make this guide even better. We also welcome suggestions from peers who are currently applying or preparing to apply, your input matters just as much.
              <br />
              If you notice any gaps, mistakes, or areas for improvement, please share them. From our side, the main work is done, but the community can continue to make it better.
            </p>
          </motion.div>

          {/* Suggestions Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-secondary text-xl font-bold text-brand-blue mb-4">
              Submit Your Suggestions
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-brand-gray rounded-lg focus:outline-none focus:ring-0 focus:border-brand-orange"
                  required
                />
              </div>

              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="location"
                    value="Hungary"
                    checked={formData.location === 'Hungary'}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="mr-2"
                  />
                  In Hungary
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="location"
                    value="Pakistan"
                    checked={formData.location === 'Pakistan'}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="mr-2"
                  />
                  Pakistan
                </label>
              </div>

              <div>
                <textarea
                  placeholder="Your Message/Suggestion"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 border border-brand-gray rounded-lg focus:outline-none focus:ring-0 focus:border-brand-orange resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white py-2 rounded-lg font-medium hover:bg-opacity-90 smooth-transition"
              >
                Submit Suggestion
              </button>
            </form>

            <p className="text-xs text-muted-foreground mt-2 text-center">
              Your suggestion will be sent via WhatsApp
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Official;
