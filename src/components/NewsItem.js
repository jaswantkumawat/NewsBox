import React from 'react'

const NewsItem = (props) => {
    let {title,description,imageUrl,url,publishedAt , author , source}=props
    return (

       <div className="card my-3">
        <div>
        <span className="badge rounded-pill bg-danger" style={{display:"flex",justifyContent:"flex-end", position:"absolute" ,right:"0%"}}>{source}</span>
        </div>
        
      <img src={!imageUrl? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" : imageUrl} className="card-img-top"  alt=""/>
      <div className="card-body">
        <h5 className="card-title">{title}... </h5>
        <p className="card-text">{description}...</p>
        <a href={url}  rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
      </div>
      <div className="card-footer">
        <small className="text-muted">Author : {!author?"Unknown": author} <br/> Published On : {new Date(publishedAt).toGMTString()}</small>
      </div>
    </div>
  
    )
  }


export default NewsItem
