// ===== NAV & PAGE LOGIC =====
var pages=['home','program','eligibility','safety','stories','faq','donate'];
var navLabels={home:'Home',program:'The Program',eligibility:"Who It's For",safety:'Safety & Care',stories:'Stories',faq:'FAQ'};
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
}

function updateNav(){
  var nl=document.getElementById('navLinks');
  nl.innerHTML='';
  Object.keys(navLabels).forEach(function(id){
    var b=document.createElement('button');
    b.className='nav-link'+((currentPage===id)?' active':'');
    b.textContent=navLabels[id];
    b.onclick=function(){showPage(id);};
    nl.appendChild(b);
  });
  var mm=document.getElementById('mobMenu');
  mm.innerHTML='';
  Object.keys(navLabels).forEach(function(id){
    var b=document.createElement('button');
    b.className='mob-link'+((currentPage===id)?' active':'');
    b.textContent=navLabels[id];
    b.onclick=function(){showPage(id);};
    mm.appendChild(b);
  });
}

function toggleMobileMenu(){
  var mm=document.getElementById('mobMenu');
  mm.className=(mm.className.indexOf('open')>=0)?'mob-menu':'mob-menu open';
}

function toggleFaq(el){
  var a=el.nextElementSibling;
  var arrow=el.querySelector('.faq-arrow');
  if(a.className.indexOf('open')>=0){
    a.className='faq-answer';
    arrow.style.transform='rotate(0)';
  }else{
    a.className='faq-answer open';
    arrow.style.transform='rotate(180deg)';
  }
}

// ===== DYNAMIC CONTENT =====
function init(){
  updateNav();

  // Schedule
  var sched=[
    ['7:30 AM','Wake Up & Morning Mindfulness','Guided meditation, stretching, and intention-setting.'],
    ['8:30 AM','Breakfast Together','Family-style meals. All dietary needs accommodated.'],
    ['9:30 AM','Brave Journey Session','Themed workshop: journaling, vision mapping, creative expression.'],
    ['11:00 AM','Outdoor Adventure','Archery, rock climbing, kayaking, hiking, swimming, go-karts.'],
    ['12:30 PM','Lunch & Free Time','Downtime to connect with friends or explore camp.'],
    ['2:00 PM','Creative Expression','Arts & crafts, music, team-bonding games, basketball.'],
    ['4:00 PM','Team Challenge','Group problem-solving. Learning to trust, communicate, and lead.'],
    ['6:00 PM','Dinner','Together as a camp family.'],
    ['7:30 PM','Campfire & Reflection','Stories, songs, sharing brave moments from the day.'],
    ['9:00 PM','Lights Out','Cabin time with counselors. Rest for tomorrow.']
  ];
  var schedEl=document.getElementById('schedule');
  if(schedEl){
    var h='';
    sched.forEach(function(s,i){
      h+='<div style="display:flex;gap:20px;padding:20px 0;border-bottom:'+(i<9?'1px solid #E8DDD0':'none')+'"><div style="width:80px;flex-shrink:0;font-size:13px;font-weight:600;color:#D64B8A;padding-top:2px">'+s[0]+'</div><div><div style="font-size:16px;font-weight:600;color:#1B3A5C;margin-bottom:4px">'+s[1]+'</div><div style="font-size:15px;color:#5A5A5A;line-height:1.5">'+s[2]+'</div></div></div>';
    });
    schedEl.innerHTML=h;
  }

  // Activities
  var acts=['Archery','Rock Climbing','Kayaking','Swimming','Go-Karts','Basketball','Walking Trails','Arts & Crafts','Meditation','Vision Mapping','Journaling','Music & Expression','Team-Bonding Games','Campfire & Stories'];
  var actEl=document.getElementById('activities');
  if(actEl){
    var h='';
    acts.forEach(function(a){
      h+='<div style="background:#fff;border:1px solid #E8DDD0;border-radius:10px;padding:16px 20px;font-size:15px;font-weight:500;color:#1B3A5C;display:flex;align-items:center;gap:10px"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A8A7D" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg> '+a+'</div>';
    });
    actEl.innerHTML=h;
  }

  // Inclusions
  var incs=['Round-trip transportation from NYC to Camp Eagle Hill','All meals and snacks for the full week','Cabin housing with full bathrooms','All activities and programming materials','Gear and supplies','On-site medical coverage 24/7'];
  var incEl=document.getElementById('inclusions');
  if(incEl){
    var h='';
    incs.forEach(function(item){
      h+='<div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:14px"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A8A7D" stroke-width="2.5" stroke-linecap="round" style="flex-shrink:0;margin-top:2px"><polyline points="20 6 9 17 4 12"/></svg><span style="font-size:15px;color:#2C2C2C">'+item+'</span></div>';
    });
    incEl.innerHTML=h;
  }

  // Steps
  var steps=[['1','Fill Out the Interest Form','Basic info: name, age, grade, contact. Takes 2 minutes.'],['2','We\u2019ll Reach Out','Our team contacts your family to answer questions.'],['3','Complete Enrollment','Finish registration and submit your $50 refundable deposit.'],['4','Get Ready for Camp','Receive your packing list and travel details. Deposit returned at check-in.']];
  var stepsEl=document.getElementById('steps');
  if(stepsEl){
    var h='';
    steps.forEach(function(s){
      h+='<div class="card" style="text-align:center"><div style="width:44px;height:44px;border-radius:50%;background:#E8793A;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-weight:700;font-size:20px;color:#fff">'+s[0]+'</div><h4 style="font-size:16px;font-weight:700;color:#1B3A5C;margin-bottom:8px">'+s[1]+'</h4><p style="font-size:14px;line-height:1.6;color:#5A5A5A">'+s[2]+'</p></div>';
    });
    stepsEl.innerHTML=h;
  }

  // Giving tiers
  var tiers=[['$50','Covers round-trip transportation for one camper from Harlem to Camp Eagle Hill.','#D64B8A'],['$200','Funds one camper\u2019s full week \u2014 transportation, meals, housing, and all programming.','#E8793A'],['$500','Sponsors multiple campers and helps cover program materials and staff training.','#1A8A7D']];
  var tierEl=document.getElementById('givingTiers');
  if(tierEl){
    var h='';
    tiers.forEach(function(t){
      h+='<div style="background:#FDFAF6;border-radius:16px;padding:32px;border:2px solid '+t[2]+';text-align:center"><div style="font-size:44px;font-weight:800;color:'+t[2]+';margin-bottom:12px">'+t[0]+'</div><p style="font-size:15px;line-height:1.6;color:#5A5A5A;margin-bottom:20px">'+t[1]+'</p><button style="background:'+t[2]+';color:#fff;padding:12px 28px;border-radius:8px;font-size:15px;font-weight:600">Give '+t[0]+'</button></div>';
    });
    tierEl.innerHTML=h;
  }
}

window.onload=init;
