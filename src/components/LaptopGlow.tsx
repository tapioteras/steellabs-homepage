// Decorative hero illustration: a laptop with its lid ajar, neon light
// spilling out from under the lid. Flicker animations live in index.css.
export default function LaptopGlow() {
  return (
    <div className="hero-art">
      <svg viewBox="60 110 1120 640" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      <defs>
      <radialGradient id="lg-deskMag" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stopColor="#ff2bd6" stopOpacity="0.55" />
      <stop offset="0.45" stopColor="#b0129a" stopOpacity="0.22" />
      <stop offset="1" stopColor="#3a0435" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="lg-deskCyan" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stopColor="#19f0ff" stopOpacity="0.5" />
      <stop offset="0.5" stopColor="#0a8ab0" stopOpacity="0.18" />
      <stop offset="1" stopColor="#03202e" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="lg-deskAmber" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stopColor="#ffd23f" stopOpacity="0.45" />
      <stop offset="1" stopColor="#ff7a1a" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="lg-room" cx="0.55" cy="0.62" r="0.75">
      <stop offset="0" stopColor="#160a24" />
      <stop offset="0.5" stopColor="#07040e" />
      <stop offset="1" stopColor="#020104" />
      </radialGradient>
      <linearGradient id="lg-keyEdge" gradientUnits="userSpaceOnUse" x1="420" y1="0" x2="930" y2="0">
      <stop offset="0" stopColor="#19f0ff" />
      <stop offset="0.45" stopColor="#8a5cff" />
      <stop offset="0.8" stopColor="#ff2bd6" />
      <stop offset="1" stopColor="#ff5ad8" />
      </linearGradient>
      <linearGradient id="lg-deckFall" gradientUnits="userSpaceOnUse" x1="700" y1="380" x2="745" y2="500">
      <stop offset="0" stopColor="#000000" stopOpacity="0" />
      <stop offset="0.5" stopColor="#000000" stopOpacity="0.35" />
      <stop offset="1" stopColor="#000000" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="lg-lidTop" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#0a0910" />
      <stop offset="0.6" stopColor="#13111b" />
      <stop offset="1" stopColor="#1e1829" />
      </linearGradient>
      <linearGradient id="lg-lidRim" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor="#19f0ff" />
      <stop offset="0.55" stopColor="#ff2bd6" />
      <stop offset="1" stopColor="#ff5ad8" />
      </linearGradient>
      <linearGradient id="lg-baseFront" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#2a1a35" />
      <stop offset="1" stopColor="#09060d" />
      </linearGradient>
      <linearGradient id="lg-baseSide" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#123040" />
      <stop offset="1" stopColor="#05080c" />
      </linearGradient>
      <clipPath id="lg-deckClip">
      <polygon points="330,360 502,454 910,317 720,249 930,420 520,560" />
      </clipPath>
      <filter id="lg-blurL" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="28" /></filter>
      <filter id="lg-blurM" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10" /></filter>
      <filter id="lg-blurS" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" /></filter>
      <filter id="lg-blurXS" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.5" /></filter>
      <filter id="lg-grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" />
      <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0" />
      </filter>
      </defs>
      <g className="lg-mag">
      <ellipse cx="820" cy="560" rx="420" ry="170" fill="url(#lg-deskMag)" filter="url(#lg-blurL)" transform="rotate(-18 820 560)" />
      <ellipse cx="1020" cy="340" rx="200" ry="150" fill="url(#lg-deskMag)" filter="url(#lg-blurL)" />
      </g>
      <g className="lg-cyan">
      <ellipse cx="560" cy="620" rx="380" ry="150" fill="url(#lg-deskCyan)" filter="url(#lg-blurL)" transform="rotate(-18 560 620)" />
      <ellipse cx="300" cy="480" rx="230" ry="170" fill="url(#lg-deskCyan)" filter="url(#lg-blurL)" />
      </g>
      <g className="lg-amber">
      <ellipse cx="740" cy="540" rx="240" ry="70" fill="url(#lg-deskAmber)" filter="url(#lg-blurL)" transform="rotate(-18 740 540)" />
      </g>
      <polygon points="330,372 720,262 946,434 520,590" fill="#000000" opacity="0.75" filter="url(#lg-blurM)" />
      <polygon points="330,360 520,560 520,576 330,376" fill="url(#lg-baseSide)" />
      <polygon points="520,560 930,420 930,436 520,576" fill="url(#lg-baseFront)" />
      <line x1="520" y1="560" x2="520" y2="576" stroke="#3a2a48" strokeWidth="1" />
      <line x1="520" y1="560" x2="930" y2="420" stroke="url(#lg-keyEdge)" strokeWidth="1" opacity="0.6" />
      <g clipPath="url(#lg-deckClip)">
      <rect x="300" y="230" width="660" height="350" fill="#0c0a12" />
      <polygon points="489.5,493.6 852.4,369.7 770.7,283.7 407.8,407.6" fill="#060509" />
      <polygon points="651.8,504.4 783.0,459.6 745.0,419.6 613.8,464.4" fill="#0f0c16" stroke="#2a2236" strokeWidth="1" />
      <g fill="#1a1624" stroke="url(#lg-keyEdge)" strokeWidth="0.8" strokeOpacity="0.55">
      <polygon points="491.7,490.2 520.4,480.4 507.1,466.4 478.4,476.2" />
      <polygon points="522.5,479.7 549.1,470.6 535.8,456.6 509.2,465.7" />
      <polygon points="551.1,469.9 577.8,460.8 564.5,446.8 537.9,455.9" />
      <polygon points="579.9,460.1 733.6,407.6 720.3,393.6 566.6,446.1" />
      <polygon points="735.7,406.9 762.3,397.8 749.0,383.8 722.4,392.9" />
      <polygon points="764.4,397.1 791.0,388.0 777.7,374.0 751.1,383.1" />
      <polygon points="793.0,387.3 819.7,378.2 806.4,364.2 779.8,373.3" />
      <polygon points="821.8,377.5 846.4,369.1 833.1,355.1 808.5,363.5" />
      <polygon points="475.6,473.2 526.4,455.8 513.1,441.8 462.3,459.2" />
      <polygon points="528.9,455.0 551.2,447.4 537.9,433.4 515.5,441.0" />
      <polygon points="553.7,446.5 576.0,438.9 562.7,424.9 540.4,432.5" />
      <polygon points="578.5,438.1 600.8,430.4 587.5,416.4 565.2,424.1" />
      <polygon points="603.3,429.6 625.6,422.0 612.3,408.0 590.0,415.6" />
      <polygon points="628.1,421.1 650.4,413.5 637.1,399.5 614.8,407.1" />
      <polygon points="652.9,412.6 675.2,405.0 661.9,391.0 639.6,398.6" />
      <polygon points="677.7,404.2 700.0,396.6 686.7,382.6 664.4,390.2" />
      <polygon points="702.5,395.7 724.8,388.1 711.5,374.1 689.2,381.7" />
      <polygon points="727.3,387.2 749.6,379.6 736.3,365.6 714.0,373.2" />
      <polygon points="752.1,378.8 774.4,371.1 761.1,357.1 738.8,364.8" />
      <polygon points="776.9,370.3 827.7,352.9 814.4,338.9 763.6,356.3" />
      <polygon points="459.4,456.2 502.0,441.6 488.7,427.6 446.1,442.2" />
      <polygon points="504.5,440.8 526.5,433.3 513.2,419.3 491.2,426.8" />
      <polygon points="528.9,432.5 550.9,425.0 537.6,411.0 515.6,418.5" />
      <polygon points="553.3,424.1 575.3,416.6 562.0,402.6 540.0,410.1" />
      <polygon points="577.7,415.8 599.7,408.3 586.4,394.3 564.4,401.8" />
      <polygon points="602.2,407.5 624.1,400.0 610.8,386.0 588.9,393.5" />
      <polygon points="626.6,399.1 648.5,391.6 635.2,377.6 613.3,385.1" />
      <polygon points="651.0,390.8 672.9,383.3 659.6,369.3 637.7,376.8" />
      <polygon points="675.4,382.4 697.3,374.9 684.0,360.9 662.1,368.4" />
      <polygon points="699.8,374.1 721.8,366.6 708.5,352.6 686.5,360.1" />
      <polygon points="724.2,365.8 746.2,358.3 732.9,344.3 710.9,351.8" />
      <polygon points="748.6,357.4 770.6,349.9 757.3,335.9 735.3,343.4" />
      <polygon points="773.1,349.1 811.6,335.9 798.3,321.9 759.8,335.1" />
      <polygon points="443.3,439.2 477.7,427.4 464.4,413.4 430.0,425.2" />
      <polygon points="480.2,426.6 501.8,419.2 488.5,405.2 466.9,412.6" />
      <polygon points="504.2,418.4 525.9,411.0 512.6,397.0 490.9,404.4" />
      <polygon points="528.3,410.1 550.0,402.8 536.7,388.8 515.0,396.1" />
      <polygon points="552.4,401.9 574.0,394.5 560.7,380.5 539.1,387.9" />
      <polygon points="576.5,393.7 598.1,386.3 584.8,372.3 563.2,379.7" />
      <polygon points="600.6,385.5 622.2,378.1 608.9,364.1 587.3,371.5" />
      <polygon points="624.7,377.2 646.3,369.9 633.0,355.9 611.4,363.2" />
      <polygon points="648.8,369.0 670.4,361.6 657.1,347.6 635.5,355.0" />
      <polygon points="672.8,360.8 694.5,353.4 681.2,339.4 659.5,346.8" />
      <polygon points="696.9,352.6 718.6,345.2 705.3,331.2 683.6,338.6" />
      <polygon points="721.0,344.4 742.7,337.0 729.4,323.0 707.7,330.4" />
      <polygon points="745.1,336.1 766.7,328.7 753.4,314.7 731.8,322.1" />
      <polygon points="769.2,327.9 795.4,318.9 782.1,304.9 755.9,313.9" />
      <polygon points="427.1,422.2 449.4,414.6 436.1,400.6 413.8,408.2" />
      <polygon points="451.9,413.7 474.2,406.1 460.9,392.1 438.6,399.7" />
      <polygon points="476.6,405.3 498.9,397.7 485.6,383.7 463.3,391.3" />
      <polygon points="501.4,396.8 523.7,389.2 510.4,375.2 488.1,382.8" />
      <polygon points="526.1,388.4 548.4,380.8 535.1,366.8 512.8,374.4" />
      <polygon points="550.9,379.9 573.2,372.3 559.9,358.3 537.6,365.9" />
      <polygon points="575.6,371.5 597.9,363.9 584.6,349.9 562.3,357.5" />
      <polygon points="600.4,363.0 622.7,355.4 609.4,341.4 587.1,349.0" />
      <polygon points="625.2,354.6 647.5,347.0 634.2,333.0 611.9,340.6" />
      <polygon points="649.9,346.1 672.2,338.5 658.9,324.5 636.6,332.1" />
      <polygon points="674.7,337.7 697.0,330.0 683.7,316.0 661.4,323.7" />
      <polygon points="699.4,329.2 721.7,321.6 708.4,307.6 686.1,315.2" />
      <polygon points="724.2,320.8 746.5,313.1 733.2,299.1 710.9,306.8" />
      <polygon points="748.9,312.3 779.3,301.9 766.0,287.9 735.6,298.3" />
      </g>
      <g className="lg-cyan" style={{ mixBlendMode: 'screen' }}>
      <ellipse cx="440" cy="420" rx="130" ry="60" fill="#19f0ff" opacity="0.35" filter="url(#lg-blurL)" transform="rotate(30 440 420)" />
      <ellipse cx="560" cy="430" rx="90" ry="22" fill="#19f0ff" opacity="0.4" filter="url(#lg-blurM)" transform="rotate(-18 560 430)" />
      </g>
      <g className="lg-mag" style={{ mixBlendMode: 'screen' }}>
      <ellipse cx="800" cy="350" rx="140" ry="40" fill="#ff2bd6" opacity="0.45" filter="url(#lg-blurL)" transform="rotate(-18 800 350)" />
      <ellipse cx="880" cy="330" rx="70" ry="50" fill="#ff2bd6" opacity="0.35" filter="url(#lg-blurM)" />
      </g>
      <g className="lg-amber" style={{ mixBlendMode: 'screen' }}>
      <ellipse cx="680" cy="390" rx="110" ry="24" fill="#ffd23f" opacity="0.5" filter="url(#lg-blurM)" transform="rotate(-18 680 390)" />
      </g>
      <polygon points="330,360 502,454 910,317 720,249 930,420 520,560" fill="url(#lg-deckFall)" />
      </g>
      <g className="lg-cyan">
      <line x1="334" y1="364" x2="502" y2="456" stroke="#19f0ff" strokeWidth="6" opacity="0.6" filter="url(#lg-blurS)" />
      <line x1="502" y1="456" x2="700" y2="389" stroke="#19f0ff" strokeWidth="5" opacity="0.6" filter="url(#lg-blurS)" />
      <line x1="340" y1="366" x2="502" y2="455" stroke="#b8fbff" strokeWidth="1.2" opacity="0.8" filter="url(#lg-blurXS)" />
      </g>
      <g className="lg-mag">
      <line x1="640" y1="409" x2="910" y2="319" stroke="#ff2bd6" strokeWidth="6" opacity="0.65" filter="url(#lg-blurS)" />
      <line x1="910" y1="319" x2="760" y2="264" stroke="#ff2bd6" strokeWidth="4" opacity="0.5" filter="url(#lg-blurS)" />
      <line x1="600" y1="422" x2="908" y2="318" stroke="#ffc2f3" strokeWidth="1.2" opacity="0.8" filter="url(#lg-blurXS)" />
      </g>
      <g className="lg-amber">
      <line x1="580" y1="429" x2="780" y2="362" stroke="#ffd23f" strokeWidth="5" opacity="0.7" filter="url(#lg-blurS)" />
      </g>
      <g className="lg-mag">
      <polygon points="520,560 930,420 1040,480 600,650" fill="#ff2bd6" opacity="0.28" filter="url(#lg-blurM)" />
      <polygon points="910,317 930,420 1010,390 960,290" fill="#ff2bd6" opacity="0.35" filter="url(#lg-blurM)" />
      </g>
      <g className="lg-cyan">
      <polygon points="520,560 720,492 700,600 470,660" fill="#19f0ff" opacity="0.2" filter="url(#lg-blurM)" />
      <polygon points="330,360 520,560 380,560 250,420" fill="#19f0ff" opacity="0.22" filter="url(#lg-blurM)" />
      </g>
      <g className="lg-amber">
      <polygon points="640,520 840,452 900,500 690,580" fill="#ffd23f" opacity="0.3" filter="url(#lg-blurM)" />
      </g>
      <polygon points="330,354 720,244 910,309 502,446" fill="url(#lg-lidTop)" />
      <polygon points="330,354 502,446 502,454 330,360" fill="#0c0a12" />
      <polygon points="502,446 910,309 910,317 502,454" fill="#0e0b14" />
      <polygon points="502,452 910,315 910,318 502,455" fill="url(#lg-lidRim)" className="lg-mag" />
      <polygon points="502,452 910,315 910,318 502,455" fill="#19f0ff" opacity="0.55" className="lg-cyan" />
      <polygon points="330,358 502,452 502,455 330,361" fill="#19f0ff" opacity="0.7" className="lg-cyan" />
      <line x1="502" y1="446" x2="910" y2="309" stroke="url(#lg-lidRim)" strokeWidth="1.2" opacity="0.5" />
      <line x1="330" y1="354" x2="502" y2="446" stroke="#19f0ff" strokeWidth="1" opacity="0.4" className="lg-cyan" />
      <line x1="720" y1="244" x2="910" y2="309" stroke="#ff2bd6" strokeWidth="1" opacity="0.35" className="lg-mag" />
      <polygon points="330,354 720,244 732,251 342,363" fill="#000000" opacity="0.4" />
      <line x1="330" y1="356" x2="720" y2="246" stroke="#0a0810" strokeWidth="5" strokeLinecap="round" />
      <g className="lg-mag">
      <polygon points="540,426 890,310 910,309 502,446" fill="#ff2bd6" opacity="0.12" />
      </g>
      <g className="lg-cyan">
      <polygon points="360,368 420,352 525,424 502,446" fill="#19f0ff" opacity="0.08" />
      </g>
      </svg>
    </div>
  )
}
