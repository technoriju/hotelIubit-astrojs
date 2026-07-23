const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'services', title: 'Our Services' },
  { name: 'gallery', title: 'Photo Gallery' },
  { name: 'restaurant', title: 'Dining & Restaurant' },
  { name: 'amenities', title: 'Hotel Amenities' },
  { name: 'special-offers', title: 'Special Offers' },
  { name: 'nearby-attractions', title: 'Nearby Attractions' },
  { name: 'testimonials', title: 'Guest Testimonials' },
  { name: 'terms-conditions', title: 'Terms & Conditions' },
  { name: 'refund-policy', title: 'Refund Policy' },
];

const template = (title) => `---
import Layout from '../layouts/Layout.astro';
---

<Layout title="${title} | Hotel Iubit" description="Learn more about ${title} at Hotel Iubit.">
  <div class="bg-primary text-white py-20 text-center">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl md:text-5xl font-heading font-bold">${title}</h1>
    </div>
  </div>
  
  <section class="py-20 bg-background min-h-[50vh]">
    <div class="container mx-auto px-4 max-w-4xl prose prose-lg">
      <p class="text-xl text-center text-gray-500">Content for ${title} will be updated soon. Please check back later.</p>
    </div>
  </section>
</Layout>
`;

pages.forEach(page => {
  fs.writeFileSync(path.join(__dirname, 'src/pages', `${page.name}.astro`), template(page.title));
  console.log(`Created ${page.name}.astro`);
});
