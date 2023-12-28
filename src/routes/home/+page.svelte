<script>
    import {goto} from '$app/navigation';

    function onTapMovePage(url){
        goto(url);
    }
</script>





<section>
	<button on:click={() => onTapMovePage('/map')}>네이버 지도 연동</button>
	</section>
	<section>
	<button on:click={() => onTapMovePage('/notebook')}>노트 형식</button>
	</section>
	<section>
        <button on:click={() => onTapMovePage('/scroll')}>쇼핑몰 상세 페이지 Sticky tab</button>
	</section>
	<section>
        <button on:click={() => onTapMovePage('/qrcode')}>QR코드 만들기</button>
	</section>
    <section>
        <button on:click={() => onTapMovePage('/focus')}>현재 창 포커스 확인</button>
	</section>
    <section>
        <button on:click={() => onTapMovePage('/form')}>폼 내부 정보 확인</button>
	</section>
    <section>
        <button on:click={() => onTapMovePage('/about')}>플로팅/바텀팝업 UI 구성</button>
	</section>



    <style>
@import url(https://fonts.googleapis.com/css?family=Varela+Round);



* {
  margin: 0;
  padding: 0;
  font-family: 'Varela Round';
  font-size: 100%;
}

section {
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  background-color: #F5F5F5;
  padding: 3em 0;
 
}

button {
  background-color: #fff;
  display: block;
  color:  #505050;
  margin: 0 auto;
  border: 2px solid  #505050;
  text-transform: capitalize;
  font-size: 0.8em;
  padding: 10px 0;
  width: 200px;

}
    </style>