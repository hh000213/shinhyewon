$(document).ready(function(){
   // $('html, body').animate({
   //    scrollTop: 0
   // }, 200)

   //header 애니메이션
   $(window).scroll(function(){
      $('main > .scrollcontainer').each(function(){
         if($(this).offset().top <= $(window).scrollTop()){
            $('header ul li').removeClass('on')
            let idx = $(this).index()
            $('header ul li').eq(idx).addClass('on')
            // console.log('Section Index:', idx);
         }
      })

      //header mobile hide & show event
      // if($(window).width() <= 440){
      //    var scrollPosition = $(window).scrollTop()
      //    var headerShow = $('.profile').offset().top

      //    if(scrollPosition >= headerShow){
      //       $('header').css({
      //          'display' : `block`})
      //    }else{
      //       $('header').css({
      //          'display' : `none`
      //       })
      //    }
      // }

      //wellbg animation
      var scrollTop = $(window).scrollTop();
      var firstShow = $('.design .dswrap').offset().top
      var secondShow = $('.design .app').offset().top
      var thirdShow = $('.coding .clon').offset().top
      var fourthShow = $('.coding .redsgn').offset().top
      var fifthShow = $('.footer').offset().top


      if (scrollTop <= firstShow) {
         $(".wellbg1").css({"display": "block", "top": "80%" })
      } else if (scrollTop >  firstShow && scrollTop <= secondShow / 2) {
         $(".wellbg1").css({ "top": "40%" })
      } else if (scrollTop > secondShow / 2 && scrollTop <= secondShow) {
         $(".wellbg1").css({ "top": "20%" })
      } else if (scrollTop > secondShow) {
         $(".wellbg1").css({ "top": "0" })
      }

      if (scrollTop <= secondShow) {
         $(".wellbg2").css({ "display": "block", "top": "80%" })
      } else if (scrollTop > secondShow && scrollTop <= thirdShow / 2) {
         $(".wellbg2").css({ "top": "40%" })
      } else if (scrollTop > thirdShow / 2 && scrollTop <= thirdShow) {
         $(".wellbg2").css({ "top": "20%" })
      } else if (scrollTop > thirdShow) {
         $(".wellbg2").css({ "top": "0" })
      }

      if (scrollTop <= thirdShow) {
         $(".wellbg3").css({ "display": "block", "top": "80%" })
      } else if (scrollTop > thirdShow && scrollTop <= fourthShow / 2) {
         $(".wellbg3").css({ "top": "40%" })
      } else if (scrollTop > fourthShow / 2 && scrollTop <= fourthShow) {
         $(".wellbg3").css({ "top": "20%" })
      } else if (scrollTop > fourthShow) {
         $(".wellbg3").css({ "top": "0" })
      }

      if (scrollTop <= fourthShow) {
         $(".wellbg4").css({ "display": "block", "top": "80%" })
      } else if (scrollTop > fourthShow && scrollTop <= fifthShow / 2) {
         $(".wellbg4").css({ "top": "40%" })
      } else if (scrollTop > fifthShow / 2 && scrollTop <= fifthShow) {
         $(".wellbg4").css({ "top": "0" })
      } else if (scrollTop > fifthShow) {
         $(".wellbg4").css({ "top": "0" })
      }
   })

   $('header ul li').click(function(){
      $(this).addClass('on').siblings().removeClass('on')
      let idx = $(this).index()
      let section = $('main > .scrollcontainer').eq(idx)
      let sd = section.offset().top
      $('html, body').animate({
         scrollTop: sd,
      })
   })


   //appdesign 부분 버튼 애니메이션
   $('#busbtn a').click(function(e){
      e.preventDefault()
      $('#busbtn i').toggleClass('fa-arrow-right fa-arrow-left')
      $('#busbtn a').toggleClass('on')
      $('#busbtn').toggleClass('on')
      $('#busmoreimg').toggleClass('on')
      if($('#busbtn a').hasClass('on')){
         $('#busbtn a p').text(languageset[currentLang].close)
      }else{
         $('#busbtn a p').text(languageset[currentLang].open)
      }
   })
   $('#mtlbtn a').click(function(e){
      e.preventDefault()
      $('#mtlbtn i').toggleClass('fa-arrow-right fa-arrow-left')
      $('#mtlbtn a').toggleClass('on')
      $('#mtlbtn').toggleClass('on')
      $('#mtlmoreimg').toggleClass('on')
      if($('#mtlbtn a').hasClass('on')){
         $('#mtlbtn a p').text(languageset[currentLang].close)
      }else{
         $('#mtlbtn a p').text(languageset[currentLang].open)
      }
   })

   //언어변경버튼 클릭 애니메이션

   const languageset = {
      'ko':{
         home: '홈',
         prof: '프로필',
         desn: '디자인',
         codg: '코딩',

         walme: '신혜원',
         edd: '학력',
         grad1: '영남대학교 수학과 졸업',
         grad2: '대구혜화여자고등학교 졸업',
         
         lcs: '자격증',
         web: '웹디자인개발기능사 합격',
         pht: 'GTQ 포토샵 1급 합격',
         ill: 'GTQ 일러스트 1급 합격',
         opc: 'OPIC(영어) IH 취득',

         usdtool: '사용툴',

         resume: '이력서 보기',

         snsb: 'SNS 배너',
         dtpg: '상세페이지',
         logo: '로고 & 쇼핑몰',

         prcss: '프로세스',
         prttpe: '프로토타입',
         contri: '기여도 : ',
         tooll: '사용툴 : ',
         bsttl: '대구 버스 앱 아노나',
         mtttl: '마음 안정 앱',
         open: '열기',
         close: '닫기',
         
         orig: '기존 사이트',
         result: '코딩 결과',
         clcd: '클론 코딩',
         rdcd: '리디자인 코딩',

         gwa: '광주어린이박물관',
         kln: '코오롱 ENP',
         clnmore: '추가 예정',
         lush: '러쉬',
         halal: '할랄가이즈 코리아',
         watr : '대구 상수도사업 본부',

         thx: '감사합니다!'
      },
      'en':{
         home: 'HOME',
         prof: 'PROFILE',
         desn: 'DESIGN',
         codg: 'CODING',

         walme: 'Shin Hyewon',
         edd: 'EDUCATED',
         grad1: 'Yeungnam Univ. Mathematics Bachelor',
         grad2: 'Daegu Hyehwa Girls Highschool',
         
         lcs: 'LICENSEs',
         web: 'Craftsman Web Design Development',
         pht: 'Adobe Photoshop 1st Grade',
         ill: 'Adobe Illustration 1st Grade',
         opc: 'OPIC(english) IH level',

         usdtool: 'TOOLs',

         resume: 'Resume →',

         snsb: 'SNS Banners',
         dtpg: 'Details Webpage',
         logo: 'Logo & Online-mall',

         prcss: 'Process',
         prttpe: 'Prototype',
         contri: 'Contributed : ',
         tooll: 'Tools : ',
         bsttl: 'BUS Tracking App for Daegu',
         mtttl: 'Mental Health App',
         open: 'OPEN',
         close: 'CLOSE',
         
         orig: 'Original',
         result: 'Result',
         clcd: 'CLONE CODING',
         rdcd: 'RE-DESIGN CODING',

         gwa: 'Gwangjoo Museum',
         kln: 'Kolon ENP',
         clnmore: 'Coming soon',
         lush: 'Lush Korea',
         halal: 'Halal Guys Korea',
         watr : 'Daegu Waterworks HQ.',

         thx: 'Thank you for your visiting!'
      }
   }

   let currentLang = localStorage.getItem('language') || 'ko'
   const buttonState = localStorage.getItem('buttonState') || 'off';

   $('#home').text(languageset[currentLang].home)
   $('#prof').text(languageset[currentLang].prof)
   $('#desn').text(languageset[currentLang].desn)
   $('#codg').text(languageset[currentLang].codg)

   $('#namecard h1').text(languageset[currentLang].walme)
   $('#educated h1').text(languageset[currentLang].edd)
   $('#grad1').text(languageset[currentLang].grad1)
   $('#grad2').text(languageset[currentLang].grad2)

   $('#license h1').text(languageset[currentLang].lcs)
   $('#web').text(languageset[currentLang].web)
   $('#pht').text(languageset[currentLang].pht)
   $('#ill').text(languageset[currentLang].ill)
   $('#opc').text(languageset[currentLang].opc)

   $('#tools h1').text(languageset[currentLang].usdtool)
   $('.resume a').text(languageset[currentLang].resume)

   $('.banner h1').text(languageset[currentLang].snsb)
   $('.page h1').text(languageset[currentLang].dtpg)
   $('.cns h1').text(languageset[currentLang].logo)

   $('.prcss').text(languageset[currentLang].prcss)
   $('.prttpe').text(languageset[currentLang].prttpe)
   $('.contri').text(languageset[currentLang].contri)
   $('.tooll').text(languageset[currentLang].tooll)
   $('.bus .cap h1').text(languageset[currentLang].bsttl)
   $('.mental .cap h1').text(languageset[currentLang].mtttl)

   $('.appmorebtn a p').text(languageset[currentLang].close)
   $('.appmorebtn a p').text(languageset[currentLang].open)

   $('.orig').text(languageset[currentLang].orig)
   $('.result').text(languageset[currentLang].result)
   $('.clon .titletxt h1').text(languageset[currentLang].clcd)
   $('.redsgn .titletxt h1').text(languageset[currentLang].rdcd)

   $('.clon #gwa h1').text(languageset[currentLang].gwa)
   $('.clon #kln h1').text(languageset[currentLang].kln)
   $('.clon #clonmore h1').text(languageset[currentLang].clnmore)
   $('.redsgn #lush h1').text(languageset[currentLang].lush)
   $('.redsgn #halal h1').text(languageset[currentLang].halal)
   $('.redsgn #water h1').text(languageset[currentLang].watr)
   $('.footer h1').text(languageset[currentLang].thx)


   if(buttonState === 'on'){
      $('.langbtn').addClass('on')
      $('.nod').addClass('on')
   }

   $('.langbtn .nod').click(function(){
      $('.langbtn').toggleClass('on')
      $('.nod').toggleClass('on')

      const nod = document.querySelector('.nod')

      if(nod.classList.contains('on')){
         currentLang = 'en'
      }else{
         currentLang = 'ko'
      }

      $('#home').text(languageset[currentLang].home)
      $('#prof').text(languageset[currentLang].prof)
      $('#desn').text(languageset[currentLang].desn)
      $('#codg').text(languageset[currentLang].codg)

      $('#namecard h1').text(languageset[currentLang].walme)
      $('#educated h1').text(languageset[currentLang].edd)
      $('#grad1').text(languageset[currentLang].grad1)
      $('#grad2').text(languageset[currentLang].grad2)

      $('#license h1').text(languageset[currentLang].lcs)
      $('#web').text(languageset[currentLang].web)
      $('#pht').text(languageset[currentLang].pht)
      $('#ill').text(languageset[currentLang].ill)
      $('#opc').text(languageset[currentLang].opc)

      $('#tools h1').text(languageset[currentLang].usdtool)
      $('.resume a').text(languageset[currentLang].resume)
   
      $('.banner h1').text(languageset[currentLang].snsb)
      $('.page h1').text(languageset[currentLang].dtpg)
      $('.cns h1').text(languageset[currentLang].logo)
   
      $('.prcss').text(languageset[currentLang].prcss)
      $('.prttpe').text(languageset[currentLang].prttpe)
      $('.contri').text(languageset[currentLang].contri)
      $('.tooll').text(languageset[currentLang].tooll)
      $('.bus .cap h1').text(languageset[currentLang].bsttl)
      $('.mental .cap h1').text(languageset[currentLang].mtttl)

      $('.appmorebtnbtn a p').text(languageset[currentLang].close)
      $('.appmorebtnbtn a p').text(languageset[currentLang].open)
   
      $('.orig').text(languageset[currentLang].orig)
      $('.result').text(languageset[currentLang].result)
      $('.clon .titletxt h1').text(languageset[currentLang].clcd)
      $('.redsgn .titletxt h1').text(languageset[currentLang].rdcd)
   
      $('.clon #gwa h1').text(languageset[currentLang].gwa)
      $('.clon #kln h1').text(languageset[currentLang].kln)
      $('.clon #clonmore h1').text(languageset[currentLang].clnmore)
      $('.redsgn #lush h1').text(languageset[currentLang].lush)
      $('.redsgn #halal h1').text(languageset[currentLang].halal)
      $('.redsgn #water h1').text(languageset[currentLang].watr)
      $('.footer h1').text(languageset[currentLang].thx)

      localStorage.setItem('language', currentLang)
      
      const newButtonState = nod.classList.contains('on') ? 'on' : 'off';
      localStorage.setItem('buttonState', newButtonState);
   })

   //dswrap 클릭 팝업
   $('.banner img').click(function(e){
      e.preventDefault()
      let imageSrc = $(this).attr('src')
      console.log(imageSrc)
      let idx = $(this).index()
      $('.popup .bnr.on').css({
         'background-image' : `url(${imageSrc})`
      })
      $('.popup').css({
         'overflow-y' : `hidden`
      })
      $('.popup div').removeClass('on')
      $('.popup').addClass('on')
      $('.bnr').addClass('on')
      $('.popup button').addClass('on')
   })


   //디자인 파트 팝업창
   document.querySelector('.swmpl').addEventListener('click',  function(){
      window.open('images/swimminpool.pdf', '_blank');
   })
   document.querySelector('.stnly').addEventListener('click', function(){
      window.open('https://hh000213.cafe24.com/', '_blank');
   })
   $('.page img').click(function(e){
      var img = $(this).attr('src')
      if(img === 'images/perfume.jpg'){
         $('.popup .dtl img').attr('src', 'images/glossier.jpg')
      }else if(img === 'images/iceone.jpg'){
         $('.popup .dtl img').attr('src', 'images/ben1.jpg')
      }else if(img === 'images/icetwo.jpg'){
         $('.popup .dtl img').attr('src', 'images/ben2.jpg')
      }else if(img === 'images/cafrisun.jpg'){
         $('.popup .dtl img').attr('src', 'images/cafri_1.gif')
      }

      $('.popup').css({
         'overflow-y' : `scroll`
      })
      $('.popup div').removeClass('on')
      $('.popup').addClass('on')
      $('.popup .dtl').addClass('on')
      $('.popup button').addClass('on')
   })

   $('.popup button').click(function(){
      console.trace();
      $('.popup').removeClass('on')
      $('.popup button').removeClass('on')
   })

   //wellbg animation

})

//maintop 이름 호버 효과
var nameElmt = document.getElementsByClassName('animate__animated');
for (var i = 0; i < nameElmt.length; i++) {
      nameElmt[i].addEventListener('mouseenter', function(){
         this.classList.add("animate__jello");
         this.addEventListener("animationend", function(){
            this.classList.remove("animate__jello");
         }, false);
      })
}
