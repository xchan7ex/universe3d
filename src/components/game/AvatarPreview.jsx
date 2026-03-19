import React from 'react';

const COLORS = {
  // Male - Enhanced color palette
  m_top_1: '#2C3E50', m_top_2: '#3498DB', m_top_3: '#34495E', 
  m_top_4: '#27AE60', m_top_5: '#E67E22', m_top_6: '#7F8C8D',
  m_bot_1: '#2980B9', m_bot_2: '#2C3E50', m_bot_3: '#6D8B4A', 
  m_bot_4: '#E74C3C', m_bot_5: '#2C3E50', m_bot_6: '#34495E',
  m_foot_1: '#34495E', m_foot_2: '#2C3E50', m_foot_3: '#3498DB',
  
  // Female - Enhanced color palette
  f_top_1: '#E84342', f_top_2: '#FF7675', f_top_3: '#E17055', 
  f_top_4: '#6C5CE7', f_top_5: '#00B894', f_top_6: '#FDCB6E', f_top_7: '#E84342',
  f_bot_1: '#2D3436', f_bot_3: '#0984E3', 
  f_bot_4: '#E84342', f_bot_5: '#00CEC9', f_bot_6: '#6C5CE7',
  f_foot_1: '#2D3436', f_foot_2: '#636E72', f_foot_3: '#FF7675'
};

// Skin tone palette for variety
const SKIN_TONES = {
  light: '#F5D0C5',
  medium: '#E0B69A',
  tan: '#C69A6D',
  dark: '#A45D3B'
};

const BaseAvatar = ({ gender, skinTone = 'light' }) => {
  const SKIN = SKIN_TONES[skinTone] || SKIN_TONES.light;
  const SHADOW = '#AD8A73'; // Darker version for shadows
  const HIGHLIGHT = '#FFE9E1'; // Lighter version for highlights
  
  if (gender === 'male') {
    return (
      <g>
        {/* Head with better shape and shading */}
        <ellipse cx="50" cy="28" rx="14" ry="15" fill={SKIN} />
        
        {/* Face details - eyes, nose, mouth */}
        {/* Left eye */}
        <circle cx="43" cy="24" r="2.5" fill="#FFFFFF" />
        <circle cx="43" cy="24" r="1.5" fill="#2C3E50" />
        <circle cx="43.5" cy="23.5" r="0.5" fill="#FFFFFF" />
        
        {/* Right eye */}
        <circle cx="57" cy="24" r="2.5" fill="#FFFFFF" />
        <circle cx="57" cy="24" r="1.5" fill="#2C3E50" />
        <circle cx="57.5" cy="23.5" r="0.5" fill="#FFFFFF" />
        
        {/* Eyebrows */}
        <path d="M 38 18 Q 43 15 48 18" stroke="#2C3E50" strokeWidth="1.5" fill="none" />
        <path d="M 52 18 Q 57 15 62 18" stroke="#2C3E50" strokeWidth="1.5" fill="none" />
        
        {/* Nose */}
        <path d="M 50 28 Q 52 30 50 32" stroke="#AD8A73" strokeWidth="1" fill="none" />
        
        {/* Mouth - friendly smile */}
        <path d="M 45 36 Q 50 40 55 36" stroke="#C44A4A" strokeWidth="1.5" fill="none" />
        
        {/* Ears */}
        <circle cx="35" cy="28" r="3" fill={SKIN} />
        <circle cx="65" cy="28" r="3" fill={SKIN} />
        
        {/* Hair - Modern styled hair */}
        <path d="M 35 12 Q 50 5 65 12 L 65 20 Q 50 18 35 20 Z" fill="#2C3E50" />
        <path d="M 38 14 Q 50 9 62 14" fill="#34495E" />
        
        {/* Neck with better shape */}
        <rect x="45" y="40" width="10" height="15" fill={SKIN} rx="3" />
        
        {/* Torso - Athletic build */}
        <path d="M 32 55 L 68 55 Q 70 85 62 110 L 38 110 Q 30 85 32 55 Z" fill={SKIN} />
        
        {/* Chest/pec definition */}
        <ellipse cx="45" cy="70" rx="6" ry="4" fill={HIGHLIGHT} opacity="0.3" />
        <ellipse cx="55" cy="70" rx="6" ry="4" fill={HIGHLIGHT} opacity="0.3" />
        
        {/* Arms with muscle definition */}
        <path d="M 22 60 L 30 85 L 32 100 L 24 100 L 20 85 L 16 70 Z" fill={SKIN} />
        <path d="M 78 60 L 70 85 L 68 100 L 76 100 L 80 85 L 84 70 Z" fill={SKIN} />
        
        {/* Hands */}
        <circle cx="20" cy="102" r="7" fill={SKIN} />
        <circle cx="80" cy="102" r="7" fill={SKIN} />
        
        {/* Fingers - thumb */}
        <ellipse cx="15" cy="98" rx="4" ry="3" fill={SKIN} transform="rotate(-20 15 98)" />
        <ellipse cx="85" cy="98" rx="4" ry="3" fill={SKIN} transform="rotate(20 85 98)" />
        
        {/* Legs with muscle tone */}
        <path d="M 40 110 L 48 110 L 48 180 L 40 180 L 36 150 Z" fill={SKIN} />
        <path d="M 52 110 L 60 110 L 64 180 L 56 180 L 52 150 Z" fill={SKIN} />
        
        {/* Kneecaps */}
        <ellipse cx="44" cy="140" rx="4" ry="3" fill={HIGHLIGHT} opacity="0.3" />
        <ellipse cx="56" cy="140" rx="4" ry="3" fill={HIGHLIGHT} opacity="0.3" />
        
        {/* Feet */}
        <path d="M 38 180 L 46 180 Q 44 188 38 188 Z" fill={SKIN} />
        <path d="M 54 180 L 62 180 Q 60 188 54 188 Z" fill={SKIN} />
      </g>
    );
  } else {
    return (
      <g>
        {/* Head - Slightly different shape for feminine look */}
        <ellipse cx="50" cy="26" rx="13" ry="14" fill={SKIN} />
        
        {/* Face details */}
        {/* Left eye - slightly larger */}
        <circle cx="43" cy="23" r="3" fill="#FFFFFF" />
        <circle cx="43" cy="23" r="2" fill="#2C3E50" />
        <circle cx="43.8" cy="22.5" r="0.7" fill="#FFFFFF" />
        
        {/* Right eye */}
        <circle cx="57" cy="23" r="3" fill="#FFFFFF" />
        <circle cx="57" cy="23" r="2" fill="#2C3E50" />
        <circle cx="57.8" cy="22.5" r="0.7" fill="#FFFFFF" />
        
        {/* Eyelashes */}
        <path d="M 39 21 L 42 20" stroke="#2C3E50" strokeWidth="1" fill="none" />
        <path d="M 61 21 L 58 20" stroke="#2C3E50" strokeWidth="1" fill="none" />
        
        {/* Eyebrows - more arched */}
        <path d="M 38 16 Q 43 14 48 17" stroke="#2C3E50" strokeWidth="1.2" fill="none" />
        <path d="M 52 17 Q 57 14 62 16" stroke="#2C3E50" strokeWidth="1.2" fill="none" />
        
        {/* Nose - smaller, delicate */}
        <path d="M 50 27 Q 51 29 50 31" stroke="#AD8A73" strokeWidth="1" fill="none" />
        
        {/* Mouth - soft smile */}
        <path d="M 45 34 Q 50 37 55 34" stroke="#D45D5D" strokeWidth="1.2" fill="none" />
        
        {/* Lips */}
        <path d="M 46 34 Q 50 36 54 34" fill="#E8A0A0" opacity="0.4" />
        
        {/* Ears with earrings */}
        <circle cx="36" cy="26" r="2.5" fill={SKIN} />
        <circle cx="64" cy="26" r="2.5" fill={SKIN} />
        <circle cx="34" cy="28" r="1.2" fill="#FFD700" /> {/* Gold earring */}
        <circle cx="66" cy="28" r="1.2" fill="#FFD700" />
        
        {/* Hair - Long flowing hair with volume */}
        <path d="M 30 12 Q 50 4 70 12 L 70 35 Q 50 45 30 35 Z" fill="#4A3728" />
        <path d="M 32 14 Q 50 8 68 14 L 68 32 Q 50 40 32 32 Z" fill="#5D4037" />
        
        {/* Hair strands */}
        <path d="M 35 18 Q 40 25 35 32" stroke="#8B5A2B" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M 65 18 Q 60 25 65 32" stroke="#8B5A2B" strokeWidth="1.5" fill="none" opacity="0.5" />
        
        {/* Neck - more slender */}
        <rect x="46" y="38" width="8" height="15" fill={SKIN} rx="2" />
        
        {/* Collarbone detail */}
        <path d="M 44 45 L 48 47 M 52 47 L 56 45" stroke="#AD8A73" strokeWidth="1" fill="none" opacity="0.5" />
        
        {/* Torso - Hourglass shape */}
        <path d="M 34 53 L 66 53 Q 58 70 62 110 L 38 110 Q 42 70 34 53 Z" fill={SKIN} />
        
        {/* Bust definition */}
        <ellipse cx="45" cy="70" rx="6" ry="4" fill={SHADOW} opacity="0.2" />
        <ellipse cx="55" cy="70" rx="6" ry="4" fill={SHADOW} opacity="0.2" />
        
        {/* Arms - Slender with feminine curve */}
        <path d="M 24 55 L 30 80 L 32 100 L 22 100 L 18 80 L 16 70 Z" fill={SKIN} />
        <path d="M 76 55 L 70 80 L 68 100 L 78 100 L 82 80 L 84 70 Z" fill={SKIN} />
        
        {/* Hands - Smaller, delicate */}
        <circle cx="20" cy="102" r="5.5" fill={SKIN} />
        <circle cx="80" cy="102" r="5.5" fill={SKIN} />
        
        {/* Fingers */}
        <ellipse cx="16" cy="99" rx="3" ry="2.5" fill={SKIN} transform="rotate(-15 16 99)" />
        <ellipse cx="84" cy="99" rx="3" ry="2.5" fill={SKIN} transform="rotate(15 84 99)" />
        
        {/* Legs - Feminine shape */}
        <path d="M 38 110 L 48 110 L 46 180 L 36 180 L 34 150 Z" fill={SKIN} />
        <path d="M 52 110 L 62 110 L 64 180 L 54 180 L 58 150 Z" fill={SKIN} />
        
        {/* Hip curves */}
        <ellipse cx="42" cy="115" rx="6" ry="3" fill={SHADOW} opacity="0.2" />
        <ellipse cx="58" cy="115" rx="6" ry="3" fill={SHADOW} opacity="0.2" />
        
        {/* Feet - Smaller */}
        <path d="M 36 180 L 44 180 Q 42 186 36 186 Z" fill={SKIN} />
        <path d="M 56 180 L 64 180 Q 62 186 56 186 Z" fill={SKIN} />
      </g>
    );
  }
};

const renderTopLayer = (id, color) => {
  switch(id) {
    // MALE TOPS - Enhanced
    case 'm_top_1': // Long Sleeve - Casual
      return (
        <g fill={color}>
          {/* Main torso */}
          <path d="M 32 55 L 68 55 Q 70 85 62 110 L 38 110 Q 30 85 32 55 Z" />
          {/* Left sleeve - longer */}
          <path d="M 22 60 L 32 55 L 34 95 L 24 100 L 18 75 Z" />
          {/* Right sleeve */}
          <path d="M 78 60 L 68 55 L 66 95 L 76 100 L 82 75 Z" />
          {/* Collar */}
          <path d="M 45 48 L 50 43 L 55 48" fill="#FFFFFF" opacity="0.3" />
        </g>
      );
      
    case 'm_top_2': // T-Shirt
      return (
        <g fill={color}>
          <path d="M 32 55 L 68 55 Q 70 85 62 110 L 38 110 Q 30 85 32 55 Z" />
          {/* Short sleeves */}
          <path d="M 22 60 L 32 55 L 36 75 L 26 75 Z" />
          <path d="M 78 60 L 68 55 L 64 75 L 74 75 Z" />
          {/* Crew neck */}
          <circle cx="50" cy="48" r="6" fill={color} stroke="#FFFFFF" strokeWidth="1" />
        </g>
      );
      
    case 'm_top_3': // Formal Shirt with details
      return (
        <g>
          <g fill={color}>
            <path d="M 32 55 L 68 55 Q 70 85 62 110 L 38 110 Q 30 85 32 55 Z" />
            <path d="M 22 60 L 32 55 L 34 95 L 24 100 L 18 75 Z" />
            <path d="M 78 60 L 68 55 L 66 95 L 76 100 L 82 75 Z" />
          </g>
          {/* Collar */}
          <path d="M 44 45 L 50 40 L 56 45" fill="#FFFFFF" />
          <path d="M 47 45 L 50 42 L 53 45" fill={color} />
          {/* Tie */}
          <path d="M 48 48 L 52 48 L 52 70 L 48 70 Z" fill="#C0392B" />
          {/* Buttons */}
          <circle cx="50" cy="60" r="1.5" fill="#F1C40F" />
          <circle cx="50" cy="70" r="1.5" fill="#F1C40F" />
          <circle cx="50" cy="80" r="1.5" fill="#F1C40F" />
        </g>
      );
      
    case 'm_top_4': // Polo Shirt
      return (
        <g>
          <g fill={color}>
            <path d="M 32 55 L 68 55 Q 70 85 62 110 L 38 110 Q 30 85 32 55 Z" />
            <path d="M 22 60 L 32 55 L 36 75 L 26 75 Z" />
            <path d="M 78 60 L 68 55 L 64 75 L 74 75 Z" />
          </g>
          {/* Polo collar */}
          <path d="M 45 48 L 40 43 L 45 43" fill={color} />
          <path d="M 55 48 L 60 43 L 55 43" fill={color} />
          {/* Logo */}
          <circle cx="50" cy="65" r="3" fill="#F1C40F" />
        </g>
      );
      
    case 'm_top_5': // Sleeveless
      return (
        <g fill={color}>
          <path d="M 34 60 L 66 60 Q 68 85 60 110 L 40 110 Q 32 85 34 60 Z" />
          {/* Arm holes */}
          <path d="M 34 60 L 30 70 L 34 80" fill="none" stroke="#000" strokeWidth="1" opacity="0.2" />
          <path d="M 66 60 L 70 70 L 66 80" fill="none" stroke="#000" strokeWidth="1" opacity="0.2" />
        </g>
      );
      
    case 'm_top_6': // Tank Top
      return (
        <g fill={color}>
          <path d="M 36 65 L 64 65 Q 66 85 58 110 L 42 110 Q 34 85 36 65 Z" />
          {/* Thin straps */}
          <rect x="42" y="48" width="3" height="18" fill={color} />
          <rect x="55" y="48" width="3" height="18" fill={color} />
        </g>
      );

    // FEMALE TOPS - Enhanced
    case 'f_top_1': // Frock/Dress
      return (
        <g fill={color}>
          {/* Fitted bodice */}
          <path d="M 38 53 L 62 53 Q 58 70 60 95 L 40 95 Q 42 70 38 53 Z" />
          {/* Flared skirt */}
          <path d="M 35 95 L 65 95 Q 75 130 30 130 L 25 95 Z" />
          {/* Sweetheart neckline */}
          <path d="M 42 48 Q 50 42 58 48" fill="none" stroke="#FFF" strokeWidth="2" />
          {/* Waistband */}
          <rect x="38" y="85" width="24" height="5" fill="#FFFFFF" opacity="0.3" />
        </g>
      );
      
    case 'f_top_2': // Long Sleeve - Fitted
      return (
        <g fill={color}>
          <path d="M 34 53 L 66 53 Q 62 70 62 110 L 38 110 Q 38 70 34 53 Z" />
          {/* Fitted sleeves */}
          <path d="M 24 55 L 34 53 L 32 95 L 22 100 L 18 80 Z" />
          <path d="M 76 55 L 66 53 L 68 95 L 78 100 L 82 80 Z" />
          {/* V-neck */}
          <path d="M 45 48 L 50 45 L 55 48" fill="none" stroke="#FFF" strokeWidth="1.5" />
        </g>
      );
      
    case 'f_top_3': // Sleeveless
      return (
        <g fill={color}>
          <path d="M 36 58 L 64 58 Q 60 75 60 110 L 40 110 Q 40 75 36 58 Z" />
          {/* Thin straps */}
          <path d="M 40 48 L 44 58" stroke={color} strokeWidth="3" />
          <path d="M 60 48 L 56 58" stroke={color} strokeWidth="3" />
          {/* Neckline */}
          <path d="M 42 50 Q 50 46 58 50" fill="none" stroke="#FFF" strokeWidth="1" />
        </g>
      );
      
    case 'f_top_4': // Off Shoulder
      return (
        <g fill={color}>
          <path d="M 28 58 L 72 58 Q 64 75 62 110 L 38 110 Q 36 75 28 58 Z" />
          {/* Ruffled edge */}
          <path d="M 28 58 Q 35 52 42 58 Q 50 62 58 58 Q 65 52 72 58" fill={color} />
          {/* Sleeve details */}
          <ellipse cx="35" cy="62" rx="8" ry="4" fill={color} opacity="0.8" />
          <ellipse cx="65" cy="62" rx="8" ry="4" fill={color} opacity="0.8" />
        </g>
      );
      
    case 'f_top_5': // T-Shirt - Casual
      return (
        <g fill={color}>
          <path d="M 34 53 L 66 53 Q 62 70 62 110 L 38 110 Q 38 70 34 53 Z" />
          {/* Short sleeves */}
          <path d="M 24 55 L 34 53 L 38 70 L 28 72 Z" />
          <path d="M 76 55 L 66 53 L 62 70 L 72 72 Z" />
          {/* Crew neck */}
          <circle cx="50" cy="46" r="5" fill={color} stroke="#FFF" strokeWidth="1" />
        </g>
      );
      
    case 'f_top_6': // Crop Top
      return (
        <g fill={color}>
          <path d="M 34 53 L 66 53 Q 62 70 58 80 L 42 80 Q 38 70 34 53 Z" />
          {/* Straps */}
          <rect x="42" y="46" width="3" height="8" fill={color} />
          <rect x="55" y="46" width="3" height="8" fill={color} />
          {/* Hem detail */}
          <path d="M 42 80 L 58 80" stroke="#FFF" strokeWidth="2" strokeDasharray="2 2" />
        </g>
      );
      
    case 'f_top_7': // Long Dress (Elegant)
      return (
        <g fill={color}>
          {/* Fitted bodice */}
          <path d="M 36 53 L 64 53 Q 60 70 60 90 L 40 90 Q 40 70 36 53 Z" />
          {/* Straps */}
          <path d="M 40 48 L 44 53" stroke={color} strokeWidth="3" />
          <path d="M 60 48 L 56 53" stroke={color} strokeWidth="3" />
          {/* Long flowing skirt */}
          <path d="M 35 90 L 65 90 Q 80 150 30 150 L 20 90 Z" />
          {/* Waist detail */}
          <ellipse cx="50" cy="88" rx="15" ry="4" fill="#FFD700" opacity="0.5" />
          {/* Pattern detail */}
          <circle cx="40" cy="110" r="3" fill="#FFF" opacity="0.3" />
          <circle cx="60" cy="130" r="3" fill="#FFF" opacity="0.3" />
        </g>
      );
      
    default:
      return null;
  }
};

const renderBottomLayer = (id, color) => {
  switch(id) {
    // MALE BOTTOMS - Enhanced to match new muscular legs
    case 'm_bot_1': // Ripped Jeans
      return (
        <g fill={color}>
          {/* Adjusted to fit new legs: M 40 110 L 48 110; M 52 110 L 60 110 */}
          <path d="M 38 110 L 49 110 L 49 181 L 39 181 L 35 150 Z" />
          <path d="M 51 110 L 62 110 L 65 181 L 55 181 L 51 150 Z" />
          {/* Knee rips over the new kneecaps (y=140) */}
          <line x1="37" y1="140" x2="47" y2="140" stroke="#fff" strokeWidth="2" opacity="0.8" />
          <line x1="36" y1="143" x2="44" y2="143" stroke="#fff" strokeWidth="1" opacity="0.5" />
          <line x1="53" y1="138" x2="63" y2="138" stroke="#fff" strokeWidth="2" opacity="0.8" />
        </g>
      );
    case 'm_bot_2': // Regular Jeans
    case 'm_bot_6': // Classic Fit
      return (
        <g fill={color}>
          <path d="M 38 110 L 49 110 L 49 181 L 39 181 L 35 150 Z" />
          <path d="M 51 110 L 62 110 L 65 181 L 55 181 L 51 150 Z" />
          {/* Denim fade lines */}
          <path d="M 44 115 L 44 175" stroke="#FFFFFF" strokeWidth="2" opacity="0.1" />
          <path d="M 56 115 L 56 175" stroke="#FFFFFF" strokeWidth="2" opacity="0.1" />
        </g>
      );
    case 'm_bot_3': // Cargo Pants (baggier fit)
      return (
        <g fill={color}>
          <path d="M 36 110 L 50 110 L 52 182 L 36 182 L 32 150 Z" />
          <path d="M 50 110 L 64 110 L 68 182 L 52 182 L 48 150 Z" />
          {/* Cargo pockets */}
          <rect x="30" y="145" width="8" height="15" fill="#3A4A28" rx="2" />
          <rect x="62" y="145" width="8" height="15" fill="#3A4A28" rx="2" />
        </g>
      );
    case 'm_bot_4': // Beach Shorts
      return (
        <g fill={color}>
          <path d="M 36 110 L 50 110 L 50 150 L 34 150 Z" />
          <path d="M 50 110 L 64 110 L 66 150 L 50 150 Z" />
          {/* Floral or stripe pattern */}
          <rect x="40" y="115" width="4" height="35" fill="#FFF" opacity="0.3" />
          <rect x="56" y="115" width="4" height="35" fill="#FFF" opacity="0.3" />
        </g>
      );
    case 'm_bot_5': // Sports Capri / Joggers
      return (
        <g fill={color}>
          <path d="M 38 110 L 49 110 L 48 165 L 40 165 L 36 140 Z" />
          <path d="M 51 110 L 62 110 L 64 165 L 56 165 L 52 140 Z" />
          {/* Sport stripes */}
          <path d="M 48 110 L 47 165" stroke="#10b981" strokeWidth="2" />
          <path d="M 52 110 L 53 165" stroke="#10b981" strokeWidth="2" />
        </g>
      );

    // FEMALE BOTTOMS - Enhanced to match feminine curved legs
    case 'f_bot_1': // Formal Trousers (flared slightly)
      return (
        <g fill={color}>
          {/* Base female legs: M 38 110 L 48 110; M 52 110 L 62 110 */}
          <path d="M 36 110 L 49 110 L 47 181 L 34 181 L 32 150 Z" />
          <path d="M 51 110 L 64 110 L 66 181 L 53 181 L 55 150 Z" />
          {/* Trouser crease */}
          <line x1="42.5" y1="110" x2="40.5" y2="181" stroke="#FFF" strokeWidth="1" opacity="0.2" />
          <line x1="57.5" y1="110" x2="59.5" y2="181" stroke="#FFF" strokeWidth="1" opacity="0.2" />
        </g>
      );
    case 'f_bot_3': // Female Jeans (Skinny fit)
      return (
        <g fill={color}>
          <path d="M 37 110 L 48 110 L 46.5 180 L 36 180 L 35 150 Z" />
          <path d="M 52 110 L 63 110 L 64 180 L 53.5 180 L 55 150 Z" />
        </g>
      );
    case 'f_bot_4': // Short Skirt
      return (
        <g fill={color}>
          {/* Skirt extending from waist to mid-thigh */}
          <path d="M 34 110 L 66 110 L 70 145 L 30 145 Z" />
          {/* Pleats detail */}
          <line x1="40" y1="110" x2="38" y2="145" stroke="#000" strokeWidth="1" opacity="0.2" />
          <line x1="50" y1="110" x2="50" y2="145" stroke="#000" strokeWidth="1" opacity="0.2" />
          <line x1="60" y1="110" x2="62" y2="145" stroke="#000" strokeWidth="1" opacity="0.2" />
        </g>
      );
    case 'f_bot_5': // Denim Shorts
      return (
        <g fill={color}>
          <path d="M 35 110 L 50 110 L 49 138 L 33 138 Z" />
          <path d="M 50 110 L 65 110 L 67 138 L 51 138 Z" />
          {/* Frayed edges */}
          <line x1="33" y1="138" x2="49" y2="138" stroke="#FFF" strokeWidth="2" strokeDasharray="1 1" opacity="0.5" />
          <line x1="51" y1="138" x2="67" y2="138" stroke="#FFF" strokeWidth="2" strokeDasharray="1 1" opacity="0.5" />
        </g>
      );
    case 'f_bot_6': // High Torn Jeans
      return (
        <g fill={color}>
          <path d="M 37 110 L 48 110 L 46.5 180 L 36 180 L 35 150 Z" />
          <path d="M 52 110 L 63 110 L 64 180 L 53.5 180 L 55 150 Z" />
          {/* Multiple rips */}
          <path d="M 37 130 Q 42 128 47 130" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.9" />
          <path d="M 38 140 Q 42 138 46 140" stroke="#FFF" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M 53 145 Q 58 143 62 145" stroke="#FFF" strokeWidth="2" fill="none" opacity="0.9" />
        </g>
      );
    default:
      return null;
  }
};

const renderFootwearLayer = (id, color) => {
  switch(id) {
    // MALE FOOTWEAR
    case 'm_foot_1': // Sneakers
      return (
        <g fill={color}>
          {/* Left foot: M 38 180 L 46 180 Q 44 188 38 188 Z */}
          <path d="M 36 180 L 48 180 Q 46 190 36 190 Z" />
          <path d="M 52 180 L 64 180 Q 62 190 52 190 Z" />
          {/* Sneaker white soles */}
          <path d="M 36 187 L 46 187 Q 45 190 36 190 Z" fill="#FFFFFF" />
          <path d="M 52 187 L 62 187 Q 61 190 52 190 Z" fill="#FFFFFF" />
        </g>
      );
    case 'm_foot_2': // Loafers
      return (
        <g fill={color}>
          <path d="M 37 182 L 47 182 Q 45 189 37 189 Z" />
          <path d="M 53 182 L 63 182 Q 61 189 53 189 Z" />
          {/* Loafer detail */}
          <rect x="39" y="182" width="6" height="2" fill="#111" opacity="0.3" />
          <rect x="55" y="182" width="6" height="2" fill="#111" opacity="0.3" />
        </g>
      );
    case 'm_foot_3': // Slides
      return (
        <g fill={color}>
          <rect x="37" y="186" width="10" height="2" rx="1" fill="#111" />
          <rect x="53" y="186" width="10" height="2" rx="1" fill="#111" />
          <path d="M 38 180 L 44 180 L 43 184 L 38 184 Z" />
          <path d="M 56 180 L 62 180 L 62 184 L 57 184 Z" />
        </g>
      );

    // FEMALE FOOTWEAR
    case 'f_foot_1': // Closed Heels
      return (
        <g fill={color}>
          {/* Left foot: M 36 180 L 44 180 Q 42 186 36 186 Z */}
          <path d="M 35 181 L 45 181 Q 43 188 35 188 Z" />
          <path d="M 55 181 L 65 181 Q 63 188 55 188 Z" />
          {/* Tiny heel spikes */}
          <rect x="42" y="185" width="2" height="4" fill={color} />
          <rect x="56" y="185" width="2" height="4" fill={color} />
        </g>
      );
    case 'f_foot_2': // Sneakers
      return (
        <g fill={color}>
          <path d="M 34 180 L 45 180 Q 43 188 34 188 Z" />
          <path d="M 55 180 L 66 180 Q 64 188 55 188 Z" />
          {/* Sneaker white soles */}
          <path d="M 34 185 L 44 185 Q 43 188 34 188 Z" fill="#FFF" />
          <path d="M 56 185 L 66 185 Q 65 188 56 188 Z" fill="#FFF" />
        </g>
      );
    case 'f_foot_3': // Slippers
      return (
        <g fill={color}>
          <rect x="35" y="185" width="10" height="2" rx="1" fill="#111" />
          <rect x="55" y="185" width="10" height="2" rx="1" fill="#111" />
          {/* Thong strap */}
          <path d="M 37 180 L 40 185 L 43 180" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M 57 180 L 60 185 L 63 180" fill="none" stroke={color} strokeWidth="1.5" />
        </g>
      );
    default:
      return null;
  }
};

const AvatarPreview = ({ gender, topItem, bottomItem, footwearItem }) => {
  return (
    <svg viewBox="0 0 100 200" className="avatar-preview-canvas">
      {/* 1. Base Body Layer */}
      <BaseAvatar gender={gender} skinTone="medium" />

      {/* 2. Bottom Layer */}
      {bottomItem && (
        <g key={bottomItem} className="layer-animated">
          {renderBottomLayer(bottomItem, COLORS[bottomItem])}
        </g>
      )}

      {/* 3. Top Layer (overlapping bottoms slightly) */}
      {topItem && (
        <g key={topItem} className="layer-animated">
          {renderTopLayer(topItem, COLORS[topItem])}
        </g>
      )}

      {/* 4. Footwear Layer */}
      {footwearItem && (
        <g key={footwearItem} className="layer-animated">
          {renderFootwearLayer(footwearItem, COLORS[footwearItem])}
        </g>
      )}
    </svg>
  );
};

export default AvatarPreview;
