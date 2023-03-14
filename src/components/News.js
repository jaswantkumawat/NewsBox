import React, {useEffect , useState}from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
 
const [articles , setArticles] = useState ([])
const  [loading , setLoading] = useState (true)
const  [page , setPage] = useState (1)
const  [totalResults , setTotalResults] = useState (0)


const  updateNews = async() => {
  props.setProgress(10)
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
}
useEffect(()=>{
updateNews()
},[])



  /* handlePrevClick=async()=>{
    this.setState({page: this.state.page - 1})
    this.updateNews()
  }

  handleNextClick=async()=>{
    this.setState({page: this.state.page - 1})
    this.updateNews()
  } */
  
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles( articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    
  };

    return (
      <>
        <h1 className="text-center" style={{ margin: "30px 0px" , marginTop:"90px "}}>Top { props.category} HeadLines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles?.length !== totalResults}
          loader={<Spinner/>}
        >

          <div className="container">
            <div className="row">
              {articles && articles?.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} /></div>


              })}
            </div>
          </div>

        </InfiniteScroll>
      </>
    )
  }


  News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'General'

}


News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default News
