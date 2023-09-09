import React from 'react';
import '../style/content.css';
import wood from "../img/woods.jpg";
import bridge from "../img/bridge.jpg";
import avatar from "../img/avatar_g.jpg";
import workshop from "../img/workshop.jpg"
import gondol from "../img/gondol.jpg";
import rock from "../img/rock.jpg";
import skies from "../img/skies.jpg";
import { useState } from 'react';

// Function to toggle comment section


const ContentTest = () => {

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const toggleCommentSection = () => {
        setShowComments((prevShowComments) => !prevShowComments);
    };
    const addComment = () => {
        if (newComment.trim() !== '') {
            setComments((prevComments) => [...prevComments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div className="blog-single gray-bg">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-lg-8 m-15px-tb">
                        <article className="article">
                            <div className="article-img">
                                <img src={wood} title="" alt="Nature" style={{ width: '100%' }} />
                            </div>
                            <div className="article-title">
                                <h3>TITLE HEADING</h3>
                                <p>
                                    Title description, <span className="subText">April 7, 2014</span>
                                </p>
                            </div>
                            <div className="article-content">
                                <p>
                                    Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
                                    Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
                                    enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
                                    congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
                                    vitae justo condimentum, porta lectus vitae, ultricies congue gravida
                                    diam no
                                </p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <button className="w3-btn w3-padding-large w3-white w3-border read-more">
                                    <b>READ MORE »</b>
                                </button>
                                <span className="comment">
                                    <b>Comments &nbsp;</b> <span className="tag">0</span>
                                </span>
                            </div>
                        </article>


                        <article className="article">
                            <div className="article-img">
                                <img src={bridge} title="" alt="Nature" style={{ width: '100%' }} />
                            </div>
                            {/* Blog entry content */}
                            <div className="article-title">
                                <h3>BLOG ENTRY</h3>
                                <p>
                                    Title description, <span className="subText">April 7, 2014</span>
                                </p>
                            </div>
                            <div className="article-content">
                                <p>
                                    Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
                                    Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
                                    enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
                                    congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
                                    vitae justo condimentum, porta lectus vitae, ultricies congue gravida
                                    diam no
                                </p>
                            </div>

                            {/* Comment section */}
                            <div className="d-flex justify-content-between align-items-center">
                                <button className="w3-btn w3-padding-large w3-white w3-border read-more">
                                    <b>READ MORE »</b>
                                </button>
                                <span className="comment">
                                    <b>Comments &nbsp;</b> 
                                    <span className='tag-circle'>{comments.length === 0
                                        ? '0'
                                        : `${comments.length} ${comments.length === 1 ? '' : ''
                                        }`}
                                    </span>
                                </span>
                            </div>
                            <div className="comment-section">
                                <button
                                    className="toggle-comments-button"
                                    onClick={toggleCommentSection}
                                >
                                    {showComments ? 'Hide Comments' : 'Show Comments'}
                                </button>
                                {showComments && (
                                    <div className="comments">
                                        <input
                                            type="text"
                                            placeholder="Add a comment..."
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                        />
                                        <button onClick={addComment}>Add Comment</button>
                                        <div className="comment-list">
                                            {comments.map((comment, index) => (
                                                <div key={index} className="comment-item">
                                                    {comment}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>


                        </article>
                    </div>
                    <div className="col-lg-4 m-15px-tb blog-aside">
                        {/* Author */}
                        <div className="widget widget-author">
                            <div className="widget-body">
                                <div className="media align-items-center">
                                    <div className="avatar">
                                        <img
                                            src={avatar}
                                            title=""
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h4>
                                        My Name
                                    </h4>
                                </div>
                                <p>
                                    Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.
                                </p>
                            </div>
                        </div>
                        {/* Latest Post */}
                        <div className="widget widget-latest-post">
                            <div className="widget-title">
                                <h3>Popular Posts</h3>
                            </div>
                            <ul className="hoverableItem">

                                <li className="padding-16">
                                    <img
                                        src={workshop}
                                        alt="Image"
                                        className="w3-left w3-margin-right"
                                        style={{ width: 50 }}
                                    />
                                    <span className="w3-large">Lorem</span>
                                    <br />
                                    <span>Sed mattis nunc</span>
                                </li>
                                <li className="w3-padding-16">
                                    <img
                                        src={gondol}
                                        alt="Image"
                                        className="w3-left w3-margin-right"
                                        style={{ width: 50 }}
                                    />
                                    <span className="w3-large">Ipsum</span>
                                    <br />
                                    <span>Praes tinci sed</span>
                                </li>
                                <li className="w3-padding-16">
                                    <img
                                        src={skies}
                                        alt="Image"
                                        className="w3-left w3-margin-right"
                                        style={{ width: 50 }}
                                    />
                                    <span className="w3-large">Dorum</span>
                                    <br />
                                    <span>Ultricies congue</span>
                                </li>
                                <li className="w3-padding-16 w3-hide-medium w3-hide-small">
                                    <img
                                        src={rock}
                                        alt="Image"
                                        className="w3-left w3-margin-right"
                                        style={{ width: 50 }}
                                    />
                                    <span className="w3-large">Mingsum</span>
                                    <br />
                                    <span>Lorem ipsum dipsum</span>
                                </li>
                            </ul>

                        </div>
                        {/* End Latest Post */}
                        {/* widget Tags */}
                        <div className="widget widget-tags">
                            <div className="widget-title">
                                <h3>Tags</h3>
                            </div>
                            <div className="widget-body widget-tagsbody">
                                <p>
                                    <a href="/Tag1" class="tag-1">Travel</a>
                                    <a href="/Tag2" class="tag-2">NewYork</a>
                                    <a href="/Tag3" class="tag-2">London</a>
                                    <span class="tag-2">IKEA</span>
                                    <span class="tag-2">NORWAY</span>
                                    <span class="tag-2">DIY</span>
                                    <span class="tag-2">Ideas</span>
                                    <br />
                                    <span class="tag-2">Baby</span>
                                    <span class="tag-2">Family</span>
                                    <span class="tag-2">News</span>
                                    <span class="tag-2">Clothing</span>
                                    <span class="tag-2">Shopping</span>
                                    <span class="tag-2">Sports</span>
                                    <br />
                                    <span class="tag-2">Games</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContentTest