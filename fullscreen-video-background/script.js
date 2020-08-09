window.addEventListener("scroll",function(){
    let value=1+window.scrollY/-600;
    document.querySelector("video").style.opacity=value;
})