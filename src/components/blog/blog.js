import Style from './blog.module.scss'

function Heading(){
    return(
        <div className={`wow animate__animated animate__fadeInDown animate__delay-1s ${Style.blogHeading}`}>
            <h6>Recent News</h6>
            <h4>Check Our Blog <span>Posts</span></h4>
            <div className={Style.line}></div>
        </div>
    )
}
function Left(value){
    return(
        <div className={Style.blogPost}>
            <img className="w-full" src={value.blogLeft.src_img} />
            <div className={Style.downContent}>
                <span className={Style.category}>SEO Analysis</span>
                <span className={Style.date}>{value.blogLeft.dateUp}</span>
                <a href="#">
                    <h4>
                        {value.blogLeft.title}
                    </h4>
                </a>
                <p className="mb-8">
                    {value.blogLeft.content}
                </p>
                <span>
                    <img src="https://templatemo.com/templates/templatemo_568_digimedia/assets/images/author-post.jpg" />
                    {value.blogLeft.author}
                </span>
                <a className={Style.discoverMor}>
                Discover More
                </a>
            </div>
        </div>
    )
}
function Right({blogRight}){
    return(
            <ul className={Style.blogPosts}>
            {
                blogRight.map(function(item,index){
                    if(index !== 0){
                        return(
                            <li>
                                    <img src={item.src_img} />
                                    <div className="pt-5">
                                        <span className={Style.category}>{item.category}</span>
                                        <span className={Style.date}>{item.dateUp}</span>
                                        <a href="#">
                                            <h4>
                                                {item.title}
                                            </h4>
                                            <p className="mb-8">
                                                {item.content}
                                            </p>
                                        </a>
                                    </div>
                            </li>
                        )
                    }
                })
            }
            </ul>
    )
}
function Blog(){
    const blogPost = [
        { title: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adelore Eiusmod Tempor Incididunt',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers itii eiumod deis tempor incididunt ut labore.',
            src_img:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/blog-post-01.jpg',
            author:'By: Andrea Mentuzi',
            category:'SEO Analysis',
            dateUp:'03 August 2021'
        },
        { title: 'Lorem Ipsum Dolor Sit Amei Eiusmod Tempor',
            content:'Lorem ipsum dolor sit amet, cocteturi adipiscing eliterski.',
            src_img:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/blog-post-02.jpg',
            category:'SEO Analysis',
            dateUp:'24 September 2021'
        },
        { title: 'Lorem Ipsum Dolor Sit Amei Eiusmod Tempor',
            content:'Lorem ipsum dolor sit amet, cocteturi adipiscing eliterski.',
            src_img:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/blog-post-03.jpg',
            category:'SEO Analysis',
            dateUp:'24 September 2021'
        },
        { title: 'Lorem Ipsum Dolor Sit Amei Eiusmod Tempor',
            content:'Lorem ipsum dolor sit amet, cocteturi adipiscing eliterski.',
            src_img:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/blog-post-04.jpg',
            category:'SEO Analysis',
            dateUp:'24 September 2021'
        },
    ]
    return(
        <div className={Style.blog}>
            <div className="containerMe mx-auto">
                <Heading />
                <div className={`wow animate__animated animate__fadeInUp ${Style.blogCenter}`}>
                <Left
                    blogLeft = {blogPost[0]}
                />
                <Right
                    blogRight = {blogPost}
                />
                </div>
            </div>
        </div>
    )
}

export default Blog