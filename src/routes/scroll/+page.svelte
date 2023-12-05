<script>
    function onTapScrollPage(item){
        let location = document.querySelector(item.id).offsetTop;
        var menuHeight = document.querySelector(".row-container").offsetHeight;
        window.scrollTo({ top: location-menuHeight, behavior: "smooth" });
    }

    let menuList =[
      {'id':'.area1','menuNm':'영역1'},
      {'id':'.area2','menuNm':'영역2'},
      {'id':'.area3','menuNm':'영역3'},
      {'id':'.area4','menuNm':'영역4'},
    ];
</script>

<div id="header" class="header" >header</div>

<div class="row-container">
  {#each menuList as item}
    <a href="javascript:void(0);" on:click={() => onTapScrollPage(item)} class='item'>{item.menuNm}</a>
  {/each}
</div>

<div id="content"  class="content">content</div>
<div id="area1"  class="area1">AREA1</div>
<div id="area2"  class="area2">AREA2</div>
<div id="area3"  class="area3">AREA3</div>
<div id="area4"  class="area4">AREA4</div>
<style>

.row-container {
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
    text-decoration: none;
    font-family: Roboto;
}
.item:hover {
		color: var(--color-theme-1);
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
.area4 {
  background: blue;
  color: white;
  height: 100vh;
}
</style>