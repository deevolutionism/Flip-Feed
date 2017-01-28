"use strict";
import React, {Component} from "react";
import ReactDom from "react-dom";
import ContentList from "./ContentList";
import $ from "jquery";

const version = '0.2.0';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[],
      newPost:""
    };
    this.getData = this.getData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  getData() {
    $.ajax({
      type: "GET",
      url: "https://gentrydemchak.com/api/posts",
      dataType: "json",
      success: (data) => {
        console.log('Got data');
        console.log(data);
        this.setState({
          posts:data.posts
        });
        return data;
      },
      error: (err) => {
        console.log(err);
        return err;
      }
    });
  }

  getPosts() {
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
    xhr.open("GET",'https://gentrydemchak.com/api/posts', true);
    xhr.send();
  }

  submitPost() {
    var val = $('.anon_input').text().trim();
    console.log(val);
    if (val){
      $.ajax({
       method: "PUT",
       url: "https://gentrydemchak.com/api/createPost",
       dataType: 'JSON',
       data: { text: val }
     })
     .done( ( msg ) => {
       console.log('payload sent');
       $('.anon_input').text('');
       this.setState({
         posts: this.getData()
       });
     });
    }
  }

  handleSubimtComment(comment) {
    if (comment) {
      console.log(comment);
      $.ajax({
       method: "PUT",
       url: "https://gentrydemchak.com/api/submitComment",
       dataType: 'JSON',
       data: comment
     })
     .done( ( msg ) => {
       console.log('payload sent');
       $('.anon_comment_input').text('');
       this.setState({
         posts: this.getData()
       });
     });
    }
  }

  handleInputChange(event) {
    this.setState({newPost: event.target.value});
  }

  handleEnter(event){
    //enter key = 13
    if (event.keyCode !== 13) {
				return;
			}

			event.preventDefault();

			var val = this.state.newPost;

			if (val) {
        console.log(val);
			  submitPost(val);
				this.setState({newPost: ''});
			}
  }

  componentDidMount() {
    this.setSate({
      posts:this.getData()
    });
  }


  render() {
    console.log('render');
    var icon = chrome.extension.getURL('icon-40.png');
    const posts = this.state.posts;
    console.log(posts);
    return (
      <div>
        <div className="anon_composer">
          <img src={icon}/>
          <span
            className="anon_input"
            data-ph="What's on your mind?"
            onChange={this.handleInputChange}
            onKeyDown={this.handleEnter}
            contentEditable="true"
          >
          </span>
          <p className="composer_input">This post will be completely anonymous. Speak your mind.</p>
          <button className="anon_button" id="postButton" type="button" onClick={this.submitPost}>Post</button>
        </div>
        <ContentList posts={posts}/>
      </div>
    )
  }
}

$('#pagelet_composer').append('<div id="anonymous_composer_ancor"></div>');
var content = document.getElementById('anonymous_composer_ancor');
console.log('hey there!');
content.append('<div>HEY IS THIS FUCKING WORKING?</div>');
ReactDom.render(<Index />, content);


/*/////////////////////////////////////////////////////////////
OBSERVER MODULE - used to detect new content loaded into
facebook as the user scrolls down. Posts then get injected
into the news feed.
/////////////////////////////////////////////////////////////*/

$(document).ready( () => {
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

});
