// ── OUTCOME TYPES ──
// ideal  = green  — spot on
// over   = amber  — too much
// under  = red    — too little
// none   = gray   — skipped / had none

const questions = [
  {
    food: '🍚', name: 'Rice',
    carbGroup: true,
    question: 'How much <mark>rice</mark> was on your plate?',
    hook: 'Rice is the most over-portioned food in the Indian office lunch. Most people take double what their body needs.',
    options: [
      { label:'None',              desc:'Did not have rice',   bars:0, value:'none',  outcome:'none'  },
      { label:'A little',         desc:'~75g cooked',         bars:1, value:'under', outcome:'under' },
      { label:'About half a plate',desc:'~150g cooked',       bars:2, value:'ideal', outcome:'ideal' },
      { label:'A lot',            desc:'~300g or more',       bars:4, value:'over',  outcome:'over'  },
    ],
    ideal: 'ideal',
    idealLabel: '~150g cooked',
    idealPct: 50,
    insights: {
      none:  { icon:'🤔', verdict:'No rice today', text:'Skipping rice is fine if you had roti or another carb. If not, your body may have missed slow-release energy for the afternoon.' },
      under: { icon:'💡', verdict:'A little light on rice', text:'<strong>~75g is on the lower side.</strong> A moderate portion gives sustained energy through the afternoon. Fine if you had roti too.' },
      ideal: { icon:'✅', verdict:'Good rice portion', text:'<strong>~150g is the sweet spot.</strong> Enough slow-release energy for 3–4 hours without tipping into excess.' },
      over:  { icon:'⚠️', verdict:'A bit too much rice', text:'<strong>~300g+ is more than most people need</strong> — especially if you also had roti. Excess carbs spike blood sugar and cause the 3pm slump.' },
    },
    yourLabel: { none:'None', under:'A little (~75g)', ideal:'Half a plate (~150g)', over:'A lot (~300g+)' },
    yourPct:   { none:0, under:25, ideal:50, over:90 },
    breakdown: { emoji:'🍚', name:'Rice' },
    tip: { ideal:'Good rice portion. Keep it around 150g for sustained afternoon energy.', over:'Try reducing rice slightly, especially if you also had roti.', under:'A moderate rice portion gives your body the slow carbs it needs.', none:'If you skipped rice, make sure roti or another carb covered your energy needs.' },
  },
  {
    food: '🫓', name: 'Roti',
    carbGroup: true,
    question: 'How many <mark>rotis</mark> did you have?',
    hook: 'The average office lunch has 3–4 rotis. Most people need fewer than they think — especially when rice is also on the plate.',
    options: [
      { label:'None',      desc:'Did not have roti',   bars:0, value:'none',  outcome:'none'  },
      { label:'1–2 rotis', desc:'~120–240 calories',   bars:2, value:'ideal', outcome:'ideal' },
      { label:'3–4 rotis', desc:'~360–480 calories',   bars:3, value:'over',  outcome:'over'  },
      { label:'5 or more', desc:'~600+ calories',      bars:4, value:'over',  outcome:'over'  },
    ],
    ideal: 'ideal',
    idealLabel: '1–2 rotis',
    idealPct: 45,
    insights: {
      none:  { icon:'🤔', verdict:'No roti today', text:'Skipping roti is fine if you had rice or another carb. If you skipped all carbs, your body may have been low on energy for the afternoon.' },
      under: { icon:'✅', verdict:'Good roti portion', text:'<strong>1–2 rotis is just right.</strong> Enough slow-release carbs without tipping into heavy, sluggish territory.' },
      ideal: { icon:'✅', verdict:'Good roti portion', text:'<strong>1–2 rotis is just right.</strong> Enough slow-release carbs without tipping into heavy, sluggish territory.' },
      over:  { icon:'⚠️', verdict:'A few too many rotis', text:'<strong>3 or more rotis is more carbs than most people need</strong> — especially if rice was also on the plate. The extra refined carbs slow thinking.' },
    },
    yourLabel: { none:'None', under:'1–2 rotis', ideal:'1–2 rotis', over:'3 or more' },
    yourPct:   { none:0, under:45, ideal:45, over:85 },
    breakdown: { emoji:'🫓', name:'Roti' },
    tip: { ideal:'1–2 rotis is the sweet spot. Keep this up.', over:'Try reducing to 2 rotis, especially if you also had rice.', under:'1–2 rotis with a balanced plate is all you need.', none:'If you skipped roti and rice, make sure another carb source covered your energy needs.' },
  },
  {
    food: '🍊', name: 'Fruit',
    question: 'Did you have any <mark>fruit</mark> with or after your meal?',
    hook: 'Most office meals are missing fruit entirely. Even one piece adds vitamins, fibre and natural sweetness that reduces cravings later.',
    options: [
      { label:'None',              desc:'No fruit today',            bars:0, value:'none',  outcome:'none'  },
      { label:'A small piece',     desc:'Half a fruit or a few bites',bars:1, value:'under', outcome:'under' },
      { label:'One whole fruit',   desc:'Apple, banana, orange etc.',bars:3, value:'ideal', outcome:'ideal' },
      { label:'Two or more',       desc:'Multiple fruits or a bowl', bars:4, value:'over',  outcome:'over'  },
    ],
    ideal: 'ideal',
    idealLabel: '1 whole fruit',
    idealPct: 60,
    insights: {
      none:  { icon:'💡', verdict:'No fruit today', text:'<strong>Fruit is the most skipped item in office lunches.</strong> Even one piece adds vitamin C, fibre and natural sugar that is far better than a post-lunch biscuit or chai.' },
      under: { icon:'💡', verdict:'A little is a start', text:'<strong>Half a fruit is better than none.</strong> Try to get to one whole piece — the fibre in a full fruit slows sugar absorption and keeps energy stable.' },
      ideal: { icon:'✅', verdict:'Great fruit choice', text:'<strong>One whole fruit is exactly right.</strong> Natural fibre, vitamins and the sweetness hit that stops you reaching for something processed after lunch.' },
      over:  { icon:'✅', verdict:'Fruit-forward — well done', text:'More than one fruit is rarely a problem. The natural fibre means the sugars absorb slowly. This is a very good lunch habit.' },
    },
    yourLabel: { none:'None', under:'A small piece', ideal:'One fruit', over:'Two or more' },
    yourPct:   { none:0, under:25, ideal:60, over:90 },
    breakdown: { emoji:'🍊', name:'Fruit' },
    tip: { ideal:'One fruit after lunch is one of the best habits you can build. Keep it up.', over:'More fruit is fine — the fibre keeps natural sugars slow. Good habit.', under:'Try to have a full piece of fruit next time — it makes a bigger difference than a small bite.', none:'Add one fruit to your next lunch — it is the easiest upgrade you can make today.' },
  },
  {
    food: '🥦', name: 'Vegetables',
    question: 'How much of your plate was <mark>vegetables</mark>?',
    hook: 'The single most consistent advice from every nutritionist: more vegetables. Half your plate should be vegetables at every meal.',
    options: [
      { label:'None',              desc:'No vegetables today',       bars:0, value:'none',  outcome:'none'  },
      { label:'A small side',      desc:'~100g',                     bars:1, value:'under', outcome:'under' },
      { label:'About a third',     desc:'~130g',                     bars:2, value:'under', outcome:'under' },
      { label:'Half or more',      desc:'~200g+',                    bars:3, value:'ideal', outcome:'ideal' },
    ],
    ideal: 'ideal',
    idealLabel: 'Half the plate (~200g+)',
    idealPct: 75,
    insights: {
      none:  { icon:'⚠️', verdict:'No vegetables today', text:'<strong>A plate without vegetables is a plate without fibre, vitamins or antioxidants.</strong> Even a small side of vegetables makes a significant difference to how you feel at 4pm.' },
      under: { icon:'💡', verdict:'Vegetables need more space', text:'<strong>A small side is a start — but half the plate is the goal.</strong> More vegetables means more fibre, which slows digestion and keeps your energy stable longer.' },
      ideal: { icon:'✅', verdict:'Great vegetable portion', text:'<strong>Half the plate in vegetables is exactly right.</strong> Fibre, vitamins, water content — vegetables do more for your afternoon energy than almost anything else.' },
      over:  { icon:'✅', verdict:'Excellent — vegetables first', text:'You\'re leading with vegetables. That\'s the single best habit for a balanced plate — it keeps energy stable and prevents over-eating everything else.' },
    },
    yourLabel: { none:'None', under:'Small side', ideal:'Half the plate', over:'More than half' },
    yourPct:   { none:0, under:30, ideal:75, over:95 },
    breakdown: { emoji:'🥦', name:'Vegetables' },
    tip: { ideal:'Vegetables at half the plate is the goal — you\'re already there. Keep this habit every meal.', over:'Leading with vegetables is one of the best plate habits. Keep going.', under:'Try to double your vegetable portion next time — push from a small side to half the plate.', none:'Even a small side of vegetables next meal makes a real difference. Start there.' },
  },
  {
    food: '🥩', name: 'Protein',
    type: 'multiselect',
    question: 'Which <mark>protein foods</mark> were on your plate?',
    hook: 'Protein is the most under-eaten nutrient in office lunches. Without it, hunger returns within 2 hours — regardless of how full you feel right after eating.',
    proteinFoods: [
      { label:'Paneer',   emoji:'🧀', grams:12 },
      { label:'Chicken',  emoji:'🍗', grams:25 },
      { label:'Eggs',     emoji:'🥚', grams:13 },
      { label:'Fish',     emoji:'🐟', grams:22 },
      { label:'Dal',      emoji:'🫘', grams:9  },
      { label:'Tofu',     emoji:'⬜', grams:10 },
      { label:'Sprouts',  emoji:'🌱', grams:7  },
      { label:'None',     emoji:'—',  grams:0  },
    ],
    ideal: 'ideal',
    idealLabel: '~20g protein or more',
    idealPct: 60,
    insights: {
      none:  { icon:'⚠️', verdict:'No protein today', text:'<strong>A meal without protein is a meal that won\'t keep you full.</strong> Without it, hunger returns in 1–2 hours. Even a small dal serving makes a real difference.' },
      under: { icon:'💡', verdict:'Protein a bit low', text:'<strong>Under 10g of protein is on the low side.</strong> Aim for at least one good protein source per meal — dal, paneer, eggs or chicken all work.' },
      ideal: { icon:'✅', verdict:'Good protein intake', text:'<strong>You got a solid protein hit from your meal.</strong> This is what keeps you full, focused and away from the 3pm snack drawer.' },
      over:  { icon:'✅', verdict:'Strong on protein', text:'A high-protein meal is rarely a problem. It keeps you full, supports muscle and won\'t spike blood sugar. Good habit.' },
    },
    yourLabel: { none:'None', under:'Under 10g', ideal:'~20g+', over:'30g+' },
    yourPct:   { none:0, under:20, ideal:60, over:90 },
    breakdown: { emoji:'🥩', name:'Protein' },
    tip: { ideal:'Good protein intake — keep including at least one protein source every meal.', over:'High protein is a good habit. Keep it up.', under:'Add one more protein source next time — dal, paneer or eggs are easy to include.', none:'Adding any protein source to your next meal is the single biggest upgrade you can make.' },
  },

  {
    food: '🥗', name: 'Salad / Greens',
    question: 'Did you have any <mark>salad or greens</mark> with your meal?',
    hook: 'Raw salad and greens are the most skipped item on any cafeteria plate — and one of the easiest wins for your afternoon energy.',
    options: [
      { label:'None',               desc:'No salad or greens',      bars:0, value:'none',  outcome:'none'  },
      { label:'A small side',       desc:'~50g',                    bars:1, value:'under', outcome:'under' },
      { label:'A good handful',     desc:'~100g',                   bars:2, value:'ideal', outcome:'ideal' },
      { label:'A large portion',    desc:'~200g or more',           bars:3, value:'ideal', outcome:'ideal' },
    ],
    ideal: 'ideal',
    idealLabel: '~100g or more',
    idealPct: 55,
    insights: {
      none:  { icon:'💡', verdict:'No salad today', text:'<strong>Even a small side of salad changes your plate significantly.</strong> Raw vegetables add fibre and slow down how quickly everything else is digested — keeping energy stable longer.' },
      under: { icon:'💡', verdict:'A little salad is a start', text:'A small side is better than nothing. If you can push it to 100g next time — about a cereal bowl\'s worth — you\'ll notice the difference in how you feel at 4pm.' },
      ideal: { icon:'✅', verdict:'Good amount of greens', text:'<strong>A proper portion of salad or greens alongside your meal is one of the best habits you can build.</strong> It slows digestion, adds fibre and keeps energy stable.' },
      over:  { icon:'✅', verdict:'Excellent — leading with greens', text:'A large portion of salad is one of the best things you can do for your plate. It fills volume, slows digestion and adds vitamins without adding many calories.' },
    },
    yourLabel: { none:'None', under:'Small side (~50g)', ideal:'Medium–large portion', over:'Large portion' },
    yourPct:   { none:0, under:25, ideal:55, over:85 },
    breakdown: { emoji:'🥗', name:'Salad / Greens' },
    tip: { ideal:'A proper salad portion alongside your meal is a habit worth keeping. Keep going.', over:'Leading with a large salad is one of the best plate habits. Keep this up.', under:'Try doubling your salad portion next time — push from a small side to a medium bowl.', none:'Add even a small side of salad or cucumber to your next plate. It\'s the easiest upgrade available.' },
  },
  {
    food: '🍭', name: 'Sweet / Drink',
    question: 'Did you have a <mark>sugary drink or sweet dessert</mark> with your meal?',
    hook: 'One sugary drink has 10 teaspoons of sugar. A dessert after lunch is the single biggest trigger for the 3pm energy crash.',
    options: [
      { label:'Neither',           desc:'No drink or dessert',      bars:0, value:'ideal', outcome:'ideal' },
      { label:'A sugary drink',    desc:'Cola, juice, sweet chai',  bars:2, value:'over',  outcome:'over'  },
      { label:'A dessert',         desc:'Mithai, sweet, cake',      bars:2, value:'over',  outcome:'over'  },
      { label:'Both',              desc:'Drink and dessert',        bars:4, value:'over',  outcome:'over'  },
    ],
    ideal: 'ideal',
    idealLabel: 'Neither',
    idealPct: 5,
    insights: {
      none:  { icon:'✅', verdict:'Great call', text:'<strong>Skipping sugary drinks and dessert is one of the highest-impact choices you can make at lunch.</strong> Your blood sugar stays stable and your 3pm energy stays intact.' },
      under: { icon:'✅', verdict:'Great call', text:'<strong>Skipping sugary drinks and dessert is one of the highest-impact choices you can make at lunch.</strong> Your blood sugar stays stable and your 3pm energy stays intact.' },
      ideal: { icon:'✅', verdict:'Great call', text:'<strong>Skipping sugary drinks and dessert is one of the highest-impact choices you can make at lunch.</strong> Your blood sugar stays stable and your 3pm energy stays intact.' },
      over:  { icon:'⚠️', verdict:'Watch the sugar', text:'<strong>A sugary drink or dessert after lunch causes a blood sugar spike followed by a crash — usually around 3pm.</strong> Swapping to nimbu pani, buttermilk or water makes a real difference.' },
    },
    yourLabel: { none:'Neither', under:'Neither', ideal:'Neither', over:'Had sweet/drink' },
    yourPct:   { none:5, under:5, ideal:5, over:70 },
    breakdown: { emoji:'🍭', name:'Sweet / Drink' },
    tip: { ideal:'No sugary drink or dessert — that\'s the 3pm crash you just avoided. Keep this habit.', over:'Try swapping to nimbu pani or buttermilk next time. Same satisfaction, no sugar crash.', under:'No sugary drink or dessert — that\'s the 3pm crash you just avoided. Keep this habit.', none:'No sugary drink or dessert — that\'s the 3pm crash you just avoided. Keep this habit.' },
  },
];

const badges = [
  { min:85, e:'🏆', n:'Excellent Plate',    line:'Your meal was genuinely well balanced.',      col:'#3BA86A' },
  { min:65, e:'⭐', n:'Good Plate',          line:'Solid choices — a couple of easy upgrades.',  col:'#155493' },
  { min:45, e:'🥗', n:'Developing Plate',   line:'A good start — here\'s how to build on it.',  col:'#F5A623' },
  { min:0,  e:'🌱', n:'Needs More Balance', line:'Every meal is a chance to do better.',         col:'#E05555' },
];

let currentQ = 0;
let answers  = []; // { qIndex, value, outcome }
let answered = false;

function startGame() {
  currentQ = 0; answers = []; answered = false;
  goTo('screen-game');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQ];
  answered = false;
  selectedProteins = new Set();

  // Progress
  document.getElementById('progress-label').textContent = 'Question ' + (currentQ+1) + ' of ' + questions.length;
  const pipsEl = document.getElementById('progress-pips');
  if (pipsEl) {
    pipsEl.innerHTML = questions.map((_,i) =>
      '<div class="progress-pip' + (i < currentQ ? ' done' : i === currentQ ? ' active' : '') + '"></div>'
    ).join('');
  }

  const btn = document.getElementById('btn-next');
  btn.classList.remove('live');
  btn.textContent = currentQ < questions.length - 1 ? 'Next →' : 'See My Results →';

  const area = document.getElementById('question-area');
  area.scrollTop = 0;

  let mainHTML = '';

  if (q.type === 'multiselect') {
    // Protein multi-select chips
    const chipsHTML = q.proteinFoods.map((pf, i) =>
      '<div class="protein-chip" id="pchip-' + i + '" onclick="toggleProtein(' + i + ')">' +
      '<div class="protein-chip-emoji">' + pf.emoji + '</div>' +
      '<div class="protein-chip-label">' + pf.label + '</div>' +
      '</div>'
    ).join('');
    mainHTML = '<div class="protein-grid">' + chipsHTML + '</div>' +
      '<div class="protein-tally" id="protein-tally">' +
      '<span class="protein-tally-label">Estimated protein</span>' +
      '<span class="protein-tally-value" id="protein-tally-val">0g</span>' +
      '</div>';
  } else {
    const optionsHTML = q.options.map((opt, i) => {
      const barsHTML = opt.bars === 0
        ? '<div class="opt-bar-zero">—</div>'
        : Array.from({length:4}, (_,bi) =>
            '<div class="opt-bar' + (bi < opt.bars ? ' filled' : '') + '"></div>'
          ).join('');
      return '<div class="opt" id="opt-' + i + '" onclick="selectOption(' + i + ', \'' + opt.value + '\', \'' + opt.outcome + '\')">' +
        '<div class="opt-visual"><div class="opt-bars">' + barsHTML + '</div></div>' +
        '<div class="opt-content"><div class="opt-label">' + opt.label + '</div><div class="opt-desc">' + opt.desc + '</div></div>' +
        '<div class="opt-result" id="opt-icon-' + i + '"></div>' +
        '</div>';
    }).join('');
    mainHTML = '<div class="options-list">' + optionsHTML + '</div>';
  }

  area.innerHTML =
    '<div class="q-tag"><div class="q-tag-dot"></div><span class="q-tag-text">Question ' + (currentQ+1) + ' · ' + q.name + '</span></div>' +
    '<div class="q-food-hero"><span class="q-food-emoji">' + q.food + '</span><div class="q-food-name">' + q.name + '</div></div>' +
    '<div class="q-question" id="q-question-text"></div>' +
    mainHTML +
    (q.type === 'multiselect' ? '<button class="btn-next" id="btn-confirm-protein" style="position:relative;transform:none;width:100%;margin-bottom:8px;opacity:0.25;pointer-events:none;" onclick="confirmProtein()">Confirm →</button>' : '') +
    (q.hook ? '<div class="q-hook"><span class="hook-icon">💡</span><div class="hook-body"><div class="hook-label">Did you know?</div><div class="hook-text">' + q.hook + '</div></div></div>' : '') +
    '<div class="reveal-panel" id="reveal-panel"></div>';

  document.getElementById('q-question-text').innerHTML = q.question;
}

function selectOption(optIdx, value, outcome) {
  const q = questions[currentQ];

  // If already answered, update the stored answer (allow re-selection)
  if (answered) {
    answers[answers.length - 1] = { qIndex: currentQ, value, outcome };
  } else {
    answered = true;
    answers.push({ qIndex: currentQ, value, outcome });
    const heroEl = document.querySelector('.q-food-hero');
    if (heroEl) heroEl.classList.add('answered');
  }

  // Re-style all options — reset then apply
  q.options.forEach((opt, i) => {
    const el = document.getElementById('opt-' + i);
    const iconEl = document.getElementById('opt-icon-' + i);
    el.classList.remove('ideal','over','under','none-sel','selected-other');
    iconEl.textContent = '';
    if (i === optIdx) {
      el.classList.add(outcome === 'ideal' ? 'ideal' : outcome === 'over' ? 'over' : outcome === 'under' ? 'under' : 'none-sel');
      iconEl.textContent = outcome === 'ideal' ? '✅' : outcome === 'over' ? '⚠️' : outcome === 'under' ? '💡' : '—';
    } else {
      el.classList.add('selected-other');
    }
  });

  if (!answered || answers.length > 0) showReaction(outcome);

  // Update reveal panel
  const insight = q.insights[outcome] || q.insights['none'];
  const panel = document.getElementById('reveal-panel');
  const panelClass = outcome === 'ideal' ? 'ideal' : outcome === 'over' ? 'over' : outcome === 'under' ? 'under' : 'none-r';
  const yourPct  = q.yourPct[outcome] || 0;
  const idealPct = q.idealPct || 50;

  panel.className = 'reveal-panel show ' + panelClass;
  panel.innerHTML =
    '<div class="reveal-top"><span class="reveal-icon">' + insight.icon + '</span>' +
    '<span class="reveal-verdict">' + insight.verdict + '</span></div>' +
    '<div class="reveal-insight">' + insight.text + '</div>' +
    '<div class="ideal-callout"><div class="ideal-callout-label">Ideal portion for this meal</div><div class="ideal-callout-value">' + q.idealLabel + '</div></div>' +
    '<div class="comparison-wrap">' +
      (outcome !== 'ideal' ? '<div class="comp-row"><div class="comp-labels"><span class="comp-name">Your plate</span><span class="comp-val">' + (q.yourLabel[outcome]||'') + '</span></div><div class="comp-track"><div class="comp-fill your" style="width:0%" id="your-fill"></div></div></div>' : '') +
      '<div class="comp-row"><div class="comp-labels"><span class="comp-name">' + (outcome === 'ideal' ? 'Your plate ✓' : 'Ideal portion') + '</span><span class="comp-val">' + q.idealLabel + '</span></div><div class="comp-track"><div class="comp-fill ideal" style="width:0%" id="cpv-fill"></div></div></div>' +
    '</div>';

  setTimeout(() => {
    const cpv = document.getElementById('cpv-fill');
    const your = document.getElementById('your-fill');
    if (cpv)  { cpv.style.width = idealPct + '%'; cpv.style.transition = 'width 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s'; }
    if (your) { your.style.width = yourPct + '%'; your.style.transition = 'width 0.9s cubic-bezier(0.22,1,0.36,1) 0.05s'; }
  }, 100);

  setTimeout(() => { panel.scrollIntoView({ behavior:'smooth', block:'nearest' }); }, 200);
  document.getElementById('btn-next').classList.add('live');
}


function nextQuestion() {
  if (!answered) return;
  currentQ++;
  if (currentQ >= questions.length) showScore();
  else renderQuestion();
}

// Track selected protein foods
let selectedProteins = new Set();

function toggleProtein(idx) {
  const q = questions[currentQ];
  const pf = q.proteinFoods[idx];
  const chip = document.getElementById('pchip-' + idx);
  const noneIdx = q.proteinFoods.length - 1; // "None" is always last

  if (pf.label === 'None') {
    // Selecting None clears everything else
    selectedProteins.clear();
    if (chip.classList.contains('selected-none')) {
      chip.classList.remove('selected-none');
    } else {
      selectedProteins.add(idx);
      chip.classList.add('selected-none');
      // Deselect all others
      q.proteinFoods.forEach((_, i) => {
        if (i !== idx) document.getElementById('pchip-' + i).classList.remove('selected');
      });
    }
  } else {
    // Deselect None if it was active
    const noneChip = document.getElementById('pchip-' + noneIdx);
    noneChip.classList.remove('selected-none');
    selectedProteins.delete(noneIdx);

    if (chip.classList.contains('selected')) {
      chip.classList.remove('selected');
      selectedProteins.delete(idx);
    } else {
      chip.classList.add('selected');
      selectedProteins.add(idx);
    }
  }

  // Update tally
  let totalG = 0;
  selectedProteins.forEach(i => { totalG += q.proteinFoods[i].grams; });
  const tallyEl = document.getElementById('protein-tally-val');
  if (tallyEl) {
    tallyEl.textContent = totalG + 'g';
    tallyEl.className = 'protein-tally-value' + (totalG >= 20 ? ' good' : totalG > 0 ? ' low' : '');
  }

  // Enable confirm button once something is selected
  const confirmBtn = document.getElementById('btn-confirm-protein');
  if (confirmBtn) {
    if (selectedProteins.size > 0) {
      confirmBtn.style.opacity = '1';
      confirmBtn.style.pointerEvents = 'all';
      confirmBtn.style.background = 'var(--b)';
    } else {
      confirmBtn.style.opacity = '0.25';
      confirmBtn.style.pointerEvents = 'none';
      confirmBtn.style.background = '';
    }
  }
}

function confirmProtein() {
  const q = questions[currentQ];
  let totalG = 0;
  const noneIdx = q.proteinFoods.length - 1;
  const hasNone = selectedProteins.has(noneIdx);

  if (!hasNone) {
    selectedProteins.forEach(i => { totalG += q.proteinFoods[i].grams; });
  }

  // Derive outcome from total grams
  let outcome, value;
  if (hasNone || totalG === 0) { outcome = 'none'; value = 'none'; }
  else if (totalG < 10)        { outcome = 'under'; value = 'under'; }
  else if (totalG <= 30)       { outcome = 'ideal'; value = 'ideal'; }
  else                         { outcome = 'over';  value = 'over'; }

  // Build label for what they selected
  const selectedNames = hasNone ? 'None' :
    [...selectedProteins].map(i => q.proteinFoods[i].label).join(', ');

  // Store answer with selected foods metadata
  if (answered) {
    answers[answers.length - 1] = { qIndex: currentQ, value, outcome, proteinG: totalG, proteinFoods: selectedNames };
  } else {
    answered = true;
    answers.push({ qIndex: currentQ, value, outcome, proteinG: totalG, proteinFoods: selectedNames });
  }

  // Hero shrink
  const heroEl = document.querySelector('.q-food-hero');
  if (heroEl) heroEl.classList.add('answered');

  // Disable confirm button, show reaction
  const confirmBtn = document.getElementById('btn-confirm-protein');
  if (confirmBtn) { confirmBtn.style.opacity = '0.5'; confirmBtn.style.pointerEvents = 'none'; }
  showReaction(outcome);

  // Show reveal panel
  const insight = q.insights[outcome] || q.insights['none'];
  const panel = document.getElementById('reveal-panel');
  const panelClass = outcome === 'ideal' ? 'ideal' : outcome === 'over' ? 'over' : outcome === 'under' ? 'under' : 'none-r';

  // Dynamic ideal label based on grams
  const dynamicIdeal = hasNone ? 'None selected' : totalG + 'g from: ' + selectedNames;
  const idealPct = q.idealPct || 60;
  const yourPct = hasNone ? 0 : Math.min(Math.round((totalG / 30) * idealPct), 95);

  panel.className = 'reveal-panel show ' + panelClass;
  panel.innerHTML =
    '<div class="reveal-top"><span class="reveal-icon">' + insight.icon + '</span>' +
    '<span class="reveal-verdict">' + insight.verdict + '</span></div>' +
    '<div class="reveal-insight">' + insight.text + '</div>' +
    '<div class="ideal-callout"><div class="ideal-callout-label">Ideal portion for this meal</div><div class="ideal-callout-value">' + q.idealLabel + '</div></div>' +
    '<div class="comparison-wrap">' +
    '<div class="comp-row"><div class="comp-labels"><span class="comp-name">Your plate</span><span class="comp-val">' + (hasNone ? 'None' : totalG + 'g') + '</span></div><div class="comp-track"><div class="comp-fill your" style="width:0%" id="your-fill"></div></div></div>' +
    '<div class="comp-row"><div class="comp-labels"><span class="comp-name">Ideal</span><span class="comp-val">' + q.idealLabel + '</span></div><div class="comp-track"><div class="comp-fill ideal" style="width:0%" id="cpv-fill"></div></div></div>' +
    '</div>';

  setTimeout(() => {
    const cpv = document.getElementById('cpv-fill');
    const your = document.getElementById('your-fill');
    if (cpv)  { cpv.style.width = idealPct + '%'; cpv.style.transition = 'width 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s'; }
    if (your) { your.style.width = yourPct + '%'; your.style.transition = 'width 0.9s cubic-bezier(0.22,1,0.36,1) 0.05s'; }
  }, 100);

  setTimeout(() => { panel.scrollIntoView({ behavior:'smooth', block:'nearest' }); }, 200);
  document.getElementById('btn-next').classList.add('live');

  // Reset for next time
  selectedProteins = new Set();
}

function showReaction(outcome) {
  const pop = document.getElementById('reaction-pop');
  const sets = {
    ideal: ['✅','🙌','💪','⭐','🎯'],
    over:  ['⚠️','🤔','😬','👀'],
    under: ['💡','🤔','😮'],
    none:  ['🤷','😌','👌'],
  };
  const set = sets[outcome] || sets.none;
  pop.textContent = set[Math.floor(Math.random() * set.length)];
  pop.classList.add('show');
  setTimeout(() => pop.classList.remove('show'), 800);
}

function calcScore() {
  // ── Weights (sum = 100) ──
  // Carbs (Rice + Roti) share 20pts as one group
  // Protein 25, Vegetables 18, Sweet 15, Salad 12, Fruit 10
  const weights = {
    'Protein':      25,
    'Vegetables':   18,
    'Sweet / Drink':15,
    'Salad / Greens':12,
    'Fruit':        10,
    '_carbs':       20,  // shared between Rice and Roti
  };

  // Score ratio per outcome (0–1)
  function ratio(outcome, name) {
    if (name === 'Sweet / Drink') {
      return (outcome === 'ideal' || outcome === 'none') ? 1.0 : 0.0;
    }
    if (outcome === 'ideal') return 1.0;
    if (outcome === 'over')  return 0.6;
    if (outcome === 'under') return 0.5;
    return 0.2; // none
  }

  // Collect answers by name
  const byName = {};
  answers.forEach(a => { byName[questions[a.qIndex].name] = a; });

  let total = 0;

  // Non-carb questions — straightforward
  ['Protein','Vegetables','Sweet / Drink','Salad / Greens','Fruit'].forEach(name => {
    if (byName[name]) {
      total += ratio(byName[name].outcome, name) * weights[name];
    }
  });

  // Carbs — Rice + Roti share one 20pt slot
  const riceA = byName['Rice'];
  const rotiA = byName['Roti'];

  if (riceA || rotiA) {
    const riceR = riceA ? ratio(riceA.outcome, 'Rice') : 0;
    const rotiR = rotiA ? ratio(rotiA.outcome, 'Roti') : 0;

    let carbScore;
    if (riceA && rotiA) {
      // Both questions answered
      // If one is 'none', the other carries full weight — it's fine to skip one
      if (riceA.outcome === 'none' && rotiA.outcome === 'none') {
        carbScore = 0.2; // no carbs at all
      } else if (riceA.outcome === 'none') {
        carbScore = rotiR; // only roti — score on roti alone
      } else if (rotiA.outcome === 'none') {
        carbScore = riceR; // only rice — score on rice alone
      } else {
        // Both present — average them, but penalise if both are 'over'
        carbScore = (riceR + rotiR) / 2;
        if (riceA.outcome === 'over' && rotiA.outcome === 'over') carbScore *= 0.7; // extra penalty for double carb overload
      }
    } else if (riceA) {
      carbScore = riceR;
    } else {
      carbScore = rotiR;
    }

    total += carbScore * weights['_carbs'];
  }

  return Math.min(Math.round(total), 100);
}

function showScore() {
  const score = calcScore();
  const badge = badges.find(b => score >= b.min);

  document.getElementById('score-number').textContent = score;
  document.getElementById('score-number').style.color = badge.col;
  document.getElementById('score-badge-emoji').textContent = badge.e;
  document.getElementById('score-badge-name').textContent = badge.n;
  document.getElementById('score-badge-name').style.color = badge.col;
  document.getElementById('score-badge-line').textContent = badge.line;

  const confettiMap = [[85,'🏆 🌟 🏆'],[65,'⭐ 🍽️ ⭐'],[45,'🥗 💪 🥗'],[0,'🌱 💡 🌱']];
  document.getElementById('score-confetti').textContent = confettiMap.find(([min]) => score >= min)[1];

  // Score bar
  const sbar = document.getElementById('score-bar-fill');
  if (sbar) {
    sbar.style.background = badge.col;
    setTimeout(() => { sbar.style.width = score + '%'; sbar.style.transition = 'width 1.4s cubic-bezier(0.22,1,0.36,1)'; }, 100);
  }

  // Takeaways — from worst outcomes first
  const takeawayEl = document.getElementById('takeaways');
  takeawayEl.innerHTML = '';

  const priority = ['none', 'under', 'over', 'ideal'];
  const sorted = [...answers].sort((a,b) => priority.indexOf(a.outcome) - priority.indexOf(b.outcome));

  sorted.slice(0,3).forEach((a, i) => {
    const q = questions[a.qIndex];
    const tipText = q.tip[a.outcome] || q.tip.ideal;
    takeawayEl.innerHTML += '<div class="takeaway-item">' +
      '<div class="takeaway-num">' + (i+1) + '</div>' +
      '<div class="takeaway-text">' + tipText + '</div>' +
      '</div>';
  });

  // Progress pips to full
  const pipsEl = document.getElementById('progress-pips');
  if (pipsEl) pipsEl.innerHTML = questions.map(() => '<div class="progress-pip done"></div>').join('');

  // Tomorrow's verdict
  const verdictEl = document.getElementById('portion-profile');
  if (verdictEl) {
    const goods  = answers.filter(a => a.outcome === 'ideal' || (a.outcome === 'none' && questions[a.qIndex].name === 'Sweet / Drink'));
    const fixes  = answers.filter(a => a.outcome === 'over'  && questions[a.qIndex].name !== 'Sweet / Drink');
    const misses = answers.filter(a => a.outcome === 'none'  && questions[a.qIndex].name !== 'Sweet / Drink');
    const lows   = answers.filter(a => a.outcome === 'under');

    let overallLine = '';
    if (score >= 85)      overallLine = 'Your plate today was well balanced. Small refinements will make it excellent.';
    else if (score >= 65) overallLine = 'Solid choices overall — a couple of targeted swaps will lift this significantly.';
    else if (score >= 45) overallLine = 'Your plate has a good base. Focus on the gaps below and tomorrow will be noticeably better.';
    else                  overallLine = 'There is real room to improve here. Start with one change tomorrow — it adds up quickly.';

    let rows = '<div class="verdict-overall">' + overallLine + '</div><div class="verdict-list">';

    goods.forEach(a => {
      const q = questions[a.qIndex];
      rows += '<div class="verdict-row"><div class="verdict-dot good"></div><span><strong>' + q.breakdown.name + ':</strong> Portion was right. Keep this.</span></div>';
    });
    fixes.forEach(a => {
      const q = questions[a.qIndex];
      rows += '<div class="verdict-row"><div class="verdict-dot fix"></div><span><strong>' + q.breakdown.name + ':</strong> A bit too much. Try reducing slightly tomorrow.</span></div>';
    });
    lows.forEach(a => {
      const q = questions[a.qIndex];
      rows += '<div class="verdict-row"><div class="verdict-dot fix"></div><span><strong>' + q.breakdown.name + ':</strong> Too little. Give it more space on your plate.</span></div>';
    });
    misses.forEach(a => {
      const q = questions[a.qIndex];
      rows += '<div class="verdict-row"><div class="verdict-dot miss"></div><span><strong>' + q.breakdown.name + ':</strong> Missing today. Make sure it is on the plate tomorrow.</span></div>';
    });

    rows += '</div>';
    verdictEl.innerHTML = '<div class="verdict-box">' + rows + '</div>';
  }

  goTo('screen-score');
}

const GAME_LINK = 'YOUR_GAME_LINK_HERE'; // 👈 Replace with your published link

function shareResult() {
  const score = document.getElementById('score-number').textContent;
  const badge = document.getElementById('score-badge-name').textContent;
  document.getElementById('share-card-score').innerHTML = score + '<span>/100</span>';
  document.getElementById('share-card-badge').textContent = badge;
  document.getElementById('share-overlay').classList.add('open');
  document.getElementById('share-copied').classList.remove('show');
}

function copyScore() {
  const score = document.getElementById('score-number').textContent;
  const badge = document.getElementById('score-badge-name').textContent;
  const text = 'I just checked my lunch plate on Know Your Plate! 🍽️' +
    '\nMy Nutrition Score: ' + score + '/100 — ' + badge +
    '\n\nCheck yours → ' + GAME_LINK +
    '\n\nWellness@Work by SmartQ 🌱 #WorldHealthDay2026';
  navigator.clipboard.writeText(text).then(() => {
    document.getElementById('share-copied').classList.add('show');
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    document.getElementById('share-copied').classList.add('show');
  });
}

function shareImage() {
  const score = document.getElementById('score-number').textContent;
  const badge = document.getElementById('score-badge-name').textContent;
  const badgeEmoji = document.getElementById('score-badge-emoji').textContent;
  const scoreColor = document.getElementById('score-number').style.color || '#FCC529';

  const canvas = document.getElementById('share-canvas');
  const W = 1080, H = 1080;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');

  // ── helpers ──
  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.lineTo(x+w-r, y); ctx.quadraticCurveTo(x+w, y, x+w, y+r);
    ctx.lineTo(x+w, y+h-r); ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    ctx.lineTo(x+r, y+h); ctx.quadraticCurveTo(x, y+h, x, y+h-r);
    ctx.lineTo(x, y+r); ctx.quadraticCurveTo(x, y, x+r, y);
    ctx.closePath();
  }

  // ── background ──
  ctx.fillStyle = '#111111';
  ctx.fillRect(0, 0, W, H);

  // glow top-right
  const grd = ctx.createRadialGradient(W*0.85, H*0.1, 0, W*0.85, H*0.1, W*0.65);
  grd.addColorStop(0, 'rgba(252,197,41,0.15)');
  grd.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grd; ctx.fillRect(0, 0, W, H);

  // ── top pill label ──
  roundRect(72, 72, 420, 52, 26);
  ctx.fillStyle = 'rgba(255,255,255,0.08)'; ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.45)';
  ctx.font = 'bold 22px Arial, sans-serif';
  ctx.fillText('WELLNESS@WORK  ·  SMARTQ', 96, 106);

  // ── badge emoji ──
  ctx.font = '110px serif';
  ctx.fillText(badgeEmoji, 72, 270);

  // ── big score number ──
  ctx.fillStyle = scoreColor;
  ctx.font = 'bold 280px Georgia, serif';
  ctx.fillText(score, 68, 580);

  // measure score width for /100 placement
  const scoreW = ctx.measureText(score).width;
  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  ctx.font = 'bold 80px Georgia, serif';
  ctx.fillText('/100', 80 + scoreW - 20, 510);

  // ── horizontal rule ──
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(72, 620); ctx.lineTo(W-72, 620); ctx.stroke();

  // ── badge name ──
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 56px Georgia, serif';
  ctx.fillText(badge, 72, 710);

  // ── score label ──
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '36px Arial, sans-serif';
  ctx.fillText('Nutrition Score · Know Your Plate', 72, 770);

  // ── yellow accent bar ──
  ctx.fillStyle = '#FCC529';
  ctx.fillRect(72, 820, 60, 6);

  // ── hashtag ──
  ctx.fillStyle = '#FCC529';
  ctx.font = 'bold 38px Arial, sans-serif';
  ctx.fillText('#WorldHealthDay2026', 72, 890);

  // ── game link ──
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.font = '30px Arial, sans-serif';
  ctx.fillText('Play → ' + GAME_LINK, 72, 940);

  // ── faint plate watermark ──
  ctx.globalAlpha = 0.05;
  ctx.font = '220px serif';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('🍽️', W - 300, H - 40);
  ctx.globalAlpha = 1;

  // ── trigger download / native share ──
  try {
    canvas.toBlob(function(blob) {
      if (!blob) { alert('Could not generate image. Try the copy text option.'); return; }
      const file = new File([blob], 'my-plate-score.png', { type:'image/png' });
      if (navigator.share && navigator.canShare && navigator.canShare({ files:[file] })) {
        navigator.share({
          files: [file],
          title: 'My Plate Score',
          text: 'I scored ' + score + '/100 on Know Your Plate! Check yours → ' + GAME_LINK + ' #WorldHealthDay2026'
        }).catch(function(){});
      } else {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'my-plate-score.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1000);
      }
    }, 'image/png');
  } catch(err) {
    // Last resort fallback
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'my-plate-score.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

function closeShare(e) {
  if (!e || !document.getElementById('share-sheet').contains(e.target)) {
    document.getElementById('share-overlay').classList.remove('open');
  }
}

function resetGame() {
  currentQ = 0; answers = []; answered = false;
  goTo('screen-intro');
}

function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}
</script>
