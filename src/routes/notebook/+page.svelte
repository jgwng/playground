<script>
    let contents = '';
    let editableDiv;

    function getContent() {
        const content = editableDiv.innerHTML;
        console.log(content);
    }

</script>



<div class='body'>
    <div class="notepad">
        <div class="top"></div>
        <div class="paper" contenteditable="true" bind:this={editableDiv}
            on:input={() => console.log('Input event triggered')}
        >
          Hello, this is a paper.<br>
          Click to write your message.
        </div>
      </div>
</div>

<button on:click={getContent}>Get Content</button>

  <style>

.body {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 30px;
}
.notepad {
  width: 80%;
  max-width: 600px;
  box-shadow: 10px 10px 40px rgba(black, .15);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
}

.top {
  width: 100%;
  height: 50px;
  background: #333;
  border-radius: 5px 5px 0 0;
}

.paper {
  width: 100%;
  height: 100%;
  min-height: 90vh;
  padding: 35px 20px;
  background: repeating-linear-gradient(#F1EDE9, #F1EDE9 31px, #94ACD4 31px, #94ACD4 32px);
  font-family: 'Shadows Into Light', cursive;
  line-height: 30px;
  outline: 0;
  font-size: 18px;
}
  </style>