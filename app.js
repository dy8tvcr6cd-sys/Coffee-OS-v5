const screens=[...document.querySelectorAll('.screen')];
const drawer=document.getElementById('drawer');
const toastEl=document.getElementById('toast');
const dockBtns=[...document.querySelectorAll('.dock button')];
let currentLang='ko';

const i18n={
ko:{
platform:'CoffeeOS',drawerTitle:'커피 경험 플랫폼',navHome:'홈',navBean:'원두',navBrew:'추출',navSensory:'센서리',navLibrary:'도감',navJournal:'기록',navReminder:'리마인드',navCulture:'커핑',navTaste:'추천',navShop:'구매',
heroPill:'QR · 브루잉 · 센서리 · 도감 · 커핑 · 구매',heroTitle:'원두를 산 뒤에도 브랜드 경험은 계속된다.',heroLead:'원두 봉투의 QR에서 시작해 레시피, 농장 설명, 센서리 기록, 도감, 커핑 소식, 리마인드, 로스터리별 판매 페이지까지 연결합니다.',openQR:'QR 원두 열기',openShop:'로스터리 판매 페이지',
coreLabel:'Core',coreTitle:'CoffeeOS 핵심 기능',featureBean:'원두 상세',featureBeanDesc:'컵노트, 농장, 로스팅 의도, 영상, 도감 등록.',featureBrew:'브루잉',featureBrewDesc:'00:00부터 시작하는 단계형 타이머와 알람.',featureSensory:'센서리',featureSensoryDesc:'초보자용 보완 + 전문가용 CVA 기반 폼.',featureLibrary:'도감',featureLibraryDesc:'원두, 로스터리, 농장을 따로 수집.',featureTaste:'취향 분석',featureTasteDesc:'실제 데이터가 들어오면 즉시 점수화해 추천.',featureShop:'판매 페이지',featureShopDesc:'로스터리별 원두 라인업과 구매 연결.',
beanTitle:'Vivid Gesha Washed',beanSubtitle:'Panama · Finca Vivid · Lot 24A · BLKRITUAL',roastIntentTitle:'로스팅 의도',roastIntentBody:'플로럴과 복숭아 계열의 선명도를 중심에 두고, 식었을 때 홍차 같은 여운이 남도록 설계했습니다. 과도한 단맛보다 투명한 구조를 우선합니다.',farmTitle:'농장과 향미의 연결',farmBody:'보케테 지역은 높은 고도, 큰 일교차, 안개가 많은 환경으로 체리 성숙이 천천히 진행됩니다. 이 조건은 밝은 산미, 섬세한 꽃향, 차 같은 질감과 연결될 수 있습니다. 실제 설명은 로스터리가 제공한 농장 자료를 기준으로 작성되어야 합니다.',videoTitle:'브루잉 영상 영역',videoBody:'15~40초 세로형 레시피 영상이 들어가는 자리입니다.',tempTitle:'온도별 향미',startRecipe:'레시피 시작',addBean:'원두 도감 등록',goShop:'구매 페이지',
brewTitle:'00:00부터 시작하는 레시피 타이머',brewBody:'사용자가 멈추지 않는 한 단계별 추출 알람이 계속 표시됩니다.',start:'시작',stop:'정지',reset:'초기화',brewAlarmTitle:'추출 알람',brewAlarmReady:'타이머를 시작하면 단계별 알람이 표시됩니다.',quickFixTitle:'10초 처방',tooSour:'시고 얇아요',tooBitter:'쓰고 텁텁해요',tooWeak:'향이 약해요',quickFixReady:'문제를 선택하면 바로 수정 방향을 보여줍니다.',
sensoryTitle:'초보자는 쉽게, 전문가는 CVA 기반으로.',sensoryBody:'초보자는 표현을 돕고, 전문가는 구조적으로 평가합니다.',beginner:'초보자용',expert:'전문가용 CVA',easySensory:'쉬운 센서리',easySensoryDesc:'맛을 몰라도 고를 수 있게 감각 중심으로 구성했습니다.',aromaFeel:'향 느낌',peach:'복숭아',citrus:'상큼함',floral:'꽃향',honey:'꿀같은 단맛',chocolate:'초콜릿',teaLike:'차 같다',mouthFeel:'마셨을 때 느낌',clean:'깔끔하다',soft:'부드럽다',heavy:'묵직하다',longFinish:'오래 남는다',memoPlaceholder:'한 줄 감상',saveRecord:'기록 저장',cvaTitle:'CVA 커핑폼 기반',cvaDesc:'공식 양식을 대체하는 것이 아니라, 앱용으로 압축한 전문 기록 구조입니다.',expertMemoPlaceholder:'전문 코멘트',saveCVA:'CVA 기록 저장',
libraryPageTitle:'도감',libraryPageBody:'원두, 로스터리, 농장을 따로 수집합니다.',beanLibrary:'원두 도감',roasterLibrary:'로스터리 도감',farmLibrary:'농장 도감',journalPageTitle:'내 센서리 기록',journalPageBody:'저장한 센서리, 마신 원두, 향미 히스토리를 따로 봅니다.',
reminderPageTitle:'그때 마신 커피를 다시 떠올리기.',reminderPageBody:'1년 전 오늘, 한 달 전 오늘 마신 커피를 리마인드합니다.',requestAlert:'알림 권한 요청',yearAlert:'1년 전 오늘 알림 보기',monthAlert:'한 달 전 오늘 알림 보기',oneYearAgo:'1년 전 오늘',oneMonthAgo:'한 달 전 오늘',sendAlert:'알림 보내기',
cultureTitle:'커핑 소식',cultureBody:'지역별 커핑, 신상 원두 공개, 로스터리 팝업을 모읍니다.',iksanEventMeta:'익산 · 목요일 19:00',iksanEventBody:'코페르먼트와 무산소 라인업 비교.',seoulEventMeta:'서울 · 토요일 17:00',seoulEventBody:'같은 농장 원두의 로스터리별 표현 차이.',
tasteTitle:'실제 데이터 기반 취향 추천',tasteBody:'센서리 기록, 선호 향미, 추출 결과가 들어오면 즉시 점수화합니다.',dataInputLabel:'분석할 데이터 선택',shopTitle:'로스터리별 원두 판매 페이지',shopBody:'앱 내 결제가 아니라 로스터리 구매 링크로 연결하는 구조입니다.',shopRoasteryDesc:'단맛과 클린컵 중심의 원두 라인업.',roasteryPage:'로스터리 페이지',roasteryDesc:'단맛과 클린컵 중심의 로스팅. 조용하지만 선명한 커피 경험.',roasteryPhilosophy:'로스팅 철학',roasteryPhilosophyBody:'향미의 과장보다 추출 안정성과 클린컵을 우선합니다.',currentLineup:'시즌 원두',b2bInquiry:'납품 문의',b2bBody:'납품용 원두는 별도 페이지로 레시피와 운영 가이드를 제공합니다.',dockHome:'홈',dockBean:'원두',dockBrew:'추출',dockLibrary:'도감',dockShop:'구매'
},
en:{
platform:'CoffeeOS',drawerTitle:'Coffee Experience Platform',navHome:'Home',navBean:'Bean',navBrew:'Brew',navSensory:'Sensory',navLibrary:'Library',navJournal:'Journal',navReminder:'Reminder',navCulture:'Cupping',navTaste:'Taste',navShop:'Shop',
heroPill:'QR · Brewing · Sensory · Library · Cupping · Shop',heroTitle:'The brand experience continues after the bean purchase.',heroLead:'From a QR on the bag to recipes, farm stories, sensory logs, collections, cupping news, reminders, and roastery shop pages.',openQR:'Open QR Bean',openShop:'Roastery Shop',
coreLabel:'Core',coreTitle:'Core Functions of CoffeeOS',featureBean:'Bean Detail',featureBeanDesc:'Cup notes, farm story, roast intent, video, and collection.',featureBrew:'Brewing',featureBrewDesc:'A step timer and alerts starting from 00:00.',featureSensory:'Sensory',featureSensoryDesc:'Beginner mode plus CVA-inspired expert form.',featureLibrary:'Library',featureLibraryDesc:'Collect beans, roasteries, and farms separately.',featureTaste:'Taste Analysis',featureTasteDesc:'Scores and recommends instantly when real data enters.',featureShop:'Shop Page',featureShopDesc:'Roastery-specific lineups and purchase links.',
beanTitle:'Vivid Gesha Washed',beanSubtitle:'Panama · Finca Vivid · Lot 24A · BLKRITUAL',roastIntentTitle:'Roast Intent',roastIntentBody:'Built around floral and peach clarity, with a black-tea-like finish as the coffee cools. The goal is transparent structure rather than heavy sweetness.',farmTitle:'Farm and Flavor Connection',farmBody:'Boquete is known for high elevation, wide day-night temperature swings, and misty conditions that can slow cherry maturation. These conditions may support bright acidity, delicate florals, and tea-like texture. Final farm copy should be based on source material provided by the roastery.',videoTitle:'Brewing Video Area',videoBody:'A 15–40 second vertical recipe video can be placed here.',tempTitle:'Flavor by Temperature',startRecipe:'Start Recipe',addBean:'Add to Bean Library',goShop:'Shop Page',
brewTitle:'Recipe Timer Starting from 00:00',brewBody:'Step-by-step brewing alerts continue unless the user stops the timer.',start:'Start',stop:'Stop',reset:'Reset',brewAlarmTitle:'Brew Alerts',brewAlarmReady:'Start the timer to see step-by-step alerts.',quickFixTitle:'10-Second Fix',tooSour:'Sour and thin',tooBitter:'Bitter and dry',tooWeak:'Weak aroma',quickFixReady:'Choose a problem to see a quick correction.',
sensoryTitle:'Easy for beginners, CVA-inspired for experts.',sensoryBody:'Beginner mode helps expression. Expert mode supports structured evaluation.',beginner:'Beginner',expert:'Expert CVA',easySensory:'Easy Sensory',easySensoryDesc:'Designed around sensations so anyone can record what they taste.',aromaFeel:'Aroma Feeling',peach:'Peach',citrus:'Citrus',floral:'Floral',honey:'Honey-like sweetness',chocolate:'Chocolate',teaLike:'Tea-like',mouthFeel:'Mouthfeel',clean:'Clean',soft:'Soft',heavy:'Heavy',longFinish:'Long finish',memoPlaceholder:'One-line note',saveRecord:'Save Record',cvaTitle:'CVA-Inspired Form',cvaDesc:'This does not replace the official form; it is a compressed expert structure for the app.',expertMemoPlaceholder:'Expert comment',saveCVA:'Save CVA Record',
libraryPageTitle:'Library',libraryPageBody:'Collect beans, roasteries, and farms separately.',beanLibrary:'Bean Library',roasterLibrary:'Roastery Library',farmLibrary:'Farm Library',journalPageTitle:'My Sensory Records',journalPageBody:'View saved sensory records, coffee history, and flavor patterns.',
reminderPageTitle:'Remember the coffee you had before.',reminderPageBody:'Recall what you drank one year ago today or one month ago today.',requestAlert:'Request Notification Permission',yearAlert:'Show 1-Year Reminder',monthAlert:'Show 1-Month Reminder',oneYearAgo:'One year ago today',oneMonthAgo:'One month ago today',sendAlert:'Send Alert',
cultureTitle:'Cupping News',cultureBody:'Regional cuppings, new releases, and roastery pop-ups.',iksanEventMeta:'Iksan · Thursday 19:00',iksanEventBody:'Compare co-fermented and anaerobic lineups.',seoulEventMeta:'Seoul · Saturday 17:00',seoulEventBody:'Compare roastery expressions of the same farm.',
tasteTitle:'Real Data-Based Taste Recommendation',tasteBody:'Scores sensory records, flavor preferences, and brew results immediately.',dataInputLabel:'Choose data profile',shopTitle:'Roastery Bean Shop Page',shopBody:'This structure links to each roastery’s store instead of in-app checkout.',shopRoasteryDesc:'A lineup focused on sweetness and clean cup.',roasteryPage:'Roastery Page',roasteryDesc:'Roasting focused on sweetness and clean cup. Quiet but clear coffee experience.',roasteryPhilosophy:'Roasting Philosophy',roasteryPhilosophyBody:'We prioritize brew stability and clean cup over exaggerated flavor.',currentLineup:'Seasonal Lineup',b2bInquiry:'B2B Inquiry',b2bBody:'Wholesale beans get separate pages with recipes and operation guides.',dockHome:'Home',dockBean:'Bean',dockBrew:'Brew',dockLibrary:'Library',dockShop:'Shop'
},
ja:{
platform:'CoffeeOS',drawerTitle:'コーヒー体験プラットフォーム',navHome:'ホーム',navBean:'豆情報',navBrew:'抽出',navSensory:'センサリー',navLibrary:'図鑑',navJournal:'記録',navReminder:'リマインド',navCulture:'カッピング',navTaste:'推薦',navShop:'購入',
heroPill:'QR · 抽出 · センサリー · 図鑑 · カッピング · 購入',heroTitle:'豆を買った後もブランド体験は続く。',heroLead:'袋のQRからレシピ、農園説明、センサリー記録、図鑑、カッピング情報、リマインド、ロースタリー別販売ページまでつなげます。',openQR:'QR豆ページを開く',openShop:'ロースタリー販売ページ',
coreLabel:'Core',coreTitle:'CoffeeOSの主要機能',featureBean:'豆詳細',featureBeanDesc:'カップノート、農園、焙煎意図、動画、図鑑登録。',featureBrew:'抽出',featureBrewDesc:'00:00から始まるステップ式タイマーと通知。',featureSensory:'センサリー',featureSensoryDesc:'初心者向け補助 + CVAベースの専門フォーム。',featureLibrary:'図鑑',featureLibraryDesc:'豆、ロースタリー、農園を分けて収集。',featureTaste:'嗜好分析',featureTasteDesc:'実データが入ると即時にスコア化して推薦。',featureShop:'販売ページ',featureShopDesc:'ロースタリー別ラインナップと購入リンク。',
beanTitle:'Vivid Gesha Washed',beanSubtitle:'Panama · Finca Vivid · Lot 24A · BLKRITUAL',roastIntentTitle:'焙煎意図',roastIntentBody:'花のような香りと桃のような明瞭さを中心に、冷めるにつれて紅茶のような余韻が残る設計です。重い甘さより透明感のある構造を優先します。',farmTitle:'農園と風味のつながり',farmBody:'ボケテ地域は高標高、大きな寒暖差、霧の多い環境によりチェリーの成熟がゆっくり進みます。この条件は明るい酸、繊細な花香、紅茶のような質感につながる可能性があります。最終的な農園説明はロースタリー提供資料を基準に作成します。',videoTitle:'抽出動画エリア',videoBody:'15〜40秒の縦型レシピ動画を配置する場所です。',tempTitle:'温度別の風味',startRecipe:'レシピ開始',addBean:'豆図鑑に登録',goShop:'購入ページ',
brewTitle:'00:00から始まるレシピタイマー',brewBody:'ユーザーが止めない限り、段階別の抽出通知が表示され続けます。',start:'開始',stop:'停止',reset:'リセット',brewAlarmTitle:'抽出通知',brewAlarmReady:'タイマーを開始すると段階別通知が表示されます。',quickFixTitle:'10秒処方',tooSour:'酸っぱく薄い',tooBitter:'苦く渋い',tooWeak:'香りが弱い',quickFixReady:'問題を選ぶと修正案を表示します。',
sensoryTitle:'初心者には簡単に、専門家にはCVAベースで。',sensoryBody:'初心者は表現を助け、専門家は構造的に評価します。',beginner:'初心者用',expert:'専門家CVA',easySensory:'簡単センサリー',easySensoryDesc:'味が分からなくても選べる感覚中心の構成です。',aromaFeel:'香りの印象',peach:'桃',citrus:'爽やか',floral:'花香',honey:'蜂蜜のような甘さ',chocolate:'チョコレート',teaLike:'お茶のよう',mouthFeel:'口当たり',clean:'クリーン',soft:'柔らかい',heavy:'重い',longFinish:'余韻が長い',memoPlaceholder:'一言メモ',saveRecord:'記録を保存',cvaTitle:'CVAベースフォーム',cvaDesc:'公式フォームを置き換えるものではなく、アプリ用に圧縮した専門記録構造です。',expertMemoPlaceholder:'専門コメント',saveCVA:'CVA記録を保存',
libraryPageTitle:'図鑑',libraryPageBody:'豆、ロースタリー、農園を分けて収集します。',beanLibrary:'豆図鑑',roasterLibrary:'ロースタリー図鑑',farmLibrary:'農園図鑑',journalPageTitle:'自分のセンサリー記録',journalPageBody:'保存した記録、飲んだ豆、風味履歴を確認します。',
reminderPageTitle:'以前飲んだコーヒーを思い出す。',reminderPageBody:'1年前の今日、1か月前の今日に飲んだコーヒーをリマインドします。',requestAlert:'通知許可をリクエスト',yearAlert:'1年前の通知を見る',monthAlert:'1か月前の通知を見る',oneYearAgo:'1年前の今日',oneMonthAgo:'1か月前の今日',sendAlert:'通知を送る',
cultureTitle:'カッピング情報',cultureBody:'地域別カッピング、新豆公開、ロースタリーポップアップを集めます。',iksanEventMeta:'益山 · 木曜 19:00',iksanEventBody:'コーファーメントとアナエロビックの比較。',seoulEventMeta:'ソウル · 土曜 17:00',seoulEventBody:'同じ農園豆のロースタリー別表現を比較。',
tasteTitle:'実データに基づく嗜好推薦',tasteBody:'センサリー記録、好みの風味、抽出結果を即時にスコア化します。',dataInputLabel:'分析データを選択',shopTitle:'ロースタリー別豆販売ページ',shopBody:'アプリ内決済ではなく各ロースタリーの購入リンクへつなぐ構造です。',shopRoasteryDesc:'甘さとクリーンカップ中心のラインナップ。',roasteryPage:'ロースタリーページ',roasteryDesc:'甘さとクリーンカップ中心の焙煎。静かだが明瞭なコーヒー体験。',roasteryPhilosophy:'焙煎哲学',roasteryPhilosophyBody:'過度な香味表現より抽出安定性とクリーンカップを優先します。',currentLineup:'季節ラインナップ',b2bInquiry:'卸問い合わせ',b2bBody:'卸用豆はレシピと運用ガイド付きの別ページで提供します。',dockHome:'ホーム',dockBean:'豆',dockBrew:'抽出',dockLibrary:'図鑑',dockShop:'購入'
}
};

const phases=[
{title:'Bloom',end:35,alarm:{ko:'40g 뜸들이기 시작',en:'Bloom with 40g water',ja:'40gで蒸らし開始'}},
{title:'1st Pour',end:70,alarm:{ko:'120g까지 천천히 푸어',en:'Pour slowly up to 120g',ja:'120gまでゆっくり注ぐ'}},
{title:'2nd Pour',end:110,alarm:{ko:'220g까지 푸어',en:'Pour up to 220g',ja:'220gまで注ぐ'}},
{title:'Final Pour',end:140,alarm:{ko:'300g까지 마무리',en:'Finish at 300g',ja:'300gまで仕上げ'}},
{title:'Drawdown',end:160,alarm:{ko:'추출 마무리 단계',en:'Drawdown phase',ja:'抽出の仕上げ段階'}}
];

const libraryData={
beans:[['Vivid Gesha Washed','Panama · Jasmine · Peach',78],['Ethiopia Floral','Washed · Citrus · Tea-like',43],['Brazil Sweet Natural','Chocolate · Nutty',28]],
roasters:[['BLKRITUAL','Clean cup · sweetness',62],['North Roasters','Bright acidity',31],['Wave Lab','Experimental process',18]],
farms:[['Finca Vivid','Boquete · Gesha',54],['El Paraiso','Colombia · Castillo',34],['Finca Deborah','Panama · High Altitude',21]]
};

const shopItems=[
{name:'Vivid Gesha Washed',notes:'Jasmine · Peach · Black Tea',price:'₩32,000',tag:'Premium'},
{name:'Ethiopia Floral Washed',notes:'Citrus · Tea-like · Clean',price:'₩22,000',tag:'Floral'},
{name:'Brazil Sweet Natural',notes:'Chocolate · Nutty · Brown Sugar',price:'₩16,000',tag:'Daily'}
];

let seconds=0,total=160,timer=null;

function setLanguage(lang){
currentLang=lang;
document.body.dataset.lang=lang;
document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(i18n[lang][k]) el.textContent=i18n[lang][k];});
document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const k=el.dataset.i18nPlaceholder;if(i18n[lang][k]) el.placeholder=i18n[lang][k];});
renderPhases();renderShop();renderJournal();analyzeProfile();
toast(lang==='ko'?'언어가 변경되었습니다.':lang==='en'?'Language changed.':'言語が変更されました。');
}

function getInitialPage(){
const params = new URLSearchParams(location.search);
const qr = params.get('qr');

if(qr){
return 'bean';
}

const lastPage = localStorage.getItem('coffeeos_last_page');
const available = [...document.querySelectorAll('.screen')].map(s=>s.id);

if(lastPage && available.includes(lastPage)){
return lastPage;
}

return 'home';
}

function showIntroOnce(){
const intro = document.getElementById('intro');
const initialPage = getInitialPage();
const seen = localStorage.getItem('coffeeos_intro_seen');

if(!intro){
route(initialPage);
return;
}

if(seen){
intro.classList.add('hide');
route(initialPage);
return;
}

localStorage.setItem('coffeeos_intro_seen','1');

setTimeout(()=>{
intro.classList.add('hide');
route(initialPage);
},1750);
}


if(seen){
intro.classList.add('hide');
route(initialPage);
return;
}

localStorage.setItem('coffeeos_intro_seen','1');

setTimeout(()=>{
intro.classList.add('hide');
route(initialPage);
},1900);
}

localStorage.setItem('coffeeos_intro_seen','1');
setTimeout(()=>intro.classList.add('hide'),1900);
}else{
intro.classList.add('hide');
}
}

function simulateQR(){
route('bean');
}

function route(id){
const target = document.getElementById(id);
if(!target) id = 'home';

screens.forEach(s=>s.classList.remove('active'));
document.getElementById(id).classList.add('active');

localStorage.setItem('coffeeos_last_page', id);

if(drawer) drawer.classList.remove('open');

if(typeof dockName === 'function'){
dockBtns.forEach(b=>b.classList.toggle('active',b.textContent===dockName(id)));
}

window.scrollTo({top:0,behavior:'smooth'});
}

window.scrollTo({top:0,behavior:'smooth'});
}

function dockName(id){
const map={ko:{home:'홈',bean:'원두',brew:'추출',library:'도감',shop:'구매'},en:{home:'Home',bean:'Bean',brew:'Brew',library:'Library',shop:'Shop'},ja:{home:'ホーム',bean:'豆',brew:'抽出',library:'図鑑',shop:'購入'}};
return map[currentLang][id]||'';
}
function toggleDrawer(){drawer.classList.toggle('open')}
function toast(msg){toastEl.textContent=msg;toastEl.classList.add('show');setTimeout(()=>toastEl.classList.remove('show'),1800)}

function renderPhases(){
const list=document.getElementById('phaseList');
list.innerHTML=phases.map((p,i)=>`<div class="phase" id="phase-${i}"><div><b>${p.title}</b><br><span>${p.alarm[currentLang]}</span></div><strong>${p.end}s</strong></div>`).join('');
}
function renderTimer(){
document.getElementById('clock').textContent=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
document.getElementById('progress').style.strokeDashoffset=653-((seconds/total)*653);
let current='READY';
phases.forEach((p,i)=>{
const active=seconds<=p.end && seconds>=(i===0?0:phases[i-1].end);
document.getElementById(`phase-${i}`)?.classList.toggle('active',active);
if(active){current=p.title;document.getElementById('alarmText').textContent=p.alarm[currentLang];}
});
document.getElementById('phaseLabel').textContent=current;
}
function startTimer(){if(timer)return;timer=setInterval(()=>{seconds++;renderTimer();if(seconds>=total){clearInterval(timer);timer=null;document.getElementById('phaseLabel').textContent='COMPLETE';document.getElementById('alarmText').textContent=currentLang==='ko'?'추출 완료':currentLang==='en'?'Brew complete':'抽出完了';toast(document.getElementById('alarmText').textContent);}},1000)}
function pauseTimer(){clearInterval(timer);timer=null;document.getElementById('alarmText').textContent=i18n[currentLang].stop}
function resetTimer(){clearInterval(timer);timer=null;seconds=0;renderTimer();document.getElementById('alarmText').textContent=i18n[currentLang].brewAlarmReady}

function fixTaste(type){
const data={
ko:{sour:'분쇄도를 더 곱게 하거나 추출 시간을 10~15초 늘리세요.',bitter:'분쇄도를 더 굵게 하고 마지막 푸어를 부드럽게 줄이세요.',weak:'물 온도를 1~2℃ 올리거나 뜸들이기를 5초 늘리세요.'},
en:{sour:'Grind slightly finer or extend extraction by 10–15 seconds.',bitter:'Grind slightly coarser and soften the final pour.',weak:'Raise water temperature by 1–2°C or extend bloom by 5 seconds.'},
ja:{sour:'挽き目を少し細かくするか、抽出時間を10〜15秒伸ばしてください。',bitter:'挽き目を少し粗くし、最後の注ぎをやさしくしてください。',weak:'湯温を1〜2℃上げるか、蒸らしを5秒伸ばしてください。'}
};
document.getElementById('fixResult').textContent=data[currentLang][type];
}

function setSensoryMode(mode){
document.getElementById('beginnerForm').classList.toggle('hidden',mode!=='beginner');
document.getElementById('expertForm').classList.toggle('hidden',mode!=='expert');
document.getElementById('beginnerTab').classList.toggle('on',mode==='beginner');
document.getElementById('expertTab').classList.toggle('on',mode==='expert');
}

const journal=[];
function saveSensory(formId){
const form=document.getElementById(formId);
const checks=[...form.querySelectorAll('input[type=checkbox]:checked')].map(i=>i.value);
const ranges=[...form.querySelectorAll('input[type=range]')].map(r=>`${r.parentElement.textContent.trim()} ${r.value}/9`);
const memo=form.querySelector('textarea')?.value.trim();
const data=[...checks,...ranges,memo].filter(Boolean);
if(!data.length){toast(currentLang==='ko'?'기록할 내용을 먼저 입력하세요.':currentLang==='en'?'Add something before saving.':'保存する内容を入力してください。');return;}
journal.unshift({date:new Date().toLocaleDateString(),bean:'Vivid Gesha Washed',notes:data.join(' · ')});
renderJournal();toast(i18n[currentLang].saveRecord);route('journal');
}

function renderJournal(){
const defaultItems=[{date:'2025.05.16',bean:'Ethiopia Floral Washed',notes:'Jasmine · Citrus · Tea-like'},{date:'2026.04.16',bean:'Brazil Sweet Natural',notes:'Chocolate · Nutty · Brown Sugar'}];
const all=[...journal,...defaultItems];
document.getElementById('journalList').innerHTML=all.map(item=>`<article><span>${item.date}</span><h3>${item.bean}</h3><p>${item.notes}</p></article>`).join('');
}

function setLibrary(type,btn){
if(btn){document.querySelectorAll('.library-tabs button').forEach(b=>b.classList.remove('on'));btn.classList.add('on');}
document.getElementById('libraryContent').innerHTML=libraryData[type].map(x=>`<article><p class="overline">${type}</p><h3>${x[0]}</h3><p>${x[1]}</p><div class="progress"><span style="width:${x[2]}%"></span></div></article>`).join('');
}
function addToLibrary(){toast(currentLang==='ko'?'도감에 등록되었습니다.':currentLang==='en'?'Added to library.':'図鑑に登録しました。')}

function requestNotify(){if(!('Notification'in window)){toast('Notification not supported');return;}Notification.requestPermission().then(p=>toast(p==='granted'?'OK':'Not allowed'))}
function notifyCoffee(bean){const msg=currentLang==='ko'?`${bean}를 다시 떠올려보세요.`:currentLang==='en'?`Remember ${bean}.`:`${bean}を思い出してみましょう。`;if('Notification'in window&&Notification.permission==='granted')new Notification('CoffeeOS',{body:msg});toast(msg)}
function simulateReminder(type){notifyCoffee(type==='year'?'Ethiopia Floral Washed':'Brazil Sweet Natural')}

function analyzeProfile(){
const profile=document.getElementById('profileSelect')?.value||'floral';
const profiles={
floral:{match:[['Gesha Washed',94],['Ethiopia Washed',88],['Kenya Washed',71]],reason:{ko:'Floral, Tea-like, Clean Finish 기록 비중이 높습니다.',en:'High ratio of Floral, Tea-like, and Clean Finish records.',ja:'Floral、Tea-like、Clean Finishの記録比率が高いです。'}},
sweet:{match:[['Brazil Natural',92],['Colombia Honey',84],['Balanced Blend',76]],reason:{ko:'Chocolate, Nutty, Sweetness 기록 비중이 높습니다.',en:'High ratio of Chocolate, Nutty, and Sweetness records.',ja:'Chocolate、Nutty、Sweetnessの記録比率が高いです。'}},
funky:{match:[['Anaerobic Lot',91],['Co-fermented Lot',86],['Natural Experimental',80]],reason:{ko:'Tropical, Fermented, Intense 기록 비중이 높습니다.',en:'High ratio of Tropical, Fermented, and Intense records.',ja:'Tropical、Fermented、Intenseの記録比率が高いです。'}}
};
const p=profiles[profile];
document.getElementById('analysisResult').innerHTML=`<h3>${p.reason[currentLang]}</h3>`+p.match.map(x=>`<div class="score-row"><b>${x[0]}</b><div class="score-bar"><span style="width:${x[1]}%"></span></div><strong>${x[1]}</strong></div>`).join('');
}

function renderShop(){
document.getElementById('shopGrid').innerHTML=shopItems.map(item=>`<article><div class="shop-img"></div><p class="overline">${item.tag}</p><h3>${item.name}</h3><p>${item.notes}</p><b>${item.price}</b><button onclick="toast('${currentLang==='ko'?'로스터리 구매 사이트로 이동합니다.':currentLang==='en'?'Opening roastery store.':'ロースタリー購入サイトへ移動します。'}')">${currentLang==='ko'?'구매 사이트로 이동':currentLang==='en'?'Go to Store':'購入サイトへ'}</button></article>`).join('');
}

renderPhases();renderTimer();renderJournal();setLibrary('beans');renderShop();analyzeProfile();setLanguage('ko');

showIntroOnce();
