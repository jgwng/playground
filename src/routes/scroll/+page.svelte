<script>
    function onTapScrollPage(name){
        let location = document.querySelector(".area2").offsetTop;
        var menuHeight = document.querySelector(".flex-container").offsetHeight;
        window.scrollTo({ top: location-menuHeight, behavior: "smooth" });
    }
</script>

<div id="header" class="header" >header</div>
<div class="flex-container">
	<div class="item" on:click={() => onTapScrollPage()} aria-hidden="true">파인애플피자</div>
	<div class="item" on:click={() => console.log('')} aria-hidden="true">지코</div>
	<div class="item" on:click={() => console.log('')} aria-hidden="true">펩시</div>
</div>
<div id="content"  class="content">content</div>
<div id="area1"  class="area1">AREA1</div>
<div id="area2"  class="area2">AREA2</div>
<div id="area3"  class="area3">AREA3</div>
<style>

.flex-container {
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    align-items: stretch;
    top:0;
    background: white;
    position: sticky;
}

.item {
    margin: auto;
    justify-content: center;
    display: flex;
    align-items: center;
    height: 60px;
}

.header {
  background: red;
  height: 100px;
}

.content {
  background: green;
  height: 100vh;
}
.area1 {
  background: black;
  color: white;
  height: 100vh;
}
.area2 {
  background: yellow;
  color: black;
  height: 100vh;
}
.area3 {
  background: purple;
  color: white;
  height: 100vh;
}
</style>