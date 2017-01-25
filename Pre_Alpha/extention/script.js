var posts = [];
var nextStream = 0;
var nextPost = 1;

var doTheThings = () => {
  createComposer();
  loadposts();
  posteventlistener();
  composeEditListener();
  reload();
}

var createComposer = () => {
  var icon = chrome.extension.getURL('icon-48.png');
  var input = `
  <div class="anon_compose">
    <img src=${icon}>
    <div>
      <span class="anon_input" contenteditable="true">What's on your mind?</span>
    </div>
    <p style="display:inline-block;color:lightgrey;margin-top:10px;">This post will be completely anonymous. Speak your mind.</p>
    <button class="anon_submit" id="postButton" type="button">Post</button>
  </div>
  `;
  $('#pagelet_composer').append(input);
}

var loadposts = () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // console.log(JSON.parse(xhr.responseText));
      posts = JSON.parse(xhr.responseText);
      // console.log(posts.posts[0]);
      console.log(posts);
      for(let i = 0; i<posts.posts.length; i++){
        populate(posts.posts[i],'#substream_0');
      }
    }
  }; // Implemented elsewhere.
  xhr.open("GET",'https://gentrydemchak.com/posts', true);
  xhr.send();
}

var populate = (post,targetid) => {
  // console.log(post);
  var icon = chrome.extension.getURL('icon-48.png');
  let text = post.text;
  let time = post.time;
  let id = post._id;
  console.log('appending post');
  $(targetid).prepend(
    `
    <div class="anon_compose anon_container" id="${id}">
      <div style="display:flex">
        <img class="icon" src=${icon}>
        <div style="display:inline-block; margin-left:10px;">
          <p class = "name" style="margin:0;"> Racoon</p>
          <p class = "time" style="margin:0;display:inline-block;color:lightgrey;margin-top:10px;">${time}</p>
        </div>
      </div>
      <div class="anon_text_container">
        <span class="anon_text">${text}</span>
      </div>
      <div style="border-top:1px solid white; padding-top:10px">
        <button class="anon_comment_button" onclick="submitComment()">Comment</button>
        <div class = "voting_container">
          <p class="like"><button class="like_button" id="${id}">like</button>0</p>
          <p class="dislike"><button class="dislike_button" id="${id}">dislike</button>0</p>
        </div>
      </div>
    </div>
    `
  )
}

var posteventlistener = () => {
  $(".anon_submit").click( () => {
    var posttext = $('.anon_input').text();
    console.log('sent');
    $.ajax({
      method: "PUT",
      url: "https://gentrydemchak.com/createPost",
      dataType: 'JSON',
      data: { text:posttext }
    })
    .done( ( msg ) => {
        console.log(msg);
        populate(msg,'#substream_0');
        $('.anon_input').text('What\'s on your mind?');
    });
  });
}

var composeEditListener = () => {
  var composing = false;
  $('.anon_input').click( () => {
    var t = $('.anon_input').text();
    if(t == 'What\'s on your mind?'){
      composing = true;
    }
    if(composing){
      $('.anon_input').text('');
    } else {
      $('.anon_input').text('What\'s on your mind?');
    }
  });
}

var submitComment = () => {

}

var reload = () => {
  $('#u_0_3').click( () => {
    //wait until fb loads all of its content
    //so it doesn't overwrite all the posts.
    window.setTimeout(doTheThings, 3000);
  });
}

window.onload = () => {
  window.setTimeout(doTheThings, 8000);
};



var processinput = (form) => {
  alert(form);
}

var observer = new MutationObserver(function(mutations) {
	//collect each new post that the feed loads
	mutations.forEach(function(mutation) {
    var substreams = [];
		var numposts = mutation
      .target
      .childNodes[0]
      .childNodes[1]
      .childNodes[0]
      .childNodes[0]
      .childNodes[1]
      .childNodes[1]
      .childNodes[1]
      .childNodes[0]
      .childNodes[3]
      .childNodes[0]
      .childNodes[3]
      .childNodes[0]
      .childNodes.length

    //log the html of each new post
    for(var i = 0; i<numposts;i++){
      substreams.push(
        mutation
        .target
        .childNodes[0]
        .childNodes[1]
        .childNodes[0]
        .childNodes[0]
        .childNodes[1]
        .childNodes[1]
        .childNodes[1]
        .childNodes[0]
        .childNodes[3]
        .childNodes[0]
        .childNodes[3]
        .childNodes[0]
        .childNodes[i]
      );
    }

    console.log(`substreams:${substreams.length}`);
    console.log(`${nextPost} / ${posts.posts.length} posts`);
    if(nextPost < posts.posts.length && nextStream < substreams.length){
      var el = substreams[nextStream];
      var id = $(el).attr('id');
      console.log(`appending post to ${id}`)
      populate(posts.posts[nextPost],`#${id}`);
      nextPost++
      nextStream++
    }

	});
});

// Notify me of everything!
var observerConfig = {
	attributes: true,
	childList: true,
	characterData: true
};

// Node, config
// In this case we'll listen to all changes to body and child nodes
var targetNode = document.body;
observer.observe(targetNode, observerConfig);

var switchbutton = `<button class="switch_submit anon_submit" onclick="switchposttype()">Anon</button>`
$('#pagelet_composer ._ei_ > div.clearfix').prepend(switchbutton);

var switched = false;
var switchposttype = () => {
  //hide the original post box
  //show the anon post box
  if(switched !== true){
    $('#pagelet_composer').css('display','none');
    $('#pagelet_composer').append(input);
  }
}
