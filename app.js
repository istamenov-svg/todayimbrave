// ===== NAV & PAGE LOGIC =====
var pages=['home','about','program','eligibility','safety','stories','faq','donate'];
var navKeys={home:'navHome',about:'navAbout',program:'navProgram',eligibility:'navEligibility',safety:'navSafety',stories:'navStories',faq:'navFaq'};
var currentPage='home';

function showPage(id){
  currentPage=id;
  pages.forEach(function(p){
    var el=document.getElementById('page-'+p);
    if(el) el.className=(p===id)?'page active':'page';
  });
  updateNav();
  document.getElementById('mobMenu').className='mob-menu';
  window.scrollTo(0,0);
  handleScroll();
}

function updateNav(){
  var nl=document.getElementById('navLinks');
  nl.innerHTML='';
  Object.keys(navKeys).forEach(function(id){
    var b=document.createElement('button');
    b.className='nav-link'+((currentPage===id)?' active':'');
    b.textContent=t(navKeys[id]);
    b.onclick=function(){showPage(id);};
    nl.appendChild(b);
  });
  var mm=document.getElementById('mobMenu');
  mm.innerHTML='';
  Object.keys(navKeys).forEach(function(id){
    var b=document.createElement('button');
    b.className='mob-link'+((currentPage===id)?' active':'');
    b.textContent=t(navKeys[id]);
    b.onclick=function(){showPage(id);};
    mm.appendChild(b);
  });
  var db=document.getElementById('navDonate');
  if(db) db.textContent=t('navDonate');
  var ab=document.getElementById('navApplyBtn');
  if(ab) ab.textContent=t('navApply');
}

function toggleMobileMenu(){
  var mm=document.getElementById('mobMenu');
  mm.className=(mm.className.indexOf('open')>=0)?'mob-menu':'mob-menu open';
}

function toggleFaq(el){
  var a=el.nextElementSibling;
  var arrow=el.querySelector('.faq-arrow');
  if(a.className.indexOf('open')>=0){
    a.className='faq-answer';arrow.style.transform='rotate(0)';
  }else{
    a.className='faq-answer open';arrow.style.transform='rotate(180deg)';
  }
}

// ===== LANGUAGE TOGGLE =====
function switchLang(lang){
  LANG=lang;
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.className=b.getAttribute('data-lang')===lang?'lang-btn lang-active':'lang-btn';
  });
  // Translate static text
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    el.textContent=t(el.getAttribute('data-i18n'));
  });
  // Rebuild dynamic content + nav
  updateNav();
  buildSchedule();buildActivities();buildInclusions();buildSteps();buildTiers();
  // Footer
  var ft=document.getElementById('footerTagline');
  if(ft) ft.innerHTML=t('footerTagline')+'<br>'+t('footerLocation');
}

// ===== SCROLL =====
function handleScroll(){
  var scrollY=window.scrollY||window.pageYOffset;
  var nav=document.getElementById('mainNav');
  var logo=document.getElementById('navLogo');
  var p=Math.min(scrollY/120,1);
  nav.style.background='rgba(40,40,40,'+p*0.7+')';
  nav.style.borderBottom=p>0.5?'1px solid rgba(255,255,255,0.08)':'1px solid transparent';
  var bl='blur('+Math.round(p*12)+'px)';
  nav.style.backdropFilter=bl;nav.style.webkitBackdropFilter=bl;
  logo.style.height=(72-Math.round(p*28))+'px';
  nav.style.paddingTop=Math.round(12*(1-p))+'px';
  if(p>0.5){nav.classList.add('scrolled');}else{nav.classList.remove('scrolled');}
  var db=document.getElementById('navDonate');
  if(db){db.style.borderColor='rgba(255,255,255,'+(0.5+p*0.2)+')';db.style.color='#fff';}
}
var scrollTick=false;
window.addEventListener('scroll',function(){
  if(!scrollTick){scrollTick=true;requestAnimationFrame(function(){handleScroll();scrollTick=false;});}
});

// ===== BUILDERS =====
function buildSchedule(){
  var s=T.sched[LANG],el=document.getElementById('schedule');if(!el)return;var h='';
  s.forEach(function(r,i){h+='<div style="display:flex;gap:20px;padding:20px 0;border-bottom:'+(i<s.length-1?'1px solid #E8DDD0':'none')+'"><div style="width:80px;flex-shrink:0;font-size:13px;font-weight:600;color:#B6869E;padding-top:2px">'+r[0]+'</div><div><div style="font-size:16px;font-weight:600;color:#1B3A5C;margin-bottom:4px">'+r[1]+'</div><div style="font-size:15px;color:#5A5A5A;line-height:1.5">'+r[2]+'</div></div></div>';});
  el.innerHTML=h;
}
function buildActivities(){
  var a=T.activities[LANG],el=document.getElementById('activities');if(!el)return;var h='';
  a.forEach(function(n){h+='<div style="background:#fff;border:1px solid #E8DDD0;border-radius:10px;padding:16px 20px;font-size:15px;font-weight:500;color:#1B3A5C;display:flex;align-items:center;gap:10px"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B6869E" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg> '+n+'</div>';});
  el.innerHTML=h;
}
function buildInclusions(){
  var a=T.inclusions[LANG],el=document.getElementById('inclusions');if(!el)return;var h='';
  a.forEach(function(n){h+='<div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:14px"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#896778" stroke-width="2.5" stroke-linecap="round" style="flex-shrink:0;margin-top:2px"><polyline points="20 6 9 17 4 12"/></svg><span style="font-size:15px;color:#2C2C2C">'+n+'</span></div>';});
  el.innerHTML=h;
}
function buildSteps(){
  var s=T.steps[LANG],el=document.getElementById('steps');if(!el)return;var h='';
  s.forEach(function(r){h+='<div class="card" style="text-align:center"><div style="width:44px;height:44px;border-radius:50%;background:#B6869E;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-weight:700;font-size:20px;color:#fff">'+r[0]+'</div><h4 style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;color:#1B3A5C;margin-bottom:8px">'+r[1]+'</h4><p style="font-size:14px;line-height:1.6;color:#5A5A5A">'+r[2]+'</p></div>';});
  el.innerHTML=h;
}
function buildTiers(){
  var a=T.tiers[LANG],el=document.getElementById('givingTiers');if(!el)return;
  var gv=LANG==='es'?'Donar ':'Give ';var h='';
  a.forEach(function(r){h+='<div style="background:#FDFAF6;border-radius:16px;padding:32px;border:2px solid '+r[2]+';text-align:center"><div style="font-size:44px;font-weight:800;color:'+r[2]+';margin-bottom:12px">'+r[0]+'</div><p style="font-size:15px;line-height:1.6;color:#5A5A5A;margin-bottom:20px">'+r[1]+'</p><button style="background:'+r[2]+';color:#fff;padding:12px 28px;border-radius:8px;font-size:15px;font-weight:600">'+gv+r[0]+'</button></div>';});
  el.innerHTML=h;
}

function init(){
  updateNav();handleScroll();
  buildSchedule();buildActivities();buildInclusions();buildSteps();buildTiers();
}
window.onload=init;
