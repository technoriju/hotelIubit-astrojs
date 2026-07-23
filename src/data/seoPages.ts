// landingPages.ts
// IMPORTANT: Replace every bracketed placeholder with your real hotel name,
// address, distances, and amenities before publishing. Fake specifics are
// worse for SEO than no specifics — Google's local-intent checks and users
// will both catch inaccurate claims quickly.
//
// Each entry has a `description` (meta description, ~150-160 chars) and a
// `body` (300+ words of content UNIQUE to that page's angle — not just the
// same paragraph with the keyword swapped). Render `body` as real paragraphs
// in your slug.astro template, not just the heading.

export const landingPages = [
  // ============ GENERAL / CORE ============
  {
    slug: 'hotel-in-kolkata',
    title: 'Best Hotel in Kolkata',
    heading: 'Discover the Best Hotel in Kolkata',
    description: 'Hotel Iubit offers comfortable rooms, easy connectivity, and attentive service in Kolkata. Book directly for the best rates and no hidden fees.',
    body: `Hotel Iubit sits in Muragachha Sodepur of Kolkata, close to Sodepur Station. 
    We built this property around a simple idea: guests shouldn't have to choose between affordability and comfort. 
    Rooms are cleaned daily, air-conditioned, and equipped with real amenities — WiFi, TV, geyser, etc. 
    Whether you're here for a short business trip, a family visit, or just passing through Kolkata, our front desk team 
    is available 24 hours to help with local recommendations, transport bookings, or late check-in requests. 
    We're a short 10 min ride from Sodepur Station, making us a practical base for exploring the city 
    without paying premium hotel-district prices.`
  },
  {
    slug: 'budget-hotel',
    title: 'Affordable Budget Hotel',
    heading: 'Premium Comfort on a Budget',
    description: 'Clean, comfortable rooms at honest prices — no compromise on hygiene or service. Book direct and save on commission fees.',
    body: `Budget doesn't have to mean bare-bones. At Hotel Iubit, our lower-priced rooms still include AC/fan, clean 
    linens, attached bathroom, WiFi — we just skip the marble lobbies and restaurant menus that inflate prices 
    elsewhere. Most of our budget-conscious guests are students visiting family / solo travellers / transit 
    passengers who need a reliable place to sleep without the frills. Rooms start at ₹1200 per day, with 
    discounts for multi-night stays. Because you're booking directly with us instead of through a marketplace app, 
    you avoid the 15-20% commission fees baked into listings on other platforms — savings we pass straight back to you.`
  },
  {
    slug: 'luxury-hotel',
    title: '5-Star Luxury Hotel',
    heading: 'Experience Ultimate Luxury',
    description: 'Premium suites, fine dining, and personalized service for guests who want the very best Kolkata has to offer.',
    body: `Our premium suites are designed for guests who want more than a place to sleep — a stay that feels like 
    part of the trip. Expect king-size beds / rain showers / premium linens / minibar, plus turn-down service 
    and priority late checkout on request. If applicable: our in-house restaurant serves multi-cuisine breakfast 
    and dinner. This tier is popular with anniversary trips, corporate VIP visits, and guests celebrating a 
    milestone. We keep the number of premium rooms limited so service never feels rushed — book a few days ahead 
    during Durga Puja and peak wedding season, when these rooms fill first.`
  },
  {
    slug: 'family-hotel',
    title: 'Family Friendly Hotel',
    heading: 'Perfect Stay for Your Family',
    description: 'Spacious family rooms with extra bedding, kid-friendly spaces, and flexible check-in for travelling families.',
    body: `Travelling with kids changes what you need from a hotel — more than a nice lobby, you need extra bedding 
    without extra charges, a room layout that doesn't feel cramped, and staff who won't blink at a 6 AM wake-up call. 
    Our family rooms fit 3-4 guests comfortably, with an extra mattress/cot available free of charge / connecting 
    room options. We're within easy reach of Eco Park / Science City / Nicco Park, popular half-day trips for 
    families staying in this part of Kolkata. Housekeeping can also arrange late checkout if your travel plans 
    involve an evening train or flight.`
  },
  {
    slug: 'business-hotel',
    title: 'Corporate Business Hotel',
    heading: 'Your Ideal Business Partner',
    description: 'Reliable WiFi, quiet rooms, and quick invoicing for business travellers and corporate bookings.',
    body: `For business travellers, the details that matter are rarely the ones in a brochure: stable WiFi that 
    survives a video call, a desk you can actually work at, and a GST invoice that arrives without three follow-up 
    emails. We handle all three as standard. Corporate accounts get priority billing / monthly invoicing / 
    negotiated rates for repeat bookings — reach out to our front desk or contact email to set this up. We're 
    close to Kalyani express highway, and can arrange airport or station pickup 
    for late-arriving delegates on request.`
  },

  // ============ PROXIMITY / TRANSIT ============
  {
    slug: 'hotel-near-airport',
    title: 'Hotel Near Airport',
    heading: 'Convenient Stay Near the Airport',
    description: 'Just  minutes from Netaji Subhas Chandra Bose International Airport, with early check-in for red-eye arrivals.',
    body: `If your flight lands at odd hours or you've got an early departure, distance from the airport matters 
    more than star rating. We're roughly  minutes from Netaji Subhas Chandra Bose International Airport via 
    route/road name, and we keep a few rooms held back specifically for early check-ins after overnight flights — 
    call ahead and we'll do our best to have one ready. If offered: complimentary or paid airport pickup available, 
    message us your flight number in advance. Guests using us as a layover base tell us the quiet rooms and quick 
    checkout process are what bring them back on connecting trips.`
  },
  {
    slug: 'hotel-near-railway-station',
    title: 'Hotel Near Railway Station',
    heading: 'Centrally Located Comfort',
    description: 'A short auto ride from Sodepur Station, ideal for travellers catching early or late trains.',
    body: `Trains in and around Kolkata don't always run on convenient schedules, so we get a lot of guests booking 
    just a few hours before or after their journey. We're about 12 minutes / 3 km from Sodepur Station, 
    reachable by auto/toto/walk. Our front desk can help you time a checkout around your train, store luggage 
    for a few hours if you've got a late departure, and point you to the nearest food stalls or auto stand. Rooms 
    here tend to book out fastest around festival season / exam season, so a same-day call ahead helps.`
  },
  {
    slug: 'weekend-stay',
    title: 'Weekend Getaway Stay',
    heading: 'Relaxing Weekend Retreats',
    description: 'Short, relaxed weekend packages for guests looking to unwind without a long commute out of the city.',
    body: `Not every getaway needs a long drive. Our weekend stays are built for guests who want a change of scene 
    — a different bed, room service, someone else handling breakfast — without losing a whole day to travel. 
    Friday-to-Sunday bookings get a small discount / include late checkout on Sunday, and we're close enough to 
    a real local attraction — park, riverside, mall for a lazy half-day outing without needing to plan a full 
    itinerary. Popular with couples and small friend groups looking for a low-effort reset.`
  },
  {
    slug: 'couple-friendly-hotel',
    title: 'Couple Friendly Hotel',
    heading: 'Romantic Getaways for Couples',
    description: 'Private, comfortable rooms for couples, with straightforward booking and no unnecessary questions.',
    body: `We keep booking simple and judgment-free for couples — valid ID for both guests is all we ask, in line 
    with standard hotel policy. Rooms are private, cleaned between every stay, and available for full stays / 
    short stays if offered depending on what you need. Many couples booking with us are here for a quiet evening 
    away from family / an anniversary / simply wanting privacy rather than sightseeing, so we keep check-in quick 
    and low-key rather than making a fuss.`
  },
  {
    slug: 'conference-hotel',
    title: 'Conference & Event Hotel',
    heading: 'Host Your Events with Us',
    description: 'Meeting space and group room blocks for corporate events, small conferences, and family functions.',
    body: `Whether it's a training session, a small corporate offsite, or a family function, hosting an event means 
    juggling a room, catering, and guest accommodation all at once. We can block  rooms together for group 
    bookings, and our banquet hall / meeting room, if available seats up to  people theatre-style or  
    boardroom-style. Catering can be arranged in-house or through a vendor of your choice. Reach out at least 
    1-2 weeks ahead for date holds during peak wedding and event season (roughly November through February in Kolkata).`
  },

  // ============ KOLKATA LOCALITIES ============


  // ============ AMENITIES ============
  
  {
    slug: 'hotel-with-parking',
    title: 'Hotel with Free Parking',
    heading: 'Hassle-Free Parking Included',
    description: 'Free, secure on-site parking for guests arriving by car or bike — no daily parking fees.',
    body: `If you're driving in from outside Kolkata, parking is one less thing to think about — we have  
    covered/open spots on-site, free for in-house guests, with CCTV coverage / a security guard on duty overnight. 
    Space is first-come during peak season, so if you're arriving after 8 PM during festival periods, it's worth 
    calling ahead to confirm a spot is held for you.`
  },
  {
    slug: 'pet-friendly-hotel',
    title: 'Pet Friendly Hotel',
    heading: 'Bring Your Furry Friend Along',
    description: 'Pets welcome with prior notice — a comfortable stay for you and your travel companion.',
    body: `We allow pets on a case-by-case basis — please call ahead rather than booking online, so we can confirm 
    a ground-floor room and flag it to housekeeping. There's a small refundable deposit / no extra charge, and 
    we ask that pets aren't left unattended in the room. We don't currently have a dedicated pet relief area on-site, 
    but a nearby park/open space works well for a short walk.`
  },
  {
    slug: 'hotel-with-banquet-hall',
    title: 'Hotel with Banquet Hall',
    heading: 'Celebrate in Style',
    description: 'An on-site banquet space for small functions, engagements, and family celebrations.',
    body: `Our banquet hall seats up to  guests and is available for engagements / birthday functions / small 
    receptions / corporate get-togethers. Basic setup (chairs, tables, sound system) is included; catering and 
    decoration can be arranged through our in-house vendor or one of your choosing. Weekend dates fill up fastest 
    between November and February, so we'd suggest locking in a date at least 3-4 weeks ahead during that window.`
  },
  {
    slug: 'rooftop-restaurant-hotel',
    title: 'Hotel with Rooftop Restaurant',
    heading: 'Dine with a View',
    description: 'An open-air rooftop restaurant serving multi-cuisine food for guests and walk-in diners.',
    body: `Our rooftop restaurant is open 24 hours and serves multi-cuisine / regional Bengali / continental food, 
    with outdoor seating weather permitting. It's open to walk-in diners as well as guests, and gets a nice evening 
    breeze most of the year (best avoided during peak monsoon downpours, June-September). A good spot for a relaxed 
    dinner without needing to head back out into the city.`
  },
  {
    slug: 'hotel-with-spa',
    title: 'Hotel with Spa & Wellness',
    heading: 'Relax and Rejuvenate',
    description: 'On-site spa and wellness services, bookable by appointment for in-house guests.',
    body: `Spa services are available by advance booking — massage, facials, or other services offered but chargeable, typically 
    running 2 hours and priced separately from your room rate. We'd recommend booking your slot at check-in 
    rather than same-day, since therapist availability is limited on weekends. This is a popular add-on for 
    guests here on longer business trips who want a way to unwind between meetings.`
  },
  {
    slug: 'ac-rooms-hotel',
    title: 'Hotel with AC Rooms',
    heading: 'Stay Cool and Comfortable',
    description: 'Fully air-conditioned rooms across all categories — a genuine necessity in Kolkata\'s humid climate.',
    body: `Every room we offer, from our most affordable to our premium suites, comes with AC as standard — not 
    an upgrade option. Given how humid Kolkata gets between March and September, we don't think air conditioning 
    should be a paid add-on, and we don't charge it as one. Units are serviced regularly; if a room's AC is running 
    warm, flag it to the front desk and we'll move you or send maintenance immediately.`
  },

  // ============ PURPOSE / INTENT ============
  {
    slug: 'honeymoon-hotel-kolkata',
    title: 'Best Honeymoon Hotel in Kolkata',
    heading: 'Start Your Journey Together',
    description: 'A private, comfortable stay for newly married couples, with small touches to mark the occasion.',
    body: `For couples staying with us just after their wedding, we try to make the room feel a little different — 
    complimentary room decoration / a welcome note / late checkout, depending on availability. Mention it's a 
    honeymoon stay when booking and we'll do what we can within the room category you've chosen. Many honeymoon 
    guests combine their Kolkata stay with a short trip to Digha / Darjeeling / Sundarbans — happy to help with 
    transport suggestions if that's part of your plan.`
  },
  {
    slug: 'solo-traveller-hotel',
    title: 'Hotel for Solo Travellers',
    heading: 'Safe & Comfortable Solo Stays',
    description: 'Secure, single-occupancy friendly rooms for solo travellers, with straightforward check-in.',
    body: `Solo travel bookings don't need to come with a markup — our single-occupancy rates are priced fairly, 
    not padded to assume you'll upgrade. The property has CCTV in common areas / 24-hour front desk / a security 
    guard, and staff are used to solo guests asking for local advice on where to eat safely or how to get around 
    after dark. If you're a woman travelling alone, feel free to ask for a room closer to the front desk or on a 
    lower floor if that's more comfortable for you.`
  },
  {
    slug: 'group-booking-hotel',
    title: 'Hotel for Group Bookings',
    heading: 'Perfect for Group Stays',
    description: 'Multi-room group bookings with a single point of contact and consolidated billing.',
    body: `Booking for a group — a family reunion, a college trip, a small tour group — is easier when you're not 
    juggling five separate reservations. We can block  rooms together, often on the same floor or wing, with 
    one consolidated bill if that's simpler for whoever's organizing. Reach out directly rather than booking each 
    room individually online; we can usually offer a better group rate that way, especially for stays of 3+ nights.`
  },
  {
    slug: 'long-stay-hotel',
    title: 'Hotel for Long Stay',
    heading: 'Extended Comfortable Stays',
    description: 'Weekly and monthly rates for guests staying longer, with laundry and housekeeping included.',
    body: `If you're in Kolkata for a project, a training, or a family matter that's stretching past a few days, 
    our long-stay rates kick in from 7 nights / 15 nights onward, working out noticeably cheaper per night than 
    our standard rate. Housekeeping switches to every 2-3 days rather than daily unless you'd prefer otherwise, 
    and we can arrange laundry on a weekly basis. Good option for consultants, relocating employees, or families 
    handling an extended medical stay.`
  },
  {
    slug: 'same-day-booking-hotel',
    title: 'Same Day Hotel Booking',
    heading: 'Instant Booking, Instant Comfort',
    description: 'Rooms available for same-day, walk-in, or last-minute booking — call ahead to confirm availability.',
    body: `Plans changed last minute, or you just didn't book ahead — either way, we usually have same-day rooms 
    available outside of festival weekends. Calling ahead is faster than waiting to walk in, since we can confirm 
    availability and hold a room for a couple of hours. Same-day bookings are settled at check-in; we accept 
    cash / card / UPI. If you're arriving very late at night, let us know roughly when so the front desk isn't 
    caught off guard.`
  },
  {
    slug: 'cheap-hotel-kolkata',
    title: 'Cheap Hotel in Kolkata',
    heading: 'Quality Stay at Low Price',
    description: 'Low room rates without cutting corners on cleanliness or basic amenities.',
    body: `"Cheap" and "run-down" aren't the same thing, and we try to prove that with our lowest-tier rooms — 
    still cleaned daily, still with working AC and hot water, just without the extras (no minibar, smaller room 
    size) that push up the price elsewhere. Rates start around ₹1200 per day. If you're traveling on a tight 
    budget through Kolkata, booking directly (rather than through a third-party app) also avoids the commission 
    markup that often gets added to listing prices.`
  },
  {
    slug: 'hotel-with-online-booking',
    title: 'Hotel with Easy Online Booking',
    heading: 'Book Your Stay in Seconds',
    description: 'Simple, secure online booking with instant confirmation — no phone calls required.',
    body: `You can book directly through this site — pick your dates, choose a room type, and you'll get instant 
    confirmation by email/SMS, no need to call and check availability first. Payment options include UPI / 
    card / pay-at-hotel, if offered. If you need to modify or cancel a booking, Call for fastest 
    way to reach us — we try to respond within a few hours.`
  },

  // ============ COMPARISON / NEAR-ME ============
  {
    slug: 'hotel-near-me',
    title: 'Hotel Near Me',
    heading: 'Call Us Wherever You Are',
    description: 'Find our hotel location, get directions, and check availability for tonight or your upcoming trip.',
    body: `Looking for a place to stay nearby? We're located at 40, Dokan Tala, Bilkanda - 1, Jugberia, Muragachha North 24 Parganas, easily reachable by auto/cab/metro. 
    If you're searching on the go, the fastest way to check tonight's availability is to call +91 6289076194 directly 
    rather than waiting on a booking site to load. We can also share our exact map pin over WhatsApp or SMS if 
    you're navigating from an unfamiliar part of the city.`
  },
  {
    slug: 'hotel-near-me-kolkata',
    title: 'Hotel Near Me in Kolkata',
    heading: 'Find Us Wherever You Are',
    description: 'Located in locality, Kolkata — easy to find, easy to reach, with same-day availability.',
    body: `We're based in specific locality of Kolkata, a well-connected area reachable from most parts of the 
    city within X-X minutes depending on traffic. If you're comparing us against other nearby options, the 
    easiest way to decide is to call and ask about tonight's rate directly — online listings aren't always updated 
    in real time, but our front desk always has the current price and room availability.`
  },
  {
    slug: 'best-rated-hotel-kolkata',
    title: 'Top Rated Hotel in Kolkata',
    heading: 'Guest-Approved Excellence',
    description: 'See what our guests say — consistent reviews for cleanliness, service, and value in Kolkata.',
    body: `Rather than just claim to be "top rated," we'd point you to our Google reviews / TripAdvisor page to 
    judge for yourself — guests most often mention cleanliness / staff helpfulness / value for money in their 
    reviews. We read every review that comes in, good or bad, and use the critical ones to fix specific issues 
    (a slow tap, a noisy AC unit) rather than just letting them sit. If you've stayed with us before, we'd genuinely 
    appreciate an honest review either way.`
  },
  {
    slug: 'hotel-with-free-cancellation',
    title: 'Hotel with Free Cancellation',
    heading: 'Book with Confidence',
    description: 'Free cancellation up to X hours before check-in — plans change, and we don\'t penalize that.',
    body: `We know travel plans shift — a delayed flight, a changed itinerary, a cancelled meeting. Bookings made 
    directly with us can be cancelled free of charge up to 24-48 hours before your check-in date; after that, 
    a one-night charge / partial refund may apply. If something comes up last-minute, call or message us directly 
    rather than assuming you'll be charged — we handle genuine emergencies on a case-by-case basis.`
  },

  // ============ BUDGET-BRANDED / INDEPENDENT ALTERNATIVE ============
  {
    slug: 'budget-branded-hotel-kolkata',
    title: 'Budget Branded Hotel in Kolkata',
    heading: 'Standardized Comfort, Better Value',
    description: 'Consistent room quality and standardized amenities, priced independently without app commission markups.',
    body: `You don't need a big franchise name to get a consistent, predictable room — clean sheets, working AC, 
    hot water, and a front desk that answers the phone. That's what we standardize across every room category. 
    The difference between us and a branded budget chain is mostly in the margins: we're not paying a franchise 
    fee or an aggregator's commission, so we can hold prices lower for the same basic standard of room.`
  },
  {
    slug: 'hotel-alternative-to-oyo-kolkata',
    title: 'Best Alternative Hotel Options in Kolkata',
    heading: 'Quality Stay Without Compromise',
    description: 'An independently run hotel offering the same standardized comfort as branded budget chains, booked directly.',
    body: `If you usually book through an aggregator app for consistency and predictable pricing, it's worth 
    knowing that independent hotels can offer the same standard — clean, AC rooms with basic amenities — often at 
    a better direct rate, since there's no app commission built into the price. We list our actual room photos, 
    current rates, and real availability here rather than relying on third-party listings that aren't always 
    up to date.`
  },
  {
    slug: 'affordable-branded-rooms-kolkata',
    title: 'Affordable Branded Rooms in Kolkata',
    heading: 'Reliable Comfort at Honest Prices',
    description: 'Consistent, no-surprises rooms at a fair price — booked directly with the property.',
    body: `"Branded" experience without the brand markup: every room here follows the same basic checklist — clean 
    linens, working AC, hot water, WiFi — regardless of which room category you book. We keep that consistency 
    in-house through our own housekeeping standards rather than a franchise audit. Prices are listed honestly here; 
    what you see is what you pay at check-in, no surprise service charges added later.`
  },
  {
    slug: 'no-booking-app-hotel',
    title: 'Book Direct, Skip the App Fees',
    heading: 'Direct Booking, No Extra Charges',
    description: 'Book directly with us by phone or through this site — avoid third-party app commissions and fees.',
    body: `Booking through an aggregator app usually means the listed price already includes a commission fee 
    charged to the hotel — which, indirectly, is baked into what you pay. Booking directly with us (by phone or 
    through this site) cuts that middleman out, and we're often able to offer a slightly better rate as a result. 
    You'll also be able to call us directly with any request or issue instead of routing through app support.`
  },
  {
    slug: 'independent-hotel-kolkata',
    title: 'Independent Hotel in Kolkata',
    heading: 'Personalized Service, Not Just Another Chain',
    description: 'A locally run, independent hotel offering personal attention that larger chains often can\'t match.',
    body: `We're not part of a national chain — this is a locally owned and run property, which means decisions 
    (a late checkout request, a special arrangement for a guest's occasion) get made by someone on-site, not a 
    corporate policy line. Staff tend to remember repeat guests and their preferences. If you've had a frustrating 
    experience with rigid chain-hotel policies before, an independent property like ours is often more flexible 
    when something doesn't fit the standard template.`
  },
  {
    slug: 'best-value-hotel-kolkata',
    title: 'Best Value Hotel in Kolkata',
    heading: 'Quality You Can Trust',
    description: 'The best balance of price, cleanliness, and location for guests who want value without cutting corners.',
    body: `"Value" for us means the room you get genuinely matches what you paid for — no surprise deductions, 
    no bait-and-switch between the online listing and the actual room. We'd rather price a room accurately at ₹ 
    than advertise a lower "starting from" rate that never actually applies. Guests booking with us tend to compare 
    us against 2-3 nearby options before choosing — we're comfortable with that comparison.`
  },
  {
    slug: 'verified-hotel-kolkata',
    title: 'Verified & Trusted Hotel Kolkata',
    heading: 'Book with Confidence, Every Time',
    description: 'A registered, verifiable property with real reviews, real photos, and transparent pricing.',
    body: `We're a registered property under local municipal/GST registration if applicable, and every photo on 
    this site is of our actual rooms — not stock images. You can verify us through Google Business listing / 
    GST number / local municipal records before booking if that gives you peace of mind. We'd rather earn trust 
    through transparency than ask you to take our word for it.`
  },
  {
    slug: 'standard-ac-rooms-kolkata',
    title: 'Standard AC Rooms in Kolkata',
    heading: 'Clean, Comfortable, Consistent',
    description: 'Our standard room category — AC, clean linens, attached bath — at a straightforward flat rate.',
    body: `Our standard room is the one most guests book: air-conditioned, attached bathroom with hot water, clean 
    linens changed daily, and basic WiFi. No frills beyond that, but also no compromise on the basics. Flat rate 
    of ₹1200 per day regardless of day of the week (some properties charge more on weekends — we don't). This is 
    the room category we'd recommend for most short business or personal trips.`
  },

  // ============ NORTH 24 PARGANAS ============
  {
    slug: 'hotel-in-sodepur',
    title: 'Best Hotel in Sodepur',
    heading: 'Comfortable Stay in Sodepur',
    description: 'A comfortable stay in Sodepur, close to the station and Barrackpore Trunk Road.',
    body: `Sodepur is a well-connected part of North 24 Parganas along the Barrackpore Trunk Road and Kolkata 
    Suburban Railway line, making it a practical base whether you're visiting family in the area or passing through 
    on the way further north. We're about X minutes from Sodepur station and close to Kalyani Express. 
    Most of our guests here are visiting relatives, attending a local function, or breaking a longer journey 
    between Kolkata and towns further up the Sealdah main line.`
  },
  {
    slug: 'hotel-near-sodepur-station',
    title: 'Hotel Near Sodepur Railway Station',
    heading: 'Convenient Stay Near Sodepur Station',
    description: 'Just  minutes from Sodepur railway station on the Kolkata Suburban Railway network.',
    body: `Sodepur station sees frequent local trains on the Sealdah main line, making it a convenient stop for 
    guests heading further into North 24 Parganas or back toward central Kolkata. We're roughly 10 minutes from 
    the station by toto/auto, and can help you time your check-in or checkout around train schedules if you're 
    catching an early or late service. Useful base if you're splitting a trip between Kolkata and towns like 
    Barrackpore, Titagarh, or further north.`
  },
  {
    slug: 'hotel-in-muragachha',
    title: 'Hotel in Muragachha',
    heading: 'Quality Stay in Muragachha',
    description: 'A comfortable stay in Muragachha, at the junction of Sodepur-Barasat Road and Kalyani Expressway.',
    body: `Muragachha sits right at the junction of Sodepur-Barasat Road and the Kalyani Expressway, which makes 
    it a genuinely convenient stopping point if you're travelling by road between Kolkata and areas further north 
    like Kalyani or Krishnanagar. We're close to this junction, 2 minutes from Kalyani Expressway. Most guests here are road travellers taking a break on a longer route, or visiting family in this 
    stretch of North 24 Parganas.`
  },
  {
    slug: 'hotel-near-muragachha',
    title: 'Hotel Near Muragachha',
    heading: 'Comfortable Stay Close to Muragachha',
    description: 'Close to Muragachha and the Kalyani Expressway, convenient for road travellers.',
    body: `If Muragachha is your reference point but you don't need to be right at the junction itself, we're 
    a short distance away — 2 minutes via Sodepur-Barasat Road — while still being close enough to the 
    expressway for an early start the next morning. This part of North 24 Parganas is quieter than central Kolkata, 
    which some guests specifically prefer for an overnight break during a longer road trip.`
  },
  {
    slug: 'hotel-in-barasat',
    title: 'Best Hotel in Barasat',
    heading: 'Discover the Best Hotel in Barasat',
    description: 'A comfortable stay in Barasat, the district hub of North 24 Parganas.',
    body: `Barasat is the administrative hub of North 24 Parganas district, with its own court complex, hospital, 
    and a busy local market — meaning a fair number of our guests here are visiting for official/legal work, 
    medical appointments, or business tied to the district offices. We're 30 minutes from Barasat court / 
    Barasat District Hospital / the main market, and can help arrange an early auto if you've got a morning 
    appointment to get to.`
  },
  {
    slug: 'hotel-near-barasat-station',
    title: 'Hotel Near Barasat Railway Station',
    heading: 'Easy Access Near Barasat Station',
    description: 'Close to Barasat railway station, a key junction on the Kolkata Suburban Railway network.',
    body: `Barasat station is a junction point on the Kolkata Suburban Railway network, connecting toward both 
    Bongaon and Hasnabad lines. If you're changing trains here or starting a journey further into North 24 
    Parganas, we're about 15 minutes from the station — close enough for a quick check-in before an early 
    departure, or a place to rest after a late arrival.`
  },
  {
    slug: 'hotel-in-madhyamgram',
    title: 'Best Hotel in Madhyamgram',
    heading: 'Comfortable Stay in Madhyamgram',
    description: 'A comfortable stay in Madhyamgram, close to local markets and Sahara Netaji Subash Park.',
    body: `Madhyamgram has grown into a busy residential and commercial pocket of North 24 Parganas, with its own 
    local market strip and a couple of well-known parks nearby. We're close to Sahara Netaji Subash Park / the 
    main Madhyamgram market, X minutes from Madhyamgram railway station. A practical option if you're visiting 
    family in this part of the district or need a base slightly outside the busier, pricier parts of central Kolkata.`
  },
  {
    slug: 'hotel-near-madhyamgram-station',
    title: 'Hotel Near Madhyamgram Station',
    heading: 'Convenient Stay Near Madhyamgram',
    description: 'Just  minutes from Madhyamgram railway station, serving Sealdah-bound commuters.',
    body: `Madhyamgram station serves commuters heading toward Sealdah and central Kolkata, and it's a fairly 
    steady flow of local trains through the day. We're roughly X minutes from the station, a good option if 
    you need to catch an early commuter train into the city or are arriving from Kolkata in the evening and don't 
    want to travel further out that same night.`
  },
  {
    slug: 'hotel-near-sodepur-barasat-road',
    title: 'Hotel Near Sodepur-Barasat Road',
    heading: 'Well-Connected Stay on Sodepur-Barasat Road',
    description: 'Convenient access to Sodepur-Barasat Road, connecting several key North 24 Parganas towns.',
    body: `Sodepur-Barasat Road links several of the towns in this part of North 24 Parganas — Sodepur, 
    Muragachha, and Barasat among them — making a stay along this stretch a reasonably central option if your 
    trip involves visiting more than one of these areas. We're close to this road at specific point/landmark, 
    10 minutes from a real nearby stop, with straightforward access by auto or toto.`
  },
  {
    slug: 'hotel-near-kalyani-expressway',
    title: 'Hotel Near Kalyani Expressway',
    heading: 'Easy Highway Access Stay',
    description: 'Quick access to Kalyani Expressway, convenient for road travellers heading north from Kolkata.',
    body: `The Kalyani Expressway is a fast route north out of Kolkata toward Kalyani and beyond, and staying near 
    an access point can save real time if you're driving rather than taking local trains. We're close to the 
    Muragachha/relevant junction with the expressway, 2 minutes by road, making an early start the next 
    morning straightforward without navigating back through congested central Kolkata traffic first.`
  },
  {
    slug: 'hotel-in-north-24-parganas',
    title: 'Hotel in North 24 Parganas',
    heading: 'Your Comfortable Stay in North 24 Parganas',
    description: 'A comfortable, well-located stay across North 24 Parganas district — Sodepur, Barasat, and Madhyamgram nearby.',
    body: `North 24 Parganas stretches from the edges of Kolkata up through Barrackpore, Sodepur, Barasat, and 
    Madhyamgram, and we're positioned to serve guests travelling anywhere in that corridor — whether it's a 
    family visit, transit between Kolkata and towns further north, or work tied to the district's offices and 
    courts. We're close to Sodepur-Barasat Road and the Kalyani Expressway junction, giving reasonably quick 
    access across most of this stretch of the district.`
  }
];


//   { slug: 'hotel-near-howrah-station', title: 'Hotel Near Howrah Station', heading: 'Quick Access to Howrah Station' },
//   { slug: 'hotel-near-eco-park', title: 'Hotel Near Eco Park Kolkata', heading: 'Stay Near Eco Park' },
//   { slug: 'hotel-in-esplanade', title: 'Hotel in Esplanade Kolkata', heading: 'Central Kolkata Comfort' },
//   { slug: 'hotel-near-victoria-memorial', title: 'Hotel Near Victoria Memorial', heading: 'Steps Away from Victoria Memorial' },

//   // --- amenity/feature-based ---
//   { slug: 'hotel-with-swimming-pool', title: 'Hotel with Swimming Pool', heading: 'Dive into Comfort' },
//   { slug: 'hotel-with-free-breakfast', title: 'Hotel with Free Breakfast', heading: 'Start Your Day Right' },
//   { slug: 'hotel-with-parking', title: 'Hotel with Free Parking', heading: 'Hassle-Free Parking Included' },
//   { slug: 'pet-friendly-hotel', title: 'Pet Friendly Hotel', heading: 'Bring Your Furry Friend Along' },
//   { slug: 'hotel-with-banquet-hall', title: 'Hotel with Banquet Hall', heading: 'Celebrate in Style' },
//   { slug: 'rooftop-restaurant-hotel', title: 'Hotel with Rooftop Restaurant', heading: 'Dine with a View' },
//   { slug: 'hotel-with-spa', title: 'Hotel with Spa & Wellness', heading: 'Relax and Rejuvenate' },
//   { slug: 'ac-rooms-hotel', title: 'Hotel with AC Rooms', heading: 'Stay Cool and Comfortable' },

//   // --- purpose/intent-based ---
//   { slug: 'honeymoon-hotel-kolkata', title: 'Best Honeymoon Hotel in Kolkata', heading: 'Start Your Journey Together' },
//   { slug: 'solo-traveller-hotel', title: 'Hotel for Solo Travellers', heading: 'Safe & Comfortable Solo Stays' },
//   { slug: 'group-booking-hotel', title: 'Hotel for Group Bookings', heading: 'Perfect for Group Stays' },
//   { slug: 'long-stay-hotel', title: 'Hotel for Long Stay', heading: 'Extended Comfortable Stays' },
//   { slug: 'same-day-booking-hotel', title: 'Same Day Hotel Booking', heading: 'Instant Booking, Instant Comfort' },
//   { slug: 'cheap-hotel-kolkata', title: 'Cheap Hotel in Kolkata', heading: 'Quality Stay at Low Price' },
//   { slug: 'hotel-with-online-booking', title: 'Hotel with Easy Online Booking', heading: 'Book Your Stay in Seconds' },

//   // --- comparison/near-me style (high search intent) ---
//   { slug: 'hotel-near-me', title: 'Hotel Near Me', heading: 'Call Us Wherever You Are' },
//   { slug: 'hotel-near-me-kolkata', title: 'Hotel Near Me in Kolkata', heading: 'Find Us Wherever You Are' },
//   { slug: 'best-rated-hotel-kolkata', title: 'Top Rated Hotel in Kolkata', heading: 'Guest-Approved Excellence' },
//   { slug: 'hotel-with-free-cancellation', title: 'Hotel with Free Cancellation', heading: 'Book with Confidence' },

//   // --- budget/branded-alternative intent (captures "OYO-style" searchers safely) ---
//   { slug: 'budget-branded-hotel-kolkata', title: 'Budget Branded Hotel in Kolkata', heading: 'Standardized Comfort, Better Value' },
//   { slug: 'hotel-alternative-to-oyo-kolkata', title: 'Best Alternative Hotel Options in Kolkata', heading: 'Quality Stay Without Compromise' },
//   { slug: 'affordable-branded-rooms-kolkata', title: 'Affordable Branded Rooms in Kolkata', heading: 'Reliable Comfort at Honest Prices' },
//   { slug: 'no-booking-app-hotel', title: 'Book Direct, Skip the App Fees', heading: 'Direct Booking, No Extra Charges' },
//   { slug: 'independent-hotel-kolkata', title: 'Independent Hotel in Kolkata', heading: 'Personalized Service, Not Just Another Chain' },
//   { slug: 'best-value-hotel-kolkata', title: 'Best Value Hotel in Kolkata', heading: 'Quality You Can Trust' },
//   { slug: 'verified-hotel-kolkata', title: 'Verified & Trusted Hotel Kolkata', heading: 'Book with Confidence, Every Time' },
//   { slug: 'standard-ac-rooms-kolkata', title: 'Standard AC Rooms in Kolkata', heading: 'Clean, Comfortable, Consistent' },

//   // --- North 24 Parganas location-based keywords ---
//   { slug: 'hotel-in-sodepur', title: 'Best Hotel in Sodepur', heading: 'Comfortable Stay in Sodepur' },
//   { slug: 'hotel-near-sodepur-station', title: 'Hotel Near Sodepur Railway Station', heading: 'Convenient Stay Near Sodepur Station' },
//   { slug: 'hotel-in-muragachha', title: 'Hotel in Muragachha', heading: 'Quality Stay in Muragachha' },
//   { slug: 'hotel-near-muragachha', title: 'Hotel Near Muragachha', heading: 'Comfortable Stay Close to Muragachha' },
//   { slug: 'hotel-in-barasat', title: 'Best Hotel in Barasat', heading: 'Discover the Best Hotel in Barasat' },
//   { slug: 'hotel-near-barasat-station', title: 'Hotel Near Barasat Railway Station', heading: 'Easy Access Near Barasat Station' },
//   { slug: 'hotel-in-madhyamgram', title: 'Best Hotel in Madhyamgram', heading: 'Comfortable Stay in Madhyamgram' },
//   { slug: 'hotel-near-madhyamgram-station', title: 'Hotel Near Madhyamgram Station', heading: 'Convenient Stay Near Madhyamgram' },
//   { slug: 'hotel-near-sodepur-barasat-road', title: 'Hotel Near Sodepur-Barasat Road', heading: 'Well-Connected Stay on Sodepur-Barasat Road' },
//   { slug: 'hotel-near-kalyani-expressway', title: 'Hotel Near Kalyani Expressway', heading: 'Easy Highway Access Stay' },
//   { slug: 'hotel-in-north-24-parganas', title: 'Hotel in North 24 Parganas', heading: 'Your Comfortable Stay in North 24 Parganas' },
// ;
