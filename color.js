function change(){
    let store = document.querySelector('#d1');
    store.style.backgroundColor = 'grey';
    store.style.borderRadius ='50%';
    store.style.scale = '0.8';
    store.style.transition = 'all 1s';
    store.style.width = '100px';
    store.style.height = '100px';
    store.style.margin = '0 auto';
    store.style.transform = 'rotate(360deg)';
}
function change2(){
    let store = document.querySelector('#d2');
    store.style.backgroundImage = ('url("https://lh3.googleusercontent.com/pw/AP1GczOdeUBL4IvbaOvfoma4r9gQJ6BY-81gBztdGMO21UR5Ng9WZTY0oTZnJ-FyVqvJCbt2_dWSYE3BhebG5RdjeQAL8v1KUdJxUWx4Idepjo1QO8_IKKWbtI3qs1KUcUQtMvVdiBzIDCGm3gm3GabpOY_5xgL0MG65ECb0UVEvkX1z3gfzp02gnAKWDKGBFWUGZPtEBL82HOA23bsoL6raAKESQTurftMzDcL7r6k27uuRwJx6Y7WEgcN3wiEfY85Xgbd91GueMIGtJl0BpWDeGv_HpoBTcXa7rihx7civO9zV_ISoN2HvZLSXmKhDPZ5g2JrhvjhsgwuxpbcYdHhTnTy05SsqzsKXJjsHSsfaZM0cyya4YBDT5p98JAWBLFqiUVC1eWLa9pEi4HDFUc6LFNOgX3OhJGoxmhv1BmprCAENxUvK_CLqBnCpVbvc1A9Pou9zsITEt0MMRtJ63x30sEdliLmEm3QrHqH4gKZTM8YXIwQ3LqRuSOppt7esBSvVKYYNSG_URyqYVNMKg7a1KNfjWH1ntQ_kLoNHiBtFTPKrAQ78F-2yn61di_WQuTbYx7JfeySpigm6fjuJGtpiWmO-Qd-WSUsEUmlsbSjhoc4eLQ5i7HDGJDKJ5cT8HFnp1Z12d_BfTa_5ImMF6DAX92ozrjnrTgddzsweXe8BQXwlMNmOcvR5xGNcX4_MZ6MHGS9x9BH8UUV6LzJXcfFJDGTeWVBPrtmQx4Y5_k2YWuDQ5hmq-TsyBcEBTr6CzY3KHJW6cM4sFE1bCUWanjdQlewYAAMzYxsxgFj1-uuXf2B1j0CxPpGVtp-tdKUue6KWR0qJmjA8kICFa-eI696EGzznzh8FQAArsa2LcFabVRD3WwiCJMeP8UicDmcXiPXpt8u2Js6Eeuc3fYo_EfJCXjzWVQ=w1280-h576-s-no-gm?authuser=0")')
    store.style.backgroundSize = 'cover';
    store.style.backgroundPosition = 'center';
    store.style.borderRadius = '100%';
    store.style.transition = 'all 5s';
    store.style.width = '500px';
    store.style.height = '500px';
    store.style.margin = '0 auto';
    store.style.transform = 'rotate(360deg)';
    
}

let time = 500;
setTimeout(callbackfunction,time)

function callbackfunction(){
    let design = `<div id = "card"><span class="close-btn" onclick="close1()">&times;</span></div>`;
    document.querySelector('#output').innerHTML = design;   
}
function close1(){
  document.querySelector('#output').innerHTML = "";

  }

// Get all close buttons
const closeBtns = document.querySelectorAll('.close-btn');

// Add event listener to each close button
closeBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // Get the parent card element
    const card = e.target.parentNode;

    // Remove the card
    card.remove();
  });
});
$('.close-btn').on('click', function() {
    $(this).parent().remove();
  });

