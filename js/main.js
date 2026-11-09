(function(){
'use strict';
var $=function(s,c){return (c||document).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var WA='https://wa.me/971586086804?text=';

/* ---------- i18n (EN default, AR toggle) ---------- */
var AR={
brand_tag:'زراعة · تجميل · ترميم',nav_treat:'العلاجات',nav_cases:'نتائج الابتسامات',nav_about:'عن د. هبة',nav_care:'رعاية المرضى',nav_reviews:'آراء المرضى',nav_contact:'تواصل',book:'احجز موعدًا',
hero_eyebrow:'طبيبة أسنان في مدينة دبي للرعاية الصحية · مرخّصة من DHA وMOH',
hero_h1:'خبرة تثق بها. <em>رعاية مصمّمة حولك.</em>',
hero_lead:'بخبرة تزيد على عشرين عامًا، تقدّم د. هبة الشرباجي رعاية أسنان متكاملة، من الزراعة والفينير إلى طب الأسنان اليومي، قائمة على التخطيط الدقيق والاهتمام الشخصي.',
cta_book:'احجز استشارتك',cta_explore:'استكشف العلاجات',t_years:'سنوات خبرة',t_dha:'مرخّصة',t_moh:'مرخّصة',t_ada:'عضوة',
f_years:'سنة من الخبرة السريرية',f_implant:'زراعة وتجميل الأسنان',f_reviews:'تقييمات مرضى موثّقة على Google',
intro_kicker:'طب أسنان شامل. رعاية شخصية.',intro_statement:'يبدأ طب الأسنان الجيد بفهم المريض، لا بعلاج سنٍّ واحدة فقط.',
intro_body:'تقدّم د. هبة مجموعة واسعة من علاجات الأسنان العامة والترميمية والزراعة والتجميل، مع خبرة خاصة في زراعة الأسنان وتجميلها. كل مريض مختلف، لذا يبدأ العلاج بتقييم دقيق ونقاش واضح للخيارات وخطة مبنية على احتياجاتك وتوقعاتك وأولوياتك. الهدف هو التوازن الصحيح بين الصحة والوظيفة والراحة والجمال.',
p1_t:'أكثر من 20 عامًا من الخبرة',p1_d:'أكثر من عقدين في طب الأسنان العام والترميمي والتجميلي والزراعة.',
p2_t:'زراعة الأسنان',p2_d:'حلول مدروسة بعناية لتعويض الأسنان المفقودة واستعادة الوظيفة.',
p3_t:'التجميل والترميم',p3_d:'علاجات تحسّن المظهر مع الحفاظ على البنية الطبيعية والوظيفة.',
p4_t:'تخطيط علاج فردي',p4_d:'كل توصية مبنية على احتياجاتك السريرية وصحة أسنانك على المدى الطويل.',
tr_kicker:'خدمات الأسنان',tr_h2:'من العناية اليومية إلى <em>تحوّل الابتسامة الكامل.</em>',tr_sub:'تستند توصيات العلاج إلى تقييم دقيق لحالة كل مريض واحتياجاته وصحة أسنانه على المدى الطويل.',
c1:'زراعة الأسنان',c2:'تجميل الأسنان',c3:'الأسنان الترميمية',c4:'طب الأسنان العام',c5:'اللثة والليزر',
c1_h:'تعويض الأسنان المفقودة. استعادة الوظيفة.',c1_p:'يمكن أن توفّر زراعة الأسنان حلًا ثابتًا لتعويض الأسنان المفقودة واستعادة الوظيفة والمظهر لدى المرضى المناسبين.',
c1_a:'زراعة الأسنان',c1_b:'زراعة فورية بعد الخلع',c1_c:'زراعة سن واحدة',c1_d:'تركيبات مدعومة بالزرعات',c1_e:'صيانة الزرعات والمتابعة',
c2_h:'جمال طبيعي، مخطَّط بعناية.',c2_p:'يمكن لتجميل الأسنان تحسين مظهرها مع مراعاة صحة أسنانك الحالية وملامح وجهك وتوقعاتك.',
c2_a:'تصميم الابتسامة',c2_b:'الفينير',c2_c:'اللومينير',c2_d:'ابتسامة هوليوود',c2_e:'حشوات تجميلية كومبوزيت',c2_f:'تبييض الأسنان',
c3_h:'استعادة القوة والوظيفة والمظهر.',c3_p:'تساعد العلاجات الترميمية على إعادة بناء الأسنان المتضررة أو المتآكلة مع الموازنة بين المتانة والوظيفة والجمال.',
c3_a:'تيجان الزركونيا',c3_b:'تيجان إي-ماكس',c3_c:'الجسور',c3_d:'التركيبات الصناعية',c3_e:'ترميمات بلون السن',
c4_h:'عناية يومية لصحة فموية طويلة الأمد.',c4_p:'تلعب العناية المنتظمة دورًا مهمًا في الحفاظ على أسنان ولثة سليمة واكتشاف المشكلات مبكرًا.',
c4_a:'الفحوصات الدورية',c4_b:'تنظيف وتلميع',c4_c:'العناية الوقائية',c4_d:'حشوات بلون السن',c4_e:'علاج العصب',c4_f:'الخلع',c4_g:'التقويم الشفاف',
c5_h:'دعم لثة صحية وجمال متوازن.',c5_p:'اللثة الصحية أساس مهم لصحة الفم وجمال الأسنان.',
c5_a:'استئصال اللثة',c5_b:'تشكيل اللثة',c5_c:'إزالة تصبغ اللثة',c5_d:'إجراءات ليزر مختارة',
cta_ask:'اسأل عن هذا العلاج',
not_sure:'لست متأكدًا من العلاج المناسب؟ لا يلزمك معرفة الإجراء الصحيح قبل حجز الموعد. تتيح لك الاستشارة أن تقيّم د. هبة حالة أسنانك وتناقش معك الخيارات المتاحة.',
cs_kicker:'نتائج الابتسامات',cs_h2:'مرضى حقيقيون. <em>اسحب لترى الفرق.</em>',before:'قبل',after:'بعد',
case1:'تصميم الابتسامة والفينير',case2:'ترميم بالزرعات',case3:'تحوّل كامل للابتسامة',cs_fine:'حالات مرضى من عيادة د. هبة. تختلف النتائج من مريض لآخر.',
ab_kicker:'تعرّف على د. هبة الشرباجي',ab_h2:'أكثر من عقدين <em>في خدمة طب الأسنان.</em>',
ab_p1:'د. هبة الشرباجي طبيبة أسنان ذات خبرة تمارس المهنة في دبي، بأكثر من 20 عامًا من الخبرة السريرية في طب الأسنان العام والترميمي والتجميلي والزراعة. مجالا خبرتها الخاصان هما زراعة الأسنان وتجميلها.',
ab_p2:'بعد بكالوريوس طب الأسنان، واصلت دراستها العليا في زراعة الأسنان السريرية وتعليمًا مهنيًا مستمرًا شمل الزراعة والفينير وتصميم الابتسامة وتطبيقات الليزر والعناية بما حول الزرعات. عملت في عدة مراكز طبية وأسنان في الإمارات وشغلت مناصب قيادية منها رئيسة قسم الأسنان ومديرة طبية.',
cr1:'بكالوريوس طب الأسنان',cr2:'دبلوم دراسات عليا في زراعة الأسنان السريرية',cr3:'مرخّصة من DHA',cr4:'مرخّصة من وزارة الصحة MOH',cr5:'عضوة في الجمعية الأمريكية لطب الأسنان',cr6:'رئيسة قسم الأسنان سابقًا',cr7:'خبرة في الإدارة الطبية',cr8:'مهارة في رعاية تركّز على المريض وعلاج مخصّص',
ca_kicker:'رعاية المرضى',ca_h2:'طب أسنان يبدأ <em>بفهمك.</em>',ca_p:'لكل مريض مخاوف وتوقعات واحتياجات مختلفة. الرعاية الجيدة أكثر من إجراء علاجي، إنها شرح واضح لخياراتك وخطة منطقية لحالتك.',
s1_t:'الإصغاء',s1_h:'فهم مخاوفك',s1_p:'تبدأ كل استشارة بالإصغاء. مخاوفك وتوقعاتك وأولوياتك ترسم اتجاه رعايتك.',
s2_t:'التقييم',s2_h:'صورة واضحة لصحة أسنانك',s2_p:'يساعد التقييم السريري الدقيق على تحديد حالتك الحالية وأنسب خيارات العلاج.',
s3_t:'النقاش',s3_h:'اعرف خياراتك',s3_p:'يجب أن تشعر بالثقة في قراراتك. تشرح د. هبة الخيارات وتجيب عن أسئلتك قبل بدء العلاج.',
s4_t:'التخطيط',s4_h:'علاج مصمّم حولك',s4_p:'لا يوجد نهج واحد يناسب الجميع. تُبنى خطتك حول احتياجاتك السريرية وتوقعاتك وصحة أسنانك على المدى الطويل.',
s5_t:'العلاج',s5_h:'خبرة يمكنك الاعتماد عليها',s5_p:'أكثر من عقدين من الخبرة في طب الأسنان العام والترميمي والتجميلي والزراعة تدخل في كل حالة.',
s6_t:'المتابعة',s6_h:'رعاية تتجاوز الموعد',s6_p:'تدعم المتابعة والصيانة المناسبتان صحة فمك ونتائج علاجك على المدى الطويل.',
cl_kicker:'نستقبل المرضى الآن في دبي',cl_h2:'المركز الأمريكي للعمود الفقري، <em>مدينة دبي للرعاية الصحية.</em>',cl_map:'افتح في الخرائط',
rv_kicker:'آراء المرضى',rv_h2:'بكلماتهم. <em>منشورة على Google.</em>',
ct_kicker:'احجز استشارتك',ct_h2:'رعاية أسنانك تبدأ <em>بحوار.</em>',ct_p:'سواء كنت بحاجة إلى عناية روتينية أو لديك مشكلة محددة أو تفتقد سنًّا أو تفكر في علاج تجميلي، فالاستشارة هي الخطوة الأولى لفهم خياراتك.',
ct_visit:'الموقع',ct_wa:'الهاتف / واتساب',ct_mail:'البريد الإلكتروني',ct_ig:'إنستغرام',
f_title:'استفسار',f_name:'اسمك',f_email:'البريد الإلكتروني',f_service:'الخدمة التي تهمّك',f_pick:'اختر خدمة',f_unsure:'لست متأكدًا بعد',f_when:'متى ترغب في الحضور؟',w1:'في أقرب وقت',w2:'خلال الأسابيع القادمة',w3:'أستكشف الخيارات فقط',f_msg:'هل هناك ما ينبغي أن تعرفه د. هبة؟ (اختياري)',f_send:'تابع إلى واتساب',
l_title:'أخبر د. هبة بما تحتاجه',l_sub:'بعدها يفتح واتساب ورسالتك جاهزة للإرسال.',l_done:'رسالتك جاهزة.',l_done_p:'اضغط إرسال في واتساب وسيصلك الرد هناك.',l_again:'افتح واتساب',
m_hello:'مرحبًا د. هبة، أرغب في حجز استشارة.',m_name:'الاسم',m_email:'البريد الإلكتروني',m_service:'الخدمة',m_when:'الموعد المفضّل',m_note:'ملاحظة',
e_req:'يرجى إدخال اسمك وبريد إلكتروني صحيح والخدمة التي تهمّك.',n_ready:'رسالتك جاهزة في واتساب، اضغط إرسال.',
foot_line:'خبرة تثق بها. رعاية مصمّمة حولك.',rights:'جميع الحقوق محفوظة.'
};
var EN={
m_hello:"Hello Dr. Hiba, I'd like to book a consultation.",m_name:'Name',m_email:'Email',m_service:'Interested in',m_when:'Timing',m_note:'Note',
e_req:'Please add your name, a valid email and the service you are interested in.',n_ready:'Your message is ready in WhatsApp. Press send.'};
$$('[data-i18n],[data-i18n-html]').forEach(function(e){var k=e.getAttribute('data-i18n')||e.getAttribute('data-i18n-html');EN[k]=e.hasAttribute('data-i18n-html')?e.innerHTML:e.textContent});
function setLang(l){
  var els=$$('[data-i18n],[data-i18n-html]');
  var d=l==='ar'?AR:EN;
  els.forEach(function(e){var k=e.getAttribute('data-i18n')||e.getAttribute('data-i18n-html');if(d[k]==null)return;
    if(e.hasAttribute('data-i18n-html')){e.innerHTML=d[k];if(e.classList.contains('split')){splitEl(e);e.classList.add('in')}}else e.textContent=d[k]});
  document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';
  $('#langBtn').textContent=l==='ar'?'English':'العربية';
  $('#langBtn').setAttribute('aria-label',l==='ar'?'Switch language to English':'Switch language to Arabic');
  $('#leadClose').setAttribute('aria-label',l==='ar'?'إغلاق':'Close');
  try{localStorage.setItem('lang',l)}catch(e){}
  buildStatement();noWidow();svcFit();
}
$('#langBtn').addEventListener('click',function(){setLang(document.documentElement.lang==='ar'?'en':'ar')});

/* ---------- split heading into words ---------- */
function splitEl(el){
  var nodes=[];(function w(n){Array.prototype.forEach.call(n.childNodes,function(c){if(c.nodeType===3)nodes.push(c);else if(c.nodeType===1)w(c)})})(el);
  var i=0;
  nodes.forEach(function(t){
    var frag=document.createDocumentFragment();
    t.textContent.split(/(\s+)/).forEach(function(p){
      if(!p)return;
      if(/^\s+$/.test(p)){frag.appendChild(document.createTextNode(' '));return}
      var o=document.createElement('span');o.className='ch';var s=document.createElement('span');s.textContent=p;s.style.transitionDelay=(i++*70)+'ms';o.appendChild(s);frag.appendChild(o);
    });
    t.parentNode.replaceChild(frag,t);
  });
}
$$('.split').forEach(splitEl);

/* ---------- preloader ---------- */
var pre=$('#preloader');
function hidePre(){pre.classList.add('done');document.body.classList.remove('lock');setTimeout(function(){$$('.split').forEach(function(e){e.classList.add('in')})},250)}
document.body.classList.add('lock');
window.addEventListener('load',function(){setTimeout(hidePre,reduce?0:1500)});
setTimeout(hidePre,4000);

/* ---------- nav / progress ---------- */
var nav=$('#nav'),prog=$('#progress'),lastY=0;
function onScroll(){
  var y=window.scrollY,h=document.documentElement.scrollHeight-innerHeight;
  prog.style.transform='scaleX('+(h>0?y/h:0)+')';
  nav.classList.toggle('scrolled',y>30);
  nav.classList.toggle('hide',y>lastY&&y>500);
  lastY=y;
  stmt();par();
}
window.addEventListener('scroll',onScroll,{passive:true});

/* ---------- statement scroll highlight ---------- */
var words=[];
function buildStatement(){
  var el=$('#statement');var txt=el.textContent.trim();
  el.innerHTML=txt.split(/\s+/).map(function(w){return '<span class="w">'+w+'</span>'}).join(' ');
  words=$$('.w',el);stmt();
}
function stmt(){
  if(!words.length)return;
  var r=$('#statement').getBoundingClientRect(),p=(innerHeight*0.85-r.top)/(r.height+innerHeight*0.35);
  p=Math.max(0,Math.min(1,p));var n=Math.round(p*words.length);
  words.forEach(function(w,i){w.classList.toggle('on',i<n)});
}

/* ---------- reveal + count ---------- */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
$$('.reveal').forEach(function(e){io.observe(e)});
var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;cio.unobserve(e.target);var t=+e.target.getAttribute('data-count'),s=performance.now();
  (function f(n){var p=Math.min(1,(n-s)/1600);e.target.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s)})},{threshold:.6});
$$('[data-count]').forEach(function(e){cio.observe(e)});

/* ---------- services: photo accordion ---------- */
var svc=$('#svc'),svcItems=$$('.svc-item'),wide=matchMedia('(min-width:1100px)'),calm=matchMedia('(prefers-reduced-motion:reduce)'),svcHover,svcSwap,svcNow=0,svcTo=0,svcFrame;
svcItems.forEach(function(it){$$('.svc-text>*,.chips li,.svc-cta',it).forEach(function(e,k){e.style.setProperty('--d',(k*.04)+'s')})});
/* phones: move the page with the card so the tapped card stays in view while the one above closes */
function svcHold(it,from){
  cancelAnimationFrame(svcFrame);
  var to=88,t0=performance.now(),dur=calm.matches?0:780,stop=false;
  function off(){stop=true}
  addEventListener('touchstart',off,{once:true,passive:true});addEventListener('wheel',off,{once:true,passive:true});
  (function step(now){
    if(stop)return;
    var p=dur?Math.min(1,Math.max(0,(now-t0)/dur)):1,e=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2,want=from+(to-from)*e,cur=it.getBoundingClientRect().top;
    if(Math.abs(cur-want)>.5)window.scrollTo({top:scrollY+cur-want,behavior:'instant'});
    if(p<1)svcFrame=requestAnimationFrame(step);else{removeEventListener('touchstart',off);removeEventListener('wheel',off)}
  })(t0);
}
function svcPick(i,focus){
  if(i===svcTo)return;
  clearTimeout(svcSwap);
  var from=svcItems[svcNow],to=svcItems[i];
  svcItems.forEach(function(it){it.classList.remove('fade')});
  from.classList.add('fade');to.classList.add('fade');svcTo=i;
  if(focus)$('.svc-head',to).focus();
  svcSwap=setTimeout(function(){
    var top=to.getBoundingClientRect().top;
    svcItems.forEach(function(it,k){var on=k===i;it.classList.toggle('on',on);$('.svc-head',it).setAttribute('aria-expanded',on)});
    svcNow=i;
    if(!wide.matches)svcHold(to,top);
    void to.offsetWidth;
    svcItems.forEach(function(it){it.classList.remove('fade')});
  },calm.matches?0:110);
}
function svcFit(){
  if(!wide.matches){svc.style.removeProperty('--bh');return}
  svc.style.setProperty('--bh','0px');
  var m=0;$$('.svc-body',svc).forEach(function(b){m=Math.max(m,b.offsetHeight)});
  svc.style.setProperty('--bh',m+'px');
}
svcItems.forEach(function(it,i){
  var h=$('.svc-head',it);
  h.addEventListener('click',function(){svcPick(i)});
  it.addEventListener('mouseenter',function(){if(wide.matches&&matchMedia('(hover:hover)').matches){clearTimeout(svcHover);svcHover=setTimeout(function(){svcPick(i)},110)}});
  it.addEventListener('mouseleave',function(){clearTimeout(svcHover)});
  h.addEventListener('keydown',function(e){
    var k=e.key,rtl=document.documentElement.dir==='rtl',n=svcItems.length;
    var next=k==='ArrowDown'||k===(rtl?'ArrowLeft':'ArrowRight'),prev=k==='ArrowUp'||k===(rtl?'ArrowRight':'ArrowLeft');
    if(next||prev){e.preventDefault();svcPick((i+(next?1:n-1))%n,true)}
  });
});
window.addEventListener('resize',svcFit);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(svcFit);

/* ---------- before / after ---------- */
var range=$('#baRange'),wrap=$('#baBeforeWrap'),handle=$('#baHandle');
function setPos(v){wrap.style.clipPath='inset(0 '+(100-v)+'% 0 0)';handle.style.left=v+'%'}
range.addEventListener('input',function(){setPos(range.value)});setPos(50);
var cases={veneers:['assets/img/case-veneers-before.jpg','assets/img/case-veneers-after.jpg'],implant:['assets/img/case-implant-before.jpg','assets/img/case-implant-after.jpg'],crown:['assets/img/case-crown-before.jpg','assets/img/case-crown-after.jpg']};
$$('.case').forEach(function(b){b.addEventListener('click',function(){
  $$('.case').forEach(function(x){x.classList.remove('on')});b.classList.add('on');
  var c=cases[b.getAttribute('data-k')];$('#baBefore').src=c[0];$('#baAfter').src=c[1];range.value=50;setPos(50)})});
var demo=false,bio=new IntersectionObserver(function(es){if(es[0].isIntersecting&&!demo&&!reduce){demo=true;var s=performance.now();(function f(n){var t=(n-s)/1800;if(t>=1){setPos(range.value);return}var v=50+Math.sin(t*Math.PI*2)*28*(1-t);range.value=v;setPos(v);requestAnimationFrame(f)})(s)}},{threshold:.6});
bio.observe($('.ba-stage'));

/* ---------- parallax + magnetic ---------- */
var pars=$$('[data-parallax]'),bg=$('[data-parallax-bg]');
function par(){
  if(reduce)return;
  pars.forEach(function(e){var r=e.getBoundingClientRect(),c=r.top+r.height/2-innerHeight/2;e.style.translate='0 '+(c*+e.getAttribute('data-parallax')*-1)+'px'});
  if(bg){var r=bg.parentNode.getBoundingClientRect();bg.style.transform='translateY('+((r.top+r.height/2-innerHeight/2)*-.05)+'px)'}
}
if(matchMedia('(hover:hover)').matches&&!reduce){
  $$('.magnetic').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18)+'px,'+((e.clientY-r.top-r.height/2)*.3)+'px)'});b.addEventListener('mouseleave',function(){b.style.transform=''})});
  var hv=$('.hero-visual');if(hv)$('.hero').addEventListener('mousemove',function(e){var x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);$$('.float',hv).forEach(function(f,i){f.style.marginInlineStart=(x*(18+i*8))+'px';f.style.marginTop=(y*(14+i*6))+'px'})});
}

/* ---------- marquees (duplicate content for seamless loop) ---------- */
(function(){var t=$('.marquee .track');t.innerHTML+=t.innerHTML;t.style.paddingInline='0';
  var r=$('#rvTrack');Array.prototype.slice.call(r.children).forEach(function(c){var k=c.cloneNode(true);k.setAttribute('aria-hidden','true');r.appendChild(k)})})();

/* ---------- WhatsApp first: every WhatsApp link asks for details, then opens the chat prefilled ---------- */
var lead=$('#lead'),leadForm=$('#leadForm'),leadStep=$('#leadStep'),leadDone=$('#leadDone'),leadAgain=$('#leadAgain');
function T(k){return (document.documentElement.lang==='ar'?AR:EN)[k]}
function openLead(service){
  leadStep.hidden=false;leadDone.hidden=true;
  $('.form-note',leadForm).textContent='';
  $$('.bad',leadForm).forEach(function(i){i.classList.remove('bad');i.removeAttribute('aria-invalid')});
  if(service)leadForm.service.value=service;
  if(lead.showModal)lead.showModal();else lead.setAttribute('open','');
}
function closeLead(){if(lead.close)lead.close();else lead.removeAttribute('open')}
document.addEventListener('click',function(e){
  var a=e.target.closest('a[href^="https://wa.me/"]');
  if(!a||a.hasAttribute('data-direct'))return;
  e.preventDefault();openLead(a.getAttribute('data-service'));
});
$('#leadClose').addEventListener('click',closeLead);
lead.addEventListener('click',function(e){if(e.target===lead)closeLead()});
function optionText(sel){return sel.options[sel.selectedIndex].textContent.trim()}
function leadMessage(f){
  var lines=[T('m_hello'),T('m_name')+': '+f.name.value.trim(),T('m_email')+': '+f.email.value.trim(),T('m_service')+': '+optionText(f.service),T('m_when')+': '+optionText(f.when)];
  if(f.msg.value.trim())lines.push(T('m_note')+': '+f.msg.value.trim());
  return WA+encodeURIComponent(lines.join('\n'));
}
$$('.lead-form').forEach(function(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var note=$('.form-note',f),first=null;
    [[f.name,!f.name.value.trim()],[f.email,!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.value.trim())],[f.service,!f.service.value]].forEach(function(c){
      c[0].classList.toggle('bad',c[1]);
      if(c[1]){c[0].setAttribute('aria-invalid','true');first=first||c[0]}else c[0].removeAttribute('aria-invalid');
    });
    if(first){note.textContent=T('e_req');first.focus();return}
    var url=leadMessage(f),w=window.open(url,'_blank');
    if(w){try{w.opener=null}catch(x){}}
    if(f===leadForm){
      leadAgain.href=url;leadStep.hidden=true;leadDone.hidden=false;
    }else{
      note.textContent=T('n_ready')+' ';
      var a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener';a.setAttribute('data-direct','');a.textContent=T('l_again');note.appendChild(a);
    }
  });
});

/* ---------- widow guard: glue the last two words of every text block ---------- */
function noWidow(){
  $$('h1,h2,h3,h4,p,li,blockquote,.statement,.not-sure,.foot-line').forEach(function(el){
    var tn=[],w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),n;
    while((n=w.nextNode()))tn.push(n);
    var i=tn.length-1;
    while(i>=0&&!/\S/.test(tn[i].textContent))i--;
    if(i<0)return;
    var t=tn[i].textContent;
    if(/ \S+\s*$/.test(t))return;
    var m=t.match(/(\S)[ \t\n]+(\S+\s*)$/);
    if(m){tn[i].textContent=t.replace(/[ \t\n]+(\S+\s*)$/,' $1');return}
    for(var j=i-1;j>=0;j--){
      var s=tn[j].textContent;
      if(!s)continue;
      if(/\s$/.test(s)){tn[j].textContent=s.replace(/\s+$/,' ')}
      break;
    }
  });
}
/* ---------- init ---------- */
var saved=null;try{saved=localStorage.getItem('lang')}catch(e){}
if(saved==='ar')setLang('ar');else buildStatement();
noWidow();svcFit();
onScroll();
})();
