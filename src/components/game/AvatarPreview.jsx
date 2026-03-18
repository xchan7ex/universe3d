import React from 'react';

const COLORS = {
  // Male
  m_top_1: '#FFFFFF', m_top_2: '#4A90D9', m_top_3: '#1C3557', 
  m_top_4: '#2E7D32', m_top_5: '#E53935', m_top_6: '#757575',
  m_bot_1: '#1565C0', m_bot_2: '#1565C0', m_bot_3: '#6D8B4A', 
  m_bot_4: '#FF7043', m_bot_5: '#37474F', m_bot_6: '#0D47A1',
  m_foot_1: '#F5F5F5', m_foot_2: '#4E342E', m_foot_3: '#26C6DA',
  // Female
  f_top_1: '#F48FB1', f_top_2: '#FFFFFF', f_top_3: '#E53935', 
  f_top_4: '#CE93D8', f_top_5: '#4A90D9', f_top_6: '#FFCC80',
  f_bot_1: '#212121', f_bot_2: '#7986CB', f_bot_3: '#1565C0', 
  f_bot_4: '#F48FB1', f_bot_5: '#29B6F6', f_bot_6: '#1976D2',
  f_foot_1: '#212121', f_foot_2: '#F5F5F5', f_foot_3: '#BCAAA4'
};

const BaseAvatar = ({ gender }) => {
  const SKIN = '#FDBCB4';
  if (gender === 'male') {
    return (
      <g>
        {/* Head & Hair */}
        <circle cx="50" cy="25" r="15" fill={SKIN} />
        <rect x="35" y="7" width="30" height="8" rx="4" fill="#3E2723" />
        <rect x="44" y="38" width="12" height="10" fill={SKIN} /> {/* Neck */}
        
        {/* Torso */}
        <polygon points="30,48 70,48 64,110 36,110" fill={SKIN} />
        
        {/* Arms */}
        <rect x="16" y="48" width="12" height="50" rx="6" fill={SKIN} />
        <rect x="72" y="48" width="12" height="50" rx="6" fill={SKIN} />
        {/* Hands */}
        <circle cx="22" cy="98" r="6" fill={SKIN} />
        <circle cx="78" cy="98" r="6" fill={SKIN} />

        {/* Legs */}
        <rect x="36" y="110" width="12" height="70" fill={SKIN} />
        <rect x="52" y="110" width="12" height="70" fill={SKIN} />
        {/* Feet */}
        <ellipse cx="40" cy="184" rx="8" ry="4" fill={SKIN} />
        <ellipse cx="60" cy="184" rx="8" ry="4" fill={SKIN} />
      </g>
    );
  } else {
    return (
      <g>
        {/* Hair Back layer (falls behind) */}
        <path d="M 37,25 Q 20,40 28,65 Q 50,60 72,65 Q 80,40 63,25 Q 50,10 37,25 Z" fill="#3E2723" />
        
        {/* Head */}
        <circle cx="50" cy="25" r="13" fill={SKIN} />
        <rect x="46" y="36" width="8" height="12" fill={SKIN} /> {/* Neck */}

        {/* Hourglass Torso */}
        <path d="M 34,48 L 66,48 Q 58,75 70,110 L 30,110 Q 42,75 34,48 Z" fill={SKIN} />
        
        {/* Arms thinner */}
        <rect x="22" y="48" width="9" height="45" rx="4" fill={SKIN} />
        <rect x="69" y="48" width="9" height="45" rx="4" fill={SKIN} />
        <circle cx="26" cy="93" r="4.5" fill={SKIN} />
        <circle cx="73.5" cy="93" r="4.5" fill={SKIN} />

        {/* Legs curved slightly */}
        <path d="M 32,110 L 46,110 L 42,180 L 36,180 Z" fill={SKIN} />
        <path d="M 54,110 L 68,110 L 64,180 L 58,180 Z" fill={SKIN} />
        
        {/* Feet smaller */}
        <ellipse cx="41" cy="183" rx="6" ry="3" fill={SKIN} />
        <ellipse cx="59" cy="183" rx="6" ry="3" fill={SKIN} />
      </g>
    );
  }
};

const renderBottomLayer = (id, color) => {
  switch(id) {
    // MALE
    case 'm_bot_1': // Ripped Jeans
      return (
        <g fill={color}>
          <rect x="35" y="110" width="14" height="70" />
          <rect x="51" y="110" width="14" height="70" />
          <line x1="37" y1="140" x2="47" y2="140" stroke="#fff" strokeWidth="2" />
          <line x1="53" y1="150" x2="63" y2="150" stroke="#fff" strokeWidth="2" />
        </g>
      );
    case 'm_bot_2': // Regular Jeans
    case 'm_bot_6': // Classic Fit Jeans
      return (
        <g fill={color}>
          <rect x="35" y="110" width="14" height="70" />
          <rect x="51" y="110" width="14" height="70" />
        </g>
      );
    case 'm_bot_3': // Cargo Pants
      return (
        <g fill={color}>
          <rect x="33" y="110" width="16" height="70" />
          <rect x="51" y="110" width="16" height="70" />
          <rect x="30" y="140" width="5" height="15" fill="#556b2f" />
          <rect x="65" y="140" width="5" height="15" fill="#556b2f" />
        </g>
      );
    case 'm_bot_4': // Beach Shorts
      return (
        <g fill={color}>
          <rect x="33" y="110" width="16" height="35" />
          <rect x="51" y="110" width="16" height="35" />
        </g>
      );
    case 'm_bot_5': // Sports Capri
      return (
        <g fill={color}>
          <rect x="35" y="110" width="14" height="55" />
          <rect x="51" y="110" width="14" height="55" />
          <rect x="47" y="110" width="2" height="55" fill="#10b981" />
          <rect x="51" y="110" width="2" height="55" fill="#10b981" />
        </g>
      );

    // FEMALE
    case 'f_bot_1': // Formal Trousers
      return (
        <g fill={color}>
          <path d="M 30,100 L 70,100 L 66,180 L 56,180 L 52,110 L 48,110 L 44,180 L 34,180 Z" />
        </g>
      );
    case 'f_bot_2': // Long Dress Skirt
      return (
        <g fill={color}>
          <path d="M 30,105 L 70,105 L 85,180 L 15,180 Z" />
        </g>
      );
    case 'f_bot_3': // Female Jeans
      return (
        <g fill={color}>
          <path d="M 30,110 L 70,110 L 65,180 L 57,180 L 54,115 L 46,115 L 43,180 L 35,180 Z" />
        </g>
      );
    case 'f_bot_4': // Short Skirt
      return (
        <g fill={color}>
          <path d="M 30,110 L 70,110 L 75,140 L 25,140 Z" />
        </g>
      );
    case 'f_bot_5': // Denim Shorts
      return (
        <g fill={color}>
          <path d="M 30,110 L 70,110 L 67,135 L 55,135 L 52,115 L 48,115 L 45,135 L 33,135 Z" />
        </g>
      );
    case 'f_bot_6': // High Torn Jeans
      return (
        <g fill={color}>
          <path d="M 30,100 L 70,100 L 65,180 L 57,180 L 54,115 L 46,115 L 43,180 L 35,180 Z" />
          <line x1="38" y1="130" x2="48" y2="130" stroke="#fff" strokeWidth="1" />
          <line x1="52" y1="140" x2="62" y2="140" stroke="#fff" strokeWidth="1" />
        </g>
      );
    default:
      return null;
  }
};

const renderTopLayer = (id, color) => {
  switch(id) {
    // MALE
    case 'm_top_1': // Long Sleeve
      return (
        <g fill={color}>
          <polygon points="30,48 70,48 64,110 36,110" />
          <rect x="16" y="48" width="12" height="50" rx="6" />
          <rect x="72" y="48" width="12" height="50" rx="6" />
        </g>
      );
    case 'm_top_2': // T-Shirt
      return (
        <g fill={color}>
          <polygon points="30,48 70,48 64,110 36,110" />
          <rect x="16" y="48" width="12" height="20" rx="6" />
          <rect x="72" y="48" width="12" height="20" rx="6" />
        </g>
      );
    case 'm_top_3': // Formal Shirt
      return (
        <g>
          <g fill={color}>
            <polygon points="30,48 70,48 64,110 36,110" />
            <rect x="16" y="48" width="12" height="50" rx="6" />
            <rect x="72" y="48" width="12" height="50" rx="6" />
          </g>
          <polygon points="44,38 56,38 50,48" fill="#fff" opacity="0.8" />
          <line x1="50" y1="48" x2="50" y2="108" stroke="#fff" strokeWidth="1" />
        </g>
      );
    case 'm_top_4': // Polo Shirt
      return (
        <g>
          <g fill={color}>
            <polygon points="30,48 70,48 64,110 36,110" />
            <rect x="16" y="48" width="12" height="20" rx="6" />
            <rect x="72" y="48" width="12" height="20" rx="6" />
          </g>
          <rect x="46" y="40" width="8" height="6" fill="#fff" opacity="0.8" />
        </g>
      );
    case 'm_top_5': // Sleeveless
      return (
        <g fill={color}>
          <polygon points="34,60 66,60 64,110 36,110" />
          <rect x="34" y="48" width="4" height="12" />
          <rect x="62" y="48" width="4" height="12" />
        </g>
      );
    case 'm_top_6': // Tank Top
      return (
        <g fill={color}>
          <polygon points="38,65 62,65 60,110 40,110" />
          <rect x="38" y="48" width="2" height="17" />
          <rect x="60" y="48" width="2" height="17" />
        </g>
      );

    // FEMALE
    case 'f_top_1': // Frock
      return (
        <g fill={color}>
          <path d="M 34,48 L 66,48 Q 58,75 70,110 L 30,110 Q 42,75 34,48 Z" />
          {/* Frock skirt overlapping bottom */}
          <path d="M 42,75 L 58,75 L 75,130 L 25,130 Z" />
        </g>
      );
    case 'f_top_2': // Long Sleeve
      return (
        <g fill={color}>
          <path d="M 34,48 L 66,48 Q 58,75 70,110 L 30,110 Q 42,75 34,48 Z" />
          <rect x="22" y="48" width="9" height="45" rx="4" />
          <rect x="69" y="48" width="9" height="45" rx="4" />
        </g>
      );
    case 'f_top_3': // Sleeveless
      return (
        <g fill={color}>
          <path d="M 38,55 L 62,55 Q 56,75 68,110 L 32,110 Q 44,75 38,55 Z" />
          <rect x="38" y="48" width="3" height="7" />
          <rect x="59" y="48" width="3" height="7" />
        </g>
      );
    case 'f_top_4': // Off Shoulder
      return (
        <g fill={color}>
          <path d="M 26,55 L 74,55 Q 60,75 70,110 L 30,110 Q 40,75 26,55 Z" />
        </g>
      );
    case 'f_top_5': // T-Shirt
      return (
        <g fill={color}>
          <path d="M 34,48 L 66,48 Q 58,75 70,110 L 30,110 Q 42,75 34,48 Z" />
          <rect x="22" y="48" width="9" height="15" rx="4" />
          <rect x="69" y="48" width="9" height="15" rx="4" />
        </g>
      );
    case 'f_top_6': // Crop Top
      return (
        <g fill={color}>
          <path d="M 34,48 L 66,48 Q 62,65 65,80 L 35,80 Q 38,65 34,48 Z" />
        </g>
      );
    default:
      return null;
  }
};

const renderFootwearLayer = (id, color) => {
  switch(id) {
    // MALE
    case 'm_foot_1': // Sneakers
      return (
        <g fill={color}>
          <rect x="35" y="178" width="12" height="8" rx="4" />
          <rect x="53" y="178" width="12" height="8" rx="4" />
        </g>
      );
    case 'm_foot_2': // Loafers
      return (
        <g fill={color}>
          <rect x="36" y="180" width="10" height="5" />
          <rect x="54" y="180" width="10" height="5" />
        </g>
      );
    case 'm_foot_3': // Slides
      return (
        <g fill={color}>
          <rect x="36" y="183" width="10" height="2" />
          <rect x="54" y="183" width="10" height="2" />
          <rect x="38" y="180" width="6" height="3" fill="#111" />
          <rect x="56" y="180" width="6" height="3" fill="#111" />
        </g>
      );

    // FEMALE
    case 'f_foot_1': // Closed Heels
      return (
        <g fill={color}>
          <path d="M 33,180 L 45,180 L 46,186 L 33,186 Z" />
          <path d="M 55,180 L 67,180 L 67,186 L 54,186 Z" />
        </g>
      );
    case 'f_foot_2': // Sneakers
      return (
        <g fill={color}>
          <rect x="34" y="179" width="12" height="6" rx="3" />
          <rect x="54" y="179" width="12" height="6" rx="3" />
        </g>
      );
    case 'f_foot_3': // Slippers
      return (
        <g fill={color}>
          <rect x="35" y="183" width="10" height="2" />
          <rect x="55" y="183" width="10" height="2" />
          <rect x="37" y="180" width="6" height="3" fill="#111" />
          <rect x="57" y="180" width="6" height="3" fill="#111" />
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
      <BaseAvatar gender={gender} />

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
