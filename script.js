const imageUpload = document.getElementById('imageUpload');
const uploadSection = document.getElementById('uploadSection');
const previewSection = document.getElementById('previewSection');
const loadingSection = document.getElementById('loadingSection');
const resultsSection = document.getElementById('resultsSection');
const imagePreview = document.getElementById('imagePreview');
const analyzeBtn = document.getElementById('analyzeBtn');
const tryAgainBtn = document.getElementById('tryAgainBtn');

const luxuryProducts = {
  foundation: [
    {
      name: "La Mer The Soft Fluid Long Wear Foundation",
      brand: "La Mer",
      price: "$110",
      shades: "20 shades",
      coverage: "Medium to Full",
      finish: "Natural Radiant",
      keyIngredients: "Miracle Broth, Marine Ferment, SPF 20",
      description: "Luxurious foundation with skincare benefits, provides hydration and a luminous finish"
    },
    {
      name: "Chanel Les Beiges Healthy Glow Foundation",
      brand: "Chanel",
      price: "$65",
      shades: "35 shades",
      coverage: "Light to Medium",
      finish: "Natural Matte",
      keyIngredients: "Kalanchoe Extract, Light-Reflecting Pigments",
      description: "Lightweight formula that evens skin tone while maintaining a natural look"
    },
    {
      name: "Tom Ford Traceless Foundation Stick",
      brand: "Tom Ford",
      price: "$92",
      shades: "40 shades",
      coverage: "Medium to Full",
      finish: "Satin",
      keyIngredients: "Japanese Peony Extract, Hyaluronic Acid",
      description: "Creamy stick foundation with buildable coverage and a second-skin feel"
    },
    {
      name: "Giorgio Armani Luminous Silk Foundation",
      brand: "Giorgio Armani",
      price: "$69",
      shades: "40 shades",
      coverage: "Medium",
      finish: "Natural Luminous",
      keyIngredients: "Glycerin, Micro-fil Technology",
      description: "Iconic foundation beloved by makeup artists for its flawless, silk-like finish"
    },
    {
      name: "Sisley Phyto-Teint Ultra Eclat",
      brand: "Sisley Paris",
      price: "$138",
      shades: "12 shades",
      coverage: "Light to Medium",
      finish: "Radiant",
      keyIngredients: "Gardenia, Woodmallow, Linden Blossom",
      description: "Oil-free radiance boosting foundation with botanical extracts for skin vitality"
    },
    {
      name: "Dior Forever Skin Glow",
      brand: "Dior",
      price: "$56",
      shades: "44 shades",
      coverage: "Medium",
      finish: "Radiant Glow",
      keyIngredients: "Wild Pansy Extract, 24H Hydration Complex",
      description: "Clean formula foundation offering 24-hour wear with a radiant glow finish"
    }
  ],
  eyeshadow: [
    {
      name: "Charlotte Tilbury Luxury Palette",
      brand: "Charlotte Tilbury",
      price: "$53",
      shades: "4 shades per palette",
      formula: "Powder",
      finish: "Matte, Shimmer, Metallic",
      keyFeatures: "Color-coded for easy application, Buildable pigments",
      description: "Expertly curated quad with prime, enhance, smoke, and pop shades"
    },
    {
      name: "Natasha Denona Metropolis Palette",
      brand: "Natasha Denona",
      price: "$129",
      shades: "28 shades",
      formula: "Powder",
      finish: "Matte, Metallic, Duo-Chrome",
      keyFeatures: "High pigmentation, Smooth blendability, Long-lasting",
      description: "Professional-grade palette with cool-toned metallics and rich mattes"
    },
    {
      name: "Pat McGrath Labs Mothership Palette",
      brand: "Pat McGrath Labs",
      price: "$128",
      shades: "10 shades",
      formula: "Powder, Cream",
      finish: "Matte, Shimmer, Metallic, Astral",
      keyFeatures: "Innovative textures, Intense color payoff, Luxe packaging",
      description: "Iconic palette featuring exclusive astral shades and transformative finishes"
    },
    {
      name: "Tom Ford Eye Color Quad",
      brand: "Tom Ford",
      price: "$88",
      shades: "4 shades per quad",
      formula: "Powder",
      finish: "Matte, Satin, Shimmer, Sparkle",
      keyFeatures: "Coordinated shades, Premium pigments",
      description: "Sophisticated quad designed for effortless eye artistry"
    },
    {
      name: "Chanel Les 4 Ombres",
      brand: "Chanel",
      price: "$62",
      shades: "4 shades per palette",
      formula: "Powder",
      finish: "Matte, Satin, Iridescent, Lamé",
      keyFeatures: "Soft micronized pigments, Harmonious color combinations",
      description: "Elegant quad offering endless eye looks with exceptional wear"
    },
    {
      name: "Gucci Beauty Palette Beauté Des Yeux",
      brand: "Gucci",
      price: "$62",
      shades: "4 shades per palette",
      formula: "Powder",
      finish: "Matte, Pearl, Metallic",
      keyFeatures: "Italian craftsmanship, Richly pigmented",
      description: "Luxurious Italian-made palette with velvety texture and stunning color range"
    }
  ],
  lipstick: [
    {
      name: "Tom Ford Lip Color",
      brand: "Tom Ford",
      price: "$57",
      shades: "100+ shades",
      formula: "Cream",
      finish: "Satin Matte, Sheer, Patent",
      keyIngredients: "Brazilian Murumuru Butter, Chamomilla Extract, Soja Seed Extract",
      description: "Ultra-luxurious lipstick with rich pigmentation and hydrating formula"
    },
    {
      name: "Chanel Rouge Allure Velvet",
      brand: "Chanel",
      price: "$45",
      shades: "60+ shades",
      formula: "Cream",
      finish: "Luminous Matte",
      keyIngredients: "Hydrating Microspheres",
      description: "Iconic matte lipstick with intense color and comfortable wear"
    },
    {
      name: "Hermès Rouge Hermès",
      brand: "Hermès",
      price: "$72",
      shades: "24 shades",
      formula: "Satin Cream",
      finish: "Satin",
      keyIngredients: "Elderflower Extract, Argan Oil",
      description: "Refillable luxury lipstick with exceptional color precision and care benefits"
    },
    {
      name: "Charlotte Tilbury Matte Revolution",
      brand: "Charlotte Tilbury",
      price: "$35",
      shades: "30+ shades",
      formula: "Cream",
      finish: "Modern Matte",
      keyIngredients: "Lipstick Tree, Orchid Extract, Peptides",
      description: "Award-winning lipstick with 3D glowing pigments and skincare actives"
    },
    {
      name: "Guerlain Rouge G Lipstick",
      brand: "Guerlain",
      price: "$56 (refill $37)",
      shades: "72 shades",
      formula: "Cream",
      finish: "Satin, Matte, Velvet",
      keyIngredients: "Hyaluronic Acid Spheres, Baobab Flower Extract",
      description: "Customizable luxury lipstick with mirror case and hydrating formula"
    },
    {
      name: "Dior Rouge Dior Forever",
      brand: "Dior",
      price: "$47",
      shades: "40+ shades",
      formula: "Cream",
      finish: "Velvet, Satin, Matte",
      keyIngredients: "Red Peony Extract, Pomegranate Flower Acids",
      description: "Transfer-proof lipstick with 16-hour wear and floral care complex"
    }
  ],
  blush: [
    {
      name: "Chanel Joues Contraste Powder Blush",
      brand: "Chanel",
      price: "$48",
      shades: "12 shades",
      formula: "Powder",
      finish: "Satin, Matte",
      keyFeatures: "Micronized pigments, Silky texture, Long-wearing",
      description: "Refined powder blush with buildable color and natural-looking radiance"
    },
    {
      name: "Tom Ford Shade and Illuminate",
      brand: "Tom Ford",
      price: "$85",
      shades: "8 duos",
      formula: "Powder",
      finish: "Matte and Shimmer",
      keyFeatures: "Contouring and highlighting duo, Sophisticated shades",
      description: "Luxe dual compact for sculpting and illuminating cheekbones"
    },
    {
      name: "Hourglass Ambient Lighting Blush",
      brand: "Hourglass",
      price: "$40",
      shades: "12 shades",
      formula: "Powder",
      finish: "Radiant",
      keyFeatures: "Photoluminescent Technology, Hand-made",
      keyIngredients: "Light-reflecting particles",
      description: "Revolutionary blush fusing color with ambient lighting powder"
    },
    {
      name: "Charlotte Tilbury Cheek to Chic",
      brand: "Charlotte Tilbury",
      price: "$40",
      shades: "10 shades",
      formula: "Powder",
      finish: "Matte to Highlight",
      keyFeatures: "Swirl and pop application, Duo-chrome effect",
      description: "Heart-shaped compact with inner and outer glow for dimensional color"
    },
    {
      name: "NARS Blush",
      brand: "NARS",
      price: "$32",
      shades: "30+ shades",
      formula: "Powder",
      finish: "Matte, Satin, Shimmer",
      keyFeatures: "Buildable intensity, Iconic shades like Orgasm and Dolce Vita",
      description: "Cult-favorite blush with silky texture and exceptional color payoff"
    },
    {
      name: "Guerlain Meteorites Perles Blush",
      brand: "Guerlain",
      price: "$65",
      shades: "5 shades",
      formula: "Pressed Pearls",
      finish: "Radiant",
      keyFeatures: "Color-correcting pearls, Violet fragrance, Stardust technology",
      description: "Legendary pearls that enhance complexion with soft-focus radiance"
    }
  ],
  highlighter: [
    {
      name: "Hourglass Ambient Lighting Powder",
      brand: "Hourglass",
      price: "$52",
      shades: "6 shades",
      formula: "Powder",
      finish: "Luminous",
      keyFeatures: "Photoluminescent Technology, Filters light, Customizable glow",
      description: "Revolutionary powder that recreates perfect lighting on skin"
    },
    {
      name: "Charlotte Tilbury Beauty Light Wand",
      brand: "Charlotte Tilbury",
      price: "$38",
      shades: "4 shades",
      formula: "Liquid",
      finish: "Dewy Glow",
      keyFeatures: "Cushion-tip applicator, Buildable luminosity",
      keyIngredients: "Light-reflecting pearls, Vitamin E",
      description: "Liquid highlighter wand for an effortless lit-from-within glow"
    },
    {
      name: "Becca Shimmering Skin Perfector",
      brand: "Becca",
      price: "$38",
      shades: "8 shades",
      formula: "Powder, Liquid, Cream",
      finish: "Luminous Glow",
      keyFeatures: "Ultra-fine pearls, Buildable coverage",
      description: "Iconic highlighter with creamy texture and brilliant pearl finish"
    },
    {
      name: "Tom Ford Shade and Illuminate",
      brand: "Tom Ford",
      price: "$85",
      shades: "8 combinations",
      formula: "Powder",
      finish: "Shimmer",
      keyFeatures: "Contour and highlight duo, Luxe packaging",
      description: "Sophisticated highlighting and contouring palette for sculpted radiance"
    },
    {
      name: "Dior Backstage Glow Face Palette",
      brand: "Dior",
      price: "$45",
      shades: "2 palettes",
      formula: "Powder",
      finish: "Holographic, Glittery",
      keyFeatures: "Professional quality, Multi-use shades",
      description: "Backstage essential with three highlighter shades for custom glow"
    },
    {
      name: "Pat McGrath Labs Skin Fetish Divine Powder",
      brand: "Pat McGrath Labs",
      price: "$55",
      shades: "3 shades",
      formula: "Powder",
      finish: "Astral Glow",
      keyFeatures: "Microfine powder, Intense luminosity",
      description: "Divine highlighting powder with celestial glow and silky application"
    }
  ]
};

const beautyProfiles = {
  fair: {
    warm: {
      skinTone: "Fair with warm golden undertones",
      undertone: "Warm golden base with peachy highlights",
      palette: "Warm peachy pinks, soft corals, golden bronze, and champagne tones",
      colors: ['#FFD4A3', '#FFCBA4', '#FFB6C1', '#F4C2C2', '#E6B89C'],
      foundation: ["La Mer The Soft Fluid Long Wear Foundation", "Giorgio Armani Luminous Silk Foundation"],
      eyeshadow: ["Tom Ford Eye Color Quad", "Charlotte Tilbury Luxury Palette"],
      lipstick: ["Charlotte Tilbury Matte Revolution", "Tom Ford Lip Color"],
      blush: ["Charlotte Tilbury Cheek to Chic", "NARS Blush"],
      highlighter: ["Charlotte Tilbury Beauty Light Wand", "Hourglass Ambient Lighting Powder"]
    },
    cool: {
      skinTone: "Fair with cool pink undertones",
      undertone: "Cool pink base with rosy highlights",
      palette: "Soft pinks, cool mauves, lavender, rose gold, and icy champagne",
      colors: ['#FFB6D9', '#E6CCFF', '#F8C8DC', '#E6B8D0', '#D4B5F8'],
      foundation: ["Chanel Les Beiges Healthy Glow Foundation", "Dior Forever Skin Glow"],
      eyeshadow: ["Chanel Les 4 Ombres", "Charlotte Tilbury Luxury Palette"],
      lipstick: ["Chanel Rouge Allure Velvet", "Dior Rouge Dior Forever"],
      blush: ["Chanel Joues Contraste Powder Blush", "Hourglass Ambient Lighting Blush"],
      highlighter: ["Dior Backstage Glow Face Palette", "Becca Shimmering Skin Perfector"]
    },
    neutral: {
      skinTone: "Fair with balanced undertones",
      undertone: "Neutral balanced complexion",
      palette: "Soft nudes, dusty roses, warm taupes, soft bronze, and pearl",
      colors: ['#F5E6D3', '#E6C7C2', '#D4B5A0', '#F8C8DC', '#E8D4C0'],
      foundation: ["Giorgio Armani Luminous Silk Foundation", "Tom Ford Traceless Foundation Stick"],
      eyeshadow: ["Natasha Denona Metropolis Palette", "Tom Ford Eye Color Quad"],
      lipstick: ["Tom Ford Lip Color", "Hermès Rouge Hermès"],
      blush: ["Tom Ford Shade and Illuminate", "Charlotte Tilbury Cheek to Chic"],
      highlighter: ["Hourglass Ambient Lighting Powder", "Tom Ford Shade and Illuminate"]
    }
  },
  medium: {
    warm: {
      skinTone: "Medium with warm golden undertones",
      undertone: "Warm caramel with golden depth",
      palette: "Warm terracotta, bronze, copper, burnt sienna, and rich gold",
      colors: ['#D4A574', '#CD853F', '#B87333', '#DAA520', '#E2A76F'],
      foundation: ["Tom Ford Traceless Foundation Stick", "Giorgio Armani Luminous Silk Foundation"],
      eyeshadow: ["Pat McGrath Labs Mothership Palette", "Natasha Denona Metropolis Palette"],
      lipstick: ["Tom Ford Lip Color", "Charlotte Tilbury Matte Revolution"],
      blush: ["NARS Blush", "Tom Ford Shade and Illuminate"],
      highlighter: ["Becca Shimmering Skin Perfector", "Pat McGrath Labs Skin Fetish Divine Powder"]
    },
    cool: {
      skinTone: "Medium with cool pink undertones",
      undertone: "Cool rose with subtle pink depth",
      palette: "Cool berry tones, mauve, plum, dusty rose, and rose gold",
      colors: ['#C8A2C8', '#B57281', '#8E4585', '#D8A2B0', '#A67B8A'],
      foundation: ["Dior Forever Skin Glow", "Chanel Les Beiges Healthy Glow Foundation"],
      eyeshadow: ["Charlotte Tilbury Luxury Palette", "Chanel Les 4 Ombres"],
      lipstick: ["Chanel Rouge Allure Velvet", "Guerlain Rouge G Lipstick"],
      blush: ["Chanel Joues Contraste Powder Blush", "Guerlain Meteorites Perles Blush"],
      highlighter: ["Dior Backstage Glow Face Palette", "Charlotte Tilbury Beauty Light Wand"]
    },
    neutral: {
      skinTone: "Medium with balanced undertones",
      undertone: "Neutral with versatile depth",
      palette: "Warm bronze, cool taupe, terracotta, mauve, and champagne gold",
      colors: ['#C19A6B', '#B8956A', '#C8A696', '#B8A896', '#D4AF77'],
      foundation: ["Giorgio Armani Luminous Silk Foundation", "Tom Ford Traceless Foundation Stick"],
      eyeshadow: ["Natasha Denona Metropolis Palette", "Pat McGrath Labs Mothership Palette"],
      lipstick: ["Tom Ford Lip Color", "Hermès Rouge Hermès"],
      blush: ["Tom Ford Shade and Illuminate", "NARS Blush"],
      highlighter: ["Hourglass Ambient Lighting Powder", "Becca Shimmering Skin Perfector"]
    }
  },
  tan: {
    warm: {
      skinTone: "Tan with warm golden undertones",
      undertone: "Rich warm honey with golden radiance",
      palette: "Deep terracotta, rich bronze, burnt orange, copper, and deep gold",
      colors: ['#B8956A', '#A0826D', '#8B7355', '#CD853F', '#B8860B'],
      foundation: ["Tom Ford Traceless Foundation Stick", "Giorgio Armani Luminous Silk Foundation"],
      eyeshadow: ["Pat McGrath Labs Mothership Palette", "Natasha Denona Metropolis Palette"],
      lipstick: ["Tom Ford Lip Color", "Charlotte Tilbury Matte Revolution"],
      blush: ["NARS Blush", "Tom Ford Shade and Illuminate"],
      highlighter: ["Becca Shimmering Skin Perfector", "Pat McGrath Labs Skin Fetish Divine Powder"]
    },
    cool: {
      skinTone: "Tan with cool undertones",
      undertone: "Cool cocoa with rosy depth",
      palette: "Deep plum, rich berry, cool brown, mauve, and bronze",
      colors: ['#8E4585', '#704214', '#9F8170', '#B57281', '#8B6F5A'],
      foundation: ["Dior Forever Skin Glow", "La Mer The Soft Fluid Long Wear Foundation"],
      eyeshadow: ["Natasha Denona Metropolis Palette", "Gucci Beauty Palette Beauté Des Yeux"],
      lipstick: ["Guerlain Rouge G Lipstick", "Dior Rouge Dior Forever"],
      blush: ["Guerlain Meteorites Perles Blush", "Hourglass Ambient Lighting Blush"],
      highlighter: ["Dior Backstage Glow Face Palette", "Hourglass Ambient Lighting Powder"]
    },
    neutral: {
      skinTone: "Tan with balanced undertones",
      undertone: "Neutral warm depth with versatility",
      palette: "Bronze, terracotta, cool taupe, burgundy, and champagne",
      colors: ['#A67B5B', '#9F7961', '#B8956A', '#8B4513', '#CD9575'],
      foundation: ["Giorgio Armani Luminous Silk Foundation", "Tom Ford Traceless Foundation Stick"],
      eyeshadow: ["Pat McGrath Labs Mothership Palette", "Tom Ford Eye Color Quad"],
      lipstick: ["Tom Ford Lip Color", "Hermès Rouge Hermès"],
      blush: ["Tom Ford Shade and Illuminate", "NARS Blush"],
      highlighter: ["Becca Shimmering Skin Perfector", "Tom Ford Shade and Illuminate"]
    }
  },
  deep: {
    warm: {
      skinTone: "Deep with warm golden undertones",
      undertone: "Rich warm chocolate with golden luminosity",
      palette: "Deep bronze, rich copper, burnt umber, deep gold, and vibrant coral",
      colors: ['#8B4513', '#654321', '#704214', '#B8860B', '#CD853F'],
      foundation: ["Tom Ford Traceless Foundation Stick", "La Mer The Soft Fluid Long Wear Foundation"],
      eyeshadow: ["Pat McGrath Labs Mothership Palette", "Natasha Denona Metropolis Palette"],
      lipstick: ["Tom Ford Lip Color", "Charlotte Tilbury Matte Revolution"],
      blush: ["NARS Blush", "Tom Ford Shade and Illuminate"],
      highlighter: ["Pat McGrath Labs Skin Fetish Divine Powder", "Becca Shimmering Skin Perfector"]
    },
    cool: {
      skinTone: "Deep with cool undertones",
      undertone: "Cool deep espresso with berry notes",
      palette: "Deep plum, rich burgundy, cool cocoa, deep berry, and bronze",
      colors: ['#3D2817', '#4A2511', '#654321', '#722F37', '#8E4585'],
      foundation: ["Sisley Phyto-Teint Ultra Eclat", "Dior Forever Skin Glow"],
      eyeshadow: ["Natasha Denona Metropolis Palette", "Pat McGrath Labs Mothership Palette"],
      lipstick: ["Guerlain Rouge G Lipstick", "Tom Ford Lip Color"],
      blush: ["Guerlain Meteorites Perles Blush", "NARS Blush"],
      highlighter: ["Dior Backstage Glow Face Palette", "Pat McGrath Labs Skin Fetish Divine Powder"]
    },
    neutral: {
      skinTone: "Deep with balanced undertones",
      undertone: "Neutral rich depth with universal appeal",
      palette: "Rich bronze, deep plum, warm cocoa, burgundy, and deep gold",
      colors: ['#654321', '#704214', '#8B4513', '#722F37', '#A0826D'],
      foundation: ["Giorgio Armani Luminous Silk Foundation", "Tom Ford Traceless Foundation Stick"],
      eyeshadow: ["Pat McGrath Labs Mothership Palette", "Natasha Denona Metropolis Palette"],
      lipstick: ["Tom Ford Lip Color", "Hermès Rouge Hermès"],
      blush: ["Tom Ford Shade and Illuminate", "NARS Blush"],
      highlighter: ["Becca Shimmering Skin Perfector", "Hourglass Ambient Lighting Powder"]
    }
  }
};

let uploadedImage = null;
let currentProfile = null;

imageUpload.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be under 10MB');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = function(event) {
      uploadedImage = event.target.result;
      imagePreview.src = uploadedImage;
      uploadSection.classList.add('hidden');
      previewSection.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  }
});

analyzeBtn.addEventListener('click', performAnalysis);

function performAnalysis() {
  previewSection.classList.add('hidden');
  loadingSection.classList.remove('hidden');
  
  setTimeout(() => {
    const skinTones = ['fair', 'medium', 'tan', 'deep'];
    const undertones = ['warm', 'cool', 'neutral'];
    
    const randomSkinTone = skinTones[Math.floor(Math.random() * skinTones.length)];
    const randomUndertone = undertones[Math.floor(Math.random() * undertones.length)];
    
    currentProfile = beautyProfiles[randomSkinTone][randomUndertone];
    displayResults();
    
    loadingSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 2500);
}

function displayResults() {
  document.getElementById('skinTone').textContent = currentProfile.skinTone;
  document.getElementById('undertone').textContent = currentProfile.undertone;
  document.getElementById('paletteDesc').textContent = currentProfile.palette;
  
  const colorPaletteDiv = document.getElementById('colorPalette');
  colorPaletteDiv.innerHTML = '';
  currentProfile.colors.forEach(color => {
    const swatch = document.createElement('div');
    swatch.className = 'w-16 h-16 rounded-lg shadow-md border border-white/50';
    swatch.style.backgroundColor = color;
    colorPaletteDiv.appendChild(swatch);
  });
  
  displayProductCategory('foundation', currentProfile.foundation, 'foundationProducts');
  displayProductCategory('eyeshadow', currentProfile.eyeshadow, 'eyeshadowProducts');
  displayProductCategory('lipstick', currentProfile.lipstick, 'lipstickProducts');
  displayProductCategory('blush', currentProfile.blush, 'blushProducts');
  displayProductCategory('highlighter', currentProfile.highlighter, 'highlighterProducts');
}

function displayProductCategory(category, recommendedNames, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  
  const products = luxuryProducts[category].filter(product => 
    recommendedNames.includes(product.name)
  );
  
  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'glass rounded-2xl p-6 product-card';
  
  const brand = document.createElement('p');
  brand.className = 'text-sm text-gray-600 mb-1 tracking-wider uppercase';
  brand.textContent = product.brand;
  
  const name = document.createElement('h4');
  name.className = 'serif text-2xl font-light text-gray-800 mb-3';
  name.textContent = product.name;
  
  const price = document.createElement('p');
  price.className = 'text-xl font-light text-gray-900 mb-4';
  price.textContent = product.price;
  
  const description = document.createElement('p');
  description.className = 'text-gray-700 text-sm mb-4 leading-relaxed';
  description.textContent = product.description;
  
  const specs = document.createElement('div');
  specs.className = 'space-y-2 text-sm text-gray-600';
  
  const specsList = [];
  if (product.shades) specsList.push({ label: 'Shades', value: product.shades });
  if (product.coverage) specsList.push({ label: 'Coverage', value: product.coverage });
  if (product.finish) specsList.push({ label: 'Finish', value: product.finish });
  if (product.formula) specsList.push({ label: 'Formula', value: product.formula });
  if (product.keyIngredients) specsList.push({ label: 'Key Ingredients', value: product.keyIngredients });
  if (product.keyFeatures) specsList.push({ label: 'Features', value: product.keyFeatures });
  
  specsList.forEach(spec => {
    const specItem = document.createElement('div');
    specItem.innerHTML = `<span class="font-medium">${spec.label}:</span> ${spec.value}`;
    specs.appendChild(specItem);
  });
  
  card.appendChild(brand);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(description);
  card.appendChild(specs);
  
  return card;
}

tryAgainBtn.addEventListener('click', () => {
  resultsSection.classList.add('hidden');
  uploadSection.classList.remove('hidden');
  imageUpload.value = '';
  uploadedImage = null;
  currentProfile = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const uploadArea = document.querySelector('.upload-area');

uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.style.borderColor = '#000';
  uploadArea.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.style.borderColor = '#d1d5db';
  uploadArea.style.backgroundColor = 'white';
});

uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.style.borderColor = '#d1d5db';
  uploadArea.style.backgroundColor = 'white';
  
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    imageUpload.files = e.dataTransfer.files;
    imageUpload.dispatchEvent(new Event('change'));
  }
});