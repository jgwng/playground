<script>
    import QR from './component/qr.svelte';
    let files;
    let fileInput;
    let avatar;
    let container;
    let codeValue = 'aaaaaaaaaaaaa';
    let option = {
        codeValue:'testtesttest'
    };

    const onFileSelected =(e)=>{
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            avatar = e.target.result;
            codeValue = "Your awesome text here...";
        };
}

</script>
  

  <input accept="image/png, image/jpeg" bind:files id="avatar" name="avatar" type="file" bind:this={fileInput} on:change={(e)=>onFileSelected(e)}/>


  <div class="qr-container" id='container' bind:this={container}>
    <QR 
        codeValue="Your awesome text here..."
        bind:backgroundImage ={avatar}
        />
  </div>
  
  <style>
    .qr-container {
        width: 100px;
        height: 100px;
      /* your styles for container here */
    }
  </style>