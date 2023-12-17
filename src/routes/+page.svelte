<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { onMount } from 'svelte';
    import Axios from 'axios';
    import axios from 'axios';

	let map;
	Axios.interceptors.request.use(
    (config) => {
        // 로컬스토리지에 담겨있는 토큰 셋팅
		config.headers["X-Naver-Client-Id"] = 'q9krtjvnx7';
		config.headers["X-Naver-Client-Secret"] = '7TzZT6Q0TzlDNddSlA9JmMSg7esAeBYJljDqMJIc';
		config.headers["Content-Type"] = 'application/json';
        return config;
    },
    (error) => {
        // 요청을 보내기 전에 오류가 발생한 경우 오류 처리
        loading.set(false);
        return Promise.reject(error);
    }
	);

	onMount(() => {
		var mapOptions = {
			center: new naver.maps.LatLng(37.5112, 127.0981), // 잠실 롯데월드를 중심으로 하는 지도
    		zoom: 15
		};
		map = new naver.maps.Map('map', mapOptions);

		var marker = new naver.maps.Marker({
    		position: new naver.maps.LatLng(37.5112, 127.0981),
    		map: map
		});
	})

	function onTapAddMarker(){
		var mapOptions = {
		    center:  new naver.maps.LatLng(37.5527, 126.9873),
		    zoom: 15,
		    mapTypeControl: true
		};
		map = new naver.maps.Map('map', mapOptions);
		
		var newMarker = new naver.maps.Marker({
			map: map,
			position: new naver.maps.LatLng(37.5527, 126.9873),
			
    	});
		
		newMarker.setMap(map);
	}

	async function onTapCorsTest(){
		var config = {
			method: 'get',
			url: `https://map.naver.com/v5/api/search?caller=pcweb&type=all&page=1&displayCount=100&lang=ko&query=꽃봄`,
        
    };
      
    	const json = await axios(config);
	
	}



</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div id="map" style="width:100%;height:400px;"></div>

<button style="width: 150px; height=100px;" on:click={onTapCorsTest}>마커 추가해보기</button>
